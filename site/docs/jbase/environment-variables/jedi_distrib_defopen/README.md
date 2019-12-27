# JEDI_DISTRIB_DEFOPEN

**Created At:** 11/3/2017 5:09:57 PM  
**Updated At:** 8/20/2018 3:47:28 PM  
**Original Doc:** [jedi_distrib_defopen](https://docs.jbase.com/41717-environment-variables/jedi_distrib_defopen)  
**Original ID:** 284183  
**Internal:** No  

**Tags:**
<badge text='environment variables' vertical='middle' />

## Description

Setting this environment variable will defer the OPENing of component or part files in a distributed file set until the component file is required to be opened by the application program.

## 


## Values

1

## 


## Default

Not set.

## 


## Setting

As per normal environment variable. It should be setup before the main file is accessed.

### Unix

```
export JEDI_DISTRIB_DEFOPEN=1
```

### Windows

```
set JEDI_DISTRIB_DEFOPEN=1
```
