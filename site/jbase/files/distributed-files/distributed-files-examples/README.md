# Distributed File Examples

<PageHeader />

In this comprehensive example, we create a distributed file called DISTCUST using a user defined partition algorithm and attaching five part files.

Create the distributed file stub. This is the file to which all part files will be attached:

```
jsh -->CREATE-FILE DISTCUST TYPE=DISTRIB
[ 417 ] File DISTCUST]D created , type = J4
[ 417 ] File DISTCUST created , type = DISTRIB
```

Define the partition algorithm. If the distributed file uses the default system partition method, this step would not be necessary unless you wanted to change the delimiter separating the part number from the record ID. For this example we will use the user-defined method by assigning the subroutine [DistCustSub](./../partition-algorithm) as the partition algorithm:

```
jsh --> create-distrib –pUSER,DistCustSub DISTCUST
```

Create the five files to be attached as part files. If the files already exist then this step can be omitted:

```
jsh -->CREATE-FILE DISTCUST.NORTH 1 101
[ 417 ] File DISTCUST.NORTH]D created , type = J4
[ 417 ] File DISTCUST.NORTH created , type = J4
jsh -->CREATE-FILE DISTCUST.EAST 1 101
[ 417 ] File DISTCUST.EAST]D created , type = J4
[ 417 ] File DISTCUST.EAST created , type = J4
jsh -->CREATE-FILE DISTCUST.WEST 1 101
[ 417 ] File DISTCUST.WEST]D created , type = J4
[ 417 ] File DISTCUST.WEST created , type = J4
jsh -->CREATE-FILE DISTCUST.SOUTH 1 101
[ 417 ] File DISTCUST.SOUTH]D created , type = J4
[ 417 ] File DISTCUST.SOUTH created , type = J4
jsh -->CREATE-FILE DISTCUST.ERRORS 1 41
[ 417 ] File DISTCUST.ERRORS]D created , type = J4
[ 417 ] File DISTCUST.ERRORS created , type = J4
```

Attach the five files to the distributed file:

```
jsh -->create-distrib -a DISTCUST 1 DISTCUST.NORTH
Part file 'DISTCUST.NORTH', Part number 1 added
jsh -->create-distrib -a DISTCUST 2 DISTCUST.EAST
Part file 'DISTCUST.EAST', Part number 2 added
jsh -->create-distrib -a DISTCUST 3 DISTCUST.WEST
Part file 'DISTCUST.WEST', Part number 3 added
jsh -->create-distrib -a DISTCUST 4 DISTCUST.SOUTH
Part file 'DISTCUST.SOUTH', Part number 4 added
jsh -->create-distrib -a DISTCUST 99 DISTCUST.ERRORS
Part file 'DISTCUST.ERRORS', Part number 99 added
```

Now, let’s list the part files we have just added.

```
jsh -->LIST-DISTRIB DISTCUST -or- create-distrib -l DISTCUST
Partitioning Algorithm is USER Subroutine 'DistCustSub'
Part file 'DISTCUST.NORTH', part number 1
Part file 'DISTCUST.EAST', part number 2
Part file 'DISTCUST.WEST', part number 3
Part file 'DISTCUST.SOUTH', part number 4
Part file 'DISTCUST.ERRORS',part number 99
```

The distributed file system is now complete. At this point, the [DistCustSub](./../partition-algorithm) subroutine is called each time a record is written to or read from the DISTCUST file.

Let’s say, for example, that we find that the DISTCUST.ERRORS part file is no longer needed. The actions we must take to remove this file from the distributed file are:

Detach the part file from the distributed file:

`DELETE-DISTRIB DISTCUST 99`

OR

`create-distrib -d DISTCUST 99`

Modify the user-defined partition subroutine [DistCustSub](./../partition-algorithm) by removing the lines which allocate records to part number 99. Recompile and catalog.

Optional: Delete the DISTCUST.ERRORS file.

`DELETE-FILE DISTCUST.ERRORS`

Back to [Distributed Files](./../README.md

  
<PageFooter />
