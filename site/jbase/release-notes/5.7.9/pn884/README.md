## PN884

<PageHeader />

## Description

jQL erroneously repeating multi-values

## Current Release Behavior

Prior to this patch:

* jQL was repeating multi-values when it should have been accumulating them as one value
* Math operations in dictionaries did not treat null as zero when **null_eq_zero = true** configuration option was set.

Back to [5.7.9 Release Notes](./../README.md)
  
<PageFooter />
