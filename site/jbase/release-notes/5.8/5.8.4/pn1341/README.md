# PN1341

<PageHeader />

## Description

Provide alternative behavior of DELETE command

## Previous Release Behavior  

In Universe this series of commands returns the following:

```
SSELECT LOG WITH WS.NO =  "100A-PM_ACCT-357"
0 record(s) selected to SELECT list #0.
DELETE LOG
0 records DELETEd.
```

But in jBASE we see this:

```
SSELECT LOG WITH WS.NO =  "100A-PM_ACCT-357"
No Records Selected
DELETE LOG
Record Keys:
```

## Current Release Behavior  

The DELETE command will now respect the **no_id_prompt** emulation option. If you add that option to any emulation then the DELETE command will not prompt for an id as it did before.  

Adding that option will also affect the following commands in the same manner:

[QSELECT](./../../../../lists/qselect/README.md)  
[FORM-LIST](./../../../../lists/form-list/README.md)  

[Back to 5.8.4 Release Notes](./../README.md)
  
<PageFooter />