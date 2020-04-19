# PN712

<PageHeader />

## Description

The use of jQL queries on an audit log is too slow.

## Previous Release Behavior

As an example, the following jQL statement would take 8 minutes

```
SELECT @AUDIT IF EVENTOP EQ "12345678"
```

## Current Release Behavior

The JEDI for the audit log has been improved and a 3x improvement in speed can be seen.

Back to [5.7.7 release Notes](../jbase-5.7.7-release-notes/README.md)
  
<PageFooter />
