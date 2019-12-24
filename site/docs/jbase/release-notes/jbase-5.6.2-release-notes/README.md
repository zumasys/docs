# jBASE 5.6.2 RELEASE NOTES

**Created At:** 6/9/2017 4:23:28 PM  
**Updated At:** 11/21/2017 10:53:13 AM  
**Original Doc:** [jbase-562-release-notes](https://docs.jbase.com/release-notes/jbase-562-release-notes)  

**Tags:**
<badge text='5.6.2' vertical='middle' />
<badge text='release notes' vertical='middle' />

* * *

# Patches

- [PN5\_60542](./../5.6.2-release-notes/pn5_60542) - Case Independence: Allow the CHANGE() function to operate in a case insensitive fashion
- [PN5\_60545](./../5.6.2-release-notes/pn5_60545) - Case Independence: Slow string concatenations
- [PN5\_60546](./../5.6.2-release-notes/pn5_60546) - Index queries on complex statements other than EQ or NE not working
- [PN5\_60547](./../5.6.2-release-notes/pn5_60547)- Case Independence: Prevent wrong case being used on string constants
- [PN5\_60548](./../5.6.2-release-notes/pn5_60548) - PROMPT value lost after doing BASIC ENTER or CHAIN
- [PN5\_60551](./../5.6.2-release-notes/pn5_60551) - Add jlogdup and jlogstatus to the programs that don't consume a license
- [PN5\_60553](./../5.6.2-release-notes/pn5_60553) - Fix miscellaneous issues with jformatcode
- [PN5\_60554](./../5.6.2-release-notes/pn5_60554) - jQL: Enable caseless sorting of attribute data.
- [PN5\_60555](./../5.6.2-release-notes/pn5_60555) - Telnet: TAB character not interpreted correctly in Viewpoint emulation on Windows
- [PN5\_60557](./../5.6.2-release-notes/pn5_60557) - jQL: Allow phrases to be defined with "H" for compatibility with R91/R95
- [PN5\_60558](./../5.6.2-release-notes/pn5_60558)- In PRIME emulation, calling the SPOOLER function corrupts the default select list
- [PN5\_60559](./../5.6.2-release-notes/pn5_60559) - Enhancements to the SEARCH command for compatibility with D3 functionality
- [PN5\_60561](./../5.6.2-release-notes/pn5_60561) - Creating an encrypted file can give an error when a zero length record is written to the file
- [PN5\_60562](./../5.6.2-release-notes/pn5_60562) - Slow index performance when using T-correlatives
- [PN5\_60563](./../5.6.2-release-notes/pn5_60563) - Add option (S to MSG command to suppress the time and date from the message
- [PN5\_60564](./../5.6.2-release-notes/pn5_60564) - Add support for HOME directory q-to-q pointers
- [PN5\_60565](./../5.6.2-release-notes/pn5_60565) - jAgent: DATA INPUT and EXECUTE
- [PN5\_60566](./../5.6.2-release-notes/pn5_60566) - Updates to XML library
- [PN5\_60567](./../5.6.2-release-notes/pn5_60567) - Recursive A-correlative Repeat function causes jQL to hang
- [PN5\_60568](./../5.6.2-release-notes/pn5_60568) - REST: Spurious characters in API\* resource records cause REST to fail
- [PN5\_60569](./../5.6.2-release-notes/pn5_60569) - jQL: ICONV doesn't strip leading zeros
- [PN5\_60570](./../5.6.2-release-notes/pn5_60570) - Secondary Indexes: Make -w the default create-index option
- [PN5\_60571](./../5.6.2-release-notes/pn5_60571) - jBC: Add new version of FOLD() with 3 parameters for D3 compatibility
- [PN5\_60572](./../5.6.2-release-notes/pn5_60572) - Add D3 compatible version of user exit U50BB and WHO command
- [PN5\_60573](./../5.6.2-release-notes/pn5_60573) - Indexes with case insensitive item IDs in the file have problems when an item is updated or deleted
- [PN5\_60574](./../5.6.2-release-notes/pn5_60574) - jQL: Fix issue with CHAR(0) termination in record
- [PN5\_60579](./../5.6.2-release-notes/pn5_60579) - Audit logging creates phantom entries in the error log
- [PN5\_60580](./../5.6.2-release-notes/pn5_60580) - Indexes could become out of sync with the file when the application does not protect simultaneous updates with READU


# New Commands



# New jBC Statements



# New Modules



# Changes to Current Behavior

- jlicensinginfo - Reformatted and contains a new Slot section displayed with the -v option.
- Case Independence: Allow the CHANGE() function to operate in a case insensitive fashion.
- Case Insensitivity: Slow string concatenation.
- jQL: Enable caseless sorting of attribute data. Requires case\_insensitive\_jql\_sort\_attributes = true, which is set by default for the D3 emulation.
- jQL now allows for phrases to be defined with "H".
- SEARCH command now has 2 new options, for compatibility with D3 functionality.-
- S option added to MSG command to suppress the time and date from the message.
- Add support for HOME directory q-to-q pointers.
- -w is the default create-index option for secondary indexes.
- New version of FOLD() with 3 parameters for D3 compatibility added.


# Changes to Commands

- WHERE, LISTU and LOGOFF are now unlicensed


# 


# Changes to jBC 

- jlogdup and jlogstatus don't consume a license. [PN5\_60551](./../5.6.2-release-notes/pn5_60551)


# 


# Statements/Functions

# 


# Daemons

# 


# Additional Notes

- A new device, FILE1, is available for use with D3/AP/R83 file saves


### 

