# READNEXT KEY

<PageHeader />

**Tags:**
<badge text='jbc with indexes' vertical='middle' />
<badge text='file indexing' vertical='middle' />

## Description

The regular jBC READNEXT statement is extended in two ways.

- Firstly it can accept an index variable created with an [OPENINDEX](./../openindex) statement.
- Secondly, you can use the **KEY** modifier.

The function may be called as:

```
READNEXT KEY index.key{,record.key{,vmcount}} {FROM select-def} THEN/ELSE
```

## Note

> In this second format the READNEXT KEY statement will return the actual index key. The select used use MUST have been created with the [OPENINDEX](./../openindex) statement. Optionally, the associated record key can be returned and the multi-value number associated with it.

### Example

The following code shows a file and index being created, a simple index just on attribute 1. The index is defined as multi-valued. Then 3 records are written to the file. The file is then interrogated with the **OPENINDEX** and **READNEXT KEY** statements. As the index is defined as an ascending left justified sort on attribute 1, the values returned with the **READNEXT** will be in sorted order of attribute 1.

```
* Create the file and index definition.
filename = "example"
indexname = "index.def"
EXECUTE "create-file ":filename:" 1 3"
EXECUTE "create-index ":filename:" ":indexname:" by M1"
OPEN filename TO filevar ELSE
    STOP 201,filename
END
* Open the index ready for use.
OPENINDEX filename,indexname TO index.var ELSE
    STOP 201,indexname:" IN ":filename
END
* Write some dummy records out.
OPEN filename TO filevar ELSE
    STOP 201,filename
END
WRITE "Greg" ON filevar,"customer-1"
WRITE "Jim":@VM:"Dave" ON filevar,"customer-2"
WRITE "Jim":@VM:"Greg":@VM:"Dave" ON filevar,"customer-3"
* Use SELECT to get ready to read in the records.
SELECT index.var
* Read in each index record at a time.
LOOP WHILE READNEXT KEY index.key,record.key,mv.key DO
    CRT index.key,record.key,mv.key
REPEAT
```

The output of this program will be as follows:

```
Dave customer-2 2
Dave customer-3 3
Greg customer-1 1
Greg customer-3 2
Jim customer-2 1
Jim customer-3 1
```

The index is built on sorted attribute 1 and so the index keys (the names of the customers) are sorted in alphabetical order. They are then sub-sorted by record key and finally by the multi-value number that they existed in.

Go back to [jBASE BASIC](./../README.md)

Go back to [Programmers' Reference Guide](./../../reference-guides/jbc/README.md)

  
<PageFooter />
