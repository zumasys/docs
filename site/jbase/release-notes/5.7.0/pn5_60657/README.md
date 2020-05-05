# PN5_60657

<PageHeader />

## Description

Stop the compiler from adjusting the casing of a subroutine

### Previous Release Behavior

In order to make the CALL to subroutines in a case insensitive fashion, the compiler would change the case of a name on the SUBROUTINE line. For example it would change "GreG" to "greg". This worked well when the environment was totally D3, but when you have some routines supplied by jBASE compiled in case sensitive and others in D3 case insensitive, there would be incompatibilities resulting in trouble CALLing the jBASE routines.

### Current Release Behavior

This change takes advantage of a more recent change with the run-time. Now, the run-time will always do the case insensitive work. This means the compiler no longer has to, and so the subroutine name can be left as-is.

The emulation must be D3 for this behavior to be in effect.

Back to [jBASE 5.7.0 Release Notes](./../README.md)

<PageFooter />
