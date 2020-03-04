# PN5_60754

**Created At:** 8/27/2018 10:21:10 AM  
**Updated At:** 10/24/2018 8:38:10 PM  
**Original Doc:** [336198-pn5_60754](https://docs.jbase.com/48420-5-7-1-release-notes/336198-pn5_60754)  
**Original ID:** 336198  
**Internal:** No  


### Description

jQL: Issues with F-correlative only returning the first multi-value in ROS emulation



### Previous Release Behavior

Previously the following would fail:

```
F;0R(Ttestfile;X1;11;11);"!";:;3;:;"!";:;0R(G!1);:;(Ttranslatefile;X;4;4)
```

The first half:

```
F;0R(Ttestfile;X1;11;11);"!";:;3;:;"!";:;0R(G!1);:
```

was supposed to return a MV set of concatenated values but was only returning the correct value in the first attribute.



### Current Release Behavior

All MV results are returned.
