# JCL M

**Created At:** 5/28/2018 11:13:08 AM  
**Updated At:** 6/11/2018 4:28:22 AM  

**Tags:**
<badge text='go' vertical='middle' />
<badge text='jcl' vertical='middle' />

## Description 

This command marks a destination for a GO  F or GO B command. It takes the general form:

```
M
```

## Note: 


> The M command is used with the GO  B and GO F branch commands to mark the destination of the jump. As a jCL program is executed it "remembers" the location of the last M command it passes through. When a GO  B command is encountered, the program can then branch straight back to the remembered location. Remember that an M command must be executed for it to be remembered.


GO  F scans forward from the current location until it finds an M command and then resumes execution from there. If commands are grouped on a line, the M command must be the first command on the line.

See also GO  B and GO F commands for examples of usage.



Back to [JCL Commands](jcl-commands)
