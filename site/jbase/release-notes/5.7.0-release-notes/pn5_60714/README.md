# PN5_60714

<PageHeader />

### Description

jBC code with END followed by a comment would not compile



### Previous Release Behavior

jBC code with the last line an 'END' followed by a comment would not compile. Note, this is when 'END' denotes end of program rather an END to a matching IF.

Each of these 2 lines, as the last line of a program, failed to compile (spaces replace with \_ for clarity):

```
END;_*
END_;_*
```



### Current Release Behavior

The above examples compile successfully.
