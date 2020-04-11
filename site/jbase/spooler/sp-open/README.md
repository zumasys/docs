# SP-OPEN

<PageHeader />

## Description

Opens a global print job. It's general form is as:

```
SP-OPEN {Rn}
```

where **Rn** optionally limits the global open to specific report number n.

> ### Note
>
> **SP-OPEN** sets a flag in the assignment environment to indicate that subsequent printer output should be directed to a global print job. This print job will stay open until closed by an [SP-CLOSE](./../sp-close) command, another **SP-OPEN**, or an [SP-ASSIGN](./../sp-assign) command, which uses the O option.

Back to [Spooler.](./../jbase-spooler)

  
<PageFooter />
