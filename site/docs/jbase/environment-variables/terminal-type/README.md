# Terminal Type

**Created At:** 11/3/2017 3:19:31 PM  
**Updated At:** 2/22/2018 5:37:52 PM  
**Original Doc:** [terminal-type](https://docs.jbase.com/41717-environment-variables/terminal-type)  
**Original ID:** 284157  
**Internal:** No  


jBASE provides support for a terminal type cross reference mechanism that enables setting of synonym Multivalued terminal types to be mapped to a real terminfo terminal type.

A synonym name exists when the name is entirely numeric or the name is a 1 character alpha and the name exists as the first field in this cross reference database.

If the synonym is found, then jBASE uses the synonym name in things like the TERM command, and the SYSTEM(7) function. However, it maintains the UNIX environment variable "TERM" to be the name given in the second field in the entry and uses those definitions in the terminfo database.

For example, if the BASIC source uses the following statement.

```
ASSIGN "I" TO SYSTEM(7)
```

Then (assuming you leave the defaults in this database alone), the cross reference field is ibm3101 , and so it will change the TERM environment variable to "ibm3101", and will use that entry in the terminfo database, but will return "I" from SYSTEM(7), and the TERM command will also show the terminal type of "I".

Similarly, the following jBASE command

```
TERM ,,,,,,,,7
```

Will change the terminal type to "7" for jBASE applications, but will cause the TERM variable to be set to "wy50".




| CONFIG\_TERM ENTRIESThe following entries are provided by default in the Config\_TERM configuration file located in the "config" subdirectory of the jBASE release directory. Each entry contains 2 fields, delimited by tabs, spaces and commas. The first field is the synonym name. The second field is the real terminfo database name. Both fields are case sensitive.<br><br>| 0 | prism80 |<br>| 2 | adds |<br>| 4 | prism |<br>| 5 | vt52 |<br>| 6 | vt100 |<br>| 7 | wy50 |<br>| 8 | prism80 |<br>| 9 | prism80 |<br>| A | adds |<br>| B | sbg |<br>| C | dtc |<br>| D | dm1520 |<br>| I | ibm3101 |<br>| J | vt100 |<br>| K | vt52 |<br>| L | adml |<br>| M | ampex |<br>| N | wy100 |<br>| Q | mime |<br>| R | regent |<br>| S | soroc |<br>| T | tec |<br>| U | tvi920 |<br>| V | viewpoint |<br>| W | wy50 |<br>| X | datagraphix |<br><br> |
| --- |

