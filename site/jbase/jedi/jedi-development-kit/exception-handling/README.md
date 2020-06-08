# Exception Handling

<PageHeader />

One of the key aspects of the multi-value database is its dynamic storage and flexibility. You can write any record format you like. In the RDBMS world, table columns are distinctly defined with types and lengths. Failure to comply with these facets results in an error. In an effort to ease migration of a jBASE application to an RDBMS there is an exception handler which can be turned on using the TrapErrs setting in the jEDIdrivers.ini. Before you can use this you must create an EXCEPTIONS table in the target database. A script is provided for the relevant jEDIDK driver type, but essentially the table should be created thus:  

```
CREATE TABLE EXCEPTIONS (
        FILENAME varchar (50) NOT NULL ,
        ITEMID varchar (100) NOT NULL ,
        UPDDATE datetime NOT NULL ,
        REC [text/long/clob] NULL ,
        REASON varchar (500) NOT NULL ,
        PROG varchar (50) NOT NULL ,
        PRIMARY KEY  (FILENAME, ITEMID)
)
```

The REC type is dependent on the RDBMS but is essentially a text field ideally > 32K (to handle large records).
When a write is attempted to the jEDI file and it fails due to a mismatch in data type, length or attribute to column alignment the record is inserted/updated into the REC column and the other fields in the EXCEPTIONS table for that record are populated accordingly. If the record previously existed in the intended table(s) a delete is performed after the EXCEPTIONS row is inserted.  

A subsequent read from the jEDI file will first attempt to find the record in the designated table. If not found it will look in the EXCEPTIONS table and the process will continue. If the record is subsequently written and is successful in being inserted into the intended table(s) the corresponding EXCEPTIONS row is deleted.  

As you can imagine this adds an overhead to the I/O and specifically if you use TrapErrs the jQL (query) to SQL translation is disabled

Back to [jEDIJDK](./../README.md)

<PageFooter />
