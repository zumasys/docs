# PN5_60553

<PageHeader />

## Description

Case Independence: Fix miscellaneous issues with jformatcode

### Previous Release Behavior

- **RETURN("")** was being lowered as it was forced to be a function.
- **@SENTENCE[1]** had not catered for @VARS being used as substrings.
- **COMMON /xxx/ a,b,c** had not covered named common.

### Current Release Behavior

jformatcode now handles the above syntax.

Back to [5.6.2 Release Notes](./../README.md)

  
<PageFooter />
