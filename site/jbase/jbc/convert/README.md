# CONVERT

<PageHeader />

## Description

**CONVERT** is the function form of the [CONVERT](./../convert-%28statement%29) statement. It performs exactly the same function but may also operate on an expression rather than being restricted to variables. The function takes the general form:

```
CONVERT(expression1, expression2, expression3)
```

Where:

- **expression1** is the string to which the conversion will apply.
- **expression2** is the list of all characters to translate in **expression1**.
- **expression3** is the list of characters that will be converted to.

## Note

> For Prime, UniVerse and UniData emulations:
>
> - **expression1** is the list of all characters to be converted.
> - **expression2** is the list of replacement characters.
> - **expression3** is the string to which the conversion will apply.

Examples of use are as follows:

```
    oldVal = "a,b,c;d,e|f,g;h,i"
    newVal = CONVERT(oldVal, ";,|", @AM : @VM : @SVM)
    CRT "Converted string is " : OCONV(newVal, "MCP")
```

which results in the following output:

```
Converted string is a]b]c^d]e\f]g^h]i
```

See also: [CONVERT Statement](./../convert-%28statement%29).

Go back to [jBASE BASIC](./../README.md)

Go back to [Programmers' Reference Guide](./../../reference-guides/jbc/README.md)

<PageFooter />
