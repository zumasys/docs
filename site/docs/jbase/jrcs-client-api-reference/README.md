# jRCS Client API reference

**Created At:** 10/15/2018 11:15:01 AM  
**Updated At:** 12/21/2018 10:27:27 PM  
**Original Doc:** [jrcs-client-api-reference](https://docs.jbase.com/jrcs-client-api-reference)  
**Original ID:** 343778  
**Internal:** No  


**Logging into a jBASE account**

```
public void Open(string hostName, int portNumber, string userName, string password, string account);
```



Class: *JConnection*

Return type: *void*

Throws: *JException*;

```
Java:
// Log in to jBASE
jc = new JConnection();
jc.open(hostName, JConstants.JRCS_PORT, username, password, "");
```



```
C#:
// Log in to jBASE
JConnection jc = new JConnection
jc.Open(ipAddress, JConnection.JRCS_PORT, username, password, "");
```



**Calling jBC subroutines**



```
public void Call(string subName, string[] parms);
public void Call(string subName);
public void Call(string subName, JDynArray[] parms); 
```



Class: *JConnection*

Return type: *void*

Throws: *JException*;



```
Java:
// Call a BASIC subroutine with two arguments
JDynArray[] jargs = new JDynArray[2];
jargs[0] = new JDynArray();
jargs[1] = new JDynArray();
jc.call(“exampleSub”, jArgs);
System.out.println(jargs[0]);
System.out.println(jargs[1]);
```

```
C#:
// Call a BASIC subroutine with two arguments
JDynArray[] Params = new JDynArray[7];
Params[0] = new JDynArray();
Params[1] = new JDynArray();
Conn.Call("examplesub", Params);
string result = "arg1 = " + Params[0].ToString() + Environment.NewLine + "arg2 = " + Params[1].ToString();
```



**Opening a jBASE file**

A jRCS Connection must have been opened prior to opening a file.

```
public JFile OpenFile(string fileName);
```



Class: *JConnection*

Return type: *JFile*

Throws: *JException*;

```
Java:
//Open a jBASE file
JFile testFile = jc.OpenFile("TestFile");
```



```
C#:
//Open jBASE file
JFile testFile = Conn.OpenFile("TestFile");
```



**jBASE files operations**

A jBASE file must have been opened prior to carrying out any of these file operations.

These are some of the methods defined in interface *JFile*,

```
public JDynArray Read(string key, bool locked, bool wait);
public JDynArray Read(string key, bool locked);
public JDynArray Read(string key);
public void Write(string key, JDynArray data);
public void Write(string key, JDynArray data, bool unlock);
```



Class: *JFile*

Return type: *JDynArray*

Throws: *JException*



```
Java:
// Read a record from an opened file
JDynArray rec = testFile.read(id, false, false);
 
```

```
C#:
// Read a record from an opened file
JDynArray jDynArray = testFile.Read(RecId, false, false);
```



Class: *JFile*

Return type: *JDynArray*

Throws: *JException*

jRCS record locking will wait indefinitely for a lock; it is recommended to use the "wait" function only on records that are expected to be available. Alternatively, you can read without a wait, and catch the exception thrown to check for a lock.

```
Java:
// Read a record from an opened file with locking, wait (ReadU)
JDynArray rec = testFile.read(id, true, true);
```

```
C#:
// Read a record from an opened file with locking, no wait (ReadU)
JDynArray jDynArray = testFile.Read(RecId, true, false);
```



Class: *JFile*

Return type: *void*

Throws: *JException*;

```
Java:
// Write a record to a previously opened file, releasing the lock
testFile.write(id,rec);
```

```
C#:
// Write a record to a previously opened file, releasing the lock
testFile.Write(RecId, jDynArray, true);
```



Class: *JFile*

Return type: *void*

Throws: *JException*;

```
Java:
// Write a record to a previously opened file, preserving the lock (WriteU)
testFile.write(id,rec, false);
```

```
C#:
// Write a record to a previously opened file, preserving the lock (WriteU)
testFile.Write(RecId, jDynArray, false);
```

**Executing a jBASE command**

```
public JExecuteResults Execute(string command, JExecFlags flags);
public enum JExecFlags
    {
        EXEC_DEFAULT = 0,
        EXEC_GET_CAPTURE = 1,
        EXEC_GET_RETURNSTRING = 2,
        EXEC_GET_RETURNLIST = 4
    }
```



Class: *JConnection*

Return type: *JExecuteResults*

Throws: *JException*;

```
Java:
// Execute a jBASE command
JExecuteResults res;
int flag = 1;
String command = "jshow -c jrcssub";
res = jc.execute(command, flags); // This is the equivalent of JExecFlags.EXEC_GET_CAPTURE
String result = res.getCaptureString();
```

```
C#:
// Execute a jBASE command
private const JExecFlags Flags = JExecFlags.EXEC_GET_CAPTURE | JExecFlags.EXEC_GET_RETURNLIST | JExecFlags.EXEC_GET_RETURNSTRING;
string strCommand = "jdiag -dvL";
JExecuteResults Results = Conn.Execute(strCommand, Flags);
string strTemp = Results.CaptureString;
```



**Obtaining the current jBASE internal date**

```
public int Date { get; }
public string OConv(string source, string code);
```



Class: *JConnection*

Return type: *int*

Throws: *JException*;

```
Java:
// Obtain the date from the jBASE in internal format and convert to external format
int thisDate = jc.getDate();
String currentDate = jc.oConv(String.valueOf(thisDate), "D4");
```

```
C#:
// Obtain the date from the jBASE in internal format and convert to external format
int thisDate = jc.Date;
string currentDate = jc.OConv(thisDate.ToString(), "D4");
```



**Executing jQL queries**

```
public JExecuteResults ExecuteAndStore(string command, JExecFlags flags);
public JExecuteResults ExecuteAndStore(string command, JExecFlags flags, JSelectList passList);
public JExecuteResults ExecuteAndStore(string command, JExecFlags flags, JSelectList passList, int blockSize);
```



Class: *JConnection*

Return type: *JExecuteResults*

Throws: *JException*;

```
Java:
// Execute a jQL query
static char esc = '\u001B';
static char AM = JConstants.AM;
static JExecuteResults res;
static JCapture cap;
int flags = 7;
String blk = null;
String pageBrk = String.format("{0}[H{0}[J", esc);
String report = "";
command = "SORT CUSTOMER BY CUS.NAME CUS.NAME CUS.CITY CUS.PHONE (N";
JSelectList jsl = null;
res = jc.executeAndStore(command, flags, jsl, blockSize);
if (res instanceof JExecuteResults)
{
    cap = res.getCapture();
    if (cap instanceof JCapture)
    {
        while (!cap.atEnd())
        {
            blk = cap.nextBlock();
            blk = blk.replace(AM, '\n');
            blk = blk.replace(pageBrk, System.lineSeparator() + System.lineSeparator());
            report = report + blk;
        }
    }
 }
 System.out.println(report);
 
```



```
C#:
// Execute a jQL query
private const JExecFlags Flags = JExecFlags.EXEC_GET_CAPTURE | JExecFlags.EXEC_GET_RETURNLIST | JExecFlags.EXEC_GET_RETURNSTRING;
JExecuteResults Result = null;
JCapture Cap = null;
string Blk = null;
string PageBrk = string.Format("{0}[H{0}[J", (char)27);
string Report = "";
string Command = "SORT CUSTOMER BY CUS.NAME CUS.NAME CUS.CITY CUS.PHONE (N";
JSelectList Dummy = null;
Result = jc.ExecuteAndStore(Command, Flags, Dummy, 2048);
if (Result is JExecuteResults)
{
   Cap = Result.Capture;
   if (Cap is JCapture)
   {
      while (!(Cap.AtEnd))
      {
          Blk = Cap.NextBlock();
          Blk = Blk.Replace(JDynArray.AM.ToString(), "\n");
          Blk = Blk.Replace(PageBrk, Environment.NewLine + Environment.NewLine);
          Report = Report + Blk;
      }
   }
}
Console.WriteLine(Report);
```



**Get the current jBASE version**

```
public int Time { get; }
public string Locale { get; }
public JDynArray jBaseVersion { get; }
public int Date { get; }
public string CodePage { get; }
public int Port { get; }
```



Class: *JConnection*

Return type: *various*

Throws: *JException*;

```
Java:
// Get jBASE version
JDynArray jbaseVersion = jc.getjBaseVersion();
String versionNumber = jbaseVersion.extract(1) + "." + jbaseVersion.extract(2);
System.out.println("Current jBASE version is " + versionNumber + "!");
```

```
C#: 
// Get jBASE version
JDynArray jbaseVersion = jc.jBaseVersion;
string versionNumber = jbaseVersion.Extract(1) + "." + jbaseVersion.Extract(2);
Console.WriteLine(value: "Current jBASE version is " + versionNumber + "!");
```



**jDynArray manipulation**



```
public void Assign(JDynArray src);
public void Assign(string src);
public int Count(char delim);
public int Count(string delim);
public int DCount(string delim);
public int DCount(char delim);
public void Delete(int amc, int vmc, int svmc);
public void Delete(int amc, int vmc);
public void Delete(int amc);
public string Extract(int amc);
public string Extract(int amc, int vmc);
public string Extract(int amc, int vmc, int svmc);
public JDynArray ExtractDA(int amc, int vmc);
public JDynArray ExtractDA(int amc, int vmc, int svmc);
public JDynArray ExtractDA(int amc);
public string Field(char delim, int fieldNo);
public string Field(string delim, int fieldNo);
public void Insert(string data, int amc, int vmc);
public void Insert(string data, int amc);
public void Insert(JDynArray data, int amc);
public void Insert(JDynArray data, int amc, int vmc);
public void Insert(JDynArray data, int amc, int vmc, int svmc);
public void Insert(string data, int amc, int vmc, int svmc);
public void InsertDA(JDynArray data, int amc);
public void InsertDA(JDynArray data, int amc, int vmc, int svmc);
public void InsertDA(JDynArray data, int amc, int vmc);
public int Locate(string searchStr, int amc, int vmc, string order, int start);
public int Locate(string searchStr, int amc, string order, int start);
public int Locate(string searchStr, int amc, int vmc, string order);
public int Locate(string searchStr, int amc, string order);
public int Locate(string searchStr);
public int Locate(string searchStr, string order);
public int LocateIgnoreCase(string searchStr);
public int LocateIgnoreCase(string searchStr, string order);
public int LocateIgnoreCase(string searchStr, int amc, string order);
public int LocateIgnoreCase(string searchStr, int amc, int vmc, string order);
public int LocateIgnoreCase(string searchStr, int amc, string order, int start);
public int LocateIgnoreCase(string searchStr, int amc, int vmc, string order, int start);
public void Replace(string data, int amc);
public void Replace(string data, int amc, int vmc);
public void Replace(string data, int amc, int vmc, int svmc);
public void Replace(JDynArray data, int amc);
public void Replace(JDynArray data, int amc, int vmc);
public void Replace(JDynArray data, int amc, int vmc, int svmc);
public void ReplaceDA(JDynArray data, int amc);
public void ReplaceDA(JDynArray data, int amc, int vmc);
public void ReplaceDA(JDynArray data, int amc, int vmc, int svmc);
```



Class: *JDynarray*

Return type: *various*

Throws: *JException*;



```
Java:
// Sample jDynArray instructions
JDynArray dynTest = new JDynArray();
dynTest.insert("One", 1);
dynTest.replace("Two", 2);
JDynArray dynTest2 = new JDynArray("Three");
dynTest.insertDA(dynTest2, 3);
dynTest.insert("This is a long string of text", -1);
String tempTest = dynTest.extract(3);
int locVar = dynTest.locate("Three", "");
String locVarContent = dynTest.extract(locVar);
String locVarContentAgain = dynTest.field(JConstants.AM, locVar);
```

```
C#:
// Sample jDynArray instructions
JDynArray dynTest = new JDynArray();
dynTest.Insert("One", 1);
dynTest.Replace("Two", 2);
JDynArray dynTest2 = new JDynArray("Three");
dynTest.InsertDA(dynTest2, 3);
dynTest.Insert("This is a string of text", -1);
string tempTest = dynTest.Extract(3);
int locVar = dynTest.Locate("Three", "");
string locVarContent = dynTest.Extract(locVar);
string locVarContentAgain = dynTest.Field(JDynArray.AM, locVar);
```
