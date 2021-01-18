# SP-TYPE

<PageHeader />

## Description

The command assigns or reassigns a formtype to a formqueue. It takes the general form:

```
SP-TYPE formqueue formtype
```

where:

- **formqueue** is the name of the formqueue for form type assignment.
- **formtype** is the name of the formtype to be used for formqueue configuration.

To revert a formqueue to the default form type :

```
SP-TYPE formqueue -
```

> ### Note
>
> - Selecting LIST FORM TYPES from the [SP-STATUS](./../sp-status) menu will display the FORMTYPES menu.
> - The FORMTYPES menu provides a display of the formqueues and their assigned formtypes. Menu options enable formtypes to be assigned to specific formqueues.
> - The formtype entries specify configuration parameters to be used by the despooler when despooling print jobs from a formqueue for example, banner information and format.
> - Formtype entries reside in the $JBCRELEASEDIR/config directory and use the naming convention jspform\_formtype. For example, entering a value of **abcd** would expect to find formtype:
>
>
>```
> jspform_abcd
>```
>
> - Formqueues that are not associated with a formtype use the definitions in the file jspform\_deflt.

Back to [Spooler.](./../jbase-spooler)

<PageFooter />
