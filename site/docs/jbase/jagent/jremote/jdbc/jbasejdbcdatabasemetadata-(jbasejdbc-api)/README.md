# JBaseJDBCDatabaseMetaData (jbasejdbc API)

**Created At:** 9/25/2017 10:54:56 AM  
**Updated At:** 8/17/2018 2:25:53 AM  
**Original Doc:** [com_jbase_jdbc_jbasejdbcdatabasemetadata](https://docs.jbase.com/39228-jdbc/com_jbase_jdbc_jbasejdbcdatabasemetadata)  
**Original ID:** 277919  
**Internal:** Yes  

&amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;lt;div&amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;gt;JavaScript is disabled on your browser.&amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;lt;/div&amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;gt;


# Class JBaseJDBCDatabaseMetaData

**All Implemented Interfaces:**
DatabaseMetaData, Wrapper
```
public class JBaseJDBCDatabaseMetaData
extends Object
implements DatabaseMetaData
```

This class implements the java.sql.DatabaseMetaData interface which defines a set of methods to retrieve meta data information from the database server.



# Field Summary

## 

## Fields inherited from interface java.sql.DatabaseMetaData
`attributeNoNulls, attributeNullable, attributeNullableUnknown, bestRowNotPseudo, bestRowPseudo, bestRowSession, bestRowTemporary, bestRowTransaction, bestRowUnknown, columnNoNulls, columnNullable, columnNullableUnknown, functionColumnIn, functionColumnInOut, functionColumnOut, functionColumnResult, functionColumnUnknown, functionNoNulls, functionNoTable, functionNullable, functionNullableUnknown, functionResultUnknown, functionReturn, functionReturnsTable, importedKeyCascade, importedKeyInitiallyDeferred, importedKeyInitiallyImmediate, importedKeyNoAction, importedKeyNotDeferrable, importedKeyRestrict, importedKeySetDefault, importedKeySetNull, procedureColumnIn, procedureColumnInOut, procedureColumnOut, procedureColumnResult, procedureColumnReturn, procedureColumnUnknown, procedureNoNulls, procedureNoResult, procedureNullable, procedureNullableUnknown, procedureResultUnknown, procedureReturnsResult, sqlStateSQL, sqlStateSQL99, sqlStateXOpen, tableIndexClustered, tableIndexHashed, tableIndexOther, tableIndexStatistic, typeNoNulls, typeNullable, typeNullableUnknown, typePredBasic, typePredChar, typePredNone, typeSearchable, versionColumnNotPseudo, versionColumnPseudo, versionColumnUnknown`




# 


# Constructor Summary


| Constructor<br> |  Description<br> |
| --- | --- |
| JBaseJDBCDatabaseMetaData([JBaseJDBCSocketConnection](./../jbasejdbcsocketconnection-%28jbasejdbc-api%29 "class in com.jbase.jdbc") connection)<br> | <br>Constructor.<br> |






# Method Summary


| Modifier and Type<br> | Method<br> |  Description<br> |
| --- | --- | --- |
| boolean<br> | allProceduresAreCallable()<br><br> | <br> |
| boolean<br> | allTablesAreSelectable()<br><br> | <br> |
| boolean<br> | dataDefinitionCausesTransactionCommit()<br><br> | <br> |
| boolean<br> | dataDefinitionIgnoredInTransactions()<br><br> | <br> |
| boolean<br> | deletesAreDetected(int type)<br><br> | <br> |
| boolean<br> | doesMaxRowSizeIncludeBlobs()<br><br> | <br> |
| [ResultSet](http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true "class or interface in java.sql")<br> | getAttributes([String](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/String.html?is-external=true "class or interface in java.lang") catalog, [String](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/String.html?is-external=true "class or interface in java.lang") schemaPattern, [String](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/String.html?is-external=true "class or interface in java.lang") typeNamePattern, [String](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/String.html?is-external=true "class or interface in java.lang") attributeNamePattern)<br><br> | <br>This method is currently not supported<br> |
| [ResultSet](http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true "class or interface in java.sql")<br> | getBestRowIdentifier([String](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/String.html?is-external=true "class or interface in java.lang") catalog, [String](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/String.html?is-external=true "class or interface in java.lang") schema, [String](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/String.html?is-external=true "class or interface in java.lang") table, int scope, boolean nullable)<br><br> | <br> |
| [ResultSet](http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true "class or interface in java.sql")<br> | getCatalogs()<br><br> | <br> |
| [String](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/String.html?is-external=true "class or interface in java.lang")<br> | getCatalogSeparator()<br><br> | <br> |
| [String](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/String.html?is-external=true "class or interface in java.lang")<br> | getCatalogTerm()<br><br> | <br> |
| [ResultSet](http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true "class or interface in java.sql")<br> | getColumnPrivileges([String](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/String.html?is-external=true "class or interface in java.lang") catalog, [String](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/String.html?is-external=true "class or interface in java.lang") schema, [String](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/String.html?is-external=true "class or interface in java.lang") table, [String](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/String.html?is-external=true "class or interface in java.lang") columnNamePattern)<br><br> | <br> |
| [ResultSet](http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true "class or interface in java.sql")<br> | getColumns([String](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/String.html?is-external=true "class or interface in java.lang") catalog, [String](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/String.html?is-external=true "class or interface in java.lang") schemaPattern, [String](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/String.html?is-external=true "class or interface in java.lang") tableNamePattern, [String](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/String.html?is-external=true "class or interface in java.lang") columnNamePattern)<br><br> | <br> |
| [Connection](http://java.sun.com/j2se/1.5.0/docs/api/java/sql/Connection.html?is-external=true "class or interface in java.sql")<br> | getConnection()<br> | <br> |
| [ResultSet](http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true "class or interface in java.sql")<br> | getCrossReference([String](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/String.html?is-external=true "class or interface in java.lang") primaryCatalog, [String](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/String.html?is-external=true "class or interface in java.lang") primarySchema, [String](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/String.html?is-external=true "class or interface in java.lang") primaryTable, [String](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/String.html?is-external=true "class or interface in java.lang") foreignCatalog, [String](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/String.html?is-external=true "class or interface in java.lang") foreignSchema, [String](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/String.html?is-external=true "class or interface in java.lang") foreignTable)<br><br> | <br>Foreign keys are not used as we only have 1 primary key per table.<br> |
| int<br> | getDatabaseMajorVersion()<br><br> | <br> |
| int<br> | getDatabaseMinorVersion()<br><br> | <br> |
| [String](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/String.html?is-external=true "class or interface in java.lang")<br> | getDatabaseProductName()<br><br> | <br> |
| [String](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/String.html?is-external=true "class or interface in java.lang")<br> | getDatabaseProductVersion()<br><br> | <br> |
| int<br> | getDefaultTransactionIsolation()<br><br> | <br> |
| [String](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/String.html?is-external=true "class or interface in java.lang")<br> | getDriverBuildDate()<br><br> | <br>Obtain the build-date of the JDBC driver<br> |
| int<br> | getDriverMajorVersion()<br><br> | <br> |
| int<br> | getDriverMinorVersion()<br><br> | <br> |
| [String](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/String.html?is-external=true "class or interface in java.lang")<br> | getDriverName()<br> | <br>Retrieves the name of this JDBC driver.<br> |
| [String](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/String.html?is-external=true "class or interface in java.lang")<br> | getDriverVendor()<br> | <br>Obtain the vendor of the JDBC driver.<br> |
| [String](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/String.html?is-external=true "class or interface in java.lang")<br> | getDriverVersion()<br> | <br>Retrieves the version number of this JDBC driver as a String.<br> |
| [ResultSet](http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true "class or interface in java.sql")<br> | getExportedKeys([String](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/String.html?is-external=true "class or interface in java.lang") catalog, [String](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/String.html?is-external=true "class or interface in java.lang") schema, [String](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/String.html?is-external=true "class or interface in java.lang") table)<br> | <br>Foreign keys not used as we only have 1 primary key per table.<br> |
| [String](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/String.html?is-external=true "class or interface in java.lang")<br> | getExtraNameCharacters()<br> | Retrieves all the "extra" characters that can be used in unquoted identifier names (those beyond a-z, A-Z, 0-9 and \_).<br> |
| [String](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/String.html?is-external=true "class or interface in java.lang")<br> | getIdentifierQuoteString()<br> | <br> |
| [ResultSet](http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true "class or interface in java.sql")<br> | getImportedKeys([String](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/String.html?is-external=true "class or interface in java.lang") catalog, [String](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/String.html?is-external=true "class or interface in java.lang") schema, [String](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/String.html?is-external=true "class or interface in java.lang") table)<br> | <br>Foreign keys not used as we only have 1 primary key per table.<br> |
| [ResultSet](http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true "class or interface in java.sql")<br> | getIndexInfo([String](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/String.html?is-external=true "class or interface in java.lang") catalog, [String](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/String.html?is-external=true "class or interface in java.lang") schema, [String](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/String.html?is-external=true "class or interface in java.lang") table, boolean unique, boolean approximate)<br><br> | <br> |
| int<br> | getJavaSqlType([String](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/String.html?is-external=true "class or interface in java.lang") dataType)<br><br> | <br> |
| int<br> | getJDBCMajorVersion()<br><br> | <br> |
| int<br> | getJDBCMinorVersion()<br><br> | <br> |
| int<br> | getMaxBinaryLiteralLength()<br><br> | <br> |
| int<br> | getMaxCatalogNameLength()<br><br> | <br> |
| int<br> | getMaxCharLiteralLength()<br><br> | <br> |
| int<br> | getMaxColumnNameLength()<br><br> | <br> |
| int<br> | getMaxColumnsInGroupBy()<br><br> | <br> |
| int<br> | getMaxColumnsInIndex()<br><br> | <br> |
| int<br> | getMaxColumnsInOrderBy()<br><br> | <br> |
| int<br> | getMaxColumnsInSelect()<br><br> | <br> |
| int<br> | getMaxColumnsInTable()<br><br> | <br> |
| int<br> | getMaxConnections()<br><br> | <br> |
| int<br> | getMaxCursorNameLength()<br><br> | <br> |
| int<br> | getMaxIndexLength()<br><br> | <br> |
| int<br> | getMaxProcedureNameLength()<br><br> | <br> |
| int<br> | getMaxRowSize()<br><br> | <br> |
| int<br> | getMaxSchemaNameLength()<br><br> | <br> |
| int<br> | getMaxStatementLength()<br><br> | <br> |
| int<br> | getMaxStatements()<br><br> | <br> |
| int<br> | getMaxTableNameLength()<br><br> | <br> |
| int<br> | getMaxTablesInSelect()<br><br> | <br> |
| int<br> | getMaxUserNameLength()<br><br> | <br> |
| [String](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/String.html?is-external=true "class or interface in java.lang")<br> | getNumericFunctions()<br> | <br>Retrieves a comma-separated list of math functions available with this database.<br> |
| [ResultSet](http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true "class or interface in java.sql")<br> | getPrimaryKeys([String](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/String.html?is-external=true "class or interface in java.lang") catalog, [String](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/String.html?is-external=true "class or interface in java.lang") schema, [String](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/String.html?is-external=true "class or interface in java.lang") table)<br><br> | <br> |
| [ResultSet](http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true "class or interface in java.sql")<br> | getProcedureColumns([String](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/String.html?is-external=true "class or interface in java.lang") catalog, [String](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/String.html?is-external=true "class or interface in java.lang") schemaPattern,<br>[String](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/String.html?is-external=true "class or interface in java.lang") procedureNamePattern, [String](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/String.html?is-external=true "class or interface in java.lang") columnNamePattern)<br><br> | <br> |
| [ResultSet](http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true "class or interface in java.sql")<br> | getProcedures([String](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/String.html?is-external=true "class or interface in java.lang") catalog, [String](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/String.html?is-external=true "class or interface in java.lang") schemaPattern, [String](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/String.html?is-external=true "class or interface in java.lang") procedureNamePattern)<br><br> | <br> |
| [String](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/String.html?is-external=true "class or interface in java.lang")<br> | getProcedureTerm()<br><br> | <br> |
| int<br> | getResultSetHoldability()<br><br> | <br> |
| [ResultSet](http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true "class or interface in java.sql")<br> | getSchemas()<br><br> | <br> |
| [String](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/String.html?is-external=true "class or interface in java.lang")<br> | getSchemaTerm()<br><br> | <br> |
| [String](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/String.html?is-external=true "class or interface in java.lang")<br> | getSearchStringEscape()<br> | <br> |
| [String](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/String.html?is-external=true "class or interface in java.lang")<br> | getSQLKeywords()<br> | <br>Gets a comma-separated list of all a database's SQL keywords that are NOT also SQL92 keywords.<br> |
| int<br> | getSQLStateType()<br> | <br> |
| [String](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/String.html?is-external=true "class or interface in java.lang")<br> | getStringFunctions()<br> | <br>Retrieves a comma-separated list of string functions available with this database.<br> |
| [ResultSet](http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true "class or interface in java.sql")<br> | getSuperTables([String](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/String.html?is-external=true "class or interface in java.lang") catalog, [String](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/String.html?is-external=true "class or interface in java.lang") schemaPattern, [String](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/String.html?is-external=true "class or interface in java.lang") tableNamePattern)<br><br> | <br>This method is currently not supported<br> |
| [ResultSet](http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true "class or interface in java.sql")<br> | getSuperTypes([String](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/String.html?is-external=true "class or interface in java.lang") catalog, [String](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/String.html?is-external=true "class or interface in java.lang") schemaPattern, [String](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/String.html?is-external=true "class or interface in java.lang") typeNamePattern)<br> | <br>This method is currently not supported<br> |
| [String](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/String.html?is-external=true "class or interface in java.lang")<br> | getSystemFunctions()<br> | <br>NOT IMPLEMENTED YET Retrieves a comma-separated list of system functions available with this database.<br> |
| [ResultSet](http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true "class or interface in java.sql")<br> | getTablePrivileges([String](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/String.html?is-external=true "class or interface in java.lang") catalog, [String](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/String.html?is-external=true "class or interface in java.lang") schemaPattern, [String](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/String.html?is-external=true "class or interface in java.lang") tableNamePattern)<br><br> | <br> |
| [ResultSet](http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true "class or interface in java.sql")<br> | getTables([String](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/String.html?is-external=true "class or interface in java.lang") catalog, [String](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/String.html?is-external=true "class or interface in java.lang") schemaPattern, [String](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/String.html?is-external=true "class or interface in java.lang") tableNamePattern, [String](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/String.html?is-external=true "class or interface in java.lang")[] types)<br><br> | <br> |
| [ResultSet](http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true "class or interface in java.sql")<br> | getTableTypes()<br> | <br> |
| [String](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/String.html?is-external=true "class or interface in java.lang")<br> | getTimeDateFunctions()<br> | <br>NOT IMPLEMENTED YET Retrieves a comma-separated list of the time and date functions available with this database.<br> |
| [ResultSet](http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true "class or interface in java.sql")<br> | getTypeInfo()<br><br> | <br> |
| [ResultSet](http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true "class or interface in java.sql")<br> | getUDTs([String](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/String.html?is-external=true "class or interface in java.lang") catalog, [String](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/String.html?is-external=true "class or interface in java.lang") schemaPattern, [String](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/String.html?is-external=true "class or interface in java.lang") typeNamePattern, int[] types)<br><br> | <br>This method is currently not supported.<br> |
| [String](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/String.html?is-external=true "class or interface in java.lang")<br> | getURL()<br><br> | <br> |
| [String](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/String.html?is-external=true "class or interface in java.lang")<br> | getUserName()<br><br> | <br> |
| [ResultSet](http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true "class or interface in java.sql")<br> | getVersionColumns([String](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/String.html?is-external=true "class or interface in java.lang") catalog, [String](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/String.html?is-external=true "class or interface in java.lang") schema, [String](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/String.html?is-external=true "class or interface in java.lang") table)<br><br> | <br> |
| boolean<br> | insertsAreDetected(int type)<br><br> | <br> |
| boolean<br> | isCatalogAtStart()<br><br> | <br> |
| boolean<br> | isReadOnly()<br><br> | <br> |
| boolean<br> | locatorsUpdateCopy()<br><br> | <br> |
| boolean<br> | nullPlusNonNullIsNull()<br><br> | <br> |
| boolean<br> | nullsAreSortedAtEnd()<br><br> | <br> |
| boolean<br> | nullsAreSortedAtStart()<br><br> | <br> |
| boolean<br> | nullsAreSortedHigh()<br><br> | <br> |
| boolean<br> | nullsAreSortedLow()<br><br> | <br> |
| boolean<br> | othersDeletesAreVisible(int type)<br><br> | <br> |
| boolean<br> | othersInsertsAreVisible(int type)<br><br> | <br> |
| boolean<br> | othersUpdatesAreVisible(int type)<br><br> | <br> |
| boolean<br> | ownDeletesAreVisible(int type)<br><br> | <br> |
| boolean<br> | ownInsertsAreVisible(int type)<br><br> | <br> |
| boolean<br> | ownUpdatesAreVisible(int type)<br><br> | <br> |
| void<br> | setDbmdCatalog([ResultSet](http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true "class or interface in java.sql") rs, int numEntries)<br> | Sets the database meta data catalog to be used.<br> |
| boolean<br> | storesLowerCaseIdentifiers()<br><br> | <br> |
| boolean<br> | storesLowerCaseQuotedIdentifiers()<br><br> | <br> |
| boolean<br> | storesMixedCaseIdentifiers()<br><br> | <br> |
| boolean<br> | storesMixedCaseQuotedIdentifiers()<br><br> | <br> |
| boolean<br> | storesUpperCaseIdentifiers()<br><br> | <br> |
| boolean<br> | storesUpperCaseQuotedIdentifiers()<br><br> | <br> |
| boolean<br> | supportsAlterTableWithAddColumn()<br><br> | <br> |
| boolean<br> | supportsAlterTableWithDropColumn()<br><br> | <br> |
| boolean<br> | supportsANSI92EntryLevelSQL()<br><br> | <br> |
| boolean<br> | supportsANSI92FullSQL()<br><br> | <br> |
| boolean<br> | supportsANSI92IntermediateSQL()<br><br> | <br> |
| boolean<br> | supportsBatchUpdates()<br><br> | <br> |
| boolean<br> | supportsCatalogsInDataManipulation()<br><br> | <br> |
| boolean<br> | supportsCatalogsInIndexDefinitions()<br><br> | <br> |
| boolean<br> | supportsCatalogsInPrivilegeDefinitions()<br><br> | <br> |
| boolean<br> | supportsCatalogsInProcedureCalls()<br><br> | <br> |
| boolean<br> | supportsCatalogsInTableDefinitions()<br><br> | <br> |
| boolean<br> | supportsColumnAliasing()<br> | <br>Retrieves whether this database supports column aliasing.<br> |
| boolean<br> | supportsConvert()<br><br> | <br> |
| boolean<br> | supportsConvert(int fromType, int toType)<br><br> | <br> |
| boolean<br> | supportsCoreSQLGrammar()<br><br> | <br> |
| boolean<br> | supportsCorrelatedSubqueries()<br><br> | <br> |
| boolean<br> | supportsDataDefinitionAndDataManipulationTransactions()<br><br> | <br> |
| boolean<br> | supportsDataManipulationTransactionsOnly()<br><br> | <br> |
| boolean<br> | supportsDifferentTableCorrelationNames()<br><br> | <br> |
| boolean<br> | supportsExpressionsInOrderBy()<br><br> | <br> |
| boolean<br> | supportsExtendedSQLGrammar()<br><br> | <br> |
| boolean<br> | supportsFullOuterJoins()<br><br> | <br> |
| boolean<br> | supportsGetGeneratedKeys()<br><br> | <br> |
| boolean<br> | supportsGroupBy()<br><br> | <br> |
| boolean<br> | supportsGroupByBeyondSelect()<br><br> | <br> |
| boolean<br> | supportsGroupByUnrelated()<br><br> | <br> |
| boolean<br> | supportsIntegrityEnhancementFacility()<br><br> | <br> |
| boolean<br> | supportsLikeEscapeClause()<br><br> | <br> |
| boolean<br> | supportsLimitedOuterJoins()<br><br> | <br> |
| boolean<br> | supportsMinimumSQLGrammar()<br><br> | <br> |
| boolean<br> | supportsMixedCaseIdentifiers()<br><br> | <br> |
| boolean<br> | supportsMixedCaseQuotedIdentifiers()<br><br> | <br> |
| boolean<br> | supportsMultipleOpenResults()<br><br> | <br> |
| boolean<br> | supportsMultipleResultSets()<br> | <br> |
| boolean<br> | supportsMultipleTransactions()<br> | <br>Retrieves whether this database allows having multiple transactions open at once (on different connections).<br> |
| boolean<br> | supportsNamedParameters()<br><br> | <br> |
| boolean<br> | supportsNonNullableColumns()<br><br> | <br> |
| boolean<br> | supportsOpenCursorsAcrossCommit()<br><br> | <br> |
| boolean<br> | supportsOpenCursorsAcrossRollback()<br><br> | <br> |
| boolean<br> | supportsOpenStatementsAcrossCommit()<br><br> | <br> |
| boolean<br> | supportsOpenStatementsAcrossRollback()<br><br> | <br> |
| boolean<br> | supportsOrderByUnrelated()<br><br> | <br> |
| boolean<br> | supportsOuterJoins()<br><br> | <br> |
| boolean<br> | supportsPositionedDelete()<br><br> | <br> |
| boolean<br> | supportsPositionedUpdate()<br><br> | <br> |
| boolean<br> | supportsResultSetConcurrency(int type, int concurrency)<br><br> | <br> |
| boolean<br> | supportsResultSetHoldability(int holdability)<br><br> | <br> |
| boolean<br> | supportsResultSetType(int type)<br><br> | <br> |
| boolean<br> | supportsSavepoints()<br><br> | <br> |
| boolean<br> | supportsSchemasInDataManipulation()<br><br> | <br> |
| boolean<br> | supportsSchemasInIndexDefinitions()<br><br> | <br> |
| boolean<br> | supportsSchemasInPrivilegeDefinitions()<br><br> | <br> |
| boolean<br> | supportsSchemasInProcedureCalls()<br><br> | <br> |
| boolean<br> | supportsSchemasInTableDefinitions()<br><br> | <br> |
| boolean<br> | supportsSelectForUpdate()<br><br> | <br> |
| boolean<br> | supportsStatementPooling()<br><br> | <br> |
| boolean<br> | supportsStoredProcedures()<br><br> | <br> |
| boolean<br> | supportsSubqueriesInComparisons()<br><br> | <br> |
| boolean<br> | supportsSubqueriesInExists()<br><br> | <br> |
| boolean<br> | supportsSubqueriesInIns()<br><br> | <br> |
| boolean<br> | supportsSubqueriesInQuantifieds()<br><br> | <br> |
| boolean<br> | supportsTableCorrelationNames()<br><br> | <br> |
| boolean<br> | supportsTransactionIsolationLevel(int level)<br><br> | <br> |
| boolean<br> | supportsTransactions()<br><br> | <br> |
| boolean<br> | supportsUnion()<br><br> | <br> |
| boolean<br> | supportsUnionAll()<br><br> | <br> |
| boolean<br> | updatesAreDetected(int type)<br><br> | <br> |
| boolean<br> | usesLocalFilePerTable()<br><br> | <br> |
| boolean<br> | usesLocalFiles()<br> | <br> |




### 


## Methods inherited from class java.lang.[Object](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/Object.html?is-external=true "class or interface in java.lang")
`clone, equals, finalize, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`


## 

## Methods inherited from interface java.sql.[DatabaseMetaData](http://java.sun.com/j2se/1.5.0/docs/api/java/sql/DatabaseMetaData.html?is-external=true "class or interface in java.sql")
`autoCommitFailureClosesAllResultSets, generatedKeyAlwaysReturned, getClientInfoProperties, getFunctionColumns, getFunctions, getMaxLogicalLobSize, getPseudoColumns, getRowIdLifetime, getSchemas, supportsRefCursors, supportsStoredFunctionsUsingCallSyntax`


## 

## Methods inherited from interface java.sql.[Wrapper](http://java.sun.com/j2se/1.5.0/docs/api/java/sql/Wrapper.html?is-external=true "class or interface in java.sql")
`isWrapperFor, unwrap`

# 


# Constructor Detail

#### **JBaseJDBCDatabaseMetaData**

```
public JBaseJDBCDatabaseMetaData(JBaseJDBCSocketConnection connection)
```

Constructor.
**Parameters:**`connection` - The connection used to retrieve the meta data






# Method Detail



#### **setDbmdCatalog**

```
public void setDbmdCatalog(ResultSet rs, int numEntries)
```

Sets the database meta data catalog to be used.
**Parameters:**`rs` - The dbmd catalog (as a ResultSet object)`numEntries` - number of dbmd catalog entries






#### **getDatabaseMajorVersion**

```
public int getDatabaseMajorVersion()
                            throws SQLException
```
**Specified by:**`getDatabaseMajorVersion` in interface `DatabaseMetaData`
**Throws:**`SQLException`




#### **getDatabaseMinorVersion**

```
public int getDatabaseMinorVersion()
                            throws SQLException
```
**Specified by:**`getDatabaseMinorVersion` in interface `DatabaseMetaData`
**Throws:**`SQLException`




#### **getDefaultTransactionIsolation**

```
public int getDefaultTransactionIsolation()
                                   throws SQLException
```
**Specified by:**`getDefaultTransactionIsolation` in interface `DatabaseMetaData`
**Throws:**`SQLException`




#### **getDriverMajorVersion**

```
public int getDriverMajorVersion()
```
**Specified by:**`getDriverMajorVersion` in interface `DatabaseMetaData`




#### **getDriverMinorVersion**

```
public int getDriverMinorVersion()
```
**Specified by:**`getDriverMinorVersion` in interface `DatabaseMetaData`




#### **getJDBCMajorVersion**

```
public int getJDBCMajorVersion()
                        throws SQLException
```
**Specified by:**`getJDBCMajorVersion` in interface `DatabaseMetaData`
**Throws:**`SQLException`




#### **getJDBCMinorVersion**

```
public int getJDBCMinorVersion()
                        throws SQLException
```
**Specified by:**`getJDBCMinorVersion` in interface `DatabaseMetaData`
**Throws:**`SQLException`




#### **getMaxBinaryLiteralLength**

```
public int getMaxBinaryLiteralLength()
                              throws SQLException
```
**Specified by:**`getMaxBinaryLiteralLength` in interface `DatabaseMetaData`
**Throws:**`SQLException`




#### **getMaxCatalogNameLength**

```
public int getMaxCatalogNameLength()
                            throws SQLException
```
**Specified by:**`getMaxCatalogNameLength` in interface `DatabaseMetaData`
**Throws:**`SQLException`




#### **getMaxCharLiteralLength**

```
public int getMaxCharLiteralLength()
                            throws SQLException
```
**Specified by:**`getMaxCharLiteralLength` in interface `DatabaseMetaData`
**Throws:**`SQLException`




#### **getMaxColumnNameLength**

```
public int getMaxColumnNameLength()
                           throws SQLException
```
**Specified by:**`getMaxColumnNameLength` in interface `DatabaseMetaData`
**Throws:**`SQLException`




#### **getMaxColumnsInGroupBy**

```
public int getMaxColumnsInGroupBy()
                           throws SQLException
```
**Specified by:**`getMaxColumnsInGroupBy` in interface `DatabaseMetaData`
**Throws:**`SQLException`




#### **getMaxColumnsInIndex**

```
public int getMaxColumnsInIndex()
                         throws SQLException
```
**Specified by:**`getMaxColumnsInIndex` in interface `DatabaseMetaData`
**Throws:**`SQLException`




#### **getMaxColumnsInOrderBy**

```
public int getMaxColumnsInOrderBy()
                           throws SQLException
```
**Specified by:**`getMaxColumnsInOrderBy` in interface `DatabaseMetaData`
**Throws:**`SQLException`




#### **getMaxColumnsInSelect**

```
public int getMaxColumnsInSelect()
                          throws SQLException
```
**Specified by:**`getMaxColumnsInSelect` in interface `DatabaseMetaData`
**Throws:**`SQLException`




#### **getMaxColumnsInTable**

```
public int getMaxColumnsInTable()
                         throws SQLException
```
**Specified by:**`getMaxColumnsInTable` in interface `DatabaseMetaData`
**Throws:**`SQLException`




#### **getMaxConnections**

```
public int getMaxConnections()
                      throws SQLException
```
**Specified by:**`getMaxConnections` in interface `DatabaseMetaData`
**Throws:**`SQLException`




#### **getMaxCursorNameLength**

```
public int getMaxCursorNameLength()
                           throws SQLException
```
**Specified by:**`getMaxCursorNameLength` in interface `DatabaseMetaData`
**Throws:**`SQLException`




#### **getMaxIndexLength**

```
public int getMaxIndexLength()
                      throws SQLException
```
**Specified by:**`getMaxIndexLength` in interface `DatabaseMetaData`
**Throws:**`SQLException`




#### **getMaxProcedureNameLength**

```
public int getMaxProcedureNameLength()
                              throws SQLException
```
**Specified by:**`getMaxProcedureNameLength` in interface `DatabaseMetaData`
**Throws:**`SQLException`




#### **getMaxRowSize**

```
public int getMaxRowSize()
                  throws SQLException
```
**Specified by:**`getMaxRowSize` in interface `DatabaseMetaData`
**Throws:**`SQLException`




#### **getMaxSchemaNameLength**

```
public int getMaxSchemaNameLength()
                           throws SQLException
```
**Specified by:**`getMaxSchemaNameLength` in interface `DatabaseMetaData`
**Throws:**`SQLException`




#### **getMaxStatementLength**

```
public int getMaxStatementLength()
                          throws SQLException
```
**Specified by:**`getMaxStatementLength` in interface `DatabaseMetaData`
**Throws:**`SQLException`




#### **getMaxStatements**

```
public int getMaxStatements()
                     throws SQLException
```
**Specified by:**`getMaxStatements` in interface `DatabaseMetaData`
**Throws:**`SQLException`




#### **getMaxTableNameLength**

```
public int getMaxTableNameLength()
                          throws SQLException
```
**Specified by:**`getMaxTableNameLength` in interface `DatabaseMetaData`
**Throws:**`SQLException`




#### **getMaxTablesInSelect**

```
public int getMaxTablesInSelect()
                         throws SQLException
```
**Specified by:**`getMaxTablesInSelect` in interface `DatabaseMetaData`
**Throws:**`SQLException`




#### **getMaxUserNameLength**

```
public int getMaxUserNameLength()
                         throws SQLException
```
**Specified by:**`getMaxUserNameLength` in interface `DatabaseMetaData`
**Throws:**`SQLException`




#### **getResultSetHoldability**

```
public int getResultSetHoldability()
                            throws SQLException
```
**Specified by:**`getResultSetHoldability` in interface `DatabaseMetaData`
**Throws:**`SQLException`




#### **getSQLStateType**

```
public int getSQLStateType()
                    throws SQLException
```
**Specified by:**`getSQLStateType` in interface `DatabaseMetaData`
**Throws:**`SQLException`




#### **allProceduresAreCallable**

```
public boolean allProceduresAreCallable()
                                 throws SQLException
```
**Specified by:**`allProceduresAreCallable` in interface `DatabaseMetaData`
**Throws:**`SQLException`




#### **allTablesAreSelectable**

```
public boolean allTablesAreSelectable()
                               throws SQLException
```
**Specified by:**`allTablesAreSelectable` in interface `DatabaseMetaData`
**Throws:**`SQLException`




#### **dataDefinitionCausesTransactionCommit**

```
public boolean dataDefinitionCausesTransactionCommit()
                                              throws SQLException
```
**Specified by:**`dataDefinitionCausesTransactionCommit` in interface `DatabaseMetaData`
**Throws:**`SQLException`




#### **dataDefinitionIgnoredInTransactions**

```
public boolean dataDefinitionIgnoredInTransactions()
                                            throws SQLException
```
**Specified by:**`dataDefinitionIgnoredInTransactions` in interface `DatabaseMetaData`
**Throws:**`SQLException`




#### **doesMaxRowSizeIncludeBlobs**

```
public boolean doesMaxRowSizeIncludeBlobs()
                                   throws SQLException
```
**Specified by:**`doesMaxRowSizeIncludeBlobs` in interface `DatabaseMetaData`
**Throws:**`SQLException`




#### **isCatalogAtStart**

```
public boolean isCatalogAtStart()
                         throws SQLException
```
**Specified by:**`isCatalogAtStart` in interface `DatabaseMetaData`
**Throws:**`SQLException`




#### **isReadOnly**

```
public boolean isReadOnly()
                   throws SQLException
```
**Specified by:**`isReadOnly` in interface `DatabaseMetaData`
**Throws:**`SQLException`




#### **locatorsUpdateCopy**

```
public boolean locatorsUpdateCopy()
                           throws SQLException
```
**Specified by:**`locatorsUpdateCopy` in interface `DatabaseMetaData`
**Throws:**`SQLException`




#### **nullPlusNonNullIsNull**

```
public boolean nullPlusNonNullIsNull()
                              throws SQLException
```
**Specified by:**`nullPlusNonNullIsNull` in interface `DatabaseMetaData`
**Throws:**`SQLException`
**See Also:**[`DatabaseMetaData.nullPlusNonNullIsNull()`](http://java.sun.com/j2se/1.5.0/docs/api/java/sql/DatabaseMetaData.html?is-external=true#nullPlusNonNullIsNull-- "class or interface in java.sql")




#### **nullsAreSortedAtEnd**

```
public boolean nullsAreSortedAtEnd()
                            throws SQLException
```
**Specified by:**`nullsAreSortedAtEnd` in interface `DatabaseMetaData`
**Throws:**`SQLException`




#### **nullsAreSortedAtStart**

```
public boolean nullsAreSortedAtStart()
                              throws SQLException
```
**Specified by:**`nullsAreSortedAtStart` in interface `DatabaseMetaData`
**Throws:**`SQLException`




#### **nullsAreSortedHigh**

```
public boolean nullsAreSortedHigh()
                           throws SQLException
```
**Specified by:**`nullsAreSortedHigh` in interface `DatabaseMetaData`
**Throws:**`SQLException`




#### **nullsAreSortedLow**

```
public boolean nullsAreSortedLow()
                          throws SQLException
```
**Specified by:**`nullsAreSortedLow` in interface `DatabaseMetaData`
**Throws:**`SQLException`




#### **storesLowerCaseIdentifiers**

```
public boolean storesLowerCaseIdentifiers()
                                   throws SQLException
```
**Specified by:**`storesLowerCaseIdentifiers` in interface `DatabaseMetaData`
**Throws:**`SQLException`




#### **storesLowerCaseQuotedIdentifiers**

```
public boolean storesLowerCaseQuotedIdentifiers()
                                         throws SQLException
```
**Specified by:**`storesLowerCaseQuotedIdentifiers` in interface `DatabaseMetaData`
**Throws:**`SQLException`




#### **storesMixedCaseIdentifiers**

```
public boolean storesMixedCaseIdentifiers()
                                   throws SQLException
```
**Specified by:**`storesMixedCaseIdentifiers` in interface `DatabaseMetaData`
**Throws:**`SQLException`




#### **storesMixedCaseQuotedIdentifiers**

```
public boolean storesMixedCaseQuotedIdentifiers()
                                         throws SQLException
```
**Specified by:**`storesMixedCaseQuotedIdentifiers` in interface `DatabaseMetaData`
**Throws:**`SQLException`




#### **storesUpperCaseIdentifiers**

```
public boolean storesUpperCaseIdentifiers()
                                   throws SQLException
```
**Specified by:**`storesUpperCaseIdentifiers` in interface `DatabaseMetaData`
**Throws:**`SQLException`




#### **storesUpperCaseQuotedIdentifiers**

```
public boolean storesUpperCaseQuotedIdentifiers()
                                         throws SQLException
```
**Specified by:**`storesUpperCaseQuotedIdentifiers` in interface `DatabaseMetaData`
**Throws:**`SQLException`




#### **supportsANSI92EntryLevelSQL**

```
public boolean supportsANSI92EntryLevelSQL()
                                    throws SQLException
```
**Specified by:**`supportsANSI92EntryLevelSQL` in interface `DatabaseMetaData`
**Throws:**`SQLException`




#### **supportsANSI92FullSQL**

```
public boolean supportsANSI92FullSQL()
                              throws SQLException
```
**Specified by:**`supportsANSI92FullSQL` in interface `DatabaseMetaData`
**Throws:**`SQLException`




#### **supportsANSI92IntermediateSQL**

```
public boolean supportsANSI92IntermediateSQL()
                                      throws SQLException
```
**Specified by:**`supportsANSI92IntermediateSQL` in interface `DatabaseMetaData`

**Throws:**`SQLException`




#### supportsAlterTableWithAddColumn

```
public boolean supportsAlterTableWithAddColumn()
                                        throws SQLException
```
**Specified by:**`supportsAlterTableWithAddColumn` in interface `DatabaseMetaData`
**Throws:**`SQLException`




#### **supportsAlterTableWithDropColumn**

```
public boolean supportsAlterTableWithDropColumn()
                                         throws SQLException
```
**Specified by:**`supportsAlterTableWithDropColumn` in interface `DatabaseMetaData`
**Throws:**`SQLException`




#### **supportsBatchUpdates**

```
public boolean supportsBatchUpdates()
                             throws SQLException
```
**Specified by:**`supportsBatchUpdates` in interface `DatabaseMetaData`
**Throws:**`SQLException`




#### **supportsCatalogsInDataManipulation**

```
public boolean supportsCatalogsInDataManipulation()
                                           throws SQLException
```
**Specified by:**`supportsCatalogsInDataManipulation` in interface `DatabaseMetaData`
**Throws:**`SQLException`




#### **supportsCatalogsInIndexDefinitions**

```
public boolean supportsCatalogsInIndexDefinitions()
                                           throws SQLException
```
**Specified by:**`supportsCatalogsInIndexDefinitions` in interface `DatabaseMetaData`
**Throws:**`SQLException`




#### **supportsCatalogsInPrivilegeDefinitions**

```
public boolean supportsCatalogsInPrivilegeDefinitions()
                                               throws SQLException
```
**Specified by:**`supportsCatalogsInPrivilegeDefinitions` in interface `DatabaseMetaData`
**Throws:**`SQLException`




#### **supportsCatalogsInProcedureCalls**

```
public boolean supportsCatalogsInProcedureCalls()
                                         throws SQLException
```
**Specified by:**`supportsCatalogsInProcedureCalls` in interface `DatabaseMetaData`
**Throws:**`SQLException`




#### **supportsCatalogsInTableDefinitions**

```
public boolean supportsCatalogsInTableDefinitions()
                                           throws SQLException
```
**Specified by:**`supportsCatalogsInTableDefinitions` in interface `DatabaseMetaData`
**Throws:**`SQLException`




#### **supportsColumnAliasing**

```
public boolean supportsColumnAliasing()
                               throws SQLException
```

Retrieves whether this database supports column aliasing. If so, the SQL AS clause can be used to provide names for computed columns or to provide alias names for columns as required.
**Specified by:**`supportsColumnAliasing` in interface `DatabaseMetaData`
**Returns:**true if so; false otherwise
**Throws:**`SQLException` - if a database access error occurs




#### **supportsConvert**

```
public boolean supportsConvert()
                        throws SQLException
```
**Specified by:**`supportsConvert` in interface `DatabaseMetaData`
**Throws:**`SQLException`




#### **supportsCoreSQLGrammar**

```
public boolean supportsCoreSQLGrammar()
                               throws SQLException
```
**Specified by:**`supportsCoreSQLGrammar` in interface `DatabaseMetaData`
**Throws:**`SQLException`




#### **supportsCorrelatedSubqueries**

```
public boolean supportsCorrelatedSubqueries()
                                     throws SQLException
```
**Specified by:**`supportsCorrelatedSubqueries` in interface `DatabaseMetaData`
**Throws:**`SQLException`




#### **supportsDataDefinitionAndDataManipulationTransactions**

```
public boolean supportsDataDefinitionAndDataManipulationTransactions()
                                                              throws SQLException
```
**Specified by:**`supportsDataDefinitionAndDataManipulationTransactions` in interface `DatabaseMetaData`
**Throws:**`SQLException`




#### **supportsDataManipulationTransactionsOnly**

```
public boolean supportsDataManipulationTransactionsOnly()
                                                 throws SQLException
```
**Specified by:**`supportsDataManipulationTransactionsOnly` in interface `DatabaseMetaData`
**Throws:**`SQLException`




#### **supportsDifferentTableCorrelationNames**

```
public boolean supportsDifferentTableCorrelationNames()
                                               throws SQLException
```
**Specified by:**`supportsDifferentTableCorrelationNames` in interface `DatabaseMetaData`
**Throws:**`SQLException`




#### **supportsExpressionsInOrderBy**

```
public boolean supportsExpressionsInOrderBy()
                                     throws SQLException
```
**Specified by:**`supportsExpressionsInOrderBy` in interface `DatabaseMetaData`
**Throws:**`SQLException`




#### **supportsExtendedSQLGrammar**

```
public boolean supportsExtendedSQLGrammar()
                                   throws SQLException
```
**Specified by:**`supportsExtendedSQLGrammar` in interface `DatabaseMetaData`
**Throws:**`SQLException`




#### **supportsFullOuterJoins**

```
public boolean supportsFullOuterJoins()
                               throws SQLException
```
**Specified by:**`supportsFullOuterJoins` in interface `DatabaseMetaData`
**Throws:**`SQLException`




#### **supportsGetGeneratedKeys**

```
public boolean supportsGetGeneratedKeys()
                                 throws SQLException
```
**Specified by:**`supportsGetGeneratedKeys` in interface `DatabaseMetaData`
**Throws:**`SQLException`




#### **supportsGroupBy**

```
public boolean supportsGroupBy()
                        throws SQLException
```
**Specified by:**`supportsGroupBy` in interface `DatabaseMetaData`
**Throws:**`SQLException`




#### **supportsGroupByBeyondSelect**

```
public boolean supportsGroupByBeyondSelect()
                                    throws SQLException
```
**Specified by:**`supportsGroupByBeyondSelect` in interface `DatabaseMetaData`
**Throws:**`SQLException`




#### **supportsGroupByUnrelated**

```
public boolean supportsGroupByUnrelated()
                                 throws SQLException
```
**Specified by:**`supportsGroupByUnrelated` in interface `DatabaseMetaData`
**Throws:**`SQLException`




#### **supportsIntegrityEnhancementFacility**

```
public boolean supportsIntegrityEnhancementFacility()
                                             throws SQLException
```
**Specified by:**`supportsIntegrityEnhancementFacility` in interface `DatabaseMetaData`
**Throws:**`SQLException`




#### **supportsLikeEscapeClause**

```
public boolean supportsLikeEscapeClause()
                                 throws SQLException
```
**Specified by:**`supportsLikeEscapeClause` in interface `DatabaseMetaData`
**Throws:**`SQLException`




#### **supportsLimitedOuterJoins**

```
public boolean supportsLimitedOuterJoins()
                                  throws SQLException
```
**Specified by:**`supportsLimitedOuterJoins` in interface `DatabaseMetaData`
**Throws:**`SQLException`




#### **supportsMinimumSQLGrammar**

```
public boolean supportsMinimumSQLGrammar()
                                  throws SQLException
```
**Specified by:**`supportsMinimumSQLGrammar` in interface `DatabaseMetaData`
**Throws:**`SQLException`




#### **supportsMixedCaseIdentifiers**

```
public boolean supportsMixedCaseIdentifiers()
                                     throws SQLException
```
**Specified by:**`supportsMixedCaseIdentifiers` in interface `DatabaseMetaData`
**Throws:**`SQLException`




#### **supportsMixedCaseQuotedIdentifiers**

```
public boolean supportsMixedCaseQuotedIdentifiers()
                                           throws SQLException
```
**Specified by:**`supportsMixedCaseQuotedIdentifiers` in interface `DatabaseMetaData`
**Throws:**`SQLException`




#### **supportsMultipleOpenResults**

```
public boolean supportsMultipleOpenResults()
                                    throws SQLException
```
**Specified by:**`supportsMultipleOpenResults` in interface `DatabaseMetaData`
**Throws:**`SQLException`




#### **supportsMultipleResultSets**

```
public boolean supportsMultipleResultSets()
                                   throws SQLException
```
**Specified by:**`supportsMultipleResultSets` in interface `DatabaseMetaData`
**Throws:**`SQLException`




#### **supportsMultipleTransactions**

```
public boolean supportsMultipleTransactions()
                                     throws SQLException
```

Retrieves whether this database allows having multiple transactions open at once (on different connections).
**Specified by:**`supportsMultipleTransactions` in interface `DatabaseMetaData`
**Returns:**true if so; false otherwise
**Throws:**`SQLException` - - if a database access error occurs
**See Also:**[`DatabaseMetaData.supportsMultipleTransactions()`](http://java.sun.com/j2se/1.5.0/docs/api/java/sql/DatabaseMetaData.html?is-external=true#supportsMultipleTransactions-- "class or interface in java.sql")




#### **supportsNamedParameters**

```
public boolean supportsNamedParameters()
                                throws SQLException
```
**Specified by:**`supportsNamedParameters` in interface `DatabaseMetaData`
**Throws:**`SQLException`




#### **supportsNonNullableColumns**

```
public boolean supportsNonNullableColumns()
                                   throws SQLException
```
**Specified by:**`supportsNonNullableColumns` in interface `DatabaseMetaData`
**Throws:**`SQLException`




#### **supportsOpenCursorsAcrossCommit**

```
public boolean supportsOpenCursorsAcrossCommit()
                                        throws SQLException
```
**Specified by:**`supportsOpenCursorsAcrossCommit` in interface `DatabaseMetaData`
**Throws:**`SQLException`




#### supportsOpenCursorsAcrossRollback

```
public boolean supportsOpenCursorsAcrossRollback()
                                          throws SQLException
```
Specified by:`supportsOpenCursorsAcrossRollback` in interface `DatabaseMetaData`
**Throws:**`SQLException`




#### **supportsOpenStatementsAcrossCommit**

```
public boolean supportsOpenStatementsAcrossCommit()
                                           throws SQLException
```
**Specified by:**`supportsOpenStatementsAcrossCommit` in interface `DatabaseMetaData`
**Throws:**`SQLException`




#### **supportsOpenStatementsAcrossRollback**

```
public boolean supportsOpenStatementsAcrossRollback()
                                             throws SQLException
```
**Specified by:**`supportsOpenStatementsAcrossRollback` in interface `DatabaseMetaData`
**Throws:**`SQLException`




#### **supportsOrderByUnrelated**

```
public boolean supportsOrderByUnrelated()
                                 throws SQLException
```
**Specified by:**`supportsOrderByUnrelated` in interface `DatabaseMetaData`
**Throws:**`SQLException`




#### supportsOuterJoins

```
public boolean supportsOuterJoins()
                           throws SQLException
```
**Specified by:**`supportsOuterJoins` in interface `DatabaseMetaData`
**Throws:**`SQLException`




#### **supportsPositionedDelete**

```
public boolean supportsPositionedDelete()
                                 throws SQLException
```
**Specified by:**`supportsPositionedDelete` in interface `DatabaseMetaData`
**Throws:**`SQLException`




#### **supportsPositionedUpdate**

```
public boolean supportsPositionedUpdate()
                                 throws SQLException
```
**Specified by:**`supportsPositionedUpdate` in interface `DatabaseMetaData`
**Throws:**`SQLException`




#### **supportsSavepoints**

```
public boolean supportsSavepoints()
                           throws SQLException
```
**Specified by:**`supportsSavepoints` in interface `DatabaseMetaData`
**Throws:**`SQLException`




#### **supportsSchemasInDataManipulation**

```
public boolean supportsSchemasInDataManipulation()
                                          throws SQLException
```
**Specified by:**`supportsSchemasInDataManipulation` in interface `DatabaseMetaData`
**Throws:**`SQLException`




#### **supportsSchemasInIndexDefinitions**

```
public boolean supportsSchemasInIndexDefinitions()
                                          throws SQLException
```
**Specified by:**`supportsSchemasInIndexDefinitions` in interface `DatabaseMetaData`
**Throws:**`SQLException`




#### **supportsSchemasInPrivilegeDefinitions**

```
public boolean supportsSchemasInPrivilegeDefinitions()
                                              throws SQLException
```
**Specified by:**`supportsSchemasInPrivilegeDefinitions` in interface `DatabaseMetaData`
**Throws:**`SQLException`




#### **supportsSchemasInProcedureCalls**

```
public boolean supportsSchemasInProcedureCalls()
                                        throws SQLException
```
**Specified by:**`supportsSchemasInProcedureCalls` in interface `DatabaseMetaData`
**Throws:**`SQLException`




#### **supportsSchemasInTableDefinitions**

```
public boolean supportsSchemasInTableDefinitions()
                                          throws SQLException
```
**Specified by:**`supportsSchemasInTableDefinitions` in interface `DatabaseMetaData`
**Throws:**`SQLException`




#### **supportsSelectForUpdate**

```
public boolean supportsSelectForUpdate()
                                throws SQLException
```
**Specified by:**`supportsSelectForUpdate` in interface `DatabaseMetaData`
**Throws:**`SQLException`




#### **supportsStatementPooling**

```
public boolean supportsStatementPooling()
                                 throws SQLException
```
**Specified by:**`supportsStatementPooling` in interface `DatabaseMetaData`
**Throws:**`SQLException`




#### **supportsStoredProcedures**

```
public boolean supportsStoredProcedures()
                                 throws SQLException
```
**Specified by:**`supportsStoredProcedures` in interface `DatabaseMetaData`
**Throws:**`SQLException`
**See Also:**[`DatabaseMetaData.supportsStoredProcedures()`](http://java.sun.com/j2se/1.5.0/docs/api/java/sql/DatabaseMetaData.html?is-external=true#supportsStoredProcedures-- "class or interface in java.sql")




#### **supportsSubqueriesInComparisons**

```
public boolean supportsSubqueriesInComparisons()
                                        throws SQLException
```
**Specified by:**`supportsSubqueriesInComparisons` in interface `DatabaseMetaData`
Throws:`SQLException`




#### **supportsSubqueriesInExists**

```
public boolean supportsSubqueriesInExists()
                                   throws SQLException
```
**Specified by:**`supportsSubqueriesInExists` in interface `DatabaseMetaData`
**Throws:**`SQLException`




#### **supportsSubqueriesInIns**

```
public boolean supportsSubqueriesInIns()
                                throws SQLException
```
**Specified by:**`supportsSubqueriesInIns` in interface `DatabaseMetaData`
**Throws:**`SQLException`




#### **supportsSubqueriesInQuantifieds**

```
public boolean supportsSubqueriesInQuantifieds()
                                        throws SQLException
```
**Specified by:**`supportsSubqueriesInQuantifieds` in interface `DatabaseMetaData`
**Throws:**`SQLException`




#### **supportsTableCorrelationNames**

```
public boolean supportsTableCorrelationNames()
                                      throws SQLException
```
**Specified by:**`supportsTableCorrelationNames` in interface `DatabaseMetaData`
**Throws:**`SQLException`




#### **supportsTransactions**

```
public boolean supportsTransactions()
                             throws SQLException
```
**Specified by:**`supportsTransactions` in interface `DatabaseMetaData`
**Throws:**`SQLException`




#### **supportsUnion**

```
public boolean supportsUnion()
                      throws SQLException
```
**Specified by:**`supportsUnion` in interface `DatabaseMetaData`
**Throws:**`SQLException`




#### **supportsUnionAll**

```
public boolean supportsUnionAll()
                         throws SQLException
```
**Specified by:**`supportsUnionAll` in interface `DatabaseMetaData`
**Throws:**`SQLException`




#### **usesLocalFilePerTable**

```
public boolean usesLocalFilePerTable()
                              throws SQLException
```
**Specified by:**`usesLocalFilePerTable` in interface `DatabaseMetaData`
**Throws:**`SQLException`




#### **usesLocalFiles**

```
public boolean usesLocalFiles()
                       throws SQLException
```
**Specified by:**`usesLocalFiles` in interface `DatabaseMetaData`
**Throws:**`SQLException`




#### **deletesAreDetected**

```
public boolean deletesAreDetected(int type)
                           throws SQLException
```
**Specified by:**`deletesAreDetected` in interface `DatabaseMetaData`
**Throws:**`SQLException`




#### **insertsAreDetected**

```
public boolean insertsAreDetected(int type)
                           throws SQLException
```
**Specified by:**`insertsAreDetected` in interface `DatabaseMetaData`
**Throws:**`SQLException`




#### **othersDeletesAreVisible**

```
public boolean othersDeletesAreVisible(int type)
                                throws SQLException
```
**Specified by:**`othersDeletesAreVisible` in interface `DatabaseMetaData`
**Throws:**`SQLException`




#### **othersInsertsAreVisible**

```
public boolean othersInsertsAreVisible(int type)
                                throws SQLException
```
**Specified by:**`othersInsertsAreVisible` in interface `DatabaseMetaData`
**Throws:**`SQLException`




#### **othersUpdatesAreVisible**

```
public boolean othersUpdatesAreVisible(int type)
                                throws SQLException
```
**Specified by:**`othersUpdatesAreVisible` in interface `DatabaseMetaData`
**Throws:**`SQLException`




#### **ownDeletesAreVisible**

```
public boolean ownDeletesAreVisible(int type)
                             throws SQLException
```
**Specified by:**`ownDeletesAreVisible` in interface `DatabaseMetaData`
**Throws:**`SQLException`




#### **ownInsertsAreVisible**

```
public boolean ownInsertsAreVisible(int type)
                             throws SQLException
```
**Specified by:**`ownInsertsAreVisible` in interface `DatabaseMetaData`
**Throws:**`SQLException`




#### ownUpdatesAreVisible

```
public boolean ownUpdatesAreVisible(int type)
                             throws SQLException
```
Specified by:`ownUpdatesAreVisible` in interface `DatabaseMetaData`
**Throws:**`SQLException`




#### **supportsResultSetHoldability**

```
public boolean supportsResultSetHoldability(int holdability)
                                     throws SQLException
```
**Specified by:**`supportsResultSetHoldability` in interface `DatabaseMetaData`
**Throws:**`SQLException`




#### **supportsResultSetType**

```
public boolean supportsResultSetType(int type)
                              throws SQLException
```
**Specified by:**`supportsResultSetType` in interface `DatabaseMetaData`
**Throws:**`SQLException`




#### **supportsTransactionIsolationLevel**

```
public boolean supportsTransactionIsolationLevel(int level)
                                          throws SQLException
```
**Specified by:**`supportsTransactionIsolationLevel` in interface `DatabaseMetaData`
**Throws:**`SQLException`




#### **updatesAreDetected**

```
public boolean updatesAreDetected(int type)
                           throws SQLException
```
**Specified by:**`updatesAreDetected` in interface `DatabaseMetaData`
**Throws:**`SQLException`




#### **supportsConvert**

```
public boolean supportsConvert(int fromType, int toType)
                        throws SQLException
```
**Specified by:**`supportsConvert` in interface `DatabaseMetaData`
**Throws:**`SQLException`




#### supportsResultSetConcurrency

```
public boolean supportsResultSetConcurrency(int type, int concurrency)
                                     throws SQLException
```
**Specified by:**`supportsResultSetConcurrency` in interface `DatabaseMetaData`
**Throws:**`SQLException`




#### **getCatalogSeparator**

```
public String getCatalogSeparator()
                           throws SQLException
```
**Specified by:**`getCatalogSeparator` in interface `DatabaseMetaData`
**Throws:**`SQLException`




#### **getCatalogTerm**

```
public String getCatalogTerm()
                      throws SQLException
```
**Specified by:**`getCatalogTerm` in interface `DatabaseMetaData`
**Throws:**`SQLException`




#### **getDatabaseProductName**

```
public String getDatabaseProductName()
                              throws SQLException
```
**Specified by:**`getDatabaseProductName` in interface `DatabaseMetaData`
**Throws:**`SQLException`




#### **getDatabaseProductVersion**

```
public String getDatabaseProductVersion()
                                 throws SQLException
```
**Specified by:**`getDatabaseProductVersion` in interface `DatabaseMetaData`
**Throws:**`SQLException`




#### **getDriverName**

```
public String getDriverName()
                     throws SQLException
```

Retrieves the name of this JDBC driver.
**Specified by:**`getDriverName` in interface `DatabaseMetaData`
**Returns:**JDBC driver name
**Throws:**`SQLException` - - if a database access error occurs
**See Also:**[`DatabaseMetaData.getDriverName()`](http://java.sun.com/j2se/1.5.0/docs/api/java/sql/DatabaseMetaData.html?is-external=true#getDriverName-- "class or interface in java.sql")




#### **getDriverVersion**

```
public String getDriverVersion()
                        throws SQLException
```

Retrieves the version number of this JDBC driver as a String.
**Specified by:**`getDriverVersion` in interface `DatabaseMetaData`
**Returns:**JDBC driver version
**Throws:**`SQLException` - - if a database access error occurs
**See Also:**[`DatabaseMetaData.getDriverVersion()`](http://java.sun.com/j2se/1.5.0/docs/api/java/sql/DatabaseMetaData.html?is-external=true#getDriverVersion-- "class or interface in java.sql")




#### getExtraNameCharacters

```
public String getExtraNameCharacters()
                              throws SQLException
```

Retrieves all the "extra" characters that can be used in unquoted identifier names (those beyond a-z, A-Z, 0-9 and \_).
**Specified by:**`getExtraNameCharacters` in interface `DatabaseMetaData`
**Returns:**the string containing the extra characters
**Throws:**`SQLException` - - if a database access error occurs
**See Also:**[`DatabaseMetaData.getExtraNameCharacters()`](http://java.sun.com/j2se/1.5.0/docs/api/java/sql/DatabaseMetaData.html?is-external=true#getExtraNameCharacters-- "class or interface in java.sql")




#### **getIdentifierQuoteString**

```
public String getIdentifierQuoteString()
                                throws SQLException
```
**Specified by:**`getIdentifierQuoteString` in interface `DatabaseMetaData`
**Throws:**`SQLException`
**See Also:**[`DatabaseMetaData.getIdentifierQuoteString()`](http://java.sun.com/j2se/1.5.0/docs/api/java/sql/DatabaseMetaData.html?is-external=true#getIdentifierQuoteString-- "class or interface in java.sql")




#### **getNumericFunctions**

```
public String getNumericFunctions()
                           throws SQLException
```

Retrieves a comma-separated list of math functions available with this database. These are the Open /Open CLI math function names used in the JDBC function escape clause. jBASE Note: The jBASE JDBC driver does not support escaping at present.
**Specified by:**`getNumericFunctions` in interface `DatabaseMetaData`
**Returns:**the list of math functions supported by this database
**Throws:**`SQLException` - - if a database access error occurs
**See Also:**[`DatabaseMetaData.getNumericFunctions()`](http://java.sun.com/j2se/1.5.0/docs/api/java/sql/DatabaseMetaData.html?is-external=true#getNumericFunctions-- "class or interface in java.sql")




#### **getProcedureTerm**

```
public String getProcedureTerm()
                        throws SQLException
```
**Specified by:**`getProcedureTerm` in interface `DatabaseMetaData`
**Throws:**`SQLException`




#### **getSQLKeywords**

```
public String getSQLKeywords()
                      throws SQLException
```

Gets a comma-separated list of all a database's SQL keywords that are NOT also SQL92 keywords.
**Specified by:**`getSQLKeywords` in interface `DatabaseMetaData`
**Returns:**the list
**Throws:**`SQLException` - - if a database access error occurs




#### **getSchemaTerm**

```
public String getSchemaTerm()
                     throws SQLException
```
**Specified by:**`getSchemaTerm` in interface `DatabaseMetaData`
**Throws:**`SQLException`




#### **getSearchStringEscape**

```
public String getSearchStringEscape()
                             throws SQLException
```
Specified by:`getSearchStringEscape` in interface `DatabaseMetaData`
**Throws:**`SQLException`




#### **getStringFunctions**

```
public String getStringFunctions()
                          throws SQLException
```

Retrieves a comma-separated list of string functions available with this database. These are the Open Group CLI string function names used in the JDBC function escape clause.
**Specified by:**`getStringFunctions` in interface `DatabaseMetaData`
**Returns:**the list of string functions supported by this database
**Throws:**`SQLException` - - if a database access error occurs
**See Also:**[`DatabaseMetaData.getStringFunctions()`](http://java.sun.com/j2se/1.5.0/docs/api/java/sql/DatabaseMetaData.html?is-external=true#getStringFunctions-- "class or interface in java.sql")




#### **getSystemFunctions**

```
public String getSystemFunctions()
                          throws SQLException
```

NOT IMPLEMENTED YET Retrieves a comma-separated list of system functions available with this database. These are the Open Group CLI system function names used in the JDBC function escape clause.
**Specified by:**`getSystemFunctions` in interface `DatabaseMetaData`
**Returns:**a list of system functions supported by this database
**Throws:**`SQLException` - - if a database access error occurs
**See Also:**[`DatabaseMetaData.getSystemFunctions()`](http://java.sun.com/j2se/1.5.0/docs/api/java/sql/DatabaseMetaData.html?is-external=true#getSystemFunctions-- "class or interface in java.sql")




#### **getTimeDateFunctions**

```
public String getTimeDateFunctions()
                            throws SQLException
```

NOT IMPLEMENTED YET Retrieves a comma-separated list of the time and date functions available with this database.
**Specified by:**`getTimeDateFunctions` in interface `DatabaseMetaData`
**Returns:**the list of time and date functions supported by this database
**Throws:**`SQLException` - - if a database access error occurs
**See Also:**[`DatabaseMetaData.getTimeDateFunctions()`](http://java.sun.com/j2se/1.5.0/docs/api/java/sql/DatabaseMetaData.html?is-external=true#getTimeDateFunctions-- "class or interface in java.sql")




#### **getURL**

```
public String getURL()
              throws SQLException
```
**Specified by:**`getURL` in interface `DatabaseMetaData`
**Throws:**`SQLException`




#### **getUserName**

```
public String getUserName()
                   throws SQLException
```
**Specified by:**`getUserName` in interface `DatabaseMetaData`
**Throws:**`SQLException`




#### **getConnection**

```
public Connection getConnection()
                         throws SQLException
```
**Specified by:**`getConnection` in interface `DatabaseMetaData`
**Throws:**`SQLException`




#### **getCatalogs**

```
public ResultSet getCatalogs()
                      throws SQLException
```
**Specified by:**`getCatalogs` in interface `DatabaseMetaData`
**Throws:**`SQLException`




#### **getSchemas**

```
public ResultSet getSchemas()
                     throws SQLException
```
**Specified by:**`getSchemas` in interface `DatabaseMetaData`
**Throws:**`SQLException`




#### **getTableTypes**

```
public ResultSet getTableTypes()
                        throws SQLException
```
**Specified by:**`getTableTypes` in interface `DatabaseMetaData`
**Throws:**`SQLException`




#### **getTypeInfo**

```
public ResultSet getTypeInfo()
                      throws SQLException
```
**Specified by:**`getTypeInfo` in interface `DatabaseMetaData`
**Throws:**`SQLException`
**See Also:**[`DatabaseMetaData.getTypeInfo()`](http://java.sun.com/j2se/1.5.0/docs/api/java/sql/DatabaseMetaData.html?is-external=true#getTypeInfo-- "class or interface in java.sql")




#### **getExportedKeys**

```
public ResultSet getExportedKeys(String catalog, String schema, String table)
                          throws SQLException
```

Foreign keys not used as we only have 1 primary key per table
**Specified by:**`getExportedKeys` in interface `DatabaseMetaData`
**Throws:**`SQLException`
**See Also:**[`DatabaseMetaData.getExportedKeys(java.lang.String, java.lang.String, java.lang.String)`](http://java.sun.com/j2se/1.5.0/docs/api/java/sql/DatabaseMetaData.html?is-external=true#getExportedKeys-java.lang.String-java.lang.String-java.lang.String- "class or interface in java.sql")




#### **getImportedKeys**

```
public ResultSet getImportedKeys(String catalog, String schema, String table)
                          throws SQLException
```

Foreign keys not used as we only have 1 primary key per table
**Specified by:**`getImportedKeys` in interface `DatabaseMetaData`
**Throws:**`SQLException`
**See Also:**[`DatabaseMetaData.getImportedKeys(java.lang.String, java.lang.String, java.lang.String)`](http://java.sun.com/j2se/1.5.0/docs/api/java/sql/DatabaseMetaData.html?is-external=true#getImportedKeys-java.lang.String-java.lang.String-java.lang.String- "class or interface in java.sql")




#### **getPrimaryKeys**

```
public ResultSet getPrimaryKeys(String catalog, String schema, String table)
                         throws SQLException
```
**Specified by:**`getPrimaryKeys` in interface `DatabaseMetaData`
**Throws:**`SQLException`




#### **getProcedures**

```
public ResultSet getProcedures(String catalog, String schemaPattern, String procedureNamePattern)
                        throws SQLException
```
**Specified by:**`getProcedures` in interface `DatabaseMetaData`
**Throws:**`SQLException`




#### getSuperTables

```
public ResultSet getSuperTables(String catalog, String schemaPattern, String tableNamePattern)
                         throws SQLException
```

This method is currently not supported
**Specified by:**`getSuperTables` in interface `DatabaseMetaData`
**Throws:**`SQLException`
**See Also:**[`DatabaseMetaData.getSuperTables(java.lang.String, java.lang.String, java.lang.String)`](http://java.sun.com/j2se/1.5.0/docs/api/java/sql/DatabaseMetaData.html?is-external=true#getSuperTables-java.lang.String-java.lang.String-java.lang.String- "class or interface in java.sql")




#### **getSuperTypes**

```
public ResultSet getSuperTypes(String catalog, String schemaPattern, String typeNamePattern)
                        throws SQLException
```

This method is currently not supported
**Specified by:**`getSuperTypes` in interface `DatabaseMetaData`
**Throws:**`SQLException`
**See Also:**[`DatabaseMetaData.getSuperTypes(java.lang.String, java.lang.String, java.lang.String)`](http://java.sun.com/j2se/1.5.0/docs/api/java/sql/DatabaseMetaData.html?is-external=true#getSuperTypes-java.lang.String-java.lang.String-java.lang.String- "class or interface in java.sql")




#### getTablePrivileges

```
public ResultSet getTablePrivileges(String catalog, String schemaPattern, String tableNamePattern)
                             throws SQLException
```
**Specified by:**`getTablePrivileges` in interface `DatabaseMetaData`
**Throws:**`SQLException`




#### getVersionColumns

```
public ResultSet getVersionColumns(String catalog, String schema, String table)
                            throws SQLException
```
**Specified by:**`getVersionColumns` in interface `DatabaseMetaData`
**Throws:**`SQLException`




#### **getBestRowIdentifier**

```
public ResultSet getBestRowIdentifier(String catalog, String schema, String table, int scope, boolean nullable)
                               throws SQLException
```
**Specified by:**`getBestRowIdentifier` in interface `DatabaseMetaData`
**Throws:**`SQLException`




#### **getIndexInfo**

```
public ResultSet getIndexInfo(String catalog, String schema, String table, boolean unique, boolean approximate)
                       throws SQLException
```
**Specified by:**`getIndexInfo` in interface `DatabaseMetaData`
**Throws:**`SQLException`




#### **getUDTs**

```
public ResultSet getUDTs(String catalog, String schemaPattern, String typeNamePattern, int[] types)
                  throws SQLException
```

This method is currently not supported.
**Specified by:**`getUDTs` in interface `DatabaseMetaData`
**Throws:**`SQLException`
**See Also:**[`DatabaseMetaData.getUDTs(java.lang.String, java.lang.String, java.lang.String, int\[\])`](http://java.sun.com/j2se/1.5.0/docs/api/java/sql/DatabaseMetaData.html?is-external=true#getUDTs-java.lang.String-java.lang.String-java.lang.String-int:A- "class or interface in java.sql")




#### **getAttributes**

```
public ResultSet getAttributes(String catalog, String schemaPattern, String typeNamePattern, String attributeNamePattern)
                        throws SQLException
```

This method is currently not supported.
**Specified by:**`getAttributes` in interface `DatabaseMetaData` 
**Throws:**`SQLException`
**See Also:**[`DatabaseMetaData.getAttributes(java.lang.String, java.lang.String, java.lang.String, java.lang.String)`](http://java.sun.com/j2se/1.5.0/docs/api/java/sql/DatabaseMetaData.html?is-external=true#getAttributes-java.lang.String-java.lang.String-java.lang.String-java.lang.String- "class or interface in java.sql")




#### **getColumnPrivileges**

```
public ResultSet getColumnPrivileges(String catalog, String schema, String table, String columnNamePattern)
                              throws SQLException
```
**Specified by:**`getColumnPrivileges` in interface `DatabaseMetaData`
**Throws:**`SQLException`




#### getColumns

```
public ResultSet getColumns(String catalog, String schemaPattern, String tableNamePattern, String columnNamePattern)
                     throws SQLException
```
**Specified by:**`getColumns` in interface `DatabaseMetaData`
**Throws:**`SQLException`




#### getProcedureColumns

```
public ResultSet getProcedureColumns(String catalog, String schemaPattern, String procedureNamePattern, String columnNamePattern)
                              throws SQLException
```
**Specified by:**`getProcedureColumns` in interface `DatabaseMetaData`
**Throws:**`SQLException`




#### **getTables**

```
public ResultSet getTables(String catalog, String schemaPattern, String tableNamePattern, String[] types)
                    throws SQLException
```
**Specified by:**`getTables` in interface `DatabaseMetaData`
**Throws**:`SQLException`




#### **getCrossReference**

```
public ResultSet getCrossReference(String primaryCatalog, String primarySchema, String primaryTable, String foreignCatalog, String foreignSchema, 
                                    String foreignTable)
                            throws SQLException
```

Foreign keys are not used as we only have 1 primary key per table
**Specified by:**`getCrossReference` in interface `DatabaseMetaData`
**Throws:**`SQLException`
**See Also:**[`DatabaseMetaData.getCrossReference(java.lang.String, java.lang.String, java.lang.String, java.lang.String, java.lang.String, java.lang.String)`](http://java.sun.com/j2se/1.5.0/docs/api/java/sql/DatabaseMetaData.html?is-external=true#getCrossReference-java.lang.String-java.lang.String-java.lang.String-java.lang.String-java.lang.String-java.lang.String- "class or interface in java.sql")




#### **getDriverBuildDate**

```
public String getDriverBuildDate()
```

Obtain the build-date of the JDBC driver
**Returns:**String




#### **getDriverVendor**

```
public String getDriverVendor()
```

Obtain the vendor of the JDBC driver
**Returns:**String




#### **getJavaSqlType**

```
public int getJavaSqlType(String dataType)
```


