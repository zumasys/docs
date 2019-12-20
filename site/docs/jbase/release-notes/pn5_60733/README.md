# PN5_60733

**Created At:** 3/24/2018 10:03:30 PM  
**Updated At:** 3/24/2018 10:03:59 PM  
**Original Doc:** [pn5_60733](https://docs.jbase.com/release-notes/pn5_60733)  


### Description

Paragraphs: Inline prompts on comment lines not processed in the correct sequence



### Previous Release Behavior

Given the following paragraph:

```
001 PA
002 * <<Language>>
003 DISPLAY This line shows up before the inline prompt
004 LIST COUNTRIES WITH LANGUAGE = <<Language>> COUNTRY_NAME LANGUAGE ID-SUPP
```

the DISPLAY line would display before the inline prompt.



### Current Release Behavior

Inline prompts on comment lines are processed in the correct sequence.
