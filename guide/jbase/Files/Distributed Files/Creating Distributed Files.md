# Creating Distributed Files

**Created At:** 9/14/2018 12:09:27 PM  
**Updated At:** 10/31/2018 8:13:55 AM  

**Tags:**
<badge text='distributed files' vertical='middle' />

## Description 

A distributed file is created using the CREATE-FILE command with the qualifier TYPE=DISTRIB. This will create two files, a dictionary which is a Hash4 (currently fixed at mod3) and the distributed file stub. If desired, the dictionary can be resized using the jrf utility.

For example, the following command creates a distributed file called DISTREGION:

```
jsh DEMO ~ -->CREATE-FILE DISTREGION TYPE=DISTRIB
[ 417 ] File DISTREGION]D created , type = JP
[ 417 ] File DISTREGION created , type = DISTRIB
```



The file partition table is empty at this point, and the partition algorithm is set to the default system partition method with a delimiter of ‘-‘ (i.e. all record IDs must be of the form "PartNumber-recordID"). These aspects of the distributed file can be changed with the create-distrib command.


