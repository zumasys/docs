# jBASE 5.6.0 Release Notes

<PageHeader />

## What's New

NATIVE RESTFUL SERVICES

RESTful Services has become one of the most important technologies for integrating business applications with the web. As a universal way for applications to communicate with each other, every major development language now includes frameworks for building RESTful Services. Native RESTful Services in jBASE 5.6 allows us to bypass proprietary APIs and open up your jBASE database to any language environment, web service or application. Developers can now unleash the power of their application and communicate in a modern way with powerful web services and SaaS applications, like Salesforce, Dynamics or NetSuite. These innovations will allow our customers’ time-proven intellectual property to ride the latest technological trends that are transforming the world of business.

GRANULAR AUDIT LOGGING

Building on the success of jBASE 5.5, we’ve increased the granularity of logging options to enable deeper event audits for customers with even the most stringent compliance requirements. Now you can set logging options globally or at an individual file level. You can also apply audit logs to a remote copy of jBASE to accelerate the backup process and improve recovery point objectives.

UPDATED SYSTEM MANAGER

System Manager provides a single pane of glass from which to manage your jBASE database. We’ve updated this powerful web tool with improved file management capabilities, audit logging configuration capabilities, and user session management. From jBASE System Manager, you can now remotely manage all active user sessions and log out inactive users as needed.

NATIVE DATA ENCRYPTION

Get built-in data security and protection with the standard jBASE product for no additional cost. Native data encryption now makes it easy to meet increasing compliance requirements with granular encryption at the file level. Choose between file-level encryption and spooler-level encryption while maintaining the high performance your users expect.

## Components

- Net OBjEX Provides VB/.Net interoperability
- jRemote & jRCS Provide Native jBASE API’s for accessing jBC functions remotely from C#, Java or .NET

3rd Party Components

The jBASE 5.6 installation process includes installation of the following 3rd party components.

JAVA RUNTIME ENGINE

Built using the following Java versions:

- AIX 6.0 Java(TM) 2 Runtime Environment, Standard Edition (build 1.5.0\_12-b04)
- Solaris 10 SPARC Java(TM) 2 Runtime Environment, Standard Edition (build 1.5.0\_12-b04)
- Linux RH-AS5 Java(TM) 2 Runtime Environment, Standard Edition (build 1.5.0\_22-b03)
- Windows 64-bit Java(TM) 2 Runtime Environment, Standard Edition (build 1.6.0\_45)

INTERNATIONALIZATION LIBRARY

Required for Locale and Multi Byte character set support

- ICU 4.0.1

XML LIBRARY

Required for XML function support.

- XERCES 3.0.1
- XALAN 1.11.0
  
## Supported Platforms

This specific Patch Release provides support for the following platforms:

- AIX 6.0 (64-bit) \* (on request)
- Red Hat Enterprise Linux 5 (64-bit) \*
- Solaris 10 SPARC (64-bit) \* (on request)
- Windows Server 2008 & 2012 (64-bit)

\*This build is binary compatible with forward releases of the platform

- (e.g. AIX 6.1 -&gt; AIX 7.1)

\*Running on Red Hat 6 required the SSL compatibility library to be installed; this can be done with the following command:

- yum install openssl098e

Caveats

- jDP / Attunity Connect is not available for the 64-bit jBASE 5.6 release, replaced by jAgent/jODBC

Compilation

jBASE 5.6 is brought to you by the following compilers:

| <!----> | <!----> |
| --- | --- |
| Platform | Compiler version |
| AIX 6.0 | XL C/C++ Version 8.0.0.18 |
| Windows 64-bit | Visual Studio 2005 SP1 |
| RH Linux AS5 | gcc (GCC) 4.1.2 20080704 (Red Hat 4.1.2-44) |
| Solaris 10 SPARC | Sun Studio 11 |

## Patches

All patches from previous jBASE releases have been included where appropriate in jBASE 5.6. All Patch details for the jBASE 5.6 release are provided via the links below.

jBASE 5.6 patch release includes Patches PN5\_50468 through PN5\_60512

| <!----> | <!----> |
| --- | --- |
| Patch | Description |
| [5\_50468](./pn5_50468/README.md) | Add support for encryption to UD file types. |
| [5\_50469](./pn5_50469/README.md) | jQL not being able to access encrypted files. |
| [5\_50470](./pn5_50470/README.md) | Add support for encryption to spooler. |
| [5\_50471](./pn5_50471/README.md) | Add extensions to CREATE-FILE to enable encryption. |
| [5\_50504](./pn5_50504/README.md) | The Z and ZH commands do not allow concurrent background tasks |
| [5\_50507](./pn5_50507/README.md) | jQL: Null mutli-values do not display correctly |
| [5\_50508](./pn5_50508/README.md) | jRCS: Incorrect environment variable used for setting telnet parameter used in multi-session licensing |
| [5\_50509](./pn5_50509/README.md) | Case Independence: Extend J4 and JP file creation to allow case insensitive record IDs |
| [5\_50511](./pn5_50511/README.md) | jRCS: Additional code added to insert connection details into \*NIX utmp login record. This facilitates correct identification of client for multi-session licensing. |
| [5\_50513](./pn5_50513/README.md) | Case Independence: The 'not equal' operator (# ; <>; ><; NE) fails when comparing a variable with the concatenation of a literal and a variable |
| [5\_50514](./pn5_50514/README.md) | LIST-ITEM command does not display an error when no records are selected |
| [5\_50515](./pn5_50515/README.md) | Case Independence: The CASING statement and CASE command work differently to D3 |
| [5\_50516](.) | Case Independence: Allow SUBROUTINE names to be case insensitive. |
| [5\_50519](.) | Case Independence: Various changes to jFormatCode and jBC utilities related to case independence. |
| [5\_50520](./pn5_50520/README.md) | jSQL: ODBC dictionary parsing issue |
| [5\_50524](./pn5_50524/README.md) | Spooler: Update help page for the Windows lp command |
| [5\_50525](./pn5_50525/README.md) | jQL holding on to previous results |
| [5\_50526](./pn5_50526/README.md) | jQL issue with null associated multi-value sets when doing a division operation |
| [5\_50528](./pn5_50528/README.md) | jQL: Incorrect results when using BY-EXP expressions with Print Limiting |
| [5\_50533](./pn5_50533) | Fix to **jed** so that it recognizes DICT in any case, e.g. dict, Dict, etc. |
| [5\_50535](./pn5_50535) | Case Independence: Correct defaults for case insensitivity |
| [5\_50536](./pn5_50536) | Transaction Journaling: Automatic logset switching |
| [5\_50537](./pn5_50537) | Spooler: Provide compatibility with the D3 SP-ASSIGN syntax when assigning the number of copies |
| [5\_50538](./pn5_50538) | Transaction Journaling: Add 64 bit file support to TJ log files |
| [5\_60481](./pn5_60481) | Case Independence: Add a case insensitive version of HASH4 files |
| [5\_60487](./pn5_60487) | Enhance reliability of mutexes especially on Windows and with memory allocation |
| [5\_60493](./pn5_60493) | Indexes require 'write' permissions for other users to be able to access it with commands like LIST-INDEX and KEY-SELECT |
| [5\_60498](./pn5_60498) | Audit Logging: Don't log the DELETE statement if the item does not exist |
| [5\_60503](./pn5_60503) | Stop the Z command from consuming memory unnecessarily |
| [5\_60512](./pn5_60512) | D3 compatibility enhancements: ! in PERFORM/EXECUTE and SYSTEM(19) |

## New Commands

-

## New jBC Statements

-

## Changes to current behaviour

Modules

- Transaction Journaling

Commands

- CREATE-FILE
- SP-CREATE
- SP-ASSIGN
- Z
- ZH
- PH-START
- JLICENSINGINFO
- CASE
- JFORMATCODE
- LP
- JED
- JLOGMONITOR
- LIST-INDEX
- KEY-SELECT

jBC Statements/Functions

- CASING
- DELETE

## New Modules

- jAgent: RESTful Services
- Encryption

## Changes to Installers

- Changes have been made to the jBASE Installers to simplify the install process, see Installation Guides

## Installation Guides

[Windows Installation Guide](./../../administration/installation-guides/jbase-5.6-windows-installation-guide "Windows Installation Guide")

[Linux Installation Guide](jbase-56-linux-installation-guide "Linux Installation Guide")

[Back to 5.6.x Release Notes](./../README.md)

<PageFooter />
