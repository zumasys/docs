# PN5_60680

<PageHeader />

## Description

jQL: Multiple BREAK-ON "'P'" clauses produce multiple page breaks

### Previous Release Behavior

```
LIST MD 'LIST' BREAK-ON *A0 "'P'" BREAK-ON *A0 "'P'"
```

would produce 2 page breaks, one for each BREAK-ON. This is correct as 'P' is used twice; however this is not the same behavior with other PICKs.

### Current Release Behavior

For compatibility with other Multi-Value implentations, there is now a new configuration option:

```
dont_page_on_all_breaks
```

When **dont\_page\_on\_all\_breaks = true** then additional page ejects are suppressed.

This option is not added to any emulation by default in the **Config\_EMULATE** file, it is documented in **Config\_EMULATE.txt** and should only be used if all else fails.

Back to [jBASE 5.7.0 Release Notes](./../README.md)

<PageFooter />
