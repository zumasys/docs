# PN1299

<PageHeader />

## Description

Provide support for IEEE maths as the default run-time arithmetic instead of scaled integer

## Previous Release Behavior

The default maths algorithms used scaled integers to perform mathematical operations, for example:

```
   val = 1.23
```

With a default PRECISION 4, the internal value of val is 12300.  
This is the way jBASE, mvBASE, D3 and Reality work.  
For compatibility with legacy applications, we need to provide the option to use IEEE floating-point maths.  

## Current Release Behavior

jBASE now supports IEEE floating-point maths when the "ieee_maths" emulation setting is set to "true".

This will be the default in "universe" emulation.

Back to [5.8.3 Release Notes](./../README.md)

<PageFooter />
