# jCL [] command

<PageHeader />

**Tags:**
<badge text='jcl' vertical='middle' />

## Description

The [] command calls another jCL  program as an external subroutine. It takes the general form:

```
[{DICT} file-name{, data-section-name} {key}] {label}
```

where:

- DICT specifies the dictionary level of file-name, if required.
- file-name is the name of the file that contains the jCL  program subroutine. Can be a literal, or a direct or indirect reference to a buffer or select register.
- data-section-name specifies an alternative data section of the file (default is the same name as the dictionary). Can be a literal, or a direct or indirect reference to a buffer or select register.
- key is the name of the jCL  program to be executed. Can be a literal, or a direct or indirect reference to a buffer or select register. If key is not specified, the current parameter in the active input buffer will be used.
- label specifies a label in the target jCL  program from which to start execution. Use of the label clause makes this command synonymous with the GOSUB  command.

## Note

> Input buffers, output buffers, and file buffers are all passed through to the called program, and all open files stay open. External subroutines can call other subroutines. There is no limit to the number of calls that you can make but the jCL  programs must be of the same type.
> 
> When an RTN is encountered, control is returned to the calling jCL  program. If an RTN is not encountered, execution will terminate at the end of the called program.

## Example

```
001 PQN
002 [SUBS  SUB1]
003 ...
```

Calls the jCL  program SUB1 in the SUBS  file as an external subroutine.

Back to [JCL Commands](./../jcl-commands)
  
<PageFooter />