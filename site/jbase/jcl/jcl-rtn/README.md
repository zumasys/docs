# jCL RTN

**Created At:** 5/29/2018 6:57:01 AM  
**Updated At:** 6/11/2018 4:19:08 AM  
**Original Doc:** [318873-jcl-rtn](https://docs.jbase.com/45792-jcl/318873-jcl-rtn)  
**Original ID:** 318873  
**Internal:** No  

**Tags:**
<badge text='subroutine' vertical='middle' />
<badge text='jcl' vertical='middle' />

## Description

This command terminates execution of an external subroutine and returns control to a statement following the [ ] command that called the subroutine. It takes the general form:

```
RTN{n}
```

Where **n** specifies that control should be returned to the n'th statement line after the calling [ ] command. Can be a number, or a direct or indirect reference to a buffer or select register.

## Note

> If **n** is not specified, control will return to the statement immediately following the calling [ ] command. A RTN without a corresponding [ ] command will terminate the program.

### Example 1

```
| Menu             | Menu 2           |
| ----             | ------           |
| 051 [SUBS MENU2] | 066 RTN          |
| 052              |                  |
| 053              |                  |
```

jCL program MENU calls MENU2 from line 51. When MENU2 reaches line 66, control will be returned to MENU at line 52.

### Example 2

```
| Menu              | Menu2            |
| ----              | -----            |
| 051 [SUBS MENU2]  | 066 RTN 2        |
| 052               |                  |
| 053               |                  |
```

jCL program MENU calls MENU2 from line 51. When MENU2 reaches line 66, control will be returned to MENU at line 53.

Back to [jCL.](./../README.md)
