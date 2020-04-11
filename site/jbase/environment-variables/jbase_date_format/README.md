# JBASE_DATE_FORMAT

<PageHeader />

## Description

This environment variable specifies the format of how dates are converted to/from internal and external date representations.

## Values

- 1- International (dd mm yyyy)
- 2 - USA (mm dd yyyy)
- 3 - Japanese (yyyymmdd)

Any other value defaults to USA format.

## Setting

This environment variable must be set before running any jBASE process.

For instance:

```
set JBASE_DATE_FORMAT=1  (Windows)
```

```
export JBASE_DATE_FORMAT=1  (UNIX)
```

## Note

> If JBASE\_DATE\_FORMAT is undefined then the Date Format is determined by **JBASE\_LOCALE** (if set). If **JBASE\_LOCALE** is also undefined then use ( UNIX) 'locale' ( LANG ) / ( Windows ) 'Region and Language'.

jQL dictionary items using the 'D' conversion code will also respect this environment variable (e.g. D4-).

The Japanese Date format is only relevant when using an ‘ICONV’ to convert a string, i.e. ‘20150331’ to an internal date (the internal date for '31 March 2015'). Japanese Date formats are NOT used in ‘OCONV’s ( other than ‘OCONV(x,’DI’) ).

Back to [Environment Variables](./../README.md)

  
<PageFooter />
