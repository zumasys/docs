# PN5_60891

<PageHeader />

## Description

Add **-D** option to the **BASIC** command to compile programs with a compiler directive

### Previous Release Behavior

The **jcompile -D** option was not recognized by the **BASIC** command.

### Current Release Behavior

The **-D** option can now be used with the **BASIC** command, providing the same functionality as with the **jcompile** command.

For example, given the following program:

```
PROGRAM test_compiler_directive
#ifdef DEBUG_BUILD
    CRT 'This is a debug build'
#endif
```

If the program is compiled as:

```
BASIC bp test_compiler_directive.b
CATALOG bp test_compiler_directive
```

there would be no output.

Compiling this with the **-D** option:

```
BASIC -DDEBUG_BUILD test_compiler_directive.b
CATALOG bp test_compiler_directive
```

the output would be **This is a debug build**.

Back to [5.7.3 Release Notes](./../jbase-5.7.3-release-notes/README.md)
  
<PageFooter />
