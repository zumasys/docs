# Single Object Build

<PageHeader />

With 64 bit architecture we can take an approach which is easier to manage. This is where one source compiled with BASIC creates a single shared object and that is it! The shared object has an extension similar to the use of ELF on Linux, so we've named it a JELF extention, even if it isn't exactly an ELF format file.

These shared objects can be copied at will between folders/directories. There is no addition file to copy or modify -- just the shared object. The only requirement is the usual jBASE one, which is the shared object must reside in a directory defined in the JBCOBJECTLIST environment variable. As usual, if JBCOBJECTLIST isn't defined, the default is to use $HOME/lib and $JBCRELEASEDIR/lib

On AIX and Linux the shared object have a file name extension of .so , and on Windows the shared object has an extension of .dll.

In the example below, we compile a subroutine called MYSUB1.b, we see the only file created is a shared object, and we can then copy it into our library directory. This final stage, where we 'cp' the shared object, is pretty much all the CATALOG command has to do.
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

### Enabling the new compiler feature

For backwards compatibility, jBASE will, by default, continue to use the paradigm whereby an object is created with BASIC, and when you CATALOG that object it is merged into a much bigger shared object and that large shared object is rebuilt. To enable the new paradigm set the JCOMPILE environment variable like this
```
$ export JCOMPILE=1
```
On Windows it is 
```
C:> set JCOMPILE=1
```

The JCOMPILE is mostly effective during compilation time to direct the compiler whether to continue to build in the same manner as it has for 30+ years (the default action) or whether to build with the new paradigm documented here.. 

__When an application is run, it can use the shared object built in either manner and does not need JCOMPILE to be either set or unset.__

## Other new features
The JCOMPILE environment variable is usually set to 1 to enable the new feature. However, it can be set to a number of other options. To find the options, set it to "help" and run a small jBASE program like this
```
$ JCOMPILE=help WHO
JCOMPILE options
    debug=yes|no|true|false       Debug information loading objects
    verbose=yes|no|true|false     Verbose debug information (needs debug=true|yes)
    source=yes|no|true|false      Add source code to the JELF
    key=EncryptionKey             Encrypt source (max key size 63)
1 jbase
```

The 'source' and 'key' options are for a future release and not implemented in this change.

As an example, set JCOMPILE=debug and it will show you some information about the shared objects it looks in when the program is loaded. This option (and the 'verbose' option) are hugely helpful when you want to see why a subroutine cannot be found, or why the "wrong" version of a subroutine is being loaded.
```
$ JCOMPILE=debug WHO
JCOMPILE: No JBCOBJECTLIST environment variable. Default to /home/jbase/lib
JCOMPILE: Directory List /home/jbase/lib
JCOMPILE: Scanning directory /home/jbase/lib
JCOMPILE: File /home/jbase/lib/SUB4.so has 1 label
JCOMPILE: File /home/jbase/lib/SUB1.so has 1 label
JCOMPILE: File /home/jbase/lib/SUB2.so has 4 labels
JCOMPILE: File /home/jbase/lib/SUB6.so has 1 label
JCOMPILE: File /home/jbase/lib/MYSUB.so has 1 label
JCOMPILE: File /home/jbase/lib/SUB5.so has 1 label
JCOMPILE: Directory List /home/jbase/5.0_rels_devel1/jbcdevdevelopment/lib
JCOMPILE: Scanning directory /home/jbase/5.0_rels_devel1/jbcdevdevelopment/lib
JCOMPILE: Export List /home/jbase/5.0_rels_devel1/jbcdevdevelopment/lib/libclasses.so.el had 60 labels
JCOMPILE: Export List /home/jbase/5.0_rels_devel1/jbcdevdevelopment/lib/libjbaseutil.so.el had 258 labels
JCOMPILE: Export List /home/jbase/5.0_rels_devel1/jbcdevdevelopment/lib/libjsub.so.el had 26 labels
JCOMPILE: Export List /home/jbase/5.0_rels_devel1/jbcdevdevelopment/lib/libjwobj.so.el had 27 labels
JCOMPILE: Export List /home/jbase/5.0_rels_devel1/jbcdevdevelopment/lib/libjcon.so.el had 22 labels
JCOMPILE: Export List /home/jbase/5.0_rels_devel1/jbcdevdevelopment/lib/libjrest.so.el had 21 labels
JCOMPILE: Export List /home/jbase/5.0_rels_devel1/jbcdevdevelopment/lib/libSQLSYS.so.el had 16 labels
1 jbase
```

You can also add the 'verbose' option to the 'debug' and verbose output is created. Below is a shortened screen shot of using it.
```
$ JCOMPILE=debug,verbose WHO
JCOMPILE: No JBCOBJECTLIST environment variable. Default to /home/jbase/lib
JCOMPILE: Directory List /home/jbase/lib
JCOMPILE: Scanning directory /home/jbase/lib
JCOMPILE: File /home/jbase/lib/SUB4.so has label JBC_SUB4
JCOMPILE: File /home/jbase/lib/SUB4.so has 1 label
JCOMPILE: File /home/jbase/lib/SUB1.so has label JBC_SUB1
JCOMPILE: File /home/jbase/lib/SUB1.so has 1 label
JCOMPILE: File /home/jbase/lib/SUB2.so has label JBC_MySub1
JCOMPILE: File /home/jbase/lib/SUB2.so has label JBC_MySubXYZ
JCOMPILE: File /home/jbase/lib/SUB2.so has label JBC_SUB2
JCOMPILE: File /home/jbase/lib/SUB2.so has label JBC_SUB3
JCOMPILE: File /home/jbase/lib/SUB2.so has 4 labels
JCOMPILE: File /home/jbase/lib/SUB6.so has label JBC_SUB6
JCOMPILE: File /home/jbase/lib/SUB6.so has 1 label
JCOMPILE: File /home/jbase/lib/MYSUB.so has label JBC_MYSUB
JCOMPILE: File /home/jbase/lib/MYSUB.so has 1 label
JCOMPILE: File /home/jbase/lib/SUB5.so has label JBC_SUB5
JCOMPILE: File /home/jbase/lib/SUB5.so has 1 label
JCOMPILE: Directory List /home/jbase/5.0_rels_devel1/jbcdevdevelopment/lib
JCOMPILE: Scanning directory /home/jbase/5.0_rels_devel1/jbcdevdevelopment/lib
JCOMPILE: File /home/jbase/5.0_rels_devel1/jbcdevdevelopment/lib/libicuio.so not in JELF format
JCOMPILE: File /home/jbase/5.0_rels_devel1/jbcdevdevelopment/lib/libssl.so not in JELF format
JCOMPILE: File /home/jbase/5.0_rels_devel1/jbcdevdevelopment/lib/libclasses.so has label JBCM__$development__crash__V
JCOMPILE: File /home/jbase/5.0_rels_devel1/jbcdevdevelopment/lib/libclasses.so has label JBCM__$development__findprogram__V
JCOMPILE: File /home/jbase/5.0_rels_devel1/jbcdevdevelopment/lib/libclasses.so has label JBCM__$development__formatcpp__V
JCOMPILE: File /home/jbase/5.0_rels_devel1/jbcdevdevelopment/lib/libclasses.so has label JBCM__$development__getopt__V
JCOMPILE: File /home/jbase/5.0_rels_devel1/jbcdevdevelopment/lib/libclasses.so has label JBCM__$development__perror__V
```

###  $system::getjelf([parm1[,parm2[....]])

The new method $system::getjelf() allows you to programatically determine the status of the new JELF compilation paradigm. You can pass any number of arguments, each of which can be the name of a shared object OR the shared object itself, and the returned array will also show details about that object.

In the example below, we call getjelf with 3 parameters. The first is the name of a file that doesn't exist. The second is the name of a shared object, but it isn't in JELF format. The third parameter is the name of a shared object with the JELF extensions (compiled with JCOMPILE=1) and will return details about that.
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

### jcompile

The jcompile command is rarely used by customers, so this change will only be of interest to a few.

The jcompile command ignores the JCOMPILE environment variable. To ask jcompile to create a shared object with a JELF extension, use jcompile with the -T option. For example
```
$ jcompile MYSUB.b -o MYSUB.so -T
```

This is how the BASIC command builds shared objects with the JELF extensions, but this is internal to BASIC and rarely noticed by customers.
## Notes
## Test Details
## Internal Notes
Back to [Compilation](./../README.md)

<PageFooter />
