# CONVERT

**Created At:** 8/14/2017 9:55:46 AM  
**Updated At:** 10/25/2018 7:07:15 AM  
**Original Doc:** [266859-convert](https://docs.jbase.com/36868-jbase-basic/266859-convert)  


# Description

The **CONVERT** function is the function form of the [CONVERT](266857-convert-statement) statement. It performs exactly the same function but may also operate on an expression rather than being restricted to variables. The function takes the general form:

```
CONVERT(expression1, expression2, expression3)
```

Where:

- **expression1** is the string to which the conversion will apply.
- **expression2**is the list of all characters to translate in expression1.
- **expression3**is the list of characters that will be converted to.


# Note:


> For Prime, Universe and Unidata emulations:
> 
> - expression1 is the list of all characters to translate in expression1.
> - expression2 is the list of characters that will be converted to.
> - expression3 is the string to which the conversion will apply.


Examples of use are as follows:

```
OLD.VAL = "a,b,c;d,e|f,g;h,i"
NEW.VAL = CONVERT(OLD.VAL, ";,|", @AM:@VM:@SVM) ;! NEW.VAL now contains a]b]c^d]e\f]g^h]i
```



See also: [CONVERT Statement](266857-convert-statement).

Go back to [jBASE BASIC](263498-jbase-basic).

* * *
