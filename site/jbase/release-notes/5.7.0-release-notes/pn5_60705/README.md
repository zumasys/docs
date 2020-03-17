# PN5_60705

**Created At:** 2/20/2018 12:12:50 PM  
**Updated At:** 2/20/2018 12:14:15 PM  
**Original Doc:** [pn5_60705](https://docs.jbase.com/release-notes/pn5_60705)  
**Original ID:** 299967  
**Internal:** No  


### Description

SQL: Extended ACSII characters using SQLSELECT



### Previous Release Behavior

Using extended characters, char(128) to char(250), within quoted strings would cause a parse error:

```
Parse Error: expecting ''"'', found '0xC3'.
```



### Current Release Behavior

ASCII characters, char(128) to char(250), should now be allowed within quoted strings.
