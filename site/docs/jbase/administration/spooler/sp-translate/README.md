# SP-TRANSLATE

**Created At:** 4/5/2018 8:48:15 AM  
**Updated At:** 1/24/2019 8:16:30 AM  
**Original Doc:** [306434-sp-translate](https://docs.jbase.com/44205-spooler/306434-sp-translate)  


## Description 

The command changes the translation table entry for the specified formqueue. It takes the general form:

```
SP-TRANSLATE formqueue table-number
```

where:

- formqueue is the formqueue to use the translation table.
- table-number is the number of the translation table entry.




The translation table comprises characters or character strings which are to be translated to alternative characters or character strings.

For example, a printing device may not perform an automatic carriage return when a form feed is executed, or it may not be capable of printing lower case characters. In this example, the translation table can be used to map a form feed character to a form feed followed by a carriage return character, and all lower case characters can be mapped to their upper case equivalents. Like this \f ]\f \r map form feed to form feed followed by carriage return (using char definition).
\141 ] \101 map ASCII lowercase “a” to uppercase “A” (using octal definition).

If used without arguments, the user will be prompted as follows:

```
FORMQUEUE TABLE#:
```




> ### Note: 
> 
> The translation table entry is only examined when the despooler is initiated. The despooling process must therefore be stopped and restarted to effect any changes made to either the formqueue assignment or the translation table.




Back to [Spooler.](./../jbase-spooler)
