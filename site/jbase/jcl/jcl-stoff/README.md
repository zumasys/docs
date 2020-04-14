# jCL STOFF

<PageHeader />

**Tags:**
<badge text='output' vertical='middle' />
<badge text='buffer' vertical='middle' />
<badge text='stack' vertical='middle' />
<badge text='jcl' vertical='middle' />

## Description

This command selects the primary output buffer as the active output buffer. It takes the general form:

```
ST OFF
```

or

```
STOFF
```

## Note

> The stack can be turned on (STON) or off (STOFF) at any point within a jCL  program. At the start of a jCL program or after execution of an RO or P command, both output buffers will be empty, and the stack will be off.
>
> When the stack is off, H commands will place their data in the primary output buffer.

Back to [jCL.](./../README.md)
  
<PageFooter />