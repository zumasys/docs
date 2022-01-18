# JBSE-5669

<PageHeader />

## Description

Incorrect index handling with group extractions

## Previous Release Behavior

1. Create the file RB.TESTIT:

```text
jsh ISLTEST ~ -->CREATE-FILE RB.TESTIT
[ 417 ] File RB.TESTIT]D created , type = JD
[ 417 ] File RB.TESTIT created , type = JD
```

2. Then add two records to the file:

```text
jsh ISLTEST ~ -->ED RB.TESTIT 1:100 1:200
New record
1:100
TOP
.I
001+100
002+
.FI
Record '1:100' written to file 'RB.TESTIT'
New record
1:200
TOP
.I
001+200
002+
.FI
Record '1:200' written to file 'RB.TESTIT'
```

3. Create a dictionary item:

```text
jsh ISLTEST ~ -->ED DICT RB.TESTIT IPNO
IPNO
001 A
002 0
003 IPNO
004
005
006
007
008 G1:1
009 R
010 10

jsh ISLTEST ~ -->LIST RB.TESTIT IPNO
RB.TESTIT... IPNO......
1:100 100
1:200 200
```

4. Then create an index for IPNO:

```text
jsh ISLTEST ~ -->CREATE-INDEX -n RB.TESTIT IPNO
Notice: Command converted to 'CREATE-INDEX -n RB.TESTIT IPNO BY-AR
OCONV(0,\G1:1\)'
Index definition 'IPNO' created successfully
Building index records in file '/whstorage/wms/TEST/DD/RB.TESTIT' ...
```

5. Install some tracing:

```text
jsh ISLTEST ~ -->sh
sh-4.2$ export JQL_TRACE_DEBUG=1
sh-4.2$ export JDIAG=TRACE=INDEX
```

6. Run an index select:

```text
jsh ISLTEST ~ -->SELECT RB.TESTIT WITH IPNO = "100"
AddAttrDefn ID IPNO A^0^IPNO^^^^^G1:1^R^10
jQLIndexCollection::LocateIndex IPNO (0)
jQLIndex::LocateIndex IPNO (0)
jQLIndexSegment::LocateIndex IPNO (0)
jQLIndexSubSegment::LocateIndex IPNO
(0) == (0)
>>>>jQLIndexSubSegment::LocateIndex adding [IPNO] ...
[IPNO]
Resorting to full file scan

1 Records selected
```

Where the index was based on an extraction (G1:1), jQL always resorted to a full file scan.

## Current Release Behavior

The existing index is now accepted:

```text
jsh Citadel ~ -->SELECT RB.TESTIT WITH IPNO = "100"
INDEX: AddAttrDefn ID IPNO S^0^IPNo^^^^^G1:1^R^10
INDEX:  jQLIndexCollection::LocateIndex IPNO (0)
INDEX:          jQLIndex::LocateIndex IPNO (0)
INDEX:                  jQLIndexSegment::LocateIndex IPNO (0)
INDEX:                          jQLIndexSubSegment::LocateIndex IPNO (0) == (0)
INDEX:  >>>>jQLIndexSubSegment::LocateIndex adding [IPNO] ... [IPNO]
INDEX: -        Index name being analyzed [IPNO] for attr [0] locale [en_AU] {[ OCONV(0,"G1:1")] [ OCONV(0,\G1:1\)]}
INDEX: Merging Value::  Time taken to to get coverage: 0m0.00s
INDEX: Merging Value::  Parent node: 1 List Count: 1 Index Count used: 1
INDEX: -        Index name being analyzed [IPNO] for attr [0] locale [en_AU] {[ OCONV(0,"G1:1")] [ OCONV(0,\G1:1\)]}
INDEX: Merging Value::  Time taken to retrieve select list: 0m0.00s
INDEX: Merging Value::  Parent node: 1 List Count: 1 Index Count used: 1
INDEX: Index accepted

 1 Records selected

>
```

Back to [5.8.5 Release Notes](./../README.md)

<PageFooter />
