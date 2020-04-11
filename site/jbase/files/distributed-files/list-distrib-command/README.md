# LIST-DISTRIB Command

<PageHeader />

The LIST-DISTRIB command displays all partition information pertaining to a distributed file. It takes the general form:

```
LIST-DISTRIB FileName
```

where :

- **FileName** is the name of the distributed file

The [VERIFY-DISTRIB](./../verify-distrib-command) command is much more useful as this not only displays the same information as LIST-DISTRIB, it also verifies the existence of the component part files. If the distributed file uses the user-defined partition method, [VERIFY-DISTRIB](./../verify-distrib-command) also verifies that the subroutine is executable.

An example of use is as:

```
LIST-DISTRIB INVENTORY
```

Back to [Distributed Files](./../README.md)

  
<PageFooter />
