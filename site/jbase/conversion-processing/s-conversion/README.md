# S Conversion

<PageHeader />

## Description

The S code substitutes one value for another. It is as:

```
S;Var1;Var2
```

where:

- **Var1** specifies the value to be substituted if the referenced value is not null or zero. Can be a quoted string, an FMC (field number), or an asterisk. An asterisk indicates that the value of the referenced field should be used.
- **Var2** specifies the value to be substituted if the referenced value is null or zero. Can be a quoted string, an FMC (field number), or an asterisk.

### Example 1

```
S;*;"NULL VALUE!"
```

If the referenced field is null, this example will return the string "NULL VALUE!". Otherwise it will return the referenced value.

### Example 2

```
S;*;3
```

If the referenced field is null, this example will return the content of field 3 of the data record. Otherwise it will return the referenced value.

### Example 3

```
S;4;5
```

If the referenced field is null, this example will return the content of field 5 of the data record. Otherwise it will return the content of field 4.

Back to [Conversion Processing](./../conversion-processing)
