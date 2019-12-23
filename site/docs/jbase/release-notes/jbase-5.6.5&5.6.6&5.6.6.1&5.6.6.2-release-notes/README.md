# jBASE 5.6.5/5.6.6/5.6.6.1/5.6.6.2 Release Notes

**Created At:** 4/19/2018 9:40:22 AM  
**Updated At:** 2/14/2019 11:25:40 AM  
**Original Doc:** [jbase-565-566-5661-release-notes](https://docs.jbase.com/release-notes/jbase-565-566-5661-release-notes)  


# Patches

- [PN5\_60652](./../pn5_60652) - Enhancements to the jShell dot stacker
- [PN5\_60653](PN5_60653) - Implement memory-based I/O operations
- [PN5\_60654](./../pn5_60654) - Change the way the MD is created with the **create-account** command
- [PN5\_60655](./../pn5_60655) - **OCONV()**difference in Sequoia emulation
- [PN5\_60657](PN5_60657) - Stop the compiler from adjusting the casing of a subroutine
- [PN5\_60658](./../pn5_60658) - jQL: I-type dictionaries do not recognize **@TM**
- [PN5\_60661](PN5_60661) - jQL: Unable to get Value Number from exploded sort using a dictionary subroutine
- [PN5\_60662](PN5_60662) - jQL: Unable to get Value Number from exploded sort using an A-type (10-line) dictionary
- [PN5\_60663](PN5_60663) - jQL: Unable to get Value Number from exploded sort using an I-type; **@NV** not recognized
- [PN5\_60666](PN5_60666)- jQL: The use of **LIST**would cause a memory leak
- [PN5\_60673](PN5_60673) - Spooler: Create new **FILE**device type to send output to an Operating System file
- [PN5\_60679](PN5_60679) - Add an option to the **create-account** command to set the emulation for the account
- [PN5\_60680](PN5_60680) - jQL: Multiple **BREAK-ON "'P'"** clauses produce multiple page breaks
- [PN5\_60681](PN5_60681) - jQL: **MCC** conversion code issues
- [PN5\_60682](PN5_60682) - jQL: Unable to get Value Number from exploded sort if **byexp\_mv\_dup\_like\_d3** is enabled
- [PN5\_60683](PN5_60683) - SQL: JOIN issue, some JOINs would fail
- [PN5\_60684](PN5_60684) - **mw42**drops to the debugger when an invalid option is supplied as the first argument
- [PN5\_60685](PN5_60685) - **QSELECT**and **FORM-LIST** commands do not allow quoted arguments without spaces between the arguments
- [PN5\_60686](PN5_60686) - **TERM**settings don't persist
- [PN5\_60688](PN5_60688) - Unable to stack **KEY-SELECT**s
- [PN5\_60689](PN5_60689) - Setting **log\_runtime\_errors = true** configuration option causes all messages from the **jbcmessages** file to be logged
- [PN5\_60690](PN5_60690) - Spooler: **SETPTR**doesn't inherit Hold status from **SP-ASSIGN**
- [PN5\_60691](PN5_60691) - jRClient: JIndex start position ignored
- [PN5\_60692](PN5_60692) - jQL: Segmentation Violation scenario with a dictionary subroutine call
- [PN5\_60694](PN5_60694) - Spooler: The **SETPTR** banner does not persist after being set by a previous **SETPTR**
- [PN5\_60695](PN5_60695) - Telnet: Update terminfo definitions
- [PN5\_60696](PN5_60696) - Correct TJ memory access violations when the record key or transaction information exceeds 16k
- [PN5\_60697](PN5_60697) - Indexes: A-correlative issue with missing semi-colon
- [PN5\_60698](PN5_60698) - Allow **HEADING**to use case insensitive special characters
- [PN5\_60699](./../pn5_60699) - Execution of PROCs to pass back the values to the SETTING variable
- [PN5\_60700](./../pn5_60700) - Execution of Paragraphs to pass back the values to the SETTING variable
- [PN5\_60701](./../pn5_60701) - **jDLS -L**does not display the lock table
- [PN5\_60702](./../pn5_60702) - jQL crashes when TOTAL'ing an **A;IF/THEN** in dict&lt;7&gt;
- [PN5\_60703](./../pn5_60703) - Indexes: Lookup conversion codes (other than times and dates) are not applied to queries
- [PN5\_60704](./../pn5_60704) - Suppress character echo on input
- [PN5\_60705](./../pn5_60705) - SQL: Extended ACSII characters using SQLSELECT
- [PN5\_60706](./../pn5_60706) - jQL: Issue with using duplicate association member in queries
- [PN5\_60707](./../pn5_60707) - jQL: Date with embedded conversions produce wrong results
- [PN5\_60708](./../pn5_60708) - Transaction Journaling: The **jlogdup** command does not accept a select-list to control what is restored
- [PN5\_60709](./../pn5_60709) - Allow **jdiag** to recognize the emulation from files of the form: Config\_EMULATE\_name
- [PN5\_60710](./../pn5_60710) - jQL: **NI** operand returns zero
- [PN5\_60713](PN5_60713) - jbase\_agent not working as a service on Windows
- [PN5\_60714](PN5_60714) - jBC code with END followed by a comment would not compile
- [PN5\_60715](./../pn5_60715) - CREATE-FILE reports the wrong filename for the data section
- [PN5\_60716](./../pn5_60716) - Add optional parameters to REGEXP() for case insensivity
- [PN5\_60717](./../pn5_60717) - jshow enhancements
- [PN5\_60721](./../pn5_60721) - jQL: ID-SUPP kills session when used on a query that uses a dictionary with an association
- [PN5\_60722](./../pn5_60722) - jAgent: Add new convenience options to jbase\_agent
- [PN5\_60723](./../pn5_60723) - FOOTING statement creates second print job after PRINTER CLOSE
- [PN5\_60725](./../pn5_60725) - jBC: Allow the jBC debugger to access EQUATE'd variables
- [PN5\_60728](./../pn5_60728) - **jrestore** not restoring all records in D3 emulation
- [PN5\_60732](pn5_60732) - Spooler: Print jobs getting sent to the wrong form queue
- [PN5\_60733](./../pn5_60733) - Paragraphs: Inline prompts on comment lines not processed in the correct sequence
- [PN5\_60738](./../pn5_60738) - Add an option to the **config-strings** command to display output in Config\_EMULATE format
- [PN5\_60746](./../pn5_60746) - jQL: Repeat function with A/F-correlatives only processes first multi-value
- [PN5\_60747](./../pn5_60747) - Utilities: The **config-strings**command failed to display emulation lines after commented lines




# 5.6.6.2

- [PN5\_60815](./../5.7.2-release-notes/pn5_60815) - Paragraphs process inline prompts on commented lines
- [PN5\_60820](./../5.7.2-release-notes/pn5_60820) - jQL: IF/THEN/ELSE A-correlative does not process embedded conversions
- [PN5\_60840](./../pn5_60840) - PREWRITE trigger unable to amend the record on the file the trigger is on
- [PN5\_60851](./../pn5_60851) - Compiler parsing issue when a function definition [DEFFUN] has the same name as a DIM() or COMMON array


# New Commands

- 


# New jBC Statements

- 


# New Modules

- 


# Changes to Current Behavior 

- jBASE 5.6.6.1 includes several improvements to jODBC/JSQL.


# Changes to Commands

- jshow (see patch [PN5\_60717](./../pn5_60717))


# Changes to jBC 

- 


# Statements/Functions

- 


# Additional Notes

- The spooler features a new [FILE Device Type](PN5_60673).

