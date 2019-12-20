# DELETE-DISTRIB COMMAND

**Created At:** 11/29/2017 7:14:42 AM  
**Updated At:** 12/1/2017 11:21:40 PM  
**Original Doc:** [289267-delete-distrib](https://docs.jbase.com/44203-distributed-files/289267-delete-distrib)  


The DELETE-DISTRIB command detaches (de-references) a component part file from a distributed file. It takes the general form:

```
DELETE-DISTRIB FileName PartNumber
```

where :

- FileName is the name of the distributed file,
- PartNumber is an integer in the range 1-254 inclusive, which was used to associate the part file to the distributed file.


###  

If the user-defined partition method is used, care should be taken to ensure that the subroutine used for the partition algorithm does access the de-referenced file.

If the system partition method is used, care should be taken to ensure that no keys are created which can read from or write to the de-referenced file.



An example of use would be:

```
DELETE-DISTRIB INVENTORY 42
```

to detach (de-reference) the 42nd part file from the distributed file INVENTORY.
