# jQL Tracing/Debugging

<PageHeader />

## Overview

jBASE offers a TRACE/Debugging option that will produce information on how the query was processed.  This is a little like the EXPLAIN feature in other databases.

## Usage

Before launching jsh

```
# export JDIAG=TRACE=INDEX
# export JQL_TRACE_DEBUG=9
# jsh
# LOGTO JBASEADM
jsh JBASEADM --> MAKE-DEMO-FILE 10000 DEMO.FILE JD
jsh JBASEADM --> CREATE-INDEX DEMO.FILE STATE
jsh JBASEADM --> COUNT DEMO.FILE WITH STATE = "CA" AND WITH LASTNAME = "SMITH"

AddAttrDefn ID STATE A^6^State^^^^^^L^3
        jQLIndexCollection::LocateIndex STATE (6)
                jQLIndex::LocateIndex STATE (6)
                        jQLIndexSegment::LocateIndex STATE (6)
                                jQLIndexSubSegment::LocateIndex STATE (6) == (6)
        >>>>jQLIndexSubSegment::LocateIndex adding [STATE] ... [STATE]
AddAttrDefn ID LASTNAME A^2^Last Name^^^^^^L^20
        jQLIndexCollection::LocateIndex LASTNAME (2)
                jQLIndex::LocateIndex LASTNAME (2)
                        jQLIndexSegment::LocateIndex LASTNAME (2)
                                jQLIndexSubSegment::LocateIndex LASTNAME (6) == (2)
                                jQLIndexSubSegment::LocateIndex Not this att (6) != (2)
Merging Value::  Time taken to to get coverage: 0m0.00s
Merging Value::  Parent node: 3 List Count: 856 Index Count used: 1
Merging AND:: Left coverage returned 856 rows
Merging AND:: Right coverage returned -1 rows
Merging Value::  Time taken to retrieve select list: 0m0.00s
Merging Value::  Parent node: 3 List Count: 856 Index Count used: 1
Index accepted

 26 Records counted
 ```

 On windows you would replace the export statement with SET.  You can do this directly from jsh but you will need to then type jsh to launch a new shell to inherit those new settings.

The top logs are showing how jBASE is attempting to match up available indexes to your current query.  In this example it finds the index STATE with attribute 6 matches up to a index.  Last Name does not.

The next part of the log shows how the indexes are used.  You can see here that the index for STATE was used and returned 856 rows in 0.00s.  It then moved on and did a scan search for LASTNAME and found the 26 items.  

Back to [jBASE Query Language (jQL)](../../jql/README.md)

<PageFooter />
