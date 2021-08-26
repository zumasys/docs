# JBASE_TIMEZONE

<PageHeader />

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

> More information on Internationalization in jBASE can be found [here](./../../internationalization/jbase-internationalization/README.md).

Back to [Environment Variables](./../README.md)

<PageFooter />
