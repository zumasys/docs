# jED Quick Reference

jED is a robust, terminal independent screen editing tool.

## jED Command Syntax

```
jED Filename Item (Options
jED Item (Options
```

| Option | Description |
| --- | --- |
| Bnn{,mm} | Indent "nn" spaces, with "mm" as multiple for initial indent. |
| L | Skip setting default item lock on record. |
| R | Allow read only |

## Execution Commands

| Command | Description |
| --- | --- |
| HOME/Ctrl A | Move to start of current line |
| END/Ctrl E | Move to end of current line |
| Ctrl W | Delete word |
| Ctrl K | Clear to end of line or join. |
| Ctrl D | Delete current line |
| Ctrl G | Mark block. 1st Start Blk, 2nd End Blk, 3rd Remove Mark |
| Ctrl L | Insert line below current line |
| Ctrl N | Locate next occurrence |
| Ctrl O | Toggle overwrite and insert. default insert |
| Ctrl R | Redisplay screen |
| Ctrl T | Copy the character from the corresponding cursor position on the line above |
| Ctrl V | Indent for BASIC |
| Ctrl ] | Insert ]  (Value mark)|
| Ctrl \ | Insert \  (Sub-value mark) |

## Command Line

| Command | Description |
| --- | --- |
| CBn | Copy Marked block before current line, n times |
| Can | Copy Marked block after current line, n times |
| /string | Locate the next occurrence of "string" |
| MB | Move Marked block before current line |
| MA | Move Marked block after current line |
| BION | Turn on Format indentation |
| ! Cmd | Execute command |
| !! | Re-execute last ! Cmd |
| HX or HEX | Toggle the display of the record in Hexadecimal |

Back to [Editors](./../README.md)
