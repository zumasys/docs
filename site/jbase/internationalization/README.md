# Internationalization

**Created At:** 8/16/2018 2:16:03 PM  
**Updated At:** 9/7/2018 8:30:29 AM  
**Original Doc:** [internationalization](https://docs.jbase.com/48777-internationalization/internationalization)  
**Original ID:** 334570  
**Internal:** No  

**Tags:**
<badge text='languages' vertical='middle' />
<badge text='date format' vertical='middle' />
<badge text='currency format' vertical='middle' />
<badge text='internationalization' vertical='middle' />

## Description

jBASE utilizes the internationalization support inherent in the environment but also provides five additional commands to override these facilities. The commands are:

| Command | Explanation |
| --- | --- |
| SET-DEC | Set decimal point |
| SET-MONEY | Set currency symbol |
| SET-THOUS | Set thousands separator |
| SET-LANG | Set language |
| DATE-FORMAT | Set date format |

When the jBASE application executes the default setting are obtained from the default language settings. This language setting provides primary control over the currency symbol, decimal point character, thousands separator, and the textual names of the days of the week and months of the year.

The usual system defaults are:

| Parameter | Default Value |
| --- | --- |
| Currency | **$** |
| Decimal point | **.** |
| Thousands separator | **,** |
| Language | **C** |
| Months | **January, February, March,...., December** |
| Days | **Monday, Tuesday,...., Sunday** |
| Date format | **mm/dd/yy** |

## Note

> On UNIX, languages are usually found in the /usr/lib/locale directory, the LANG environment variable is usually set to /usr/lib/locale/C. The default language can be modified by the jBASE SET-LANG command.
>
> On Windows the settings are controlled from the Regional Settings Applet on the control panel.  
>  
> In most cases, these settings have been made redundant by the introduction of the [JBASE_LOCALE](./../environment-variables/jbase_locale/README.md) and [JBASE_TIMEZONE](./../environment-variables/jbase_timezone/README.md) environment variables.
>

## Language Modifiers

Once the jBASE Initialization has occurred then the language settings can be overridden with the additional jBASE utilities as follows:

- [SET-DECIMAL](./set-dec/README.md)
- [SET-MONEY](./set-money/README.md)
- [SET-THOUS](./set-thous/README.md)
- [SET-LANG](set-lang)
- [DATE-FORMAT](./../../../administration/utilities/date-format)

[Back to Knowledgebase](./../README.md)
