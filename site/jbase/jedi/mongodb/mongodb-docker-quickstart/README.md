# MongoDB Docker Quick Start

<PageHeader />

## Docker Quick Start

## jBASE Mongo jEDI

### Quick start with Docker containers

If you wish to quickly see the Mongo jEDI working, you can pull our sample Docker image with Mongo already built.

```bash
docker pull mongo
docker run -it mongo:latest
new window (mongo is running in foreground in the other window)
docker container list                   - get the name of the mongo container
docker inspect <mongocontainername>     - get the ip address
docker pull zumasys/jbase_mongo
docker run -it zumasys/jbase_mongo /bin/bash
jb JBASEADM
jed MD mongo.config   (lower case!!)
# Change line 2 to be the IP address of the mongo container
create-file test.mongo type=mongo
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

The jabba code in the above example has been modified to pull the IP address from the mongo.config item. See below about issues with builtin options

## Build it yourself

## Requirements

* Linux (Centos 7, RedHat 7/8)
* jBASE 5.8.0 or later
* Mongo DB installed and listening on port 27017.

## Mongo Driver install

We need to install the latest mongo-c-driver from the git repository.

https://github.com/mongodb/mongo-c-driver.git

There are two ways to retrieve this.

1. git clone https://github.com/mongodb/mongo-c-driver.git
2. curl -O https://github.com/mongodb/mongo-c-driver/archive/r1.16.zip

You now must install dependencies to make this driver.  This driver uses cmake3 which is not available in the default Redhat/Centos installs.  Instead the default cmake is cmake2.  

On Centos/Redhat you must install the epel package and then you can install cmake3, although this will normally be installed as a dependency by the jBASE 5.8 installer.  
Debian must make cmake be the cmake3 version.  
On Centos cmake is cmake2 and will NOT work.

```
yum install -y https://dl.fedoraproject.org/pub/epel/epel-release-latest-7.noarch.rpm
yum install -y cmake3
yum install -y make
yum install -y openssl-devel cyrus-sasl-devel
```

Now, cd into the mongo-c-driver repository.  

```
# from the mongo-c-driver directory
mkdir cmake-build
cd cmake-build
cmake3 -DENABLE_AUTOMATIC_INIT_AND_CLEANUP=OFF ..
make install
```

You should see a long build process.  When this is done the driver is built and the lib files are now in /usr/local/lib64 and the headers are in /usr/local/include.

You can now compile the jabba driver.  Go into an account and create a directory to do this work. In that directory add the supplied mongo jabba code.

Right now the IP address of the mongo server is not working if you try to pass it.  Find the IP address of your mongo server and just manually put it in the code.

You then compile as follows:

cd into the directory with the jabba code.

```
jcompile -I/usr/local/include/libmongoc-1.0 -I/usr/local/include/libbson-1.0 -L/usr/local/lib -lmongoc-1.0 jediMongo.jabba -lmongoc-1.0 -lbson-1.0 -o libjedimongo.so
cp lib* ../lib   /* or wherever your default lib directory is */
```

```
sh SandBox ~ -->create-file demofile type=mongo
Notice: Assuming options 'collection=demofile]D database=zumasys write=named'
[ 417 ] File demofile]D created , type = OBJECT
Notice: Assuming options 'collection=demofile database=zumasys write=named'
[ 417 ] File demofile created , type = OBJECT
```

## Additional content to be added

## Useful URLS

MongoDB documentation https://docs.mongodb.com/

Mongo shell https://docs.mongodb.com/manual/mongo/

Mongo shell tutorial https://docs.mongodb.com/manual/reference/mongo-shell/

Full documentation on the MongoDB C Driver http://mongoc.org/libmongoc/current/index.html

Mongo API documentation https://mongoc.org/libmongoc/current/api.html

## Note  

>Upcoming Feature Development:
>
>* sub-value support  
>* improved transformation speed  

Back to [MongoDB jEDI](./../README.md)

<PageFooter />
