# Environment Variables  

<PageHeader />

All the drivers in the jEDIDK have environment variables for tracing and logging:  

Substitute the applicable jEDIDK_type with the type (OLESQL, OCIORA, ODBC…).  

```
JEDI_jEDIDK_type_TRACE=level (1, 2, 3, …the higher number the more trace)

JEDI_jEDIDK_type_LOG=1

JEDI_jEDIDK_type_LOGFILE=logfile specify the log filename.

JEDI_jEDIDK_type_DISPLAY=1 by default if logging is turned in the trace is not displayed. This forces the log to display on the screen as well.

JEDI_JDKINI_TRACE=1 traces the jEDIdrivers.ini parsing
```

## Driver Specific Environment Variables  

```
JEDI_OLESQL_AUTOTRANS=1 turns off AUTOTRANSLATE (OEM/ANSI character translation).

JEDI_OLESQL_DBMSOCN=1 forces TCP/IP connectivity (as opposed to Named Pipes).
```

Back to [jEDIJDK](./../README.md)

<PageFooter />
