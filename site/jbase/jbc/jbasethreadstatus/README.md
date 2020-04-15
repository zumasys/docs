# JBASETHREADStatus

<PageHeader />

## Description

The **JBASETHREADStatus** command shows the status of all running threads.

It takes the general form:

```
JBASETHREADStatus(ThreadList)
```

Where:

**ThreadList** a list of all threads active in this process, with one attribute per thread.

The layout of the multi-values in each attribute is as follows:

- &lt; n,1 &gt; port number
- &lt; n,2 &gt; thread handle returned from [JBASETHREADCreate](./../jbasethreadcreate)

Example code can be found in the "Threads" folder under "samples" in the jBASE install directory.

Go back to [jBASE BASIC](./../README.md)

Go back to [Programmers' Reference Guide](./../../reference-guides/jbc/README.md)

<PageFooter />
