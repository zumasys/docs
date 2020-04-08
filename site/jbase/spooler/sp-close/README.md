# SP-CLOSE

<PageHeader />

## Description

Closes a global print job. It takes the general form:

```
SP-CLOSE {options}
```

where **options** can be:

- Rn - limits the global close to report number n only.
- n - closes the specific print job number n. Use this option with care as it is normally only used to close jobs
which have been left open unintentionally.

> ### Notes
>
> **SP-CLOSE** clears the flag in the assignment environment to indicate that subsequent printer output should be directed to a new print job. The global print job is closed and queued to the despooling process.

Back to [Spooler.](./../jbase-spooler)
