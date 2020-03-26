# VERIFY-DISTRIB Command

**Created At:** 11/29/2017 7:35:29 AM  
**Updated At:** 2/12/2019 10:18:09 AM  
**Original Doc:** [289270-verify-distrib](https://docs.jbase.com/44203-distributed-files/289270-verify-distrib)  
**Original ID:** 289270  
**Internal:** No  

The **VERIFY-DISTRIB** command verifies the existence of the component part files of a distributed file. If the distributed file uses the user-defined partition method, **VERIFY-DISTRIB** also verifies that the subroutine is executable. It takes the general form:

```
VERIFY-DISTRIB FileName
```

Where **FileName** is the name of a Distributed File.

An example of use would be as:

```
VERIFY-DISTRIB INVENTORY
```

Back to [Distributed Files](./../README.md)
