# keys / jkeys

**Created At:** 8/30/2018 2:25:02 PM  
**Updated At:** 5/17/2019 9:48:22 PM  
**Original Doc:** [336948-keys-jkeys](https://docs.jbase.com/48399-tools/336948-keys-jkeys)  
**Original ID:** 336948  
**Internal:** No  

**Tags:**
<badge text='ascii equivallent' vertical='middle' />

## Description

The **keys** utility displays the ASCII equivalent as well as the hex and octal representation for keyboard input. On Windows, this utility is called **jkeys**.

An example would be to use the keys utility to show the values emitted from the left arrow key.

```
jsh cindy ~ -->keys
keys: exits if no input in 10 seconds
hit a key : esc 0x1b 0033 (Ctrl-[)
hit a key : [ 0x5b 0133
hit a key : D 0x44 0104
hit a key :
bye
jsh cindy ~ -->
```

[Back to Tools](./../README.md)