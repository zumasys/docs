# MongoDB Docker Quick Start

<PageHeader />

## Docker Quick Start

## jBASE MongoDB jEDI

### Quick start with Docker containers

If you wish to quickly see the MongoDB jEDI working, you can pull our sample Docker image with MongoDB already built.

```bash
docker pull mongo
docker run -it mongo:latest
new window (mongo is running in foreground in the other window)
docker container list                   - get the name of the mongo container
docker inspect <mongocontainername>     - get the ip address
docker pull zumasys/jbase
docker run -it zumasys/jbase
jb JBASEADM
create-file test.mongo type=mongo host=mongodb://<ip address>:27017
make-demo-file 1000 test.mongo 
>Answer Yes
Your file is now in mongo.
# to see it, open a new window:
docker exec -it <mongocontainername> /bin/bash
mongo
show dbs  (You should see JBASEADM)
use JBASEADM
show tables (You should see your tables )
db.test.mongo.find()  (This should show your table)
```

## Build it yourself

## Requirements

* Linux (Centos 7, RedHat 7/8)
* jBASE 5.8.0 or later
* MongoDB installed and listening on port 27017.

## MongoDB Driver install

As of jBASE 5.8.1, the Mongo driver is built into jBASE and no additional drivers need to be installed.

There are 3 ways of defining the host

1) With an environment variable

### On Linux

```bash
   $ export JBASE_MONGO_HOST=“mongodb://vroomfondel:27017”
```

### On Windows  

```
   $ set JBASE_MONGO_HOST=“mongodb://vroomfondel:27017”
```

2) During the create-file

```bash
   $ create-flle testfile type=mongo host=“mongodb://localhost:12345”
```

3) Edit the file stub. There should be a “host=xxx” property.

Failing all that, the default is mongodb://localhost:27017. This is usually sufficient for a default install of Mongodb on the same host.  

```
sh SandBox ~ -->create-file demofile type=mongo
Notice: Assuming options 'collection=demofile]D database=zumasys write=named'
[ 417 ] File demofile]D created , type = OBJECT
Notice: Assuming options 'collection=demofile database=zumasys write=named'
[ 417 ] File demofile created , type = OBJECT
```

Create some content in the demofile

```
jsh support ~ -->CT demofile 1

    1
001 Attribute 1
002 Attribute 2
003 Attribute 3
004 Attribute 4
005 Attribute 5
```

Switch to Mongo:

```
> show dbs
admin    0.000GB
config   0.000GB
local    0.000GB
support  0.000GB
> use support
switched to db support
> show collections
demofile
demofile]D
> db.demofile.find()
{ "_id" : "1", "_type" : "named", "_attr00001" : "Attribute 1", "_attr00002" : "Attribute 2", "_attr00003" : "Attribute 3", "_attr00004" : "Attribute 4", "_attr00005" : "Attribute 5" }
> 
```

## Note #1

>When you create a file, it won't show in Mongo until at least 1 item has been written.  
>Hence initially only the dictionary section is shown, as the create-file writes a Q pointer into the dictionary.

**CREATE-FILE** has more options available for "type=mongo" where you can define the database and the collection:

```
sh support ~ -->create-file GREG type=mongo database=production collection=makedemofile
Notice: Assuming options 'write=named'
[ 417 ] File GREG]D created , type = OBJECT
Notice: Assuming options 'write=named'
[ 417 ] File GREG created , type = OBJECT
jsh support ~ -->make-demo-file 1000 GREG (C

1,000 records created.
jsh support ~ -->COUNT GREG

 1000 Records counted

sh support ~ -->cat GREG
JBC__DYN class=mongo options={"database":"production","collection":"makedemofile","read":"mv","write":"named"}
sh support ~ -->cat GREG]D
JBC__DYN class=mongo options={"database":"production","collection":"makedemofile]D","read":"mv","write":"named"}
sh support ~ -->
```

```
> show dbs
admin       0.000GB
config      0.000GB
local       0.000GB
production  0.000GB
support     0.000GB
> use production
switched to db production
> show dbs
admin       0.000GB
config      0.000GB
local       0.000GB
production  0.000GB
support     0.000GB
> show collections
makedemofile
makedemofile]D
>

```

We can write objects to both a jBASE file and a MongoDB file:

```
sh support ~ -->create-file mike-jd
[ 417 ] File mike-jd]D created , type = JD
[ 417 ] File mike-jd created , type = JD
sh support ~ -->create-file mike-mongo type=mongo
Notice: Assuming options 'collection=mike_2dmongo]D database=support write=named'
[ 417 ] File mike-mongo]D created , type = OBJECT
Notice: Assuming options 'collection=mike_2dmongo database=support write=named'
[ 417 ] File mike-mongo created , type = OBJECT


sh support ~ -->ct PGM mike.jabba

    mike.jabba
001     open "mike-jd" to mike.jd else stop 201,"mike-jd"
002     open "mike-mongo" to mike.mongo else stop 201,"mike-mongo"
003
004     obj = new object
005     obj->name = "Greg"
006     obj->ishehandsome = @true
007     obj->age = 42
008     write obj on mike.jd,"mike"
009     write obj on mike.mongo,"mike"
010


sh support ~ -->ct mike-jd

    mike
001 {"name":"Greg","ishehandsome":true,"age":42}


sh support ~ -->ct mike-mongo

    mike
001 {"_id":"mike","name":"Greg","ishehandsome":true,"age":42,"_type":"object"}
```

We can also use a simple jabba program to re-read the objects and perform verification:

```
    mike-verify.jabba
001     filename = "mike-jd" ; gosub 100
002     filename = "mike-mongo" ; gosub 100
003
004     stop
005
006 100       *
007
008     open filename to filevar else stop 201,filename
009
010     ctr = 0
011     select filevar
012
013     loop while readnext id do
014         read rec from filevar,id else debug
015         if not(rec->$isobject()) then print "Error. Non object returned" ; debug
016         if rec->age ne 42 then print "Error. The 'age' property is not 42" ; debug
017         ctr++
018     repeat
019
020     crt ctr:" items found in file " : filename:", all of them objects"
021
022     return
023

sh support ~ -->mike-verify
1 items found in file mike-jd, all of them objects
1 items found in file mike-mongo, all of them objects

```

Read a MongoDB document (i.e. one that wasn’t put there by jBASE).  

We will use a start-up document like this:

```
create-file STARTUP type=mongo database=local collection=startup_log


jed STARTUP *

File STARTUP , Record 'vancouver.jinternal.com-1520003836469' (JSON Object)                                                                                    Insert      17:33:44
Command->
0001 {
0002     "_id":"vancouver.jinternal.com-1520003836469",
0003     "hostname":"vancouver.jinternal.com",
0004     "startTime":{
0005         "$date":1520003836000
0006
0007     },
0008     "startTimeLocal":"Fri Mar  2 15:17:16.469",
0009     "cmdLine":{
0010         "config":"\/etc\/mongod.conf",
0011         "net":{
0012             "bindIp":"127.0.0.1",
0013             "port":27017
0014
0015         },
0016         "processManagement":{
0017             "fork":true,
0018             "pidFilePath":"\/var\/run\/mongodb\/mongod.pid",
0019             "timeZoneInfo":"\/usr\/share\/zoneinfo"
0020
0021         },
0022         "storage":{
0023             "dbPath":"\/var\/lib\/mongo",
0024             "journal":{
0025                 "enabled":true
0026
0027             }
0028
0029         },
0030         "systemLog":{
0031             "destination":"file",
0032             "logAppend":true,
0033             "path":"\/var\/log\/mongodb\/mongod.log"
0034
0035         }
0036
0037     },
0038     "pid":59342,
0039     "buildinfo":{
0040         "version":"3.6.3",
0041         "gitVersion":"9586e557d54ef70f9ca4b43c26892cd55257e1a5",
0042         "modules":[
0043
0044         ],
0045         "allocator":"tcmalloc",
0046         "javascriptEngine":"mozjs",
0047         "sysInfo":"deprecated",
0048         "versionArray":[
0049             3,
0050             6,
0051             3,
0052             0

.. snip ..

0069
0070         },

```

We can access all the startup log records with a simple piece of jabbascript to read the items from the “STARTUP” file we just created:

```
sh support ~ -->CT PGM startup.jabba

    startup.jabba
001     open "STARTUP" to filevar else stop 201,"STARTUP"
002
003     select filevar
004     loop while readnext id do
005         read obj from filevar,id else debug
006         idate = obj->startTime->$date   ;* This is the UTC date in milliseconds
007         idate = int(idate/1000)         ;* Convert to seconds
008         crt id : " " :
009         crt oconv(idate,"U0ff1" : @vm : "D4"):" ":    ;* Display the date
010         crt oconv(idate,"U0ff0" : @vm : "MTS")        ;* Display the time
011     repeat


sh support ~ -->startup | more

.. snip ..

vancouver.jinternal.com-1616519064750 23 MAR 2021 17:04:24
vancouver.jinternal.com-1616519168953 23 MAR 2021 17:06:08
vancouver.jinternal.com-1616519872365 23 MAR 2021 17:17:52
vancouver.jinternal.com-1616520732711 23 MAR 2021 17:32:12
vancouver.jinternal.com-1616576014269 24 MAR 2021 08:53:34
sh support ~ -->
```

## Useful URLS

[MongoDB documentation](https://docs.mongodb.com/)

[MongoDB shell](https://docs.mongodb.com/manual/mongo/)

[MongoDB shell tutorial](https://docs.mongodb.com/manual/reference/mongo-shell/)

[Full documentation on the MongoDB C Driver](http://mongoc.org/libmongoc/current/index.html)

[Mongo API documentation](https://mongoc.org/libmongoc/current/api.html)

## Note #2

>Upcoming Feature Development:
>
>* sub-value support  
>* improved transformation speed  

Back to [MongoDB jEDI](./../README.md)

<PageFooter />
