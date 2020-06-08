# CREATE-FILE  

<PageHeader />

Once you have a configured [jEDIdrivers.ini](./../jedidrivers/README.md) and have created a CSV you can start creating files using the jEDIDK. The syntax for creating a file is as follows:

```
CREATE-FILE {DATA} filename TYPE=jEDIDK_type qualifiers
```

Where

**filename**  is the name of the file as known to jBASE  
**jEDIDK_type**   is one of the following: ODBC, OLESQL, OCIORA, PLSORA, DB2EXP  
**qualifiers** is one or more of the following:  

- CSV=csvname (default = tablename.csv)
- TABLE=tablename (default=filename)
- EXISTING=YES|NO (default=NO): use YES if working with an existing table in the RDBMS.  

Consequently, a DELETE-FILE will not affect the table.

## Examples  

```
CREATE-FILE MY.JBASE.FILE TYPE=OLESQL TABLE=MYTBL CSV=MYCSV
CREATE-FILE CUSTOMER TYPE=OCIORA
CREATE-FILE QCUSTOMER TYPE=OCIORA CSV=CUSTOMER EXISTING=YES TABLE=CUSTOMER
```

If you do not specify DATA then a DICTionary file will be created as a j4 hashed file.

Back to [jEDIJDK](./../README.md)

<PageFooter />
