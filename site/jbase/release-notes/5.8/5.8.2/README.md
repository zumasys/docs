# jBASE 5.8.2 Release notes

<PageHeader />

This release includes internal bug fixes and the following enhancements and patches:

## Patches

- [PN632](./pn632/README.md)   - jBC: LOOP WHILE READSEQ DO enhancement  
- [PN1204](./pn1204/README.md) - Enhancement: Add the ability to run a subroutine as a program  
- [PN1206](./pn1206/README.md) - jBC: DIM statement causes segmentation error with large arrays  
- [PN1223](./pn1223/README.md) - Spooler: Maintain a script that can regenerate all existing formqueues  
- [PN1239](./pn1239/README.md) - jSQL query does not treat null as 0  
- [PN1242](./pn1242/README.md) - jQL: F-correlative with Repeat operator causes segmentation error in ROS emulation
- [PN1251](./pn1251/README.md) - jQL: Scanning a file can cause a segmentation error  

## New @variables

The following @variables have been implemented:

[@FILEVAR](./../../../jbc/@variables/#filevar)  
[@USER0](./../../../jbc/@variables/#user0)  
[@USER1](./../../../jbc/@variables/#user1)  
[@USER2](./../../../jbc/@variables/#user2)  
[@USER3](./../../../jbc/@variables/#user3)  
[@USER4](./../../../jbc/@variables/#user4)  

## Note

>New dictionary items `MOD.DATE` and `MOD.TIME` have been added to display the date/time a record was modified.  
>Use [UpdateMD](../../../../jbase/accounts/the-md-and-voc-file/README.md) to update your local MD/VOC files.

[Back to 5.8.x Release Notes](./../README.md)
  
<PageFooter />
