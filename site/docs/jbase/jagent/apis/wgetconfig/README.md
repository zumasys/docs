# WGETCONFIG

**Created At:** 6/27/2017 7:43:55 PM  
**Updated At:** 11/21/2017 4:30:53 AM  
**Original Doc:** [wgetconfig](https://docs.jbase.com/34473-docs/wgetconfig)  
**Original ID:** 261438  
**Internal:** No  


The WGETCONFIG will retrieve items from the WDB.RESOURCE master config item.

#### COMMAND SYNTAX

```
CALL WGETCONFIG(VALUE,NAME)
```

#### SYNTAX ELEMENTS


| Parameter | Description |
| --- | --- |
| VALUE | The returned value |
| NAME | The name of the config item |


#### EXAMPLE

```
CALL WGETVAR(KEY,"APIKEY")
* Will return 12345
```

#### NOTES

This function is used internally to get config items.  The config file is in WDB.RESOURCE CONFIG.

```
001 C
002 DEFAULT_HANDLER]DBC
003 DEFAULT_RESOURCE]MVDB.MAIN
004 APIKEY]12345
```
