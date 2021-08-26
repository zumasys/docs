# PN5_60951

<PageHeader />

## Description

PROCREAD / PROCWRITE to fail if immediate parent process is not a PROC when **generic\_pick = true**

### Previous Release Behavior

```
    MYPROC
001 PQ
002 Hprogram1
003 P

    program1.b
001     EXECUTE "program2"

    program2.b
001     PROCREAD buffer THEN CRT "PROCREAD" ELSE CRT "EXECUTE"

jsh ~ -->MYPROC
PROCREAD
```

### Current Release Behavior

```
jsh ~ -->MYPROC
EXECUTE
```

### Note

>This behavior is dependent on the **generic\_pick** emulation setting.

Back to [5.7.6 Release Notes](../jbase-5.7.6-release-notes/README.md)

<PageFooter />
