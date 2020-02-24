# JBASE_TIMEZONE

**Created At:** 11/3/2017 3:10:39 PM  
**Updated At:** 4/24/2019 4:24:12 PM  
**Original Doc:** [jbase_timezone](https://docs.jbase.com/41717-environment-variables/jbase_timezone)  
**Original ID:** 284150  
**Internal:** No  

**Tags:**
<badge text='get time offset' vertical='middle' />
<badge text='dst' vertical='middle' />

## Description

Setting this environment variable indicates the timezone to use for UTF8 timestamp conversion into local time for display.

## Values

Any valid timezone. Use the **jtimezones** command for a list of  supported timezone values.

## Default

Not set.

## Setting

## UNIX

```
export JBASE_TIMEZONE=EST5EDT
```

## Windows

```
set JBASE_TIMEZONE=EST5EDT
```

## Note

> More information on Internationalization can be found in the jBASE Internationalization manual.

Back to [Environment Variables](./../README.md)
