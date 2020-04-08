# PN5_60614

<PageHeader />

## Description

Improve the case insensitive handling of subroutine calls

### Previous Release Behavior

When a program was compiled in D3 mode, it couldn't call (for example) our new WSEND subroutine. This is because the call to WSEND was converted to  "CALL wsend" whereas the original WSEND , because it was part of the jBASE build, didn't have the case changed to wsend.

### Current Release Behavior

Once in D3 emulation for the runtime, it can call any subroutine irrespective of case or how that subroutine was built. You don't need to have compiled your source in D3 emulation.

For example, these are the same

```
CALL WSEND("Hello")
CALL wsend("Hello")
name = "WsEnd"
CALL @name("Hello")
```

So long as the program is executed with D3 emulation, all 3 calls will work irrespective of how the source was compiled.

Previous to this fix, if compiled with D3 emulation then

- Both calls to WSEND/wsend are converted to wsend, which would have given an error.
- The use of @name means it didn't stand a chance of working.

Note:  Once you start a process in D3 emulation, the process will remain with  case insensitive subroutine CALLs irrespective of the CASE ON/OFF or  CASING ON/OFF functionality. This is the way native D3 works.

Back to [5.6.2 release Notes](./../README.md)
