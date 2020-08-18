# WDB.RESOURCE

<PageHeader />

## Resource Identifier

Resource items you wish to export are put into this file.  The format of the ID is usually `API*NAME`.

| Key  | Description                                                                 |
| ---- | --------------------------------------------------------------------------- |
| API  | This is the handler and is defined in the web config file. Default is `API` |
| NAME | What you wish to call the resource                                          |

## Syntax

```
API*WRESTTEST  - This would be http://<ip>:port/api/wresttest
```

Always put the resources in UPPER case.  When the request comes from the web site the NAME can be any case as it will be upcased to find a match.

| Attribute | Description                                                                                                           |
| --------- | --------------------------------------------------------------------------------------------------------------------- |
| 001       | Resource type - this should be `P`                                                                                    |
| 002       | Description of the resource / service                                                                                 |
| 003       | Name of program to execute to handle the request                                                                      |
| 004       | Reserved                                                                                                              |
| 005       | Set to `1` to parse CGI variables before executing handler program                                                    |
| 006       | Set to `1` to enable this resource, `0` to disable                                                                    |
| 007       | set to `1` to save request debug information for use with `WDEBUG` debugging tool, `0` to disable debug info          |
| 008       | Resource account name - `LOGTO` this account before executing the resource handler program specified in `attribute 3` |
| 009       | New line processing*                                                                                                  |

> *Regarding Attribute 9, a fix was implemented 6/2/2020 to allow jBASE to properly handle CR/LF entries put directly in the output Stream. Earlier beheviour would change `char(13)`:`char(10)` to `char(13)`:`char(10)`:`char(10)` which is usually not desired. On jBASE a `char(10)` is converted to a `char(254)` and then later a `char(254)` is converted to `char(13)`:`char(10)`. This is how the extra `char(10)` came into existence. On jBASE after the `char(10)` to `char(254)` conversion is made (by the capture statement) a `SWAP(html,char(254):char(10),char(254))` is done. If this behaviour causes your application issues you can put a 1 here and it returns to the earlier behaviour. jBASE 5.7.8+

## CONFIG Entry

The entry `CONFIG` in `WDB.RESOURCE` is a special config record. You can put your own entries in here and pull them with the `WGETCONFIG` function.  Line 1 is always a `C` and all other lines are `CONFIGNAME`:`@VM`:`VALUE`

| Entry            | Description                                                                      |
| ---------------- | -------------------------------------------------------------------------------- |
| APIKEY           | Used by `WRESTTEST` to access advanced config items                              |
| DEFAULT_HANDLER  | If Handler is not supplied this is used.                                         |
| DEFAULT_RESOURCE | If a resource is NOT found call this program.                                    |
| 404_HANDLER      | If no page is found a optional resource to call                                  |
| LOGLEVEL         | `0` - No logging, `1` - log errors, `2` - log all requests, `3` - log everything |

## Example

```
1> C
2> APIKEY]3949293
3> DEFAULT_HANDLER]API
4> DEFAULT_RESOURCE]DEFAULT
5> 404_HANDLER]API*DEFAULT
```

<PageFooter />
