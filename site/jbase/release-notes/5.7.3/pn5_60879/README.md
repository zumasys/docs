# PN5_60879

<PageHeader />

## Description

Prevent process abort with **Tn,m** conversion

### Previous Release Behavior

In some circumstances, when operating on a large array with both multvalues and subvalues (some of them null) a conversion like:

```
S;1;2]T20
```

would cause OCONV() in jBC or a correlative in a dictionary with jQL would result in a crash.

### Current Release Behavior

Conversion is performed as expected, no crash occurs.

Back to [5.7.3 Release Notes](./../jbase-5.7.3-release-notes/README.md)
  
<PageFooter />
