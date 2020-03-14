# PN5_60553

**Created At:** 6/13/2017 9:35:25 AM  
**Updated At:** 11/22/2017 3:16:11 AM  
**Original Doc:** [pn5_60553](https://docs.jbase.com/36526-5-6-2-release-notes/pn5_60553)  
**Original ID:** 258820  
**Internal:** No  

## Description

Case Independence: Fix miscellaneous issues with jformatcode

### Previous Release Behavior

- **RETURN("")** was being lowered as it was forced to be a function.
- **@SENTENCE[1]** had not catered for @VARS being used as substrings.
- **COMMON /xxx/ a,b,c** had not covered named common.

### Current Release Behavior

jformatcode now handles the above syntax.

Back to [5.6.2 release Notes](./../README.md)
