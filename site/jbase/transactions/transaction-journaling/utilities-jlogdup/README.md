# jlogdup  

<PageHeader />

The jlogdup command provides the capability to duplicate transaction log set data from the jBASE Transaction Journal. Use this command to duplicate transaction log data to or from any platform file, including device files, standard input, ‘stdin’, and standard output, ‘stdout’.

## Syntax

```
jlogdup -Options INPUT input_spec OUTPUT output_spec
```

## Syntax Elements  

| Option  | Description |
| ---     | ---         |
| -e file | error file for database update errors               |
| -f      | used with the -v or -V option; shows information for the next (future) update;<br>by default information for past updates is displayed |
|-h       | display help                                        |
| -l file | log file to write all status and errors information |
| -m nn   | maximum number of errors (default 10000)            |
| -u nn   | display '*' every nn input records                  |
| -v      | verbose mode, 1 line per record                     |
| -x      | exclusive use of the database, no group locks taken |
| -H      | display verbose help screen                         |
| -V      | Very verbose output, also 1 line per record         |

## input_spec/output_spec  

The input/output specification can specify one or more of the following parameters

| Parameter | Description |
| ---    | ---         |
| blockmax=nnn (S)    | the maximum size, in blocks, of a serial device                 |
| blocksize=nnn       | the block size to read/write to TTY/SERIAL device or file       |
| device=file%dev (S) | the file name for SERIAL device. Can be more than one           |
| encrypt=true(O)     | Output transfer is to be encrypted                              |
| end=timespec (I)    | time in log set at which to stop restore/duplication            |
| hostname=host(IOK)  | Host for socket transfers to / from                             |
| key=encryptkey      | The key to use for encryption                                   |
| noflush=true (O)    | suppress flush of output at end of transaction. (default false) |
| notrans=true (O)    | ignore transaction boundaries. (default false)                  |
| port=portnum (IOK)  | Socket port to use for socket transfer                          |
| prompt=true         | prompt when switching serial devices or files                   |
| rename=from,to      | convert path name directories ‘from’ to ‘to’ on restore         |
| renamefile=file (O) | use rename file list of format ‘from,to’ to rename files        |
| retry=nn (I)        | specifies the interval between retries, when 'terminate=wait'   |
| scheme=method       | Encryption method                                               |
| set=current (IL)    | begin restore/duplication using the current log set as input    |
| set=database (OD)   | output is to the database, i.e. Restore mode                    |
| set=eldest (IL)     | begin restore/duplication using the eldest log set              |
| set=n (ILN)         | begin restore/duplication using log set number n                |
| set=null (O)        | output is to be discarded                                       |
| set=serial (S)      | input/output is to a serial device or file. Requires ‘device=’  |
| set=socket (IOK)    | Input/output is to a socket. Requires “hostname=” and “port=”   |
| set=stdin (IT)      | the input data comes from the terminal stdin                    |
| set=stdout (OT)     | the output data is directed to the terminal stdout              |
| set=tty (T)         | the input is from stdin or the output is to stdout              |
| set=logset (OL)     | the output is directed to the current log set as an update      |
| start=timespec (I)  | time in log set at which to start restore/duplication           |
| terminate=eof (I)   | terminate restore/duplication at eof of eldest log set          |
| terminate=eos (I)   | terminate restore/duplication at end of current log set         |
| terminate=wait (I)  | switch to elder log sets as required and wait for new updates   |
| timeout=nnn (I)     | timeout period in seconds for ‘terminate=wait'                  |
| verbose=true        | display to stderr a summary of the specification                |

The indicators in brackets denote:

| Indicator | Meaning |
| ---       | ---         |
| D         | specification valid for type database |
| I         | specification valid for type input    |
| K         | specification type for socket         |
| O         | specification valid for type output   |
| L         | specification valid for log set       |
| N         | specification valid for type of null  |
| S         | specification valid for type serial   |
| T         | specification valid for type terminal |

### Timespec

The time specification, used in the ‘start=’ and ‘end=’ specification can be one of the following formats:

| Timespec             | Meaning |
| ---                  | ---    |
| hh:mm:ss             | time of day (todays date assumed)                          |
| DD-MMM-YYYY          | date (midnight assumed), Any date convention accepted      |
| hh:mm:ss,DD-MMM-YYYY | both time and date specified either way around             |
| jbackup_file         | time of file created. Use with 'jbackup -sfilename' option |
| filename             | regular file, use the time the file was last modified       |

### Host  

The IP address or the DNS name of the host to use for socket transfers.

### Portnum  

The TCP port to use for socket transfers.

### Key

The string to be used as the encryption key for the transfer of journal entries.

### Method  

The encryption scheme to use for the transfer of journal entries. This mechanism utilizes OpenSSL high level cryptographic functions  

The valid specifications for encryption are:

- RC2
- BASE64
- DES
- 3DES
- BLOWFISH
- RC2_BASE64
- DES_BASE64
- 3DES_BASE64
- BLOWFISH_BASE64

Back to [Transaction Journaling](./../README.md)

<PageFooter />
