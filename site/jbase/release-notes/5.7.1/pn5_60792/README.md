# PN5_60792

<PageHeader />

## Description

Prevent a memory error when an INPUT statement has a control character.

### Previous Release Behavior

The customer code was doing this

```
INPUT X,0:
```

The keyboard generated a 0xf2 character and a segmentation violation then followed.

### Current Release Behavior

The character is handled correctly.

Back to [5.7.1 Release Notes](./../README.md)

  
<PageFooter />
