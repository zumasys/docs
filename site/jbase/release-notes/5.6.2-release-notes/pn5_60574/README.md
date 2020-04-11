# PN5_60574
<PageHeader /> 

## Description

jQL: Fix issue with CHAR(0) termination in record.

### Previous Release Behavior

When displaying a record with jQL, a CHAR(0) in the record would cause everything after the CHAR(0) to show as NULL. The actual data in the file is not affected.

For example,

```
<<char(0)>>pink floyd
dark side of the moon
1973
```

Doing...

```
LIST ALBUMS ARTIST TITLE YEAR
```

...would cause the whole record to display as NULL.

### Current Release Behavior

The whole record is accessible except for the attribute that contains the CHAR(0), which is truncated at the CHAR(0) position. IOW, this patch does not fix the issue of displaying \*A1 in the above example but will allow the rest of the record to be accessed.

Back to [5.6.2 release Notes](./../README.md)

  
<PageFooter />
