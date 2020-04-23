# W Conversion

<PageHeader />

## TimeStamps  

To provide for additional timestamp functionality, included is a suite of conversions supported in A,F and I types.  

This is to generate a timestamp, displayed for date and/or time in short, long, and full formats.  

These conversions also support non-Gregorian locales.  

```
W{Dx}{Tx}
```

The meaning of the components of the conversion is as follows:  

- **W** - Is a new conversion code so not to clash with existing conversions
- **D** - Date
- **T** - Time
- **x** - Format option:  
  - S = Short,  
  - M = Medium,  
  - L = Long,  
  - F = Full

### Example

“WDS” or “WTS” Short is completely numeric -> 12/13/52 or 3:30pm  
“WDM” Medium is longer -> Jan 12, 1952  
“WDL” or “WTL” Long is longer -> January 12, 1952 or 3:30:32pm  
“WDF” or “WTF” Full is specified completely.  

The following code:

```
CRT "WDS is " : OCONV(TIMESTAMP(), "WDS")
CRT "WTS is " : OCONV(TIMESTAMP(), "WTS")
CRT "WDM is " : OCONV(TIMESTAMP(), "WDM")
CRT "WDL is " : OCONV(TIMESTAMP(), "WDL")
CRT "WTL is " : OCONV(TIMESTAMP(), "WTL")
CRT "WDF is " : OCONV(TIMESTAMP(), "WDF")
CRT "WTF is " : OCONV(TIMESTAMP(), "WTF")
```

when run at 14:00 on April 23rd,2020 produced the following output:

```
WDS is 23/04/2020
WTS is 14:00
WDM is 23 Apr 2020
WDL is 23 April 2020
WTL is 14:00:02 GMT+01:00
WDF is Thursday, 23 April 2020
WTF is 14:00:02 United Kingdom Time
```

Back to [Conversion Processing](./../conversion-processing/README.md)

<PageFooter />
