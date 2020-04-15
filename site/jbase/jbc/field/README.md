# FIELD

<PageHeader />

**Tags:**
<badge text='string operations' vertical='middle' />

## Description

This function returns a multi-character delimited field from within a string. It takes the general form:

```
FIELD(string, delimiter, occurrence{, extractCount})
```

where:

- **string** specifies the string, from which the field(s) is to be extracted.
- **delimiter** specifies the character or characters that delimit the fields within the dynamic array.
- **occurrence** should evaluate to an integer of value 1 or higher. It specifies the delimiter used as the starting point for the extraction.
- **extractCount** is an integer that specifies the number of fields to extract. If omitted, assumes one.

## Note

> If the emulation option, jbase\_field, is set, then the field delimiter may consist of more than a single character, allowing fields to be delimited by complex codes.

An example of use is as:

```
in_Value = "AAAA : BBjBASEBB : CCCCC"
CRT FIELD(in_Value , ":", 3)
CRT FIELD(in_Value , "jBASE", 1)
```

to display:

```
 CCCCC
AAAA : BB
```

See also: [GROUP](./../group)

Go back to [jBASE BASIC](./../README.md)

Go back to [Programmers' Reference Guide](./../../reference-guides/jbc/README.md)

<PageFooter />
