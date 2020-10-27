# CLEARSELECT

<PageHeader />

The **CLEARSELECT** or **END** commands can be used to clear one or all select lists.  

## Syntax

```
CLEARSELECT {list.number}
CLEARSELECT ALL
CLEARSELECT var

END {list.number}
END ALL
END var
```

where:

**list.number** evaluates to the number of the select list to be cleared (an integer from 0 to 10).  
**var** is a select list variable

If **list.number** is not specified, the default list, 0, will be cleared.

When **ALL** is specified, this causes all select lists to be cleared.

## Example

```
jsh SandBox ~ -->SELECT PGM

 108 Records selected

>CLEARSELECT
[528] List '0' cleared.
jsh SandBox ~ -->SELECT PGM TO fred

 108 Records selected

>CLEARSELECT fred
jsh SandBox ~ -->CLEARSELECT ALL
[526] List '0' is inactive.
[526] List '1' is inactive.
[526] List '2' is inactive.
[526] List '3' is inactive.
[526] List '4' is inactive.
[526] List '5' is inactive.
[526] List '6' is inactive.
[526] List '7' is inactive.
[526] List '8' is inactive.
[526] List '9' is inactive.
[526] List '10' is inactive.
```

Back to [Utilities](./../README.md)

Back to [Cross Reference](./../../jql/jql-keyword-cross-reference/README.md)

<PageFooter />
