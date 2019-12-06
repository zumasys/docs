# CREATE A jBASE PROGRAM

**Created At:** 4/17/2017 11:30:51 PM  
**Updated At:** 11/20/2017 11:08:49 PM  


# DOCUMENT SCOPE

The following guide is an instructional walkthrough on creating a standard hash file as well as a directory file which will be used to create a simple program and subroutine.

## CREATE A STANDARD HASH FILE USING CREATE-FILE COMMAND



```
CREATE-FILE MYDATA 1 13

[ 417 ] File MYDATA]D created , type = J4
[ 417 ] File MYDATA created , type = J4
```

Display the newly created file using LISTFILES command

```
LISTFILES

PATH :C:\jBASE\DEMO                       14:30:18  17 APR 2017
FILENAME....... TYPE   MODULO  SEP  BCKUP   CASING

MD]D            J4       17    1    yes      no
MYDATA]D        J4        1    1    yes      no
 MYDATA         J4       13    1    yes      no
```

The new file can also be seen in windows explorer

![](https://static.helpjuice.com/helpjuice_production/uploads/upload/image/3397/104833/CREATE-FILE_MYDATA.PNG)



### CREATE A DIRECTORY FILE USING CREATE-FILE COMMAND



```
CREATE-FILE BP TYPE=UD

[ 417 ] File BP]D created , type = UD
[ 417 ] File BP created , type = UD
```

Display the newly created file using LISTFILES command

```
LISTFILES

PATH :C:\jBASE\DEMO                              14:34:09  17 APR 2017
FILENAME........ TYPE   MODULO  SEP  BCKUP   CASING


BP]D             DIR                  yes      no
 BP              DIR                  yes      no
MD]D              J4       17    1    yes      no
MYDATA]D          J4        1    1    yes      no
 MYDATA           J4       13    1    yes      no
```

The new file can also be seen in windows explorer as a directory

![](https://static.helpjuice.com/helpjuice_production/uploads/upload/image/3397/104834/CREATE-FILE_BP.PNG)

### CREATE A NEW PROGRAM USING JED EDITOR

#### 
```
JED BP MYTESTPROGRAM

NEW *File BP , Record 'MYTESTPROGRAM'          Insert      15:05:26
Command-> FI
0001 MSG="This is my test program. Please hit enter to exit:"
0002 CALL DISPLAYSUB(MSG)
0003 INPUT ANS
-------------------------------- End Of Record --------------------








Record 'MYTESTPROGRAM' written to file 'BP'
```


### CREATE A NEW SUBROUTINE USING JED EDITOR

```
JED BP DISPLAYSUB

NEW *File BP , Record 'DISPLAYSUB'                Insert      15:06:12
Command-> FI
0001 SUBROUTINE DISPLAYSUB(MSG)
0002 PRINT MSG:
0003 RETURN
-------------------------------- End Of Record -----------------------








Record 'DISPLAYSUB' written to file 'BP'
```

The contents of BP can be displayed using LIST command

```
LIST BP

BP............

DISPLAYSUB
MYTESTPROGRAM


 2 Records Listed
```

The contents can also be seen in windows explorer as a directory

![](https://static.helpjuice.com/helpjuice_production/uploads/upload/image/3397/104835/NEWPROGRAMS.PNG)

These program can also be edited using any text editor including notepad

![](https://static.helpjuice.com/helpjuice_production/uploads/upload/image/3397/104836/notepad.PNG)

### 
COMPILE THE BASIC PROGRAM USING BASIC COMMAND

```
BASIC BP MYTESTPROGRAM DISPLAYSUB

MYTESTPROGRAM
BASIC_18.c
Source file MYTESTPROGRAM compiled successfully
DISPLAYSUB
BASIC_18.c
Source file DISPLAYSUB compiled successfully
```

The compiled code can be displayed using LIST command

```
LIST BP
```

```
BP............

$DISPLAYSUB
$MYTESTPROGRAM
DISPLAYSUB
MYTESTPROGRAM


 4 Records Listed
```

The compiled code can also be seen in windows explorer

![](https://static.helpjuice.com/helpjuice_production/uploads/upload/image/3397/104837/COMPILEDCODE.PNG)

### 


### CATALOG THE BASIC PROGRAM USING CATALOG  COMMAND

```
CATALOG BP MYTESTPROGRAM DISPLAYSUB

MYTESTPROGRAM
Object MYTESTPROGRAM cataloged successfully
DISPLAYSUB
Object DISPLAYSUB cataloged successfully
Library C:\jBASE\DEMO\lib\lib0.dll rebuild okay
```

The program can run from TCL prompt

```
MYTESTPROGRAM

This is my test program. Please hit enter to exit:?
```

The catalog process also created an executable that can be run from command prompt from the  C:\jBASE\DEMO\bin directory

![](https://static.helpjuice.com/helpjuice_production/uploads/upload/image/3397/105363/EXE.PNG)



The subroutine is not located in the bin directory. It can be found as an object in the C:\jBASE\DEMO\lib\objdir directory.

![](https://static.helpjuice.com/helpjuice_production/uploads/upload/image/3397/104843/obj.PNG)





Run the executable by double clicking  MYTESTPROGRAM.exe. Notice the error as subroutine cannot be found. This is due to an environment variable not set to allow for subroutine to be found.

![](https://static.helpjuice.com/helpjuice_production/uploads/upload/image/3397/105364/ERROR.PNG)



This can be resolved by adding the adding PUTENV("JBCOBJECTLIST=C:\jBASE\DEMO\lib") into MYTESTPROGRAM.

```
JED BP MYTESTPROGRAM
File BP , Record 'MYTESTPROGRAM'                           Insert      13:25:14
Command-> EX
0001 ERR=0
0002 ERR=PUTENV("JBCOBJECTLIST=C:\jBASE\DEMO\lib")
0003 IF ERR=1 THEN
0004   PRINT 'JBCOBJECTLIST=C:\jBASE\DEMO\lib WAS SET'
0005 END ELSE
0006   PRINT 'JBCOBJECTLIST=C:\jBASE\DEMO\lib WAS NOT SET'
0007 END
0008 MSG="This is my test program. Please hit enter to exit:"
0009 CALL DISPLAYSUB(MSG)
0010 INPUT ANS
-------------------------------- End Of Record --------------------------------











Record 'MYTESTPROGRAM' exited from file 'BP'
```



Compile and re-catalog programs (see above steps)

Run the executable by double clicking MYTESTPROGRAM.exe.

![](https://static.helpjuice.com/helpjuice_production/uploads/upload/image/3397/105365/FIXED.PNG)

Additional information:


> When you start up a jBASE process it preloads all shared objects in JBCOBJECTLIST into memory for that session. The 'ctest' subroutine does not yet exist so, after it is compiled and cataloged, the program that calls it must be run in a new session, as you've discovered. The way that is done is with EXECUTE @IM:"k" ( @IM is the same as CHAR(255), just as @AM is the same as CHAR(254) ).
> 
> In fact, this is the way you would force any process to run within a new environment. For example, if you wanted a process to run in a different emulation and on a specific port number:
> 
> ```
> shellout= @IM:"k"
> ok= PUTENV("JBCEMULATE=D3")
> ok= PUTENV("JBCPORTNO=42")
> EXECUTEshellout:"myprogram"
> ```
> 
> When the EXECUTE finishes, it is back to its original environment. The new environment is only active during the EXECUTE process.



