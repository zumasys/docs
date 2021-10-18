# COMO

<PageHeader />

**Tags:**
<badge text='record i/o' vertical='middle' />

## Description

The **COMO** utility provides a means of recording all input and output from the terminal to a specified record. By default a directory called **&COMO&** is created under the current directory to store this record, but can be overridden by specifying the path to another directory location.

## Syntax

- **COMO ON {directory} SessionID**     - Turn recording on to **SessionID**
- **COMO APPEND {directory} SessionID** - Similar to **COMO ON** expect appends to **SessionID**
- **COMO OFF**                          - Turn recording off.
- **COMO DELETE {directory} SessionID** - Delete recording named **SessionID**.

## Note

> The UNIX **typescript** command can be used for this functionality if COMO is NOT part of your legacy application.
>
> e.g.
>
> script - Start recording
>
> [command execution]
>
> Ctrl-D - Stop recording.
>
> Recorded information can then be found in the **typescript** file.

Back to [Tools and Utilities](./../README.md)

<PageFooter />
