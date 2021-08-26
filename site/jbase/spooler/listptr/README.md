# LISTPTR

<PageHeader />

## Description

Displays printer or formqueue status. It takes the general form:

```
LISTPTR {options}
```

where **options** may be:

- n:  Displays the specified Printer/Formqueue
- n-m:  Displays a range of Printer/Formqueue from n to m inclusive

**LISTPTR** has a jCL output interface. The status of the requested printer/formqueues is written into the secondary input buffer, separated by spaces or attribute marks depending on the type of jCL program.

For instance:

```
LISTPTR n
```

may yield something that looks like this:

```
PRINTER ASSIGNMENTS                        14:20:13  1 APR 2018

PRINTER    -----   FORMQ   -----   PAGE  STATUS         DEVICE
TYPE       #  NAME                 SKIP

NT          0 STANDARD                1  KILLED
PORT        1 SCREEN                  1  STOPPED
```

The printer number is a reference to the Formqueue number. This number can be matched to Formqueues created with Formqueue name Fn, where n is the Form queue number. The page skip, status and device fields are as per [SP-JOBS](./../sp-jobs).

```
1134 1171 1 1 127 127 3
```

Shows typical output to the secondary input buffer of a jCL program where 1134 is the LISTPTR error message identifier. 1171 means that the printer/formqueue is inactive, the printer number is one, and the formqueue number is 1, 127 is reserved and 3 is the number of page skips.

Back to [Spooler.](./../jbase-spooler)

<PageFooter />
