# CALLdotNET

**Created At:** 7/24/2017 12:18:43 PM  
**Updated At:** 10/25/2018 7:23:35 AM  
**Original Doc:** [264309-calldotnet](https://docs.jbase.com/36868-jbase-basic/264309-calldotnet)  
**Original ID:** 264309  
**Internal:** No  


# Description

This command allows BASIC to call any .NET assembly and is useful when using third party applications. It usually takes the form:

```
CALLdotNET NameSpaceAndClassName, methodName, param SETTING ret [ON ERROR errStatment]
```

Where:

- **NameSpaceAndClassName** is the “full” NameSpace (e.g.,MyNameSpace.MyClass),
- **methodName** is the name of the .NET method/ function in this class (e.g., “myMethod”),
- **Param** is any parameter (eg DynArray).


## Note:


> In order to use **CALLdotNET**, the .NET Framework and the dotNETWrapper.dll must be appropriately installed.
> 
> The dotNETWrapper is loaded dynamically at runtime; therefore, a compiled basic application has no dependencies on the .NET Framework. A slight delay may occur when calling the .NET method for the first time.


With regard errors that occur during the call at the BASIC level, the [SYSTEM(0)](./../system-functions) variable may be used. The variable can have the following values:


| Value  | Description  |
| --- | --- |
| 1<br> | Not a Windows platform.<br> |
| 2<br> | Cannot load the dotNETWrapper<br> |
| 3<br> | Cannot get assembly<br> |
| 4<br> | Cannot get Class<br> |
| 5<br> | Cannot get Class<br> |
| 6<br> | Cannot Create Instance<br> |
| 7<br> | Unhandled Error in the .NET library<br> |




Before the **CALLdotNET** function is called, the .NET functions must be first created. This can be accomplished as below:

In C#:

```
001    using System;
002    using System.Windows.Forms;
003    namespace myNameSpace
004    {
005        public class Class1
006        {
007            public string sayHello(string str)
008            {
009            return “Thank you, I received : “ + str;
010            }
011        public Class1(){}
012        }
013    }
```

In VB.NET:

```
001    Namespace myNameSpace
002        Public Class Class1
003            Public Function sayHello(ByVal str As String) As String
004            Dim sAnswer As String
005            sAnswer = InputBox(str)
006            sayHello = sAnswer
007            End Function
008        End Class
009    End Namespace
```

It is important that the .NET project be created as a ‘Class Library’. If using the visual studio IDE, this option is selected when creating a new project. If using .NET SDK (instead of the IDE) to compile class libraries into a ‘DLL’ file, the ‘csc’ (C# Compiler) or ‘vbc’ (Visual Basic .NET compiler) command can be used from the command line:

```
csc /out:myNameSpace.dll /target:library sourcefile.cs
```

The name of the ‘.DLL’ created must be the same as the ‘namespace’ as used in the class library t locate the ‘dotNetWrapper.dll’ library:

After creating the library, place it in the same private directory as the application. (i.e. the same directory as the jBASE BASIC executable that will call the class) This is a requirement of the .NET paradigm and not jBASE. The directory should also be in the PATH environment variable.

After creating the functions above, the function can be used as:

```
CALLdotNET "myNameSpace.Class1","sayHello", p SETTING ret
CRT ret
```



BASIC code using the ON ERROR would look like this:

```
0009     CRT "Please enter a Parameter : "
0010     INPUT param
0011     CALLdotNET ns.className, methodName, param SETTING ret \
0012     ON ERROR GOSUB errHandler
0013     CRT "Received back from .NET : " : ret
0014     STOP
0015 * errHandler:
0017     err = SYSTEM(0)
0018     BEGIN CASE
0019     CASE err = 2
0020         CRT "Cannot find dotNETWrapper.dll"
0021     CASE err = 3
0022         CRT "Class " :ns.className : " doesn't exist !"
0023     CASE err = 5
0024         CRT "Method " : methodName : "doesn't exist !"
0025     END CASE
0026     RETURN
```



Go back to [jBASE BASIC](./../jbase-basic-programmers-reference-guide).
