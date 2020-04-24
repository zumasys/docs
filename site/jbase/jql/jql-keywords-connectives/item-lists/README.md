# Item Lists  

<PageHeader />

An item list specifies the items within the file to be further processed. If no list is given, all items in the file are implied.

## Types of Item List

An item list takes one of three forms:

1. An explicit item-id list  
2. An implicit item-id list  
3. An item-id selection clause  

You can combine Item-id selection with implicit but not with explicit item-id lists.  
You can combine every type of list with selection criteria based on attribute values.  

## Explicit Item-id list  

An explicit item-id list lists items for processing, which encloses each item-id in double quotes.  
Spaces between item-ids are optional. An item-id list cannot include a relational operator and ignores any included logical connectives.  
jQL treats the values you place between quotes as item-ids, not as value strings. This treats the left ignore, right ignore and wild card as ordinary characters and not as special characters

### Syntax

```
‘item-id’ {‘item-id’}.. .
```

## Implicit Item-id list  

To provide an implicit item-id list execute a verb such as SELECT or GET-LIST immediately before executing a jQL command.  
If you also specify item-id selection, the jQL processor effectively ANDs its result with the implicit item-id list to limit further the items selected.  
If you specify an explicit item-id list, the processor ignores any implicit list.  

### Example  

The following sentences will not list anything because the value strings cannot match any item-id in the implicit list:  

```
SELECT ORDER GT ‘200’
42 RECORDS LISTED
>LIST CUSTOMER = ‘40823’ ‘40825’
```

The following sentences list information about CUSTOMER '40823' and '40825' because the process ignores an implicit item-id list when an implicit item-id list is in the sentence:  

```
SELECT ORDER GT ‘200’
23 items selected
> SELECT CUSTOMER ‘40823’ ‘40825’
```

## Item-id Selection clause  

An item-id selection clause expresses limits on the value of item-ids, for selection for processing.
It has at least one value string that defines an item-id or part of an item-id, and an explicit relational operator must precede at least one value string.  
The relational operator is what makes jQL treat item-id selection differently from an explicit item list.  
You can use logical connectives to combine relational operations.  
If you do not use an explicit logical connective, jQL defaults to the OR connective.  
jQL searches the file for each item-id that matches the value strings in the criteria.  
If an implicit item-id list has been specified, the processor checks only those item-ids present in the list.

Back to [jQL Keywords and Connectives](./../README.md)

<PageFooter />
