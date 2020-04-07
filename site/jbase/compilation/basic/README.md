# BASIC

<PageHeader />

``` bash
BASIC -v -wn -Ipath FileName Itemlist (On En Wn Ipath Qq
```

| Option | Description |
| --- | --- |
| -v | verbose mode |
| -wn | set the warning level to 0, 1, 2 or 3. See later |
| -Ipath | path for include files |
| -DDef | Definition to pass to the compiler (used with #ifdef / #ifndef constructs to execute specific sections of code, see example below) |
| (On | optimize the code, see below |
| (En | optimize the code. As the (O) option |
| (Wn | set warning level to 0, 1, 2 or 3, see below |
| (Ipath | path for include files |
| (V | allow persistent variables in subroutines |
| (Qq | specifies that the source code contains embedded SQL statements, see below |

If the record key selection is omitted, **BASIC** will use any preceding select list. If the BASIC command has no select list, it will use all records in the specified file. When processing the list of record keys, the **BASIC** command will ignore $ and ! prefixes and .o or .obj suffixes and build up a list of source names. Using this mechanism, you can safely use BASIC on all records in a file, and it will only process the sources you intended.

Note: To copy binary object files such as $PROG or PROG.o from Hash files to directories or vice versa use the B option of the jBASE COPY command. This will ensure conversion of attribute mark characters to new line and vice versa is suppressed thus invalidating the binary object.

This example illustrates the use of the -D option:

```
PROGRAM DEFTEST
#ifdef TEST
   CRT "Testing"
#endif
```

``` bash
BASIC -DTEST BP DEFTEST
CATALOG BP DEFTEST
```

When the DEFTEST program is run, it will display the string "Testing". If the program was not compiled with that specific -D option then the string would not display.

## Optimization

There are 4 levels of optimization.

| Level | Description |
| --- | --- |
| 1 | No code optimizations are performed and debug information is produced for both the C debugger and the jBASE debugger. |
| 2 | Debug information is produced for the jBC debugger but not for the C debugger. Minimal optimization occurs. *This is the default optimization level.* |
| 3 | Debug information is produced for the jBC debugger. Optimization of jBC occurs and matrix boundary checking is removed. The C code is optimized by the standard optimizations of the resident C compiler. |
| 4 | Full optimization. No debugging information is produced. The jBC code is fully optimized and no run time checking is done on array boundaries and the like. All symbol information is removed from the final executable and all available (safe) optimizations are performed by the resident C compiler. |

## Compiler Warnings

The default level is level 1.

The four levels are:

| Level | Type | Description |
| --- | --- | --- |
| 0 | none | no warnings generated at all |
| 1 | reasonable | reports likely coding errors |
| 2 | pedantic | reports level 1 warnings and bad practice |
| 3 | very pedantic | reports every transgression of the rules |

The following source code can be used to show the different warning levels in action. Each warning level will produce a different set of warning messages. The higher the warning level the more warning messages will be generated.

```
SUBROUTINE abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ
varx = 1
COMMON varx
vary = varz
FOR I = 1 TO 10
NEXT L
BREAK
CONTINUE
format = varx "L#10" "L#20" "L#30"
RETURN
```

## Embedded SQL

The Qq option is used to specify that the source code contains embedded SQL statements. The values for q can be:

| Option | Description |
| --- | --- |
| i | Ingres |
| m | Microsoft SQL |
| o | Oracle |
| x | Informix |

[Back to Compilation](../README.md)
