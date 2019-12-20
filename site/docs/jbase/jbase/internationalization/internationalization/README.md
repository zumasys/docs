# Internationalization

**Created At:** 8/16/2018 2:16:03 PM  
**Updated At:** 9/7/2018 8:30:29 AM  
**Original Doc:** [internationalization](https://docs.jbase.com/48777-internationalization/internationalization)  

**Tags:**
<badge text='languages' vertical='middle' />
<badge text='date format' vertical='middle' />
<badge text='currency format' vertical='middle' />
<badge text='internationalization' vertical='middle' />

## Description 

jBASE utilizes the internationalization support inherent in the environment but also provides five additional commands to override these facilities. The commands are:


| Command<br> | Explanation<br> |
| --- | --- |
| SET-DEC<br> | Set decimal point<br> |
| SET-MONEY<br> | Set currency symbol<br> |
| SET-THOUS<br> | Set thousands separator<br> |
| SET-LANG<br> | Set language<br> |
| DATE-FORMAT<br> | Set date format<br> |


When the jBASE application executes the default setting are obtained from the default language settings. This language setting provides primary control over the currency symbol, decimal point character, thousands separator, and the textual names of the days of the week and months of the year.

The usual system defaults are:


| Parameter<br> | Default Value<br> |
| --- | --- |
| Currency<br> | **$**<br> |
| Decimal point<br> | **.**<br> |
| Thousands separator<br> | **,**<br> |
| Language<br> | **C**<br> |
| Months<br> | **January, February, March,...., December**<br> |
| Days<br> | **Monday, Tuesday,...., Sunday**<br> |
| Date format<br> | **mm/dd/yy**<br> |




## Note: 


> On Unix languages are usually found in the /usr/lib/locale directory, the LANG environment variable is usually set to /usr/lib/locale/C. The default language can be modified by the jBASE SET-LANG command.
> 
> On Windows the settings are controlled from the Regional Settings Applet on the control panel.


## 


## Language Modifiers

Once the jBASE Initialization has occurred then the language settings can be overridden with the additional jBASE utilities as follows:

- [**SET-DECIMAL**](https://www.jbase.com/r99/knowledgebase/manuals/3.0/30manpages/man/sup22_SET_DECIMAL.htm)


The SET-DEC command sets the decimal point output symbol to the specified character. It's general form is as:

```
SET-DEC Symbol
```

and an example of use is as:

```
SET-DEC 
```



- [**SET-MONEY**](https://www.jbase.com/r99/knowledgebase/manuals/3.0/30manpages/man/sup22_SET_MONEY.htm)


The SET-MONEY command sets the currency output symbol to the specified character. It's general form is as:

```
SET-MONEY Symbol
```

and may be used as:

```
SET-MONEY £
```



- [**SET-THOUS**](https://www.jbase.com/r99/knowledgebase/manuals/3.0/30manpages/man/sup22_SET_THOUS.htm)


The SET-THOUS command sets the thousands separator output symbol to the specified character. It's general form is as:

```
SET-THOUS Symbol
```

and may be used as:

```
SET-THOUS 
```



- [**SET-LANG**](set-lang)
- [**DATE-FORMAT**](date-format)

