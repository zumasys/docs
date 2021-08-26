# PN5_60699

<PageHeader />

## Description

Execution of PROCs to pass back the values to the SETTING variable

### Previous Release Behavior

If a program was to do...

```
EXECUTE "SELECT MD" CAPTURING quiet SETTING err1 RTNLIST mylist
EXECUTE "SAVE-LIST D3MD" CAPTURING quiet SETTING err2 PASSLIST mylist
EXECUTE "COUNT MD" CAPTURING quiet SETTING err3
EXECUTE "LIST MD SAMPLE 10" CAPTURING quiet SETTING err4
EXECUTE "LIST BAD_FILENAME" CAPTURING quiet SETTING err5
err = ""
err<1> = err1
err<2> = err2
err<3> = err3
err<4> = err4
err<5> = err5
CRT OCONV(err, "MCP")
```

...it would display something like:

```
404]332]QLNUMSEL^241]332]D3MD]Savelist_msg^407]332]QLNUMCNT^405]10]QLNUMLIST^401]QLBADFILE
```

If a proc were to do the same thing,

```
ID: PQTEST
0001 PQ
0002 HSELECT MD
0003 STON
0004 HSAVE-LIST D3MD
0005 P
0006 HCOUNT MD
0007 P
0008 HLIST MD SAMPLE 10
0009 P
0010 HLIST BAD_FILENAME
0011 P
```

and EXECUTE that proc in a program,

```
0001    EXECUTE "PQTEST" CAPTURING quiet SETTING err
```

it would return NULL in the "err" variable.

### Current Release Behavior

The new behavior populates the variable in the SETTING clause with a dynamic array of return codes, e.g.

```
JPQ]404]332]QLNUMSEL^241]332]D3MD]Savelist_msg^407]332]QLNUMCNT^405]10]QLNUMLIST^401]QLBADFILE
```

Back to [jBASE 5.7.0 Release Notes](./../README.md)

<PageFooter />
