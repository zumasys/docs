# JBaseJDBCDatabaseMetaData (jbasejdbc API)

**Created At:** 9/25/2017 10:54:56 AM  
**Updated At:** 8/17/2018 2:25:53 AM  

<noscript>&amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;lt;div&amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;gt;JavaScript is disabled on your browser.&amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;lt;/div&amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;gt;</noscript><!-- ========= START OF TOP NAVBAR ======= -->
<!--   -->

# Class JBaseJDBCDatabaseMetaData

**All Implemented Interfaces:**
<dd>DatabaseMetaData, Wrapper</dd>
```
public class JBaseJDBCDatabaseMetaData
extends Object
implements DatabaseMetaData
```

This class implements the java.sql.DatabaseMetaData interface which defines a set of methods to retrieve meta data information from the database server.



<!--   -->

# Field Summary

## <!--   -->

## Fields inherited from interface java.sql.DatabaseMetaData
`attributeNoNulls, attributeNullable, attributeNullableUnknown, bestRowNotPseudo, bestRowPseudo, bestRowSession, bestRowTemporary, bestRowTransaction, bestRowUnknown, columnNoNulls, columnNullable, columnNullableUnknown, functionColumnIn, functionColumnInOut, functionColumnOut, functionColumnResult, functionColumnUnknown, functionNoNulls, functionNoTable, functionNullable, functionNullableUnknown, functionResultUnknown, functionReturn, functionReturnsTable, importedKeyCascade, importedKeyInitiallyDeferred, importedKeyInitiallyImmediate, importedKeyNoAction, importedKeyNotDeferrable, importedKeyRestrict, importedKeySetDefault, importedKeySetNull, procedureColumnIn, procedureColumnInOut, procedureColumnOut, procedureColumnResult, procedureColumnReturn, procedureColumnUnknown, procedureNoNulls, procedureNoResult, procedureNullable, procedureNullableUnknown, procedureResultUnknown, procedureReturnsResult, sqlStateSQL, sqlStateSQL99, sqlStateXOpen, tableIndexClustered, tableIndexHashed, tableIndexOther, tableIndexStatistic, typeNoNulls, typeNullable, typeNullableUnknown, typePredBasic, typePredChar, typePredNone, typeSearchable, versionColumnNotPseudo, versionColumnPseudo, versionColumnUnknown`




# 


# Constructor Summary


| Constructor<br> |  Description<br> |
| --- | --- |
| JBaseJDBCDatabaseMetaData([JBaseJDBCSocketConnection](/39228-jdbc/com_jbase_jdbc_jbasejdbcsocketconnection "class in com.jbase.jdbc") connection)<br> | <br>Constructor.<br> |




<!--   -->

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


<!--   -->

### 


## Methods inherited from class java.lang.[Object](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/Object.html?is-external=true "class or interface in java.lang")
`clone, equals, finalize, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`


## <!--   -->

## Methods inherited from interface java.sql.[DatabaseMetaData](http://java.sun.com/j2se/1.5.0/docs/api/java/sql/DatabaseMetaData.html?is-external=true "class or interface in java.sql")
`autoCommitFailureClosesAllResultSets, generatedKeyAlwaysReturned, getClientInfoProperties, getFunctionColumns, getFunctions, getMaxLogicalLobSize, getPseudoColumns, getRowIdLifetime, getSchemas, supportsRefCursors, supportsStoredFunctionsUsingCallSyntax`


## <!--   -->

## Methods inherited from interface java.sql.[Wrapper](http://java.sun.com/j2se/1.5.0/docs/api/java/sql/Wrapper.html?is-external=true "class or interface in java.sql")
`isWrapperFor, unwrap`

<!--   -->

# 


# Constructor Detail
<!--   -->
#### **JBaseJDBCDatabaseMetaData**

```
public JBaseJDBCDatabaseMetaData(JBaseJDBCSocketConnection connection)
```

Constructor.
<dl><dt style="margin-left: 40px;"><span class="paramLabel"><strong>Parameters:</strong></span></dt><dd style="margin-left: 60px;"><code>connection</code> - The connection used to retrieve the meta data</dd></dl>



<!-- ============ METHOD DETAIL ========== -->
<!--   -->

# Method Detail
<!--   -->


#### **setDbmdCatalog**

```
public void setDbmdCatalog(ResultSet rs, int numEntries)
```

Sets the database meta data catalog to be used.
<dl><dt style="margin-left: 40px;"><span class="paramLabel"><strong>Parameters:</strong></span></dt><dd style="margin-left: 60px;"><code>rs</code> - The dbmd catalog (as a ResultSet object)</dd><dd style="margin-left: 60px;"><code>numEntries</code> - number of dbmd catalog entries</dd></dl>



<!--   -->


#### **getDatabaseMajorVersion**

```
public int getDatabaseMajorVersion()
                            throws SQLException
```
<dl><dt style="margin-left: 40px;"><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd style="margin-left: 40px;"><code>getDatabaseMajorVersion</code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/DatabaseMetaData.html?is-external=true" title="class or interface in java.sql">DatabaseMetaData</a></code></dd><dt style="margin-left: 40px;"><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->


#### **getDatabaseMinorVersion**

```
public int getDatabaseMinorVersion()
                            throws SQLException
```
<dl><dt style="margin-left: 40px;"><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd style="margin-left: 40px;"><code>getDatabaseMinorVersion</code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/DatabaseMetaData.html?is-external=true" title="class or interface in java.sql">DatabaseMetaData</a></code></dd><dt style="margin-left: 40px;"><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->


#### **getDefaultTransactionIsolation**

```
public int getDefaultTransactionIsolation()
                                   throws SQLException
```
<dl><dt style="margin-left: 40px;"><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd style="margin-left: 40px;"><code>getDefaultTransactionIsolation</code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/DatabaseMetaData.html?is-external=true" title="class or interface in java.sql">DatabaseMetaData</a></code></dd><dt style="margin-left: 40px;"><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->


#### **getDriverMajorVersion**

```
public int getDriverMajorVersion()
```
<dl><dt style="margin-left: 40px;"><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd style="margin-left: 40px;"><code>getDriverMajorVersion</code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/DatabaseMetaData.html?is-external=true" title="class or interface in java.sql">DatabaseMetaData</a></code></dd></dl>

<!--   -->


#### **getDriverMinorVersion**

```
public int getDriverMinorVersion()
```
<dl><dt style="margin-left: 40px;"><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd style="margin-left: 40px;"><code>getDriverMinorVersion</code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/DatabaseMetaData.html?is-external=true" title="class or interface in java.sql">DatabaseMetaData</a></code></dd></dl>

<!--   -->


#### **getJDBCMajorVersion**

```
public int getJDBCMajorVersion()
                        throws SQLException
```
<dl><dt style="margin-left: 40px;"><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd style="margin-left: 40px;"><code>getJDBCMajorVersion</code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/DatabaseMetaData.html?is-external=true" title="class or interface in java.sql">DatabaseMetaData</a></code></dd><dt style="margin-left: 40px;"><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->


#### **getJDBCMinorVersion**

```
public int getJDBCMinorVersion()
                        throws SQLException
```
<dl><dt style="margin-left: 40px;"><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd style="margin-left: 40px;"><code>getJDBCMinorVersion</code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/DatabaseMetaData.html?is-external=true" title="class or interface in java.sql">DatabaseMetaData</a></code></dd><dt style="margin-left: 40px;"><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->


#### **getMaxBinaryLiteralLength**

```
public int getMaxBinaryLiteralLength()
                              throws SQLException
```
<dl><dt style="margin-left: 40px;"><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd style="margin-left: 40px;"><code>getMaxBinaryLiteralLength</code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/DatabaseMetaData.html?is-external=true" title="class or interface in java.sql">DatabaseMetaData</a></code></dd><dt style="margin-left: 40px;"><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->


#### **getMaxCatalogNameLength**

```
public int getMaxCatalogNameLength()
                            throws SQLException
```
<dl><dt style="margin-left: 40px;"><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd style="margin-left: 40px;"><code>getMaxCatalogNameLength</code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/DatabaseMetaData.html?is-external=true" title="class or interface in java.sql">DatabaseMetaData</a></code></dd><dt style="margin-left: 40px;"><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->


#### **getMaxCharLiteralLength**

```
public int getMaxCharLiteralLength()
                            throws SQLException
```
<dl><dt style="margin-left: 40px;"><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd style="margin-left: 40px;"><code>getMaxCharLiteralLength</code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/DatabaseMetaData.html?is-external=true" title="class or interface in java.sql">DatabaseMetaData</a></code></dd><dt style="margin-left: 40px;"><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->


#### **getMaxColumnNameLength**

```
public int getMaxColumnNameLength()
                           throws SQLException
```
<dl><dt style="margin-left: 40px;"><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd style="margin-left: 40px;"><code>getMaxColumnNameLength</code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/DatabaseMetaData.html?is-external=true" title="class or interface in java.sql">DatabaseMetaData</a></code></dd><dt style="margin-left: 40px;"><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->


#### **getMaxColumnsInGroupBy**

```
public int getMaxColumnsInGroupBy()
                           throws SQLException
```
<dl><dt style="margin-left: 40px;"><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd style="margin-left: 40px;"><code>getMaxColumnsInGroupBy</code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/DatabaseMetaData.html?is-external=true" title="class or interface in java.sql">DatabaseMetaData</a></code></dd><dt style="margin-left: 40px;"><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->


#### **getMaxColumnsInIndex**

```
public int getMaxColumnsInIndex()
                         throws SQLException
```
<dl><dt style="margin-left: 40px;"><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd style="margin-left: 40px;"><code>getMaxColumnsInIndex</code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/DatabaseMetaData.html?is-external=true" title="class or interface in java.sql">DatabaseMetaData</a></code></dd><dt style="margin-left: 40px;"><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->


#### **getMaxColumnsInOrderBy**

```
public int getMaxColumnsInOrderBy()
                           throws SQLException
```
<dl><dt style="margin-left: 40px;"><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd style="margin-left: 40px;"><code>getMaxColumnsInOrderBy</code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/DatabaseMetaData.html?is-external=true" title="class or interface in java.sql">DatabaseMetaData</a></code></dd><dt style="margin-left: 40px;"><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->


#### **getMaxColumnsInSelect**

```
public int getMaxColumnsInSelect()
                          throws SQLException
```
<dl><dt style="margin-left: 40px;"><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd style="margin-left: 40px;"><code>getMaxColumnsInSelect</code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/DatabaseMetaData.html?is-external=true" title="class or interface in java.sql">DatabaseMetaData</a></code></dd><dt style="margin-left: 40px;"><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->


#### **getMaxColumnsInTable**

```
public int getMaxColumnsInTable()
                         throws SQLException
```
<dl><dt style="margin-left: 40px;"><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd style="margin-left: 40px;"><code>getMaxColumnsInTable</code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/DatabaseMetaData.html?is-external=true" title="class or interface in java.sql">DatabaseMetaData</a></code></dd><dt style="margin-left: 40px;"><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->


#### **getMaxConnections**

```
public int getMaxConnections()
                      throws SQLException
```
<dl><dt style="margin-left: 40px;"><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd style="margin-left: 40px;"><code>getMaxConnections</code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/DatabaseMetaData.html?is-external=true" title="class or interface in java.sql">DatabaseMetaData</a></code></dd><dt style="margin-left: 40px;"><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->


#### **getMaxCursorNameLength**

```
public int getMaxCursorNameLength()
                           throws SQLException
```
<dl><dt style="margin-left: 40px;"><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd style="margin-left: 40px;"><code>getMaxCursorNameLength</code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/DatabaseMetaData.html?is-external=true" title="class or interface in java.sql">DatabaseMetaData</a></code></dd><dt style="margin-left: 40px;"><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->


#### **getMaxIndexLength**

```
public int getMaxIndexLength()
                      throws SQLException
```
<dl><dt style="margin-left: 40px;"><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd style="margin-left: 40px;"><code>getMaxIndexLength</code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/DatabaseMetaData.html?is-external=true" title="class or interface in java.sql">DatabaseMetaData</a></code></dd><dt style="margin-left: 40px;"><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->


#### **getMaxProcedureNameLength**

```
public int getMaxProcedureNameLength()
                              throws SQLException
```
<dl><dt style="margin-left: 40px;"><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd style="margin-left: 40px;"><code>getMaxProcedureNameLength</code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/DatabaseMetaData.html?is-external=true" title="class or interface in java.sql">DatabaseMetaData</a></code></dd><dt style="margin-left: 40px;"><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->


#### **getMaxRowSize**

```
public int getMaxRowSize()
                  throws SQLException
```
<dl><dt style="margin-left: 40px;"><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd style="margin-left: 40px;"><code>getMaxRowSize</code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/DatabaseMetaData.html?is-external=true" title="class or interface in java.sql">DatabaseMetaData</a></code></dd><dt style="margin-left: 40px;"><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->


#### **getMaxSchemaNameLength**

```
public int getMaxSchemaNameLength()
                           throws SQLException
```
<dl><dt style="margin-left: 40px;"><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd style="margin-left: 40px;"><code>getMaxSchemaNameLength</code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/DatabaseMetaData.html?is-external=true" title="class or interface in java.sql">DatabaseMetaData</a></code></dd><dt style="margin-left: 40px;"><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->


#### **getMaxStatementLength**

```
public int getMaxStatementLength()
                          throws SQLException
```
<dl><dt style="margin-left: 40px;"><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd style="margin-left: 40px;"><code>getMaxStatementLength</code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/DatabaseMetaData.html?is-external=true" title="class or interface in java.sql">DatabaseMetaData</a></code></dd><dt style="margin-left: 40px;"><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->


#### **getMaxStatements**

```
public int getMaxStatements()
                     throws SQLException
```
<dl><dt style="margin-left: 40px;"><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd style="margin-left: 40px;"><code>getMaxStatements</code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/DatabaseMetaData.html?is-external=true" title="class or interface in java.sql">DatabaseMetaData</a></code></dd><dt style="margin-left: 40px;"><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->


#### **getMaxTableNameLength**

```
public int getMaxTableNameLength()
                          throws SQLException
```
<dl><dt style="margin-left: 40px;"><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd style="margin-left: 40px;"><code>getMaxTableNameLength</code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/DatabaseMetaData.html?is-external=true" title="class or interface in java.sql">DatabaseMetaData</a></code></dd><dt style="margin-left: 40px;"><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->


#### **getMaxTablesInSelect**

```
public int getMaxTablesInSelect()
                         throws SQLException
```
<dl><dt style="margin-left: 40px;"><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd style="margin-left: 40px;"><code>getMaxTablesInSelect</code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/DatabaseMetaData.html?is-external=true" title="class or interface in java.sql">DatabaseMetaData</a></code></dd><dt style="margin-left: 40px;"><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

**<!--   -->**
#### **getMaxUserNameLength**

```
public int getMaxUserNameLength()
                         throws SQLException
```
<dl><dt style="margin-left: 40px;"><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd style="margin-left: 40px;"><code>getMaxUserNameLength</code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/DatabaseMetaData.html?is-external=true" title="class or interface in java.sql">DatabaseMetaData</a></code></dd><dt style="margin-left: 40px;"><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->


#### **getResultSetHoldability**

```
public int getResultSetHoldability()
                            throws SQLException
```
<dl><dt style="margin-left: 40px;"><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd style="margin-left: 40px;"><code>getResultSetHoldability</code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/DatabaseMetaData.html?is-external=true" title="class or interface in java.sql">DatabaseMetaData</a></code></dd><dt style="margin-left: 40px;"><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->


#### **getSQLStateType**

```
public int getSQLStateType()
                    throws SQLException
```
<dl><dt style="margin-left: 40px;"><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd style="margin-left: 40px;"><code>getSQLStateType</code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/DatabaseMetaData.html?is-external=true" title="class or interface in java.sql">DatabaseMetaData</a></code></dd><dt style="margin-left: 40px;"><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->


#### **allProceduresAreCallable**

```
public boolean allProceduresAreCallable()
                                 throws SQLException
```
<dl><dt style="margin-left: 40px;"><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd style="margin-left: 40px;"><code>allProceduresAreCallable</code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/DatabaseMetaData.html?is-external=true" title="class or interface in java.sql">DatabaseMetaData</a></code></dd><dt style="margin-left: 40px;"><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->


#### **allTablesAreSelectable**

```
public boolean allTablesAreSelectable()
                               throws SQLException
```
<dl><dt style="margin-left: 40px;"><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd style="margin-left: 40px;"><code>allTablesAreSelectable</code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/DatabaseMetaData.html?is-external=true" title="class or interface in java.sql">DatabaseMetaData</a></code></dd><dt style="margin-left: 40px;"><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->


#### **dataDefinitionCausesTransactionCommit**

```
public boolean dataDefinitionCausesTransactionCommit()
                                              throws SQLException
```
<dl><dt style="margin-left: 40px;"><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd style="margin-left: 40px;"><code>dataDefinitionCausesTransactionCommit</code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/DatabaseMetaData.html?is-external=true" title="class or interface in java.sql">DatabaseMetaData</a></code></dd><dt style="margin-left: 40px;"><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->


#### **dataDefinitionIgnoredInTransactions**

```
public boolean dataDefinitionIgnoredInTransactions()
                                            throws SQLException
```
<dl><dt style="margin-left: 40px;"><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd style="margin-left: 40px;"><code>dataDefinitionIgnoredInTransactions</code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/DatabaseMetaData.html?is-external=true" title="class or interface in java.sql">DatabaseMetaData</a></code></dd><dt style="margin-left: 40px;"><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->


#### **doesMaxRowSizeIncludeBlobs**

```
public boolean doesMaxRowSizeIncludeBlobs()
                                   throws SQLException
```
<dl><dt style="margin-left: 40px;"><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd style="margin-left: 40px;"><code>doesMaxRowSizeIncludeBlobs</code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/DatabaseMetaData.html?is-external=true" title="class or interface in java.sql">DatabaseMetaData</a></code></dd><dt style="margin-left: 40px;"><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->


#### **isCatalogAtStart**

```
public boolean isCatalogAtStart()
                         throws SQLException
```
<dl><dt style="margin-left: 40px;"><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd style="margin-left: 40px;"><code>isCatalogAtStart</code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/DatabaseMetaData.html?is-external=true" title="class or interface in java.sql">DatabaseMetaData</a></code></dd><dt style="margin-left: 40px;"><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->


#### **isReadOnly**

```
public boolean isReadOnly()
                   throws SQLException
```
<dl><dt style="margin-left: 40px;"><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd style="margin-left: 40px;"><code>isReadOnly</code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/DatabaseMetaData.html?is-external=true" title="class or interface in java.sql">DatabaseMetaData</a></code></dd><dt style="margin-left: 40px;"><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->


#### **locatorsUpdateCopy**

```
public boolean locatorsUpdateCopy()
                           throws SQLException
```
<dl><dt style="margin-left: 40px;"><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd style="margin-left: 40px;"><code>locatorsUpdateCopy</code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/DatabaseMetaData.html?is-external=true" title="class or interface in java.sql">DatabaseMetaData</a></code></dd><dt style="margin-left: 40px;"><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->


#### **nullPlusNonNullIsNull**

```
public boolean nullPlusNonNullIsNull()
                              throws SQLException
```
<dl><dt style="margin-left: 40px;"><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd style="margin-left: 40px;"><code>nullPlusNonNullIsNull</code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/DatabaseMetaData.html?is-external=true" title="class or interface in java.sql">DatabaseMetaData</a></code></dd><dt style="margin-left: 40px;"><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd><dt style="margin-left: 40px;"><br><span class="seeLabel"><strong>See Also:</strong></span></dt><dd style="margin-left: 40px;"><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/DatabaseMetaData.html?is-external=true#nullPlusNonNullIsNull--" title="class or interface in java.sql"><code>DatabaseMetaData.nullPlusNonNullIsNull()</code></a></dd></dl>

<!--   -->


#### **nullsAreSortedAtEnd**

```
public boolean nullsAreSortedAtEnd()
                            throws SQLException
```
<dl><dt style="margin-left: 40px;"><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd style="margin-left: 40px;"><code>nullsAreSortedAtEnd</code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/DatabaseMetaData.html?is-external=true" title="class or interface in java.sql">DatabaseMetaData</a></code></dd><dt style="margin-left: 40px;"><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->


#### **nullsAreSortedAtStart**

```
public boolean nullsAreSortedAtStart()
                              throws SQLException
```
<dl><dt style="margin-left: 40px;"><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd style="margin-left: 40px;"><code>nullsAreSortedAtStart</code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/DatabaseMetaData.html?is-external=true" title="class or interface in java.sql">DatabaseMetaData</a></code></dd><dt style="margin-left: 40px;"><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->


#### **nullsAreSortedHigh**

```
public boolean nullsAreSortedHigh()
                           throws SQLException
```
<dl><dt style="margin-left: 40px;"><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd style="margin-left: 40px;"><code>nullsAreSortedHigh</code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/DatabaseMetaData.html?is-external=true" title="class or interface in java.sql">DatabaseMetaData</a></code></dd><dt style="margin-left: 40px;"><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->


#### **nullsAreSortedLow**

```
public boolean nullsAreSortedLow()
                          throws SQLException
```
<dl><dt style="margin-left: 40px;"><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd style="margin-left: 40px;"><code>nullsAreSortedLow</code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/DatabaseMetaData.html?is-external=true" title="class or interface in java.sql">DatabaseMetaData</a></code></dd><dt style="margin-left: 40px;"><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->


#### **storesLowerCaseIdentifiers**

```
public boolean storesLowerCaseIdentifiers()
                                   throws SQLException
```
<dl><dt style="margin-left: 40px;"><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd style="margin-left: 40px;"><code>storesLowerCaseIdentifiers</code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/DatabaseMetaData.html?is-external=true" title="class or interface in java.sql">DatabaseMetaData</a></code></dd><dt style="margin-left: 40px;"><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->


#### **storesLowerCaseQuotedIdentifiers**

```
public boolean storesLowerCaseQuotedIdentifiers()
                                         throws SQLException
```
<dl><dt style="margin-left: 40px;"><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd style="margin-left: 40px;"><code>storesLowerCaseQuotedIdentifiers</code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/DatabaseMetaData.html?is-external=true" title="class or interface in java.sql">DatabaseMetaData</a></code></dd><dt style="margin-left: 40px;"><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->


#### **storesMixedCaseIdentifiers**

```
public boolean storesMixedCaseIdentifiers()
                                   throws SQLException
```
<dl><dt style="margin-left: 40px;"><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd style="margin-left: 40px;"><code>storesMixedCaseIdentifiers</code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/DatabaseMetaData.html?is-external=true" title="class or interface in java.sql">DatabaseMetaData</a></code></dd><dt style="margin-left: 40px;"><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->


#### **storesMixedCaseQuotedIdentifiers**

```
public boolean storesMixedCaseQuotedIdentifiers()
                                         throws SQLException
```
<dl><dt style="margin-left: 40px;"><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd style="margin-left: 40px;"><code>storesMixedCaseQuotedIdentifiers</code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/DatabaseMetaData.html?is-external=true" title="class or interface in java.sql">DatabaseMetaData</a></code></dd><dt style="margin-left: 40px;"><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->


#### **storesUpperCaseIdentifiers**

```
public boolean storesUpperCaseIdentifiers()
                                   throws SQLException
```
<dl><dt style="margin-left: 40px;"><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd style="margin-left: 40px;"><code>storesUpperCaseIdentifiers</code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/DatabaseMetaData.html?is-external=true" title="class or interface in java.sql">DatabaseMetaData</a></code></dd><dt style="margin-left: 40px;"><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->


#### **storesUpperCaseQuotedIdentifiers**

```
public boolean storesUpperCaseQuotedIdentifiers()
                                         throws SQLException
```
<dl><dt style="margin-left: 40px;"><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd style="margin-left: 40px;"><code>storesUpperCaseQuotedIdentifiers</code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/DatabaseMetaData.html?is-external=true" title="class or interface in java.sql">DatabaseMetaData</a></code></dd><dt style="margin-left: 40px;"><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->


#### **supportsANSI92EntryLevelSQL**

```
public boolean supportsANSI92EntryLevelSQL()
                                    throws SQLException
```
<dl><dt style="margin-left: 40px;"><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd style="margin-left: 40px;"><code>supportsANSI92EntryLevelSQL</code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/DatabaseMetaData.html?is-external=true" title="class or interface in java.sql">DatabaseMetaData</a></code></dd><dt style="margin-left: 40px;"><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->


#### **supportsANSI92FullSQL**

```
public boolean supportsANSI92FullSQL()
                              throws SQLException
```
<dl><dt style="margin-left: 40px;"><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd style="margin-left: 40px;"><code>supportsANSI92FullSQL</code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/DatabaseMetaData.html?is-external=true" title="class or interface in java.sql">DatabaseMetaData</a></code></dd><dt style="margin-left: 40px;"><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->


#### **supportsANSI92IntermediateSQL**

```
public boolean supportsANSI92IntermediateSQL()
                                      throws SQLException
```
<dl><dt style="margin-left: 40px;"><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd style="margin-left: 40px;"><code>supportsANSI92IntermediateSQL</code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/DatabaseMetaData.html?is-external=true" title="class or interface in java.sql">DatabaseMetaData</a></code></dd><dt style="margin-left: 40px;"><br><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->


#### supportsAlterTableWithAddColumn

```
public boolean supportsAlterTableWithAddColumn()
                                        throws SQLException
```
<dl><dt style="margin-left: 40px;"><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd style="margin-left: 40px;"><code>supportsAlterTableWithAddColumn</code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/DatabaseMetaData.html?is-external=true" title="class or interface in java.sql">DatabaseMetaData</a></code></dd><dt style="margin-left: 40px;"><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->


#### **supportsAlterTableWithDropColumn**

```
public boolean supportsAlterTableWithDropColumn()
                                         throws SQLException
```
<dl><dt style="margin-left: 40px;"><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd style="margin-left: 40px;"><code>supportsAlterTableWithDropColumn</code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/DatabaseMetaData.html?is-external=true" title="class or interface in java.sql">DatabaseMetaData</a></code></dd><dt style="margin-left: 40px;"><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->


#### **supportsBatchUpdates**

```
public boolean supportsBatchUpdates()
                             throws SQLException
```
<dl><dt style="margin-left: 40px;"><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd style="margin-left: 40px;"><code>supportsBatchUpdates</code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/DatabaseMetaData.html?is-external=true" title="class or interface in java.sql">DatabaseMetaData</a></code></dd><dt style="margin-left: 40px;"><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->


#### **supportsCatalogsInDataManipulation**

```
public boolean supportsCatalogsInDataManipulation()
                                           throws SQLException
```
<dl><dt style="margin-left: 40px;"><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd style="margin-left: 40px;"><code>supportsCatalogsInDataManipulation</code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/DatabaseMetaData.html?is-external=true" title="class or interface in java.sql">DatabaseMetaData</a></code></dd><dt style="margin-left: 40px;"><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->


#### **supportsCatalogsInIndexDefinitions**

```
public boolean supportsCatalogsInIndexDefinitions()
                                           throws SQLException
```
<dl><dt style="margin-left: 40px;"><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd style="margin-left: 40px;"><code>supportsCatalogsInIndexDefinitions</code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/DatabaseMetaData.html?is-external=true" title="class or interface in java.sql">DatabaseMetaData</a></code></dd><dt style="margin-left: 40px;"><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->


#### **supportsCatalogsInPrivilegeDefinitions**

```
public boolean supportsCatalogsInPrivilegeDefinitions()
                                               throws SQLException
```
<dl><dt style="margin-left: 40px;"><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd style="margin-left: 40px;"><code>supportsCatalogsInPrivilegeDefinitions</code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/DatabaseMetaData.html?is-external=true" title="class or interface in java.sql">DatabaseMetaData</a></code></dd><dt style="margin-left: 40px;"><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->


#### **supportsCatalogsInProcedureCalls**

```
public boolean supportsCatalogsInProcedureCalls()
                                         throws SQLException
```
<dl><dt style="margin-left: 40px;"><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd style="margin-left: 40px;"><code>supportsCatalogsInProcedureCalls</code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/DatabaseMetaData.html?is-external=true" title="class or interface in java.sql">DatabaseMetaData</a></code></dd><dt style="margin-left: 40px;"><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->


#### **supportsCatalogsInTableDefinitions**

```
public boolean supportsCatalogsInTableDefinitions()
                                           throws SQLException
```
<dl><dt style="margin-left: 40px;"><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd style="margin-left: 40px;"><code>supportsCatalogsInTableDefinitions</code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/DatabaseMetaData.html?is-external=true" title="class or interface in java.sql">DatabaseMetaData</a></code></dd><dt style="margin-left: 40px;"><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->


#### **supportsColumnAliasing**

```
public boolean supportsColumnAliasing()
                               throws SQLException
```

Retrieves whether this database supports column aliasing. If so, the SQL AS clause can be used to provide names for computed columns or to provide alias names for columns as required.
<dl><dt style="margin-left: 40px;"><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd style="margin-left: 40px;"><code>supportsColumnAliasing</code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/DatabaseMetaData.html?is-external=true" title="class or interface in java.sql">DatabaseMetaData</a></code></dd><dt style="margin-left: 40px;"><br><span class="returnLabel"><strong>Returns:</strong></span></dt><dd style="margin-left: 40px;">true if so; false otherwise</dd><dt style="margin-left: 40px;"><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code> - if a database access error occurs</dd></dl>

<!--   -->


#### **supportsConvert**

```
public boolean supportsConvert()
                        throws SQLException
```
<dl><dt style="margin-left: 40px;"><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd style="margin-left: 40px;"><code>supportsConvert</code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/DatabaseMetaData.html?is-external=true" title="class or interface in java.sql">DatabaseMetaData</a></code></dd><dt style="margin-left: 40px;"><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->


#### **supportsCoreSQLGrammar**

```
public boolean supportsCoreSQLGrammar()
                               throws SQLException
```
<dl><dt style="margin-left: 40px;"><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd style="margin-left: 40px;"><code>supportsCoreSQLGrammar</code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/DatabaseMetaData.html?is-external=true" title="class or interface in java.sql">DatabaseMetaData</a></code></dd><dt style="margin-left: 40px;"><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->


#### **supportsCorrelatedSubqueries**

```
public boolean supportsCorrelatedSubqueries()
                                     throws SQLException
```
<dl><dt style="margin-left: 40px;"><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd style="margin-left: 40px;"><code>supportsCorrelatedSubqueries</code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/DatabaseMetaData.html?is-external=true" title="class or interface in java.sql">DatabaseMetaData</a></code></dd><dt style="margin-left: 40px;"><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->


#### **supportsDataDefinitionAndDataManipulationTransactions**

```
public boolean supportsDataDefinitionAndDataManipulationTransactions()
                                                              throws SQLException
```
<dl><dt style="margin-left: 40px;"><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd style="margin-left: 40px;"><code>supportsDataDefinitionAndDataManipulationTransactions</code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/DatabaseMetaData.html?is-external=true" title="class or interface in java.sql">DatabaseMetaData</a></code></dd><dt style="margin-left: 40px;"><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->


#### **supportsDataManipulationTransactionsOnly**

```
public boolean supportsDataManipulationTransactionsOnly()
                                                 throws SQLException
```
<dl><dt style="margin-left: 40px;"><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd style="margin-left: 40px;"><code>supportsDataManipulationTransactionsOnly</code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/DatabaseMetaData.html?is-external=true" title="class or interface in java.sql">DatabaseMetaData</a></code></dd><dt style="margin-left: 40px;"><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->


#### **supportsDifferentTableCorrelationNames**

```
public boolean supportsDifferentTableCorrelationNames()
                                               throws SQLException
```
<dl><dt style="margin-left: 40px;"><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd style="margin-left: 40px;"><code>supportsDifferentTableCorrelationNames</code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/DatabaseMetaData.html?is-external=true" title="class or interface in java.sql">DatabaseMetaData</a></code></dd><dt style="margin-left: 40px;"><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->


#### **supportsExpressionsInOrderBy**

```
public boolean supportsExpressionsInOrderBy()
                                     throws SQLException
```
<dl><dt style="margin-left: 40px;"><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd style="margin-left: 40px;"><code>supportsExpressionsInOrderBy</code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/DatabaseMetaData.html?is-external=true" title="class or interface in java.sql">DatabaseMetaData</a></code></dd><dt style="margin-left: 40px;"><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->


#### **supportsExtendedSQLGrammar**

```
public boolean supportsExtendedSQLGrammar()
                                   throws SQLException
```
<dl><dt style="margin-left: 40px;"><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd style="margin-left: 40px;"><code>supportsExtendedSQLGrammar</code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/DatabaseMetaData.html?is-external=true" title="class or interface in java.sql">DatabaseMetaData</a></code></dd><dt style="margin-left: 40px;"><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->


#### **supportsFullOuterJoins**

```
public boolean supportsFullOuterJoins()
                               throws SQLException
```
<dl><dt style="margin-left: 40px;"><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd style="margin-left: 40px;"><code>supportsFullOuterJoins</code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/DatabaseMetaData.html?is-external=true" title="class or interface in java.sql">DatabaseMetaData</a></code></dd><dt style="margin-left: 40px;"><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->


#### **supportsGetGeneratedKeys**

```
public boolean supportsGetGeneratedKeys()
                                 throws SQLException
```
<dl><dt style="margin-left: 40px;"><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd style="margin-left: 40px;"><code>supportsGetGeneratedKeys</code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/DatabaseMetaData.html?is-external=true" title="class or interface in java.sql">DatabaseMetaData</a></code></dd><dt style="margin-left: 40px;"><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->


#### **supportsGroupBy**

```
public boolean supportsGroupBy()
                        throws SQLException
```
<dl><dt style="margin-left: 40px;"><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd style="margin-left: 40px;"><code>supportsGroupBy</code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/DatabaseMetaData.html?is-external=true" title="class or interface in java.sql">DatabaseMetaData</a></code></dd><dt style="margin-left: 40px;"><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->


#### **supportsGroupByBeyondSelect**

```
public boolean supportsGroupByBeyondSelect()
                                    throws SQLException
```
<dl><dt style="margin-left: 40px;"><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd style="margin-left: 40px;"><code>supportsGroupByBeyondSelect</code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/DatabaseMetaData.html?is-external=true" title="class or interface in java.sql">DatabaseMetaData</a></code></dd><dt style="margin-left: 40px;"><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->


#### **supportsGroupByUnrelated**

```
public boolean supportsGroupByUnrelated()
                                 throws SQLException
```
<dl><dt style="margin-left: 40px;"><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd style="margin-left: 40px;"><code>supportsGroupByUnrelated</code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/DatabaseMetaData.html?is-external=true" title="class or interface in java.sql">DatabaseMetaData</a></code></dd><dt style="margin-left: 40px;"><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->


#### **supportsIntegrityEnhancementFacility**

```
public boolean supportsIntegrityEnhancementFacility()
                                             throws SQLException
```
<dl><dt style="margin-left: 40px;"><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd style="margin-left: 40px;"><code>supportsIntegrityEnhancementFacility</code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/DatabaseMetaData.html?is-external=true" title="class or interface in java.sql">DatabaseMetaData</a></code></dd><dt style="margin-left: 40px;"><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->


#### **supportsLikeEscapeClause**

```
public boolean supportsLikeEscapeClause()
                                 throws SQLException
```
<dl><dt style="margin-left: 40px;"><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd style="margin-left: 40px;"><code>supportsLikeEscapeClause</code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/DatabaseMetaData.html?is-external=true" title="class or interface in java.sql">DatabaseMetaData</a></code></dd><dt style="margin-left: 40px;"><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->


#### **supportsLimitedOuterJoins**

```
public boolean supportsLimitedOuterJoins()
                                  throws SQLException
```
<dl><dt style="margin-left: 40px;"><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd style="margin-left: 40px;"><code>supportsLimitedOuterJoins</code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/DatabaseMetaData.html?is-external=true" title="class or interface in java.sql">DatabaseMetaData</a></code></dd><dt style="margin-left: 40px;"><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->


#### **supportsMinimumSQLGrammar**

```
public boolean supportsMinimumSQLGrammar()
                                  throws SQLException
```
<dl><dt style="margin-left: 40px;"><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd style="margin-left: 40px;"><code>supportsMinimumSQLGrammar</code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/DatabaseMetaData.html?is-external=true" title="class or interface in java.sql">DatabaseMetaData</a></code></dd><dt style="margin-left: 40px;"><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->


#### **supportsMixedCaseIdentifiers**

```
public boolean supportsMixedCaseIdentifiers()
                                     throws SQLException
```
<dl><dt style="margin-left: 40px;"><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd style="margin-left: 40px;"><code>supportsMixedCaseIdentifiers</code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/DatabaseMetaData.html?is-external=true" title="class or interface in java.sql">DatabaseMetaData</a></code></dd><dt style="margin-left: 40px;"><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->


#### **supportsMixedCaseQuotedIdentifiers**

```
public boolean supportsMixedCaseQuotedIdentifiers()
                                           throws SQLException
```
<dl><dt style="margin-left: 40px;"><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd style="margin-left: 40px;"><code>supportsMixedCaseQuotedIdentifiers</code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/DatabaseMetaData.html?is-external=true" title="class or interface in java.sql">DatabaseMetaData</a></code></dd><dt style="margin-left: 40px;"><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->


#### **supportsMultipleOpenResults**

```
public boolean supportsMultipleOpenResults()
                                    throws SQLException
```
<dl><dt style="margin-left: 40px;"><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd style="margin-left: 40px;"><code>supportsMultipleOpenResults</code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/DatabaseMetaData.html?is-external=true" title="class or interface in java.sql">DatabaseMetaData</a></code></dd><dt style="margin-left: 40px;"><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->


#### **supportsMultipleResultSets**

```
public boolean supportsMultipleResultSets()
                                   throws SQLException
```
<dl><dt style="margin-left: 40px;"><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd style="margin-left: 40px;"><code>supportsMultipleResultSets</code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/DatabaseMetaData.html?is-external=true" title="class or interface in java.sql">DatabaseMetaData</a></code></dd><dt style="margin-left: 40px;"><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->


#### **supportsMultipleTransactions**

```
public boolean supportsMultipleTransactions()
                                     throws SQLException
```

Retrieves whether this database allows having multiple transactions open at once (on different connections).
<dl><dt style="margin-left: 40px;"><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd style="margin-left: 40px;"><code>supportsMultipleTransactions</code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/DatabaseMetaData.html?is-external=true" title="class or interface in java.sql">DatabaseMetaData</a></code></dd><dt style="margin-left: 40px;"><br><span class="returnLabel"><strong>Returns:</strong></span></dt><dd style="margin-left: 40px;">true if so; false otherwise</dd><dt style="margin-left: 40px;"><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code> - - if a database access error occurs</dd><dt style="margin-left: 40px;"><br><span class="seeLabel"><strong>See Also:</strong></span></dt><dd style="margin-left: 40px;"><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/DatabaseMetaData.html?is-external=true#supportsMultipleTransactions--" title="class or interface in java.sql"><code>DatabaseMetaData.supportsMultipleTransactions()</code></a></dd></dl>

<!--   -->


#### **supportsNamedParameters**

```
public boolean supportsNamedParameters()
                                throws SQLException
```
<dl><dt style="margin-left: 40px;"><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd style="margin-left: 40px;"><code>supportsNamedParameters</code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/DatabaseMetaData.html?is-external=true" title="class or interface in java.sql">DatabaseMetaData</a></code></dd><dt style="margin-left: 40px;"><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->


#### **supportsNonNullableColumns**

```
public boolean supportsNonNullableColumns()
                                   throws SQLException
```
<dl><dt style="margin-left: 40px;"><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd style="margin-left: 40px;"><code>supportsNonNullableColumns</code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/DatabaseMetaData.html?is-external=true" title="class or interface in java.sql">DatabaseMetaData</a></code></dd><dt style="margin-left: 40px;"><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->


#### **supportsOpenCursorsAcrossCommit**

```
public boolean supportsOpenCursorsAcrossCommit()
                                        throws SQLException
```
<dl><dt style="margin-left: 40px;"><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd style="margin-left: 40px;"><code>supportsOpenCursorsAcrossCommit</code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/DatabaseMetaData.html?is-external=true" title="class or interface in java.sql">DatabaseMetaData</a></code></dd><dt style="margin-left: 40px;"><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->


#### supportsOpenCursorsAcrossRollback

```
public boolean supportsOpenCursorsAcrossRollback()
                                          throws SQLException
```
<dl><dt style="margin-left: 40px;"><span class="overrideSpecifyLabel">Specified by:</span></dt><dd style="margin-left: 40px;"><code>supportsOpenCursorsAcrossRollback</code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/DatabaseMetaData.html?is-external=true" title="class or interface in java.sql">DatabaseMetaData</a></code></dd><dt style="margin-left: 40px;"><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->


#### **supportsOpenStatementsAcrossCommit**

```
public boolean supportsOpenStatementsAcrossCommit()
                                           throws SQLException
```
<dl><dt style="margin-left: 40px;"><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd style="margin-left: 40px;"><code>supportsOpenStatementsAcrossCommit</code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/DatabaseMetaData.html?is-external=true" title="class or interface in java.sql">DatabaseMetaData</a></code></dd><dt style="margin-left: 40px;"><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->


#### **supportsOpenStatementsAcrossRollback**

```
public boolean supportsOpenStatementsAcrossRollback()
                                             throws SQLException
```
<dl><dt style="margin-left: 40px;"><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd style="margin-left: 40px;"><code>supportsOpenStatementsAcrossRollback</code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/DatabaseMetaData.html?is-external=true" title="class or interface in java.sql">DatabaseMetaData</a></code></dd><dt style="margin-left: 40px;"><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->


#### **supportsOrderByUnrelated**

```
public boolean supportsOrderByUnrelated()
                                 throws SQLException
```
<dl><dt style="margin-left: 40px;"><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd style="margin-left: 40px;"><code>supportsOrderByUnrelated</code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/DatabaseMetaData.html?is-external=true" title="class or interface in java.sql">DatabaseMetaData</a></code></dd><dt style="margin-left: 40px;"><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->


#### supportsOuterJoins

```
public boolean supportsOuterJoins()
                           throws SQLException
```
<dl><dt style="margin-left: 40px;"><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd style="margin-left: 40px;"><code>supportsOuterJoins</code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/DatabaseMetaData.html?is-external=true" title="class or interface in java.sql">DatabaseMetaData</a></code></dd><dt style="margin-left: 40px;"><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->


#### **supportsPositionedDelete**

```
public boolean supportsPositionedDelete()
                                 throws SQLException
```
<dl><dt style="margin-left: 40px;"><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd style="margin-left: 40px;"><code>supportsPositionedDelete</code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/DatabaseMetaData.html?is-external=true" title="class or interface in java.sql">DatabaseMetaData</a></code></dd><dt style="margin-left: 40px;"><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->


#### **supportsPositionedUpdate**

```
public boolean supportsPositionedUpdate()
                                 throws SQLException
```
<dl><dt style="margin-left: 40px;"><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd style="margin-left: 40px;"><code>supportsPositionedUpdate</code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/DatabaseMetaData.html?is-external=true" title="class or interface in java.sql">DatabaseMetaData</a></code></dd><dt style="margin-left: 40px;"><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->


#### **supportsSavepoints**

```
public boolean supportsSavepoints()
                           throws SQLException
```
<dl><dt style="margin-left: 40px;"><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd style="margin-left: 40px;"><code>supportsSavepoints</code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/DatabaseMetaData.html?is-external=true" title="class or interface in java.sql">DatabaseMetaData</a></code></dd><dt style="margin-left: 40px;"><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->


#### **supportsSchemasInDataManipulation**

```
public boolean supportsSchemasInDataManipulation()
                                          throws SQLException
```
<dl><dt style="margin-left: 40px;"><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd style="margin-left: 40px;"><code>supportsSchemasInDataManipulation</code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/DatabaseMetaData.html?is-external=true" title="class or interface in java.sql">DatabaseMetaData</a></code></dd><dt style="margin-left: 40px;"><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->


#### **supportsSchemasInIndexDefinitions**

```
public boolean supportsSchemasInIndexDefinitions()
                                          throws SQLException
```
<dl><dt style="margin-left: 40px;"><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd style="margin-left: 40px;"><code>supportsSchemasInIndexDefinitions</code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/DatabaseMetaData.html?is-external=true" title="class or interface in java.sql">DatabaseMetaData</a></code></dd><dt style="margin-left: 40px;"><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->


#### **supportsSchemasInPrivilegeDefinitions**

```
public boolean supportsSchemasInPrivilegeDefinitions()
                                              throws SQLException
```
<dl><dt style="margin-left: 40px;"><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd style="margin-left: 40px;"><code>supportsSchemasInPrivilegeDefinitions</code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/DatabaseMetaData.html?is-external=true" title="class or interface in java.sql">DatabaseMetaData</a></code></dd><dt style="margin-left: 40px;"><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->


#### **supportsSchemasInProcedureCalls**

```
public boolean supportsSchemasInProcedureCalls()
                                        throws SQLException
```
<dl><dt style="margin-left: 40px;"><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd style="margin-left: 40px;"><code>supportsSchemasInProcedureCalls</code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/DatabaseMetaData.html?is-external=true" title="class or interface in java.sql">DatabaseMetaData</a></code></dd><dt style="margin-left: 40px;"><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->


#### **supportsSchemasInTableDefinitions**

```
public boolean supportsSchemasInTableDefinitions()
                                          throws SQLException
```
<dl><dt style="margin-left: 40px;"><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd style="margin-left: 40px;"><code>supportsSchemasInTableDefinitions</code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/DatabaseMetaData.html?is-external=true" title="class or interface in java.sql">DatabaseMetaData</a></code></dd><dt style="margin-left: 40px;"><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->


#### **supportsSelectForUpdate**

```
public boolean supportsSelectForUpdate()
                                throws SQLException
```
<dl><dt style="margin-left: 40px;"><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd style="margin-left: 40px;"><code>supportsSelectForUpdate</code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/DatabaseMetaData.html?is-external=true" title="class or interface in java.sql">DatabaseMetaData</a></code></dd><dt style="margin-left: 40px;"><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->


#### **supportsStatementPooling**

```
public boolean supportsStatementPooling()
                                 throws SQLException
```
<dl><dt style="margin-left: 40px;"><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd style="margin-left: 40px;"><code>supportsStatementPooling</code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/DatabaseMetaData.html?is-external=true" title="class or interface in java.sql">DatabaseMetaData</a></code></dd><dt style="margin-left: 40px;"><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->


#### **supportsStoredProcedures**

```
public boolean supportsStoredProcedures()
                                 throws SQLException
```
<dl><dt style="margin-left: 40px;"><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd style="margin-left: 40px;"><code>supportsStoredProcedures</code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/DatabaseMetaData.html?is-external=true" title="class or interface in java.sql">DatabaseMetaData</a></code></dd><dt style="margin-left: 40px;"><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd><dt style="margin-left: 40px;"><br><span class="seeLabel"><strong>See Also:</strong></span></dt><dd style="margin-left: 40px;"><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/DatabaseMetaData.html?is-external=true#supportsStoredProcedures--" title="class or interface in java.sql"><code>DatabaseMetaData.supportsStoredProcedures()</code></a></dd></dl>

<!--   -->


#### **supportsSubqueriesInComparisons**

```
public boolean supportsSubqueriesInComparisons()
                                        throws SQLException
```
<dl><dt style="margin-left: 40px;"><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd style="margin-left: 40px;"><code>supportsSubqueriesInComparisons</code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/DatabaseMetaData.html?is-external=true" title="class or interface in java.sql">DatabaseMetaData</a></code></dd><dt style="margin-left: 40px;"><br><span class="throwsLabel">Throws:</span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->


#### **supportsSubqueriesInExists**

```
public boolean supportsSubqueriesInExists()
                                   throws SQLException
```
<dl><dt style="margin-left: 40px;"><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd style="margin-left: 40px;"><code>supportsSubqueriesInExists</code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/DatabaseMetaData.html?is-external=true" title="class or interface in java.sql">DatabaseMetaData</a></code></dd><dt style="margin-left: 40px;"><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->


#### **supportsSubqueriesInIns**

```
public boolean supportsSubqueriesInIns()
                                throws SQLException
```
<dl><dt style="margin-left: 40px;"><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd style="margin-left: 40px;"><code>supportsSubqueriesInIns</code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/DatabaseMetaData.html?is-external=true" title="class or interface in java.sql">DatabaseMetaData</a></code></dd><dt style="margin-left: 40px;"><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->


#### **supportsSubqueriesInQuantifieds**

```
public boolean supportsSubqueriesInQuantifieds()
                                        throws SQLException
```
<dl><dt style="margin-left: 40px;"><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd style="margin-left: 40px;"><code>supportsSubqueriesInQuantifieds</code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/DatabaseMetaData.html?is-external=true" title="class or interface in java.sql">DatabaseMetaData</a></code></dd><dt style="margin-left: 40px;"><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->


#### **supportsTableCorrelationNames**

```
public boolean supportsTableCorrelationNames()
                                      throws SQLException
```
<dl><dt style="margin-left: 40px;"><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd style="margin-left: 40px;"><code>supportsTableCorrelationNames</code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/DatabaseMetaData.html?is-external=true" title="class or interface in java.sql">DatabaseMetaData</a></code></dd><dt style="margin-left: 40px;"><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->


#### **supportsTransactions**

```
public boolean supportsTransactions()
                             throws SQLException
```
<dl><dt style="margin-left: 40px;"><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd style="margin-left: 40px;"><code>supportsTransactions</code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/DatabaseMetaData.html?is-external=true" title="class or interface in java.sql">DatabaseMetaData</a></code></dd><dt style="margin-left: 40px;"><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->


#### **supportsUnion**

```
public boolean supportsUnion()
                      throws SQLException
```
<dl><dt style="margin-left: 40px;"><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd style="margin-left: 40px;"><code>supportsUnion</code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/DatabaseMetaData.html?is-external=true" title="class or interface in java.sql">DatabaseMetaData</a></code></dd><dt style="margin-left: 40px;"><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->


#### **supportsUnionAll**

```
public boolean supportsUnionAll()
                         throws SQLException
```
<dl><dt style="margin-left: 40px;"><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd style="margin-left: 40px;"><code>supportsUnionAll</code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/DatabaseMetaData.html?is-external=true" title="class or interface in java.sql">DatabaseMetaData</a></code></dd><dt style="margin-left: 40px;"><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->


#### **usesLocalFilePerTable**

```
public boolean usesLocalFilePerTable()
                              throws SQLException
```
<dl><dt style="margin-left: 40px;"><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd style="margin-left: 40px;"><code>usesLocalFilePerTable</code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/DatabaseMetaData.html?is-external=true" title="class or interface in java.sql">DatabaseMetaData</a></code></dd><dt style="margin-left: 40px;"><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->


#### **usesLocalFiles**

```
public boolean usesLocalFiles()
                       throws SQLException
```
<dl><dt style="margin-left: 40px;"><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd style="margin-left: 40px;"><code>usesLocalFiles</code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/DatabaseMetaData.html?is-external=true" title="class or interface in java.sql">DatabaseMetaData</a></code></dd><dt style="margin-left: 40px;"><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->


#### **deletesAreDetected**

```
public boolean deletesAreDetected(int type)
                           throws SQLException
```
<dl><dt style="margin-left: 40px;"><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd style="margin-left: 40px;"><code>deletesAreDetected</code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/DatabaseMetaData.html?is-external=true" title="class or interface in java.sql">DatabaseMetaData</a></code></dd><dt style="margin-left: 40px;"><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->


#### **insertsAreDetected**

```
public boolean insertsAreDetected(int type)
                           throws SQLException
```
<dl><dt style="margin-left: 40px;"><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd style="margin-left: 40px;"><code>insertsAreDetected</code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/DatabaseMetaData.html?is-external=true" title="class or interface in java.sql">DatabaseMetaData</a></code></dd><dt style="margin-left: 40px;"><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->


#### **othersDeletesAreVisible**

```
public boolean othersDeletesAreVisible(int type)
                                throws SQLException
```
<dl><dt style="margin-left: 40px;"><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd style="margin-left: 40px;"><code>othersDeletesAreVisible</code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/DatabaseMetaData.html?is-external=true" title="class or interface in java.sql">DatabaseMetaData</a></code></dd><dt style="margin-left: 40px;"><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->


#### **othersInsertsAreVisible**

```
public boolean othersInsertsAreVisible(int type)
                                throws SQLException
```
<dl><dt style="margin-left: 40px;"><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd style="margin-left: 40px;"><code>othersInsertsAreVisible</code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/DatabaseMetaData.html?is-external=true" title="class or interface in java.sql">DatabaseMetaData</a></code></dd><dt style="margin-left: 40px;"><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->


#### **othersUpdatesAreVisible**

```
public boolean othersUpdatesAreVisible(int type)
                                throws SQLException
```
<dl><dt style="margin-left: 40px;"><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd style="margin-left: 40px;"><code>othersUpdatesAreVisible</code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/DatabaseMetaData.html?is-external=true" title="class or interface in java.sql">DatabaseMetaData</a></code></dd><dt style="margin-left: 40px;"><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->


#### **ownDeletesAreVisible**

```
public boolean ownDeletesAreVisible(int type)
                             throws SQLException
```
<dl><dt style="margin-left: 40px;"><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd style="margin-left: 40px;"><code>ownDeletesAreVisible</code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/DatabaseMetaData.html?is-external=true" title="class or interface in java.sql">DatabaseMetaData</a></code></dd><dt style="margin-left: 40px;"><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->


#### **ownInsertsAreVisible**

```
public boolean ownInsertsAreVisible(int type)
                             throws SQLException
```
<dl><dt style="margin-left: 40px;"><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd style="margin-left: 40px;"><code>ownInsertsAreVisible</code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/DatabaseMetaData.html?is-external=true" title="class or interface in java.sql">DatabaseMetaData</a></code></dd><dt style="margin-left: 40px;"><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->


#### ownUpdatesAreVisible

```
public boolean ownUpdatesAreVisible(int type)
                             throws SQLException
```
<dl><dt style="margin-left: 40px;"><span class="overrideSpecifyLabel">Specified by:</span></dt><dd style="margin-left: 40px;"><code>ownUpdatesAreVisible</code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/DatabaseMetaData.html?is-external=true" title="class or interface in java.sql">DatabaseMetaData</a></code></dd><dt style="margin-left: 40px;"><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->


#### **supportsResultSetHoldability**

```
public boolean supportsResultSetHoldability(int holdability)
                                     throws SQLException
```
<dl><dt style="margin-left: 40px;"><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd style="margin-left: 40px;"><code>supportsResultSetHoldability</code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/DatabaseMetaData.html?is-external=true" title="class or interface in java.sql">DatabaseMetaData</a></code></dd><dt style="margin-left: 40px;"><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->


#### **supportsResultSetType**

```
public boolean supportsResultSetType(int type)
                              throws SQLException
```
<dl><dt style="margin-left: 40px;"><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd style="margin-left: 40px;"><code>supportsResultSetType</code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/DatabaseMetaData.html?is-external=true" title="class or interface in java.sql">DatabaseMetaData</a></code></dd><dt style="margin-left: 40px;"><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->


#### **supportsTransactionIsolationLevel**

```
public boolean supportsTransactionIsolationLevel(int level)
                                          throws SQLException
```
<dl><dt style="margin-left: 40px;"><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd style="margin-left: 40px;"><code>supportsTransactionIsolationLevel</code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/DatabaseMetaData.html?is-external=true" title="class or interface in java.sql">DatabaseMetaData</a></code></dd><dt style="margin-left: 40px;"><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->


#### **updatesAreDetected**

```
public boolean updatesAreDetected(int type)
                           throws SQLException
```
<dl><dt style="margin-left: 40px;"><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd style="margin-left: 40px;"><code>updatesAreDetected</code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/DatabaseMetaData.html?is-external=true" title="class or interface in java.sql">DatabaseMetaData</a></code></dd><dt style="margin-left: 40px;"><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->


#### **supportsConvert**

```
public boolean supportsConvert(int fromType, int toType)
                        throws SQLException
```
<dl><dt style="margin-left: 40px;"><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd style="margin-left: 40px;"><code>supportsConvert</code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/DatabaseMetaData.html?is-external=true" title="class or interface in java.sql">DatabaseMetaData</a></code></dd><dt style="margin-left: 40px;"><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->


#### supportsResultSetConcurrency

```
public boolean supportsResultSetConcurrency(int type, int concurrency)
                                     throws SQLException
```
<dl><dt style="margin-left: 40px;"><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd style="margin-left: 40px;"><code>supportsResultSetConcurrency</code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/DatabaseMetaData.html?is-external=true" title="class or interface in java.sql">DatabaseMetaData</a></code></dd><dt style="margin-left: 40px;"><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->


#### **getCatalogSeparator**

```
public String getCatalogSeparator()
                           throws SQLException
```
<dl><dt style="margin-left: 40px;"><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd style="margin-left: 40px;"><code>getCatalogSeparator</code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/DatabaseMetaData.html?is-external=true" title="class or interface in java.sql">DatabaseMetaData</a></code></dd><dt style="margin-left: 40px;"><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->


#### **getCatalogTerm**

```
public String getCatalogTerm()
                      throws SQLException
```
<dl><dt style="margin-left: 40px;"><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd style="margin-left: 40px;"><code>getCatalogTerm</code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/DatabaseMetaData.html?is-external=true" title="class or interface in java.sql">DatabaseMetaData</a></code></dd><dt style="margin-left: 40px;"><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->


#### **getDatabaseProductName**

```
public String getDatabaseProductName()
                              throws SQLException
```
<dl><dt style="margin-left: 40px;"><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd style="margin-left: 40px;"><code>getDatabaseProductName</code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/DatabaseMetaData.html?is-external=true" title="class or interface in java.sql">DatabaseMetaData</a></code></dd><dt style="margin-left: 40px;"><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->


#### **getDatabaseProductVersion**

```
public String getDatabaseProductVersion()
                                 throws SQLException
```
<dl><dt style="margin-left: 40px;"><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd style="margin-left: 40px;"><code>getDatabaseProductVersion</code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/DatabaseMetaData.html?is-external=true" title="class or interface in java.sql">DatabaseMetaData</a></code></dd><dt style="margin-left: 40px;"><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->


#### **getDriverName**

```
public String getDriverName()
                     throws SQLException
```

Retrieves the name of this JDBC driver.
<dl><dt style="margin-left: 40px;"><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd style="margin-left: 40px;"><code>getDriverName</code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/DatabaseMetaData.html?is-external=true" title="class or interface in java.sql">DatabaseMetaData</a></code></dd><dt style="margin-left: 40px;"><br><span class="returnLabel"><strong>Returns:</strong></span></dt><dd style="margin-left: 40px;">JDBC driver name</dd><dt style="margin-left: 40px;"><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code> - - if a database access error occurs</dd><dt style="margin-left: 40px;"><br><span class="seeLabel"><strong>See Also:</strong></span></dt><dd style="margin-left: 40px;"><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/DatabaseMetaData.html?is-external=true#getDriverName--" title="class or interface in java.sql"><code>DatabaseMetaData.getDriverName()</code></a></dd></dl>

<!--   -->


#### **getDriverVersion**

```
public String getDriverVersion()
                        throws SQLException
```

Retrieves the version number of this JDBC driver as a String.
<dl><dt style="margin-left: 40px;"><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd style="margin-left: 40px;"><code>getDriverVersion</code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/DatabaseMetaData.html?is-external=true" title="class or interface in java.sql">DatabaseMetaData</a></code></dd><dt style="margin-left: 40px;"><br><span class="returnLabel"><strong>Returns:</strong></span></dt><dd style="margin-left: 40px;">JDBC driver version</dd><dt style="margin-left: 40px;"><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code> - - if a database access error occurs</dd><dt style="margin-left: 40px;"><br><span class="seeLabel"><strong>See Also:</strong></span></dt><dd style="margin-left: 40px;"><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/DatabaseMetaData.html?is-external=true#getDriverVersion--" title="class or interface in java.sql"><code>DatabaseMetaData.getDriverVersion()</code></a></dd></dl>

<!--   -->


#### getExtraNameCharacters

```
public String getExtraNameCharacters()
                              throws SQLException
```

Retrieves all the "extra" characters that can be used in unquoted identifier names (those beyond a-z, A-Z, 0-9 and \_).
<dl><dt style="margin-left: 40px;"><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd style="margin-left: 40px;"><code>getExtraNameCharacters</code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/DatabaseMetaData.html?is-external=true" title="class or interface in java.sql">DatabaseMetaData</a></code></dd><dt style="margin-left: 40px;"><br><span class="returnLabel"><strong>Returns:</strong></span></dt><dd style="margin-left: 40px;">the string containing the extra characters</dd><dt style="margin-left: 40px;"><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code> - - if a database access error occurs</dd><dt style="margin-left: 40px;"><br><span class="seeLabel"><strong>See Also:</strong></span></dt><dd style="margin-left: 40px;"><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/DatabaseMetaData.html?is-external=true#getExtraNameCharacters--" title="class or interface in java.sql"><code>DatabaseMetaData.getExtraNameCharacters()</code></a></dd></dl>

<!--   -->


#### **getIdentifierQuoteString**

```
public String getIdentifierQuoteString()
                                throws SQLException
```
<dl><dt style="margin-left: 40px;"><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd style="margin-left: 40px;"><code>getIdentifierQuoteString</code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/DatabaseMetaData.html?is-external=true" title="class or interface in java.sql">DatabaseMetaData</a></code></dd><dt style="margin-left: 40px;"><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd><dt style="margin-left: 40px;"><br><span class="seeLabel"><strong>See Also:</strong></span></dt><dd style="margin-left: 40px;"><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/DatabaseMetaData.html?is-external=true#getIdentifierQuoteString--" title="class or interface in java.sql"><code>DatabaseMetaData.getIdentifierQuoteString()</code></a></dd></dl>

<!--   -->


#### **getNumericFunctions**

```
public String getNumericFunctions()
                           throws SQLException
```

Retrieves a comma-separated list of math functions available with this database. These are the Open /Open CLI math function names used in the JDBC function escape clause. jBASE Note: The jBASE JDBC driver does not support escaping at present.
<dl><dt style="margin-left: 40px;"><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd style="margin-left: 40px;"><code>getNumericFunctions</code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/DatabaseMetaData.html?is-external=true" title="class or interface in java.sql">DatabaseMetaData</a></code></dd><dt style="margin-left: 40px;"><br><span class="returnLabel"><strong>Returns:</strong></span></dt><dd style="margin-left: 40px;">the list of math functions supported by this database</dd><dt style="margin-left: 40px;"><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code> - - if a database access error occurs</dd><dt style="margin-left: 40px;"><br><span class="seeLabel"><strong>See Also:</strong></span></dt><dd style="margin-left: 40px;"><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/DatabaseMetaData.html?is-external=true#getNumericFunctions--" title="class or interface in java.sql"><code>DatabaseMetaData.getNumericFunctions()</code></a></dd></dl>

<!--   -->


#### **getProcedureTerm**

```
public String getProcedureTerm()
                        throws SQLException
```
<dl><dt style="margin-left: 40px;"><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd style="margin-left: 40px;"><code>getProcedureTerm</code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/DatabaseMetaData.html?is-external=true" title="class or interface in java.sql">DatabaseMetaData</a></code></dd><dt style="margin-left: 40px;"><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->


#### **getSQLKeywords**

```
public String getSQLKeywords()
                      throws SQLException
```

Gets a comma-separated list of all a database's SQL keywords that are NOT also SQL92 keywords.
<dl><dt style="margin-left: 40px;"><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd style="margin-left: 40px;"><code>getSQLKeywords</code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/DatabaseMetaData.html?is-external=true" title="class or interface in java.sql">DatabaseMetaData</a></code></dd><dt style="margin-left: 40px;"><br><span class="returnLabel"><strong>Returns:</strong></span></dt><dd style="margin-left: 40px;">the list</dd><dt style="margin-left: 40px;"><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code> - - if a database access error occurs</dd></dl>

<!--   -->


#### **getSchemaTerm**

```
public String getSchemaTerm()
                     throws SQLException
```
<dl><dt style="margin-left: 40px;"><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd style="margin-left: 40px;"><code>getSchemaTerm</code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/DatabaseMetaData.html?is-external=true" title="class or interface in java.sql">DatabaseMetaData</a></code></dd><dt style="margin-left: 40px;"><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->


#### **getSearchStringEscape**

```
public String getSearchStringEscape()
                             throws SQLException
```
<dl><dt style="margin-left: 40px;"><span class="overrideSpecifyLabel">Specified by:</span></dt><dd style="margin-left: 40px;"><code>getSearchStringEscape</code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/DatabaseMetaData.html?is-external=true" title="class or interface in java.sql">DatabaseMetaData</a></code></dd><dt style="margin-left: 40px;"><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->


#### **getStringFunctions**

```
public String getStringFunctions()
                          throws SQLException
```

Retrieves a comma-separated list of string functions available with this database. These are the Open Group CLI string function names used in the JDBC function escape clause.
<dl><dt style="margin-left: 40px;"><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd style="margin-left: 40px;"><code>getStringFunctions</code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/DatabaseMetaData.html?is-external=true" title="class or interface in java.sql">DatabaseMetaData</a></code></dd><dt style="margin-left: 40px;"><br><span class="returnLabel"><strong>Returns:</strong></span></dt><dd style="margin-left: 40px;">the list of string functions supported by this database</dd><dt style="margin-left: 40px;"><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code> - - if a database access error occurs</dd><dt style="margin-left: 40px;"><br><span class="seeLabel"><strong>See Also:</strong></span></dt><dd style="margin-left: 40px;"><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/DatabaseMetaData.html?is-external=true#getStringFunctions--" title="class or interface in java.sql"><code>DatabaseMetaData.getStringFunctions()</code></a></dd></dl>

<!--   -->


#### **getSystemFunctions**

```
public String getSystemFunctions()
                          throws SQLException
```

NOT IMPLEMENTED YET Retrieves a comma-separated list of system functions available with this database. These are the Open Group CLI system function names used in the JDBC function escape clause.
<dl><dt style="margin-left: 40px;"><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd style="margin-left: 40px;"><code>getSystemFunctions</code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/DatabaseMetaData.html?is-external=true" title="class or interface in java.sql">DatabaseMetaData</a></code></dd><dt style="margin-left: 40px;"><br><span class="returnLabel"><strong>Returns:</strong></span></dt><dd style="margin-left: 40px;">a list of system functions supported by this database</dd><dt style="margin-left: 40px;"><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code> - - if a database access error occurs</dd><dt style="margin-left: 40px;"><br><span class="seeLabel"><strong>See Also:</strong></span></dt><dd style="margin-left: 40px;"><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/DatabaseMetaData.html?is-external=true#getSystemFunctions--" title="class or interface in java.sql"><code>DatabaseMetaData.getSystemFunctions()</code></a></dd></dl>

<!--   -->


#### **getTimeDateFunctions**

```
public String getTimeDateFunctions()
                            throws SQLException
```

NOT IMPLEMENTED YET Retrieves a comma-separated list of the time and date functions available with this database.
<dl><dt style="margin-left: 40px;"><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd style="margin-left: 40px;"><code>getTimeDateFunctions</code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/DatabaseMetaData.html?is-external=true" title="class or interface in java.sql">DatabaseMetaData</a></code></dd><dt style="margin-left: 40px;"><br><span class="returnLabel"><strong>Returns:</strong></span></dt><dd style="margin-left: 40px;">the list of time and date functions supported by this database</dd><dt style="margin-left: 40px;"><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code> - - if a database access error occurs</dd><dt style="margin-left: 40px;"><br><span class="seeLabel"><strong>See Also:</strong></span></dt><dd style="margin-left: 40px;"><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/DatabaseMetaData.html?is-external=true#getTimeDateFunctions--" title="class or interface in java.sql"><code>DatabaseMetaData.getTimeDateFunctions()</code></a></dd></dl>

<!--   -->


#### **getURL**

```
public String getURL()
              throws SQLException
```
<dl><dt style="margin-left: 40px;"><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd style="margin-left: 40px;"><code>getURL</code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/DatabaseMetaData.html?is-external=true" title="class or interface in java.sql">DatabaseMetaData</a></code></dd><dt style="margin-left: 40px;"><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->


#### **getUserName**

```
public String getUserName()
                   throws SQLException
```
<dl><dt style="margin-left: 40px;"><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd style="margin-left: 40px;"><code>getUserName</code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/DatabaseMetaData.html?is-external=true" title="class or interface in java.sql">DatabaseMetaData</a></code></dd><dt style="margin-left: 40px;"><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->


#### **getConnection**

```
public Connection getConnection()
                         throws SQLException
```
<dl><dt style="margin-left: 40px;"><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd style="margin-left: 40px;"><code>getConnection</code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/DatabaseMetaData.html?is-external=true" title="class or interface in java.sql">DatabaseMetaData</a></code></dd><dt style="margin-left: 40px;"><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->


#### **getCatalogs**

```
public ResultSet getCatalogs()
                      throws SQLException
```
<dl><dt style="margin-left: 40px;"><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd style="margin-left: 40px;"><code>getCatalogs</code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/DatabaseMetaData.html?is-external=true" title="class or interface in java.sql">DatabaseMetaData</a></code></dd><dt style="margin-left: 40px;"><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->


#### **getSchemas**

```
public ResultSet getSchemas()
                     throws SQLException
```
<dl><dt style="margin-left: 40px;"><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd style="margin-left: 40px;"><code>getSchemas</code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/DatabaseMetaData.html?is-external=true" title="class or interface in java.sql">DatabaseMetaData</a></code></dd><dt style="margin-left: 40px;"><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->


#### **getTableTypes**

```
public ResultSet getTableTypes()
                        throws SQLException
```
<dl><dt style="margin-left: 40px;"><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd style="margin-left: 40px;"><code>getTableTypes</code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/DatabaseMetaData.html?is-external=true" title="class or interface in java.sql">DatabaseMetaData</a></code></dd><dt style="margin-left: 40px;"><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->


#### **getTypeInfo**

```
public ResultSet getTypeInfo()
                      throws SQLException
```
<dl><dt style="margin-left: 40px;"><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd style="margin-left: 40px;"><code>getTypeInfo</code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/DatabaseMetaData.html?is-external=true" title="class or interface in java.sql">DatabaseMetaData</a></code></dd><dt style="margin-left: 40px;"><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd><dt style="margin-left: 40px;"><br><span class="seeLabel"><strong>See Also:</strong></span></dt><dd style="margin-left: 40px;"><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/DatabaseMetaData.html?is-external=true#getTypeInfo--" title="class or interface in java.sql"><code>DatabaseMetaData.getTypeInfo()</code></a></dd></dl>

<!--   -->


#### **getExportedKeys**

```
public ResultSet getExportedKeys(String catalog, String schema, String table)
                          throws SQLException
```

Foreign keys not used as we only have 1 primary key per table
<dl><dt style="margin-left: 40px;"><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd style="margin-left: 40px;"><code>getExportedKeys</code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/DatabaseMetaData.html?is-external=true" title="class or interface in java.sql">DatabaseMetaData</a></code></dd><dt style="margin-left: 40px;"><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd><dt style="margin-left: 40px;"><br><span class="seeLabel"><strong>See Also:</strong></span></dt><dd style="margin-left: 40px;"><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/DatabaseMetaData.html?is-external=true#getExportedKeys-java.lang.String-java.lang.String-java.lang.String-" title="class or interface in java.sql"><code>DatabaseMetaData.getExportedKeys(java.lang.String, java.lang.String, java.lang.String)</code></a></dd></dl>

<!--   -->


#### **getImportedKeys**

```
public ResultSet getImportedKeys(String catalog, String schema, String table)
                          throws SQLException
```

Foreign keys not used as we only have 1 primary key per table
<dl><dt style="margin-left: 40px;"><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/DatabaseMetaData.html?is-external=true#getImportedKeys-java.lang.String-java.lang.String-java.lang.String-" title="class or interface in java.sql">getImportedKeys</a></code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/DatabaseMetaData.html?is-external=true" title="class or interface in java.sql">DatabaseMetaData</a></code></dd><dt style="margin-left: 40px;"><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd><dt style="margin-left: 40px;"><br><span class="seeLabel"><strong>See Also:</strong></span></dt><dd style="margin-left: 40px;"><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/DatabaseMetaData.html?is-external=true#getImportedKeys-java.lang.String-java.lang.String-java.lang.String-" title="class or interface in java.sql"><code>DatabaseMetaData.getImportedKeys(java.lang.String, java.lang.String, java.lang.String)</code></a></dd></dl>

<!--   -->


#### **getPrimaryKeys**

```
public ResultSet getPrimaryKeys(String catalog, String schema, String table)
                         throws SQLException
```
<dl><dt style="margin-left: 40px;"><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd style="margin-left: 40px;"><code>getPrimaryKeys</code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/DatabaseMetaData.html?is-external=true" title="class or interface in java.sql">DatabaseMetaData</a></code></dd><dt style="margin-left: 40px;"><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->


#### **getProcedures**

```
public ResultSet getProcedures(String catalog, String schemaPattern, String procedureNamePattern)
                        throws SQLException
```
<dl><dt style="margin-left: 40px;"><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd style="margin-left: 40px;"><code>getProcedures</code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/DatabaseMetaData.html?is-external=true" title="class or interface in java.sql">DatabaseMetaData</a></code></dd><dt style="margin-left: 40px;"><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->


#### getSuperTables

```
public ResultSet getSuperTables(String catalog, String schemaPattern, String tableNamePattern)
                         throws SQLException
```

This method is currently not supported
<dl><dt style="margin-left: 40px;"><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd style="margin-left: 40px;"><code>getSuperTables</code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/DatabaseMetaData.html?is-external=true" title="class or interface in java.sql">DatabaseMetaData</a></code></dd><dt style="margin-left: 40px;"><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd><dt style="margin-left: 40px;"><br><span class="seeLabel"><strong>See Also:</strong></span></dt><dd style="margin-left: 40px;"><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/DatabaseMetaData.html?is-external=true#getSuperTables-java.lang.String-java.lang.String-java.lang.String-" title="class or interface in java.sql"><code>DatabaseMetaData.getSuperTables(java.lang.String, java.lang.String, java.lang.String)</code></a></dd></dl>

<!--   -->


#### **getSuperTypes**

```
public ResultSet getSuperTypes(String catalog, String schemaPattern, String typeNamePattern)
                        throws SQLException
```

This method is currently not supported
<dl><dt style="margin-left: 40px;"><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd style="margin-left: 40px;"><code>getSuperTypes</code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/DatabaseMetaData.html?is-external=true" title="class or interface in java.sql">DatabaseMetaData</a></code></dd><dt style="margin-left: 40px;"><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd><dt style="margin-left: 40px;"><br><span class="seeLabel"><strong>See Also:</strong></span></dt><dd style="margin-left: 40px;"><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/DatabaseMetaData.html?is-external=true#getSuperTypes-java.lang.String-java.lang.String-java.lang.String-" title="class or interface in java.sql"><code>DatabaseMetaData.getSuperTypes(java.lang.String, java.lang.String, java.lang.String)</code></a></dd></dl>

<!--   -->


#### getTablePrivileges

```
public ResultSet getTablePrivileges(String catalog, String schemaPattern, String tableNamePattern)
                             throws SQLException
```
<dl><dt style="margin-left: 40px;"><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd style="margin-left: 40px;"><code>getTablePrivileges</code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/DatabaseMetaData.html?is-external=true" title="class or interface in java.sql">DatabaseMetaData</a></code></dd><dt style="margin-left: 40px;"><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->


#### getVersionColumns

```
public ResultSet getVersionColumns(String catalog, String schema, String table)
                            throws SQLException
```
<dl><dt style="margin-left: 40px;"><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd style="margin-left: 40px;"><code>getVersionColumns</code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/DatabaseMetaData.html?is-external=true" title="class or interface in java.sql">DatabaseMetaData</a></code></dd><dt style="margin-left: 40px;"><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->


#### **getBestRowIdentifier**

```
public ResultSet getBestRowIdentifier(String catalog, String schema, String table, int scope, boolean nullable)
                               throws SQLException
```
<dl><dt style="margin-left: 40px;"><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd style="margin-left: 40px;"><code>getBestRowIdentifier</code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/DatabaseMetaData.html?is-external=true" title="class or interface in java.sql">DatabaseMetaData</a></code></dd><dt style="margin-left: 40px;"><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->


#### **getIndexInfo**

```
public ResultSet getIndexInfo(String catalog, String schema, String table, boolean unique, boolean approximate)
                       throws SQLException
```
<dl><dt style="margin-left: 40px;"><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd style="margin-left: 40px;"><code>getIndexInfo</code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/DatabaseMetaData.html?is-external=true" title="class or interface in java.sql">DatabaseMetaData</a></code></dd><dt style="margin-left: 40px;"><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->


#### **getUDTs**

```
public ResultSet getUDTs(String catalog, String schemaPattern, String typeNamePattern, int[] types)
                  throws SQLException
```

This method is currently not supported.
<dl><dt style="margin-left: 40px;"><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd style="margin-left: 40px;"><code>getUDTs</code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/DatabaseMetaData.html?is-external=true" title="class or interface in java.sql">DatabaseMetaData</a></code></dd><dt style="margin-left: 40px;"><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd><dt style="margin-left: 40px;"><br><span class="seeLabel"><strong>See Also:</strong></span></dt><dd style="margin-left: 40px;"><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/DatabaseMetaData.html?is-external=true#getUDTs-java.lang.String-java.lang.String-java.lang.String-int:A-" title="class or interface in java.sql"><code>DatabaseMetaData.getUDTs(java.lang.String, java.lang.String, java.lang.String, int[])</code></a></dd></dl>

<!--   -->


#### **getAttributes**

```
public ResultSet getAttributes(String catalog, String schemaPattern, String typeNamePattern, String attributeNamePattern)
                        throws SQLException
```

This method is currently not supported.
<dl><dt style="margin-left: 40px;"><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd style="margin-left: 40px;"><code>getAttributes</code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/DatabaseMetaData.html?is-external=true" title="class or interface in java.sql">DatabaseMetaData</a></code></dd><dt style="margin-left: 40px;"><span class="throwsLabel"><strong>&nbsp;</strong></span><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd><dt style="margin-left: 40px;"><br><span class="seeLabel"><strong>See Also:</strong></span></dt><dd style="margin-left: 40px;"><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/DatabaseMetaData.html?is-external=true#getAttributes-java.lang.String-java.lang.String-java.lang.String-java.lang.String-" title="class or interface in java.sql"><code>DatabaseMetaData.getAttributes(java.lang.String, java.lang.String, java.lang.String, java.lang.String)</code></a></dd></dl>

<!--   -->


#### **getColumnPrivileges**

```
public ResultSet getColumnPrivileges(String catalog, String schema, String table, String columnNamePattern)
                              throws SQLException
```
<dl><dt style="margin-left: 40px;"><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd style="margin-left: 40px;"><code>getColumnPrivileges</code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/DatabaseMetaData.html?is-external=true" title="class or interface in java.sql">DatabaseMetaData</a></code></dd><dt style="margin-left: 40px;"><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->


#### getColumns

```
public ResultSet getColumns(String catalog, String schemaPattern, String tableNamePattern, String columnNamePattern)
                     throws SQLException
```
<dl><dt style="margin-left: 40px;"><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd style="margin-left: 40px;"><code>getColumns</code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/DatabaseMetaData.html?is-external=true" title="class or interface in java.sql">DatabaseMetaData</a></code></dd><dt style="margin-left: 40px;"><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->


#### getProcedureColumns

```
public ResultSet getProcedureColumns(String catalog, String schemaPattern, String procedureNamePattern, String columnNamePattern)
                              throws SQLException
```
<dl><dt style="margin-left: 40px;"><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd style="margin-left: 40px;"><code>getProcedureColumns</code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/DatabaseMetaData.html?is-external=true" title="class or interface in java.sql">DatabaseMetaData</a></code></dd><dt style="margin-left: 40px;"><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->


#### **getTables**

```
public ResultSet getTables(String catalog, String schemaPattern, String tableNamePattern, String[] types)
                    throws SQLException
```
<dl><dt style="margin-left: 40px;"><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd style="margin-left: 40px;"><code>getTables</code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/DatabaseMetaData.html?is-external=true" title="class or interface in java.sql">DatabaseMetaData</a></code></dd><dt style="margin-left: 40px;"><br><span class="throwsLabel"><strong>Throws</strong>:</span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->


#### **getCrossReference**

```
public ResultSet getCrossReference(String primaryCatalog, String primarySchema, String primaryTable, String foreignCatalog, String foreignSchema, 
                                    String foreignTable)
                            throws SQLException
```

Foreign keys are not used as we only have 1 primary key per table
<dl><dt style="margin-left: 40px;"><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd style="margin-left: 40px;"><code>getCrossReference</code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/DatabaseMetaData.html?is-external=true" title="class or interface in java.sql">DatabaseMetaData</a></code></dd><dt style="margin-left: 40px;"><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd><dt style="margin-left: 40px;"><br><span class="seeLabel"><strong>See Also:</strong></span></dt><dd style="margin-left: 40px;"><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/DatabaseMetaData.html?is-external=true#getCrossReference-java.lang.String-java.lang.String-java.lang.String-java.lang.String-java.lang.String-java.lang.String-" title="class or interface in java.sql"><code>DatabaseMetaData.getCrossReference(java.lang.String, java.lang.String, java.lang.String, java.lang.String, java.lang.String, java.lang.String)</code></a></dd></dl>

<!--   -->


#### **getDriverBuildDate**

```
public String getDriverBuildDate()
```

Obtain the build-date of the JDBC driver
<dl><dt style="margin-left: 40px;"><span class="returnLabel"><strong>Returns:</strong></span></dt><dd style="margin-left: 40px;">String</dd></dl>

<!--   -->


#### **getDriverVendor**

```
public String getDriverVendor()
```

Obtain the vendor of the JDBC driver
<dl><dt style="margin-left: 40px;"><span class="returnLabel"><strong>Returns:</strong></span></dt><dd style="margin-left: 40px;">String</dd></dl>

<!--   -->


#### **getJavaSqlType**

```
public int getJavaSqlType(String dataType)
```
<!-- ========= END OF CLASS DATA ========= --><!-- ======= START OF BOTTOM NAVBAR ====== -->
<!--   -->
