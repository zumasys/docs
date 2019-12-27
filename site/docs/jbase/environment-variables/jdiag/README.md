# JDIAG

**Created At:** 11/3/2017 5:25:11 PM  
**Updated At:** 8/7/2018 2:49:51 PM  
**Original Doc:** [jdiag](https://docs.jbase.com/41717-environment-variables/jdiag)  
**Original ID:** 284192  
**Internal:** No  

**Tags:**
<badge text='diagnosis' vertical='middle' />
<badge text='profile' vertical='middle' />
<badge text='trace' vertical='middle' />

## Description

This environment variable provides a variable amount of jBASE trace information depending on
which options are specified. It's primary purpose is for use with profiling jBC code.



## Values

Colon separated name and value pairs; the options are:

- profile={off|short|long|user|jcover|all}
- filename={stdout|stderr|tmp|pathname,refresh\_mins} %p can be used for process ID
- memory={off|on|verify}
- branch={off|on|verbose}
- trace=env\_name{,env\_name,}


JDIAG=TRACE=LOGTO|LICENSING|INDEX|SLEEP



## Default

Not set



Examples of use may be as:

**Unix**

```
export JDIAG=profile=long:filename=PROFILENAME%p.out  
```

**Windows**

```
set JDIAG=profile=long:filename=PROFILENAME%p.out 
```



```
JQL_TRACE_DEBUG=1
set JDIAG=TRACE=INDEX
```
