# Time change and jBASE

<PageHeader />

When the clocks go forward or back, any jBASE process which started before the change will maintain all time calculation based on the time when the process started.

If it is required that processes use time calculations which are independent of time changes, then [UTC](./../../indexes/universal-coordinated-time/README.md) time should be used, which is time-change agnostic.

To make sure that jBASE is aware of which location and time-zone your system is located or is operating in, [JBASE_TIMEZONE](./../../environment-variables/jbase_timezone/README.md) and [JBASE_LOCALE](./../../environment-variables/jbase_locale/README.md) should be set accordingly.  

Run the **jtimezones** and **jlocales** commands for a list of valid settings.

Back to [FAQ](./../README.md)

<PageFooter />
