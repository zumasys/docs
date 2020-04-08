# PN5_60618

<PageHeader />

## Description

Case Independence: PortBas issue - Reserved words following a ";" ignored

### Previous Release Behavior

Code such as:

```
rec = INSERT(rec, 42; CRT)
```

or:

```
LOCATE(string, array;VAR;SORT) ELSE NULL
```

PortBas would not recognize **CRT**, **VAR** or **SORT** as a reserved words.

### Current Release Behavior

PortBas now converts the reserved words in the above examples to **Crt**, **Var**, **Sort**.

Back to [5.6.2 release Notes](./../README.md)
