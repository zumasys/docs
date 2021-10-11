# jBASE 5.6.3 Release Notes

<PageHeader />

## Patches

- [PN5\_60581](./pn5_60581/README.md) - Allow "!" to execute Operating System (OS) commands in Procs and Paragraphs
- [PN5\_60582](./pn5_60582/README.md) - New environment variable to configure the jShell command stack history and/or specify a username based stack
- [PN5\_60583](./pn5_60583/README.md) - Allow attribute 1 in F-pointers and PQ/PQN/PA/PR items to be caseless
- [PN5\_60584](./pn5_60584/README.md) - jQL: Allow [Ann] style default dictionaries for d3 emulation
- [PN5\_60586](./pn5_60586/README.md) - jQL: Process malformed A-correlatives with missing semi-colons
- [PN5\_60587](./pn5_60587/README.md) - jQL: Prevent hidden columns from corrupting totals of other columns
- [PN5\_60589](./pn5_60589/README.md) - Case Independence: jQL and Secondary Index issue
- [PN5\_60591](./pn5_60591/README.md) - jQL: Issue with A/F correlative using Repeat function
- [PN5\_60592](./pn5_60592/README.md) - A jQL statement with more that 3 BREAK-ONs corrupts totals
- [PN5\_60593](./pn5_60593/README.md) - jBC: D3 style input timeout
- [PN5\_60594](./pn5_60594/README.md) - jBC: Map SYSTEM() functions for D3 compatibility
- [PN5\_60595](./pn5_60595/README.md) - Prevent the jShell dot-stacker commands from clashing with user commands
- [PN5\_60597](./pn5_60597/README.md) - Spooler enhancement to be able to assign the port number range for **jlp** print processes
- [PN5\_60598](./pn5_60598/README.md) - File cache not getting rebuilt when changing directories
- [PN5\_60599](./pn5_60599/README.md) - Add support for large records when using ACCOUNT-SAVE and ACCOUNT-RESTORE commands
- [PN5\_60600](./pn5_60600/README.md) - Remove 'root' requirement from the jInstallKey command
- [PN5\_60601](./pn5_60601/README.md) - Unable to add or update multisession or websession evaluation licenses with the jLicenseUpgrade command
- [PN5\_60602](./pn5_60602/README.md) - jInstallKey incapable of stacking multiple licenses
- [PN5\_60603](./pn5_60603/README.md) - Make jPlus the default file type when creating files
- [PN5\_60604](./pn5_60604/README.md) - Allow compiler directives to be used as variables
- [PN5\_60605](./pn5_60605/README.md) - jBASE **who** command conflict with Unix/Linux **who**
- [PN5\_60606](./pn5_60606/README.md) - Allow AND-LISTS, OR-LISTS, XOR-LISTS to accept 1 list
- [PN5\_60607](./pn5_60607/README.md) - Implement D3 style list processing commands
- [PN5\_60608](./pn5_60608/README.md) - Fix a performance issue with the LOCKED clause
- [PN5\_60609](./pn5_60609/README.md) - Correct the behavior of SYSTEM(0) for D3 emulation
- [PN5\_60613](./pn5_60613/README.md) - Case Independence: Code formatter not handling certain variables correctly
- [PN5\_60614](./pn5_60614/README.md) - Improve the case insensitive handling of subroutine calls
- [PN5\_60615](./pn5_60615/README.md) - jBC: Parenthetical expressions misinterpreted as DIMensioned arrays instead of format strings
- [PN5\_60617](./pn5_60617/README.md) - Casing issue with IF statement in combination with the LOCATE() function
- [PN5\_60618](./pn5_60618/README.md) - PortBas issue - Reserved words following a ";" ignored
- [PN5\_60619](./pn5_60619/README.md) - jbase\_agent accepts invalid port ranges, less than 1025 and greater than 65535
- [PN5\_60620](./pn5_60620/README.md) - Add option to jFormatCode to allow DIMensioned arrays to be treated like dynamic arrays
- [PN5\_60621](./pn5_60621/README.md) - jFormateCode to move semi-colon separated INCLUDEs to a dedicated lines
- [PN5\_60622](./pn5_60622/README.md) - jFormatCode to parse out expressions that are used in the LOCATE statement and LOCATE() function
- [PN5\_60623](./pn5_60623/README.md) - Enhancement to make "N" a synonym of "PA" in Paragraphs
- [PN5\_60624](./pn5_60624/README.md) - jQL: Date and Time conversion codes are not case insensitive
- [PN5\_60625](./pn5_60625/README.md) - Active select-list not retained after invoking SPOOLER() function
- [PN5\_60626](./pn5_60626/README.md) - Lift 2gb limit on index files
- [PN5\_60627](./pn5_60627/README.md) - Allow the jsh prompt to be configured via an environment variable
- [PN5\_60628](./pn5_60628/README.md) - jQL: Incorrect output from mismatched multi-values using the Repeat function
- [PN5\_60629](./pn5_60629/README.md) - ICONV doesn't strip leading zeros when the number to be converted is a string
- [PN5\_60630](./pn5_60630/README.md) - Minor issues with the new **JPP2** pre-compiler
- [PN5\_60631](./pn5_60631/README.md) - Case Independence: Correct a number of functions that failed if an argument was not a string
- [PN5\_60632](./pn5_60632/README.md) - Reduce default spooler sleep time
- [PN5\_60633](./pn5_60633/README.md) - A program could go into a CPU loop on Linux/Unix system if a **/** (forward slash) was present in the file name
- [PN5\_60634](./pn5_60634/README.md) - Distributed files give a "DISTRIB: Reentrant call to Jedi Distributed file driver" message.
- [PN5\_60635](./pn5_60635/README.md) - jQL not processing sub-values in calculations
- [PN5\_60636](./pn5_60636/README.md) - jBC: Record locking not case insensitive
- [PN5\_60637](./pn5_60637/README.md) - Locks would remain after a file is closed
- [PN5\_60638](./pn5_60638/README.md) - The **jrf** command leaves temporary index file in directory
- [PN5\_60640](./pn5_60640/README.md) - jQL not processing multi-values
- [PN5\_60642](./pn5_60642/README.md) - Don't stack the command that initiates the dot-stacker
- [PN5\_60643](./pn5_60643/README.md) - jQL: Incorrect BREAK-ON totals and formatting at major break levels
- [PN5\_60644](./pn5_60644/README.md) - Add a new file type **JBC** to the **CREATE-FILE** command
- [PN5\_60645](./pn5_60645/README.md) - New command **viewindex** to view a jBASE Secondary Index
- [PN5\_60646](./pn5_60646/README.md) - jQL not correctly processing statements using both FMT and CONV
- [PN5\_60647](./pn5_60647/README.md) - SP-ASSIGN resets list pointer
- [PN5\_60648](./pn5_60648/README.md) - Stale header data in JP files (Error number 2017)

## New Commands

- viewindex (see patch [PN5\_60545](./pn5_60545/README.md))

## New jBC Statements

-

## New Environment Variables  

- JSH_PROMPT (see [PN5\_60627](./pn5_60627/README.md))

## Changes to Current Behavior

- The **U** option of the **jchmod** command has been deprecated. Case insensitive files must be created with **CREATE-FILE** command, e.g. **CREATE-FILE BOOKS 11 101 CASE=FALSE**
- Default spooler sleep time reduced to 5 seconds, was 30 seconds (see patch [PN5\_60632](./pn5_60632))

## Changes to Commands

- New JBC file type added to the CREATE-FILE command (see patch [PN5\_60644](./pn5_60644))

## Changes to jBC

-

## Statements/Functions

-

## Additional Notes

- To obtain an evaluation version of jBASE, please email [multivalue@zumasys.com.](mailto:multivalue@zumasys.com.%3C/p%3E)

[Back to 5.6.x Release Notes](./../README.md)

<PageFooter />
