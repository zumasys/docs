# JCL RSUB

**Created At:** 5/28/2018 11:11:49 AM  
**Updated At:** 6/11/2018 4:16:14 AM  
**Original Doc:** [318725-jcl-rsub](https://docs.jbase.com/45792-jcl/318725-jcl-rsub)  

**Tags:**
<badge text='go' vertical='middle' />
<badge text='jcl' vertical='middle' />
<badge text='subroutine' vertical='middle' />

## Description 

Terminates execution of a local subroutine and returns control to a statement line following the GOSUB  command that called the subroutine. It takes the general form:

```
RSUB {n}
```

where n specifies that control should be returned to the n'th statement line after the calling GOSUB . Can be a number, or a direct or indirect reference to a buffer or select register.



## Note: 


> If n is not specified, control will return to the statement immediately following the calling GOSUB . An RSUB without a corresponding GOSUB  will ignored.




###### EXAMPLE 1

```
010 GOSUB  1001
011 ...
012 ...
.
051 1001 T "Press <CR> to continue...",+
052 S10
052 IP?
053 RSUB
```

The RSUB command on line 53 will return control to line 11.



###### EXAMPLE 2

```
010 GOSUB  1001
011 ...
012 ...
.
051 1001 T "Press <CR> to continue...",+
052 S10
052 IP?
053 RSUB 2
```

The RSUB command on line 53 will return control to line 12.



Back to [JCL Commands](jcl-commands)
