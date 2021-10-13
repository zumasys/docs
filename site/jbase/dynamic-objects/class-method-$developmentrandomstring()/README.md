# Class Method: $development::randomstring()

<PageHeader />

## Description

The **randomstring()** method creates a random string of lowercase alphabetic characters.

## Syntax

```
$development::randomstring(nn)
$development->randomstring(nn)
```

## Arguments

| Argument | Description |
| --- | --- |
| nn | Number of random characters |

## Return value

A random string of a specified number of lowercase alphabetic characters.

## Example

```
rstring = $development::randomstring(42)
crt rstring
crt "Length = ":len(rstring)
```

Result:

```
omsdeomfxwuqgkkkuiixlgelkyxwawllkvcwldrbyr
Length = 42
```

## Notes

Back to [$development Class](./../class-$development/README.md)

<PageFooter />
