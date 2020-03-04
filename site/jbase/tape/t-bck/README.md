# T-BCK

**Created At:** 9/25/2018 1:28:14 PM  
**Updated At:** 12/22/2018 10:37:29 AM  
**Original Doc:** [t-bck](https://docs.jbase.com/49399-tape/t-bck)  
**Original ID:** 340646  
**Internal:** No  


## Description 

The **T-BCK** command will backspace the tape device one block at a time by the number of blocks specified. If the block specification is omitted then the **T-BCK** command will execute a backward file search command for the previous end of file mark, (EOF).

The command takes the general form:

```
T-BCK {CHANNEL=channel} {n}
```

where:

- **channel** is the specific channel attachment (0-9).
- **n** is the number of blocks the tape is to backspace.




## Note:


> Some tape devices, e.g. streaming cartridge tapes, do not support any backspace commands. Other devices, e.g. 8MM devices, cannot reliably perform backspacing and therefore this command should be avoided for tape devices other than half inch units as possible I/O errors can result.


If the beginning of tape, (BOT), is encountered while backspacing the tape device then the operation is aborted and the tape device repositioned to BOT. If an end of filemark, (EOF), is encountered while backspacing the tape device then the block specification, if any, is overridden and the tape device positioned before the EOF.



Examples of use include:

```
T-BCK 10
```

The tape device is requested to back space ten blocks.

```
T-BCK
```

The tape device is requested to backward search to the previous end of file mark, (EOF).
