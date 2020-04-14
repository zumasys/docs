# jCL IBH

<PageHeader />

**Tags:**
<badge text='conversions' vertical='middle' />
<badge text='pointer' vertical='middle' />
<badge text='buffer' vertical='middle' />
<badge text='jcl' vertical='middle' />

## Description 

The command places text in the active input buffer whilst retaining embedded spaces and applying any required input/output conversions. It takes the general form:

```
IBHtext
```

or

```
IBHreference;input-conversion; 
```

or

```
IBHreference:output-conversion:
```

where:

- **text** is the text to be placed in the active input buffer. Can be a literal (not enclosed in quotes), or a direct or indirect reference to a buffer or select register.
- **reference** is a direct or indirect reference to a buffer or select register.
- **input-conversion** is a jQL  input conversion to be applied to the string before putting it in the buffer.
- **output-conversion** is a jQL  output conversion to be applied to the string before putting it in the buffer.

## Note

> The IBH command works in the same way as the IH command except that the string is moved as a single parameter and all spaces are maintained. Depending on the position of the buffer pointer, IBH will either replace an existing parameter or add a new parameter to the end of the input buffer. The rules are as follows:

If the buffer pointer is at the beginning of an existing parameter, that parameter will be replaced with the new string.

If the buffer pointer is within an existing parameter, IBH will concatenate the new string (without inserting a field mark), starting at the current location of the buffer pointer.

If the buffer pointer is at the end of the input buffer, a new parameter will be created and the buffer pointer will be left pointing to the field mark preceding the new parameter.

In all cases, the position of the buffer pointer will remain unchanged. Conversions containing colons or semicolons will not work (for example IBH;G1;1;).

### Example 1

```
|   Command  | PIB Before |   PIB After   |
|   -------  | ---------- |   ---------   |
| IBHDEF GHI | ABC^XXX^Z  | ABC^DEF GHI^Z |
|            |    ^       |    ^          |
```

### Example 2

```
| Command |  PIB Before  |    PIB After    |
| ------- |  ----------  |    ---------    |
| IBH XX  | AA^BB^CC^DD  | AA^BB^CC^DD^ XX |
|         |            ^ |            ^    |
```

### Example 3

File buffer 1 contains:

```
Key
11350
```

```
|   Command   |  PIB Before |     PIB After      |
|   -------   |  ---------- |     ---------      |
| IBH&1.1:D2: | AA^BB^CC^DD | AA^BB^27 JAN 99^DD |
|             |       ^     |       ^            |
```

Back to [jCL.](./../README.md)
  
<PageFooter />