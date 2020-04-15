# DATE

<PageHeader />  

**Tags:**
<badge text='today format' vertical='middle' />
<badge text='today' vertical='middle' />

## Description

The **DATE** function returns the date in internal system form. This date is expressed as the number of days since December 31, 1967. It takes the general form:

```
DATE()
```

## Note

> The system and jBASE programs should manipulate date fields in internal form. They can then be converted to a preferred readable format using the [OCONV](./../oconv) function and the date conversion codes.

An example of use can be as:

```
CRT OCONV(DATE(), "D4")
```

To display today's date in the form: dd MMM yyyy.

See also: [TIMEDATE](./../timedate)

Go back to [jBASE BASIC](./../README.md)

Go back to [Programmers' Reference Guide](./../../reference-guides/jbc/README.md)

<PageFooter />
