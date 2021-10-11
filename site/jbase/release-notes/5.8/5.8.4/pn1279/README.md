# PN1279

<PageHeader />

## Description

An option was requested for the JBASE_EMULATE_INT_OPENSEQ_CREATES feature to NOT trigger the ELSE clause.  

This would only be applicable in "universe" emulation

## Previous Release Behavior

```
OPENSEQ_TEST.b

OPEN '.' THEN DELETE 'nosuchfile'

OPENSEQ 'nosuchfile' TO F.seq THEN
    CRT 'Success'
END ELSE
    CRT 'Failure'
END
OPENSEQ_TEST
Failure
```

## Current Release Behavior

```
JBCEMULATE=universe 

openseq_creates_then=true

OPENSEQ_TEST
Success
```

Back to [5.8.4 Release Notes](./../README.md)

<PageFooter />
