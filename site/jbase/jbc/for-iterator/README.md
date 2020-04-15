# FOR Iterator

<PageHeader />

## Description

The **FOR** iterator (available on jBASE 5.7.7 and later) is a generalised iterator to simplify and unify looping constructs. It is designed to iterate through dynamic objects and dynamic arrays. Each iteration successively extracts an element. In its simplest form, the loop is terminated when all elements have been extracted.

The **FOR** iterator can also be used for other variable types as explained below.

## Syntax

```
FOR element IN construct {SETTING setvar} {WHILE | UNTIL condition}

    ...statement(s)...

NEXT
```

```
FOR element IN construct {USING delimiter} {WHILE | UNTIL condition}

    ...statement(s)...

NEXT
```

Where:

**element** is the extracted element of the dynamic object or dynamic array in **construct**.

**construct** can be a dynamic object, a dynamic array or a string depending on context.

**setvar** is a dynamic object that contains additional information depending on the **construct**.

**delimiter** is the character used to separate each **element** in the **construct**.

**WHILE** or **UNTIL** can be used to terminate the loop based on some **condition**. When the **WHILE** clause is specified the loop will only continue with the next iteration if **condition** evaluates to a boolean _TRUE_. When the **UNTIL** clause is specified the loop will only continue with the next iteration if **condition** evaluates to boolean _FALSE_.

## Examples

### Example 1

This example iterates through an object with various properties.

```
$option jabba
obj = new object
obj->greeting = "Hello"
obj->the_answer = 42
obj->$setnull("nothing")
obj->$setboolean("true", @true)
for property in obj setting aux
    crt "Property: ":property
    crt "Key:      ":aux->key
    crt "Type:     ":aux->type
    crt
next
```

Produces the following output:

```
Property: Hello
Key:      greeting
Type:     string

Property: 42
Key:      the_answer
Type:     number

Property:
Key:      nothing
Type:     null

Property: 1
Key:      true
Type:     boolean
```

### Example 2

This example illustrates the use of the **USING** clause.

The program builds a multi-valued list of a Fibonacci sequence of numbers within the first 1,000,000 positive integers and then displays only those less then 1,000.

```
$option jabba

// Build a multi-valued list of a Fibonacci sequence of numbers
// within the first 1,000,000 positive integers
fib = ""
a = 0; b = 1
loop while b lt 1000000 do
    fib<1,-1> = b
    c = b
    b = a + b
    a = c
repeat

//Show all Fibonacci numbers less than 1,000
for n in fib using @vm while n lt 1000
    crt n : " " :
next
crt
```

Note that the **SETTING** clause, if used, is meaningless in this context.

Running this program displays:

```
1 1 2 3 5 8 13 21 34 55 89 144 233 377 610 987
```

### Example 3

This example iterates through a dynamic array (not an object).

```
$option jabba
rec = ""
rec<1> = "A" : @svm : "good" : @svm : "programmer" : @vm : "is"
rec<2> = "someone" : @vm : "who" : @svm : "looks" : @vm : "both" : @vm : "ways"
rec<3> = "before" : @svm : "crossing" : @vm : "a" : @vm : "one-way" : @svm : "street."
rec<4> = "--Doug Linder"
saying = ""
for val in rec setting ams
    saying := val : " "
    a = ams->attribute    ;* Which attribute it was found in
    m = ams->value        ;* Which value it was found in
    s = ams->subvalue     ;* Which sub-value it was found in
    // Check the validity of the settings returned
    if val ne rec<a,m,s> then
        crt "Iterating on a dynamic array failed! [Actual: " : val : "] [Expected: " : rec<a,m,s> : "]"
    end
next
crt saying
```

Running this program displays:

```
A good programmer is someone who looks both ways before crossing a one-way street. - Doug Linder
```

### Example 4

This program creates a file with 5 records and then proceeds to iterate through the file while displaying the full record and the additional information from the **SETTING** clause, which is a dynamic object that includes the **update_time**.

Using the **FOR** iterator to select a file gives a marked performance improvement.

```
$option jabba
filename = "demofile"
execute "delete-file " : filename capturing quiet
execute "make-demo-file 5 " : filename : " jd" capturing quiet  ;* See Notes section below
open filename to filevar else stop 201, filename
for rec in filevar setting setvar
    crt oconv(rec, "mcp")
    crt setvar->$tojson()
    crt "Key:         " : setvar->key
    crt "Update time: " : oconv(setvar->update_time, "u0ff0")"mth"
    crt
next
```

Here is the output from the program:

```
DANIEL^MURPHY^123 MAIN ST^SUITE 23^PORTLAND^MA^72344^(524) 555-2437^(524) 555-2437^danielm@spam.com^PSERIES]ASUS]HP]COMPAQ]ASUS^AIX]SOLARIS]HPUX]LINUX RH8]SOLARIS^IN2]D3]jBASE]QM]D3^1532]1331]1397]1834]462
{"key":"1","update_time":1586863612}
Key:         1
Update time: 07:26AM

DELLA^POGSON^1 MICROSOFT WAY^SUITE 23^NEW YORK^MA^12345^(524) 555-2437^(666) 246-0149^dellap@alice.com^XSERIES]ZSERIES]SOLARIS^LINUX RH8]NT]AIX^D3]U2]QM^480]1035]1304
{"key":"2","update_time":1586863612}
Key:         2
Update time: 07:26AM

PATE^KLEIN^10260 SW GREENBURG RD^APT 42^SYDNEY^NY^09284^(124) 555-1337^(524) 555-2437^patek@morespam.com^SOLARIS]DIGITAL]ZSERIES]ZSERIES]XSERIES^AIX]LINUX RH8]TRU64]SOLARIS]TRU64^QM]QM]QM]IN2]D3^1408]913]1641]872]774
{"key":"3","update_time":1586863612}
Key:         3
Update time: 07:26AM

RAPH^WATERS^42 MILLI WAYS^LEVEL 42^PORTLAND^MD^44223^(524) 555-2437^(125) 555-1337^raphw@compc.com^XSERIES]HP]ZSERIES]ASUS^SOLARIS]TRU64]AIX]LINUX RH9^IN2]ROS]D3]IN2^1183]1006]415]1731
{"key":"4","update_time":1586863612}
Key:         4
Update time: 07:26AM

TERRY^DEAN^42 MILLI WAYS^^SAN JOSE^CA^09284^(124) 555-1337^(124) 555-1337^terryd@mason.com^HP]HP]XSERIES]HP]SOLARIS]HP]HP]DIGITAL^AIX]LINUX RH7]LINUX RH7]LINUX RH9]SOLARIS]LINUX RH7]SOLARIS]AIX^jBASE]D3]jBASE]U2]ROS]U2]jBASE]ROS^989]180]1807]1647]1893]1770]352]745
{"key":"5","update_time":1586863612}
Key:         5
Update time: 07:26AM

```

### Example 5

This example illustrates the **FOR** iterator on a select-list:

```
$option jabba
filename = "demofile"
execute "delete-file " : filename capturing quiet
execute "make-demo-file 5 " : filename : " jd" capturing quiet
open filename to filevar else stop 201, filename
select filevar to select_list
for id in select_list
    read rec from filevar, id
    firstname = rec<1>
    lastname = rec<2>
    crt id, firstname : " " : lastname
next
```

Running the program produces the following output:

```
1       DAVID HARRIS
2       DOUG CLARKE
3       MIKE JOHNSON
4       PHILIP SMOOCH
5       PHILIP CLARKE
```

## Notes

The **make-demo-file** creates a random set of data, therefore the content of the file will differ each time the program is run.

Go back to [jBASE BASIC](./../README.md)

Go back to [Programmers' Reference Guide](./../../reference-guides/jbc/README.md)

<PageFooter />
