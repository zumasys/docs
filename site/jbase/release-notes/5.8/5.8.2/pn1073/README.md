# PN1073

<PageHeader />

## Description

[WRITESEQ](./../../../../jbc/writeseq/README.md) on Windows only used @LF as a new line terminator instead of @LF@CR.  This required users to add @CR to the block they were writing.

## Previous Release Behavior  

WRITESEQ only wrote @LF as a line delimiter. There is an IOCTL to change this, but the IOCTL would only allow a single character as a delimiter.

## Current Release Behavior

### Changes to WRITESEQ

WRITESEQ still defaults to @LF as a delimiter on UNIX, @LF@CR on Windows.  

There is no emulation or platform option to change this. This decision is to ensure backward compatibility.  

There are a couple of ways to change the delimiter.

The first is by using the existing IOCTL call, which now accepts up to 32 bytes for a delimiter, for example to change the delimiter to Windows style ...

```
    include JBC.h
    filevar = 0
    filename = "test2.txt"
    execute "rm -f ":filename
    openseq filename to filevar else null
    if ioctl(filevar,JIOCTL_COMMAND_SEQ_CHANGE_DELIMITER,@CR:@LF) else null
    writeseq "Time is ":timedate() on filevar else debug
    writeseq "Another" on filevar else debug
    writeseq "Line" on filevar else debug
```

### Changes to READSEQ

[READSEQ](./../../../../jbc/readseq/README.md) has been changed so that if you define a delimiter of @CR, or @LF, or @CR:@LF , or @LF:@CR, then it will always look for @LF or @CR:@LF as a READ delimiter. This enables the application to safely read a file one line at a time and not care if the file originated in Windows or UNIX.

### New \$file->seq_delimiter method

There is a new class library method to also change the sequences. This can be applied to an individual file opened with OPENSEQ, or applied as a default delimiter for all future OPENSEQ instances in the running program (child and parent programs not affected).  

For example, to set the default delimiter for all future OPENSEQ do this (note it does not affect any files already open):

```
    $option jabba
    fileobj = new object("$file")
    robj = fileobj->seq_delimiter("",@CR:@LF)

    filename = "test1.txt"
    execute "rm -f ":filename
    openseq filename to filevar else null
    writeseq "Time is ":timedate() on filevar else debug
    writeseq "Another" on filevar else debug
    writeseq "Line" on filevar else debug
```

In the above example, the first parameter to seq_delimiter is a null string, meaning the second parameter, the delimiter, is to be saved as the default for all future OPENSEQ.

The example below changes the delimiter of an individual file:

```
    $option jabba
    fileobj = new object("$file")

    filename = "test2.txt"
    execute "rm -f ":filename
    openseq filename to filevar else null
    robj = fileobj->seq_delimiter(filevar,@LF)
    writeseq "Time is ":timedate() on filevar else debug
    writeseq "Another" on filevar else debug
    writeseq "Line" on filevar else debug
```

The use of the $file->seq_delimiter method will return an object whose properties describe the new settings.  

Below is an example of finding the default delimiter for this program:

```
$ cat test3.jabba
    obj = $file->seq_delimiter("")
    crt "The default delimiters for this program are :"
    crt obj->$tojson(1)

$ jcompile test3.jabba -o test3

$ ./test3
The default delimiters for this program are :
{
        "read":"\n",
        "write":"\n"
}
```

The "write" property is the delimiter for a WRITESEQ that will be applied following an OPENSEQ
The "read" property is the delimiter for a READSEQ that will be applied following an OPENSEQ.

## NULL delimiters

There are two ways shown of changing the delimiter as noted above, the IOCTL() function and the $file->seq_delimiter() method. In both cases you can pass a null string as the delimiter. The effect of this is as follows:

For WRITESEQ, there is simply no output at the end of a WRITESEQ
For READSEQ, as there is no delimiter, a full block up to the maximum block size is read in.

In the following example, we write out a file, then read it back in again. We then change the delimiter to "" and read in again, this time we get the entire file in the first READSEQ:

```
$ cat test6.jabba
*
* Write a file with @CR:@LF delimiter
*
    filename = "test1.txt"
    execute "rm -f ":filename
    openseq filename to filevar else null
    robj = $file->seq_delimiter(filevar,@CR:@LF)
    writeseq "Time is ":timedate() on filevar else debug
    writeseq "Another" on filevar else debug
    writeseq "Line" on filevar else debug
*
* Read back the file with default delimiters
*
    close filevar
    openseq filename to filevar else debug
    loop while readseq line from filevar do
        crt "Line = '":line->$mcpu():"'"
    repeat
*
* Change the delimiter to "" and re-read it.
*
    crt
    close filevar
    openseq filename to filevar else null
    robj = $file->seq_delimiter(filevar,"")
    loop while readseq line from filevar do
        crt "Line = '":line->$mcpu():"'"
    repeat

$ jcompile test6.jabba -o test6

$ ./test6
Line = 'Time is 16:31:16  22 MAY 2021'
Line = 'Another'
Line = 'Line'

Line = 'Time is 16:31:16  22 MAY 2021^M^JAnother^M^JLine^M^J'
```

Back to [5.8.2 Release Notes](./../README.md)

<PageFooter />
