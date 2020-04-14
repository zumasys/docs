# jCL BO

<PageHeader />

**Tags:**
<badge text='pointer' vertical='middle' />
<badge text='buffer' vertical='middle' />
<badge text='jcl' vertical='middle' />

## Description

The command moves the active output buffer pointer back by one parameter. It takes the general form:

```
BO
```

## Note #1

> The buffer pointer will move backward until it finds a field mark or the start of the buffer. To completely clear the buffer, use the [RO](./../jcl-ro) command. To clear specific parameters, use the MV #n command

### Example 1

```
| Command |   POB Before   |   POB After   |
| ------- |   ----------   |   ---------   |
| BO      | ABC^DEF^GHIJK  | ABC^DEF^GHIJK |
|         |               ^|   ^           |
```

### Example 2

```
| Command | SOB Before | SOB After |
| ------- | ---------- | --------- |
|    BO   | SAVE-LIST  | SAVE-LIST |
|         |          ^ | ^         |
```

### Note #2

> SOB - Secondary Output Buffer.

ack to [jCL Commands](./../README.md)
  
<PageFooter />