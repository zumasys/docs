# PN713

<PageHeader />

## Description

PORTBAS with C option converts reserved words in strings to UPPER CASE when the string is enclosed with backslashes.

## Previous Release Behavior

```
C:\home\bp>type test99
    CRT \This is a sentence with the reserved words.\

C:\home\bp>portbas . test99 (CH
OutputFile = .
   1 1     test99

C:\home\bp>type test99
    CRT \This is a SENTENCE WITH reserved words.\
```

## Current Release Behavior

```
C:\home\bp>type test99
    CRT \This is a sentence with reserved words.\

C:\home\bp>portbas . test99 (CH
OutputFile = .
   1 1     test99

C:\home\bp>type test99
    CRT \This is a sentence with reserved words.\
```

Back to [5.7.7 release Notes](../jbase-5.7.7-release-notes/README.md)

<PageFooter />
