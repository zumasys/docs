# CHANGETIMESTAMP

**Created At:** 7/24/2017 1:11:11 PM  
**Updated At:** 1/5/2018 12:16:44 AM  
**Original Doc:** [264326-changetimestamp](https://docs.jbase.com/36868-jbase-basic/264326-changetimestamp)  
**Original ID:** 264326  
**Internal:** No  

## Description

The **CHANGETIMESTAMP** function can be used to adjust existing timestamp to return a new timestamp value. It may take the form:

```
CHANGETIMESTAMP(Timestamp, Array)
```

Where the format of the adjustment array can be : Years^Months^Weeks^Days^Hours^Minutes^Seconds^Milliseconds

The function generates a new timestamp by adjusting an existing timestamp value using the elements specified in the dynamic array.

An example of usage is as follows:

```
    current_time = MAKETIMESTAMP(DATE(), TIME(), '')
    CRT "Current time in UTC is  " : current_time
    CRT "Current local time is   " : OCONV(OCONV(current_time, "U0FF0"),"MTS")
    CRT "Current local date is   " : OCONV(OCONV(current_time, "U0FF1"),"D4")
* Add 100 milliseconds
    adjusted_array = ''
    adjusted_array<8> = 100
    new_time = CHANGETIMESTAMP(current_time, adjusted_array)
    CRT "Adjusted time in UTC is " : new_time
    CRT "Adjusted local time is  " : OCONV(OCONV(new_time, "U0FF0"),"MTS")
    CRT "Adjusted local date is  " : OCONV(OCONV(new_time, "U0FF1"),"D4")
* Add 10 years
    adjusted_array<8> = ''
    adjusted_array<1> = 10
    new_time = CHANGETIMESTAMP(current_time, adjusted_array)
    CRT "Adjusted time in UTC is " : new_time
    CRT "Adjusted local time is  " : OCONV(OCONV(new_time, "U0FF0"),"MTS")
    CRT "Adjusted local date is  " : OCONV(OCONV(new_time, "U0FF1"),"D4")

```

which results in the following output:

```
Current time in UTC is  1585835025.1
Current local time is   14:43:45
Current local date is   02 APR 2020
Adjusted time in UTC is 1585835025.2
Adjusted local time is  14:43:45
Adjusted local date is  02 APR 2020
Adjusted time in UTC is 1901367825.1
Adjusted local time is  14:43:45
Adjusted local date is  02 APR 2030
```

Go back to [jBASE BASIC](./../README.md)

Go back to [Programmers' Reference Guide](./../../reference-guides/jbc/README.md)

  
<PageFooter />
