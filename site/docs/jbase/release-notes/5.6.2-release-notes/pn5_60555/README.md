# PN5_60555

**Created At:** 6/13/2017 9:40:54 AM  
**Updated At:** 11/21/2017 6:55:01 AM  
**Original Doc:** [pn5_60555](https://docs.jbase.com/36526-5-6-2-release-notes/pn5_60555)  
**Original ID:** 258823  
**Internal:** No  


### Description

Telnet: TAB character not interpreted correctly in Viewpoint emulation on Windows



### Previous Release Behavior

```
0001     IN c
0002     CRT SEQ(c)
```

Running this program in Viewpoint emulation, pressing the TAB key would display "1" instead of "9".



### Current Release Behavior

The TAB character is interpreted correctly in Viewpoint emulation on Windows.
