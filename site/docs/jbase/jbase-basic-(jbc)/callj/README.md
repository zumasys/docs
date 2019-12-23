# CALLJ

**Created At:** 7/24/2017 12:26:25 PM  
**Updated At:** 4/24/2019 4:19:48 PM  
**Original Doc:** [264312-callj](https://docs.jbase.com/36868-jbase-basic/264312-callj)  

**Tags:**
<badge text='caljee' vertical='middle' />
<badge text='java' vertical='middle' />
<badge text='callj' vertical='middle' />

# Description

The **CALLJ** command allows BASIC to call a Java method. **CALLJ**is useful when using third party applications offering a Java API (for example, publish and subscribe, messaging, etc.). The command may be used as:

```
CALLJ packageAndClassName, [$]methodName, param SETTING ret [ON ERROR] errStatment
```

Where:

- **packageAndClassName**is the “full” class name (e.g., com.jbase.util.utilClass)
- **methodName**is the name of the Java method in this class (e.g., “myMethod”)
- **param**is a String parameter (e.g., DynArray)


## Note:


> If the method is static,  a ‘$' must appended before the name.  This ‘$’ will be removed from the method name before calling it.
> 
> In order to use **CALLJ**, a Java virtual machine must be present, a CLASSPATH environment variable must be set to point to the class to be invoked.


The Java virtual machine is loaded dynamically at run-time, so a compiled basic application has no dependencies on any Java virtual machine. By default, the program will search for:

- jvm.dll on Windows platforms
- libjvm.so for other platforms


Although it is not always necessary, it is possible to specify a Java library by setting the JBCJVMLIB environment variable:

```
set JBCJVMLIB=%JAVA_HOME%\jre\bin\classic\jvm.dll
```

```
export JBCJVMLIB=$JAVA_HOME/jre/lib/amd64/server/libjvm.so
```

The first call to **CALLJ** carries the overhead of loading the Java Virtual Machine into memory.

Subsequent calls do not have this overhead and it is recommended that programs are structured in such a way that the Java Virtual Machine is only loaded once, for performance reasons.

In addition, calls to non static methods carry the overhead of calling the constructor for the class.Wherever possible, static methods should be used.

With regard errors, the [SYSTEM(0)](./../system-functions) variable may be used to manage any errors at the BASIC level, which occur during the call. This variable can have the following values:


| Value | Description |
| --- | --- |
| 1<br> | Fatal error creating thread<br> |
| 2<br> | Cannot create JVM<br> |
| 3<br> | Cannot find class<br> |
| 4<br> | Unicode conversion error<br> |
| 5<br> | Cannot find method<br> |
| 6<br> | Cannot find object constructor<br> |
| 7<br> | Cannot instantiate object<br> |




Before the java method can be called, it must first be created in Java:

```
001    package mypackage;
002    public class mytestclass {
003        static int i = 0;
004        private mytestclass() {
005        }
006
007        public String mymethod(String s){
008            return ("Java Received : " + s) ;
009        }
010
011        public static String mystaticmethod(String s){
012            i++;
013            return s + " " + i;
014        }
015    }
```

To call these methods from jBASE BASIC:

```
001    CALLJ "mypackage.mytestclass","mymethod", p SETTING ret
002    CRT ret
003    CALLJ "mypackage/mytestclass","$mystaticmethod",p SETTING ret
004    CRT ret
```

jBASE BASIC code using the ON ERROR will look like this:

```
0001     PROGRAM testcallj
0002     className = ''
0003     methodName = ''
0004     param = ''
0005
0006     PROMPT ':'
0007
0008     CRT "Please enter a Class Name ":; INPUT className
0009     CRT "Please enter a Method Name ":; INPUT methodName
0010     CRT "Please enter a Parameter ":; INPUT param
0011
0012     CALLJ className,methodName, param SETTING ret ON ERROR GOTO errHandler
0013
0014     CRT "Received back from Java :":ret
0015
0016     STOP
0017
0018 errHandler:
0019     err = SYSTEM(0)
0020     BEGIN CASE
0021     CASE err = 2
0022         CRT "Cannot find the JVM!"
0023     RETURN
```



The **CALLJ** function provides access to a JavaVM from within the BASIC environment. For it to be able to start a JavaVM (JVM) the environment needs to know where the JVM is located. Specifically it needs to know where certain libraries are located.

Here's another, much simpler, example:

```
0001     PROGRAM starwars
0002     send_value = "Yoda says: "
0003     CALLJ "StarWars","jediQuote",send_value SETTING return_value ON ERROR CRT return_value
0004     CRT return_value
```

```
001    public class StarWars
002    {
003        public String jediQuote( String recvValue )
004          {
005               System.out.print( recvValue );
006               String quotation =  "\"The best teacher, failure is!\"";
007               return quotation;
008          }
009    }
```

The result of running the jBC **starwars**program:

```
Yoda says: "The best teacher, failure is!"
```

# Troubleshooting

If the program is unable to load the class: first test that the native **java**command line program can load the class (it will be necessary to add a *public static void main* method) .

```
java mypackage.mytestclass
```

If the above fails check the **CLASSPATH**.

If **JBCJVMLIB**is not yet defined, set it to the jvm library from the same java version the class(es) is being compiled.

If you get a return code of "6" and you can successfully test your class/method using generic java check that your method only has a String as the argument and also returns a String.



Go back to [jBASE BASIC](./../jbase-basic-programmers-reference-guide).
