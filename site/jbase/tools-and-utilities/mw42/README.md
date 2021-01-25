# MW42

<PageHeader /> 

**Tags:**
<badge text='resource usage' vertical='middle' />
<badge text='diagnostics' vertical='middle' />

## Description

The MW42 tool is designed to assist with diagnosing issues which relate to a gradual build up of resource usage over a period of time. It records information from a series of both jBASE and operating system tools, collecting data on such things as system configuration, process status, memory usage, disk space, state of jBASE daemons etc.

```
Mw42 {-a –f –n –pPot –pp1-p2 –t -uUser –nn1 –nn2 > output.file}
```

where options may be:

- **-a**: Display application account instead of currently logged on user name
- **-f**: Display full listing. Normally display is truncated to screen size
- **-n**: Disable check for input (Some platforms block when input is requested)
- **-pPort**: Restrict display to port number specified
- **-pp1-pp2**: Restrict display to ports in the range p1-p2
- **-s**: Display IO stats instead of iSeries JobID (default on other platforms)
- **-t**: Prefix each line with time stamp
- **-uUser**: Restrict display to specified user
- **-nn1**: Interval in seconds between samples
- **-nn2**: Number of samples to take
- **&gt; output.file**: To facilitate further investigation – it is often useful to redirect the mw42 output to a file. Mw42.out is the usual convention.

## Note

> This tool is only available in jBASE 4.1 and later.
>
> When setting the interval parameter, care should be taken to not set such a short interval so that monitoring impacts system performance. In addition an mw42.out file can grow to a large size so the location of the file being produced should be considered.

An example of use would be :

```
mw42 -f -a -t -n 30 1440 > mw42.out
```

to produce a full listing for the application account with timestamps on every line without asking for input. Sample every 30 seconds for 1440 samples and pipe the output to mw42.out

Back to [Tools and Utilities](./../README.md)

<PageFooter />
