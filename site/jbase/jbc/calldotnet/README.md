# CALLdotNET

<PageHeader />

## Description

This command allows BASIC to call any .NET assembly and is useful when using third party applications. It usually takes the form:

``` basic
CALLdotNET NameSpaceAndClassName, methodName, param SETTING ret [ON ERROR errStatment]
```

Where:

- **NameSpaceAndClassName** is the “full” NameSpace (e.g.,MyNameSpace.MyClass),
- **methodName** is the name of the .NET method/ function in this class (e.g., “myMethod”),
- **Param** is any parameter (e.g., DynArray).

## Note

> In order to use **CALLdotNET**, the .NET Framework and the dotNETWrapper.dll must be appropriately installed.
>
> The dotNETWrapper is loaded dynamically at runtime; therefore, a compiled basic application has no dependencies on the .NET Framework. A slight delay may occur when calling the .NET method for the first time.

With regard errors that occur during the call at the BASIC level, the [SYSTEM(0)](./../system-functions) variable may be used. The variable can have the following values:

| Value  | Description  |
| --- | --- |
| 1 | Not a Windows platform. |
| 2 | Cannot load the dotNETWrapper |
| 3 | Cannot get assembly |
| 4 | Cannot get Class |
| 5 | Cannot get Class |
| 6 | Cannot Create Instance |
| 7 | Unhandled Error in the .NET library |

Before the **CALLdotNET** function is called, the .NET functions must be first created. This can be accomplished as below:

In C#:

``` CSharp
using System;
using System.Windows.Forms;
namespace myNameSpace
{
    public class Class1
    {
        public string sayHello(string str)
        {
            return “Thank you, I received : “ + str;
        }
    public Class1(){}
    }
}
```

In VB.NET:

``` vbnet
Namespace myNameSpace
    Public Class Class1
        Public Function sayHello(ByVal str As String) As String
        Dim sAnswer As String
        sAnswer = InputBox(str)
        sayHello = sAnswer
        End Function
    End Class
End Namespace
```

It is important that the .NET project be created as a ‘Class Library’. If using the Visual Studio IDE, this option is selected when creating a new project. If using .NET SDK (instead of the IDE) to compile class libraries into a ‘DLL’ file, the ‘csc’ (C# Compiler) or ‘vbc’ (Visual Basic .NET compiler) command can be used from the command line:

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
     CRT "Please enter a Parameter : "
     INPUT param
     CALLdotNET ns.className, methodName, param SETTING ret \
     ON ERROR GOSUB errHandler
     CRT "Received back from .NET : " : ret
     STOP
*  
errHandler:
     err = SYSTEM(0)
     BEGIN CASE
     CASE err = 2
         CRT "Cannot find dotNETWrapper.dll"
     CASE err = 3
         CRT "Class " :ns.className : " doesn't exist !"
     CASE err = 5
         CRT "Method " : methodName : "doesn't exist !"
     END CASE
     RETURN
```

Go back to [jBASE BASIC](./../README.md)

Go back to [Programmers' Reference Guide](./../../reference-guides/jbc/README.md)

<PageFooter />
