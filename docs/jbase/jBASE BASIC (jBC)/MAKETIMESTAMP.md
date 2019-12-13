# MAKETIMESTAMP

**Created At:** 9/15/2017 10:12:15 AM  
**Updated At:** 11/27/2018 8:34:29 AM  

**Tags:**
<badge text='system time' vertical='middle' />

# Description

The function generates a timestamp using a combination of **internal date**,**time** and **timezone**. This takes the general form:

```
MAKETIMESTAMP(InternalDate, InternalTime, TimeZone)
```



The function to generates a timestamp using a specified **time zone**. The**internal date**and**internal time** values are combined together with the time zone specification to return a UTC timestamp as decimal seconds.

An example of use is:

```
timestamp = MAKETIMESTAMP(DATE(), TIME(), "EST5EDT")
```

Note: The **jtimezones** command will list the available timezones.

Go back to [jBASE BASIC](263498-jbase-basic).
