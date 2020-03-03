# PN5_60951

**Created At:** 1/14/2020 10:04:03 AM  
**Updated At:** 1/15/2020 2:04:05 PM  
**Original Doc:** [pn5_60951](https://docs.jbase.com/88391-5-7-6-release-notes/pn5_60951)  
**Original ID:** 516412  
**Internal:** No  


### Description

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



### Notes

This behavior is dependent on the **generic\_pick** emulation setting.
