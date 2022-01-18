# JBSE-5724

<PageHeader />

## Description 

jQL compatibility isses when compared to D3 usage.

## Previous Release Behavior

With the following data:

```text
PAGE    1                                                                                                15:42:22  10 JAN 2022

A-FILE........       BALANCE

A.1                     5.00
A.2                     2.50
A.3                     0.00
A.4                     0.00
B.1                     2.00
B.2                     0.00
B.3                     3.00


 7 Records Listed
```

The following query should select two records:

```text
jsh SandBox ~ -->SELECT A-FILE EQ 'A.]' WITH BALANCE NE "0"

 No Records selected
```

Running two queries retruns the correct result:

```text
jsh SandBox ~ -->SELECT A-FILE EQ 'A.]'

 4 Records selected

>SELECT A-FILE EQ 'A.]' WITH BALANCE NE "0"

 2 Records selected

```

## Note

Inserting an "AND" in the probblem quey would have also return the correct result:

```text
jsh SandBox ~ -->SELECT A-FILE EQ 'A.]' AND WITH BALANCE NE "0"

 2 Records selected

>
```

## Current Release Behavior

```
jsh SandBox ~ -->SELECT A-FILE EQ 'A.]' WITH BALANCE NE "0"

 2 Records selected

>
```

Back to [5.8.5 Release Notes](./../README.md)

<PageFooter />
