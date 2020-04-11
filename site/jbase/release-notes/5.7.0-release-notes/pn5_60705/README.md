# PN5_60705

<PageHeader />

### Description

SQL: Extended ACSII characters using SQLSELECT



### Previous Release Behavior

Using extended characters, char(128) to char(250), within quoted strings would cause a parse error:

```
Parse Error: expecting ''"'', found '0xC3'.
```



### Current Release Behavior

ASCII characters, char(128) to char(250), should now be allowed within quoted strings.

  
<PageFooter />
