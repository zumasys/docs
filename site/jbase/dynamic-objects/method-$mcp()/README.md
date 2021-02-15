# Method: $mcp()

<PageHeader />

## Description

The **$mcp() method converts each non-printable character (X"00" - X"1F", X"80" - X"FB") to a period (.) and system delimiters (X"FC" - X"FF") are converted to their 7-bit ASCII character equivalents, i.e. "\\", "]", "^", "_" respectively.

## Syntax

```
var->$mcp()
```

## Arguments

None

## Example

```
$option jabba
jarray = "1":@am:"2":@vm:"3":@svm:"4":@im:"5"
crt jarray->$mcp()
```

Running this program displays:

```
1^2]3\4_5
```

<PageFooter />
