# Selective Journaling

<PageHeader />

The jBASE journaler does not record every update that occurs on the system. It is important to understand what is and is not automatically recorded in the transaction log.  

What is journaled? Unless a file is designated unloggable, everything is updated through the jEDI interface (i.e. use of the jchmod –L filename command . This includes non-jBASE hash files such as directories.  

What is **NOT** journaled? The opposite of above, in particular:

- Operations using non-jBASE commands such as the ‘rm’ and ‘cp’ commands, the ‘vi’ editor.
- The UNIX spooler files.
- Index definitions.
- Trigger definitions.
- Remote files using jRFS via remote Q-pointers or stub files
- When a SUBROUTINE is cataloged, the resulting shared library is not logged.
- When a PROGRAM is cataloged the resulting binary executable file is not logged.
- Internal files used by jBASE such as jPMLWorkFile, jBASEWORK, jutil_ctrl will be set to non-logged only when they are automatically created by jBASE.  
  - If you create any of these files yourself, you should specify that they be not logged (see note on CREATE-FILE below).  
  - You may also choose to not log specific application files.  

It is recommended that most application files be enabled for transaction journaling. Exceptions to this may include temporary scratch files and work files used by an application. Files can be disabled from journaling by specifying LOG=FALSE with the CREATE-FILE command or by using the -L option with the jchmod command. Journaling on a directory can also be disabled with the jchmod command. When this is done, a file called .jbase_header is created in the directory to hold the information.  

Remote files are disabled for journaling by default. Individual remote files can be enabled for journaling by using "QL" instead of "Q" in attribute 1 of the Q pointer, e.g.  

```
<1>QL
<2>REMOTEDATA
<3>CUSTOMERS
```

Adding "L" to attribute 2 of the file stub.

## Example

```
JBC_SOB JediInitREMOTE CUSTOMERS darthv.jbaseintl.com
```

In general, journaling on specific files should not be disabled for "efficiency" reasons as such measures will backfire when you can least afford it.

[Next Page](./../selective-restores/README.md)

Back to [Transaction Journaling](./../README.md)

<PageFooter />
