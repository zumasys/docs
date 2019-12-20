# PN5_60715

**Created At:** 2/20/2018 2:15:57 PM  
**Updated At:** 2/20/2018 2:17:48 PM  
**Original Doc:** [pn5_60715](https://docs.jbase.com/release-notes/pn5_60715)  


### Description

CREATE-FILE reports the wrong filename for the data section



### Previous Release Behavior

Creating a file with the same name as an existing MD entry would report the filename incorrectly, e.g.

```
jsh home ~ -->CREATE-FILE LIST 1 1
[ 417 ] File LIST]D created , type = JP
[ 417 ] File 19 created , type = JP
jsh home ~ -->
```

The file would be created correctly but the CREATE-FILE command was picking up attribute 2 of MD entry and reporting that as the name of the data section.



### Current Release Behavior

```
jsh home ~ -->CREATE-FILE LIST 1 1
[ 417 ] File LIST]D created , type = JP
[ 417 ] File LIST created , type = JP
jsh home ~ -->
```
