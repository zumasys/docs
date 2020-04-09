# Notes on Environment Variables for the jBASE compiler

<PageHeader />

**Tags:**
<badge text='path' vertical='middle' />
<badge text='windows' vertical='middle' />
<badge text='compiler' vertical='middle' />
<badge text='environment variables' vertical='middle' />

Due to the deprecation of the Windows SDK for Windows 7 compiler, jBASE is now utilizing the C compiler for Visual Studio 2017 and more recently Visual Studio 2019.

One of the issues that users have encountered is a warning that PATH is too long and has been truncated.

If the "redundant" entries are removed from your PATH, together with the INCLUDE entries, that will help cut down on the size.

Depending on how you installed Visual Studio and/or the BuildTools, the “BuildTools” string may be replaced by “Professional”, for instance.

The “C:\Windows\system32\config\systemprofile\AppData\Local\Microsoft\WindowsApps” setting may be added to the Path in the user variables, but does not always exist.

Please also be aware that the Environment Variable settings for the Visual Studio 2017/2019 Build Tools are not 100% reliable, as the folders contain build version numbers which are liable to change over time as Microsoft issues updates.

* * *

## VS2017

### Note

>As of this writing, 'MSVCRT.lib' currently resides in “C:\Program Files (x86)\Microsoft Visual Studio\2017\BuildTools\VC\Tools\MSVC\14.15.27023\lib\x64”.
>
>That folder was previously “..\MSVC\14.15.27023\lib\x64” and "..\MSVC\14.15.26726\lib\x64”.
>
>There have been similar changes for one of the “LIB” and “INCLUDE” folders

Below are the PATH and INCLUDE Environment Variables that can be adjusted.

The "PATH" System Environment C variables that are installed by the jBASE compiler installer for **VS2017** , [VS2019](#vs2019) have:

```
C:\Program Files (x86)\Microsoft Visual Studio\2017\BuildTools\VC\Tools\MSVC\14.15.27023\bin\HostX64\x64;
C:\Program Files (x86)\Microsoft Visual Studio\2017\BuildTools\Common7\IDE\CommonExtensions\Microsoft\TestWindow;
C:\Program Files (x86)\Microsoft Visual Studio\2017\BuildTools\MSBuild\15.0\bin\Roslyn;
C:\Program Files (x86)\Windows Kits\10\bin\10.0.17763.0\x64;
C:\Program Files (x86)\Windows Kits\10\bin\x64;
C:\Program Files(x86)\Microsoft Visual Studio\2017\BuildTools\\MSBuild\15.0\bin;
C:\Windows\Microsoft.NET\Framework64\v4.0.30319; C:\Program Files (x86)\Microsoft Visual Studio\2017\BuildTools\Common7\IDE\;
C:\Program Files (x86)\Microsoft Visual Studio\2017\BuildTools\Common7\Tools\
```

jBASE requires:

```
C:\Program Files (x86)\Microsoft Visual Studio\2017\BuildTools\VC\Tools\MSVC\14.15.27023\bin\HostX64\x64;
C:\Program Files (x86)\Microsoft Visual Studio\2017\BuildTools\MSBuild\15.0\bin;
C:\Program Files (x86)\Microsoft Visual Studio\2017\BuildTools\Common7\IDE\;
C:\Program Files (x86)\Windows Kits\10\bin\10.0.17763.0\x64
```

The "INCLUDE" that are installed have:

```
C:\Program Files (x86)\Microsoft Visual Studio\2017\BuildTools\VC\Tools\MSVC\14.15.27023\include;
C:\Program Files (x86)\Windows Kits\10\include\10.0.17763.0\ucrt;
C:\Program Files (x86)\Windows Kits\10\include\10.0.17763.0\shared;
C:\Program Files (x86)\Windows Kits\10\include\10.0.17763.0\um;
C:\Program Files (x86)\Windows Kits\10\include\10.0.17763.0\winrt;
C:\Program Files (x86)\Windows Kits\10\include\10.0.17763.0\cppwinrt
```

jBASE requires:

```
C:\Program Files (x86)\Microsoft Visual Studio\2017\BuildTools\VC\Tools\MSVC\14.15.27023\include;
C:\Program Files (x86)\Windows Kits\10\include\10.0.17763.0\ucrt;
C:\Program Files (x86)\Windows Kits\10\include\10.0.17763.0\shared;
C:\Program Files (x86)\Windows Kits\10\include\10.0.17763.0\um;
```

The "LIB" should be:

```
C:\Program Files (x86)\Microsoft Visual Studio\2017\BuildTools\VC\Tools\MSVC\14.15.27023\lib\x64;
C:\Program Files (x86)\Windows Kits\10\lib\10.0.17763.0\ucrt\x64;
C:\Program Files (x86)\Windows Kits\10\lib\10.0.17763.0\um\x64;
```

* * *

## VS2019

The required environment variables for VS2019 are as follows:

"PATH"

```
C:\Program Files (x86)\Microsoft Visual Studio\2019\BuildTools\VC\Tools\MSVC\14.25.28610\bin\HostX64\x64;
C:\Program Files (x86)\Microsoft Visual Studio\2019\BuildTools\MSBuild\Current\bin;
C:\Program Files (x86)\Microsoft Visual Studio\2019\BuildTools\Common7\IDE\;
C:\Program Files (x86)\Windows Kits\10\bin\10.0.18362.0\x64
```

"INCLUDE"

```
C:\Program Files (x86)\Microsoft Visual Studio\2019\BuildTools\VC\Tools\MSVC\14.25.28610\include;
C:\Program Files (x86)\Windows Kits\10\include\10.0.18362.0\ucrt;
C:\Program Files (x86)\Windows Kits\10\include\10.0.18362.0\shared;
C:\Program Files (x86)\Windows Kits\10\include\10.0.18362.0\shared;
```

"LIB"

```
C:\Program Files (x86)\Microsoft Visual Studio\2019\BuildTools\VC\Tools\MSVC\14.15.27023\lib\x64;
C:\Program Files (x86)\Windows Kits\10\lib\10.0.18362.0\ucrt\x64;
C:\Program Files (x86)\Windows Kits\10\lib\10.0.18362.0\um\x64;
```

Back to [Environment Variables](./../README.md)
