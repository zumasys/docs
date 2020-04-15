# MATCHES

<PageHeader />  

**Tags:**
<badge text='string handling' vertical='middle' />

## Description

The **MATCH** or **MATCHES** function applies pattern matching to an expression. It takes the general form:

```
expression1 MATCHES expression2
```

Where:

- **expression1** may evaluate to any type. **expression2** should evaluate to a valid pattern matching string as described below.
- **expression1** is then matched to the pattern supplied and a value of Boolean TRUE is returned if the pattern is matched. A value of Boolean FALSE is returned if the pattern is not matched.

**expression2** can contain any number of patterns to match those separated by value marks. The value mark implies a logical OR of the specified patterns and the match will evaluate to Boolean TRUE if **expression1** matches any of the specified patterns.

The rule table shown below shows construction of pattern matching strings (n refers to any integer number).

| Pattern | Explanation |
| --- | --- |
| nN | this construct matches a sequence of n digits |
| nA | this construct matches a sequence of n alpha characters |
| nC | this construct matches a sequence of n alpha characters or digits |
| nX | this construct matches a sequence of any characters |
| "String" | This construct matches the character sequence string exactly. |

Applies the pattern to all characters in **expression1** and it must match all characters in the expression to evaluate as Boolean TRUE. Specify the integer value n as 0. This will cause the pattern to match any number of characters of the specified type.

## International Mode

When using the **MATCHES** statement in International Mode, the statement will use the currently configured locale to determine the properties according to the Unicode Standard for each character in the expression. i.e., is the character alpha or numeric?

Examples of use include:

```
IF Reply MATCHES "0N" THEN CRT "A match!"
```

to matches if all characters in **Reply** are numeric or **Reply** is a null string.

in the event it is necessary to check if a variable contains any number of numerics followed by the “.” character followed by 2 numeric characters. e.g. 345.65 or 9.99, it may be accomplished by for instance:

```
Reply MATCHES "0N'.'2N..."
```

To check if a variable consists of a string of 4 arbitrary characters followed by the ":" character then 6 numerics then the ";" character and then 2 alphabetic characters., one may go about it as follows:

```
var_Pattern = "4X':'6N';'2A"
matched = test_Var MATCHES var_Pattern
```

Go back to [jBASE BASIC](./../README.md)

Go back to [Programmers' Reference Guide](./../../reference-guides/jbc/README.md)

<PageFooter />
