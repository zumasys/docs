# GROUP

<PageHeader />  

**Tags:**
<badge text='grouping' vertical='middle' />

## Description

The **GROUPSTORE** statement substitutes one group of characters with another group of characters.

```
GROUPSTORE from.var IN to.var USING start,replace{,delim}
```

| Syntax Elements | Description |
| --- | --- |
| **from.var** | is the string which will be inserted into the 'to.var' variable. |
| **to.var** | is the string which will be amended.
| **start** | is the starting group number in 'to.var' which will be replaced. If **start** is less than 0 then the absolute value of **start** is used. If **start** is zero then it defaults to 1. If **start** exceeds the number of groups in **to.var** then delimiters will be added as necessary. |
| **replace** | is the number of groups in **to.var** that will be replaced. If **replace** is greater than 0 then **replace** groups of **from.var** will replace **replace** groups in **from.var**. If **replace** is 0 then all of **from.var** will be inserted. If **replace** is less than 0, the absolute value of **replace** is used. |
| **delim** | This optionally specifies the delimiting character to use, with an attribute mark as a default. If the string is more than one character, only the first character is used. |

Go back to [jBASE BASIC](./../README.md)

Go back to [Programmers' Reference Guide](./../../reference-guides/jbc/README.md)
  
<PageFooter />
