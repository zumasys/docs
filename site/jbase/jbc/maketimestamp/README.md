# MAKETIMESTAMP

<PageHeader />  

**Tags:**
<badge text='system time' vertical='middle' />

## Description

The function generates a timestamp using a combination of **Internal Date**, **Internal Time** and **Timezone**. This takes the general form:

```
MAKETIMESTAMP(InternalDate, InternalTime, TimeZone)
```

The function to generates a timestamp using a specified **Timezone**. The **Internal Date** and **Internal Time** values are combined together with the time zone specification to return a UTC timestamp as decimal seconds.

An example of use is:

```
timestamp = MAKETIMESTAMP(DATE(), TIME(), "EST5EDT")
```

Note: The **jtimezones** command will list the available timezones.

Go back to [jBASE BASIC](./../README.md)

Go back to [Programmers' Reference Guide](./../../reference-guides/jbc/README.md)

<PageFooter />
