# PN5_60640

**Created At:** 10/3/2017 9:22:14 AM  
**Updated At:** 11/26/2017 1:59:06 AM  


### Description

jQL and Indexes not processing multi-values



### Previous Release Behavior

Using a MCxx conversion would result in the conversion being applied to the whole attribute, e.g.

Dictionary:

```
ID: A1
001 A
002 1
008 MCN
009 L
010 20
```

Data:

```
ID: 1
001 111-222-333]444-555-666
```

jQL results:

```
LIST TESTFILE A1

TESTFILE....... A1..................
1               111222333444555666
```

Indexes also had the same problem, in that the MCN conversion was applied to the whole attribute rather than each multi-value.



### Current Release Behavior

```
LIST TESTFILE A1

TESTFILE....... A1..................
1               111222333
                444555666
```

Indexes are also built correctly by applying the conversion to each multi-value rather then the whole attribute.

Note: This patch is limited to only processing multi-values.
