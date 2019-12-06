# D3 Conversion Manual

**Created At:** 11/7/2017 1:14:12 AM  
**Updated At:** 11/7/2017 1:15:12 AM  


## Concept of D3 Conversion Utility

The D3 Conversion was created to allow D3 developers and end-users to setup the JBASE database in a familiar structure.

### The jBASE structure when loaded on a Windows computer is as follows:

C:\jbase5\5.x – Holds the jBASE database release

### The D3 Conversion Utility adds the following structure:

C:\jbase5\D3CONV    - Directory where the D3 conversion programs and parameters are kept

This directory contains:

bin – Contains the executables for conversion

D3CONV.BP – Programs for conversion

D3CONV.BP]D – DICT of the program file

D3CONV.BP]MOBJECT – Object for conversion programs

doconv – Linux/Unix script to run conversion

DOCONV.BAT – Windows batch file to run conversion

lib – empty directory created when programs are CATALOGed

Manuals – This and other documentation on the conversion process

logs – Logs of conversions run (originally empty)

MachineDefaults – Stores

D3Remote.cmd – Remote.cmd skeleton for Windows

DefaultMachine\_linux – Parameters as maintained by D3.MACH.DEF

DefaultMachine\_windows – Parameters as maintained by D3.MACH.DEF

jBASE\_CONV – Dictionaries for the jBASE\_CONV file

REASON.XREF – Cross reference of reasons programs do not convert

C:\jbase5\D3MACHINES      - all Entities “Virtual Machines” reside here

config – directory of the configuration files for all machines

Config\_EMULATE – Copy as in $JBCRELEASEDIR\config

Config\_EMULATE\_mmddyy\_hhmmss copy of prior Config\_EMULATE(s)

DefaultMachine – Parameters as defined in D3.MACH.DEF

jspform\_deflt – Copy as in $JBCRELEASEDIR\config

jspform\_deflt\_mmddyy\_hhmmss copy of prior jspform\_deflt(s)



*<u>YourMachineName\</u>*    - This would be an entity or a company’s “virtual machine” directory

Created using D3.MAKE.MACHINE

Synonymous with the SYSPROG/DM account for *<u>YourMachineName</u>*

This directory will contain:

SYSTEM             – File of accounts for this entity

MD]D              - MD items for the SYSPROG/DM Account

NEWAC            - List of verbs for this entity’s accounts

CLASHES            - subfile by account, MD clashes for “updated” accounts

USERS            - User file with pre-login commands

USERDIR            - Actual “HOME” directory for entity users

D3.PARAMS            - D3 Suite parameters for this entity

POINTER-FILE – List file for machine if “machine” based lists

### What that structure does for you

Backup of the MACHINES directory tree will backup all entity related data.

Entities (as *<u>YourMachineName</u>*) represent actual physical machines in the Multi-Value arena complete with SYSTEM and SYSPROG/DM Account.

You can have multiple entities “virtual machines” on one physical server.

Users can be created/deleted for each of these individual entities.

D3.ADD.USER / D3.REMOVE.USER (from the entities SYSPROG/DM account)

## Five distinct functions:

### Ready D3 machine for conversion

JBASE.D3CONV                   - Installed on the D3 machine and run to move INDEXES, SYSTEM

### Create the virtual machine(s) or entity:

D3.MACH.DEF                      – Defines the defaults for all entities to be created on the server

D3.MAKE.MACHINE           – Creates entity or entities on the server

### Define functions for the individual entities:  (Must be run from entities sysprog/dm)

D3.SETUP.PTR                                 - Program to assist in printer setup

D3.RESTORE.ACCOUNTS              - Restores accounts, adds users, updates md, adds SYSTEM

D3.UCASE.FILE                                - Program to convert file ID's to uppercase if (B option used

D3.SYSTEM                                      - Add non-Dpoint items to SYSTEM file

D3.INDEXES                                     - Build, Create and Verify INDEXes from D3

D3.RENAME.INCLUDE.b                - Fix quirky problem jBASE has with INCLUDE file called INCLUDE

D3.CREATE.ACCOUNT                  - Create account - adds md, adds to system

D3.ADD.USER                                  - Creates new user in Windows, USERS and USERDIR

D3.REMOVE.USER                          - Routine that removes jBASE Users from Windows USERS

### Convert Programs to jBC for the individual entities accounts

D3.RENAME.INCLUDE                   - Program to change INCLUDE files named INCLUDE to INCLUDES

D3.CONVERT                                   - Front end program for D3.TO.JBASE conversion program

D3.TO.JBASE                                    - D3 specific conversion program front-end for jBASE PortBas

D3.REASON.XREF                           - Create/Maintain BASIC Error to REASON cross reference

### Utilities / support processes

D3.LOGON                                        - Runs commands in USER then ask for LOGON

D3.TAPE.WHAT                               - Check Tape to see if account save or file save

D3.BED                                              - Front-end program for ED to allow BASIC after file

D3.CATALOG                                   - CATALOG program to multiple accounts at once
            D3.DECATALOG                              - DECATALOG program and remove from GLOBAL\_CATALOG

D3.REBUILD.CATALOG                 - Rebuild GLOBAL\_CATALOG file based on account MD pointers

D3.GET.FULLPATH                         - Provides full PATH to file when passed account/file

D3.RPT                                               - Print reports from jBASE\_CONV file



# Windows Platform - Migration from Multi-Valued database (D3)

## Structuring jBASE to look like typical D3


| **Traditional D3**<br> | **PICK D3 Example**<br> | **jBASE**<br> |
| --- | --- | --- |
| D3M<br> | The actual hardware<br> | *machine* is the directory name for the «Machine»<br> |
|     SYSTEM FILE<br> | SYSTEM<br> | C:\jbase5\D3MACHINES\D3M\SYSTEM<br> |
|         ACCOUNTS<br> | ORDER-ENTRY<br> | C:\jbase5\D3MACHINES\D3M\ORDER-ENTRY<br> |
|             MD<br> | MD<br> | C:\jbase5\D3MACHINES\D3M\ORDER-ENTRY\MD<br> |
|                DICTFILE<br> | DICT ORDERS<br> | C:\jbase5\D3MACHINES\D3M\ORDER-ENTRY\ORDERS]D<br> |
|                   DATAFILE<br> | ORDERS<br> | C:\jbase5\D3MACHINES\D3M\ORDER-ENTRY\ORDERS<br> |
| USERS  (D3)<br> | DM,USERS<br> | C:\jbase5\D3MACHINES\D3M\USERS file to hold D3 USER info<br>C:\jbase5\D3MACHINES\D3M\USERDIR to hold each individual users login process (Remote.cmd).  Can either be specific for each person or have one (1) that everyone uses.<br> |


As you can see, jBASE can be setup to look nearly identical to an existing D3 system.  The obvious initial bonus is the fact that multiple "MACHINES" or independent databases can reside on one piece of hardware.

## USERS on your jBASE system

The first difference to note is that D3 USERS are a part of the "D3 virtual machine" and separate from the operating system USERS.  jBASE USERS are the same as operating system USERS.  These users can either be setup via the D3.ADD.USER provided utility or Manage option (right click on My Computer on the server)on windows.

## Assumptions used in this document

For the purpose of this document we are assuming the following:

1. The migration is from D3 Pick to jBASE version 5 for Windows

2. You will be restoring from a pseudo-floppy (hard disk image)

## jBASE advantages and differences

### PATH for programs and JBCOBJECTLIST for subroutines

D3 implementations must either have the program exist in the MD or be referred to by a RUN statement that includes the file and item name.  On jBASE, programs can be located using the MD, but may also be located anywhere else on the system referred to by the PATH and JBCOBJECTLIST environment variables. All programs on jBASE must be CATALOGed.  These programs/subroutines then become verbs on windows that exist somewhere in the PATH.  This concept is different than traditional D3, but with some up front planning, the advantages are immense.  Programs become immediately available to any user having it in their PATH.  There is no need to CATALOG a utility in all your "ACCOUNT" MDs as was needed in traditional D3.  Simply add your utility programs bin (short for binary) directory to the PATH environment variable for all users. i.e. PATH = c:\jbase5\YourMachineName\UTILACCT\bin;c:\jbase5\YourMachineName\AP\bin;c:\jbase5\YourMachineName\AR\bin;etc...  Some planning needs to be taken into account since these three (3) command lines are synonymous:

MAIN                         will run the first MAIN program in the PATH

RUN AP MAIN          will run the first MAIN program in the PATH

RUN AR MAIN         will run the first MAIN program in the PATH

But, with a little upfront design you can migrate any traditional D3 structure and usually take advantage of the PATH/JBCOBJECTLIST environment variables.  **That is why they say on jBASE the MD is optional.**

### Traditional Q-point, D-point and JEDIFILEPATH

All files are located using the MD and/or JEDIFILEPATH. In traditional D3 you can access files in the MD that are either D-points, F-Points or Q-Points.  In jBASE they can be there, but they also can be accessed directly by their native path name \tmp or follow a path set in the environment variable JEDIFILEPATH.

Example:

With the environment variable set: (if *<u>YourMachineName</u>* was AMC and you were in the AR1 Account)

JEDIFILEPATH = .;C:\JBASE5\D3MACHINES\AMC\AR2;C:JBASE5\D3MACHINES\AMC\AR3

LIST CUSTOMERS

This would list the first "CUSTOMERS file" it finds.  First checking the MD then subsequently checking the AR1 "ACCOUNT", AR2 "ACCOUNT" and then AR3 "ACCOUNT" by following the JEDIFILEPATH and this could be accomplished without an MD.  **That is why they say on jBASE the MD is optional.** With a little planning you can easily eliminate the need for Q-Points.

## Planning your Migration (Things to do on your existing system)

1. Do you have mixed case or lower case data or accounts?

D3 allows for lower-case and mixed-case information to be treated without regard to case.  jBASE (as all other D3 emulations) does not allow this.  You need to change that data prior to moving it to jBASE or use the option in the D3.RESTORE.ACCOUNTS to upper case them during the conversion

2. What are valid data accounts and what are system and/or old unused accounts?  Create a table of your system and make notes for each account to be converted.


| Account<br> | Convert?<br> | Note<br> |
| DM<br> | Yes<br> | Contains JBASE.STAGING file<br> |
| MAINLINK<br> | No<br> | Not used anymore<br> |
| AP<br> | Yes<br> | <br> |
| OE<br> | Yes<br> | <br> |
| PR<br> | Yes<br> | Be sure to DX  PR.HIST.OLD<br> |
| UTIL.ACCT<br> | yes<br> | Various utilities used by all accounts.  We need to eliminate SYSTEM specific utilities.<br> |
| etc...<br> | <br> | <br> |


3. Do you use PATHing for your native system?

001 Q

002 ACCT,DICTFILE,{DATAFILE}

Best to convert these to valid Q-Point structure or include them in the JEDIFILEPATH.

Are they Q-POINTS to Q-POINTS?  You will probably want to clean this up.  The             D3.RESTORE.ACCOUNTS utility will attempt to fix this.

4. Do you use the RUN command to execute two or more separate programs with the **same name** in the **same**

"ACCOUNT"?  (See jBASE advantages and differences)

You will need to rename the programs to have unique names.

5. Do you have source code for all your programs?

Best to recompile **on your existing platform**and be sure all programs compile.

You don't want to chase your tail on converted programs and find out they didn't compile on the machine you migrated from.

## Executing your Migration

### 1. Load the jBASE 5 release into C:\JBASE5\ using the 64bit\_jbase5xxx\_win.exe

### 2. Load the D3 Conversion directory

**Create the folder c:\JBASE5\D3CONV**

**unzip the contents of D3CONV.zip into the new folder**

### 3. BASIC and CATALOG the D3 programs

Establish a simple environment by running the DOCONV.BAT  batch file via cmd.exe

c:\...&gt; **cd C:\JBASE5\D3CONV&lt;Enter&gt;**

c:\...&gt; **.\DOCONV.BAT&lt;Enter&gt;**(Be sure to start with dot)

Edit DOCONV.BAT to pertain to your conversion

c:\...&gt; **ED . DOCONV.BAT&lt;Enter
                                    .12&lt;Enter&gt;
                                    012 REM - SET D3MACHINEDIR=C:\JBASE5\D3MACHINES**

**.R/REM -//&lt;Enter&gt;   ←***Assuming C:\JBASE5\D3MACHINES is ok or change that too*

**012 SET D3MACHINEDIR=C:\JBASE5\D3MACHINES
                                    .13&lt;Enter&gt;**

**013 REM - SET D3CONVTYPE=MVBASE
                                    .R/REM - //&lt;Enter&gt;***← Assuming MVBASE or change to D3 if D3***013 SET D3CONVTYPE=MVBASE
                                    .FI&lt;Enter&gt;**Exit then re-execute the new DOCONV.BAT
                        c:\...&gt; **exit&lt;Enter&gt;**
                        c:\...&gt; **.\DOCONV.BAT&lt;Enter&gt;**(Be sure to start with dot)

BASIC and CATALOG the conversion programs

c:\...&gt; **BASIC C:\JBASE5\D3CONV\D3CONV.BP &lt;Enter&gt;**

c:\...&gt;**CATALOG C:\JBASE5\D3CONV\D3CONV.BP &lt;Enter&gt;**

### *4. Define your “MACHINE” using D3.MACH.DEF*

c:\...&gt; **D3.MACH.DEF &lt;Enter&gt;**

*See*D3.MACH.DEF*section for details*

### *5. Create the “MACHINE” using D3.MAKE.MACHINE*

c:\...&gt;**D3.MAKE.MACHINE &lt;Enter&gt; *(<u>YourMachineName</u> = \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ )***

Machine Name :***<u>YourMachineName</u>*****&lt;Enter&gt;**

Machine Parent Directory (&lt;Enter&gt; = C:\jBASE5\D3MACHINES) :**&lt;Enter&gt;**

Enter spooler directory for fip (&lt;Enter&gt; = C:\jBASE5\5.2\..\jBASEspooler) :**&lt;Enter&gt;**

This will create a virtual D3 Machine based at C:\jBASE5\D3MACHINES\*YourMachineName*

Is this OKAY? (Y/N) : **Y &lt;Enter&gt;**

SET D3MACHINE=YourMachineName, then use D3.ADD.USER to add users for this machine.

### *6. Create the user(s) for the machine*

C:\...&gt; **SET D3CONVTYPE=MVBASE  (or D3) &lt;Enter&gt;   ← if not set in DOCONV.BAT**

C:\...&gt; **SET D3MACHINEDIR=C:\JBASE5\D3MACHINES&lt;Enter&gt; ← if not set in DOCONV.BAT**

C:\...&gt; **SET D3MACHINE=*YourMachineName*&lt;Enter&gt;**

C:\...&gt; **D3.ADD.USER&lt;Enter&gt;**

Enter New user name : **myuser&lt;Enter&gt;**

This will setup user *myuser* for *YourMachineName*.

Is this OKAY? (Y/N) : **Y&lt;Enter&gt;**

The user name could not be found.

More help is available by typing NET HELPMSG 2221.

Type a password for the user: ***password (not echoed) &lt;Enter&gt;***

Retype the password to confirm: ***password (not echoed) &lt;Enter&gt;***

The command completed successfully.

Enter Account for Admin to LOGTO (DM/SYSPROG/NONE) : ***DM&lt;Enter&gt;***

### 7. exit and login to Windows

Account Name: **X-ADMIN&lt;Enter&gt;**

Password:**password (not echoed) &lt;Enter&gt;**

### 8. Attach the tape drive (see TAPE section for details)

***<u>C:\tmp\D3pseudofloppy</u>*** would be the full path to the D3 backup file.  If this is “compressed” on D3, then you would need to gunzip it prior to attaching it.

jsh.. à**T-ATT FILE1 DEVICE=*<u>C:\TMP\D3pseudofloppy</u>* {LABEL=R83,500} &lt;Enter&gt;**

**Your command : \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_**

### 9. Restore the accounts from the filesave tape attached

jsh..--&gt;**D3.RESTORE.ACCOUNTS (RV &lt;Enter&gt;*R – Restore Only***

***V – Verbose output***

At this point, you may want to save the machine directory so that you can redo the conversion from this point
            if any subsequent problems made it necessary by simply deleting the directory and restoring from the copy.

### 10. Run the utility again on the restored accounts

jsh..--&gt;**D3.RESTORE.ACCOUNTS (BSV &lt;Enter&gt; or (NSV &lt;Enter&gt; or (NNSV &lt;Enter&gt;**

***B – Run MCU convert of items in files in background***

***or
                        N – Do not convert items to uppercase***

***NN – Do not convert anything to uppercase***

***S - Skip restore of accounts
                        V – Verbose output***

### 11. Be sure INCLUDE files are named INCLUDES before conversion

jsh..--&gt; **D3.RENAME.INCLUDE (T&lt;Enter&gt;**

*if the file renames are correct...*

jsh..--&gt;**D3.RENAME.INCLUDE (V &lt;Enter&gt;**

### 12. Run D3.REASON.XREF to add/maintain known BASIC problems with the conversion

jsh..--&gt; **D3.REASON.XREF&lt;Enter&gt;**

*Add/Maintain known problems*

### 13. Convert programs and compile them

jsh..--&gt;**LOGTO … &lt;Enter&gt;**     (Different accounts)

jsh..--&gt;**D3.CONVERT  &lt;Enter&gt;**(Runs without interaction and allows for reporting)

jsh..--&gt;**D3.RPT FIND.REASONS&lt;Enter&gt;**  (Run report of programs that did not BASIC and errors)

jsh..--&gt;**D3.REASON.XREF&lt;Enter&gt;**(Optionally add known reasons for not converting)

jsh..--&gt;**D3.CONVERT  (NS&lt;Enter&gt;**(If reasons were added, do this to add them to reports)

jsh..--&gt;**D3.CONVERT  &lt;Enter&gt;**(Runs with interaction on items that did not BASIC)

### 14. CATALOG the converted programs

jsh..--&gt;**D3.REBUILD.CATALOG ...&lt;Enter&gt;**(Different accounts)

## D3.MACH.DEF

D3.MAKE.MACHINE defaults

1) Emulation                     : ap

2) CATALOG program directory     : ACCTDIR\bin

3) CATALOG subroutines directory : ACCTDIR\lib

4) RUN program directories       : ACCTDIR\bin

5) RUN subroutine directories    : ACCTDIR\lib

6) FILES directories             : .

7) Full filename for Account MD  : ACCTDIR\MD]D

8) SHELL prompt Entry Program    :

9) Exit debugger Program         :

10) After OFF Program             :

11) LOGIN Program                 :

12) Override JBCLOGNAME           :

13) JBASE\_I18N (International)    : false

14) JBCPORTNO Range               : 1,99999

15) Other ENVIRONMENT VARIABLES   :

16) POINTER-FILE type             : A

17) SP-EDIT like D3?              : Y

18) Default column spacing        : 1

19) Default Printer Width, Depth  : TERM

20) "Machine" base directory      : C:\jbase5\D3MACHINES

Selection:       (# to change, A=All Fields, X=Exit, S=Save)

D3.MACH.DEF is used to define the defaults to be used for SYSTEM file and  REMOTE.CMD when executing the D3 Suite programs D3.MAKE.MACHINE, D3.CREATE.ACCOUNT and D3.ADD.USER.  This utility will also setup the default server information for POINTER-FILE type, SP-EDIT verb, column spacing on jQL reports, printer width/depth and where the "Machines" are to reside.  ACCTDIR will be replaced with the actual account "HOME" directory when SYSTEM file items are created.  User help appears at the bottom of the screen when on individual fields. SPACE or SPACES over the existing entry will delete/clear that field.  The greater-than sign (&gt;) can be entered at any field to invoke the JED editor for that field.  When the item is filed in JED the first 44 characters will be displayed on the screen.

### 1) Emulation                     : ap

Enter the type of emulation to be used.  Press ? for a list of emulations.

The result is put in SYSTEM&lt;21&gt; for the account.  This is also added to the end of the  $JBCRELEASEDIR\config\Config\_EMULATE as a "dup = ap" under the "D3conv" emulation.  Ideally this would be “jbase” to take advantage of  all the jBASE functionality, however this can be set to emulate your original platform to minimize conversion effort.

### 2) CATALOG program directory     : ACCTDIR\bin

Enter the directory where program items should reside when CATALOGed.  ACCTDIR will be replaced by the actual account directory at LOGTO time.

The result is put in SYSTEM&lt;23&gt; for the account.  The EV set is JBCDEV\_BIN

### 3) CATALOG subroutines directory : ACCTDIR\lib

Enter the directory where SUBROUTINE items should reside when CATALOGed.  ACCTDIR will be replaced by the actual account directory at LOGTO time.

The result is put in SYSTEM&lt;24&gt; for the account.  The EV set is JBCDEV\_LIB

### 4) RUN program directories       : ACCTDIR\bin

Enter the directory where program items should be run from.  ACCTDIR will be replaced by the actual account directory at LOGTO time.  This is normally the same as the CATALOG program directory or JBCDEV\_BIN.  However, this can contain multiple directories separated by semicolons (;).

The result is put in SYSTEM&lt;25&gt; for the account.  This appended to the beginning of the PATH EV.

### 5) RUN subroutine directories    : ACCTDIR\lib

Enter the directory where SUBROUTINE items should be run from.  ACCTDIR will be replaced by the actual account directory at LOGTO time.  This is normally the same as the CATALOG SUBROUTINE directory or JBCDEV\_LIB.  However, this can contain multiple directories separated by semicolons (;).

The result is put in SYSTEM&lt;26&gt; for the account.  The EV set is JBCOBJECTLIST.

### 6) FILES directories             : .

Enter the directories where data files will reside.  Dot (.) is the default and instructs jBASE to only look in the account directory for data files.  However, this can contain multiple directories separated by semicolons (;).

The result is put in SYSTEM&lt;27&gt; for the account.  The EV set is JEDIFILEPATH.

### 7) Full filename for Account MD  : ACCTDIR\MD

Enter the full path to the DIR file or hashed file which will hold the MD items for the account.  ACCTDIR will be replaced by the actual account directory at LOGTO time.  This is optional as is the MD in jBASE.

The result is put in SYSTEM&lt;28&gt; for the account.  The EV set is JEDIFILENAME\_MD.

### 8) SHELL prompt Entry Program    : 

Enter the program to be run as a shell (TCL Stack) for all accounts.  This program would be run instead of the customary jsh shell.

This is put in SYSTEM&lt;29&gt; for the account.  The EV set is JBC\_TCLRESTART.

### 9) Exit debugger Program         :

Enter the program to be run when exiting the debugger.

This is put in SYSTEM&lt;30&gt; for the account.  The EV set is JBC\_ENDRESTART.

### 10) After OFF Program             :

Enter the program to be run after typing OFF.

This is put in SYSTEM&lt;31&gt; for the account.  The EV set is JBC\_ENDRESTART.

### 11) LOGIN Program                 :

Enter the program to be run upon LOGIN.  This is different than the LOGIN proc/program in that upon exit it will exit the system instead of returning to the shell.

This is put in SYSTEM&lt;32&gt; for the account.  The EV set is JBCLOGINPROG.

### 12) Override JBCLOGNAME           :

Enter the value for JBCLOGNAME.  By default this will be the WINDOWS user name unless set.

This is put in SYSTEM&lt;33&gt; for the account.  The EV set is JBCLOGNAME.

### 13) JBASE\_I18N (International)    : false

Enter whether data should be stored using the jBASE\_I18N international standard.  This adds overhead, but allows for true international display of data.  The default is false and can be changed to true.

This is put in SYSTEM&lt;34&gt; for the account.  The EV set is JBASE\_I18N.

### 14) JBCPORTNO Range               : 1,99999

Enter the port range to be used.  The default is 1 to 99999.

This is put as a multi-valued field in SYSTEM&lt;35&gt;.  The EV set is JBCPORTNO

### 15) Other ENVIRONMENT VARIABLES   :

Enter other Environment Variables (EV) to be set.  Multiple lines can be entered separated by semicolon (;) or by using the JED (&gt;) and entering on separate lines.

This is put as a multi-valued field in SYSTEM&lt;36&gt; for the account.  The EV set is the one(s) specified.

### 16) POINTER-FILE type             : A

Enter the type of POINTER-FILE or list holding file to be used.  J - jBASE is the default and the behavior for lists will be the POINTER-FILE will be used if present, if no POINTER-FILE is present then the JBCWORK file will be used.  A - ACCOUNT will cause the D3 suite of programs to create a POINTER-FILE for all accounts.  M - MACHINE will cause the D3 suite of programs to create a "machine" based POINTER-FILE to be shared by all accounts (Unless a POINTER-FILE is created specifically in an account.)

This is stored in $JBCRELEASEDIR\config\D3Machdef and is used by D3.MAKE.MACHINE, D3.RESTORE.ACCOUNTS and D3.CREATE.ACCOUNT.

### 17) SP-EDIT like D3?              : Y

Enter how the SP-EDIT is to work.  By default jBASE SP-EDIT is slightly different then the standard D3 SP-EDIT command.  Enter Y to use the alternate D3 SP-EDIT command.

This is stored in $JBCRELEASEDIR\config\D3Remote as a line to set JBC\_OLD\_SP\_EDIT=1 and is used by D3.MAKE.MACHINE and D3.ADD.USER to create users REMOTE.CMD

### 18) Default column spacing        : 1

Enter the number of spaces to put between columns on jQL reports.  The default spacing is 4 and can be changed to 1.  Individual reports can set column spacing to any value using the COL-SPACES jQL modifier.

This is put in the $JBCRELEASEDIR\config\Config\_EMULATE item under the emulation for "D3mach" as old\_jql\_output\_style=true if the setting is 1.

### 19) Default Printer Width, Depth  : TERM

Enter the default printer width and depth or TERM if it is to be controlled by the TERM statement.

This is stored in $JBCRELEASEDIR\config\jspform\_deflt as separate lines representing the WIDTH 132 and DEPTH 64.  If the setting is TERM then these lines are commented out in that item.

### 20) "Machine" base directory      : C:\JBASE5\D3MACHINES

Enter the directory on the server where the jBASE "machine(s)" will be located.

This is stored in $JBCRELEASEDIR\config\D3Machdef and is used by D3.MAKE.MACHINE.

## D3.MAKE.MACHINE

### Machine Name :  *AMC&lt;Enter&gt;*

Enter the name you want for this "machine".  This is usually an abbreviation for the company or division.

### Machine Path : (&lt;Enter&gt; =C:\jbase5\D3MACHINES\AMC) : *&lt;Enter&gt;*

Enter the home directory for this machine.  This will default to the "Machine" base directory enter in D3.MACH.DEF slash the machine name entered in the first prompt.  You can override this to be any valid directory

### This will create a virtual D3 Machine based at c:\jbase5\D3MACHINES\AMC.

### Is this OKAY? (Y/N) : *Y &lt;Enter&gt;*

Enter Y if this is where you want to place this "machine".  Pressing N &lt;Enter&gt; will abort the process.

### Enter Administrative user name (&lt;Enter&gt; = jbaseamc) : *&lt;Enter&gt;*

Enter the Administrator windows user for this "machine".  This user will be created.  If this user already exists then the process will abort.  This will be the first user for this machine and will be used to login and run administrative tasks such as D3.SETUP.PTR, D3.ADD.USERS, etc...

### This will setup admin user jbaseamc for AMC.

### Is this OKAY? (Y/N/X) : *Y &lt;Enter&gt;*

Enter Y to create the user and machine, N to change the user name or X to exit and abort the process.

If you are a user in sudousers the user will be created.  If not, sysadmin will need to create the user and the command needed will be displayed.

### Type a password for the user: *password (not echoed) &lt;Enter&gt;*

Enter the password for the ADMIN user.  No password need be entered if the Admin user will only use the desktop ICON.  However, telnet sessions MUST HAVE A PASSWORD.

### Retype the password to confirm: *password (not echoed) &lt;Enter&gt;*

Retype the same password to verify it was entered correctly.

The command completed successfully.

### Enter Account for Admin to LOGTO (DM/SYSPROG/NONE) : *DM&lt;Enter&gt;*

Enter the account to LOGTO when using TELNET or the DESKTOP icon for the Admin user.  DM is a Q-POINT in the SYSTEM file for SYSPROG.  If NONE is entered then you will be prompted "master dictionary" when you login.

## D3.RESTORE.ACCOUNTS

***Options...***

***VV - Very verbose output***

***V - Verbose output***

***B - Run uppercase conversion processes as background jobs***

***N - Do not convert file ITEMS to all uppercase***

***H - HEADING on verbose report (Must hit return every page, usually for testing)***

***R - Restore accounts only, no conversion***

***S - Skip restore and only run conversion***

***Any other options get passed to SYSRESTORE***

***1.. Logs entire processes to JBASERELEASEDIR\tmp\D3CONV\_timedate.log***

***2.. Creates CLASHES file for MD clashes for each account***

***3.. Reads "DefaultMachine" definition created by D3.MACH.DEF program***

***4.. Must be run in SYSPROG account of the machine***

***5.. Must have tape attached if not "S" option***

***6.. Creates list of new accounts after restore OR prestored list if "S" option***

***7.. Uses SYSRESTORE with AC options to restore accounts***

***8.. List "jac\_" files SYSRESTORE could not process***

***==== R option stops here,  S option skips tape and starts here ====***

***9.. Process new directory items as NEW accounts***

***10.. Create SYSTEM entries for all NEW accounts...***

***Convert Account names to Uppercase if needed (move lower to upper)***

***Write SYSTEM with prepended "X" if duplicate (DM for example)***

***Create individual account CLASHES sub file***

***Convert file names in account to uppercase if needed***

***Convert itemIDs in files to uppercase if needed  (Unless N option)***

***Marks account as "MCUComplete" when processed***

***Loop through NEW accounts again***

***Create PerConvert\_MD copy of vanilla account MD***

***Fix any Q-points that are malformed or not uppercase***

***Loop through NEW accounts again and***

***Update MD with jBASE MD]D items and move existing conflicts to CLASHES,account***

***Validate Account MD items***

***D-pointers eliminated***

***A/S DICT items that are malformed are fixed***

***pq/pqn changed to PQ/PQN***

You must attach the tape device before running the D3.RESTORE.ACCOUNTS program.  If you do not attach a tape device then the following message will appear.

Must attach a tape device with T-ATT first.

i.e. T-ATT FLOPPY0 DEVICE=/tmp/pflop1 label=R83,500



## D3.REASON.XREF

This program allows you to maintain a BASIC error to REASON cross-reference.  This will then allow the D3.CONVERT utility to add these reasons to the jBASE\_CONV file to allow for grouping and consolidation of conversion problems.  With D3.RPT utility you can then report these problems and create a strategy to possibly overcome these conversion errors en masse.

Compile error to REASON XREF

===============================================================================

1 UOPEN

UOPEN not supported

2 Cannot use quoted string with indirect reference '@'            ←  This is a portion of the actual error from BASIC

Change EQU to =                                                               ←  This is what will be placed in jBASE\_CONV

3 UMESSAGE

UMESSAGE not supported

4 near RESERVED WORD "CHARS"

CHARS to V.CHARS

5 near RESERVED WORD "FIELDS"

FIELDS to V.FIELDS

6 UEXECUTE

UEXECUTE not supported

7 INCLUDES/FUNCTIONS

INCLUDES FUNCTIONS FUNCTIONs not valid

8 Statement RETURN() only valid in a FUNCTION

RETURN value NOT SUPPORTED IN jBASE SUBROUTINE

9 INCLUDES/CPI.FUNCTIONS

INCLUDES CPI.FUNCTIONS FUNCTIONs not valid

10 INCLUDES/PCL

INCLUDES PCL FUNCTIONs not valid

11 UCLOSE

UCLOSE not supported

-------------------------------------------------------------------------------

S=Save, X=Exit, F=Forward, B=Back, A=Add, D=Delete or # to change :

## D3.CONVERT

Usage : D3.CONVERT {filename itemname(s)} {(A,C,D,H,I,L,N,O,P,R,S,U,X}

filename can be "\*" if you want to convert the itemname as referred to in the CATALOG pointer

Normally first run in an account, what programs to convert...

A       - Convert all items in the BP files

D       - Convert all items in the BP files with DICT (assume object)

L       - Limit BP files selected to only files local to this account

C       - Convert all items CATALOGed in the MD of this account

Subsequent runs...

S - Skip items with REASON for not compiling

O - Process ALL items for this account that did not BASIC

\* this would include any CATALOGED items regardless of BP file

Interaction, Normally unprompted first run and interactive on subsequent runs

I - Force Interactive mode.  JED and File prompts

N - Force non-interactive mode

Other Options...

H - Apply "Test RUN" Heading so screen stops

P - Output to printer

R - Restart - READ item from preconverted BP\_D3PRE file

U - Do not run through conversion

X - (Silent mode) NO Verbose output

NO log /opt/jbase5/D3CONV/logs/D3CONVERT\_datetime.log

To use other than JED for the interactive mode editor, set the environment variable CONVEDITOR

SET CONVEDITOR=D3.BED will use a front-end of ED which may be more familiar for D3 users

### jBASE\_CONV file layout

BPACCT         -- 0 (G0@1) = ACCOUNT

BPFILE           -- 0 (G1@1) = BPFILE

BPID               -- 0 (G2@1) = BPID

COMMENT    -- 1 - Conversion Comment

0-Not yet converted

1-Invalid BP File

2-Cannot read item

3-BASIC successful

4-Did not BASIC

5-Invalid File

CATACCT     -- 2 - Accounts with CATALOG pointer in MD

MDID             -- 3 - MDID if not same as BPID

REASON        -- 4 - Did not BASIC reason

CHANGES     -- 5 - Hand changes needed

BASICERRS  – 11 – Errors from BASIC

SRC.MYACCT – 1 if source is in the current account, 0 otherwise

CAT.MYACCT – 1 if source is CATALOGed in current account, 0 otherwise

## D3.CONVERT Flow

The first time the program is run it will create two files, one with a \_D3PRE prefix and another with a \_D3W prefix for each BASIC code file.  For example if a BP file was being converted it would create a BP\_D3PRE file and a BP\_D3W file.  The BP\_D3PRE file has all the current code in BP copied into it.  The BP file is cleared and the BP\_D3W file is empty.  As items in BP are processed, the item is copied from BP\_D3PRE to BP and compiled.  If the compile is successful the item remains in BP, if it fails to compile it is moved to BP\_D3W.  If interactive mode is used, the item is moved back to BP to edit, then compile.  Again if the compile is successful the item will remain in BP, if it fails after edit it is moved to BP\_D3W.

When the conversion process has run all BP original BP items will be in BP\_D3PRE, all that compile correctly will be in BP and all that fail to compile will be in BP\_D3W

Subsequent runs of D3.CONVERT will skip items in BP since they compiled correctly, will read the item from BP\_D3W for those still needing to convert and put them in BP to be edited and compiled.  If they compile correctly they will remain in BP and if they fail to compile they will be moved to BP\_D3W

## Using D3.CONVERT

The D3.CONVERT utility was designed to be run in all accounts that are to be converted and run programs.  It is intelligent enough to know if the program has already been converted in a preceding account.  This program in an ideal situation will be run once without options which will convert and compile all the programs in a batch process and keep a report of those items converted and not converted.  Subsequent runs of the utility will assume you wish to interactively edit those items that did not compile and either fix and compile them or mark then with a reason they are not to be converted or are to be converted at a later point. Reporting is available at any point by using jQL on the jBASE\_CONV file which is updated by this utility

### Assumptions

The assumption of this utility is that you will want to convert only those items CATALOGed.  Since CATALOGing programs has been the most efficient process since 1980 when it was first introduced on the Reality (PICK) computer.  A CATALOG pointer for those programs run in an account will exist in the MD of that account.  D3.CONVERT will select those MD items and generate a list of files to be converted as well as populate the jBASE\_CONV file with these items.  This assumption is used because most D3 system contain a large amount of programs which exist, but are not used and very possibly do not compile.  If your system uses “RUN BP …”, then this assumption may not work.  In that case there are options for converting all items in the BP files or just those that have a matching DICT level item (assuming that DICT item represented D3 object).  The other two assumptions of this program are that on D3 which is case-insensitive by default, that all items are supposed to be UPPERCASE and that JED jBASE editor will be used for the interactive mode editor.  The interactive mode editor can be set to other than JED by setting CONVEDITOR=*editor* where*editor*is the editor you want to use.

### Typical usage

jsh DM ~ --&gt; **LOGTO TPSYS &lt;Enter&gt;**

jsh DM ~ --&gt; **D3.CONVERT &lt;Enter&gt;**

Add / Delete files by removing or adding lines

FilesToConvert\_FM.UHL

TOP

.**P &lt;Enter&gt;**

TOP

001 ATHOST FTBP

002 BAD\_FM.UHL CS.BP

003 BASICLIB BASICLIB

004 FM.UHL BP

005 FM.UHL EXTERNAL.SUBROUTINES

006 JIM TOOLBOX

007 SHARED-FILES BASLIB

008 TPSYS BP

009 TPSYS EXTERNAL.SUBROUTINES

010 TPSYS MGW.BP

BOTTOM

.**FI &lt;Enter&gt;**

Record 'FilesToConvert\_FM.UHL' written to file

Do you want only BP items (C)ATALOGed in the MD, items with (D)ICT item in BP, or (A)ll items : **C &lt;Enter&gt;**

**~~~ CONVERSION runs without interaction and creates report items in jBASE\_CONV file ~~~**

jsh DM ~ --&gt;**D3.RPT FIND.REASONS &lt;Enter&gt;**

**PAGE    1                                                                                                                     14:11:36  11 SEP 2014**

**BASIC errors................................................................................................................................**

**BAM.FIND**

**"BAM.FIND", 87 (offset 23)  near "V.OFF":**

**IF C.FLG THEN CASING V.OFF ELSE CASING ON**

**^**

**syntax error**

**EZ.EDITOR**

**"EZ.EDITOR", 63 (offset 9)  near "V.OFF":**

**CASING V.OFF**

**^**

**syntax error**

**"EZ.EDITOR", 65 (offset 9)  near RESERVED WORD "ON":**

**CASING ON**

**^**

**syntax error**

**CYG.CUSTOM.FIELD.MAINT**

**[jpp error 1] line 176:**

**CYG.LIB/CFLDMNT.CONST/CONV.VALIDATE : File not located - suggest option -I &lt;pathname&gt;**

**"CYG.CUSTOM.FIELD.MAINT":**

**fatal pre-processor error - compilation abort**

**"CYG.CUSTOM.FIELD.MAINT":**

**%error**

**^**

**syntax error**

From this report we see that two things can be added to the REASON.XREF file to allow us to report better on what programs will need to be fixed.  Using D3.REASON.XREF we can add these and then rerun the D3.CONVERT without interaction to update the jBASE\_CONV file with the results...

jsh DM ~ --&gt;**D3.REASON.XREF &lt;Enter&gt;**

**~~~ Add those two errors and REASON for not converting ~~~**

**14 CASING**

**jBASE does not support CASING function**

**15 File not located**

**Missing INCLUDE file**

jsh DM ~ --&gt; **D3.CONVERT (N&lt;Enter&gt;**

Use *D3.RPT* to report on items needed to be converted by hand then used *D3.CONVERT* to go through all the items are *D3.CONVERT filename*to do a specific file or *D3.CONVERT filename itemname* to convert a specific item or use an *active-list and use D3.CONVERT filename* to go through the items in that list until all items are converted that need to be and the conversion report explains those not converted.

## D3.RPT

This is the reporting facility for the jBASE\_CONV file created and updated by the D3.CONVERT program.  By default the program will list those phrases found in the DICT of jBASE\_CONV and prompt for “Criteria”.  You can at this point either type one of the listed phrase names and/or put DICT items for SELECT and LIST criteria.

## D3.CATALOG

This program will CATALOG items based on the ACCOUNT(s) where that item is to be run.  This is accomplished by adding a GLOBAL\_CATALOG file to the base of the machine or DM/SYSPROG account which keeps a cross-reference of all accounts that use the item and running a jBASE CATALOG which places the object in duplicate in all the different accounts bin/lib directories.  This allows those familiar with the PICK or MV way of sharing programs to work.  You can also interject certain groups of Programs/Subroutines by contradictive to the O/S PATH

GLOBAL\_CATALOG file format for a PICK/MV standard program/subroutine

000 Base Account @ Filename @ Program/Sub ID

001 ***<u>NULL</u>***These are used for groups of programs (a typical PATH driven program)

002 ***<u>NULL</u>***These are used for groups of subroutines (a typical PATH driven subroutine)

003 Account Name(s) [multi-valued]             i.e. COMMON-FIP]ORDERS]GL

004 Status of last CATALOG                        i.e. GOOD

005 Timestamp of last CATALOG                i.e. 10:07:27  11 NOV 2014

006 User who ran last CATALOG                 i.e. danfip

007 Account CATALOGed or “Rebuild”      i.e. \*Rebuild\*

GLOBAL\_CATALOG item for a group or standard O/S type program/subroutine

000 Base Account @ Filename                      i.e. SPOOLER-UTILS@BP

001 Full PATH to bin (if not CATALOGed per account) i.e.  C:\JBASE5\D3MACHINES\SPOOLER-UTILS\bin

002 Full PATH to lib (if not CATALOGed per account) i.e.   C:\JBASE5/D3MACHINES\SPOOLER-UTILS\lib

Then, when D3.CATALOG is run on the BP file...

003 ***<u>NULL</u>*** This is used for account based  Account Name(s) [multi-valued]  i.e. COMMON-FIP]ORDERS]GL

004 Status of last CATALOG                        i.e. GOOD

005 Timestamp of last CATALOG                i.e. 10:07:27  11 NOV 2014

006 User who ran last CATALOG                 i.e. danfip

007 Account CATALOGed or “Rebuild”      i.e. ORDERS

If the group or standard O/S type is used, then you would add this to the PATH and JBCOBJECTLIST variables in the SYSTEM item for those accounts using that group of programs

ED SYSTEM ORDERS

.25

025 C:\JBASE5\D3MACHINES\xxx\ORDERS\bin

R;;C:\JBASE5\D3MACHINES\xxx\SPOOLER-UTILS\bin;

.26

026 C:\JBASE5\D3MACHINES\xxx\ORDERS\lib

R;;C:\JBASE5\D3MACHINES\xxx\SPOOLER-UTILS\lib;

## D3.LOGON 

This is the program that is executed by the REMOTE.cmd file.  It is run as the last line of this command file as $JBCRELEASEDIR\bin\jsh -s jsh -c D3.LOGON.  The program EXECUTES all the commands in the USERS file starting with line 12.  If there is no command to LOGTO an account then the program will prompt "master dictionary" and optional password.

## D3.CREATE.ACCOUNT

This process will create a SYSTEM pointer, UpdateMD and possibly add POINTER-FILE depending on D3.MACH.DEF settings.

### New Account Name : *TEST1&lt;Enter&gt;*

Enter the name of the account.  This will be the name of the item created in the SYSTEM file.

### Enter directory for new account.  &lt;Enter&gt; = c:\jbase5\YourMachineName\ESS*&lt;Enter&gt;*

At this point you can press enter to create (or point to the existing account) at the default location, which is derived from the "machine" directory slash account name.  This can be any valid existing or new directory.

### Is this correct? (Y/N/X) : *Y&lt;Enter&gt;*

Enter Y to process, N to change the directory or X to exit and abort the process.

This message will show reminding user to use D3.ADD.USER

Use D3.ADD.USER to create new users for this or other accounts

## D3.ADD.USER

### Create User for *<u>YourMachineName</u>*

### Enter user name : BOB*&lt;Enter&gt;*

Enter the user name for the user on the *<u>YourMachineName</u>* "machine".  This process must be run from SYSPROG/DM of the "machine".

### Enter Account name to LOGTO or &lt;Enter&gt; for NONE :*&lt;Enter&gt;*

Enter the account name that this user will initially log into.  If no account name is entered then the user will be prompted for "master dictionary" and optionally password when they login.

### This will setup user "BOB" for *<u>YoutMachineName</u>*.

### Is this OKAY? (Y/N/X) : *Y&lt;Enter&gt;*

Enter Y if the user and machine are correct, N to re-enter information or X to abort the process.

### Type a password for the user: *password (not echoed) &lt;Enter&gt;*

Enter the password for the user.

### Retype the password to confirm: *password (not echoed) &lt;Enter&gt;*

Retype the same password to verify it was entered correctly.

## D3.REMOVE.USER

The D3.REMOVE.USER program will allow you to remove a user by specifying the name after the command.

### jsh--&gt;*D3.REMOVE.USER <u>WindowsUser</u>&lt;Enter&gt;*

This will delete the following users:

ESS-ADMIN

### Is this okay? (Y/N) :*Y&lt;Enter&gt;*

Enter Y to delete the user or N to abort the process.

### jsh--&gt;*D3.REMOVE.USER \*&lt;Enter&gt;*

### Enter Machine or "ALL" : *ALL&lt;Enter&gt;*

Enter the "machine" name where you want ALL users deleted or ALL to delete all jBASE users for all machines.

This will delete the following users:

BOB IBM-ADMIN WCA-ADMIN

### Is this okay? (Y/N) :*Y&lt;Enter&gt;*

Enter Y to delete the user or N to abort the process.

### Do you want to delete the ESS machine? (YES/NO) : *YES&lt;Enter&gt;*

If ALL users are deleted you are prompted to delete the "machine". YES will remove the entire machine.

## D3.SETUP.PTR

### Form-Q Printer Name            Printer Description  Form-Type Form-Xlate

1 F0     //DESKTOP/apollont      Apollo B/W

2 F1     //DESKTOP/HPDeskJet     HP DeskJet 612C

3

~~~~~    ~~~~                      ~~~                  ~~~        ~~

Selection:       (# to change, X=Exit, S=Save)

This process will find all the shared printers on the server and sequentially assign them F numbers 0 through the end.  These F numbers can be removed if this shared printer is not to be used by jBASE or changed to match an already existing F number scheme.  If new printers are added later, then they will appear after D3.SETUP.PTR has been run once, then they will appear on the list, but will not have a F number assigned.

### ###

This column is the sequential number to use to change this line when at the Selection prompt.

### Form-Q

This is the F number used in the SP-ASSIGN process to refer to this printer.  Entering D at this prompt will allow you to delete that printer from the setup.

### Printer Name

This is the windows shared printer path

### Printer Description

This is the printer description and is defaulted from windows.  This is a free-form field and can be any description you desire.

### Form-Type

Enter the form type for this printer.  The entry here prefixed with "jspform\_" should reside in $JBCRELEASEDIR\config.  This item can be used to define many aspects of the printer form.  The default form is a well documented example included with the jBASE install called jspform\_deflt.  To use this form either leave the field blank or use dash (-).

### Form-Xlate

Enter the translate table to be used for this printer.  The entry here prefixed with "jspxl\_" should reside in $JBCRELEASEDIR\config.  This item can be used to translate characters as they are being sent to the printer.  The default form is a well documented example included with the jBASE install called jspxl\_deflt.  To use this form either leave the field blank or use dash (-).
