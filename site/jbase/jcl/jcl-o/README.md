# jCL O

<PageHeader />

**Tags:**
<badge text='output' vertical='middle' />
<badge text='jcl' vertical='middle' />

## Descritpion

This command outputs a text string to the terminal. It takes the general form:

```
O{text}{+}
```

where:

- **text** is the text to be displayed.
- **+** inhibits a NEWLINE at the end of the output and leaves the cursor positioned to the right of the last character displayed. This is often used when prompting for input.

## Note

> The O command has largely been replaced by the T command, which also provides cursor positioning and special display features.

If no text is supplied, a blank line will be output.

### Example 1

```
|    Command    | Terminal Output |
|    -------    | --------------- |
| OSALES SYSTEM | SALES SYSTEM    |
```

### Example 2

```
|       Command      | Terminal Output  |
|       -------      | ---------------- |
| OEnter Password +  | Enter Password : |
| IP:                |                  |
```

Back to [jCL.](./../README.md)
  
<PageFooter />