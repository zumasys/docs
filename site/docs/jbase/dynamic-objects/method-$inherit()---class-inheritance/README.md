# Method: $inherit() - Class Inheritance

**Created At:** 12/5/2019 11:16:33 AM  
**Updated At:** 12/16/2019 10:18:09 AM  


The traditional way to implement inheritance is with a class hierarchy.

This example depicts a simple bank account class structure where we have a parent **DepositAccount** class and 2 child classes, **Checking** and **Savings**, where the former child class has a **cost** property and the latter child class has an **interest** property.

```
ID: class_account.jabba

$option self
method DepositAccount::DepositAccount()
    self->name = "<undefined>"
    self->balance = 0
    self->type = self->$classname()
end method

method DepositAccount::owner(owner)
    self->owner = owner
end method

method DepositAccount::balance(amount)
    self->balance = amount
end method

method DepositAccount::deposit(amount)
    self->balance = self->balance + amount
end method

method DepositAccount::withdraw(amount)
         self->balance = self->balance - amount
end method
```

```
ID: class_checking.jabba

$option self
method Checking::Checking()
    self->$inherit("DepositAccount")
    self->cost = 2500     ;* default of $25/month
end method
```

```
ID: class_savings.jabba

$option self
method Savings::Savings()
    self->$inherit("DepositAccount")
    self->interest_rate = 3         ;* default to 3%
end method
```

Note that the code has the compiler directive, **$option self**, which allows you to use **self** instead of **this** to reference the object's members. You can also set the use of **self** globally with the **JBC\_JPP2** environment variable. This way it would not be necessary to include **$option self**in the code, e.g.

```
set JBC_JPP2=self       [Windows]
export JBC_JPP2=self    [Unix]
```

Each child class inherits the properties from the **DepositAccount** class constructor and all of the **DepositAccount** class methods. If our client application doesn't assign a name or balance then it gets the default property from the constructor of the **DepositAccount** class. Each child class assigns a default to the properties that are specific to it.

We can now do something like this to create a checking account:

```
ID: checking.jabba

deposit_amount = sentence(1)
try
    account = new object("Checking")
    account->owner("Rich Bloke")
    account->deposit(iconv(deposit_amount, "MD2,$") + 0)   ;* adding 0 will throw an exception if the amount is not valid
    crt account->owner:" has a balance of ":oconv(account->balance, "md2,$"):"."
    crt "The cost of this account is: ":oconv(account->cost, "md2,$")
    crt account->$tojson(5)
catch ex
    crt ex->message_long
    stop
end try
```

Note that we are passing a deposit amount from the command line. In a real application, this would be obtained from a database.

Note also that the **owner**, **deposit** and **balance** methods are inherited from the **DepositAccount** class.

Let's run this code with a deposit amount of $1,000.00:

```
jsh ~ -->checking $1000.00
Rich Bloke has a balance of $1,000.00.
The cost of this account is: $25.00
{
    "owner":"Rich Bloke",
    "balance":100000,
    "type":"Checking",
    "cost":2500
}
```

If we pass an invalid amount to the program then an exception will be thrown:

```
jsh ~ -->checking %1000.00
Non-numeric value -- ZERO USED ,
Variable '(UNKNOWN)' , Line     5 , Source checking.jabba
```

If we added a new type of deposit account, say a money market, then nothing in the **DepositAccount**class would need to be changed.

But wait, we're missing an account number! Since all types of accounts have an account number then we could certainly add a new method to the **DepositAccount** class. But what if, in the future, we will have some other type of account, say a group of investment accounts that are unrelated to deposit accounts. In this case, we could create a top-level **Bank** class from which both **DepositAccount** and **InvestmentAccount** would inherit:

```
$option self
method Bank::Bank()
    self->account_number = sentence(1)
end method
```

The **DepositAccount** and **InvestmentAccount** constructors would then add this line:

```
self->$inherit("Bank")
```

e.g.

```
$option self
method DepositAccount::DepositAccount()
    self->$inherit("Bank")    ;* inherit from the Bank class
    self->owner = "<undefined>"
    self->balance = 0
    self->type = self->$classname()
end method
```

We could then refactor the methods that are common to all accounts to the **Bank** class.

In order to take advantage of these changes, we will change the **checking.jabba** client code to:

```
deposit_amount = sentence(2)
try
    account = new object("Checking")
    account->owner("Rich Bloke")
    account->deposit(iconv(deposit_amount, "MD2,$") + 0)
    crt "Account number: ":account->account_number
    crt account->owner:" has a balance of ":oconv(account->balance, "md2,$"):"."
    crt "The cost of this account is: ":oconv(account->cost, "md2,$")
    crt account->$tojson(5)
catch ex
    crt ex->message_long
    stop
end try
```

Running this code now will show this:

```
jsh ~ -->checking 123456 $1000.00
Account number: 123456
Rich Bloke has a balance of $1,000.00.
The cost of this account is: $25.00
{
    "account_number":"123456",
    "owner":"Rich Bloke",
    "balance":100000,
    "type":"Checking",
    "cost":2500
}
```

We are now passing 2 values, account number and deposit amount, on the command line. But again, these values would typically come from a database.

As a last point to make, there's really nothing preventing us from implementing multiple inheritance, that is inheriting from multiple classes, e.g.

```
self->$inherit("Bank", "Account")
```

But you would need to be cautious if the same method name was implemented in both classes. It that case, the **Bank** (left most) class would take precedence.
