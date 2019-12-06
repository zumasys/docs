# Data Conversion

**Created At:** 2/27/2019 2:49:02 PM  
**Updated At:** 5/24/2019 7:14:40 PM  


## <iframe width="640" height="360" class="fr-draggable" src="https://www.youtube.com/embed/KsVIBNmAmQ0?wmode=opaque" frameborder="0" allowfullscreen=""></iframe>


## What do I start with? 

This article assumes you have already loaded the jBASE release using the jBASE installer and have moved your data from your existing MultiValue box into the jBASE data directory as defined in the jBASE Installer.  Now that you have your data loaded as jBASE files in your jBASE data directory and have established the environment for your new jBASE server, you are ready to convert those directories and files to jBASE accounts and begin converting programs/procs and MD items.  Most MultiValue implementations use MD and that is what is referred to in this document.   If you are coming from U2 or Prime type implementations you may need to use VOC where MD is mentioned.

## Formulating a plan of attack

You are now working with directories in your jBASE data directory that contain the data files, program files, proc files and master dictionaries (MD) of the original source machine as jBASE files and directories.   Many of these directories are system accounts and unused accounts which do not need to be converted.   It is best to start with a table of these accounts and organize those that you want to convert, those you want to keep, but not convert and those that you do not want to keep at all.

Here is an example of a typical system to be converted.  The directory list was retrieved by doing ls -1d from the jBASE data directory

Directory -- The directory under the jBASE data directory (in our case /dbms)
Description -- A description of what the account does to aid in figuring out how to convert
SYSTEM file -- A working column for notes on whether to convert and special things to do or done for that conversion: Yes=to be converted, SYSTEM=CREATE-ACCOUNT has been run, Keep as directory=Keep files but do not add a SYSTEM item.
MD -- Status of MD conversion: UpdateMD=UpdateMD run, Clean=removed superfluous items like CATALOG pointers and other such items not used by jBASE, Done=Removed PROCS, MACROS and other items that are not pertinent to the jBASE system.
Procs -- Name of proc files, then TESTED if complete
Programs -- Name of program files, then TESTED if complete


| Directory | Description | SYSTEM file | MD | Procs/Paragraphs/Macros | Programs |
| --- | --- | --- | --- | --- | --- |
| ACCUTERM | Accuterm for D3 | No, load new for jBASE | N/A | N/A | N/A |
| BAM | Program Generator | SYSTEM | Clean | BAM.PROCS -- TESTED<br>GEN.PROCS | BAM.BP -- TESTED<br>GEN.BP -- TESTED<br>UTIL.BP |
| D3REF | D3 help account | Keep as directory | N/A | N/A | N/A |
| DM | Data manager account for D3 | Keep as directory | N/A | N/A | N/A |
| EDI.PGM | EDI programs | Yes | <br> | <br> | <br> |
| ... | <br> | <br> | <br> | <br> | <br> |


### 


### SYSTEM file 

The directories in your jBASE data directory now contain the data files, program files, proc files and master dictionaries (MD) of the original source machine, but in a jBASE format.   In order to be able to use these like multi-value "Accounts", we will need to add them to the SYSTEM file.   jBASE now provides a utility for that called CREATE-ACCOUNT.  CREATE-ACCOUNT can be used to create a new multi-value account or in the case of converting from an existing multi-value system , it can create the appropriate SYSTEM file entry for an existing directory in the jBASE data directory.  As the table above shows, there may be times you will want to keep the data from the source machine, but not actually create the account.  Here is the command as we used it to create the BAM account:

#### Step 1

```
LOGTO JBASEADM    
```

This is the jBASE administrative account as created by the installer.

#### Step 2

```
jsh> CREATE-ACCOUNT -f -ed3 BAM            
```

This will CREATE-ACCOUNT, -f will allow it to force creation even though the directory contains files, -ed3 will create it with JBCEMULATE=d3 and BAM in this case would already exist in the database directory and be attached.  If BAM did not exist, it would be created as a new account.

### 


### MD 

The new account when created will already have a MD from the original source machine.  The first process after creating the account would be to assure the "logon MD" if it exists for the new account is not run when you LOGTO that account to begin the migration.

#### Step 1

```
jsh> ED /dbms/BAM/MD BAM  -- 
```

The full path to the MD is the jBASE data directory slash account slash MD space BAM.  The "logon MD" if it exists will be the name of the account for most multivalue machines or possibly LOGON for U2 type source machines.

If the MD does not exist, you can exit the editor and begin the migration of this acccount as in Step 2, if it does exist, insert these two lines at the top and file the item.

```
. I
001+PQ
002+XMigrating
003+
.FI
```

#### Step 2

Create a MD\_ORIG file and copy all the MD items to it, so you always have a copy of the MD as it came from your source multi-value system.

```
jsh> LOGTO BAM
Migrating
jsh>CREATE-FILE MD_ORIG
jsh>COPY FROM MD TO MD_ORIG ALL
```

#### Step 3

Update the existing MD with definitions used by jBASE when an MD Is used

```
jsh> UpdateMD
```

#### Step 4

Removing superfluous information and procs and processes not needed in jBASE.   This step will need to be done before go-live, but does not need to be done before converting the account.   There are several easy steps to remove those items which are not used in jBASE and further analysis may be needed to determine those procs and processes you will not want in the MD.    Remember you will be deleting items from the MD, but all items will remain untouched in MD\_ORIG.

```
jsh> SELECT MD WITH *A1 = "V]"   <-- These are catalog pointers and other D3 verb pointers, not used by jBASE.
xxx Records selected
>>DELETE MD  <-- This will remove them from the MD file.
```

The next step would be to remove all procs, paragraphs and macros from the MD since the majority of them are used for system type processes from the source multi-value machine and may not apply to your new jBASE server.   Remember, the items will still exist in MD\_ORIG and can be moved into the MD if needed later.

```
jsh> SELECT MD WITH *A1 = "PQ]""PA]""N]"  <-- This will select procs, paragraphs and macros respectively.
xxx Records selected
>>DELETE MD  <-- This will remove them from the MD file.
```

All procs, paragraphs and macros are removed.   As you find items needed, you can , move them back from MD\_ORIG and test.   An example of this would be the logon proc if it existed

```
jsh> COPY FROM MD_ORIG TO MD BAM   <-- This is the one-line syntax COPY to copy the logon proc back to the active MD
```

### 


### PROCS/Paragraphs/Macros 

PQ and PQN type procs have few inconsistencies between multi-value implementations and will therefore have little need of change to migrate to jBASE.   The only thing you will need to do is possibly use the MD\_ORIG from the MD process and find the PROC files that will exist in your account.  Using jBASE at the linux shell, you can list the MD\_ORIG items that start with PQ and return a list of all the lines that start with a left parenthesis which is how multi-value runs a proc in a separate file from the MD.

```
jsh> bash
$SORT-ITEM MD_ORIG WITH \*A1 = "PQ]" HDR-SUPP \(S | grep ^( | sort | unique
(CA.PROC CALCULATE.TERMS)
(GL.PROC)
(HA.PROC HELP)
(PROK
(PROKS )
...
```

From this list for example, you can see you refer to PROCS in CA.PROC, GL.PROC, HA.PROC, PROK and PROKS.  You will want to check if these proc files exist and if they do, whether they would pertain to the new jBASE system.   Those that need to run on the new jBASE server will want to be put back into the MD.   It is probably best to only move those back that you are sure you use.   If you miss one, it will come up in testing.

Paragraphs and Macros are usually administrative or system type chores.   You will want to review these as well and move those that would pertain back to the MD

```
jsh>SORT-ITEM MD WITH *A1 = "PA]""N]"
```

### 


### Programs

jBASE BASIC is very similar to all the other multi-value BASIC languages in syntax and function.  A majority of your BASIC code will compile without modification.   The main task is finding those BASIC program source files.   Most multi-value platforms (including jBASE) do not have any identifiers to differentiate BASIC source files from data files such as CUSTOMER or ORDER.   Usually a reliable option is to find those items in the MD\_ORIG which represented CATALOG pointers to BASIC programs.   This is not mandatory, but is probably done on the largest percentage of multi-value machines.  Here are a few variations for discovering the files using that option

#### D3 machines

Create this DICT in the MD

```
jsh> ED MD CATFILE
.I
001+A
002+4
003+CAT FILE
004+X
005+X
006+X
007+X
008+G0 1
009+L
010+10
011+
.F
.R9/X//
.FI
```

```
jsh> SSELECT MD_ORIG WITH *A1 = "VR" BY CATFILE CATFILE
>> SAVE-LIST MIGRATE
jsh> SORT-LIST MIGRATE (U
jsh> GET-LIST MIGRATE
>> SELECT MD_ORIG <-- this validates they are actual files on the old system
>> SAVE-LIST MIGRATE
jsh> COPY-LIST MIGRATE (T
1 BAM.BP
2 BP
3 PR.BP
4 SUIBP
5 SYSPROG.BP
6 TEETIME.BP
…
```

#### Universe or Unidata (U2) platforms

Create this DICT in the VOC

```
jsh> ED VOC CATFILE
.I
001+A
002+9
003+CAT FILE
004+X
005+X
006+X
007+X
008+F;9;C1;9(L0);C2;-;[] <-- takes all but last 2 characters. This ends with left square bracket, right square bracket
009+L
010+10
011+
.F
.R9/X//
.FI
```

```
jsh> SSELECT VOC_ORIG WITH *A1 = "V" BY CATFILE CATFILE
>> SAVE-LIST MIGRATE
jsh> SORT-LIST MIGRATE (U
jsh> GET-LIST MIGRATE
>> SELECT VOC_ORIG <-- this validates they are actual files on the old system
>> SAVE-LIST MIGRATE
jsh> COPY-LIST MIGRATE (T
1 BAM.BP
2 BP
…
```

#### Other MultiValue platforms such as GA, ULTPLUS, etc.

Create this DICT in the MD

```
jsh> ED MD CATFILE
.I
001+A
002+5
003+CAT FILE
004+X
005+X
006+X
007+X
008+G0 1
009+L
010+10
011+
.F
.R9/X//
.FI
```

```
jsh> SSELECT MD_ORIG WITH *A1 = "P" BY CATFILE CATFILE
>> SAVE-LIST MIGRATE
jsh> SORT-LIST MIGRATE (U
jsh> GET-LIST MIGRATE
>> SELECT MD_ORIG <-- this validates they are actual files on the old system
>> SAVE-LIST MIGRATE
jsh> COPY-LIST MIGRATE (T
1 BAM.BP
2 BP
...
```
