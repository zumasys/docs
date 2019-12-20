# AUTOLOGOUT

**Created At:** 8/16/2018 2:47:14 PM  
**Updated At:** 9/26/2018 10:39:10 PM  
**Original Doc:** [autologout](https://docs.jbase.com/46963-utilities/autologout)  


## Description 

The AUTOLOGOUT command enables a session to be automatically logged off should there be no keyboard activity for a specified time.

It takes the general form:

```
AUTOLOGOUT {n {program {program Args}}} {(C)}
```

where:

- **n** is the number of minutes of keyboard inactivity required before the session is logged off.
- **program** is the name of a program to run before the session is logged off.
- **program args** can be specified for **program**.
- The **(C** option causes the name of the **program** that will be executed to be displayed.




If no program is specified when the AUTOLOGOUT command is issued, a program called **ON.EXIT** will be executed prior to the session being logged off. It is left to the user to define the functionality of ON.EXIT. To reset the auto logout, specify 0 for the number of minutes, or disconnect and reconnect from jBASE.



## Notes

Inactivity is defined as a program waiting at an INPUT or IN statement.

If no program is specified when the AUTOLOGOUT command is issued, a program called **ON.EXIT** will be executed prior to the session being logged off. It is left to the user to define the functionality of ON.EXIT. To reset the auto logout, specify 0 for the number of minutes, or disconnect and reconnect from jBASE.



## Examples

`jsh -->AUTOLOGOUT 10Automatic logout is set for 10 minutes.`
`jsh -->AUTOLOGOUT 15 OFF (CAutomatic logout is set for 15 minutes.Command to execute when invoked = 'OFF'`
