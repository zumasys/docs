# JBCLISTID

<PageHeader />

**Tags:**
<badge text='jbasework file' vertical='middle' />
<badge text='environment variables' vertical='middle' />
<badge text='list identifier' vertical='middle' />

## Description

This environment variable forces the user account name to be stored as part of the saved list identifier.

## Values

1

## Default

Not set.

## Setting

As per normal environment variable.

## UNIX

```
JBCLISTID=1
export JBCLISTID
```

## Windows

```
SET JBCLISTID=1
```

Lists stored in jBASEWORK have an id of the form SEL\*UserName\*ListName unless there is a Q-pointer or F-pointer called POINTER-FILE that references jBASEWORK.

If JBCLISTFILE is not set but POINTER-FILE can be opened, then lists are stored in POINTER-FILE and have have an item-id of ListName.

Otherwise lists have an id of the form ListName unless JBCLISTID=1, in which case the item id is SEL\*UserName\*ListName. Note that on Windows asterisks cannot be part of file names. So if JBCLISTFILE points to a directory, the asterisk separator is represented as ]2a.

When lists have the user name as part of the id, then the user name can be specified as an optional argument to [GET-LIST](./../../jbase/lists/get-list) and [EDIT-LIST](edit_list).

See also: [JBCLISTFILE](./../jbclistfile) and [List Storage](./../../jbase/lists/list-storage) for how lists are stored.

Go Back to [Environment Variables](./../README.md)

<PageFooter />
