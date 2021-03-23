# JSQLFILENAME_CATALOG

<PageHeader />

This environment variable is used to designate the file used by SQL queries to a jBASE database to expose regular jBASE files/dictionaries as tables/columns for either local or remote (ODBC) SQL queries.

The file can be a jBASE hashed file or a directory, as long as it's location is in your [JEDIFILEPATH](./../jedifilepath).

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

See [SQLCATMAN](./../../tools-and-utilities/sqlcatman/README.md)

Back to [Environment Variables](./../README.md)

<PageFooter />
