# jBASE 5.7.6 Release notes

<PageHeader />

This release includes various internal bug fixes and the following enhancements and patches:

## Patches

- [PN5\_60927](./../pn5_60927/README.md) - Check if the command being cataloged clashes with another command found in the user's PATH
- [PN5\_60929](./../pn5_60929/README.md) - Add the **JBC\_INCLUDE\_PATH** and **JBC\_INCLUDE\_FILE** environment variables to the compiler
- [PN5\_60930](./../pn5_60930/README.md) - **T-LOAD** / **T-DUMP** counters limited to 6 digits
- [PN5\_60931](./../pn5_60931/README.md) - BASIC with full path on Windows eliminates the backslashes
- [PN5\_60932](./../pn5_60932/README.md) - Behavior of **PH-START** using **T** option misleading on Windows
- [PN5\_60937](./../pn5_60937/README.md) - **L#0** returns entire string, some emulations require it to return null
- [PN5\_60938](./../pn5_60938/README.md) - Segmentation violation when running **SQLSELECT** from an active select on a file with no indexes
- [PN5\_60939](./../pn5_60939/README.md) - jBASE Patch Number truncated in **SYSTEM(1021)** and in **jdiag** output
- [PN5\_60942](./../pn5_60942/README.md) - Unexpected **SORT** results on **PH-HISTORY**
- [PN5\_60948](./../pn5_60948/README.md) - Allow dynamic files (HASHD/jD) to support the network friendly flag
- [PN5\_60951](./../pn5_60951/README.md) - PROCREAD / PROCWRITE to fail if immediate parent process is not a PROC when **generic\_pick = true**
- [PN5\_60952](./../pn5_60952/README.md) - jBC: Remove the limit imposed by INPUT on DATA stack
- [PN5\_60954](./../pn5_60954/README.md) - The new pre-processor was not recognising the '!' character as a potential system keyword
- [PN5\_60961](./../pn5_60961/README.md) - Add milestones to jlogdup
- [PN5\_60962](./../pn5_60962/README.md) - Fix for IPv6 multisession/websession licensing
- [PN5\_60963](./../pn5_60963/README.md) - **ACCOUNT-SAVE** on Windows doesn't save files with Windows reserved characters ? \* ; | &lt; &gt; )
- [PN5\_60964](./../pn5_60964/README.md) - **ACCOUNT-SAVE** duplicates saving distributed files
- [PN5\_60965](./../pn5_60965/README.md) - **FORMLIST 0 TO var** caused segmentation violation if run with an active select
- [PN5\_60966](./../pn5_60966/README.md) - **CLEAR-BASIC-LOCKS** and **LIST-EXECUTION-LOCKS** were not functioning
- [PN5\_60967](./../pn5_60967/README.md) - Enhance the maximum Q-pointer resolution error message to include the name of the originating Q-pointer
- [PN5\_60968](./../pn5_60968/README.md) - Add a 5th parameter to the **LOCATE()** function to specify the start position
- [PN5\_60969](./../pn5_60969/README.md) - Enhance the reporting and recovery of errors caused by the fork() command failing
- [PN5\_60970](./../pn5_60970/README.md) - **DELETE-FILE DICT** deletes more than just the dictionary
- [PN5\_60971](./../pn5_60971/README.md) - Add **KEEP\_ALIVE** property to JRClient **JConnection** class
- [PN5\_60972](./../pn5_60972/README.md) - **PH-STATUS** facelift

Back to [Release Notes](./../../README.md)

<PageFooter />
