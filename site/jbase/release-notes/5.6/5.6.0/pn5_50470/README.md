# PN5_50470

<PageHeader />

## Description

Enhancement: Add support for encryption to spooler

## Previous Release Behavior

N/A

## Current Release Behavior

Encryption can only be enabled when you use a PROG or FILE device with your spooler queue.

To enable encryption, use the Z option when you create the form queue:

```
SP-CREATE MYQUEUE PROG cat > /tmp/encrypted_file.txt (Z
SP-ASSIGN =MYQUEUE
```

If the H option is specified doing the SP-ASSIGN then it will not be possible to view the contents of the print job:

```
SP-ASSIGN =MYQUEUE HS
```

However, if you attempt to edit the print job with SP-EDIT or with option 8 on the SP-JOBS menu, you will then see a message "Encrypted no access from edit", e.g.:

```
SP-EDIT 2

PRINT JOB # 2
TOI
.
Encrypted no access from edit
.
```

Back to [5.6.0 Release Notes](./../README.md)

<PageFooter />
