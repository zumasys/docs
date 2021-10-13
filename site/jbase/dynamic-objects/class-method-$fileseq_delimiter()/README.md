# Class Method: $file::seq_delimiter()

<PageHeader />

## Description

This is a new class library method to change sequential file delimiter sequences. 

It can be applied to an individual file opened with [OPENSEQ](./../../jbc/openseq/README.md), or applied as a default delimiter for all future OPENSEQ instances in the running program (child and parent programs not affected).  

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

There are ways of changing the delimiter as shown abovefor this method. 

You can also pass a null string as the delimiter. The effect of this is as follows:

For [WRITESEQ](.//.//jbc/../../../jbc/writeseq/README.md), there is simply no output at the end of a WRITESEQ
For [READSEQ](./../../jbc/writeseq/README.md), as there is no delimiter, a full block up to the maximum block size is read in.

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

Back to [$file Class](./../class-$file/README.md)

<PageFooter />
