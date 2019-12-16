# INTRODUCTION TO jREMOTE

**Created At:** 4/12/2017 4:54:46 PM  
**Updated At:** 7/8/2019 8:38:49 PM  

**Tags:**
<badge text='connect to db' vertical='middle' />

# 


This user guide provides detailed instructions on how to use the jBASE **jRemote Client API**.

**jRemote (Client)**is a jBASE component providing an API to perform jBASE operations remotely such as calling subroutines or accessing jBASE files. The jRemote Client API is available to multiple development platforms (see jRemote Packages section for more details).

**jRemote Resource Adapter (jRemote RA)**is a JCA compliant resource adapter allowing J2EE applications to access a jBASE Enterprise Information System (EIS) within a transactional context. The J2EE Connector Architecture (JCA) specification, to which this resource adapter conforms, specifies the mechanisms and contracts required for this transactional interaction. JCA provides a Java technology solution to the problem of connectivity between the many application containers and today's enterprise information systems (EIS).

**Note**: More information on the jRemote RA can be found in the jRemote JCA RA user guide documentation.

![](https://static.helpjuice.com/helpjuice_production/uploads/upload/image/3397/103621/jremote.png)

This diagram shows how Java and .NET C# client applications may use **jRemote (Client)** to access jBASE functionality. **jAgent** is a jBASE component responsible for accepting and processing incoming client requests. jAgent, as well as jRemote, use TCP socket connections to communicate between each other and therefore need to be configured to use the same TCP port.



# ASSUMPTIONS

This document describes many concepts and methodologies that are highly technical in nature, and as such, prerequisite knowledge of the following is considered essential:

- Java Standard Edition
- Microsoft .NET Framework
- Microsoft .NET C# programming concepts
- jBASE and concepts of Multivalue databases
- Secure Sockets Layer (SSL) protocol




# DEVELOPERS GUIDE

The following section provides a detailed guide on how to connect and access the jBASE server.

## jREMOTE PACKAGES

The client packages for both java and .net are in the Clients directory in the main jBase install directory.

jRemote API is currently available to the following development platforms:

- **Java**


In order to compile Java code, the Java development kit (jDK) should be installed:

On Linux, this is currently "java-1.8.0-openjdk-devel".

On Windows, this is currently "jdk-8u141-windows-x64.exe".

These versions will change over time.





- **Microsoft .NET C#**


All supported versions of Visual Studio may be used.



The **Java** version of jRemote is distributed as a Java Archive (jar) file (**jremote.jar**). This archive must be located in your CLASSPATH in order to be used by a java application. The jRemote class library is defined under the *com.jbase.jremote*namespace. Please read the appropriate class library (javadoc) documentation for more information about this API.

The **.NET C#** version of jRemote is distributed as a static library assembly (jremote.lib). The jRemote class library is defined under the *com.jbase.jremote*namespace. Please read the appropriate class library documentation for more information about this API.



## jAGENT

jBASE jAgent is a server-side jBASE component which must be listening on a user-defined TCP port on the remote jBASE instance. It accepts socket connections to process incoming requests from Client Applications implementing the jRemote Client API. Please refer to the jBASE jAgent user guide for more information on how to configure and start jAgent.

- Framework API
- [jRemote API](jremote-api)
- jRemote Client
- jDBC Driver


## Sample Project

There is a sample project in github using c# and jAgent.  Click [here](https://github.com/patrickp/jRemoteTestCSharp) to view.

## CONNECTING TO jBASE

jRemote connection handles are obtained via the *JConnectionFactory* interface which is implemented by jRemote’s *DefaultJConnectionFactory* class. This interface provides several

```
getConnection()
```

methods to establish a new connection with a remote jBASE instance. For more information please refer to the API documentation.

Some of these methods accept java.util.Properties / System.NameValueCollection objects as a parameter and are used to supply connection properties.

A second option to supply connection properties is to use the getter and setter methods implemented in *DefaultJConnectionFactory*. The samples included in this section use the getter and setter methods.

The following connection properties are used to specify the target host:

- **host** [Default value: **localhost**]
    - Specifies the host address


- **port**  [Default value: **20002**]
    - Specifies the port number


#### **Java:**

```
try {
    DefaultJConnectionFactory cxf = new DefaultJConnectionFactory();
    cxf.setHost("127.0.0.1");
    cxf.setPort(20002); //Port should match the port jAgent is listening on
    JConnection cx = cxf.getConnection();
return cx;
} catch (JRemoteException e) {
    // error
}
```



#### **C#:**

```
try {
    DefaultJConnectionFactory cxf = new DefaultJConnectionFactory();
    cxf.Host = "127.0.0.1";
    cxf.Port = 20002; //This should match jAgent’s port
    JConnection cx = cxf.getConnection();
return cx;
} catch (JRemoteException e) {
    // error
}
```



Please note that jAGENT must be started first before any connections are attempted.



## AUTHENTICATION

jAgent can be configured to verify user credentials and perform jBASE account authentication. jRemote implements the following connection properties to supply user credentials:

- **user**specifies the user to be authenticated
- **password**specifies the user’s password


One of the following methods should then be used depending on whether the current authentication mode is *user* or *account*:

- ***getConnection*****(String *user*, String *password*)** to create a new connection and provide *user* and *password* as user credentials for authentication,
- ***getConnection*****(String *user*, String *account*, String *password*)**Same as above but supplying jBASE account details.


#### 


#### **Java:**

```
try {
    DefaultJConnectionFactory cxf = new DefaultJConnectionFactory();
    cxf.setHost("127.0.0.1");
    cxf.setPort(20002); //Port should match the port jAgent is listening on
    JConnection cx = cxf.getConnection("myUserName", "myPassword");
    //JConnection cx = cxf.getConnection("osUser", "myAccount", "myAccntPassword"); 
return cx;
} catch (JRemoteException e) {
    // error
}
```



#### **C#:**

```
try {
    DefaultJConnectionFactory cxf = new DefaultJConnectionFactory();
    cxf.Host = "127.0.0.1";
    cxf.Port = 20002; //This should match jAgent’s port
    JConnection cx = cxf.getConnection("myUserName", "myPassword");
    //JConnection cx = cxf.getConnection("osUser", "myAccount", "myAccntPassword");
return cx;
} catch (JRemoteException e) {
    // error
}
```



## SSL ENCRYPTION

jAgent may be configured to use SSL encrypted connections for deployment scenarios which require enhanced security. jRemote implements the following connection properties:

- **SSL**  [Default value: **false**]  specifies whether the connection should use SSL encryption. SSL should only be used if the jAgent instance running on the jBASE server has also been configured to accept SSL connections.




**Java**:

Java jRemote Clients currently must set the following property:

- **NaiveTrustManager** [Default value: **false**]


This will force the Java jRemote Client to trust all server certificates.

**#C:**

C# jRemote Clients require users to install a valid certificate into the *Trusted Root Certification Authorities* store. The same certificate created to start jAgent in SSL mode can be used for this purpose. Utilities such as e.g. *certmgr.exe* included in .NET Frameworks can be used to install and manage certificates.

C# jRemote Clients must supply the following property to specify the Common Name (CN) of the Distinguished Name (DN) section in the certificate:

- **CertificateDN**


#### **Java:**

```
try {
    DefaultJConnectionFactory cxf = new DefaultJConnectionFactory();
    cxf.setHost("127.0.0.1");
    cxf.setPort(20002);
    cxf.enableSSL(); //Enable SSL encryption
    cxf.enableNaiveTrustManager(); //Trust all server credentials
    JConnection cx = cxf.getConnection("myUserName", "myPassword");
return cx;
} catch (JRemoteException e) {
    // error
}
```



#### **C#:**

```
try {
    DefaultJConnectionFactory cxf = new DefaultJConnectionFactory();
    cxf.Host = "127.0.0.1";
    cxf.Port = 20002;
    cxf.EnabledSSL = true; //Enable SSL encryption
    cxf.CertificateDN = "MyCompanyName"; //Must match CN attribute in certificate
    JConnection cx = cxf.getConnection("myUserName", "myPassword");
return cx;
} catch (JRemoteException e) {
    // error
}
```



## ADDITIONAL CONNECTION PROPERTIES

- **compression** [Default value: **false**]
    - This property specifies whether the data transferred between client and server should be compressed. Enabling compression yields a better throughput on large data transfers. The opposite effect may occur on small data transfers and therefore jRemote will automatically decide whether to apply compression or not based on the supplied threshold value.
- **compression\_threshold** [Default value: **0**]
    - This property is only applicable if compression is on and defines the threshold used to decide whether a certain request is going to be compressed. Data transfers whose size is less than the specified threshold are not compressed. Value 0 means all data will be compressed.




## CLOSING A CONNECTION

After finishing with the connection, it must be closed to release the associated resources:

#### **Java:**

```
cx.close();
```

#### 


#### **C#:**

```
cx.close();
```

## 


## jREMOTE CLIENT API REFERENCE

This API provides client applications with a set of interfaces to access the remote jBASE server. A reference to a *JConnection* instance should have been obtained, as detailed in the previous sections. For more information on how to use this API, please read the jRemote API javadoc documentation.

### 


### CALLING jBC SUBROUTINES

*call(String subroutineName, JSubroutineParameters parameters)*

Location: *JConnection*

Return type: *JSubroutineParameters*

Throws: *JSubroutineNotFoundException, JRemoteException*;

JSubroutineParameters represents the input/output parameters for the jBC subroutine and is an array of JDynArray values.



**Java:**

```
//Specify subroutine parameters
JSubroutineParameters params = new JSubroutineParameters();
params.add(new JDynArray("one"));
params.add(new JDynArray("two"));
params.add(new JDynArray("three"));
//Call jBC subroutine
JSubroutineParameters returnParams = cx.call("MySubroutine", params);
//Show parameters
System.out.println("1st parameter: " + returnParams.get(0).get(1));
System.out.println("2nd parameter: " + returnParams.get(1).get(1));
System.out.println("3rd parameter: " + returnParams.get(2).get(1));
```



**C#:**

```
//Specify subroutine parameters
JSubroutineParameters params = new JSubroutineParameters();
params.add(new JDynArray("one"));
params.add(new JDynArray("two"));
params.add(new JDynArray("three"));
//Call jBC subroutine
JSubroutineParameters returnParams = cx.call("MySubroutine", params);
//Show parameters
System.Console.Out.WriteLine("1st parameter: " + returnParams.get(0).get(1));
System.Console.Out.WriteLine("2nd parameter: " + returnParams.get(1).get(1));
System.Console.Out.WriteLine("3rd parameter: " + returnParams.get(2).get(1));
```

### 


### LOGGING INTO A jBASE ACCOUNT

*switchAccount(String user, String account, String password)*

Location: *JConnection*

Return type: *boolean*

Throws: *JRemoteException;*

#### 


**Java:**

```
//Switch jBASE account
boolean switchOK = cx.switchAccount("MyUserName", "MyAccount", "MyPassword");
```

#### 


#### **C#:**

```
//Switch jBASE account
bool switchOK = cx.switchAccount("MyUserName", "MyAccount", "MyPassword");
```

### 


### OPENING A jBASE FILE

*open(String fileName)*

Location: *JConnection*

Return type: *JFile*

Throws: *JRemoteException;*

*Notes: There is a current bug in the open module.  If the file cannot be opened no Exception is thrown.  Instead a null is returned as the file handle.*

#### 


**Java:**

```
//Open jBASE file
JFile myFile = cx. open("MyFileName");
```

**C#:**

```
//Open jBASE file
JFile myFile = cx. open("MyFileName");
```

### 


### OPERATING ON jBASE FILES

A jBASE file must have been opened prior to carrying out any of these file operations. These are some of the methods defined in interface *JFile*, to view all jBASE file operations please read the corresponding javadoc documentation.

- Write a record to a previously opened file
    - *write(String recordKey, JDynArray record)*
    - Return type: *boolean*
    - Throws: *JRemoteException*;




- Write a record to a previously opened file preserving locks
    - *writeU(String recordKey, JDynArray record, boolean blockedWrite)*
    - Return type: *boolean*
    - Throws: *JRecordLockedException*, *JRemoteException*;




- Reads a record from an opened file
    - *read(String recordKey)*
    - Return type: *JDynArray*
    - Throws: *JRecordNotFoundException*, *JRemoteException*




- Reads a record from an opened file respecting locks or locks the specified record for update
    - *readU(String recordKey, boolean blockedRead)*
    - Return type: *JDynArray*
    - Throws: *JRecordNotFoundException*, *JRecordLockedException*, *JRemoteException*




***Read / Write example:***

#### **Java:**

```
//Specify record data
JDynArray record = new JDynArray();
record.replace("Field1 test data", 1);
record.replace("Field2 test data", 2);
//Write record to file
boolean writeOK = file.write("MyRecordId", record));
//Read record from file
JDynArray record2 = file.read("MyRecordId");
```

#### 


#### **C#:**

```
//Specify record data
JDynArray record = new JDynArray();
record.replace("Field1 test data", 1);
record.replace("Field2 test data", 2);
//Write record to file
bool writeOK = file.write("MyRecordId", record));
//Read record from file
JDynArray record2 = file.read("MyRecordId");
```



***ReadU / WriteU example:***

#### **Java:**

```
//Obtain a record lock
file.readU("MyRecordId", true); //This method call blocks if another thread already
//has acquired a lock on this record
//Write record to file respecting the record lock
file.writeU("MyRecordId", new JDynArray("Field1 test data"), true);
//Release record lock
File.releaseLock("MyRecordId");
```

#### 


#### **C#:**

```
//Obtain a record lock
file.readU("MyRecordId", true); //This method call blocks if another thread already
//has acquired a lock on this record
//Write record to file respecting the record lock
file.writeU("MyRecordId", new JDynArray("Field1 test data"), true);
//Release record lock
File.releaseLock("MyRecordId");
```



***Non-blocking ReadU / WriteU example:***

#### **Java:**

```
//Obtain a record lock
try {
file.readU("MyRecordId", false); //This call will throw an exception if another
//thread has acquired a lock on this record
catch(JRecordLockedException le) {
System.out.println("Record is locked.");
}
//Write record to file. This will release the record lock
file.write("MyRecordId", new JDynArray("Field1 test data"), true);
```

#### 


#### **C#:**

```
//Obtain a record lock
try {
file.readU("MyRecordId", false); //This call will throw an exception if another
//thread has acquired a lock on this record
catch(JRecordLockedException le) {
System.Console.Out.WriteLine("Record is locked.");
}
//Write record to file. This will release the record lock
file.write("MyRecordId", new JDynArray("Field1 test data"), true);
```

### 


### EXECUTING A jBASE COMMAND

*execute(String fileName)*

Location:*JConnection*

Return type:*JExecuteResults*

Throws: *JRemoteException;*

#### 


#### **Java:**

```
//Execute jBASE command
JExecuteResults results = cx.execute("LIST MYFILE");
JSelectList returnList = results.getReturnList();
If(returnList.hasNext()) {
System.out.println("1st item of Select list: " + returnList.next());
}
System.out.println("CAPTURING: " + results.getCapturingVar().toString());
System.out.println("SETTING: " + results.getSettingVar().toString());
```

#### 


#### **C#:**

```
//Execute jBASE command
JExecuteResults results = cx.execute("LIST MYFILE");
JSelectList returnList = results.getReturnList();
If(returnList.hasNext()) {
System.Console.Out.WriteLine("1st item of Select list: " + returnList.next());
}
System.Console.Out.WriteLine("CAPTURING: " + results.getCapturingVar().ToString());
System.Console.Out.WriteLine("SETTING: " + results.getSettingVar().ToString());
```

### 


### OBTAINING THE jBASE INTERNAL DATE

*date()*

Location: *JConnection*

Return type: *int*

Throws: *JRemoteException;*

#### 


#### **Java:**

```
//Obtain the jBASE internal date
int myDate = cx. date();
```

#### 


#### **C#:**

```
//Obtain the jBASE internal date
int myDate = cx. date();
```

### 


### OBTAINING THE jBASE INTERNAL TIME

*time()*

Location:*JConnection*

Return type:*int*

Throws:*JRemoteException;*



#### **Java:**

```
//Obtain the jBASE internal time
int myDate = cx. time();
```

#### 


#### **C#:**

```
//Obtain the jBASE internal time
int myDate = cx. time();
```

### 


### CONVERTING DATA IN EXTERNAL FORMAT TO INTERNAL jBASE FORMAT

*iconv(String data, String conversion)*

Location: *JConnection*

Return type: *String*

Throws: *JRemoteException*;

#### 


#### **Java:**

```
//Convert date to internal jBASE format
String result = cx.iconv("02/02/2005", "D2/");
assertEquals("13548", result);
```

#### 


#### **C#:**

```
//Convert date to internal jBASE format
String result = cx.iconv("02/02/2005", "D2/");
assertEquals("13548", result);
```



### CONVERTING DATA IN INTERNAL jBASE FORMAT TO EXTERNAL FORMAT

*oconv(String data, String conversion)*

Location: *JConnection*

Return type: *String*

Throws: *JRemoteException*;

#### 
**Java:**

```
//Convert date to internal jBASE format
String result = cx.oconv("this is a test", "MCU");
assertEquals("THIS IS A TEST", result);
```

#### 


#### **C#:**

```
//Convert date to internal jBASE format
String result = cx.oconv("this is a test", "MCU");
assertEquals("THIS IS A TEST", result);
```

### 


### OBTAINING THE VALUE OF A NAMED jBASE COMMON VARIABLE

*getCommon(String name)*

Location: *JConnection*

Return type: *JDynArray*

Throws: *JRemoteException*;

#### 


#### **Java:**

```
//Obtain value of a jBASE Common variable
JDynArray value = cx.getCommon("MyCommon");
System.out.println("Value of named common MyCommon: " + value.get(1));
```

#### 


#### **C#:**

```
//Obtain value of a jBASE Common variable
JDynArray value = cx.getCommon("MyCommon");
System.Console.Out.WriteLine("Value of named common MyCommon: " + value.get(1));
```

### 


### OBTAINING EIS SPECIFIC META DATA

*getMetaData()*

Location: *JConnection*

Return type: *EISMetaDataRepository*

Throws: *JRemoteException*;

#### 


#### **Java:**

```
//Obtain a meta data value
EISMetaDataRepository mdRep = cx.getMetaData();
JDynArray jd = mdRep.getRepositoryEntry("MY_REPOSITORY_ENTRY");
System.out.println("Value of meta data entry: " + jd.get(1));
```

#### 


#### **C#:**

```
//Obtain a meta data value
EISMetaDataRepository mdRep = cx.getMetaData();
JDynArray jd = mdRep.getRepositoryEntry("MY_REPOSITORY_ENTRY");
System.Console.Out.WriteLine("Value of meta data entry: " + jd.get(1));
```

### 


### EXECUTING jQL QUERIES

*createStatement()*

Location: *JConnection*

Return type: *JStatement*

Throws: *JRemoteException*;



*execute()*

Location: *JStatement*

Return type: *JResultSet*

Throws: *JRemoteException*;

#### 


#### **Java:**

```
//Execute jQL query
JStatement statement = cx.createStatement();
JResultSet rs = statement.execute("LIST MYFILE *A1");
while(rs.next()) {
    JDynArray jd = rs.getRow();
    System.out.println(jd.get(1));
}
```

#### 


#### **C#:**

```
//Execute jQL query
JStatement statement = cx.createStatement();
JResultSet rs = statement.execute("LIST MYFILE *A1");
while(rs.next()) {
    JDynArray jd = rs.getRow();
    System.Console.Out.WriteLine(jd.get(1));
}
```

### 


### STARTING/ENDING A TRANSACTION

*begin()*

*commit()*

*rollback()*

Location: *JConnection*

Return types: *void*

Throws: *JRemoteException*;

#### 


#### **Java:**

```
//Start a transaction and perform a rollback
cx.begin();
myfile.write("MyRecordId", new JDynArray("My test data"));
cx.rollback();
//Start a transaction and perform a commit
cx.begin();
myfile.write("MyRecordId", new JDynArray("My test data"));
cx.commit();
```

#### 


#### **C#:**

```
//Start a transaction and perform a rollback
cx.begin();
myfile.write("MyRecordId", new JDynArray("My test data"));
cx.rollback();
//Start a transaction and perform a commit
cx.begin();
myfile.write("MyRecordId", new JDynArray("My test data"));
cx.commit();
```

### 


### CAPTURING jBASE STANDARD OUTPUT

*setTerminalOutputWriter(Writer writer)*

Location: *JConnection*

Return type: *void*

Throws: Nothing

#### 


#### **Java:**

```
//Set the writer for the terminal output to capture standard output
ByteArrayOutputStream bos = new ByteArrayOutputStream();
Writer writer = null;
try {
    writer = new OutputStreamWriter(bos, "UTF-8");
}catch (UnsupportedEncodingException e) {
    System.out.println("Error while creating OutputStreamWriter.");
}
cx.setTerminalOutputWriter(writer);
```

#### 


#### **C#:**

```
//Set the writer for the terminal output to capture standard output
System.IO.MemoryStream bos = new System.IO.MemoryStream();
System.IO.StreamWriter writer = null;
try
{
    writer = new System.IO.StreamWriter(bos, System.Text.Encoding.GetEncoding("UTF-8"));
}
catch (System.IO.IOException)
{
    System.Console.Out.WriteLine("Error while creating OutputStreamWriter.");
}
cx.TerminalOutputWriter = writer;
```
