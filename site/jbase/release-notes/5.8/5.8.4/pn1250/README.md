# PN1250

## Description  

Given the following construct:  

```
ON AAA GOTO 1,2,3
```

## Previous Release Behavior

IF generic_reality=true then ON AAA GOTO 1,2,3 fails and errors if AAA = 0

## Current Release Behavior  

```
    ON_X_GO_TEST.b
001     PROGRAM ON_X_GO_TEST
002 *
003     X = 0
004     ON X GO 10,20
005     CRT 'We should be here'
006 10        !
007 20        !
008 END

jsh SandBox ~ -->ON_X_GO_TEST
We should be here
```

Back to [5.8.4 Release Notes](./../README.md)

<PageFooter />
