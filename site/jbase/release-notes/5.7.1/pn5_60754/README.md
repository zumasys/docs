# PN5_60754

<PageHeader />

## Description

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

Back to [5.7.1 Release Notes](./../README.md)

  
<PageFooter />
