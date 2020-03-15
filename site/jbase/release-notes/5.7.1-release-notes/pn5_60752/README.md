# PN5_60752

**Created At:** 8/27/2018 10:05:50 AM  
**Updated At:** 10/24/2018 8:38:01 PM  
**Original Doc:** [pn5_60752](https://docs.jbase.com/48420-5-7-1-release-notes/pn5_60752)  
**Original ID:** 336196  
**Internal:** No  

## Description

Prevent the compiler returning 'Unassigned Variable' warnings for the parameters passed with DEFFUN()

### Previous Release Behavior

The DEFFUN() statement can include any number of parameters on the statement, for example

```
    DEFFUN MyFunction(Name , Address , DOB)
```

In the above example, Name , Address and DOB are not used when generating code. They exist in the source code purely to help the programmer remember what the parameters are and the name to give clues as to their use. However, another part of the compiler will add 'Name' , 'Address' and 'DOB' to the variable table. This means that 3 extra variables are created that are never used. This isn't the main problem. The main problem is that you get 'Unassigned Variables' messages, as in

```
fbcentos-~/tmp15: cat test3.b
        DEFFUN MyFunction(Name , Address , DOB)
fbcentos-~/tmp15: BASIC . test3.b
test3.b
Warning: Variable DOB is never assigned!
Warning: Variable Name is never assigned!
Warning: Variable Address is never assigned!
Source file test3.b compiled successfully
```

### Current Release Behavior

The warning messages are not displayed.

Back to [5.7.1 Release Notes](./../README.md)
