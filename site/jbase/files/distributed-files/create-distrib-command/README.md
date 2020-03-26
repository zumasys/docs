# CREATE-DISTRIB Command

**Created At:** 11/28/2017 1:55:37 PM  
**Updated At:** 4/24/2019 4:21:21 PM  
**Original Doc:** [289128-create-distrib-command](https://docs.jbase.com/44203-distributed-files/289128-create-distrib-command)  
**Original ID:** 289128  
**Internal:** No  

**Tags:**
<badge text='create-file distributed' vertical='middle' />
<badge text='create-file distrib' vertical='middle' />

The CREATE-DISTRIB command is used to:

1. Maintain the parts of a distributed file  
2. Set or change the partition algorithm  
3. List or verify the component part files and the partition algorithm  

```
create-distrib <PartNumber> <Delimiter> <RecordID>
```

Where:

- **PartNumber** is an integer which determines the **part file** to which the record is written.
- **Delimiter** can be any character except a system delimiter (AM, VM, SVM). The default delimiter is a dash (-).
- **RecordID** is the actual item-ID of the record. In a ‘hashed’ file type, this determines the group to which the record is written.

The CREATE-DISTRIB command accepts a variety of options which determines its function as the following table illustrates:

| Function | Syntax | Alternate Syntax |
| --- | --- | --- |
| Add a Part File | CREATE-DISTRIB -a FileName PartNo PartFile | CREATE-DISTRIB FileName PartNo PartFile |
| Delete a Part File | CREATE-DISTRIB -d FileName PartNo | [DELETE-DISTRIB](./../delete-distrib-command) Filename PartNo |
| List all Part Files | CREATE-DISTRIB -l FileName | [LIST-DISTRIB](./../list-distrib-command) FileName |
| Verify the existence of the Part Files | CREATE-DISTRIB -v FileName | [VERIFY-DISTRIB](./../verify-distrib-command) FileName |
| Set (or change) to the System Partition Algorithm | CREATE-DISTRIB -pSYSTEM{,Delim} FileName |   |
| Set (or change) to a User-defined Partition Algorithm | CREATE-DISTRIB -pUSER,Subroutine FileName |   |

## Syntax Elements

| Element | Description |
| --- | --- |
| FileName | The name of the Distributed File |
| PartNo | An integer from 1 through 254 inclusive which associates the Part File to the Distributed File |
| PartFile | The name of the Part file |
| Delim | A single character used to separate the Part Number from the record ID |
| Subroutine | The name of the User-defined subroutine |

Other options are:

| <!----> | <!----> |
| --- | --- |
| -f | Force Mode |
| -V | Verbose |

### Examples of use may be

```
CREATE-DISTRIB -a INVOICES 24 INVOICES.MAR1999
```

Attaches the file INVOICES.MAR1999 as the 24th part file to the INVOICES distributed file.

```
CREATE-DISTRIB INVOICES 24 INVOICES.MAR1999
```

Same as the previous example. Note that the -a is assumed in the absence of any options.

```
CREATE-DISTRIB -pSYSTEM,| DISTCUST
```

Sets (or changes) the partition method to the SYSTEM partition algorithm for the DISTCUST distributed file. A vertical bar "|" will be used as the delimiter to separate the part number from the record ID.

```
CREATE-DISTRIB -pUSER,DistSub DISTCUST
```

Sets (or changes) the DISTCUST distributed file to use the user-defined subroutine, DistSub, as the partition algorithm.

```
CREATE-DISTRIB -d MEDICAL.CLAIMS 149
```

Detaches (disassociates) the 149th part file from the MEDICAL.CLAIMS distributed file.

```
CREATE-DISTRIB -l CONVENTIONS
```

Lists the component part files of the CONVENTIONS distributed file. Also lists the partition algorithm.

```
CREATE-DISTRIB -v CONVENTIONS
```

Verifies the existence of the component part files belonging to the CONVENTIONS distributed file. Also confirms the partition method. If the distributed file uses the user-defined partition method this also verifies that the subroutine can be executed.

Back to [Distributed Files](./../README.md)
