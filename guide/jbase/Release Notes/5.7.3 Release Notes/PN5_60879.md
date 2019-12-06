# PN5_60879

**Created At:** 6/29/2019 7:53:07 AM  
**Updated At:** 6/29/2019 8:04:10 AM  


### Description

Prevent process abort with **Tn,m**conversion



### Previous Release Behavior

In some circumstances, when operating on a large array with both multvalues and subvalues (some of them null) a conversion like:

```
S;1;2]T20
```

would cause OCONV() in jBC or a correlative in a dictionary with jQL would result in a crash.

### Current Release Behavior

Conversion is performed as expected, no crash occurs.
