# Class Method: $system::isroutine()

<PageHeader />

## Description

The **isroutine()** method provides a programmatic way to determine if a subroutine, function, or method exists.

An alternative way is to use a the **JBASEIsRoutine()** internal function, defined in the **JBC.h** INCLUDE file.

## Syntax

```
rc = $system::isroutine(routine name)
```

```
INCLUDE JBC.h
rc = JBASEIsRoutine(routine name)
```

## Arguments

| Argument | Description |
| --- | --- |
| routine name | the name of a subroutine, function or method |

## Return Code

| Return Code | Description |
| --- | --- |
| 0 | There is no such routine |
| 1 | The routine exists and is a jBC Subroutine or Function |
| 2 | The routine exists and is a Dynamic Objects class method |
| 3 | The routine exists and is a user-defined (or jBASE) 'C' function |

## Examples

This example simply determines if a routine exists:

```
$option jabba
input routine
if $system::isroutine(routine) then
    crt "Subroutine or Function ":dquote(routine):" exists."
end
```

This example uses the **JBASEIsRoutine()** function call to determine the routine type:

```
    PROGRAM find_routine
    INCLUDE JBC.h
    routine_list = "Getpid" : @AM : "JBASECommandNext" : @AM : "$system::isroutine"
*
* Loop through each attribute in 'routine_list' using the FOR .. IN .. iterator
*
    FOR routine IN routine_list
        rc = JBASEIsRoutine(routine)
        PRINT "For routine ":DQUOTE(routine):", ":
        BEGIN CASE
        CASE rc EQ 0
            PRINT "it does not exist"
        CASE rc EQ 1
            PRINT "it is a jBC SUBROUTINE or FUNCTION"
        CASE rc EQ 2
            PRINT "it is a class method"
        CASE rc EQ 3
            PRINT "it is a 'C' function"
        CASE 1
            PRINT "Unknown return code from JBASEIsRoutine()"
        END CASE
    NEXT
```

## Notes

**DEFC JBASEIsRoutine(STRING)** can be used instead of using **JBC.h**.

See also [\$system::ontermintate()](../class-$systemonterminate()/README.md)

<PageFooter />
