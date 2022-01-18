# JBSE-5852

<PageHeader />

## Description

When jcompile.cc.path value is too long, Windows compiler fails

## Previous Release behavior

The jcompile.cc.path is an entry in the %JBCRELEASEDIR%/config/system.properties file:

```text
#################################################################
#
# Mainly for Windows platform with Visual Studio compiler
# but will work with any platform / compiler. The values
# of these properties are prepended to the process' PATH,
# INCLUDE & LIB environment variables before executing
# cc, link, mt, etc. to set up the compiler environment.
# These properties are initialized on Windows by jBASE
# compiler installer which invokes VCVARS64.BAT and checks
# the new environment afterwards.
# ------------------------------------
jcompile.cc.path=C:\\Program Files (x86)\\Microsoft Visual Studio\\2019\\BuildTools\\VC\\Tools\\MSVC\\14.29.30133\\bin\\HostX64\\x64;C:\\Program Files (x86)\\Windows Kits\\10\\bin\\10.0.19041.0\\x64;C:\\Program Files (x86)\\Windows Kits\\10\\bin\\x64;C:\\Program Files (x86)\\Microsoft Visual Studio\\2019\\BuildTools\\\\MSBuild\\Current\\Bin;C:\\Windows\\Microsoft.NET\\Framework64\\v4.0.30319;C:\\Program Files (x86)\\Microsoft Visual Studio\\2019\\BuildTools\\Common7\\IDE\\;C:\\Program Files (x86)\\Microsoft Visual Studio\\2019\\BuildTools\\Common7\\Tools\\;C:\\Program Files (x86)\\Microsoft Visual Studio\\2019\\BuildTools\\Common7\\IDE\\CommonExtensions\\Microsoft\\CMake\\CMake\\bin
jcompile.cc.include=C:\\Program Files (x86)\\Microsoft Visual Studio\\2019\\BuildTools\\VC\\Tools\\MSVC\\14.29.30133\\include;C:\\Program Files (x86)\\Windows Kits\\NETFXSDK\\4.8\\include\\um;C:\\Program Files (x86)\\Windows Kits\\10\\include\\10.0.19041.0\\ucrt;C:\\Program Files (x86)\\Windows Kits\\10\\include\\10.0.19041.0\\shared;C:\\Program Files (x86)\\Windows Kits\\10\\include\\10.0.19041.0\\um;
jcompile.cc.lib=C:\\Program Files (x86)\\Microsoft Visual Studio\\2019\\BuildTools\\VC\\Tools\\MSVC\\14.29.30133\\lib\\x64;C:\\Program Files (x86)\\Windows Kits\\NETFXSDK\\4.8\\lib\\um\\x64;C:\\Program Files (x86)\\Windows Kits\\10\\lib\\10.0.19041.0\\ucrt\\x64;C:\\Program Files (x86)\\Windows Kits\\10\\lib\\10.0.19041.0\\um\\x64
#
```

jProperties.h load() had a fixed 2K buffer for reading lines from system.properties. If any property values or even comments exceeded this, load() failed to read in all the properties. This would typically set an incomplete PATH environment variable for the compiler, causing compile operations to fail.

## Current Release behavior

Changing fixed size buffer to std::string corrects this.

## Notes

The jcompile.cc.path value be updated when needed by running the jBASE installer from an Administrator command prompt using the "/compiler" option, i.e.:

```text
C:\Temp\Install>jbase_5.8.5_ea70bf1d_64bit.exe /compiler
```

Back to [5.8.5 Release Notes](./../README.md)

<PageFooter />
