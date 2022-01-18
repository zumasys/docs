# PN1438  

<PageHeader />

## Description

The COL.HDG (COL.HDR/COL-HDR/COL-HDG) modifier does not work with single quotes if single_quotes_for_itemlist = true is set in the emaulation.

## Previous Release Behavior

With single_quotes_for_itemlist

```text
LIST mdf FIRSTNAME COL.HDG 'Given Name'
Parse Error: expecting QuotedString, found ''.
```

## Current Release Behavior

```
LIST mdf FIRSTNAME COL.HDG 'Given Name'

mdf. Given Name

0055 JASON     
0108 CLIVE     
0151 DOUG      
0155 JASON
...

Back to [5.8.5 Release Notes](./../README.md)

<PageFooter />
