# PN5_60542

**Created At:** 6/9/2017 4:32:39 PM  
**Updated At:** 12/15/2017 8:51:53 PM  
**Original Doc:** [258528-pn5_60542](https://docs.jbase.com/36526-5-6-2-release-notes/258528-pn5_60542)  
**Original ID:** 258528  
**Internal:** No  


### Description

Case Independence: Allow the CHANGE() function to operate in a case insensitive fashion

### Previous Release Behavior

The CHANGE() function was not case insensitive, e.g.

```
consId = "123"
Template = "consid = changetext"
CRT CHANGE(template, "ChangeText", consId)
```

would return the original unchanged string:

```
consid = changetext
```

### Current Release Behavior

In D3 emulation, or with **case\_insensitive\_runtime\_strings** set in Config\_EMULATE, we now get:

```
consid = 123
```
