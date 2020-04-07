# JBCUserConversions

<PageHeader />

**Tags:**
<badge text='conversion processing' vertical='middle' />
<badge text='jql' vertical='middle' />

## Conversion Code Extensions

With jBASE it is possible to extend the scope of the conversion codes used with the jBC OCONV() and ICONV() functions.

As an example, suppose you want to support a conversion code of "XF". The calling jBC source may look like this:

```
XF.RESULT = OCONV("I am on a diet", "XF")
```

Under normal circumstances, this would fail and the debugger would be entered with an illegal conversion code message.

To write an extension for this conversion code, create a normal subroutine with the name JBCUserConversions with five parameters. For example:

```
SUBROUTINE JBCUserConversions (result, source, code, type, error)
BEGIN CASE
CASE code = "XF"
    IF type THEN
        result = source : " was OCONV"
    END ELSE
        result = source : " was ICONV"
    END
CASE 1
    error = 1
END CASE
RETURN
```

Be sure that the cataloged subroutine is visible from the [JBCOBJECTLIST](./../../../environment-variables/jbcobjectlist) environment variable. The subroutine's five parameters are:

| Parameter | Description |
| --- | --- |
| result | This is the variable returned by the conversion. In the above example, this would be the variable XF.RESULT. |
| source | This is the original variable passed to the ICONV() or OCONV() function that is to have the conversion performed on it. In the above example, this would be the string "I am on a diet". |
| code | This is that actual conversion code specified in the ICONV() or OCONV() function. In the above example this would be "XF". |
| type | This is set to 0 if the subroutine is called as an ICONV(), or to 1 if the subroutine is called as an OCONV(). A -1 is always returned when the subroutine is called from jQL (see notes below). |
| error | This can be updated in the event of an error. By default, jBASE will assume that the conversion is handled correctly by the JBCUserConversions subroutine. In the event that the conversion code is also unknown to the user-written extension, this variable can be set to a non-zero value causing an error to be displayed and the debugger to be entered. |

## Note

> There can be only one **JBCUserConversions** subroutine which would handle all customized conversion codes. This is a simple matter of extending the above example such that each **CASE** would handle a different conversion code.
>
> Should any extensions to conversion codes clash with those provided by jBASE, the jBASE version will take precedence. For example, you cannot write your own version of the existing "MT" conversion code. Likewise you could not write your own version of any conversion code starting with "D" as these are reserved for 'date' type conversions.

In most cases, customized conversion codes can also be used as conversions or correlatives in dictionary definitions for use with jQL sentences. One instance where this is not true, for example, is when the conversion code starts with "B" as this is reserved for calling jBC (Basic) subroutines.

If JBCUserConversions is called from jQL then the type is set to -1. This gives the user some control as to whether the subroutine was called from jBC or jQL.

Back to [Conversion Processing](./../conversion-processing)
