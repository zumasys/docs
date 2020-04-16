# PN5_60644

<PageHeader />

## Description

Add a new file type **JBC** to the **CREATE-FILE** command.

This new file type behaves like type **UD** except it also creates an OBJECT data directory to keep source and object files separate.

Syntax:

```
CREATE-FILE FILENAME TYPE=JBC
```

Examples:

```
CREATE-FILE BP TYPE=JBC
[ 417 ] File BP created , type = UD
[ 417 ] File BP]MOBJECT created , type = UD

jed BP hello_world.b
        NEW File BP , Record 'hello_world.b'
        Command->
        0001 CRT "hello"

BASIC BP hello_world.b
        hello_world.b
        BASIC_1.c
        Source file hello_world.b compiled successfully

dir BP
        29/09/2017  11:57    <DIR>          .
        29/09/2017  11:57    <DIR>          ..
        29/09/2017  11:55                 4 .jbase_header
        29/09/2017  11:57                17 hello_world.b

dir BP]MOBJECT
        29/09/2017  11:57    <DIR>          .
        29/09/2017  11:57    <DIR>          ..
        29/09/2017  11:55                 4 .jbase_header
        29/09/2017  11:57             2,555 hello_world.obj
```

Back to [5.6.2 release Notes](./../README.md)

  
<PageFooter />
