# WGETCONFIG

<PageHeader />

The `WGETCONFIG` will retrieve items from the `WDB.RESOURCE` master config item.

## WGETCONFIG Syntax

```
CALL WGETCONFIG(VALUE,NAME)
```

### Syntax Elements

| Parameter | Description                 |
| --------- | --------------------------- |
| VALUE     | The returned value          |
| NAME      | The name of the config item |

## WGETCONFIG Example

```
CALL WGETVAR(KEY,"APIKEY")
* Will return 12345
```

## WGETCONFIG Notes

This function is used internally to get config items.  The config file is in `WDB.RESOURCE CONFIG`.

```
001 C
002 DEFAULT_HANDLER]DBC
003 DEFAULT_RESOURCE]MVDB.MAIN
004 APIKEY]12345
```

<PageFooter />
