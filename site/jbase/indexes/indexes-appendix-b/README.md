# Indexes - Appendix B

<PageHeader />

**Tags:**
<badge text='file indexing' vertical='middle' />

A standard time and date format exists on many operating systems including Unix and Windows. This is called Universal Co-ordinated Time and is the number of seconds since 00:00:00 January 1st 1970. Confusingly it appears to have been given the acronym UTC (instead of UCT as you might expect).

Within a jBASE application the normal convention adopted by jBASE , for the purposes of legacy code compatibility, is that times are stored as seconds past 00:00:00 and dates stored as the number of days since 31st December 1967.

The way to convert from UTC to jBASE time and dates and vice-versa can be demonstrated by the following code segment

```
*
* Convert a UTC value to a displayable time and date
*
UTC = 866558733
internal.date = INT(UTC/86400)+732
internal.time = MOD(UTC,86400)
CRT "Date = ":OCONV(internal.date,"D")
CRT "Time = ":OCONV(internal.time,"MTS")
*
* Convert internal time and date to UTC
*
UTC2 = (DATE()-732)*86400 + TIME()
CRT "UTC2 = ":UTC2
```

One important aspect to remember is that the UTC is often in the base time of the operating system without any time zone applied. For example on UNIX systems you set the time and date of your system in UTC but then individual accounts may have different time zones applied. Thus if you create an index at what appears to be a time of say 10:40:29 then this could actually be a time of 11:40:29 but with a time zone of minus one hour applied.

Back to [Indexes](./../README.md)

<PageFooter />
