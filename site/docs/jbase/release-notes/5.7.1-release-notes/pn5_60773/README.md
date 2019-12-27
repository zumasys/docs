# PN5_60773

**Created At:** 8/27/2018 1:24:38 PM  
**Updated At:** 10/24/2018 8:45:55 PM  
**Original Doc:** [pn5_60773](https://docs.jbase.com/48420-5-7-1-release-notes/pn5_60773)  
**Original ID:** 336259  
**Internal:** No  


### Description

The **jshow** command does not resolve filenames entered as filename,datasection



### Previous Release Behavior

**jshow** would not be able to find the data section of a file, e.g.

```
jsh ~ -->create-file main
[ 417 ] File main]D created , type = JD
[ 417 ] File main created , type = JD
jsh ~ -->create-file data main,section
[ 417 ] File main]Msection created , type = JD
jsh ~ -->jshow main,section
jsh ~ -->jshow -f main,section
jsh ~ -->
```



### Current Release Behavior

```
jsh  ~ -->jshow main,section
File:                     ./main]Msection
jsh ~ -->jshow -f main,section
File:                     ./main]Msection
jsh danielk ~ -->
```
