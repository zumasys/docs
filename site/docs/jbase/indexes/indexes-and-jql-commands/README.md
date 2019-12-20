# Indexes and JQL Commands

**Created At:** 8/16/2018 1:37:59 PM  
**Updated At:** 9/26/2018 10:52:36 PM  
**Original Doc:** [indexes-and-jql-commands](https://docs.jbase.com/48152-indexes/indexes-and-jql-commands)  

**Tags:**
<badge text='file indexing' vertical='middle' />
<badge text='jql' vertical='middle' />

## Description

jBASE supports a limited mechanism whereby jQL commands such as SORT or SELECT can automatically use any valid secondary index to reduce the search time. This does not involve creating a specific DICTionary item. If for any reason the index cannot be found, or is not up to date (e.g. awaiting a rebuild-index command) then the jQL command will ignore the secondary index and retrieve the information in the usual manner.

At present only a single search pattern can be used in a jQL command. As an example a file will have an index built onto attribute 23 , the customer last name like this:

```
jsh->create-index CUSTOMERS lastname BY 23
```



Assuming there exists a DICTionary definition called LASTNAME that looks like this:

```
LASTNAME
001 A
002 23
003 Customer Lastname
004
005
006
007
008
009 T
010 20
```

and there is need to select all customers in that file whose last name equals "COOPER]". The jQL statement would be as :

```
jsh-> SELECT CUSTOMERS IF LASTNAME EQ "COOPER]"
```



In this example the index definition is "out of sync", awaiting a rebuild-index command to be performed. Therefore the SELECT would achieve the result by looking through the entire file. If the rebuild-index command is run as:

```
jsh-> rebuild-index CUSTOMERS lastname
```

and the SELECT is re-execute , then instead of scanning through the entire CUSTOMERS file, it will look through the index definition "lastname" instead and will therefore execute considerably quicker.


