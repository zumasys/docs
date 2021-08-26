# PN5_60697

<PageHeader />

## Description

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

Back to [jBASE 5.7.0 Release Notes](./../README.md)
  
<PageFooter />
