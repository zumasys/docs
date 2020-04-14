# jCL D

<PageHeader />

**Tags:**
<badge text='display' vertical='middle' />
<badge text='jcl' vertical='middle' />
<badge text='buffer' vertical='middle' />

## Description

This command displays the current parameter of the active input buffer or specific parameters from the PIB. It takes the general form:

```
D{n}{+}
```

Where:

- n specifies the number of the PIB parameter to be displayed. If n is set to 0 (zero), all parameters in the primary input buffer will be displayed.
- + inhibits a NEWLINE at the end of output.

## Note

> D with no other qualifiers will display the current parameter of the active input buffer. The pointer position will not be changed.

### Example 1

```
| Command | Active Input Buffer | Display |
| ------- | ------------------- | ------- |
| D       | ABC^DEF^GHI        | DEF      |
|         |    ^               |          |
```

#### Example 2

```
| Command | Active Input Buffer | Display |
| ------- | ------------------- | ------- |
| D3      | ABC^DEF^GHI         | GHI     |
```

#### Example3

```
| Command | Active Input Buffer |   Display   |
| ------- | ------------------- |   -------   |
| D0      | ABC^DEF^GHI         | ABC^DEF^GHI |
```

Back to [jCL.](./../README.md)
  
<PageFooter />