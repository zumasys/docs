# SP-NEWTAB

## Description

The **SP-NEWTAB** command creates and initializes a new spooler structure. It takes the general form:

```nolinenumbers
SP-NEWTAB
```

## Details

The default directory in which the spooler files are created is called **jspooler** in the directory defined by the [JBCDATADIR](../../environment-variables/jbcdatadir/README.md) environment variable. However, **SP-NEWTAB** allows a different directory to be specified by setting the [JBCSPOOLERDIR](../../environment-variables/jbcspoolerdir/README.md) environment variable. **JBCSPOOLERDIR** can also be used to create, and point to, other spoolers.

**SP-NEWTAB** allows security settings for form queues and print jobs. The default assignment is **CREATOR** however this can be changed within the **SP-NEWTAB** dialog or subsequently by using the commands [SP-SECURITY](./../sp-security), [SP-SECURITY-JOBS](./../sp-security-jobs), [SP-SECURITY-OWNER](./../sp-security-owner) and [SP-SECURITY-QUEUE](./../sp-security-queue). Please refer to the documentation for a full discussion of the security settings.

The default formqueue STANDARD is re-initialized with a LPTR device type on Unix type systems.

> ### Note
>
> **SP-NEWTAB** removes all print jobs and form queues. The **STANDARD** formqueue is recreated as follows:
>
> On Unix type systems, the **STANDARD** for queue is re-initialized with a **LPTR** device type and attempts to determine a default device.
>
> On Windows, the **STANDARD** form queue is re-initialized with a **PROG** device type that utilizes the Windows default printer. This printer must support text-based printing however additional printing capabilities, such as producing PDF output, can be achieved with third party products. An example of this is in the **%JBCRELEAEDIR%\samples\Spooler** folder.

Back to [Spooler.](./../jbase-spooler)
