# jRCS Client Compilation Instructions


**Created At:** 7/20/2017 1:38:38 PM  
**Updated At:** 7/20/2017 1:39:06 PM  
**Original Doc:** [jrcs-client-compilation-instructions](https://docs.jbase.com/30301-jbase/jrcs-client-compilation-instructions)  
**Original ID:** 263832  
**Internal:** Yes  

## .NET Client

### .NET Prerequisites

- Microsoft Visual Studio 2005 Professional (C# compiler and installation builder are required)
- Eazfuscator.NET (can be downloaded from this [homepage](http://www.foss.kharkov.ua/g1/projects/eazfuscator/dotnet/Default.aspx))
- NUnit (optional, only if running unit tests)

### .NET Dependency Installation

Both Eazfuscator.NET and NUnit install in a relatively straightforward fashion. Please make sure that Eazfuscator.NET setup adds the executable to the system path. This is important for obtaining a properly obfuscated build.

### .NET One-Time Setup Tasks

- Unzip the source into a directory of your choice. Preserve the paths in the archive as you unzip.

### Building JRClient.NET

- Open JRClient.sln in the source directory with Visual Studio 2005. This will load three projects – JRClient.NET, JRClientUnitTest and JRClientInstall.
- From Build/Configuration Manager menu select the desired configuration. Use the Debug/Any CPU configuration for debugging and Release/Any CPU for building an obfuscated distributable assembly.
- Right-click JRClient.NET in Solution Explorer and select Build from the popup menu. This will build the JRClient.NET assembly. In release mode this step will also perform obfuscation.
- If an MSI installer build is needed, right-click the JRClientInstall project in Solution Explorer and select Build from the popup menu. The resulting MSI will be placed in the Dist subdirectory of the source tree.

## Java Client

### Java Prerequisites

Eclipse IDE. I use Helios SR1 (3.6.1), but the latest (Indigo) should work just fine. The simplest Java SE development distribution should be sufficient.

JDK 1.4.2 or higher. Note that if you compile for JDK 1.5 or higher, the resulting JAR will not work with earlier versions of Java.

yGuard obfuscator from yWorks (a completely free distribution can be downloaded [here](http://www.yworks.com/en/products_yguard_about.html))

### Java Dependency Installation

Start with installing the JDK and Eclipse. The Eclipse distro contains a distribution of Ant, so external instance should not be needed. Install yGuard last.

### Java One-Time Setup Tasks

- Unzip the source into a directory of your choice. Preserve the paths in the archive as you unzip.
- Open Eclipse and create a blank workspace (or use the default workspace).
- From the File menu select Import.
- In the Import dialog select General/Existing Projects into Workspace as shown below:
- Click Next. In the “Select root directory” line select the directory where you unzipped the source. Eclipse should pick up the project and display it in the list of projects as shown below:
- Make sure that “JRClient” is checked and click Finish. The project will be imported into workspace. If an error comes up regarding the missing YGUARD variable, disregard it. It will be fixed in the next step.
- Open the Preferences dialog from the Window menu. In the tree on the left hand side select Run/Debug, then String Substitution. On the right hand side add a new variable called YGUARD (all uppercase) and set its value to the lib subfolder of the yGuard installation folder. Here is an example:

1. If Eclipse complains about the missing JRE library, right-click the project and choose Build Path/Configure Build Path. In the dialog that comes up delete the JRE library already in the project and add the one you installed earlier.
2. Open the Project menu and uncheck the Build Automatically option.

### Building JRClient/Java

To build the client, choose Build Project from the Project menu. The build process will generate two files, jrclient.jar and jrclient\_j.jar. The former is the unobfuscated version suitable for debugging. The latter is the release-grade obfuscated version.

To generate Javadoc select Generate Javadoc from the Project menu.
