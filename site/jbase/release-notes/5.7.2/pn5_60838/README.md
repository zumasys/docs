# PN5_60838

<PageHeader />

## Description

Add option to force the BASIC/CATALOG/DECATALOG commands to require an explicit item-list or "\*"

### Previous Release Behavior

Issuing BASIC BP or CATALOG BP, without specifying an explicit list of records or a preceding select-list, would compile/catalog **all** programs including those that were not intended to be compiled/cataloged.

### Current Release Behavior

The BASIC, CATALOG and DECATALOG commands can now be configured to require an explicit item-list. A "\*" can be used to indicate that all programs should be processed, e.g.

```
BASIC BP *
CATALOG BP *
```

This behavior is activated by setting **compiler\_requires\_explicit\_item\_list = true** in Config\_EMULATE under the emulation section defined by the JBCEMULATE environment variable. When this configuration option is set then issuing any of those commands without an item-list will produce an error, e.g.

```
jsh ~ -->BASIC BP
 ** Error [ 203 ] **
What is the record name ??
jsh ~ -->
```

Back to [5.7.2 Release Notes](./../README.md)

  
<PageFooter />
