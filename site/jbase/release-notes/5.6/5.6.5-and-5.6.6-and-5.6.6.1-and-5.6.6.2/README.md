# jBASE 5.6.5/5.6.6/5.6.6.1/5.6.6.2 Release Notes

<PageHeader />

## Patches

- [PN5\_60652](./../5.7.0/pn5_60652/README.md) - Enhancements to the jShell dot stacker
- [PN5\_60653](./../5.7.0/pn5_60653/README.md) - Implement memory-based I/O operations
- [PN5\_60654](./../5.7.0/pn5_60654/README.md) - Change the way the MD is created with the **create-account** command
- [PN5\_60655](./../5.7.0/pn5_60655/README.md) - **OCONV()** difference in Sequoia emulation
- [PN5\_60657](./../5.7.0/pn5_60657/README.md) - Stop the compiler from adjusting the casing of a subroutine
- [PN5\_60658](./../5.7.0/pn5_60658/README.md) - jQL: I-type dictionaries do not recognize **@TM**
- [PN5\_60661](./../5.7.0/pn5_60661/README.md) - jQL: Unable to get Value Number from exploded sort using a dictionary subroutine
- [PN5\_60662](./../5.7.0/pn5_60662/README.md) - jQL: Unable to get Value Number from exploded sort using an A-type (10-line) dictionary
- [PN5\_60663](./../5.7.0/pn5_60663/README.md) - jQL: Unable to get Value Number from exploded sort using an I-type; **@NV** not recognized
- [PN5\_60666](./../5.7.0/pn5_60666/README.md)- jQL: The use of **LIST** would cause a memory leak
- [PN5\_60673](./../5.7.0/pn5_60673/README.md) - Spooler: Create new **FILE** device type to send output to an Operating System file
- [PN5\_60679](./../5.7.0/pn5_60679/README.md) - Add an option to the **create-account** command to set the emulation for the account
- [PN5\_60680](./../5.7.0/pn5_60680/README.md) - jQL: Multiple **BREAK-ON "'P'"** clauses produce multiple page breaks
- [PN5\_60681](./../5.7.0/pn5_60681/README.md) - jQL: **MCC** conversion code issues
- [PN5\_60682](./../5.7.0/pn5_60682/README.md) - jQL: Unable to get Value Number from exploded sort if **byexp\_mv\_dup\_like\_d3** is enabled
- [PN5\_60683](./../5.7.0/pn5_60683/README.md) - SQL: JOIN issue, some JOINs would fail
- [PN5\_60684](./../5.7.0/pn5_60684/README.md) - **mw42** drops to the debugger when an invalid option is supplied as the first argument
- [PN5\_60685](./../5.7.0/pn5_60685/README.md) - **QSELECT** and **FORM-LIST** commands do not allow quoted arguments without spaces between the arguments
- [PN5\_60686](./../5.7.0/pn5_60686/README.md) - **TERM** settings don't persist
- [PN5\_60688](./../5.7.0/pn5_60688/README.md) - Unable to stack **KEY-SELECT**s
- [PN5\_60689](./../5.7.0/pn5_60689/README.md) - Setting **log\_runtime\_errors = true** configuration option causes all messages from the **jbcmessages** file to be logged
- [PN5\_60690](./../5.7.0/pn5_60690/README.md) - Spooler: **SETPTR** doesn't inherit Hold status from **SP-ASSIGN**
- [PN5\_60691](./../5.7.0/pn5_60691/README.md) - jRClient: JIndex start position ignored
- [PN5\_60692](./../5.7.0/pn5_60692/README.md) - jQL: Segmentation Violation scenario with a dictionary subroutine call
- [PN5\_60694](./../5.7.0/pn5_60694/README.md) - Spooler: The **SETPTR** banner does not persist after being set by a previous **SETPTR**
- [PN5\_60695](./../5.7.0/pn5_60695/README.md) - Telnet: Update terminfo definitions
- [PN5\_60696](./../5.7.0/pn5_60696/README.md) - Correct TJ memory access violations when the record key or transaction information exceeds 16k
- [PN5\_60697](./../5.7.0/pn5_60697/README.md) - Indexes: A-correlative issue with missing semi-colon
- [PN5\_60698](./../5.7.0/pn5_60698/README.md) - Allow **HEADING** to use case insensitive special characters
- [PN5\_60699](./../5.7.0/pn5_60699/README.md) - Execution of PROCs to pass back the values to the SETTING variable
- [PN5\_60700](./../5.7.0/pn5_60700/README.md) - Execution of Paragraphs to pass back the values to the SETTING variable
- [PN5\_60701](./../5.7.0/pn5_60701/README.md) - **jDLS -L** does not display the lock table
- [PN5\_60702](./../5.7.0/pn5_60702/README.md) - jQL crashes when TOTAL'ing an **A;IF/THEN** in dict&lt;7&gt;
- [PN5\_60703](./../5.7.0/pn5_60703/README.md) - Indexes: Lookup conversion codes (other than times and dates) are not applied to queries
- [PN5\_60704](./../5.7.0/pn5_60704/README.md) - Suppress character echo on input
- [PN5\_60705](./../5.7.0/pn5_60705/README.md) - SQL: Extended ACSII characters using SQLSELECT
- [PN5\_60706](./../5.7.0/pn5_60706/README.md) - jQL: Issue with using duplicate association member in queries
- [PN5\_60707](./../5.7.0/pn5_60707/README.md) - jQL: Date with embedded conversions produce wrong results
- [PN5\_60708](./../5.7.0/pn5_60708/README.md) - Transaction Journaling: The **jlogdup** command does not accept a select-list to control what is restored
- [PN5\_60709](./../5.7.0/pn5_60709/README.md) - Allow **jdiag** to recognize the emulation from files of the form: Config\_EMULATE\_name
- [PN5\_60710](./../5.7.0/pn5_60710/README.md) - jQL: **NI** operand returns zero
- [PN5\_60713](./../5.7.0/pn5_60713/README.md) - jbase\_agent not working as a service on Windows
- [PN5\_60714](./../5.7.0/pn5_60714/README.md) - jBC code with END followed by a comment would not compile
- [PN5\_60715](./../5.7.0/pn5_60715/README.md) - CREATE-FILE reports the wrong filename for the data section
- [PN5\_60716](./../5.7.0/pn5_60716/README.md) - Add optional parameters to REGEXP() for case insensivity
- [PN5\_60717](./../5.7.0/pn5_60717/README.md) - jshow enhancements
- [PN5\_60721](./../5.7.0/pn5_60721/README.md) - jQL: ID-SUPP kills session when used on a query that uses a dictionary with an association
- [PN5\_60722](./../5.7.0/pn5_60722/README.md) - jAgent: Add new convenience options to jbase\_agent
- [PN5\_60723](./../5.7.0/pn5_60723/README.md) - FOOTING statement creates second print job after PRINTER CLOSE
- [PN5\_60725](./../5.7.0/pn5_60725/README.md) - jBC: Allow the jBC debugger to access EQUATE'd variables
- [PN5\_60728](./../5.7.0/pn5_60728/README.md) - **jrestore** not restoring all records in D3 emulation
- [PN5\_60732](./../5.7.0/pn5_60732/README.md) - Spooler: Print jobs getting sent to the wrong form queue
- [PN5\_60733](./../5.7.0/pn5_60733/README.md) - Paragraphs: Inline prompts on comment lines not processed in the correct sequence
- [PN5\_60738](./../5.7.0/pn5_60738/README.md) - Add an option to the **config-strings** command to display output in Config\_EMULATE format
- [PN5\_60746](./../5.7.0/pn5_60746/README.md) - jQL: Repeat function with A/F-correlatives only processes first multi-value
- [PN5\_60747](./../5.7.0/pn5_60747/README.md) - Utilities: The **config-strings** command failed to display emulation lines after commented lines

## 5.6.6.2

- [PN5\_60815](./../5.7.2/pn5_60815/README.md) - Paragraphs process inline prompts on commented lines
- [PN5\_60820](./../5.7.2/pn5_60820/README.md) - jQL: IF/THEN/ELSE A-correlative does not process embedded conversions
- [PN5\_60840](./../5.7.2/pn5_60840/README.md) - PREWRITE trigger unable to amend the record on the file the trigger is on
- [PN5\_60851](./../5.7.2/pn5_60851/README.md) - Compiler parsing issue when a function definition [DEFFUN] has the same name as a DIM() or COMMON array

## New Commands

-

## New jBC Statements

-  

## New Modules

-  

## Changes to Current Behavior

- jBASE 5.6.6.1 includes several improvements to jODBC/JSQL.

## Changes to Commands

- jshow (see patch [PN5\_60717](./../5.6.3/pn5_60717/README.md))

## Changes to jBC

-  

## Statements/Functions

-  

## Additional Notes

- The spooler features a new [FILE Device Type](./../5.7.2/pn5_60673/README.md).

[Back to 5.6.x Release Notes](./../README.md)

<PageFooter />
