# R Conversion

<PageHeader />

## Description

The R code returns a value that falls within one or more specified ranges. It is as:

```
Rn,m{;n,m}...
```

where:

- **n** is the starting integer of the range. Can be positive or negative.
- **m** is the ending integer of the range. Can be positive or negative, but must be equal to or greater than **n**.

If the value does not fall within the range(s), a null will be returned.

## Input Conversion

Input conversion does not invert. It simply applies the range check to the input data.

### Example 1

```
R1,10
```

Will return any value that is greater than or equal to 1 and less than or equal to 10.

### Example 2

```
R-10,10
```

Will return any value that is greater than or equal to -10 and less than or equal to 10.

### Example 3

```
R-100,-10
```

Will return any value that is greater than or equal to -100 and less than or equal to -10.

Back to [Conversion Processing](./../conversion-processing)
