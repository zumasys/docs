# jBASE 5.8.0 Release Notes

<PageHeader />

## New Features in jBASE 5.8

### MongoDB jEDI

New jEDI Driver Connects jBASE to MongoDB  
We are extremely excited to announce support for MongoDB in jBASE 5.8 thanks to a brand-new addition to the jEDI (jBASE Electronic Data Interface) driver family! MongoDB is a super popular NoSQL database used by the likes of Facebook and Twitter that has revolutionized the conversation around databases over the last decade. It is a cloud-friendly, highly redundant clustered architecture that is built for resilience and massive scalability, and its JSON-based data model is a natural fit for jBASE and MultiValue.  

What makes this so exciting is that you can keep your MultiValue application in jBASE and easily store your data in MongoDB. Whether you want to use MongoDB for its compliance and auditing features or you have newer developers who want to write reports and applications connected to a database that they are familiar with, we’ve got you covered! jBASE is the only MultiValue platform that lets you separate the application from the database, so you can store data in a jBASE database or in another database. We currently offer jEDI drivers for MongoDB, Oracle, and Microsoft SQL Server.  

What is MongoDB?  

MongoDB is the most popular NoSQL database and voted most wanted database among developers due to it’s flexibility and ease of usage. It’s fast growth and popular demand can be attributed to the fact that is stores data as JSON documents and offers column-based databases, graph databases, and even advanced clustering across multiple nodes.  

### Docker Containers

Docker Certification  
jBASE is officially Docker certified. With a single command, you can pull down a working jBASE image from the Docker Hub and have your jBASE application up and running in a container. What used to take days can now be accomplished in seconds—it really is that easy.  

With Docker, you can package every piece of your application and database into lightweight, portable containers that build themselves. If you have ever built a MultiValue environment from the ground up, you know it is a long process. Our Docker images bundle everything you need—from Linux to jBASE—to get your application working with the click of a button.  

Can you containerize a MultiValue database from one of our competitors? Probably. But chances are good it will still look and act like a monolithic virtual machine. jBASE is the only MultiValue database that can be broken down in the true spirit of containers with your database and application running in separate Docker containers.  

What is a Container?  

A container is a standard unit of software that packages up code and all its dependencies so the application runs quickly and reliably from one computing environment to another.

### CPU Licensing

CPU Licensing for the Phantom Menace  
In response to high demand from the marketplace, we are proud to announce a new option for CPU licensing and self-activation. You can still purchase a set number of user licenses; however, you can also buy by the number of CPU cores you are using. This is ideal for larger jBASE users that are developing powerful next-generation applications and depend on phantoms/background workers/shared connectivity. License activation for both the legacy user and new CPU models is now powered by an online licensing system which allows you to quickly get up and running without needing to cut through the red tape!

### Dynamic Object Enhancements

jBASE Dynamic Objects (jDO), an enhancement to the BASIC programming language that enhances your ability to hire developers. Dynamic Objects in jBASE 5.7 allow you to turn your application into a modern object language, natively supporting JSON, objects, properties and methods, while still retaining full compatibility with your legacy BASIC code.  

In this new release, we have added support for exception handling including try/catch/throw constructs and added new built-in methods including some with greatly improved performance over their BASIC equivalents that make life easier for developers who want to write Object-Oriented code with PICK BASIC.  

What are Objects?

Object Oriented programming (OOP) is a programming paradigm that relies on the concept of classes and objects. It is used to structure a software program into simple, reusable pieces of code (classes), which are used to create individual instances of objects.

### Compile & Catalog Enhancements  

Another feature improvement in 5.8 is jBASE’s enhanced features for the development cycle. Now you can store your compiled and catalog’ed programs in an easier-to-use format, one object per subroutine, each object with embedded meta-data. This simplifies the development process and the meta-data provides enhanced maintainability.  

Additional improvements include:  

Online CATALOG allows developers and live users to experience changed code without leaving the application or the jBASE shell.  
Optionally embed source code into the object meta-data during the compilation, and this can further be optionally encrypted.  
Never lose the source code used to build the object.  
ISV’s can distribute the encrypted source code with their object allow on-site debugging of their application using protected source code guaranteed to match what the customer is executing.  
Because the meta-data is embedded, it always follows the object code, which can be moved and copied with regular OS tools entirely at free will. The meta-data includes a SHA of the source code, file name, item id, time/date/username who compiled it, build options, and so on.  
New reporting tools for larger development teams. Find your objects and list the details. Verification tools (e.g. has the source changed since the object was last built?).  
Maintenance tools — when you CATALOG, we warn if any important options have changed since the last CATALOG of that object e.g. has the JBCEMULATE setting changed?

## Patches

[PN5_60898](./pn5_60898/README.md)  - Correct the (M) option on the BASIC compiler in order to use multi-tasking for compilations  
[PN5_60928](./pn5_60928/README.md)  - Simplify the restore options for use with jrestore  
[PN5_60935](./pn5_60935/README.md)  - Add the ability in jED to format embedded C code  
[PN5_60960](./pn5_60960/README.md)  - DB-PAUSE and other utilties no longer have a defined database

Back to [5.8.x Release Notes](./../README.md)

<PageFooter />
