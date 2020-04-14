# jCL IT

<PageHeader />

## Description

The command reads a tape record into the primary input buffer. It takes the general form:

```
IT{C}{A}
```

where:

- **C** performs an EBCDIC to ASCII  conversion before the data is put into the buffer.
- **A** masks 8-bit ASCII  characters to 7 bits (resets the most significant bit to a 0).

## Note

> The IT command will read a tape record into the primary input buffer. The new data will be placed at the beginning of the buffer and will replace all existing buffer data.

### Example

```
|  Command  | PIB Before |  PIB After |
|  -------  | ---------- |  --------- |
| IT        | ABC        | tape data  |
```

Back to [jCL.](./../README.md)
  
<PageFooter />