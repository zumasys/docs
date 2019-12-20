# JBASE_DATE_FORMAT

**Created At:** 11/3/2017 3:11:52 PM  
**Updated At:** 8/8/2018 7:53:03 AM  
**Original Doc:** [jbase_date_format](https://docs.jbase.com/41717-environment-variables/jbase_date_format)  


## Description

This environment variable specifies the format of how dates are converted to/from internal and external date representations.

## Values

- 1- International (dd mm yyyy)
- 2 -  USA (mm dd yyyy)
- 3 - Japanese (yyyymmdd)


Any other value defaults to USA format.



## Setting

This environment variable must be set before running any jBASE process.

For instance:

```
set JBASE_DATE_FORMAT=1  (Windows)
```

```
export JBASE_DATE_FORMAT=1  (Unix)
```



## Note: 


> If JBASE\_DATE\_FORMAT is undefined then the Date Format is determined by **JBASE\_LOCALE** (if set). If **JBASE\_LOCALE**is also undefined then use ( Unix) 'locale' ( LANG ) / ( Windows ) 'Region and Language'.


jQL dictionary items using the 'D' conversion code will also respect this environment variable (e.g. D4-).

The Japanese Date format is only relevant when using an ‘ICONV’ to convert a string, i.e. ‘20150331’ to an internal date (the internal date for '31 March 2015'). Japanese Date formats are NOT used in ‘OCONV’s ( other than ‘OCONV(x,’DI’) ).
