# PN1206

<PageHeader />

## Description

Prior to this patch, large dimensioned arrays would cause a segmentation error when memory is allocated, e.g.

```
DIM huge(100,100,100)
MAT huge = 0
```

Back to [5.8.2 Release Notes](./../README.md)
  
<PageFooter />