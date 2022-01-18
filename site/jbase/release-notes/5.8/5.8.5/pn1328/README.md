## PN1328

<PageHeader />

## Description

BREAK-ON dict FMT "format" fails

## Previous Release Behavior

```
jsh -->SORT MD BY *A1 BREAK-ON "" *A1 FMT "10R" SAMPLE 1
Error in Statement "SORT MD BY *A1 BREAK-ON *A1 FMT "10R" SAMPLE 1"
Error in Statement "FMT unexpected at this time"
FMT unexpected at this time
jsh -->
```

## Current Release Behavior

```text
jsh -->SORT MD BY *A1 BREAK-ON   *A1 FMT "10R" SAMPLE 1

PAGE    1

@ID...............................................    *A1.......

LIST-ITEM                                                      t

                                                             ***
***

 1 Records Listed

jsh -->
```

Back to [5.8.5 Release Notes](./../README.md)

<PageFooter />
