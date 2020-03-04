# JBCEMULATE

**Created At:** 11/3/2017 3:46:07 PM  
**Updated At:** 7/26/2018 2:11:54 PM  
**Original Doc:** [jbcemulate](https://docs.jbase.com/41717-environment-variables/jbcemulate)  
**Original ID:** 284168  
**Internal:** No  

**Tags:**
<badge text='environment variables' vertical='middle' />
<badge text='emulation' vertical='middle' />

## Description

When importing legacy applications, this variable tells jBASE what system it originally ran on. Note that programs and subroutines imported from different systems may be freely mixed.

## Values

```
jbase, default
adds
d3
r83
ap
fuji, fuj
prime
r91
reality, ros
seqpick, sequoia, seq
ultpick, ult, ultimate
adds
universe
unidata
```

The values reference labels in the Config\_EMULATE file.

## Default

The default is **jbase**, which will suit most imported applications.

## Setting

Must be set before starting a jBASE process.

## UNIX

```
JBCEMULATE=sequoia
export JBCEMULATE
```

## Windows

```
set JBCEMULATE=reality
```

Go Back to [Environment Variables](./../README.md)