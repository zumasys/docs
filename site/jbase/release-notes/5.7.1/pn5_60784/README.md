# PN5_60784

<PageHeader />

## Description

jQL: Commas in conversion changes sort to left justified in BY / BY-DSND

### Previous Release Behavior

MD and MR conversions with a comma, e.g.

```
MR0,
```

would cause data to be in the wrong order.

For example, "1001" was formated as

```
1,001
```

causing the sort processor to put it at the top

```
1,000
   10
  991
```

### Current Release Behavior

The order should be fine as the sort processor ignores formatting for numeric data, e.g.

```
   10
  991
1,000
```

Back to [5.7.1 Release Notes](./../README.md)

  
<PageFooter />
