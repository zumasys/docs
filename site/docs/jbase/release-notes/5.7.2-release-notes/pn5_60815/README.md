# PN5_60815

**Created At:** 2/14/2019 9:40:33 AM  
**Updated At:** 3/8/2019 9:06:15 AM  
**Original Doc:** [pn5_60815](https://docs.jbase.com/5-7-2-release-notes/pn5_60815)  


### Description

Paragraphs process inline prompts on commented lines [SD3291]



### Previous Release Behavior

This paragraph would process line 3:

```
001 PA
002 * DISPLAY hello
003 * LIST COUNTRIES WITH LANGUAGE = <<Language>> LANGUAGE COUNTRY_NAME
```



### Current Release Behavior

This behavior is now disabled by default.

To enable it, set the following emulation option:

```
para_has_uv_bug = true
```
