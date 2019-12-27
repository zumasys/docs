# JBASE_LOCALE

**Created At:** 11/3/2017 3:09:41 PM  
**Updated At:** 8/8/2018 7:56:12 AM  
**Original Doc:** [jbase_locale](https://docs.jbase.com/41717-environment-variables/jbase_locale)  
**Original ID:** 284149  
**Internal:** No  


## Description

This environment variable sets the locale for UTF8, sorting and data collation sequences. It is required for use with Internationalization and should also be set when using jBASE Secondary Indexes.

## Values

Any valid locale. Use the **jlocales**command for a list of supported  locales.



## Default

None.



## Setting     

Normal environment variable, so it can be set at any time by the commands:

**Unix**

```
export JBASE_LOCALE=en_US
```

**Windows**

```
set JBASE_LOCALE=en_US
```



## Note: 


> It is a common misconception that a locale of C is the same as  en\_US. If a system defaults to a locale of C then it should be explicitly set system-wide to a value of **en\_US**.

