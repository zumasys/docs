# jfind

**Created At:** 7/20/2018 1:48:12 PM  
**Updated At:** 7/26/2018 1:53:46 PM  
**Original Doc:** [328698-jfind](https://docs.jbase.com/30301-jbase/328698-jfind)  
**Original ID:** 328698  
**Internal:** No  

**Tags:**
<badge text='search program' vertical='middle' />
<badge text='tools' vertical='middle' />

## Description 

The Windows platform does not provide a command line search program like the Unix **find**command. This is a limited form of the Unix **find**command for the Windows platform. The format of the command is as:

```
jfind pathlist options
```

where option may be:


| Option <br> | Description <br> |
| --- | --- |
| -name pattern<br> | finds files whose name matches pattern<br> |
| -print<br> | prints the pathname for files found<br> |
| -type d|f<br> | find directories or files<br> |


Example:

```
jfind C:\MYDIR -name ".*AUSTIN.*" -print
```



This command is useful when used to pipe data to the **jbackup**command, e.g.

```
jfind C:\accounts -print | jbackup -f C:\my_backups\my_accounts.bak
```

  
<PageFooter />
