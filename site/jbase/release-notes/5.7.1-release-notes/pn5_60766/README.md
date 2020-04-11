# PN_60766

<PageHeader />

## Description

Support **self** as a synonym for **this**.

### Previous Release Behavior

Methods could only reference their Class's properties and methods using the **this** keyword.

Other languages such as Smalltalk and Python use **self**

### Current Release Behavior

You can use **self** instead of **this**.

This is an option. By default we always use **this** but setting an option in the usual way will change from using **this** to **self**.

For example

```
export JBC_JPP2=self   [Unix]
set JBC_JPP2=self      [Windows]
```

Or add this on line 1 of your source:

```
$option self
```

Back to [5.7.1 Release Notes](./../README.md)

  
<PageFooter />
