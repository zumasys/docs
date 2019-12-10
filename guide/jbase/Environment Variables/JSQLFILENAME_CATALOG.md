# JSQLFILENAME_CATALOG

**Created At:** 3/12/2019 5:18:34 PM  
**Updated At:** 3/12/2019 5:25:01 PM  


This environment variable is used to designate the file used by SQL queries to a jBASE database to expose regular jBASE files/dictionaries as tables/columns for either local or remote (ODBC) SQL queries.

The file can be a jBASE hashed file or a directory, as long as it's location is in your [JEDIFILEPATH](/41717-environment-variables/jedifilepath).

e.g. Windows

```
CREATE-FILE c:\jbase\SQLCATALOG 1 11
set JSQLFILENAME_CATALOG=c:\jbase\SQLCATALOG
```

e.g. non-Windows

```
CREATE-FILE /dbms/SQLCATALOG 1 11
set JSQLFILENAME_CATALOG=/dbms/SQLCATALOG
```

See [SQLCATMAN](/46963-utilities/sqlcatman).
