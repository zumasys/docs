# PN5_60717

<PageHeader />

## Description

**jshow** enhancements

### Previous Release Behavior

In the last year or two, the **jshow** utility had fallen behind development, such as with case insensitivity and Dynamic Objects.

This change re-vamps **jshow** to add all the missing features, some new features, and fix some existing bugs.

### Current Release Behavior

Pretty much the same as before in many ways.

The following is a list of changes, in no particular order:

1) Deals with case insensitivity properly. It handles the fact that on Windows, the files and executables are case insensitive, and on D3 emulation files, executables and subroutines are case insensitive.

2) Deals with MD/VOC properly. In the past, if a MD was defined, **jshow** would give up after processing the MD, thus all duplicates that might be in normal directories/folders would not be displayed.

3) Deals with MD/VOC in that, if defined, we always look in there for files (F and Q pointers) and report them and the fact they are opened via the MD. We also look for executables in the MD (e.g. procs and paragraphs) as well as in directories.

4) Support methods. If you are checking if a class method exists, you can specify that, for example:

```
jsh gregc ~/tmp2 -->jshow Circle::draw
Method:                   Circle::draw
```

5) Support regular expressions in the name you are looking for. Here are some examples (remember OS regular expressions can be troublesome to understand, and need care if the command is executed from a OS shell)

5.1) Look for all methods in the Circle class:

```
jsh gregc ~/tmp2 -->jshow Circle::*
Method:                   Circle::draw
Method:                   Circle::area
Method:                   Circle::Circle
```

5.2) Look for all the jBASE supported classes and methods

```
jsh gregc ~/tmp2 -->jshow \$.*::*
Method:                   $file::cleargrouplocks
Method:                   $system::getbinaries
Method:                   $system::getemulation
Method:                   $persistent::$persistent
Method:                   $terminal::terminfo

[ Lots of lines removed for brevity ]
```

5.3) Show EVERYTHING -- quite a lot of screen output

```
jsh gregc ~/tmp2 -->jshow .*
File:                     /home/gregc/tmp/MD2 (from MD/VOC entry MD)
File:                     /home/gregc/tmp/MD2 (from MD/VOC entry SYSTEM)

[ Lots of lines removed for brevity ]
```

5.4) Show all the jBASE files in our file path with the -f option.

```
jsh gregc ~/tmp2 -->jshow -f .*
File:                     /home/gregc/tmp/MD2 (from MD/VOC entry MD)
File:                     /home/gregc/tmp/MD2 (from MD/VOC entry SYSTEM)

[ Lots of lines removed for brevity ]
```

5.5 Show all the subroutines, functions and methods we have catalog'ed

```
jsh gregc ~/tmp2 -->jshow -s .*
Subroutine:               JSPOOLJobStatus
Subroutine:               JSPOOLWriteLogDict
Subroutine:               ATTRIB7.TST
Method:                   cache1::func8
Method:                   cachetest2::func17
```

6) When using the -v option, it will now flag duplicates it finds in the object list, the file list and the executable list. For example,

```
fbcentos-~/tmp2: export JEDIFILEPATH=`pwd`:`pwd`:`pwd`
fbcentos-~/tmp2: jshow -v FB1
File path:                /home/gregc/tmp/MD2
File path:                /home/gregc/tmp2
File path: (DUP!!!)       /home/gregc/tmp2
File path: (DUP!!!)       /home/gregc/tmp2
File path:                .
File:                     /home/gregc/tmp/FB2X (from MD/VOC entry FB1)
```

7) Better descriptions and finding Q and F pointers.  

When you look for a file, we provide better information regarding the location.

In the above example, we show that file FB1 exists, but it is via an entry in the MD and actually points to file FB2X. So although we were looking for file FB1, jshow correctly reports that you would actually open file FB2X.

Back to [jBASE 5.7.0 Release Notes](./../README.md)

<PageFooter />
