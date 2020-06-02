# STAT

<PageHeader />

The **STAT** keyword is used to produce statistics for a given file or on particular fields in that file.

## Syntax

```
STAT file.name {field.name}
```

where:

**file.name** is the name of the file for which statistics are to be obtained.
**field.name** is the field for which statistics are to be obtained.

## Examples

The following query:

```
STAT BOOK_SALES
```

provides this output:

```
Statistics of record length :
total = 590512 average = 118.1024 count = 5000
```

Back to [Cross Reference](./../README.md)

<PageFooter />
