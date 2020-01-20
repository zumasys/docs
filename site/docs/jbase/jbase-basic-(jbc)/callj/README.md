# CALLJ

**Created At:** 7/24/2017 12:26:25 PM  
**Updated At:** 4/24/2019 4:19:48 PM  
**Original Doc:** [264312-callj](https://docs.jbase.com/36868-jbase-basic/264312-callj)  
**Original ID:** 264312  
**Internal:** No  

**Tags:**
<badge text='calljee' vertical='middle' />
<badge text='java' vertical='middle' />
<badge text='callj' vertical='middle' />

# Description

The **CALLJ** command allows BASIC to call a Java method. **CALLJ** is useful when using third party applications offering a Java API (for example, publish and subscribe, messaging, etc.). The command may be used as:

```
CALLJ packageAndClassName, [$]methodName, param SETTING ret [ON ERROR] errStatment
```

Where:

- **packageAndClassName** is the “full” class name (e.g., com.jbase.util.utilClass)
- **methodName** is the name of the Java method in this class (e.g., “myMethod”)
- **param** is a String parameter (e.g., DynArray)


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

With regard errors, the [SYSTEM(0)](./../system-functions) variable may be used to manage any errors at the BASIC level which occur during the call. This variable can have the following values:


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
    package mypackage;
    public class mytestclass {
        static int i = 0;
        private mytestclass() {
        }

        public String mymethod(String s){
            return ("Java Received : " + s) ;
        }

        public static String mystaticmethod(String s){
            i++;
            return s + " " + i;
        }
    }
```

To call these methods from jBASE BASIC:

```
    CALLJ "mypackage.mytestclass","mymethod", p SETTING ret
    CRT ret
    CALLJ "mypackage/mytestclass","$mystaticmethod",p SETTING ret
    CRT ret
```

jBASE BASIC code using the ON ERROR will look like this:

```
     PROGRAM testcallj
     className = ''
     methodName = ''
     param = ''

     PROMPT ':'

     CRT "Please enter a Class Name ":; INPUT className
     CRT "Please enter a Method Name ":; INPUT methodName
     CRT "Please enter a Parameter ":; INPUT param

     CALLJ className,methodName, param SETTING ret ON ERROR GOTO errHandler

     CRT "Received back from Java :":ret

     STOP

 errHandler:
     err = SYSTEM(0)
     BEGIN CASE
     CASE err = 2
         CRT "Cannot find the JVM!"
     RETURN
```



The **CALLJ** function provides access to a Java VM from within the BASIC environment. For it to be able to start a JavaVM (JVM) the environment needs to know where the JVM is located. Specifically it needs to know where certain libraries are located.

Here's another, much simpler, example:

```
     PROGRAM starwars
     send_value = "Yoda says: "
     CALLJ "StarWars","jediQuote",send_value SETTING return_value ON ERROR CRT return_value
     CRT return_value
```

```
    public class StarWars
    {
        public String jediQuote( String recvValue )
        {
            System.out.print( recvValue );
            String quotation =  "\"The best teacher, failure is!\"";
            return quotation;
        }
    }
```

The result of running the jBC **starwars** program:

```
Yoda says: "The best teacher, failure is!"
```

# Troubleshooting

If the program is unable to load the class: first test that the native **java** command line program can load the class (it will be necessary to add a *public static void main* method) .

```
java mypackage.mytestclass
```

If the above fails check the **CLASSPATH**.

If **JBCJVMLIB** is not yet defined, set it to the jvm library from the same java version the class(es) is being compiled.

If you get a return code of "6" and you can successfully test your class/method using generic java, check that your method only has a String as the argument and also returns a String.



Go back to [jBASE BASIC](./../jbase-basic-programmers-reference-guide).
