# PN5_60655

<PageHeader />

## Description

OCONV() difference in Sequoia emulation

### Previous Release Behavior

In Sequoia emulation, running this code:

```
001 PROGRAM oconv_test
002 CRT OCONV(OCONV(17082:@VM:17089, "D"), "MCP")
```

would return:

```
17082]17089
```

### Current Release Behavior

The above code now returns:

```
07 OCT 2014
```

Back to [jBASE 5.7.0 Release Notes](./../README.md)
  
<PageFooter />
