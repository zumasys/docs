# 
CLEAR-ITEM-LOCKS

**Created At:** 8/2/2018 2:37:29 PM  
**Updated At:** 8/31/2018 11:09:38 AM  
**Original Doc:** [clear-item-locks](https://docs.jbase.com/46963-utilities/clear-item-locks)  

**Tags:**
<badge text='locking' vertical='middle' />

## Description 

The CLEAR-ITEM-LOCKS command can be used to clear a specific lock or all locks taken against a specific file. This command can only be used with jBASE hashed files. The command may take the general form:

```
CLEAR-ITEM-LOCKS filename
```

or

```
CLEAR-ITEM-LOCKS filename, itemname
```



CLEAR-ITEM-LOCKS should be used with extreme caution and only as a last resort. The necessity to use CLEAR-ITEM-LOCKS is a clear indication of an application with a poorly designed locking strategy.



## Note: 


> This command can only be issued by a user with root/administrator privileges. To clear a lock on a [distributed file](./../../../files/distributed-files/distributed-files), the part file where the locked item exists must be specified.


Examples of use may be as:

```
CLEAR-ITEM-LOCKS INVENTORY, PDT603
```

Clears the lock on the item PDT603 in the INVENTORY file.

```
CLEAR-ITEM-LOCKS INVENTORY
```

Clears all item locks in place on the INVENTORY file.

```
CLEAR-ITEM-LOCKS CASE]M2002, R47FC9Z
```

Clears the lock on the item R47FC9Z in the multi-level file CASE, data section 2002.



See also [SHOW-ITEM-LOCKS](./../show-item-locks)
