# PARTITION ALGORITHM

**Created At:** 11/28/2017 1:54:09 PM  
**Updated At:** 1/5/2018 7:01:38 PM  


# Overview 

Each distributed file uses a partition algorithm to determine in which part file a record belongs. The partition algorithm is specified by using the [create-distrib command](289128-create-distrib-command) . All part files belonging to a distributed file use the same partition algorithm.

There are two methods for defining the partition algorithm, the system defined method and the user-defined method. The partition algorithm uses the record ID (or part of the record ID) to distribute the record to the appropriate part file.



# System Partition Algorithm

When a distributed file is created it is automatically set to use the system partition algorithm. The [create-distrib command](289128-create-distrib-command) is used to set the partition algorithm. When using the system partition method, jBASE assumes that the record ID will be in the form:

```
create-distrib <PartNumber> <Delimiter> <RecordID>
```

Where:

- PartNumber is an integer which determines the**part file** to which the record is written.
- Delimiter can be any character except a system delimiter (AM, VM, SVM). The default delimiter is a dash (-).
- RecordID is the actual item-ID of the record. In a ‘hashed’ file type, this determines the group to which the record is written.




The following example sets (or changes) the distributed file DISTREGION to use the system partition algorithm. A dash (-) will be used as the delimiter between the part number and the record ID:

```
create-distrib -pSYSTEM,- DISTREGION
```





# User-defined Partition Algorithm

The user-defined method provides the greatest flexibility when the need to determine which **part file** a record belongs is not based on an integer value (although it could be used for that purpose as well). The user-defined method is implemented by writing a jBC subroutine which determines the part number, and then setting the distributed file to use the subroutine as the partition algorithm. As an example, a distributed file called DISTCUST has 5 part files and the first character of each ID determines which part file the record belongs.

We will use the following jBC subroutine as the partition algorithm:

```
SUBROUTINE DistCustSub (Reserved, Key, PartNo)
    EQU Otherwise TO 1
    * Extract the first character from the Key
    FirstChar = Key[1,1]
    * Now determine the PartNo based on FirstChar
    BEGIN CASE
        CASE FirstChar = "N"; * North
            PartNo = 1
        CASE FirstChar = "E"; * East
            PartNo = 2
        CASE FirstChar = "W"; * West
            PartNo = 3
        CASE FirstChar = "S"; * South
            PartNo = 4
        CASE Otherwise; * Invalid condition; isolate for later review
            PartNo = 99
    END CASE
RETURN
```

Compile and catalog the subroutine. Ensure that the subroutine is accessible via the [JBCOBJECTLIST](jbcobjectlist) environment variable.

The subroutine is called each time a record is read from or written to the DISTCUST distributed file. The subroutine must support 3 arguments:


| Argument<br> | Description<br> |
| --- | --- |
| Reserved<br> | This parameter is reserved for future enhancements and should not be altered within the context of the subroutine.<br> |
| Key<br> | This is the record ID. It must be constructed in the application program prior to READing or WRITEing the record from/to the distributed file. Do not alter this argument, use it only as a source.<br> |
| PartNo<br> | This must be assigned by the subroutine and must return a valid part number.<br> |




It can be noted from the example that the part numbers consist of 1, 2, 3, 4 and 99. This illustrates an important feature. It is not a requirement that the part numbers be sequential or continuous. This could be used to allow additional part files to be added to the distributed file collection without the necessity of renumbering.

Take special care when writing this subroutine to account for all possibilities*.* If for any reason the PartNo cannot be determined, either a READ\_ERROR or WRITE\_ERROR will be noticed at the point of failure. Here is one such example where there are 11 part files. The part number is determined based on the last character of the key, the last character is assumed to be numeric but, if it's not, it will be placed in the 11<sup>th</sup> part file:



```
SUBROUTINE distsub(reserved, key, partno)
    lastchar = key[-1,1]
        IF NUM(lastchar) THEN
            partno = lastchar
            IF partno = 0 THEN partno = 10
        END ELSE
            partno = 11
        END
RETURN
```



Can you spot the error?

The fatal flaw is if the subroutine ever encounters an item-id of 'null'. A null item-id is considered numeric, hence **partno** will be set to 'null'. A better way to code this would be:

```
SUBROUTINE distsub(reserved, key, partno)
    lastchar = key[-1,1]
    IF lastchar >= 0 AND lastchar <= 9 THEN
        partno = lastchar
        IF partno = 0 THEN partno = 10
    END ELSE
        partno = 11
    END
RETURN
```

This subroutine takes the 'explicit' approach and does not make assumptions about what form the data will be in.

To set (or change) the distributed file to use the user-defined partition algorithm, the [create-distrib command](289128-create-distrib-command) may be used. For example, to set the DISTCUST distributed file to use the DistCustSub subroutine:

```
create-distrib -pUSER,DistCustSub DISTCUST
```

When compared to the system partition algorithm, the user-defined partition method incurs a small performance penalty when calling the jBC subroutine. The exact cost of this is highly dependent on how easily the part number is resolved within the subroutine.



Back to [DISTRIBUTED FILES](289126-distributed-files).
