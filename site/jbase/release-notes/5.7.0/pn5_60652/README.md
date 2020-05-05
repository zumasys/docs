# PN5_60652

<PageHeader />

## Description

Enhancements to the jShell dot-stacker

### Previous Release Behavior

The dot-stacker functionality and command set were extremely limited, the only commands initially available were .l, .c and .x, and the .c command was not fully functional.

### Current Release Behavior

```
jsh home -->.?

Username-based command stack.
Maximum number of stack entries:    100
Current number of stack entries:     42

.?          Display help
.a# text    Append 'text' to entry '#'
.c#/s1/s2/* Change 's1' to 's2' in entry '#', * = change all
.d#         Delete entry number '#'
.f text     Find first occurrence of 'text', move to top of stack
.l          List first page
.ln         List first 'n' lines
.lm-n       List entries 'm' through 'n' inclusive
.m#         Move entry number '#' to top of stack
.p# text    Prepend 'text' to entry '#'
.r#/s1/s2/* Replace 's1' with 's2' in entry '#', * = replace all
.s text     Search and display all entries with 'text'
.{x}#       Execute entry '#' [if 'x' is omitted then '#' is required]

If '#' is '0' or omitted then implies entry 1.
```

The command stack is configured with the JSH\_COMMAND\_STACK environment variable (see patch [5\_60582](./../5.6.2-release-notes/pn5_60582) issued on jBASE 5.6.3)

Example:

```
export JSH_COMMAND_STACK=username,100
```

Back to [jBASE 5.7.0 Release Notes](./../README.md)

<PageFooter />
