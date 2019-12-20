# PN5_60657

**Created At:** 12/25/2017 12:08:16 PM  
**Updated At:** 2/16/2018 7:05:53 PM  
**Original Doc:** [pn5_60657](https://docs.jbase.com/release-notes/pn5_60657)  


### Description

Stop the compiler from adjusting the casing of a subroutine



### Previous Release Behavior

In order to make the CALL to subroutines in a case insensitive fashion, the compiler would change the case of a name on the SUBROUTINE line. For example it would change "GreG" to "greg". This worked well when the environment was totally D3, but when you have some routines supplied by jBASE compiled in case sensitive and others in D3 case insensitive, there would be incompatibilities resulting in trouble CALLing the jBASE routines.



### Current Release Behavior

This change takes advantage of a more recent change with the run-time. Now, the run-time will always do the case insensitive work. This means the compiler no longer has to, and so the subroutine name can be left as-is.

The emulation must be D3 for this behavior to be in effect.
