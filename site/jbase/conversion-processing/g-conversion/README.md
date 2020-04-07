# G Conversion

<PageHeader /> 

## Description

G codes extract one or more contiguous strings (separated by a specified character), from a field value. The general form is as:

```
G{m}xn
```

where:

- **m** is the number of strings to skip. If omitted or zero, extraction begins with the first character.
- **x** is the separation character.
- **n** is the number of strings to be extracted.

The field value can consist of any number of strings, each separated by the specified character. The separator can be any non-numeric character, except a system delimiter.

If **m** is zero or null and the separator **x** is not found, the whole field will be returned. If **m** is not zero or null and the separator **x** is not found, null will be returned.

## Input Conversion

Input conversion does not invert. It simply applies the group extraction to the input data.

### Example 1

```
G0.1
```

If the field contains "123.45", 123 will be returned. You could also use "G.1" to achieve the same effect.

### Example 2

```
G2/1
```

If the field contains "ABC/DEF/GHI", GHI will be returned.

### Example 3

```
G0,3
```

If the field contains "ABC,DEF,GHI,JKL", ABC,DEF,GHI will be returned. Note that the field separators are included in the returned string.

Back to [Conversion Processing](./../conversion-processing)
