# PN5_60697

**Created At:** 2/7/2018 9:54:39 AM  
**Updated At:** 2/16/2018 7:12:00 PM  


### Description

Indexes: A-correlative issue with missing semi-colon



### Previous Release Behavior

Attempting to create an index using an A-correlative without a semi-colon would fail. For example:

```
008 A10(G1@2)
```

yet:

```
A;10(G1@2)
```

would be fine.



### Current Release Behavior

A-correlatives without semi-colons can now be used to create indexes.
