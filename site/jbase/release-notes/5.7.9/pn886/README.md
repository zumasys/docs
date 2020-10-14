# PN886

<PageHeader />

## Descriptioon

Calling subroutine on attribute 7 returns incorrect value

## Current Release Behavior

Prior to this patch, with a CALL to a subroutine on attribute 7 and a correlative on attribute 8, the input value to the subroutine ignored the result of attribute 8 and instead used the return value from attribute 2.

Back to [5.7.9 Release Notes](./../README.md)
  
<PageFooter />
