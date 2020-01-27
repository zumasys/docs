# MAKETIMESTAMP

**Created At:** 9/15/2017 10:12:15 AM  
**Updated At:** 11/27/2018 8:34:29 AM  
**Original Doc:** [276943-maketimestamp](https://docs.jbase.com/36868-jbase-basic/276943-maketimestamp)  
**Original ID:** 276943  
**Internal:** No  

**Tags:**
<badge text='system time' vertical='middle' />

# Description

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

Go back to [jBASE BASIC](./../jbase-basic-programmers-reference-guide).
