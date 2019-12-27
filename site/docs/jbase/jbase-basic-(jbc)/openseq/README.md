# OPENSEQ

**Created At:** 9/21/2017 1:35:34 PM  
**Updated At:** 11/27/2018 9:41:56 AM  
**Original Doc:** [277543-openseq](https://docs.jbase.com/36868-jbase-basic/277543-openseq)  
**Original ID:** 277543  
**Internal:** No  

**Tags:**
<badge text='records handling' vertical='middle' />
<badge text='file handling' vertical='middle' />

# Description

Opens a file for sequential writing and/or reading. It takes the general form:

```
OPENSEQ Path{,File} {READONLY} TO FileVar{LOCKED statements} THEN|ELSE statements
```

Where:

- **Path** specifies the relative or absolute path of the target directory or file,
- **File** specifies additional path information of the target file,
- **FileVar** contains the file descriptor of the file when the open was successful,
- **Statements** are conditional jBASE BASIC statements.


## Note: 


> If the file does not exist or cannot be opened it then executes the ELSE clause. However, if JBASICEMULATE is set for Sequoia (use value "seq") emulation then**OPENSEQ**will create the file if it does not exist. This behavior can also be achieved by specifying "openseq\_creates = true" in Config\_EMULATE for the emulation being used. Once open a lock is taken on the file. If the lock cannot be taken then the LOCKED clause is executed if it exists otherwise the ELSE clause is executed. If specified the READONLY process takes a read lock on the file, otherwise it takes a write lock. The specified file can be a regular, pipe or special device file. Locks are only taken on regular file types. Once open the file pointer is set to the first line of sequential data.




A program that uses sequential processing to create (write to)an ASCII text file from a jBASE hashed file is as below. It illustrates the use of the commands:

**OPENSEQ**, [WRITESEQ](./../writeseq), [WEOFSEQ](./../weofseq),[CLOSESEQ](./../closeseq) .

```
0001     $option jabba
0002 **set up working directory and file name here
0003     if getcwd(v.dir.in) then
0004         v.file.in = 'trial.txt'
0005     end
0006
0007
0008     openseq v.dir.in, v.file.in to f.file.in then
0009         crt 'file already exists'
0010     end  else
0011         crt 'file is being created....', v.file.in          ;*if openseq_creates=true
0012         stop
0013     end
0014
0015 * open the jbase file
0016     open "dummy_records" to jbasefile else
0017         stop 201
0018     end
0019     select jbasefile          ;* process all records
0020
0021 * now, let's loop thru each item and build the ascii text file.
0022     loop
0023
0024     while readnext id do
0025        
0026         read myrec from jbasefile, id then
0027             line = myrec
0028
0029 * process myrec and build the line variable with the information to be written to the ascii text file jbase automatically takes care of the
0030 *end-of-line delimiters in this case a cr/lf is appended to the end of each line however, this can be changed with the ioctl() function .
0031
0032             writeseq line to v.file.in else
0033                 crt "what happened to the file?"
0034                 stop
0035             end
0036         end
0037     repeat
0038
0039 * wrapup
0040     weofseq v.file.in
0041     closeseq v.file.in
```



A program that uses sequential processing to read from an ASCII text file and write to a jBASE hashed file is as below. It illustrates the use of the commands:

**OPENSEQ**, [READSEQ](./../readseq), [CLOSESEQ](./../closeseq)



```
0001     $option jabba
0002 * First define the path to sequential file        
0003     if getcwd(directory) then
0004         path = directory:"\trial.txt"
0005     end
0006
0007     openseq path to mypath else
0008         crt 'cannot find specified path or file'
0009         abort
0010     end
0011
0012 * open the jbase file
0013     open "dummy_records" to jbasefile else stop 201
0014
0015 *process the line data to obtain the record_id and assign it to the ID variable, record information to
0016 *myrec variable
0017     loop
0018         readseq line from mypath then
0019             write myrec to jbasefile, ID
0020         end else
0021             crt "Eroor writing to file ": jbasefile
0022         end
0023     repeat
0024
0025 * wrapup
0026     closeseq mypath
0027
```



Go back to [jBASE BASIC](./../jbase-basic-programmers-reference-guide).
