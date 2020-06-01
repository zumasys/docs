# NOT.MATCHING

<PageHeader />

The **NOT.MATCHING** selection operator is the inverse of [MATCHING](./../matching/README.md) and is used to comapre a field or EVAL expression against another field, EVAL expression or literal value to check whether the "value" of the first item does not match the pattern specified in the second.  

## Syntax

```
field NOT.MATCHING pattern
```

where:

**field** is the first field or EVAL expression to be compared
**pattern**  is the field, EVAL expression or literal value used as the pattern against which **field** is to be compared.

## Note

>Pattern matching strings are constructed from the rule table shown below.  
>When reading the table below, **n** refers to any integer number.

| Pattern | Explanation |
| --- | --- |
| nN | This construct matches a sequence of n digits. |
| nA | This construct matches a sequence of n alpha characters. |
| nC | This construct matches a sequence of n alpha characters or digits. |
| nX | This construct matches a sequence of any characters. |
| "string" | This construct matches the character sequence string exactly. |

>The pattern will be applied to all characters in **field** and it must not match all characters in **field** to evaluate as Boolean FALSE.
>The integer value **n** can be specified as 0. This will cause the pattern to match any number of characters of the specified type.

## Example

```
LIST BOOK_SALES WITH FORENAME NOT.MATCHING "CARL..."
```

Back to [Cross Reference](./../README.md)

<PageFooter />
