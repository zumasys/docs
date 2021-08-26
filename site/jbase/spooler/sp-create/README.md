# SP-CREATE

<PageHeader />

## Description

The command creates and assigns a formqueue to a logical device type. The command takes the form:

```
SP-CREATE formqueue devicetype devicename {(Z}
```

Where:

**formqueue** is the formqueue name, which contains up to 20 alphabetic numeric or special characters (excluding asterisks and embedded spaces). The first character of the formqueue name must be alphabetic. Only the first fifteen characters are displayed. The formtype screen can display the complete 20-character name.

**devicetype** is the logical device type to be assigned:

- LPTR - directly despooled device . Cannot HOLD since print jobs are sent directly to O/S spooler
- [FILE](./../spooler-file-device-type) - to an operating system file
- TAPE - tape device
- PORT - terminal device
- PROG - programmed device
- 0 - no device
- NT - directly despooled to windows printername.  Cannot HOLD since print jobs are sent directly to the default printer.

**devicename** is the device name or program command to which output will be despooled.

The **(Z** option can be used to encrypt the spooler jobs. See this [page](./../../../jbase/jbase-encryption-database-security) for details.

If the command is issued without arguments, for instance:

```
SP-CREATE
```

The user will be prompted for input as:

```
FORM-NAME     DEV TYPE(LPTR,TAPE,PORT,PROG,NT,FILE)     DEVICE NAME:_
```

### Note
>
> Parameters must be entered in the order shown in the syntax description. You will be prompted for any missing parameters.  
> There is no limit to the number of formqueues which can be created.

## Examples

Create print queue MAINPTR to print to printer HPLaserJet via program lp

```
 SP-CREATE MAINPTR PROG lp -d HPLaserJet
```

Create print queue TAPE1 to print to the DAT0 tape drive

```
 SP-CREATE TAPE1 TAPE DAT0
```

## Windows only examples

Create print queue SERVERDFLT to print directly to the windows server default printer

```
 SP-CREATE SERVERDFLT NT  (Will prompt for DEVICE NAME: press <Enter>)
```

Create print queue APOLLO to print directly to the Apollo B/W printer on the windows server

```
 SP-CREATE APOLLO NT -d "Apollo B/W"
```

Create print queue ACCOUNTING to print directly to LaserJet on ACCOUNTING server

```
 SP-CREATE ACCOUNTING NT -d \\ACCOUNTING\LaserJet
```

Back to [Spooler.](./../jbase-spooler)

<PageFooter />
