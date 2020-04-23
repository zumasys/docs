# Subroutines

<PageHeader />

jBASE jQL enables users to call Basic subroutines from within correlatives and conversions. There are two flavors of subroutine and each required a different INCLUDE file.

For Pick subroutines the developer must include the following header file from the "include" subdirectory in the jBASE release directory:

## qbasiccommonpick

### Note  

>Systems using the R83, AP or R91 emulations or custom emulations with Config\_EMULATE setting of "generic\_pick=true" will need to have a parameter added to the SUBROUTINE line to pass the jQL calculated value rather than passing that value in the newpick(12) array variable.

For Sequoia subroutines the developer must include the following header file from the **include** subdirectory in the jBASE release directory:  

## qbasiccommonseq

See also [Calling Subroutines from Dictionary Items](./../calling-a-subroutine-from-a-dictionary-item)

Back to [jBASE Query Language (jQL)](./../jbase-query-language/README.md)

<PageFooter />
