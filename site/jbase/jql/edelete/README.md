# EDELETE

<PageHeader />

**Tags:**
<badge text='jql' vertical='middle'/>

## Description

Deletes selected records from a file according to record list or selection criteria clauses. It takes the general form:

```
EDELETE file-specifier [record-list | selection-criteria]
```

EDELETE requires an implicit or explicit record list, or selection criteria. An implicit list can be provided by preceding the command with a SELECT, GET-LIST or other list-providing command.

EDELETE will immediately delete the specified records.

To clear all the records in a file, use the CLEAR-FILE command.

### Examples

```
:EDELETE SALES "ABC" "DEF"
2 Records deleted
```

Delete the records ABC and DEF based on the explicit list of records.

```
:EDELETE SALES IF P.CODE = "GHI]"
n Records deleted
```

Delete all records in the SALES file in which the P.CODE field starts with GHI.

```
:SELECT SALES WITH S.CODE = "ABC"
n Records selected
>EDELETE SALES
n Records deleted
```

Selects all records in the SALES file in which the S.CODE field contains ABC, and deletes them.

Back to [jQL](./../jbase-query-language/README.md)

Back to [jQL Cross Reference](./../jql-keyword-cross-reference/README.md)

<PageFooter />
