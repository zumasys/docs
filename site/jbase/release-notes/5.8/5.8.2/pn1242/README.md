# PN1242

<PageHeader />

## Description

jQL: F-correlative with Repeat operator causes sementation error in ROS emulation

## Previous Release Behavior

The following causes a segmentation error if attribute 1 is multi-valued:

```
F;1;(G0*1);2R;:
```

## Current Release Behavior

No segmentation error occurs.

Back to [5.8.2 Release Notes](./../README.md)
  
<PageFooter />
