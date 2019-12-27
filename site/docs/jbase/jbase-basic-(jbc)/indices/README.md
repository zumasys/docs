# INDICES

**Created At:** 1/4/2018 7:07:31 AM  
**Updated At:** 5/17/2018 4:34:07 PM  
**Original Doc:** [293268-indices](https://docs.jbase.com/36868-jbase-basic/293268-indices)  
**Original ID:** 293268  
**Internal:** No  


## Description

The function finds information about a file's indexes. It takes the general form:

```
INDICES(file_variable{,index-name}) 
```

This function has a dual purpose. In its first invocation whereby a single parameter is passed, assumed to be a file descriptor, will return a dynamic array of all the index names associated with the file. In its second invocation two parameters are passed, the first being a file variable again and the second the name of an index. In this case the return value from the function will be a dynamic array containing information about the specified index. In the second invocation, the dynamic array has the following attributes:

- SORT criteria.
This shows the components that the index is sorted by. For example if you want to create an index sorted left justified on attribute 1 and then sub-sorted right justified in descending order on attribute 2 you might create the index with "BY 1 BY-DR 2". In this example this attribute returned by INDICES would be "ALDR" to show the first index field is sorted ascending left justified and then sub-sorted descending right justified.
- TYPE description.
This describes which of the indexing emulations have been used when creating the index. Currently the only possible value is "JBASE"
- INDEX definition.
This is the actual index definition used on the command line when the index was created. Hence if you created an index with the command "create-index filename indexname by 1" then the data returned in this attribute will be "by 1".
- LOOKUP definition.
This is the value of any conversion to apply when the data is looked up using the query-index command. This is therefore the data passed with the -l option to create-index.
- CREATE time.
This is the time, in UTC format that an index definition was first created. See appendix B for a description of UTC.
- MODIFY time.
This is the time in UTC format that an index definition was last modified. See appendix B for a description of UTC.
- DEBUG flag.
A numeric of 0 or 1. If 1 is returned it shows the -d option was used when the index was created and so when the index is being built it can be debugged in the normal way using the jBC debugger.
- NULL flag. A numeric of 0 or 1. If 1 is returned is shows that null index keys will be ignored.
- CASE flag.
A numeric of 0 or 1. If a 1 is returned it shows the index is case insensitive.
- MULTI-VALUE flag.
A numeric of 0 or 1. If a 1 is returned it shows updates will be done on a multi-value basis. Hence if an update occurs and the attribute in the record has 3 values, each value will create its own index key.
- SYNC flag.
A numeric of 0 or 1. If a 1 is returned it shows the index data is in synchronization with the file data and so the index can be used. If a 0 is returned it shows the index data is out of step and needs to be rebuilt with the rebuild-index command.
- VALUE MAX count
If the (Vnn option was used on a create-index command, this will limit us to the first nn values per attribute. This value is shown here. A value of 0 shows the option not in effect.


## Note:


> An index has to be created first on a file before it can be returned by this function.




The following code example show how a file called "CUSTOMERS" can have some of the information about all of its indexes displayed.

```
filename = "CUSTOMERS"
OPEN filename TO filevar ELSE STOP 201,filename
index.list = INDICES(filevar)
index.count = DCOUNT(index.list, @AM)
IF NOT(index.count) THEN
    CRT filename:" has NO defined indexes"
    STOP
END
FOR index.next = 1 TO index.count
    index.name = index.list<index.next>
    index.data = INDICES(filevar,index.name)
    CRT
    CRT "Index name = ":index.name
    CRT "Definition = ":index.data<3>
    CRT "Lookup code = ":index.data<4>
    CRT "Create date = ":OCONV(INT(index.data<5>/86400)+732,"D")
    CRT "Create time = ":OCONV(MOD(index.data<5>,86400),"MTS")
NEXT index.next
```



Attribute 12 returned with the INDICES function shows any option passed to create-index with the (Vnn) option and is therefore a count on the limit on the number of values extracted per attribute to create an index entry. By default this value is 0.



Go back to [jBASE BASIC](./../jbase-basic-programmers-reference-guide)
