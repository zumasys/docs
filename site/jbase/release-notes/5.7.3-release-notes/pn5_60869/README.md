# PN5_60869

**Created At:** 3/27/2019 9:58:24 AM  
**Updated At:** 6/29/2019 8:55:25 AM  
**Original Doc:** [pn5_60869](https://docs.jbase.com/61286-5-7-3-release-notes/pn5_60869)  
**Original ID:** 375018  
**Internal:** No  

## Description

**CREATE-ACCOUNT** does not respect **JEDI\_PREFILEOP** when it creates the MD

### Previous Release Behavior

By default, the **CREATE-ACCOUNT** command creates the MD as type **JD** (Dynamic).

Setting **JEDI\_PREFILEOP** with a type of **JP** or **J4** would cause CREATE-ACCOUNT to produce the following error when it attempted to create the MD:

```
Failed to create MD in new account!
[ 416 ] Illegal or missing modulo or separation
```

### Current Release Behavior

The type of the MD can now be overridden with JEDI\_PREFILEOP but only as types **JP** or **J4**.

The default is still type **JD** if **JEDI\_PREFILEOP** is not used.

Back to [5.7.3 Release Notes](./../README.md)
