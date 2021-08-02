# Quick Start on Dynamic Objects

<PageHeader />

This article is designed to get you started on created database/object classes for your business objects. We will be using the NorthWinds sample database from [https://github.com/zumasys/z2018](https://github.com/zumasys/z2018).  
The purpose of this article is to show how you can build reusable classes that handle all extract, transform and load ([ETL](https://en.wikipedia.org/wiki/Extract,_transform,_load)) work in and out of a PICK object.

Here is our layout for our pick record

| Attribute | Description | Associated |
| --- | --- | --- |
| 0 | Order ID |  |
| 1 | Customer Id |  |
| 2 | Employee Id |  |
| 3 | Order Date |  |
| 4 | Required Date |  |
| 5 | Shipped Date |  |
| 10 - @ | Product Id | Invoice Items |
| 11 - @ | Unit Price | Invoice Items |
| 12 - @ | Quantity | Invoice Items |
| 13 - @ | Discount | Invoice Items |

To start we are going to build a simple program that will open our NW.ORDERS file, read a record and call an internal subroutine to convert it to JSON.  Lets first build our simple template program.

## Note

>If you haven't loaded the sample database from Git then you will need to create a NW.ORDERS and NW.PRODUCTS file and create a sample record for id for 10254.

```
$options jabba

open "NW.ORDERS" to FILE.NW.ORDERS else stop "No NW.ORDERS File"

ID = "10254"

read RECORD from FILE.NW.ORDERS, ID else stop "Could no read 10254"

order = new object(); * create a blank object

gosub MVTOOBJECT

crt order->$tojson(1)
stop

OBJECTTOMV: *

return
```

All we have done so far is read in our Order record and built out a internal subroutine area to do our work.  After the work is done we will crt out our object.

Now lets start doing our ETL work.  Using our above layout lets start converting the information.  We are going to do this work in the MVTOOBJECT area.

```
MVTOOBJECT: *

order->orderid         = ID;                        * Our record Id
order->customerid      = RECORD<1>;                 * Customer Id
order->employeeid      = RECORD<2>;                 * Employee Id
order->orderdate       = oconv(RECORD<3>,"D4-");    * Order Date
order->requireddate    = oconv(RECORD<4>,"D4-");    * Required Date
order->shippeddate     = oconv(RECORD<5>,"D4-");    * Shipped Date

return
```

We have handled the static header information.  A note about dates.  To keep items simple we are showing dates with a normal D4- oconv which may display differently based on your language settings.  jSON defines no specific format for dates but most developers standardize on standard ISO format.

2017-05-11T00:00Z

If we run this program at this point we will get the following

``` json
{
        "orderid":"10254",
        "customerid":"CHOPS",
        "employeeid":"5",
        "orderdate":"07-11-1996",
        "requireddate":"08-08-1996",
        "shippeddate":"07-23-1996"
}
```

We now move on to our multi-value orders items in attributes 10 - 13.  Here we will show you how you add an array,  build each item as it's own object and then insert that object into your main order object.

```
MVTOOBJECT: *

order->orderid = ID; * Our record Id
order->customerid = RECORD<1>; * Customer Id
order->employeeid = RECORD<2>; * Employee Id
order->orderdate = oconv(RECORD<3>,"D4-"); * Order Date
order->requireddate = oconv(RECORD<4>,"D4-"); * Required Date
order->shippeddate = oconv(RECORD<5>,"D4-"); * Shipped Date

number_items = dcount(RECORD<10>,@VM); * get number of order items
order->items = new array(); * add an array to our object to store our detail items

for v = 1 to number_items
    item = new object(); * init our item object
    item->productid     = RECORD<10,v>;            * Product ID
    item->productdesc   = OCONV(RECORD<10,v>,'TNW.PRODUCTS;X;;1');  * Lets put the description in our object
    item->unitprice     = oconv(RECORD<11,v>,"MD2");                * Unit Price
    item->quantity      = RECORD<12,V>;                             * Quantity ordered
    item->discount      = oconv(RECORD<13,V>,"MD2");                * Discount
    order->items->$append(item); * append our item object into our items array
next v

return
```

Here we count out how many items we have.  We then add a blank array called items to our order object.  We then loop thru our values and build out a new item object for each detail order item.  We then append that object into our array.  When we run this program now our output should look like.

``` json
{
        "orderid":"10254",
        "customerid":"CHOPS",
        "employeeid":"5",
        "orderdate":"07-11-1996",
        "requireddate":"08-08-1996",
        "shippeddate":"07-23-1996",
        "items":[
                {
                        "productid":"24",
                        "productdesc":"10",
                        "unitprice":"3.60",
                        "quantity":"15",
                        "discount":"0.15"
                },
                {
                        "productid":"55",
                        "productdesc":"25",
                        "unitprice":"19.20",
                        "quantity":"21",
                        "discount":"0.15"
                },
                {
                        "productid":"74",
                        "productdesc":"4",
                        "unitprice":"8.00",
                        "quantity":"21",
                        "discount":"0.00"
                }
        ]
}
```

Lets now build a internal subroutine that converts a object back to a pick record.  The following is the final full program.  Keep in mind this program is a demonstration of building the mvtoobject and objecttomv code.  Usually this code would be in a RESTful module to either return a record or update a record.  The following example shows us first calling our "tojson" function.  We then modify the object, re-update our pick record, once again call our mvtoobject function and show the modified record.

```
$options jabba

open "NW.ORDERS" to FILE.NW.ORDERS else stop "NO NW.ORDERS FILE"

ID = "10254"

read RECORD from FILE.NW.ORDERS, ID else stop "COULD NOT READ 10254"

order = new object(); * create a blank object

gosub MVTOOBJECT

crt order->$tojson(1)

* Let's modify the shipped date

order->shippeddate = oconv(DATE(),"D4-")

* Lets duplicate one of our order items

item = order->items[0]
order->items->$append(item)

gosub ORDERTOOBJECT

order = new object(); * init our order back
gosub MVTOOBJECT

crt order->$tojson(1)

stop

MVTOOBJECT: *

order->orderid         = ID;                        * Our record Id
order->customerid      = RECORD<1>;                 * Customer Id
order->employeeid      = RECORD<2>;                 * Employee Id
order->orderdate       = oconv(RECORD<3>,"D4-");    * Order Date
order->requireddate    = oconv(RECORD<4>,"D4-");    * Required Date
order->shippeddate     = oconv(RECORD<5>,"D4-");    * Shipped Date

number_items = dcount(RECORD<10>,@VM); * get number of order items
order->items = new array(); * add an array to our object to store our detail items

for v = 1 to number_items
    item = new object(); * init our item object
    item->productid     = RECORD<10,v>;            * Product ID
    item->productdesc   = OCONV(RECORD<10,v>,'TNW.PRODUCTS;X;;1');  * Lets put the description in our object
    item->unitprice     = oconv(RECORD<11,v>,"MD2");                * Unit Price
    item->quantity      = RECORD<12,V>;                             * Quantity ordered
    item->discount      = oconv(RECORD<13,V>,"MD2");                * Discount
    order->items->$append(item); * append our item object into our items array
next v

return

ORDERTOOBJECT: *

RECORD<1>      = order->customerid
RECORD<2>      = order->employeeid
RECORD<3>      = oconv(order->orderdate,"D")
RECORD<4>      = oconv(order->requireddate,"D")
RECORD<5>      = oconv(order->shippeddate,"D")

numitems = order->items->$size()

RECORD<10>=''; RECORD<11>=''; RECORD<12>=''; RECORD<13>=''; * Init items array

for v = 1 to numitems
    item = order->items[v-1]
    RECORD<10,v> = item->productid
    RECORD<11,V> = iconv(item->unitprice,"MD2")
    RECORD<12,V> = item->quantity
    RECORD<13,V> = iconv(item->discount,"MD2")
next v

return
```

## Modifying this into a reusable class

Typically one could take the above code and build it into a subroutine and reuse the code.  With jBASE we now offer a Class method that gives you a more modern way of doing this.  Here we will go through re-factoring the above code into a Class module.

jBASE classes are very simple function based classes similar to javascript classes.  jBASE classes are really just a object with definable functions you can add (these are called methods).  In our above example we have already created all the pieces required

1. Object representing our Order
2. Two "methods/internal subroutines" to transform mv to json and json to mv.

First we are going to create our initial "Order" class.  This is done just like other programs with a few new additions.

ED BP Order.b

```
$options jabba
method Order::Order()
    this->id=""
    this->customerid=""
    this->employeeid=""
    this->orderdate=""
    this->requestedbydate=""
    this->shippeddate=""
    this->items = new array()
end method
```

You can now compile this and you have created your first Class.  Lets go over a few items

1. You can call your "program" anything  you want.   It does not affect your class at all.
2. the "method" item is what defines your class and it's name.  The syntax is:
    1. method &lt;class name&gt;::&lt;method/function name&gt;
3. A default constructor (called when the object is initialized) and de-constructor is called when the object is destroyed.  The constructor is the same name as the Class.  Therefore above you can see that we pre-build our object with blank values.
4. The "this" property allows you to modify your Class object which always exists.

Now, to actually use our new "Class" we reference the class when we build a new object.

```
ED BP TEST.CLASS
$options jabba
order = new object("Order")
crt order->$tojson(1)
```

When you run this, you will get the following output.

``` json
{
        "id":"",
        "customerid":"",
        "employeeid":"",
        "orderdate":"",
        "requestedbydate":"",
        "shippeddate":"",
        "items":[


        ]
}
```

Now let's refactor our internal subroutines into our Class Method.

```
$options jabba
method Order::Order()
    * called when created, we are going to open our file
    this->id=""
    this->customerid=""
    this->employeeid=""
    this->orderdate=""
    this->requestedbydate=""
    this->shippeddate=""
    this->items = new array()
    return this
end method

method Order::mvtoobject(ID,RECORD)

this->orderid         = ID;                        * Our record Id
this->customerid      = RECORD<1>;                 * Customer Id
this->employeeid      = RECORD<2>;                 * Employee Id
this->orderdate       = oconv(RECORD<3>,"D4-");    * Order Date
this->requireddate    = oconv(RECORD<4>,"D4-");    * Required Date
this->shippeddate     = oconv(RECORD<5>,"D4-");    * Shipped Date
number_items = dcount(RECORD<10>,@VM); * get number of order items
this->items = new array(); * add an array to our object to store our detail items
for v = 1 to number_items
    item = new object(); * init our item object
    item->productid     = RECORD<10,v>;            * Product ID
    item->productdesc   = OCONV(RECORD<10,v>,'TNW.PRODUCTS;X;;1');  * Lets put the description in our object
    item->unitprice     = oconv(RECORD<11,v>,"MD2");                * Unit Price
    item->quantity      = RECORD<12,V>;                             * Quantity ordered
    item->discount      = oconv(RECORD<13,V>,"MD2");                * Discount
    this->items->$append(item); * append our item object into our items array
next v
return 1

end method

method Order::objecttomv(ID,RECORD)

RECORD<1>      = this->customerid
RECORD<2>      = this->employeeid
RECORD<3>      = oconv(this->orderdate,"D")
RECORD<4>      = oconv(this->requireddate,"D")
RECORD<5>      = oconv(this->shippeddate,"D")

numitems = this->items->$size()
RECORD<10>=''; RECORD<11>=''; RECORD<12>=''; RECORD<13>=''; * Init items array

for v = 1 to numitems
    item = this->items[v-1]
    RECORD<10,v> = item->productid
    RECORD<11,V> = iconv(item->unitprice,"MD2")
    RECORD<12,V> = item->quantity
    RECORD<13,V> = iconv(item->discount,"MD2")
next v

return this

end method
```

We have created two new methods / "functions" in our Class.  These duplicate the objecttomv and mvtoobject internal subroutines we had before.  As you can see we can define variables to pass into our method, in this case our MV record and ID.

The major change to each "function" is we replace "order-&gt;" with "this-&gt;".  This is because we are in our Class and we access our object via the "this" property.  Outside that everything is basically the same.

We then modify our original testing program to use our methods.

```
$options jabba

open "NW.ORDERS" to FILE.NW.ORDERS else stop "No NW.ORDERS File"

ID = "10254"

read RECORD from FILE.NW.ORDERS, ID else stop "Could not read 10254"

order = new object("Order"); * create a blank object        <--

order->mvtoobject(ID,RECORD)                                <--

crt order->$tojson(1)

* Let's modify the shipped date
order->shippeddate = oconv(DATE(),"D4-")

* Lets duplicate one of our order items
item = order->items[0]
order->items->$append(item)

order->objecttomv(ID,RECORD)                                <--

order = new object("Order"); * init our order back          <--

order->mvtoobject(ID,RECORD)                                <--

crt order->$tojson(1)

stop
```

All the modified lines are indicated.  As you can see all the rest of the code is the same.  A few items to mention Classes.

1. They are really creating jBASE Functions.  But instead of having to perform a DEFFUN, it is replaced with the much easier order = new object("Order") syntax.
2. You can have a variable number of input args (Not shown in this example).
3. You have a private storage area for your Functions via your object.  This allows you to do what you would normally do in a Named Common inside your object.  The object can store any pick variable, including File Variables.
4. jBASE objects can also be stored in a Dimensioned array.

Pick has always been a type of object database/language.  With very structured Includes with Equates much of this can be duplicated.  But as you can see these structures are easier to work with.  You can extend your "Class" to have all your business logic for a particular object.  For example, if we wished to add a sales tax calculation we could add a new method to our class.  This, of course, is available today with subroutines but with Classes you can group all your logic into a single Class library.  You could even add a load and write a method to actually read and write your pick records to disk.

The real future power comes when we start using this defined structure to extend an IDE to start doing auto-complete for available methods and properties for a "Class" or object.

Back to [FAQ/How To](./../../faq/README.md)

<PageFooter />
