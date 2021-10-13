# Method: $mcpu()

<PageHeader />

## Description

The **$mcpu()** method converts non-printable characters to present them the same way UNIX does, where 0x00 is `@^`, 0x01 to 0x1A are `@A` to `@Z` respectively and all other non-printable characters, including system delimiters, are converted as `\nnn` (where nnn is the octal equivalent).

## Syntax

```
var->$mcpu()
```

## Arguments

None

## Example

```
$option jabba
jarray = char(0):" ":char(1):" ":char(26):" ":@am:" ":@vm:" ":@svm:" ":@im
crt jarray->$mcpu()
```

Running this program displays:

```
^@ ^A ^Z \376 \375 \374 \377
```

Back to [Built-in Methods](./../dynamic-objects-built-in-methods/README.md)  

<PageFooter />
