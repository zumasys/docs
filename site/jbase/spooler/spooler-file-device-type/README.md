# Spooler: FILE Device Type

<PageHeader />

**Tags:**
<badge text='sp-device' vertical='middle' />
<badge text='sp-create' vertical='middle' />

## Description

This topic describes the functionality of the FILE device type which allows you to despool print jobs to an Operating System file.

The FILE device type can be utilized from the SP-STATUS menu, the SP-CREATE command or the SP-DEVICE command.

### Syntax

To create a new form queue with a FILE device type:

```
SP-CREATE queuename FILE device
```

To change (or update) an existing form queue:

```
SP-DEVICE queuename FILE device
```

The device can be:

- a full file path
- a relative file path
- just the name of the file, in which case it will be placed in the current directory

The device can contain Special Character Strings, converted as follows:

```
String  Converted to:
======  =============
$EnvVar The value of the specified Environment Variable
        Do NOT use the Windows %enviromment_variable% syntax!
%a      Account name
%u      Username
%q      Queue name
%j      Job number
%p      Port number
        This is the port number the queue is running on, not the user's port number.
%d      Internal date
%t      Internal time
%k      Creates a unique Key
%m      Returns 1/1000 seconds past midnight (1/10 seconds for ROS)
%h      Hostname
%s      Directory separator ("/" or "\" depending on the platform)
%%      A literal "%" (a single "%" is ignored)
```

- All other characters are taken literally.  
- Spaces (and strings of spaces) in the device name are converted to a single underscore "_" when the a job is despooled.  
- Special Character Strings are case insensitive (%A is the same as %a).

### Examples

```
SP-CREATE TEXT FILE /tmp/file
```
"/tmp/file.txt" will be overwritten each time a job is despooled to the TEXT form queue.

---

```
SP-CREATE QJ %q%j
```
Creates files in the current directory. The file name will consist of the queue name concatenated with the print job number, for example, QJ42.

---

```
SP-CREATE UNIQUE FILE $JBCRELEASEDIR%stmp%s%k
```
Creates files in the jBASE "tmp" directory with a unique key.

---

```
SP-DEVICE FILE2 FILE %sdbms%sFTP%s%a_%q_%j
```
Changes the device in the FILE2 form queue from whatever it was to create files in the "/dbms/FTP" directory with filename consisting of the "account name", "form queue name" and "spooler job number".

---

```
SP-CREATE TABLE FILE $JBCRELEASEDIR%stmp%stable_%j_%a_%u.txt
```
This form queue will create a file in the "$JBCRELEASEDIR/tmp" directory ("%JBCRELEASEDIR%\tmp" on Windows) something like:

table_42_heartofgold_marvin.txt

where:
    "table", ".txt" and all "_"s are plain text
    "42" is the spooler job number
    "heartofgold" is the account name
    "marvin" is the user name

---

Back to [Spooler](./../README.md)

<PageFooter />
