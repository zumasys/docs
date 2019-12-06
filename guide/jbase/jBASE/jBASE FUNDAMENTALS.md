# jBASE FUNDAMENTALS

**Created At:** 4/27/2017 7:40:13 PM  
**Updated At:** 8/28/2018 6:34:35 AM  


<!--[if !supportLineBreakNewLine]-->

# Prerequisites

To get the most out of this document, it is recommended that the user has an installed licenced copy of jBASE. A basic understanding of jBASE terminology will be an advantage.

# 


# Document Scope

This document will cover  fundamentals of jBASE software. The following will be covered:

- Our Roots (/)
- MultiValue data structure
- Files
- This MD/VOC/SYSTEM thing
- Understanding jql
- Understanding dictionaries
- jcl procedure language
- jbc


# 


# ROOTS (/)

jBASE may feel strange as a lot of things may not be intuitive to programmers that uses non multivalue platforms. It should be noted that jBASE has its roots in the MultiValue (MV) data base environment and tries to maintain backward compatibility to those legacy systems.

## 


## Just What Are These /s

The first step was the GIRLS(General Information Retrieval Language System). This lead to what today is known as jql.

Initially, a database was built into the OS, and only procedure language was used. BASIC was added later. This was the PICK system. PICK licensed their OS to many companies. Eventually the database was supported by other OS's. jBASE was born out of this.

jBASE's Data Base structure and enhanced BASIC programming language made application development quick and easy. Applications developed on jBASE tend to be feature rich.



## Ports

The emphasis on port number is a result of intellectually challenged terminals in the old days being connected to the main computer (servers) via a serial connector in a star network. Each serial connection was a port with a specific number.

Port 0 was usually the system console, but could also be used for application purposes. As an example, If a 12 port license was purchased,a total number of 12 serial connections on the back of your computer (0-11) were available for use. Application programmers wrote their own security based on port number since each user always had their own port.



- Today, the Port Number concept has been preserved even though  tty port changes each time a connection is established. Each jBASE user is assigned a unique port number.


### 


## Config\_EMULATE

The Config\_EMULATE file in the configuration directory of jBASE defines emulation settings. JBCEMULATE defines configuration label as well as which label to start from. A label can be anything you want

- Universe
- R83
- Lee




Standard emulation settings are provided at installation. The emulation settings are user definable, meaning settings from another emulation can be migrated or added to the current installation. Some settings are compiled into executables, others are interpreted at run-time.

This file also defines backward compatibility to legacy functionality, even though not all legacy systems performed the same function the same way.

If needed, cursor positioning @(-# ) can be defined here. Also, emulation specific functionality such as;

- named\_common = unassigned
- invert\_F\_correl = true
- openseq\_creates = true
- returning\_am\_delimited = true
- tconv\_no\_replace=true,


can be defined here. These definitions are set prior to compiling and testing, then documented in Config\_EMULATE.txt.



# MultiValue Data Structure

In this data structure, more than one piece of information is stored in a column (field, attribute), separated by a database maintained delimiter (ASCII 253). This data structure has been described as a cube, since it have depth. Others have referred to it as a rock, as all dimensions (columns, rows, and values) can be of variable length.

## 


## **MultiValues**

Other more familiar terms that refer to multivalues include :

- Nested Tables
- Chaptered Row Sets – ADO
- Data Shaping – SQL
- Hierarchical Data Grid – VB Control
- Non First Normal Form – University studies




## **MultiValue Structure**

The structure of multivalued data is where one field has multiple pieces of information in it. Each piece of information in a multi valued field is separated by a special delimiter known as a Value Mark (CHAR(253)). Since all fields are variable length, you can have as many, or as few, multi values in a field as you require.



### **MultiValue Uses**

Examples of some typical uses of multi values include:



**1. Multi-Line Address**

Each line of an address can be another value. A multi value field can be used to store various lines of an address. For example:

- Value 1 – street address
- Value 2 – floor
- Value 1 – street address
- Value 2 – postal box number




**2. 12 Month Accumulator**

If a multivalue field is set up with 12 values, they can be used for monthly accumulators.

Considering the above example, 5 months worth of sales for a client would be as:

- Month 1 - $1,200
- Month 2 - $500
- Month 3 – 0
- Month 4 - $150.50
- Month 5 – $2,340


With this structure, it is easy to determine sales for a quarter (1<sup>st</sup> qtr - $1,700), year-to-date sales ($4,190.50), year-to-date as of any month (YTD through month 4 - $1,850.50).



**3. Invoice Summary**

A group of multi value fields can maintain invoice summary information in a client row, or line item information in an invoice row.

If there are four associated fields in the table; invoice number, invoice date, invoice amount and amount received. Then the invoice number is a direct reference to the complete invoice detail row in the invoice table (invoice primary key). Using the invoice date, it is possible to get an aged accounts receivable report (for this client only or for all clients) just by looking at this client row, without examining any of the detail invoice rows. By subtracting the amount received from the invoice amount, the amount due is established.



# **FILES**

#### **CREATE-FILE command**

The CREATE-FILE command enables the user to create a new file for use within the  jBASE system.

```
CREATE-FILE
    {-L}
    {DICT | DATA} <<FileName>> {,Section}
    {TYPE=tname} {HASHMETHOD=nnn} {PERM=nnn} {CASE=YES|NO}
    {LOG=YES|NO} {TRANS=YES|NO} {BACKUP=YES|NO} SECURE=YES|NO} {NETWORK=YES|NO} {ENCRYPTED=YES|NO} {ALGORITHM=name} {KEY=user value}
    {NumBuckets, BucketMult, SecSize} {NumBuckets, BucketMult, SecSize}
```



## Typical File Creation

The create file command in the jShell as below, will create a data file  called 'CUSTOMER' and its dictionary (CUSTOMER]D) . The data file will have a modulo (hash buckets) of 1, and the dictionary a modulo of 3.

```
CREATE-FILE CUSTOMER 1 3 
```



Files can take the form of Hash or directory type files. Other types are:

- Remote - accessed via jRFS
- Use Q and R pointers
- Different hash methods
- j3, j4, jplus file types
- Log files
- Large files
- Distributed files




A new JEDI will have to be written to interface to other data structures such as other database management systems for instance.



**1. Hash Files**

With this file type, primary file space is defined by a set number of groups i.e buckets and modulo. Data records are placed into a group based on a “hashing algorithm” that uses the unique record ID. The record ID always hashes into the same group. Listing a file will show hash order.

All data records ares stored in one OS file (one inode)

It is strongly recommended that only jBASE utilities be used to access and maintain hash files, as OS commands see only one line of data.



A static hashed file is determined by three parameters:

1. **Type**: This Parameter denotes the type of file. The default is J4 (block size = 4096). J3 (block size = 1024).
2. **Modulo**: An prime integer defining the number of groups in the file.
3. **Separation**: An integer specifying the number of group buffer blocks.
4. **Multiplier**: An integer specifying block size multiplier. The maximum size permitted for a hashed file is 2Gb.




The current default type (meaning that you do not specify a type when the file is created) is J4. This creates a file that uses 4k as its block size for grouping records.

- The modulo determines the number of groups for the file. While it is a file sizing parameter, it is not an upper file size limit, only an efficiency parameter.
- The separation expands the primary space.
- The multiplier is another method of expanding primary space.


Ordinarily, a hashed file cannot exceed 2Gb. However, there are two ways to exceed this limit (large files and distributed files).



**Hashed Types**

There are 4 hashing algorithms available. The default is number 4 for J4 files.

1. Uses a base 16 hash key with the last 8 char of ID
2. Uses a base 16 hash key with all char of ID
3. Uses a base 10 hash key with all char of ID
4. Uses a base 10 hash key with the last 8 char of ID


The hashing algorithms are just different ways of determining which group a record is stored in.



**Hashing Algorithms**

Using different hashing algorithms, the same ID can be placed in a different group. The order you see the records is called Hash Order. When you LIST a file, you see it in this order. Hash Order is for the convenience of the data base, not the user. As a result, jBASE allows you to sort on any dictionary item for the file, even the calculated ones.



### Overflow

Is a measure of how much a file has outgrown its original specifications.



**Factors Contributing To Overflow**

Different file types have different buffer sizes. Assuming that the record size remains the same, more records can fit into one J4 buffer than into one J3 buffer. If not enough groups are created, each one can get over loaded quicker.

Correct file sizing is not automatic but involves the deliberate effort of the developer.

### 


#### Effect of overflow

To illustrate, imagine a file where group one has one overflow buffer whilst group two has two overflow buffers. When a record is to be written to group two, the processing now has to go through each of the three buffers following the pointers until it finds the space to write the record. When a record is to be read in group two, the processing may have to look through the three buffers in turn until the record is located. Thus it can be noted from the example that the presence of many overflow groups will slow down processing.



**Bucket Information**

- NumBuckets - modulo
- BucketMult - bucket size multiplier, 512 for j1, 4096 for j2 and j4, 1024 for j3
- SecSize – separation




## Sizing & Resizing of Files 

Correct Modulo must be determined prior to file creation. After file creation, many files in the application may need attention from time to time, to check and change the record distribution by resizing the file. The following may be used:

- jstat
- jrf
- jchmod/jbackup/jrestore




### **What Modulo to use**

Some assumptions need to be made to approximate correct modulo prior to file creation. The parameters in brackets are intended to illustrate and hence aid understanding of the idea.

1. What is the block size of the file type? (100,000 records to be in the file).
2. How many records do you expect to be in the file? (Each record contains about 1,000 char).
3. What is is average number of characters in each record? (J4 file with a block size of 4096 char.)


Multiplying the number of records by the average record size, then dividing the product by the block size gives a rough figure that can be used for the modulo. Considering the parameters in brackets above the modulo would be as:

![](https://static.helpjuice.com/helpjuice_production/uploads/upload/image/3397/113361/modulo.jpg)



It should be noted however that this method is only a rule of thumb, and can not to be considered the absolute optimum modulo. File growth and/or shrinkage must also be accounted for. If for instance the file being created is a monthly transaction file, it most likely is empty at the beginning of the month and full at the end of the month. This type of file is particularly difficult to size properly since the actual amount of space needed is a moving target.

Determining modulo is thus an art form and not an exact science.



### **Determine Separation**

Most of the time, separation is not needed. However, if the average size of a record exceeds the size of the block, or if there is a lot of wasted space in a block, separation may help optimize file size and record distribution.

Use separation when the average record size exceeds one block and/or there is a lot of wasted space in a block.



### **File Performance**

Improperly sized files may slow down processing as too many buckets results in empty buckets that have to be checked during jql. On the other hand, too few buckets results in overflow causing excessive disk head movement.

Take for instance a file that originally has a block size of 512 bytes. If Separation and Multiplier will allow additional disk blocks to be put into a bucket, overflow will physically add to end of file but logically add to end of bucket. Physical disk thrashing as well as logical hash thrashing may result.

Many files in an application will need proper attention from time to time. The following can check and change the record distribution by resizing the file:



**1**. **jstat**

This command returns information about hash files in the application. It's use is as follows;

```
  jstat –options filename
```

with 'options' taking the form of:

- **-f** free space display
- **-r** record display. A histogram of record distribution.
- **-s** short summary display
- **-v** verbose display
- **-w** do not wait on locked records


This command can take some time to finish execution.

If the command below is executed;

```
jstat FileName
```



Some useful information is obtained, including:

- File Type,
- Hash Method,
- Modulo,
- Frame Size,
- Avg. Char/Group,


of the file being considered.



if the command below is executed:

```
jstat –r FileName
```



- The –r option provides a distribution histogram. This shows how much space has been allocated for each group, how much space is actually in use and how many records are in each group.
- The groups that are going into overflow, or are already in overflow can be noticed.




If the command bellow is executed,

```
 jstat –rv FileName
```



it can be noted that adding the '**v**' option to the previous command shows each record ID that is in each group. This way, the actual hashing distribution can be seen.



**2****. jrf**

```
jrf {-options} {filename {,...} }
```

Where options can be:

        -H3 Force to HASH3 file type
        -H4 Force to HASH4 file type
        -H5 Force to HASHP (Plus) file type
        -H6 Force to HASHR (Resilient) file type
        -B  Keep original bucket/frame size
        -C  Change restore specification
        -D  Allow downsize of file
        -E  Resize empty files
        -I  Ignore empty files
        -Mn Override default Hash Method, set to method n
        -P  Take account of physical file size
        -R  Reporting only (do not actually resize)
        -V  Verbose mode
        -V1 Very verbose mode
        -Sm{,s{,i}} Size to parameters
            m - modulo, s - separation, i - ingroupmaxsz
        -L Log updates during resize of file



This is a file resize utility that should only be used when the file is **not**in use. It first creates a temporary file, copies data from the original file to the temporary file, deletes the original file, then the original file name is assigned to the temporary file.

It can also be used to change hash type, downsize a file or obtain a suggested new size.



If the command is executed ,

```
jrf –R FileName
```



The '**-R**' option will obtain a suggested new size, and then the '**-S**' option can then be used to actually resize the file.



**3. Resize during jrestore**

jBASE allows resizing a file during a restore. When a jbackup of a file is made, it is possible to include resize information. The resize information is set with the '**jchmod**' command. During jrestore, the file is restored with the new size.

**jcheck-**Can check file integrity and offer some repair. The command can be used as follows;

```
jcheck -options FileName
```

Where Options can be :
                g       Group Info
                h       Help
                i       InGroup Info
                k       Keep bad ids on salvage
                l       Lock the file
                o       OutGroup Info
                r       Record Info
                s       Salvage Info
                v       Verbose
                Bn      Begin group number
                D       Salvage to directory
                En      End group number
                F       Freespace Info
                G       Group reset if in error
                Ln      Limit maximum group jmalloc to 'n' MB, default 1MB
                M       Move salvaged file back to original
                O       Offsets Info
                P       Pause after group
                R       Redirect stderr to stdout
                S       Salvage file creates SLVG\_ prefixed copies of file

E.g.    jcheck -v HashFile      OR      find . -type f -print | jcheck -v

Users should not be using files being repaired.

## 


## Directory Files

Data records are stored as files in the directory. OS utilities may be used to access and maintain rows (records) in a directory file. jBASE programs can work with directory files as if they are hash files (OPEN, READ) or as an OS file (OPENSEQ, READSEQ).

Directory files can be used to pass data from a jBASE application to a non-jBASE application. If for instance a Samba drive were to be set up and written to using a jBASE utility/program, Windows can read from it.



# MD/VOC/SYSTEM 

## Accounts

An account is a collection of data files, program files, executable files and subroutine files. In legacy MV systems all these were referenced by a master file for the account or stored under one directory for the account. In jBASE however, these are referenced by environment variables.

Account locations were defined in the SYSTEM file. jBASE references the SYSTEM file, if used, with the environment variable JEDIFILENAME\_SYSTEM

Previously, the master file for referencing an account’s contents was the Master Dictionary (MD) or VOCabulary. jBASE references this master file, if used, with the environment variable JEDIFILENAME\_MD

Data files for an account are typically stored in a directory. It is recommended that developers:

- Consider putting all program files in a separate directory,
- Consider putting application-wide files (bin, lib, SYSTEM) in a global directory.


The MD and SYSTEM files are needed for Q pointers, F pointers and remote pointers, but jBASE can open any file the user can path to. MD files are also needed for PROCS and PARAGRAPHS (jcl).

Each account can be referenced in the SYSTEM file



### **File and Account Pointers**

**In the MD/VOC**

Q pointers

```
001 Q
002 Account Name 
003 File Name 
```

F Pointers

```
001 F 
002 Data Path 
003 Dictionary Path 
```



**In SYSTEM**

- ID - Account Name


```
001 D
002 Account path
```



### **User Directories**

User directories that may exist on any installation could include the following:

- Directories for data files
- Home directory for each user or group of users
- Directories for program source code
- Directories for saved lists
- Directory for spooler files
- Directories for cataloged user programs (bin)
- Directories for user subroutines and functions (lib)




### The <u>Optional</u> MD

MD or VOC references files and commands. jBASE uses environment variables to define search paths.

- PATH - references programs
- JBCOBJECTLIST - references subroutines
- JEDIFILEPATH - references files


MD or VOC is needed for Q and F pointers, PROCS and PARAGRAPHS.

If used, ensure JEDIFILENAME\_MD and JEDIFILENAME\_SYSTEM are set.



### LOGTO

Is used to switch between different user accounts. LOGTO changes the environment from one account to another. The general use is as:

- LOGTO account name


Where 'account name' is the user account to be switched to. The environment variable JEDIFILENAME\_SYSTEM will need to be set.

On Unix systems, LOGTO will switch account to the user name found in /etc/passwd by performing an ‘su’ command, thus executing the user's profile and changes to the user's home directory.



# Understanding JQL

JQL is a query language used by jBASE. It takes the form of dictionary items used for selecting and sorting rows, and for displaying columns. The output by default uses sequential ID's in the dictionary of:

- Specified file or USING file
- JBCDEFDICTS
- JEDIFILENAME\_MD
- Universe, Unidata and Prime emulations uses the @ phrase


This query language is capable of calculating column totals, averages, and percentages with the appropriate modifiers applied. Further, modifiers if correctly applied can alter the way a dictionary is used.



## JQL or SQL

Some differences exist between JQL and SQL. They can be summarized as follows:


| **JQL**<br> | **SQL**<br> |
| --- | --- |
| Dictionary calculations<br> | Command line calculations<br> |
| Many dictionaries per field<br> | One dictionary per field<br> |
| End-user tool<br> | Developer tool<br> |
| Retrieval only<br> | Retrieval/update<br> |
| Simple syntax<br> | Difficult syntax<br> |






## Parts of a JQL Sentence

There are 5 parts to a JQL sentence.

1. The command – the action to be taken.
2. The file name – the data file upon which the action is taken.
3. Selection criteria – reduces the number of records in the query.
4. Sort criteria – puts resulting records in user defined order.
5. Output specifications – fields to display and additional formatting instructions.




### **Finding A File**

The MD is searched first if JEDIFILENAME\_MD is set, then JEDIFILEPATH is searched.



### **Selection Criteria**

- The 'WITH' or 'WITHOUT' modifies the dictionary to be used as selection criteria.
- Relational operators are used to compare query value to data base contents. The following may be used:   '=', ' #', '&lt;', '&gt;', '&lt;=', '&gt;='.
- 'AND' and 'OR' are used when multiple selection criteria are required.
- '[', ']', '[]' may be used for sub-string extraction. The '**LIKE**' can also be used.




Some examples of selection criteria are as follows:

```
LIST CUSTOMER WITH CUS.NAME = “A]” CUS.NAME
```



```
LIST CUSTOMER WITH CUS.NAME LIKE “A…” CUS.NAME
SORT ORDER WITH ORD.DATE GE “10/01/96” AND LT “11/01/96” ORD.DATE
```



## **Sort Criteria**

Different key terms will sort search results differently as can be noted bellow:

1. BY - ascending
2. BY-DSND / BY.DSND - descending
3. BY-EXP / BY.EXP - explode a multivalue field, ascending\*
4. BY-EXP-DSND / BY.EXP.DSND - explode a multivalue field, descending\*
\* Exploded sorts treat each multivalue as a separate column (field).


It is possible to have multiple sort levels, with each subsequent level a sub sort of the previous level. With regards sort justification, it is based on the dictionary (Yes, you can sort numbers left justified).

Examples of Sort Criteria are as follows:

```
SORT ORDER BY ORD.DATE ORD.DATE
```

```
SORT ORDER BY-DSND ORD.DATE ORD.DATE
```

```
SORT ORDER BY ORD.DATE WITH ORD.DATE GE “10/01/96” AND LT 11/01/96” ORD.DATE
```

```
SORT CUSTOMER BY-EXP ORDERS ORDERS ORD.AMT ORD.DATE CUS.NAME
```

## 


## **Output Specifications**

Any field name without a modifier is displayed

TOTAL, AVERAGE, PERCENT

GRAND-TOTAL

BREAK-ON

HEADING, FOOTING

DET-SUPP

```
Examples of Output Specifications are as follows: 
SORT ORDER BY CUS.NAME BY ORD.DATE WITH ORD.DATE GE “10/01/96” AND LT “11/01/96” AND WITH ORD.AMT GE “500” BREAK-ON CUS.NAME “Total For ‘VUD’” ORD.DATE TOTAL ORD.AMT AVERAGE ORD.AMT HEADING “October 1996 Orders Over $500 By Customer’CL’”
```



```
SORT ORDER BY CUS.NAME WITH ORD.AMT GE “500” BREAK-ON CUS.NAME TOTAL ORD.AMT AVERAGE ORD.AMT DET-SUPP ID-SUPP
```

# 


# Dictionaries

## Types of Dictionaries

**Type A or S**: Legacy style 10 line dictionary. Data descriptor or calculated. From the days when the data base was the OS.

**Type D** : Legacy style 5 line data descriptor. Actually it’s 7 lines, but jBASE is missing two of them, and therefore are not as functional as the legacy.

- This is to be corrected in some 4.x release.
- This type was popular when the database was implemented on another OS.


**Type I:**Legacy style 5 line calculated column. Actually it’s 7 lines, but jBASE is missing two of them, and therefore are not as functional as the legacy.

- To be corrected in some 4.x release.
- When the data base was implemented on another OS.


**Type M or PH**: macro or phrase, 2 lines.

- Shorthand




**Macros and Phrases**

Are file dictionary items that contain frequently used portions of a jQL sentence.

```
001+  M or PH (macro or phrase) 
002+  jQL sentence parts or comments
```

For example, if a macro named 'MYMACRO' has been created containing 'M' and 'CUS.NAME CUS.ADDR CUS.STATE' on line 1 and 2 respectively, executing the 'JED DICT CUSTOMER MYMACRO' command will bring in the editor something that resembles the text below;

```
001+  M
002+  CUS.NAME CUS.ADDR CUS.STATE
```



Thus issuing a query such as: 'LIST CUSTOMER MYMACRO' will automatically include the above listed portions of JQL.



## Dictionaries

1. I Types

```
001 I
002 Formula
003 Conversion code
004 Column heading
005 Format
```

2. D Types

```
001 D
002 Attribute #
003 Conversion code
004 Column heading
005 Format
```



3. 10 line structure

```
001 A
002 Attribute #
003 Column heading
004-006 Blank
007 Conversion codes
008 Correlative codes
009 Justification
010 Column width
```

## 


## Dictionary Processing



### ![](https://static.helpjuice.com/helpjuice_production/uploads/upload/image/3397/112746/dictionary_Processing.jpg)



Most Common Conversion Codes

These go on lines 3 (of an I or D type), or 7 and 8 (of an A type); and are also used with the ICONV, OCONV, and FMT jbc functions

- D – date
- MD or MR – decimal
- MT – time
- G – group extraction
- T – text extraction
- Tfile – table lookup
- There are more!




### Date Conversions

With jBASE, the internal value is the number of days from December 31, 1967. So if the internal value for date happens to be 10000,

- D - 18 MAY 1995
- D2/ - 05/18/95
- D4\* - 05\*18\*1995
- DW - 4
- DWA - THURSDAY
- DM - 5
- DMA - MAY
- DY - 1995
- DJ - 138
- DQ – 2




### Decimal Conversions

If for instance the Internal value for a value is 100000,

- MD2 or MR2 - 1000.00
- MD2, or MR2, - 1,000.00
- MD2,$ or MR2,$ - $1,000.00
- MD4 or MR4 - 10.0000
- MD24 or MR24 - 10.00


MR conversion has additional formatting capabilities

### 


### Time Conversions

With jBASE, the internal value is the number of seconds from midnight. So if for instance the internal value is 55555

- MT - 15:25
- MTS - 15:25:55
- MTH - 03:25PM
- MTHS - 03:25:55PM


### 


### Group Extraction

This feature allows for the extraction of data based on a delimiter. If for instance the Internal format is 123\*456\*789, then it will follow that:

- G\*1 - 123
- G1\*1 - 456
- G2\*1 - 789
- G1\*2 - 456\*789




On line 2 of an I type

- FIELD(CUS.NAME,’ ‘,1,2) - returns the first two words of the field CUS.NAME


### 


### Text Extraction

Allows for extracting data based on character position. If for instance an internal value of '123456789'

- T1,3 - 123
- T5,2 - 56
- T1 - 1 if left justified, 9 if right justified




Use in a query on line 2 of an I type:

- CUS.NAME[“1”,”3”] - 123
- CUS.NAME[“-5”,”-2”] – 5678




## Table Lookup Example

- Country code stored in field 12 of a CUSTOMER table
- Country names stored in field 1 of the COUNTRY table with country code as the primary key
- In the dictionary of the CUSTOMER table
- Field 2 references the field containing the lookup date (12)
- TCOUNTRY;X;;1
- On line 2 of an I type
- TRANS(COUNTRY,COUNTRY.CODE,COUNTRY.NAME,”X”)




## I Types

Field 2 contains the formula which can be made up of:

- Dictionary names
- @Variables - @RECORD, @ID, @VM, @DATE
- jBC functions – TRANS, FIELD, COUNT, etc
- User subroutines – first argument is the return value
- jBASE supplies subroutines for multivalues
- IF … THEN … ELSE
- Multiple expressions separated by a semi colon (;)




## JBCUserConversions

Are user developed subroutines that perform user defined conversions. They take 5 arguments, that is :

- result - return value.
- source - original value.
- code - actual conversion code.
- type - 0 = ICONV, 1 = OCONV, -1 = FMT. FMT is used for dictionary conversions (line 7 or 3), the FMT function, and ‘CRT variable format’.
- error - non-zero enters debugger.




A standard conversion subroutine code cannot be used for custom subroutine code.



## Custom Date Conversion

```
SUBROUTINE JBCUserConversions(result, source, code, type, error)
error = 0
BEGIN CASE
  CASE code = “JCAL”
   * Day of Week: Month Day, Year
      DOW = OCONV(source,”DWA”)
      MONTH = OCONV(source,”DMA”)
      DAY = OCONV(source,”DD”)
      YEAR = OCONV(source,”DY”)
      result = type:” “:DOW:”: “:MONTH:” “:DAY:”, “:YEAR
  CASE 1
    result = “”
END CASE
RETURN
END
```





## Using JBCUserConversions

A-type

```
JED DICT ORDER MYDATE
001 A          
002 3          
003 MY DATE     
007 JCAL     
009 L           
010 35
LIST ORDER ORD.DATE MYDATE
```

D- type

```
JED DICT ORDER MYDATE
001 D
002 3
004 MY DATE
005 35L
LIST ORDER ORD.DATE MYDATE
```

I- type

```
JED DICT ORDER MYDATE
001 I
002 OCONV(ORD.DATE,”JCAL”)
003
004 MY DATE
005 35L
LIST ORDER ORD.DATE MYDATE
```

# 


# JCL

This is the jBASE procedure language. It is made up of Procedures (Procs)  and Paragraphs.  Procs work with input and output buffers, with PQ or PQN going on line 1. PQN includes file buffers and select registers.

Paragraphs on the other hand are like DOS batch files, with PA or PR going on line 1. Procs and Paragraphs are interpreted at run-time. The MD is required to run Procs and Paragraphs.  JEDIFILENAME\_MD is needed.



## Procs

Procedures can call internal and external subroutines. The commands must be at the very beginning of a line. Procs support conditional expressions, can pass data to a JBC program and return data from it (PROCREAD, PROCWRITE).



### Proc Example

```
PQ
T C
S1
OEnter Customer Last Name+
IP:
HSELECT CUST WITH LNAME =
A”1
STON
HSAVE-LIST CUST.LNAME
P
HGET-LIST CUST.LNAME
STON
HSORT CUST BY CSZ FULL.NAME ADDRESS CSZ
P
HDELETE-LIST CUST.LNAME
P
```



## Paragraphs

Paragraphs are particularly useful because they allow branching. Like Procs, they support conditional expressions and can pass data to a jbc program(DATA, INPUT). In addition, in-line prompting is supported.

Each line of a paragraph is a separate command as if entered from the command line. Multiple lines can be combined into a single command when each line is terminated with a ‘\’.

### 


### Paragraph Example

```
PA
SELECT CUST WITH LNAME = <<A,Enter Customer Last Name,0X>>
SAVE-LIST CUST.LNAME
GET-LIST CUST.LNAME
SORT CUST BY CSZ FULL.NAME ADDRESS CSZ
DELETE-LIST CUST.LNAME
```



# jBC

jBC is jBASE' version of MultiValue Basic. At compile time, the compiler produces optimized ‘C’ code for the platform in use.

Cataloging links a program with jBASE and OS libraries to produce an executable in the JBCDEV\_BIN directory. Subroutines and functions become shared objects in the JBCDEV\_LIB directory. A two step run-time creation process is followed:

- Compile program - BASIC command. Source code optimized for 'C'
- Catalog program - CATALOG command. Uses the referenced ‘C’ Compiler (PATH, LIB, INCLUDE) to produce a binary executable (programs) or shared object (subroutines and functions)


All programs ***must*** be cataloged.



## RUN Unnecessary

Since all programs are cataloged (are executable referenced via PATH), the RUN verb is no longer needed, but is supported.

It should be noted that:

- All programs, subroutines and functions must be cataloged, with all programs being placed in the JBCDEV\_BIN directory, and all subroutines and functions in the JBCDEV\_LIB directory. PATH and JBCOBJECTLIST should include the same directory as JBCDEV\_BIN and JBCDEV\_LIB
- It is strongly recommended that programs from different files with the same name not be cataloged into the same *bin* or *lib*directory. This is because they tend to overwrite with the last one cataloged being returned.
- Compiler errors are more ‘C’ than legacy MultiValue related.




## Subroutines and Functions

Multiple subroutines and functions can exist in each shared object. The jLibDefinition config file in the JBCDEV\_LIB directory defines size and name of shared objects. The order in which originally cataloged defines order in shared object. As such, it is recommended that the most frequently used, and most stable, subroutines be cataloged first.

## 


### jLibDefinition File

This is a configuration file defining the naming and sizing of jBC developed shared objects (subroutines and functions). some contents of the file worth noting are:

- libname - shared object name in literal text containing:
    - %a - account name (JBCLOGNAME)
    - %n - sequence number starting with 0
    - %f - source file name
- exportname - cross reference .def or .el file,
- objectdir - shared object directory,
- maxsize - of each shared object,
- baseaddress - prevents shared object from becoming private (Windows).


### 


## Directing CATALOG

A way to tell jBASE what *bin* and *lib* to use is to use the CATALOG command as follows:

```
CATALOG -obinpath -Llibpath
```

Where:

- -o specifies directory for executables,
- -L specifies directory for shared objects.




## jBC and jbuildslib Commands

Using jBC to better organize shared objects by placing subroutines and functions into a specified shared object, gives more control of which bin and lib to use.

Subroutines must have a .b extension

```
jbc -c sub1.b sub2.b 
```

creates the .obj (Windows) or .o (Unix) objects

```
jbuildslib -o subs.dll
sub1.obj
sub2.obj 
```

creates [subs.def](subs.def) and [subs.dll](subs.dll) (Windows)

```
jbuildslib –o subs.so sub1.o sub2.o 
```

creates [subs.el](subs.el) and [subs.so](subs.so) (Unix)



## Workshop 

Try out the following, and see if the results make sense


| <br>```<br>A = 1<br>CRT ++A<br>CRT A<br>END<br>```<br><br><br> | <br>```<br>A = 1<br>CRT A++<br>CRT A<br>END<br>```<br> | <br>```<br>A = “YOUR NAME”<br>CRT A[1,5]<br>CRT A[-1,1]<br>CRT A[-5,2]<br>CRT A[-5,-2]<br>```<br><br><br> |


## 


## @

This function positions the cursor for printing. It takes the general form:

```
@(col{, row})
```

Where:

- col specifies column value on the screen,
- row specifies row value on the screen.




An example of everyday use is as:

```
CRT @(1,1):’Hello there’:
```



Minus numbers are used for special printing, and can be emulation specific. Examples include:

- @(-1) - clear screen
- @(-3) - clear to end of screen
- @(-4) - clear to end of line
- @(-5) - blink on
- @(-6) - blink off
- @(-15) - underline on
- @(-16) - underline off




## Arrays

Arrays are primarily used to map a data base record. The first array element is field one of a record. The first array element position is one, and not zero. There are two types of arrays

- Dynamic arrays and,
- Dimensioned arrays.


### 


### 1. Dynamic Arrays

In a dynamic array, every variable is an array whose length is not fixed. Every dynamic array is one variable, with a variable number of elements. The elements referenced with &lt; &gt; as follows:

- array&lt;1&gt; is field one,
- array&lt;2,3&gt; is the third multivalue of field two,
- array&lt;5,2,1&gt; is the first subvalue of the second multivalue of field five.




### 


### 2. Dimensioned Arrays

These arrays must be dimensioned first, as:

- DIM ARRAY(50)


The above determines the number of elements, with each element being a separate variable. Each element is in turn a dynamic array. Elements are referenced with ( ) as:

- array(1) is field one,
- array(2)&lt;1,3&gt; is the third multivalue of field two,
- array(5)&lt;1,2,1&gt; is the first subvalue of multivalue two of field five.




### 


## Resizing Arrays

First set resize\_array=true in Config\_EMULATE, then use

- DIM MYARRAY(X),
- Where X is an integer.


The DIM statement may be used more than once for the same array to resize it according to program needs.



## Use of OPEN, READ, and WRITE

- OPEN - opens a data file to a file handle for use in a program


```
OPEN ‘CUST’ TO CUST ELSE STOP
```

- READ - reads data from an opened file into an array


```
READ ARRAY FROM CUST,ID THEN . . .
```

```
MATREAD DIMARRAY FROM CUST,ID THEN …
```

- WRITE - writes an array to an opened file


```
WRITE ARRAY ON CUST,ID
```

```
MATWRITE DIMARRAY ON CUST,ID
```



#### Workshop

Write a program to open the CUSTOMER file, read a record and display its contents

```
OPEN “CUSTOMER” TO CUST ELSE STOP
READ CUST.REC FROM CUST,12345 THEN
  CRT @(-1)
  CRT @(5,3):”CUST NUMBER 12345”
  CRT @(5,5):”CUST NAME: “:CUST.REC<1>
  CRT @(5,7):”CUST ADDR: “:CUST.REC<2>
  CRT @(5,9):”CUST STATE: “:CUST.REC<5>
END ELSE
  CRT “CUSTOMER 12345 NOT FOUND!”
END
```



## ICONV and OCONV

ICONV is a function that converts data from an external format ,  to its equivalent internal format. In use it may take the form below:

```
IDATE = ICONV(value,conv),
```

Where:

- value - data to be converted,
- conv - conversion code.




OCONV is a function that converts data to its external format, from the internal format. In use, it may take the form below:

```
ODATE = OCONV(value,conv)
```

Where :

- value - data to be converted,
- conv - conversion code.




These functions prove useful in instances that require input validation. An example is highlighted below:

```
INPUT DT
IDT = ICONV(DT,”D”)
IF IDT = “” THEN
  CRT “INVALID DATE!”
END ELSE
  CRT “DATE IS OK!”
END
```



#### Workshop 

Modify the previous program to display all dates and dollars amounts in their external format

```
OPEN “CUSTOMER” TO CUST ELSE STOP
READ CUST.REC FROM CUST,12345 THEN
  CRT @(-1)
  CRT @(5,3):”CUST NUMBER 12345”
  CRT @(5,5):”CUST NAME: “:CUST.REC<1>
  CRT @(5,7):”CUST ADDR: “:CUST.REC<2>
  CRT @(5,9):”CUST DATE: “:OCONV(CUST.REC<3>,”D4/”)
END ELSE
  CRT “CUSTOMER 12345 NOT FOUND!”
END
```



#### Workshop

Write a program to tell you if an entered date is valid. The same idea can be used to write a program to tell you if an entered dollar amount is valid

```
INPUT DT
IDT = ICONV(DT,”D”)
IF IDT = “” THEN
  CRT “INVALID DATE!”
END ELSE
  CRT “DATE IS OK!”
END
```



## CASE STATEMENTS

The case statement is an alternative to the nested "IF . . . THEN . . . ELSE". The same logic is employed, but case statements are more readable. The statement takes the form:

```
BEGIN CASE
CASE first condition
Statements
CASE second condition
Statements
CASE 1
Statements to be executed if all else fails
END CASE
```



## LOCATE

The LOCATE statement is used to find which multivalue contains the information being sought.

- INS, DEL and dynamic array references maintain and retrieve information from the array.




An example of the use of locate is as:

```
LOCATE search IN array BY order SETTING pos THEN . . . ELSE . . .
```

Where:

- search - the string to be located,
- array - the dynamic array to be searched,
- order - AL (default), AR, DL, or DR,
- pos - location where *search* is found in *array* or where it should be inserted if not found.




In everyday use, would look as follows:

```
LOCATE invnbr IN invlst BY ‘AR’ SETTING pos THEN . . . ELSE . . .
```



## use of INS, INSERT, DEL and DELETE

**INS** used as:

```
INS string BEFORE array
```

Where:

- string - information to be inserted,
- array - dynamic array to accept information.


For instance:

```
INS invdate BEFORE array<1,POS>
```



**INSERT** used as:

```
array = INSERT(array,field,value,sub;data)
```

Where:

- array - dynamic array to accept information,
- field, value,sub - dynamic array location,
- data - information to be inserted.


### 


**DEL** used as:

```
DEL array
```

Where:

- array - dynamic array reference to be deleted.


For Instance:

```
DEL array<1,POS>
```



**DELETE** used as:

```
Array = DELETE(field,value,sub)
```

Where:

- array - dynamic array to having the information desired,
- field, value,sub - dynamic array location,
- data - information to be deleted .




## COUNT and DCOUNT

The COUNT function returns the number of occurrences of one string in another. An example of its use is as:

```
NBR = COUNT(string1, string2)
```

Where:

- string1 - string to be checked for string2,
- string2 - string to be check in string1.




The DCOUNT function returns the number of fields separated by a delimiter. An example of use is as:

```
NBR = DCOUNT(string1, delim)
```

Where:

- string1 - string to be checked for number of fields,
- delim - field separater, does not have to be one character.


The function can be used to tell how many multi values are in a field, making it useful in scenarios that for instance need one to set an upper limit in a FOR … NEXT loop.

## 


#### Workshop

- Write a program to
- Prompt for a letter to enter
- Check a dynamic array for its existence and
- Insert it in order if not found
- Remove it if found
- Display the array each time it changes
- Display how many elements are in the array


### 


```
A = ""
 PROMPT ""
 LOOP
     CRT "ENTER A LETTER: ":
     INPUT LTR
 UNTIL LTR = "" DO
     LOCATE LTR IN A<1> BY "AL" SETTING POS THEN
         CRT LTR:" WAS FOUND IN VALUE POSITION ":POS:" IT WILL BE DELETED!”
         DEL A<1,POS>
     END ELSE
         CRT LTR:" WAS NOT FOUND, BUT BELONGS IN VALUE POSITION ":POS:
         CRT “IT WILL BE INSERTED!”
         INS LTR BEFORE A<1,POS>
     END
     CRT A
     CRT “THERE ARE “:DCOUNT(A,@VM):” VALUES”
 REPEAT
```

## 


## SYSTEM

Typical SYSTEM options are supported, but jBASE has additional options specific to the platform including:

- 18 and 101 return JBCPORTNO
- 19 returns JBCLOGNAME
- 25 returns True if program is running in background
- 43 identifies who is holding a record lock
- 1000 returns field delimited command line
- 1008 returns JEDIFILENAME\_SYSTEM
- 1009 returns JEDIFILENAME\_MD


JBC.h has more details on the available additional SYSTEM options.

## 


## IOCTL

This function provides direct communication to the database driver for a particular file (hash, directory, serial, sequential). Be sure to INCLUDE JBC.h in the program for definitions of IOCTL commands. It takes the general form:

```
IOCTL(filevar, command, parameter)
```

Where:j

- parameter - returns 0 for failure, may be used to pass information to the command
- Full path, automatic conversion, suppress lf on WRITESEQ, etc.


### 


### IOCTL Example

```
INCLUDE JBC.h
RESULT = “”
OPEN “CUSTOMER” TO CUST THEN
  IF IOCTL(CUST,JBC_COMMAND_GETFILENAME,RESULT) THEN
    CRT RESULT
  END ELSE
    CRT “OH NO”
  END
END ELSE
  CRT “Cannot open CUSTOMER file!”
  STOP
END
```

## 


## User Defined Functions

User defined functions are cataloged into the JBCDEV\_LIB directory. The FUNCTION statement is the first executable line of the function. Ideally, the function will have a RETURN value. Use DEFFUN in each program that will use the function.

### 


### User Defined Functions Example

```
MYFUNC
001 FUNCTION MYFUNC(A,B)
002 C = A * B
003 RETURN C
004 END
```

```
FUNC.TEST
001 *TEST FUNCTION
002 A = “”; B = “”
003 DEFFUN MYFUNC(A,B)
004 RES = MYFUNC(10,4)
005 CRT RES
006 END
```

## 


## EXECUTE or PERFORM

This statement pauses the currently executing program and Executes any operating system command, including other jBASE programs or commands. Clauses that may be used with the statement include:

- CAPTURING - captures screen output
- RETURNING or SETTING - captures error messages
- PASSLIST - sends a list or dynamic array to executing program
- RTNLIST - returns a list from executing program
- PASSDATA - sends variable contents to executing program. Use COLLECTDATA to pick up variable
- RTNDATA - returns variable contents from executing program. Use RTNDATA statement to return data




## **jbc Code Optimization**

Involves the use of jprof, jcover and jkeyauto.

#### jprof

Is a jBASE profiling tool, that gathers profiling information. The information is gathered by executing the program with the –JP option or setting JBCPROFILE=1. The command would take the general form:

```
Myprogram -JP
```



The tool will analyze the application program trouble spots or bottle necks. System calls and file I/O are not profiled, and CPU time is tracked. The tool keeps track of where the program is at each point in time. Profile information stored in:

- jprof\_*port#* when run with the –JP option as above, or
- jprof\_*pid*\_*inc* when using JBCPROFILE=1 as below:


```
JBCPROFILE=1
 Myprogram
```



In the example commands, 'myprogram' refers to the main program that issues calls to other programs in the application.

Profiling is done in two steps:

- Run application program
- Use jprof command to report profiling information, as below:




```
JPROF -FSOURCEFILENAME
```

jprof command then used to display profile information
The jprof command can also be used to generate a jkeyauto script based on keyboard input of the profiled program. Keystroke timings are part of the profile.



### jcover

Is a jBASE program that generates statistical about the running program. The information is gathered by setting JBCPROFILE=3, or executing the program with the –JC option as:

```
Myprogram -JC
```

The following three steps are involved:

- Run application program
- Collate recorded information
- Use jcover command to report information




Coverage information includes what parts of a program are executed, not executed and file resources used. The coverage information is stored in:

- jprof when run with –JC option
- jprof\_*pid*\_*exelev* when run with JBCPROFILE=3 as below:


```
JBCPROFILE=3
export JBCPROFILE
Myprogram
```

- Use jcover command to collate information into a jBASE hash file jcover\_*port#*




### jkeyauto

Is a program that allows a single program to control the actions of other programs. jprof and jcover can both be used to generate jkeyauto scripts. This can be useful for application bench marking. As much as it is easy to to set up, it is difficult to simulate actual user activity.

In operation, jkeyauto command interprets a script file containing program(s) to execute, keyboard input to those programs, even the amount of time for each typed character can be set.

Conditionals, looping, variables, comments, input to program, output from program are all supported.

Multiple scripts can be run in background from one connection and set to wait until signaled to go.


