# PN5_60931

<PageHeader />

## Description

BASIC with full path on Windows eliminates the backslashes

### Previous Release Behavior

```
C:\home>basic c:\home\bp slash.b
slash.b
BASIC_1.c
Source file slash.b compiled successfully

C:\home>catalog c:\home\bp slash
slash
Object slash cataloged successfully

C:\home>jshow -c slash
Shared Object:            C:\home\bin\slash.dll
                          main()
                          jBC main() version 5.7 Wed Nov 06 07:28:35 2019
                          jBC main() source file c:homp
Executable: (DUP!!)       C:\home\bin\slash.exe
                          main()
                          jBC main() version 5.7 Wed Nov 06 07:28:35 2019
                          jBC main() source file c:homp
```

Note the mangled source file path **c:homp**.

### Current Release Behavior

The source file is displayed correctly, e.g.

```
C:\home>BASIC c:\home\bp slash.b
slash.b
BASIC_1.c
Source file slash.b compiled successfully

C:\home>CATALOG c:\home\bp slash
slash
Object slash cataloged successfully

C:\home>jshow -c slash
Shared Object:            C:\danielk\bin\slash.dll
                          main()
                          jBC main() version 5.7 Wed Nov 06 07:30:59 2019
                          jBC main() source file c:\home\bp
Executable: (DUP!!)       C:\danielk\bin\slash.exe
                          main()
                          jBC main() version 5.7 Wed Nov 06 07:30:59 2019
                          jBC main() source file c:\home\bp
```

Back to [5.7.6 release Notes](../jbase-5.7.6-release-notes/README.md)
