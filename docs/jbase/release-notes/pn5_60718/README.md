# PN5_60718

**Created At:** 3/12/2018 10:59:59 AM  
**Updated At:** 3/12/2018 11:00:33 AM  


### Description

Allow Dynamic Objects to interact with the database (allow READ and WRITE operations)



### Previous Release Behavior

Attempting to WRITE a dynamic object resulted in a null record to be written to the file.



### Current Release Behavior

These comments apply only to dynamic files, type JD.

If you create a dynamic object and WRITE it to a dynamic file, it will now be serialised and tagged as a dynamic object. If that same item is then READ back in, the item is converted back to a dynamic object.

```
star = new object
star->id = "1"
star->actor = "Mark Hamill"
star->name = "Luke Skywalker"
star->father = "Darth Vader"
star->$setboolean("isjedi", @true)
open "starwars" to filevar else
    execute "create-file starwars"  ;* create a Dynamic File
    open "starwars" to filevar else stop 201, "starwars"
end
write star on filevar, star->id
read rec from filevar, star->id else stop 202, star->id
crt "Actor: ":rec->actor
if rec->father eq "Darth Vader" and rec->isjedi eq @true then
    crt "The Force is strong with you, ":rec->name:"!"
end
```

The editing utilities ED and JED have been amended to convert the object into a JSON string to be edited, and when written back, will be re-converted to an object.

For example, if we EDit the above example,

```
C:\home>ed starwars 1
1 (JSON Object)
TOP
.p
TOP
001 {
002     "id":1,
003     "actor":"Mark Hamill",
004     "name":"Luke Skywalker",
005     "father":"Darth Vader",
006     "isjedi":true
007 }.
BOTTOM
.
```

Both ED and JED will not allow the item to be written if you include JSON code that is invalid. For example,

```
.2
002     "id":1,
.r/://
002     "id"1,
.fi
Error: Parsing error at line 2 , offset 9
Record is not properly formatted JSON. Cannot WRITE record.
```
