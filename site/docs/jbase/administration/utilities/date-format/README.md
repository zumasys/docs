# DATE-FORMAT

**Created At:** 9/7/2018 7:32:17 AM  
**Updated At:** 10/24/2018 10:30:42 AM  
**Original Doc:** [date-format](https://docs.jbase.com/46963-utilities/date-format)  
**Original ID:** 338129  
**Internal:** No  

## Description

The DATE-FORMAT command sets or resets the jBASE international date format flag - used when formatting dates for output by jBASE programs. The command takes the general form:

```
DATE-FORMAT (Options
```

where option may be:

- **I** - set to international date formatting, i.e. dd/mm/yy
- **D** - set to default language formatting, i.e. mm/dd/yy

If no options are specified, the command will default to the default language format. An example of use may be as:

```
CRT OCONV(11000,"D2/")
```

to display  02/11/98

or

```
jsh jim ~ -->DATE-FORMAT (I
CRT OCONV(9822,"D2/")
```

to display 11/02/98

See also [JBASE_LOCALE](./../../../environment-variables/jbase_locale/README.md)

See also [JBASE_PIVOT_YEAR](./../../../environment-variables/jbase_pivot_year/README.md)

Back to [Utilities](./../utilities)
