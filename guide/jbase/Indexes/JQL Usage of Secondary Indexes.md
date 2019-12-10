# JQL Usage of Secondary Indexes

**Created At:** 8/17/2018 9:28:52 AM  
**Updated At:** 9/26/2018 10:48:02 PM  

**Tags:**
<badge text='jql' vertical='middle' />
<badge text='select' vertical='middle' />
<badge text='file indexing' vertical='middle' />

Once an index has been created with create-index , and assuming the index data is in sync, then you can start to use the index data with special commands such as [key-select](query-index) or with jBC statements such as [SELECTINDEX](selectindex).

Another way the index data can be used is from jQL commands such as COUNT or SELECT. This occurs automatically and will dramatically speed up the operation of the jQL statements.

For example, assuming an index called DESCR is created on a file called PRODUCTS with:

```
jsh --> create-index PRODUCTS DESCR
```

This usage of create-index uses an existing DICT definition called DESCR and create and index name of DESCR. If now a SELECT against the file is issued as:

```
jsh --> SELECT PRODUCTS IF DESCR EQ "PIPE]"
```

Then in the above example the SELECT command will automatically use the index instead of the usual mechanism of searching through the entire file. Similar results may be obtained by using:

```
jsh --> key-select PRODUCTS DESCR PIPE]
```

Note the index could equally have been created with a command as:

```
jsh --> create-index PRODUCTS DESCR BY 55
```

it is just the alternative syntax for create-index was shown as this used an existing DICT definition to create the index (the command syntax is easier but less powerful)

## Note: 


> There are some limitations to this usage of the index. If the jQL statement is too complex or the index data is not [in sync](in-sync-definition), the jQL command will still work but will use the normal mechanism of searching the file rather than using any index data for improved performance.


Limited compound selection criteria is supported . For example the following first example will still use the index data whereas the second example will not, even if an index exists for both BIRTHDAY and SURNAME.

```
jsh --> SELECT PRODUCTS IF BIRTHDAY GE "23-JUL-56" AND BIRTHDAY LE "28-JUL-56"
```

```
jsh --> SELECT PRODUCTS IF BIRTHDAY GE "23-JUL-56" AND SURNAME EQ "COOPER]"
```

To be absolutely sure the index data is used to speed up a query, use the [key-select](query-index) command.
