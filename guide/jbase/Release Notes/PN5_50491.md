# PN5_50491

**Created At:** 12/19/2018 2:10:53 PM  
**Updated At:** 12/19/2018 2:11:38 PM  


### Description

New commands **jbase** and **jb** which simplify the login process.

### Previous Release Behavior

NA

### Current Release Behavior

#### jbase / jb commands

**jbase** (or its synonym **jb**) is a small shell script, or Windows **.cmd** file, that sets up the jBASE system environment and runs the **jlogin** command. It can be used to start a jBASE session in the following ways:

- from a Unix or Windows command prompt
- in a Unix **.profile**
- in a Windows **remote.cmd**


For simple jBASE installations, it provides a quick way to start a jBASE session without any special configuration.

The jBASE system environment variables are initialized by running **jbase\_env.sh** (Unix) or **jbase\_env.cmd** (Windows) in JBCRELEASEDIR. On Unix, symbolic links to these scripts are added to **/usr/local/bin**. On Windows, since **%JBCRELEASEDIR%\bin** is normally in the PATH, these scripts are already accessible.

The command syntax for **jbase** or **jb** is identical to that of **jlogin**, described next.

#### jlogin

The **jlogin** command is used to initiate a jBASE session. Since **jlogin** is a jBASE program, the jBASE system environment variables must be set up before invoking this program. **jlogin** is normally invoked by the **jbase** or **jb** scripts, however, if the jBASE system environment variables have been set up, **jlogin** may be used on its own.

```
jlogin
```

This form will prompt:

```
Account name or path:
```

Enter the an account name defined in the SYSTEM file, or enter a relative or absolute path to the directory containing the account files. If an account name is entered, a password (if one is used), can be appended to the name, separated by a comma.

```
jlogin AccountName
```

The **AccountName** must be defined in the SYSTEM file. If there is a password defined for the account in the SYSTEM file, jlogin will prompt:

```
Password:
```

Enter the password to complete the login. jlogin will set up the jBASE environment based on information in the account record in the SYSTEM file, then start a jShell or the program defined in the SYSTEM record.

```
jlogin AccountName,Password
```

This form of jlogin is identical to the previous, except no password prompt is issued.

```
jlogin AccountPath
```

When a relative or absolute path is specified, jlogin checks that the target directory is a valid jBASE account. If it is not a valid jBASE account then the following warning is displayed

```
“AccountPath” does not appear to be a jBASE account. Use the CREATE-ACCOUNT command to create a jBASE account.

Are you sure you want to launch jBASE in this directory?
```

When an account path (not an account name) is specified, jlogin sets the following environment variables for the account, changes the current directory to the account path and starts a jShell:

```
        HOME            AccountPath, converted to an absolute path
        PATH            AccountPath/bin is prepended to the current PATH
        JBCOBJECTLIST   AccountPath/lib
        JEDIFILEPATH    AccountPath
        JEDIFILENAME_MD AccountPath/MD if MD file exists; AccountPath/MD]D if it exists; otherwise not set
```

For convenience, when an account name (not an account path) is used, if the name does not exist in the SYSTEM file, jlogin checks for a SYSTEM record using the upper-case or lower-case form of the account name. If a SYSTEM record using the upper- or lower-case name is found, jlogin will prompt:

```
Log in to account AlternateAccountName instead?
```

#### EXAMPLES

The following examples are using the **jbase** command; the **jb** command could be used in an identical manner. The **jlogin** command could also be used if the jBASE system environment has been set up.

```
jbase
```

Prompts for account name or path.

```
jbase JBASEADM
```

Log in to the JBASEADM account, as defined in the SYSTEM file. If JBASEADM requires a password, it will be prompted.

```
jbase WAREHOUSE,SECRET
```

Log in to the password protected WAREHOUSE account, as defined in the SYSTEM file, with the required password “SECRET”.

```
jbase .
```

Set up jBASE account environment for the current directory and run the **jsh** (jShell) command.

```
jbase C:\jBASE\PAYROLL
```

Change the current directory to **C:\jBASE\PAYROLL**, set up account environment variables for this directory and launch a jShell.
