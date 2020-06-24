# Terminal Type

<PageHeader />

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

## Config\_TERM Entries

The following entries are provided by default in the Config\_TERM configuration file located in the "config" subdirectory of the jBASE release directory.  
Each entry contains 2 fields, delimited by tabs, spaces and commas.  
The first field is the synonym name. The second field is the real terminfo database name. Both fields are case sensitive.

| <!----> | <!----> |
| --- | --- |
| 0 | prism80 |
| 2 | adds |
| 4 | prism |
| 5 | vt52 |
| 6 | vt100 |
| 7 | wy50 |
| 8 | prism80 |
| 9 | prism80 |
| A | adds |
| B | sbg |
| C | dtc |
| D | dm1520 |
| I | ibm3101 |
| J | vt100 |
| K | vt52 |
| L | adml |
| M | ampex |
| N | wy100 |
| Q | mime |
| R | regent |
| S | soroc |
| T | tec |
| U | tvi920 |
| V | viewpoint |
| W | wy50 |
| X | datagraphix |

Back to [Terminal](./../README.md)

<PageFooter />
