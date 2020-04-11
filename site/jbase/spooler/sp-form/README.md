# SP-FORM

<PageHeader />

## Description

This command may be used to rename an existing formqueue. It takes the general form:

```
SP-FORM old-formqueue new-formqueue
```

where:

- **old-formqueue** is the existing formqueue name.
- **new-formqueue** is the new name for the formqueue.

If the command is issued without arguments, for instance as:

```
SP-FORM
```

the user will be prompted for any missing parameters, as:

```
OLD-NAME     NEW-NAME:
```

The user will then enter the old name, and the new name on the same line, and push the return button to rename the formqueue.

> ### Note
>
> If **old-formqueue** is invalid, the following error message will be displayed: "FORM-QUEUE CANNOT BE FOUND". Only the name of the formqueue is changed, device assignments remain unchanged

Back to [Spooler.](./../jbase-spooler)

  
<PageFooter />
