# PN5_60573

**Created At:** 6/13/2017 2:17:55 PM  
**Updated At:** 11/20/2017 9:03:49 PM  


### Description

Indexes with case insensitive item IDs in the file have problems when an item is updated or deleted.



### Previous Release Behavior

As an example, if you create an item like this:

```
WRITE item ON fv, "Greg"
```

and delete it like this:

```
DELETE fv, "GREG"
```

Then although the file might be case insensitive, the item id will not be deleted from the index as it is looking for "GREG" when it was stored as "Greg".

Similarly, consider a case insensitive file that is indexed on attribute 1 and an existing item:

```
ID: AbC
001 123
```

Now change the item to:

```
ID: AbC
001 999
```

and then

```
WRITE item on fv, "ABC"
```

The result is the index ends up with 2 entries, one with ID "AbC" and index key "123" and another with ID "ABC" with index key "999".



### Current Release Behavior

The index is updated correctly.

There is a new flag in the index which describes whether we do case insensitive item id searches. This new flag is added automatically depending upon whether or not the file itself has case insensitive item ids. I cannot see a case where we would want to make this optional. Therefore, the fix requires no intervention on the customer's behalf.

Note: This new flag is in ADDITION to the case insensitive option, -c, which remains unchanged, and affects whether the index data value is case insensitive or not.

The list-index now shows:

- the new flag (CASE INSENSITIVE ITEM ID?   YES ) as created automatically from the case sensitivity of the actual file
- the old flag (CASE INSENSITIVE DATA?   YES ) as created with the -c option.


```
fbcentos-~/tmp14: list-index -a FB2

INDEX definitions for file FB2 at 10:56:00  03 JUN 2017                                         PAGE    1

INDEX NAME   INDEX1                                                                                       
LOCALE NAME   C                                                                                           
SORT KEYS   AL                                                                                            
BASE FID   8192                                                                                           
CREATE DATE   03 JUN 17                                                                                   
CREATE TIME   10:51:01                                                                                    
MODIFIED DATE   03 JUN 17                                                                                 
MODIFIED TIME   10:51:01                                                                                  
INDEX NUMBER   0                                                                                          
DEBUG PSEUDO CODE?   NO                                                                                   
NULL INDEX VALUES ALLOWED?   YES                                                                          
CASE INSENSITIVE DATA?   YES                                                                              
CASE INSENSITIVE ITEM ID?   YES                                                                           
MULTI VALUE EXTRACT?   YES                                                                                
DATA AND INDEX IN SYNC?   YES                                                                             
MAXIMUM VALUES EXTRACTED   UNLIMITED                                                                      
PERMANENT WRITE MODE?   YES                                                                               
INDEX DEFINITION   BY 1                                                                                   


 1 Records Listed 

fbcentos-~/tmp14: 
```

### 

