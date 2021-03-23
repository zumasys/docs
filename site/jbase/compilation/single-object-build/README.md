# Single Object Build

<PageHeader />  

With jBASE 5.8 onwards and 64 bit architecture we can take an approach to compilation which is easier to manage and provides many other features. This approach involves taking a single source that is compiled with BASIC, and this creates a single shared object and that is it! The shared object has meta-data appened to the object similar to the  ELF on Linux, so we've named it a JELF object, even if it isn't exactly an ELF format file.  

We will refer to this paradigm as JELF. It is opt-in, so as of jBASE 5.8 you have to enable it. Without the enablement of JELF, compilation will continue as previous releases, which is the BASIC command creates an object file, and CATALOG will merge a number of object files into larger shared object files. Of course with JELF enabled, we no longer have these larger shared object files, just one object file per source.

[![Single Object Compile & Catalog](https://img.youtube.com/vi/n9oVnkRCAOY/0.jpg)](https://www.youtube.com/watch?v=n9oVnkRCAOY)


## New features of using the JELF single object build paradigm

- On-line CATALOG. When a program is compiled with BASIC and catalog'ed with CATALOG, that program becomes available to all running jBASE programs. This means you no longer have to stop and re-start a jBASE program to pick up the modified or new routine. The only exception is that the running program cannot be currently executing the modified routine, it will wait until a RETURN is made from the routine, but the next CALL will pick up the modified version.
- Easy to maintain and understand. Having a simple correlation of one source creating one object makes life easy. A subroutine called DOTHIS would generally be in a source called DOTHIS, it creates an object called DOTHIS.so (or DOTHIS.dll) and this makes it easy to maintain. These objects can easily be copied or moved or deleted individually around accounts if required.
- Embedded Meta Data. During the BASIC command, we embed meta-data about the compilation into the object, such as date and time, user name and so on. This gives the developer a great choice of information when maintining their code.
- Embedded source code. Part of the meta-data added to the object includes a hash of the source code, called a SHA. This allows you to use tools described later to see if your source code matches that that was used to build the object. Sometimes developers have multiple copies of source and get confused which copy was used to compiler the current live version! An optional extension is to add source code to each object. This way you can guarantee 100% that the source code you used to compile the object can be retrieved. Never lose source code again. The caveat in this is that we do not include any files included in the compilation with the INCLUDE statement.
- Encrypted embedded source code. The above-mentioned feature to include source code an be further enhanced by encrypting the source code. This allows a VAR to safely release their source code to a customer and the customer cannot retrieve the source code. However, if there is an on-site problem, the developer and log into the customer site and debug the application. The jBASE debugger will take the source code from the embedded source code and will ask for the security key that was used to encrypt it. This way the VAR can do on-site debug of code, be 100% sure the correct version of code is being debugged, and yet the customer has no access to this source code.
- Safety of the CATALOG command. When a CATALOG is performed, and an existing copy of the object exists, we check the build variables haven't changed. For example, if you used the (T) option on BASIC for the initial compile but not this one, an error will be flagged. Similarly if you have changed the emulation setting between compiles, this will be flagged.
- Debug and maintenance options. Multiple options described later enable you to keep control of your application and find common problems.

## Enabling the new compiler feature

For backwards compatibility, jBASE will, by default, continue to use the paradigm whereby an object is created with BASIC, and when you CATALOG that object it is merged into a much bigger shared object and that large shared object is rebuilt. To enable the new paradigm set the JELF environment variable like this

```
$export JELF=1
```

On Windows it is:

```
C:> set JELF=1
```

This is pretty much all you need to do to enable the JELF style of single shared objects. Everything else relates to additional new features of using the JELF single object build paradigm.

## Using the JELF single object build

These JELF shared objects, created with the BASIC command, can be copied at will between folders/directories. There is no addition file to copy or modify -- just the shared object. The only requirement is the usual jBASE one, which is the shared object must reside in a directory defined in the JBCOBJECTLIST environment variable. As usual, if JBCOBJECTLIST isn't defined, the default is to use $HOME/lib and $JBCRELEASEDIR/lib

On AIX and Linux the shared object have a file name extension of .so , and on Windows the shared object has an extension of .dll.

In the example below, we compile a subroutine called MYSUB1.b, we see the only file created is a shared object, and we can then copy it into our library directory. This final stage, where we 'cp' the shared object, is pretty much all the CATALOG command has to do and most developers will likely just continue to use CATALOG along with BASIC.

```
$ ls -l MYSUB*
-rw-r--r-- 1 jbase jbase 39 Apr 16 14:44 MYSUB.b

$ BASIC . MYSUB.b
MYSUB.b
Source file MYSUB.b compiled successfully

$ ls -l MYSUB*
-rw-r--r-- 1 jbase jbase    39 Apr 16 14:44 MYSUB.b
-rw-r--r-- 1 jbase jbase 16864 Apr 16 14:44 MYSUB.so

$ cp MYSUB.so $HOME/lib
```

jBASE supports a single source file containing more than one subroutine or method. In fact, a single source can contain dozens of subroutines and/or methods (but might be slow to compile). When this happens, we still only create a single shared object for that single source and that single shared object will contain all the subroutines and methods that were in the source.

## The JELF environment variable

The JELF environment variable is usually set to 1 to enable the new feature. However, it can be set to a number of other options. To find the options, set it to "help" and run a small jBASE program like this

```
$ JELF=HELP WHO
JELF options
    debug                         Set debug level to 1
    debug=[0-3]                   Set debug level to levels 0 through 3
                                  Debug level 0 == off
                                  Debug level 1 == sanity checking, only errors reported
                                  Debug level 2 == tracing of object loading
                                  Debug level 3 == verbose tracing of object loading
    source                        Add source code to the JELF extension
    key=EncryptionKey             Encrypt source (max key size 63)

```

The 'debug=n' options allows different levels of checking when a jBASE process starts. An example is given later.

The 'source' option means the source code will be added to the meta-data. See the 'jelf' command later for details of how to view and extract the source code.

The 'key=EncryptionKey' will encryt the embedded source code with the supplied key.

## The jelf command #1

As well as a JELF environment variable, a command called 'jelf' is provided giving maintenance features. To see the help screen, execute 'jelf -h'. A more detailed description of the jelf command is given later.

## Debugging with JELF single objects

By default, the jBASE debugger continues to debug as normal. It will look for source code in the same manner as always, trying to open the file that was used to build the object. However, if you have used the 'source' option in your JELF environment variable, then the debugger will use the source code embedded in the object.

The jBASE debugger will tell you where it has found the source. In the first example below, it finds the source code from source embedded in the object. In the second example, the same program is debugged but without embedded source, and so the jBASE debugger retrieves the current copy from the file. In both examples, the jBASE debugger describes where the source was obtained from.

```
$ callbp -Jd
Option -d seen on command line
Source embedded with object /home/jbase/lib/callbp.so
0002     maxsuffix = sentence(1)
jBASE debugger->
```

```
$ callbp -Jd
Option -d seen on command line
Source taken from /home/jbase/testing/sobject/callbp.jabba
0002     maxsuffix = sentence(1)
jBASE debugger->
```

## Using the JELF environment variable

As shown earlier, setting the JELF environment variable to anything will turn on the JELF single object development paradigm. However, other settings for JELF are available, again shown earlier. One of those settings is the 'debug=nn' option, where 'nn' is the debug level.

Setting the debug status to 1 will simply cause any internal errors to be display, otherwise nothing is shown.

Setting the debug status to 2 will show the opening of the automatic catalog maps.

Setting the debug status to 3 will show a very verbose list of all the labels (function names) that have been found and the object file name they were found in.

Below is an example of setting debug status to 3, but it has been truncated for space and brevity
```
$ JELF=debug=3 WHO
JJELF: No JBCOBJECTLIST environment variable. Default to /home/jbase/lib
JELF: Directory List /home/jbase/lib
JELF: Checking map file List /home/jbase/lib/.jbase_catalog
JELF: Open map file List /home/jbase/lib/.jbase_catalog, attempt 1 of 2
JELF: Compare stat size 1204 with minimum size 1064
JELF: Take a memory map on file /home/jbase/lib/.jbase_catalog for size 1204
[ Some lines removed for brevity]

JELF: Table of objects found and labels inside objects
Index  Path                                               Flags      Labels
0      main()                                             0x00000001 
JELF: Display map for directory /home/jbase/lib
  Group    Hash       Offset         Next Offset     Label + Object Name
  -----    ----       ------         -----------     -------------------
  0        0x2841fef4 12             104            JBCM__clarke__ohmygoodness__V -- SUB1.so
           0x36ffdc74 104            0              $$$callbp -- callbp.so
  1        0x18c79957 68             0              JBC_SUB1 -- SUB1.so
  2        -----
JELF: Display map for directory /home/jbase/5.0_rels/devel5/lib
  Group    Hash       Offset         Next Offset     Label + Object Name
  -----    ----       ------         -----------     -------------------
  0        0x0d93c6a9 14404          17956          JBASELoggerSetExtendedRecord -- libjbaseutil.so
           0x18ee162b 17956          18860          CloseDevices -- libjbaseutil.so
           0x3f8dcb38 18860          27640          CreateDevAttachFile -- libjbaseutil.so
           0x09398317 27640          27760          CURLCLOSE -- libjcurl.so
[ Some lines removed for brevity ]
1 jbase
```

### Installing objects using OS commands like 'cp' or 'mv'

Under normal development conditions, the idea way to develop is to compile using BASIC and install using CATALOG. Normally, CATALOG is sufficient and it will do the following:

- Take a lock on the shared objects
- Re-name the existing shared object if it is in use (Windows) otherwise delete an existing shared object
- Copy the shared object to the target directory
- Rebuild the shared object maps
- Tell running jBASE processes a new version might be available
- Release the locks

These steps allow you to install a new or modified object into a live system if necessary.

Instead of using CATALOG, you can just use OS commands such as 'cp' or 'mv' or 'tar' to install the shared objects and when a new process starts it will automatically detect any new or modified JELF shared objects. No further action is needed. Running processes will not pick up any changes until they re-start. However any CATALOG command will force running processes to pick up changes irrespective of whether they were installd with CATALOG or 'cp' or 'mv'

### Using the jelf file type to display loaded objects  

You can list all the objects you have and the meta-data about them by creating a file of type 'jelf' and then listing it. For example, first of all create a file (any name, but we've used FB1) as type 'jelf'

```
$ create-file FB1 type=jelf
[ 417 ] File FB1]D created , type = JD
[ 417 ] File FB1]D created , type = OBJECT
[ 417 ] File FB1 created , type = OBJECT
```

Now you can simply LIST the file. During the file creation, DICTionary items are also created. Hence a "LIST FB1" uses the newly created "1! dictionary item like this

```
$ LIST FB1

PAGE    1                                                                          09:59:08  23 MAR 2021

Path.................................... Date..... Time.... Source. Emulation Labels........................

/home/jbase/devel5/core/International/sr 15 MAR 21 19:02:26 No      prime     CHAIN3.TST                    
c/QA/lib/CHAIN3.TST.so                                                                                      
/home/jbase/devel5/core/International/sr 15 MAR 21 19:02:22 No                LaunchTestHelper              
c/QA/lib/LaunchTestHelper.so                                                                                
/home/jbase/devel5/core/International/sr 15 MAR 21 19:02:22 No                CompileTests       
```
You can see all the available DICTionary items that were created by executing "LIST DICT FB1". Or try "LIST FB1 ALL" to display all the data contained in the object.

## The $jelf::getjelf([object_file_name]) class method

The new method $jelf::getjelf() allows you to programatically determine the status of the new JELF compilation paradigm. You can pass an extra single parameter which can be the name of a shared object OR the shared object itself, and the returned array will also show details about that object.

In the example below, we call getjelf with the name of a shared object where we want to find the embedded meta-data.

```
$ cat test8.jabba
    obj = new object("$jelf")
    if not(obj->getjelf()->option_enabled ) then
        print "Compiler JELF not in operation"
        stop
    end
    rtn = obj->getjelf("/home/jbase/lib/SUB1.so")
    print rtn->$tojson(1)

$ test8
{
        "option_enabled":true,
        "option_source":false,
        "option_debug":0,
        "option_key":"",
        "is_jelf_executable":0,
        "filename":"\/home\/jbase\/lib\/SUB1.so",
        "compile_utc":"1616411009.365743",
        "user_name":"jbase",
        "port_number":1,
        "emulation":"",
        "jpp2_options":"",
        "source_item":"",
        "source_encrypt_key":"",
        "source_encrypted":false,
        "source_filename":"\/home\/jbase\/testing\/clarketransport",
        "source_itemid":"SUB1.b",
        "command_line":"\"\"",
        "environment_variables":"{\"JELF\":\"1\"}",
        "jelf_flags":0,
        "sha1":"21k9k8hYvY5FJ23hpA39d2aqZSS2gkH+HkXSBd\/WJGc=",
        "sha2":"55oRWR70Pc0ePIGW\/KWihIRM7lrDxXq7enz4nn1hia8=",
        "labels":[
                "JBCM__clarke__ohmyohmy__V",
                "JBC_SUB1"
        ],
        "object_full_path":"\/home\/jbase\/lib\/SUB1.so"

}

```

## The jelf command #2

The jelf command gives all sort of information about the JELF single objects. Display the help screen with the -h or --help option like this
```
 $ jelf --help
jelf: Called as
        jelf help                  Display help screen
        jelf add objectname        Add JELF information to end of object file
              [ --symbol-file=objectname     Use a different file to find exported labels ]
              [ --add-source                 Shows to add source to the JELF ]
              [ --source-file=filename       If adding source code, this is the file to use ]
              [ --itemid=itemid              If adding source code, this is the item id to use ]
              [ --sha1=SHA_BASE_64           SHA256 value of original source with BASE64 encoding
              [ --sha2=SHA_BASE_64           SHA256 value of trimmed source with BASE64 encoding
        jelf catalog                Invalidate the cache of loaded objects - as CATALOG does
        jelf display objectname     Display information about embedded JELF
              [ --verbose  -v                 Verbose output]
        jelf getsource objectname  Extract the source item from a JELF object
              [ --output-filename=filename    Output to file instead of terminal ]
              [ --output-itemid=itemid        Use a supplied item id ]
              [ --key=decryptkey              Key for encrypted source ]
              [ --overwrite                   Overwrite existing item in file ]
              [ --no-heading                  Don't display a HEADING when output to terminal ]
        jelf list                   List all the loaded JELF routines
        jelf rebuild                Re-compile all objects currently in use
              [ --apply                       Change the rebuild from a scan and report to applying the changes]
              [ --current                     Rebuild with current environment rather than that during original build]
              [ --jobs=nnn                    Define maximum number of parallel jobs for the rebuild]
              [ --verbose  -v                 Verbose output]
        jelf symbols objectname     Display OS symbols found inside an object file
        jelf verify                 Verify all loaded objects have a matching source code
              [ --verbose  -v                 Verbose output]
              [ --list-emulation              List the settings of JBCEMULATE used to build objects]
```

### jelf add

This option is used internally by the BASIC compiler to add meta-data to an OS shared object.

### jelf catalog

Used internally by the CATALOG command to notify running jBASE processes a new copy of the subroutines may be available. This option can also be used if you attempt to install shared objects with 'cp' or 'mv' onto a live system.

### jelf display

This option allows you to display the meta-data for one or more objects. Below is an example of displaying full meta-data information about an object.
```
 $ jelf display lib/LaunchTest.so 

lib/LaunchTest.so
Object path      : lib/LaunchTest.so
Compiled         : 15 MAR 2021 19:02:22
User Name        : jbase
Port Number      : 1
Emulation        : 
JPP2 options     : 
Source Filename  : /home/jbase/devel5/core/International/src/QA/QAControlPrograms
Source ItemId    : LaunchTest.b
Source Encrypted : No
SHA1 Original    : AvVe7z5HqUNOm9WHOxzG+EnocZUoZY9MUxXhjWuUQ28=
SHA2 Trimmed     : FqS2s7It9QTZent4DAaGhia7d/5qPw7Zb4bw805CTDE=
Source Item      : 
Flags            : 
Command Line     : ""
Environment Vars : JELF=1
                   JBCDEV_LIB=/home/jbase/devel5/core/International/src/QA/lib
                   JBCDEV_BIN=/home/jbase/devel5/core/International/src/QA/bin
Labels           : $$$LaunchTest (Program LaunchTest)
```

### jelf getsource

This option allows you to extract any source that was embedded in the JELF shared object, i.e. with the 'source' option in the JELF environment variable. By default, the source is displayed to the terminal, but the use of the --output-filename=filename option and the --output-itemid=itemid option allow it to be sent to a file. If the source was encrypted you'll need the --key=encryptkey option. If the source already exists in the output file, use --overwrite.

Below is an example of extracting a source which was originally in file BP, but it will be extracted into file BPNEW so it can be compared with the current version.

```
$ jelf getsource --output-filename=BPNEW lib/LaunchTest.so
Record 'LaunchTest.b' written to file 'BPNEW'

$ diff QAControlPrograms/LaunchTest.b BPNEW/LaunchTest.b
24c24
<     EQU SlotsInfoFile     TO "NewSlotsInfo"          ;* File used by RunQA. Only used here to check whether RunQA is currently running
---
>     EQU SlotsInfoFile     TO "SlotsInfo"          ;* File used by RunQA. Only used here to check whether RunQA is currently running
138d137
< 
```

### jelf list

This will list all the current JELF shared objects. A more comprehensive way to list the objects is the use of the jelf file type, see the previous section "Using the jelf file type to display loaded objects".

```
$ jelf list NAME

Filename                                 Port   User       Date      Time     Emulation Source? Labels
/home/jbase/devel5/core/International/sr 2      jbase      15 MAR 21 19:02:26 prime     No      CHAIN3.TST
/home/jbase/devel5/core/International/sr 1      jbase      15 MAR 21 19:02:22           No      LaunchTestHelper
/home/jbase/devel5/core/International/sr 1      jbase      15 MAR 21 19:02:22           No      CompileTests
```

### jelf rebuild

Rebuild all the currently installed JELF shared objects. This options uses the meta-data inside the JELF shared object to determinate what options were used for the compilation, and will re-compile accordingly. By default, this command will simply scan and report without doing any actual compilations, allowing you to see what will be rebuilt and any problems. You can then re-run the command with the --apply option to force a multi-thread rebuild of all your sources.

Below is an example of running **without** the --apply option, some lines ommitted for brevity. We can see there is one warning because a source has changed and hasn't been re-compiled and catalog'ed since.

```
jelf rebuild
/home/jbase/devel5/core/International/src/QA/lib/CHAIN3.TST.so
    Using original source directly from /home/jbase/devel5/core/International/src/QA/QA/CHAIN3.TST
/home/jbase/devel5/core/International/src/QA/lib/LaunchTestHelper.so
    Using original source directly from /home/jbase/devel5/core/International/src/QA/QAControlPrograms/LaunchTestHelper.b
/[ Some lines removed for brevity ]

1       Warning. Source at /home/jbase/devel5/core/International/src/QA/QAControlPrograms/LaunchTest.b (23 MAR 21 12:53:16) has a newer modification time since to when then object was compiled (23 MAR 21 12:51:09)
2       Warning. Source at /home/jbase/devel5/core/International/src/QA/QAControlPrograms/LaunchTest.b has a different SHA value to when the object was compiled

JELF Rebuild. End of phase 1. Details written to file jelf_rebuild_1
Use 'LIST jelf_rebuild_1 ALL' for full details
Scan completed. To actually apply the build run with the --apply option
```

If you now run again with the --apply option as shown below, it successfully compiles and catalogs all 29 sources, noting again the single source that had changed in the meantime.

```
$ jelf rebuild --apply

1       Warning. Source at /home/jbase/devel5/core/International/src/QA/QAControlPrograms/LaunchTest.b (23 MAR 21 12:53:16) has a newer modification time since to when then object was compiled (23 MAR 21 12:51:09)
2       Warning. Source at /home/jbase/devel5/core/International/src/QA/QAControlPrograms/LaunchTest.b has a different SHA value to when the object was compiled

JELF Rebuild. End of phase 1. Details written to file jelf_rebuild_1
Use 'LIST jelf_rebuild_1 ALL' for full details

Starting the rebuild process by compiling all objects with found sources

29 objects re-compiled in 00:00:01
29 compiled successfully with 0 failures.
Use 'LIST jelf_rebuild_1' for a summary of the operations
```

### jelf symbols

Display the symbols (language labels) for one or more specified JELF shared object. In the example below we list for all the objects in our lib directory (terminal output truncated for brevity)

```
$ j jelf symbols lib/*.so 
lib/AllocateSlot.so
0   : JBC_AllocateSlot (Sub/Func AllocateSlot)
lib/BC.so
0   : jBASEMainFunctionPointer (Sub/Func jBASEMainFunctionPointer)
lib/BGEndTest.so
0   : JBC_BGEndTest (Sub/Func BGEndTest)
lib/BGRunTest.so
0   : JBC_BGRunTest (Sub/Func BGRunTest)
lib/BGStartTest.so
0   : JBC_BGStartTest (Sub/Func BGStartTest)
lib/CHAIN3.TST.so

```

### jelf verify

Does a simple check on all the JELF shared objects and reports any errors, such as the source being out-of-date or missing. In the example below, we've set "JELF=1" meaning we do not include the source code in the JELF shared object meta-data. However, we always include the SHA of the source, meaning we can detect if the source has changed since the object was installed, which happens in one file as shown below.

```
$ jelf verify
Error. Object /home/jbase/devel5/core/International/src/QA/lib/LaunchTest.so is taken from /home/jbase/devel5/core/International/src/QA/QAControlPrograms,LaunchTest.b' and the SHA shows it is the incorrect or out-of-date source
1 error, no warnings in 20 objects checked
```

Back to [Compilation](./../README.md)

<PageFooter />
