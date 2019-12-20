# MongoDB jEDI Driver

**Created At:** 12/20/2019 4:14:09 PM  
**Updated At:** 12/20/2019 4:17:23 PM  
**Original Doc:** [mongodb-driver](https://docs.jbase.com//mongodb-driver)  


## Document Scope

Briefly state what is covered in this document so the user knows exactly what to expect.

## Description

A brief description of the topic at hand.

## Details

links to child documents are encouraged to be placed here so we don't' have an extremely long document that will overload the user. The child document must be to the point, and must deal with ideally one topic. ideally the links should be in point form.



1. Create a file

```
jsh jbase ~/mongo -->create-file mydemo type=mongo
Notice: Assuming options 'collection=mydemo]D database=jbase write=schema'
[ 417 ] File mydemo]D created , type = OBJECT
Notice: Assuming options 'collection=mydemo database=jbase write=schema'
[ 417 ] File mydemo created , type = OBJECT
```



2. Populate the file with test data

```
jsh jbase ~/mongo -->make-demo-file 10000 mydemo (C
10,000 processed
10,000 records created.
```



3) From a Mongo shell, we can see the data.

```
> db.mydemo.find()
{ "_id" : "00001", "_type" : "named", "_attr00001" : "GREG", "_attr00002" : "BAILEY", "_attr00003" : "10260 SW GREENBURG RD", "_attr00004" : "LEVEL 42", "_attr00005" : "NEW YORK", "_attr00006" : "NY", "_attr00007" : 44223, "_attr00008" : "(125) 555-1337", "_attr00009" : "(524) 555-2437", "_attr00010" : "gregb@jbase.com", "_attr00011" : [ "DIGITAL", "PSERIES", "XSERIES", "ASUS", "SPARC" ], "_attr00012" : [ "LINUX RH9", "LINUX RH9", "TRU64", "TRU64", "LINUX RH9" ], "_attr00013" : [ "jBASE", "QM", "ROS", "ROS", "D3" ], "_attr00014" : [ 416, 1470, 271, 1296, 961 ] }
{ "_id" : "00002", "_type" : "named", "_attr00001" : "TERRY", "_attr00002" : "WALKER", "_attr00003" : "123 MAIN ST", "_attr00004" : "SUITE 23", "_attr00005" : "SPRINGFIELD", "_attr00006" : "IL", "_attr00007" : 24358, "_attr00008" : "(524) 555-2437", "_attr00009" : "(666) 246-0149", "_attr00010" : "terryw@compc.com", "_attr00011" : "ISERIES", "_attr00012" : "LINUX RH8", "_attr00013" : "IN2", "_attr00014" : 1612 }
```

[ Screen shot truncated ]



4) We can do anything with the data that we can for any hash file

```
jsh jbase ~/mongo -->COUNT mydemo
 
10000 Records counted
 
jsh jbase ~/mongo -->SELECT mydemo WITH LASTNAME EQ "MURPHY"
 
759 Records selected
 
>DELETE mydemo
759 record(s) deleted.
jsh jbase ~/mongo -->COUNT mydemo
 
9241 Records counted
```



5) Run jQL Against it. Note that the DICT section is also a mongo file (or collection as they call it)



```
jsh jbase ~/mongo -->LIST mydemo FIRSTNAME LASTNAME EMAIL OS
 
PAGE    1                                                                                   20:26:59  19 DEC 2019
 
mydemo........   First Name..............   Last Name...........   Email.................   OS.............
 
00001            GREG                       BAILEY                 gregb@jbase.com          LINUX RH9     
                                                                                            LINUX RH9     
                                                                                            TRU64         
                                                                                            TRU64         
                                                                                            LINUX RH9     
00002            TERRY                      WALKER                 terryw@compc.com         LINUX RH8     
00003            TED                        FLETCHER               tedf@alice.com           AIX
```

6) As with JD files, you can create a dynamic object and write that directly to a Mongo file. When we do this, we get named fields in mongo.



```
$ cat test8.jabba
    filename = "mydemo"
    open filename to dscb else stop 201,filename
    rec = new object
    rec->Name = "Greg"
    rec->Age = 55
    write rec on dscb,"greg"
```



And from the Mongo shell.

```
> db.mydemo.find()
{ "_id" : "greg", "Name" : "Greg", "Age" : 55, "_type" : "object" }
```



7) To emphasise this point, the (O) option to make-demo-file now creates a dynamic object and writes it to the file instead of multivalue data. Again, we can see it writes named fields to Mongo



```
> db.mydemo.find()
{ "_id" : "01", "firstname" : "DELLA", "lastname" : "BAILEY", "addr1" : "42 MILLI WAYS", "addr2" : "#1020", "city" : "LOS ANGLES", "state" : "MI", "zip" : "12345", "hometel" : "(666) 246-0149", "worktel" : "(666) 246-0149", "email" : "dellab@lint.com", "hardware" : [ "XSERIES" ], "os" : [ "AIX" ], "systemtype" : [ "QM" ], "numusers" : [ 1973 ], "_type" : "object" }
{ "_id" : "02", "firstname" : "CLIVE", "lastname" : "AUBERT", "addr1" : "10260 SW GREENBURG RD", "addr2" : "LEVEL 42", "city" : "SPRINGFIELD", "state" : "CA", "zip" : "12345", "hometel" : "(524) 555-2437", "worktel" : "(124) 555-1337", "email" : "clivea@alice.com", "hardware" : [ "ISERIES", "SOLARIS", "SPARC", "SOLARIS", "ASUS" ], "os" : [ "NT", "HPUX", "NT", "LINUX RH9", "LINUX RH8" ], "systemtype" : [ "jBASE", "ROS", "QM", "D3", "jBASE" ], "numusers" : [ 1691, 618, 1982, 845, 952 ], "_type" : "object" }
```





### Warning

Notable limitations currently

Does not support sub-values

The transformations are slow

Uses jBASE record locking only

Quite a manual effort to build a driver, we don’t ship with a pre-built version

Documentation limited (err…. this email is it so far)






