# LIST-OPEN-FILES

<PageHeader />

## Description

The **LIST-OPEN-FILES** utility can be used to list details of how many files are open by port number.

## Sntax Elements

```
LIST-OPEN-FILES (port {-port}} {(VF
```

where:

**port** is a valid port number.  
**port-port** is for a range of port numbers.

### Options

| Option | Description |
| --- | --- |
| V | Display a row for each file opened - full path to the file |
| F | Display a row for each file opened |

## Example

```
Opened files at 14:57:01  25 JAN 2021                                                                                                                 Page    1
Port     Application Open Files Actual O/S Open Files
500      3                      3
400      4                      4
401      4                      4
```

## Verbose Example

```
Opened files at 14:57:56  25 JAN 2021                                                                                                                 Page    1
Port     File name                                                Ref Count  Inode      rf  blck stat   fd
500      /opt/jbase5/jbase_data/jspooler/jobs/formqueue_0         1          0000000006  1     0 0213   -1
500      /opt/jbase5/jbase_data/jspooler/jspool_log               1          0000000000  1     0 020b    6
500      /opt/jbase5/CurrentVersion/tmp/jBASEWORK                 1          0000000006  1     0 020b    5
400      /opt/jbase5/CurrentVersion/tmp/jutil_ctrl                1          0000000006  1     0 020b    8
400      /dbms/SandBox/MD]D                                       1          0000000006  1     0 020b    6
400      /opt/jbase5/CurrentVersion/tmp/jBASEWORK                 1          0000000006  1     0 020b    7
400      /dbms/SYSTEM                                             1          0000000006  1     0 020b    5
401      /opt/jbase5/CurrentVersion/tmp/jutil_ctrl                1          0000000006  1     0 020b    8
401      /dbms/SandBox/MD]D                                       1          0000000006  1     0 020b    6
401      /opt/jbase5/CurrentVersion/tmp/jBASEWORK                 1          0000000006  1     0 020b    7
401      /dbms/SYSTEM                                             1          0000000006  1     0 020b    5
```

## Note

>Many new commands get their information by polling active ports for their information. This can take 5-10 seconds.

With jBASE 4 and 5, if you open the same file multiple times to different variables then, internally, jBASE will have only a single operating system file open.  
This is for efficiency and thread consideration. The difference between the numbers of files the application thinks it has open and the number of files jBASE actually has open with the operating system is displayed in the second and third columns.  
This will be more significant in multi-threaded applications that might open the same file, once for each thread. In this case, there will actually be a single file opened and the threads will share the same file handle, although this is hidden from the application.

Back to [Tools and Utilities](./../README.md)

<PageFooter />
