# PN5_60631

<PageHeader />

## Description

Case Independence: Correct a number of functions that failed if an argument was not a string

### Current Release Behavior

Prior  to this patch, the DCOUNT(), COUNT() and INDEX() functions would give  the wrong answer if the argument passed was not a string and **case\_insensitive\_runtime\_strings = true** configuration option is used.

Back to [5.6.2 release Notes](./../README.md)

  
<PageFooter />
