# jBASE Encryption

**Created At:** 5/30/2019 11:44:56 PM  
**Updated At:** 5/31/2019 7:57:56 PM  
**Original Doc:** [jbase-encryption](https://docs.jbase.com/encryption/jbase-encryption)  
**Original ID:** 391951  
**Internal:** No  

## Introduction

This document describes updated jBASE encryption as introduced in jBASE 5.7.1. The functionality of encryption described in this article differs greatly from the previous encryption, introduced in jBASE 5.6.

The new security policy will provide a system-wide framework of encryption for various data aspects of jBASE, and different policies may be stored and implemented.

The need for a ]K file will no longer be needed. This simplifies fixes/changes caused by the current need for a ]K file. The options KEY=xxx and ALGORITHM=xxx to CREATE-FILE will be removed.

Once the policy is decided, jBASE will then operate exactly as before with barely any discernible signs that encryption is taking place in all aspects of jBASE.

## Key components

**System-wide encryption**. Keys are stored, in encrypted form, in shared memory and apply to the entire system.

**New class libraries**. The $file library will be extended and a new class $security will add application usable encryption and decryption routines as well as methods to read and update the security policy.

**jsecurity**. A new command line utility which will allow the administrator to perform security policy operations. Must be run by root/administrator user.

**&lt;JBASERELEASE&gt;/config/jsecurity**. A new Security Policy File in the jBASE release which contains the security policy and all the passwords. This file will be encrypted with a key only known to the user.

## Basic Operation

When jBASE is first started, if any security is in place, the customer needs to execute ‘jsecurity start’ as root/administrator. Without this, no encryption will occur and files that are encrypted cannot be decrypted.

When ‘jsecurity’ is run for whatever reason, it will prompt for a security key. This is the key we encrypt our security policy file with. The security key can be manually entered by an operator or can be programmatically entered – for example by executing a key vault program and piping the key to stdout and then into jsecurity.

In the simplest of configurations, the default configuration, there will be a single system-wide algorithm and key for all components of jBASE (data files, indexes, TJ, backup, spooler, audit logs) and encryption is disabled throughout jBASE (of course existing non-encrypted files not affected).  

You will need to use the “ENCRYPT=TRUE” option to CREATE-FILE to encrypt a file, and use jsecurity to turn on encryption by default on the other modules (TJ, backup, audit log and spooler).

Options, definable using the new jsecurity utility, allow variations on the simple configuration, such as different keys for different components, deciding which components use encryption, and so on.

## Data files

Data files (J4, JP, and JD) will have whole file encryption.  No keys or data will be visible. Each file will be encrypted with the same algorithm/key.

By default, each secure encrypted file will have the same encryption algorithm and key/password applied to it.

## Indexes

Indexes will have whole file encryption. Nothing will be visible. Indexes will always use the same algorithm and key as the data files.

## Transaction Journaling, Backup, Audit Logging, Spooler

At the moment, TJ, backup/restore, and the spooler have their own optional security. These methods will be retained for backward compatibility. However, the security model will show whether to encrypt these files, and the algorithm/key to use.

## Hot Standby Machines

In a hot-standby configuration, the hot standby machine will need to also have initiated security with ‘jsecurity’ using the same ‘jsecurity’ file. This provides for an easy and quick mechanism to implement the matching security on the hot standby machine.

## Security Policy Files

The security policy will be stored a file &lt;RELEASEDIR&gt;/config/jsecurity. It will be encrypted and as described earlier will need a mechanism to enter the key.

The changes to the security policy will initially be done through an option to the new ‘jsecurity’ utility. However, as the Security Policy is an encrypted file in JSON format, it leaves the option open to allow the jBASE System Manager to provide that functionality as a future enhancement.

You can have as many Security Policy Files as you like. When running ‘jsecurity start’ there is a -PolicyName option to describe the Security Policy File other than the default file.

The Security Policy File will have a number of properties:

- System-wide encryption algorithm and key. It can be applied to everything that uses encryption.
- Data encryption algorithm and key. Optional. If defined, it will encrypt data files (JP, J4, JD)  files and index files using this instead of the system-wide encryption.
- TJ encryption algorithm and key. Optional. If defined, it will encrypt TJ files using this instead of the system-wide encryption.
- backup/restore encryption algorithm and key. Optional. If defined, will encrypt backup  files using this instead of the system-wide encryption
- Spooler encryption algorithm and key. Optional. If defined, it will encrypt spooler files using this instead of the system-wide encryption.
- Audit logging encryption algorithm and key. Optional. If defined, it will encrypt Audit log files using this instead of the system-wide encryption.
- Switch New File Encryption. Decides if newly created data files have encryption applied as a default. if this is FALSE (default), then a file needs to be created with ENCRYPT=TRUE
- Switch for TJ, backup, spooler, audit logging. These switches will decide if encryption is used for these operations. If TRUE, we use the algorithm/key for that option. if the algorithm/key not set, the system-wide encryption policy is used.

The default Security Policy is set in the file defined earlier. However, there are other Security Policy Files you can use.

If a directory has a file called ‘.jsecurity’ then this will be used and any options in here will over-ride the default security. You will need to supply a key for each security policy used. This mechanism allows different accounts to have different encryption, and even different files (assuming in different directories) to have different encryption.

You can also load a “personal” security file, and this will also over-ride any security policies in effect. This is done either through executing the “jsecurity” command or using $security class methods.

## Other jBASE utilities

The following functionality will be tested to ensure correct working with the new security paradigm (in addition to the afore-mentioned data files, indexes, TJ, backup/restore, spooler and audit logs)

- jcheck
- jrf
- JEDIs to the audit log and TJ files
- jstat
- rename-file

Back to [Encryption](./../README.md)
