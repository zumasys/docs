# PN5_60733

<PageHeader />

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

  
<PageFooter />
