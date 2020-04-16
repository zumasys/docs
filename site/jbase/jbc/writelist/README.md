# WRITELIST

<PageHeader />

## Description

**WRITELIST** allows the program to store a list held in a jBASE BASIC variable to the global list file. It takes the general form:

```
WRITELIST variable ON|TO expression {SETTING setvar} {ON ERROR statements}
```

Where:

**variable** is the variable in which the list is held.

**expression** should evaluate to the required list name. If **expression** is null, it writes the list to the default external list.

If the **SETTING** clause is specified and the write fails, it sets **setvar** to one of [these values](./../incremental-file-errors).

An example of use is as:

```
WRITELIST MyList ON "MyList"
```

See also: [DELETELIST](./../deletelist), [READLIST](./../readnext), [FORMLIST](./../formlist)

Go back to [jBASE BASIC](./../README.md)

Go back to [Programmers' Reference Guide](./../../reference-guides/jbc/README.md)

<PageFooter />
