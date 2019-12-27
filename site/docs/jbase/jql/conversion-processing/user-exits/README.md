# User Exits

**Created At:** 6/28/2018 12:52:40 PM  
**Updated At:** 7/24/2018 12:15:01 PM  
**Original Doc:** [user-exits](https://docs.jbase.com/46351-conversion-processing/user-exits)  
**Original ID:** 324978  
**Internal:** No  


## Description 

jBASE provides support for the legacy user exit construct. In addition to providing a number of [standard user exits](./../supported-user-exits), jBASE allows the user to create custom user exits. This has been done to cater for the more obscure user exits that are sometimes used in legacy code. It is recommended that custom user exits are **not** created for new applications.

A user-exit can be called by a user application via the "U" conversion code in an ICONV or an OCONV function. For example, the jBC code might be:

```
user = OCONV("","U50BB")
```

In this example, the user-exit 50BB is a historic user-exit and is already supplied by the jBASE development system (it returns the port number and name of the user).

In the above example, the value "50BB" is a description of the user exit number and is split into two components. The first character is historically called the entry-point, and in this case the entry-point is "5". The next 3 characters are historically called the frame-id which in this case is "0BB".

The user-exit number is a 1 to 4 digit hex value, case insensitive. If fewer than 4 characters are used, it is padded with leading zeroes. For example, user-exit "U23" means "U0023", or entry point "0" in frame-id "023".

Let us consider the example below where we call user-exit 90fb:

```
res = OCONV("input details", "U90fb")
```

Under normal circumstances this would fail and the debugger would be entered with an illegal conversion code message.

You can write extensions to the conversion codes by creating a normal SUBROUTINE with the name Uxxx for each of the frame-id’s you wish to support. There are 5 parameters passed to a subroutine, as for the Conversion Code extensions described earlier.

A simple example of such a source code to handle just the "U90fb" user-exit is:

```
SUBROUTINE U0FB(result, source, code, type, error)
UCASE = OCONV(code, "MCU")[1,5]
BEGIN CASE
CASE UCASE = "U90FB"
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

The SUBROUTINE is functionally very similar to that for the [Conversion Code Extensions](./../jbcuserconversions). There main difference is the line:

```
UCASE = OCONV(code, "MCU")[1,5]
```

This is to make the conversion code quicker and more reliable to parse. For example, the user exit “U90fb” could take the following formats:

```
PRINT OCONV("","U90fb")
PRINT OCONV("","u90FB")
PRINT OCONV("","U90Fb" : CHAR(253) : "Extra detail" )
```
