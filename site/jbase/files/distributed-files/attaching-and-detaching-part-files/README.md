# Attaching and Detaching Part Files

<PageHeader />

**Tags:**
<badge text='distributed files' vertical='middle' />
<badge text='part files' vertical='middle' />

## Description

Files are attached to a distributed file using the [CREATE-DISTRIB](./../create-distrib-command) command with the -a option. A file must already exist before it can be attached to a distributed file.

In the following example an existing file, DISTCUST.SOUTH, is attached to the distributed file DISTCUST as part number 4:

```
jsh DEMO ~ --> create-distrib -a DISTCUST 4 DISTCUST.SOUTH
Part file 'DISTCUST.SOUTH', Part number 4 added
```

It is also possible to attach a file using a full explicit filepath as in:

```
create-distrib -a c:\home\myaccount\DISTCUST 4 DISTCUST.SOUTH
```

This method of attaching a distributed file is preferred to ensure the proper part file is resolved through the partition algorithm. See [Part Files](./../part-file) for further details.

A part file can be detached from a distributed file using the create-distrib command with the -d option. The synonym [DELETE-DISTRIB](./../delete-distrib-command) can also be used for this purpose. For example, to detach the DISTCUST.SOUTH part file:

```
jsh DEMO ~ --> create-distrib -d DISTCUST 4
Part file 'DISTCUST.SOUTH', Part number 4 deleted
```

Back to [Distributed Files](./../README.md)

  
<PageFooter />
