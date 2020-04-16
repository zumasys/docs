# PN5_60604

<PageHeader />

## Description

jBC: Allow compiler directives to be used as variables

### Previous Release Behavior

Using compiler directives as variables would not compile. For example:

```
WINDOWS = 1
LINUX = 2
AIX = 3
SUN = 4
SOLARIS = SUN
```

None of those statements were valid, they could only be used with compiler directives, e.g.

```
#ifdef WINDOWS
```

### Current Release Behavior

The following is valid code:

```
#ifdef WINDOWS
    CRT "This is windows"
#endif
#ifdef LINUX
    CRT "This is Linux"
#endif
    WINDOWS = 1
    CRT "Windows = " : WINDOWS
    LINUX = 2
    CRT "Linux = " : LINUX
```

Back to [5.6.2 release Notes](./../README.md)

  
<PageFooter />
