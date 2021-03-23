# Single Object Build

<PageHeader />  

With jBASE 5.8 onwards and 64 bit architecture we can take an approach to compilation which is easier to manage and provides many other features. This approach involves taking a single source that is compiled with BASIC, and this creates a single shared object and that is it! The shared object has meta-data appened to the object similar to the  ELF on Linux, so we've named it a JELF object, even if it isn't exactly an ELF format file.  

We will refer to this paradigm as JELF. It is opt-in, so as of jBASE 5.8 you have to enable it. Without the enablement of JELF, compilation will continue as previous releases, which is the BASIC command creates an object file, and CATALOG will merge a number of object files into larger shared object files. Of course with JELF enabled, we no longer have these larger shared object files, just one object file per source.

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

## The jelf command

As well as a JELF environment variable, a command called 'jelf' is provided giving maintenance features. To see the help screen, execute 'jelf -h'. A more detailed description of the jelf command is given later.

## Debugging with JELF single objects

By default, the jBASE debugger continues to debug as normal. It will look for source code in the same manner as always, trying to open the file that was used to build the object. However, if you have used the 'source' option in your JELF environment variable, then the debugger will use the source code embedded in the object.

The jBASE debugger will tell you where it has found the source. In the example below, it finds the source from source embedded in the object. In the second example, the same program is debugged but without embedded source, and so the jBASE debugger prints this difference.

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

As an example, set JELF=debug and it will show you some information about the shared objects it looks in when the program is loaded. This option (and the 'verbose' option) are hugely helpful when you want to see why a subroutine cannot be found, or why the "wrong" version of a subroutine is being loaded.

```
$ JELF=debug WHO
JELF: No JBCOBJECTLIST environment variable. Default to /home/jbase/lib
JELF: Directory List /home/jbase/lib
JELF: Scanning directory /home/jbase/lib
JELF: File /home/jbase/lib/SUB4.so has 1 label
JELF: File /home/jbase/lib/SUB1.so has 1 label
JELF: File /home/jbase/lib/SUB2.so has 4 labels
JELF: File /home/jbase/lib/SUB6.so has 1 label
JELF: File /home/jbase/lib/MYSUB.so has 1 label
JELF: File /home/jbase/lib/SUB5.so has 1 label
JELF: Directory List /home/jbase/5.0_rels_devel1/jbcdevdevelopment/lib
JELF: Scanning directory /home/jbase/5.0_rels_devel1/jbcdevdevelopment/lib
JELF: Export List /home/jbase/5.0_rels_devel1/jbcdevdevelopment/lib/libclasses.so.el had 60 labels
JELF: Export List /home/jbase/5.0_rels_devel1/jbcdevdevelopment/lib/libjbaseutil.so.el had 258 labels
JELF: Export List /home/jbase/5.0_rels_devel1/jbcdevdevelopment/lib/libjsub.so.el had 26 labels
JELF: Export List /home/jbase/5.0_rels_devel1/jbcdevdevelopment/lib/libjwobj.so.el had 27 labels
JELF: Export List /home/jbase/5.0_rels_devel1/jbcdevdevelopment/lib/libjcon.so.el had 22 labels
JELF: Export List /home/jbase/5.0_rels_devel1/jbcdevdevelopment/lib/libjrest.so.el had 21 labels
JELF: Export List /home/jbase/5.0_rels_devel1/jbcdevdevelopment/lib/libSQLSYS.so.el had 16 labels
1 jbase
```

You can also add the 'verbose' option to the 'debug' and verbose output is created. Below is a shortened screen shot of using it.

```
$ JELF=debug,verbose WHO
JELF: No JBCOBJECTLIST environment variable. Default to /home/jbase/lib
JELF: Directory List /home/jbase/lib
JELF: Scanning directory /home/jbase/lib
JELF: File /home/jbase/lib/SUB4.so has label JBC_SUB4
JELF: File /home/jbase/lib/SUB4.so has 1 label
JELF: File /home/jbase/lib/SUB1.so has label JBC_SUB1
JELF: File /home/jbase/lib/SUB1.so has 1 label
JELF: File /home/jbase/lib/SUB2.so has label JBC_MySub1
JELF: File /home/jbase/lib/SUB2.so has label JBC_MySubXYZ
JELF: File /home/jbase/lib/SUB2.so has label JBC_SUB2
JELF: File /home/jbase/lib/SUB2.so has label JBC_SUB3
JELF: File /home/jbase/lib/SUB2.so has 4 labels
JELF: File /home/jbase/lib/SUB6.so has label JBC_SUB6
JELF: File /home/jbase/lib/SUB6.so has 1 label
JELF: File /home/jbase/lib/MYSUB.so has label JBC_MYSUB
JELF: File /home/jbase/lib/MYSUB.so has 1 label
JELF: File /home/jbase/lib/SUB5.so has label JBC_SUB5
JELF: File /home/jbase/lib/SUB5.so has 1 label
JELF: Directory List /home/jbase/5.0_rels_devel1/jbcdevdevelopment/lib
JELF: Scanning directory /home/jbase/5.0_rels_devel1/jbcdevdevelopment/lib
JELF: File /home/jbase/5.0_rels_devel1/jbcdevdevelopment/lib/libicuio.so not in JELF format
JELF: File /home/jbase/5.0_rels_devel1/jbcdevdevelopment/lib/libssl.so not in JELF format
JELF: File /home/jbase/5.0_rels_devel1/jbcdevdevelopment/lib/libclasses.so has label JBCM__$development__crash__V
JELF: File /home/jbase/5.0_rels_devel1/jbcdevdevelopment/lib/libclasses.so has label JBCM__$development__findprogram__V
JELF: File /home/jbase/5.0_rels_devel1/jbcdevdevelopment/lib/libclasses.so has label JBCM__$development__formatcpp__V
JELF: File /home/jbase/5.0_rels_devel1/jbcdevdevelopment/lib/libclasses.so has label JBCM__$development__getopt__V
JELF: File /home/jbase/5.0_rels_devel1/jbcdevdevelopment/lib/libclasses.so has label JBCM__$development__perror__V
```

### $system::getjelf([parm1[,parm2[....]])

The new method $system::getjelf() allows you to programatically determine the status of the new JELF compilation paradigm. You can pass any number of arguments, each of which can be the name of a shared object OR the shared object itself, and the returned array will also show details about that object.

In the example below, we call getjelf with 3 parameters. The first is the name of a file that doesn't exist. The second is the name of a shared object, but it isn't in JELF format. The third parameter is the name of a shared object with the JELF extensions (compiled with JELF=1) and will return details about that.

```
$ cat test8.jabba
    if not($system->getjelf()->jelf->enabled ) then
        print "Compiler JELF not in operation"
        stop
    end
    rtn = $system->getjelf("SUBX.so" , "PROG1.so","SUB2.so")
    print rtn->$tojson(1)

$ test8
{
        "jelf":{
                "enabled":true,
                "source":false,
                "debug":false,
                "verbose":false,
                "key":""
        },
        "object":[
                {
                        "filename":"SUBX.so",
                        "errmsg":"SUBX.so: No such file or directory"
                },
                {
                        "filename":"PROG1.so",
                        "errmsg":"Not JELF: Trailer identifiers invalid"
                },
                {
                        "filename":"SUB2.so",
                        "compile_utc":"1587044146.420556",
                        "labels":[
                                "JBC_MySub1",
                                "JBC_MySubXYZ",
                                "JBC_SUB2",
                                "JBC_SUB3"
                        ]
                }
        ]
}
```

### JELF

The JELF command is rarely used by customers, so this change will only be of interest to a few.

The JELF command ignores the JELF environment variable. To ask JELF to create a shared object with a JELF extension, use JELF with the -T option. For example:

```
$JELF MYSUB.b -o MYSUB.so -T
```

This is how the BASIC command builds shared objects with the JELF extensions, but this is internal to BASIC and rarely noticed by customers.

## Notes

## Test Details

## Internal Notes

Back to [Compilation](./../README.md)

<PageFooter />
