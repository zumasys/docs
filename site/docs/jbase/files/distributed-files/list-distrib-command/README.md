# LIST-DISTRIB COMMAND

**Created At:** 11/29/2017 7:24:28 AM  
**Updated At:** 12/1/2017 11:23:42 PM  
**Original Doc:** [289268-list-distrib](https://docs.jbase.com/44203-distributed-files/289268-list-distrib)  


The LIST-DISTRIB command displays all partition information pertaining to a distributed file. It takes the general form:

```
LIST-DISTRIB FileName
```

where :

- FileName is the name of the distributed file




The [VERIFY-DISTRIB](./../verify-distrib-command) command is much more useful as this not only displays the same information as LIST-DISTRIB, it also verifies the existence of the component part files. If the distributed file uses the user-defined partition method, [VERIFY-DISTRIB](./../verify-distrib-command) also verifies that the subroutine is executable.



An example of use is as:

```
LIST-DISTRIB INVENTORY
```
