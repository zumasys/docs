# OPENSEQ

**Created At:** 9/21/2017 1:35:34 PM  
**Updated At:** 2/1/2020 11:06:50 PM  
**Original Doc:** [277543-openseq](https://docs.jbase.com/36868-jbase-basic/277543-openseq)  
**Original ID:** 277543  
**Internal:** No

**Tags:**
<badge text='record handling' vertical='middle' />
<badge text='file handling' vertical='middle' />

## Description

Opens a file for sequential writing and/or reading. It takes the general form:

```
OPENSEQ Path{,File} {READONLY} TO FileVar {LOCKED statements} THEN | ELSE statements
```

Where:

- **Path** specifies the relative or absolute path of the target directory or file,
- **File** specifies additional path information of the target file,
- **FileVar** contains the file descriptor of the file when the open was successful,
- **Statements** are conditional jBASE BASIC statements.

## Note

> If the file does not exist or cannot be opened it then executes the **ELSE** clause. However, if **JBCEMULATE** is set for Sequoia (use value "seq") emulation then **OPENSEQ** will create the file if it does not exist. This behavior can also be achieved by specifying **openseq_creates = true** in **Config_EMULATE** for the emulation being used. Once open a lock is taken on the file. If the lock cannot be taken then the **LOCKED** clause is executed if it exists otherwise the ELSE clause is executed. If specified, the **READONLY** process takes a read lock on the file, otherwise it takes a write lock. The specified file can be a regular, pipe or special device file. Locks are only taken on regular file types. Once open the file pointer is set to the first line of sequential data.

A program that uses sequential processing to create (write to)an ASCII text file from a jBASE hashed file is as below. It illustrates the use of the commands:

**OPENSEQ**, [WRITESEQ](./../writeseq), [WEOFSEQ](./../weofseq),[CLOSESEQ](./../closeseq) .

```
$option jabba
**set up working directory and file name here
if getcwd(v.dir.in) then
    v.file.in = 'trial.txt'
end

openseq v.dir.in, v.file.in to f.file.in then
    crt 'file already exists'
end  else
    crt 'file is being created....', v.file.in          ;*if openseq_creates=true
    stop
end

* open the jbase file
open "dummy_records" to jbasefile else
    stop 201
end
select jbasefile          ;* process all records

* now, let's loop thru each item and build the ascii text file.
loop while readnext id do
    read myrec from jbasefile, id then
        line = myrec

* process myrec and build the line variable with the information to be written to the ascii text file jbase automatically takes care of the
* end-of-line delimiters in this case a cr/lf is appended to the end of each line however, this can be changed with the ioctl() function .

        writeseq line to v.file.in else
            crt "what happened to the file?"
            stop
        end
    end
repeat

* wrapup
weofseq v.file.in
closeseq v.file.in
```

A program that uses sequential processing to read from an ASCII text file and write to a jBASE hashed file is as below. It illustrates the use of the commands:

**OPENSEQ**, [READSEQ](./../readseq), [CLOSESEQ](./../closeseq)

```
$option jabba
* First define the path to sequential file
if getcwd(directory) then
    path = directory:"\trial.txt"
end

openseq path to mypath else
    crt 'cannot find specified path or file'
    abort
end

* open the jbase file
open "dummy_records" to jbasefile else stop 201

* process the line data to obtain the record_id and assign it to the ID variable, record information to
* myrec variable
loop
    readseq line from mypath then
        write myrec to jbasefile, ID
    end else
        crt "Error writing to file ": jbasefile
    end
repeat

* wrapup
closeseq mypath
```

Go back to [jBASE BASIC](./../README.md)

Go back to [Programmers' Reference Guide](./../../reference-guides/jbc/README.md)
