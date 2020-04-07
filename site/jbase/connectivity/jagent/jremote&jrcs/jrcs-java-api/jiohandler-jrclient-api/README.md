# JIOHandler (jrclient API)

<PageHeader />

## Interface JIOHandler

All Known Implementing Classes : [JDefaultIOHandler class in com.jbase.jrcs](./../jdefaultiohandler-jrclient-api)

``` java
public interface JIOHandler
```

The jRCS I/O handler interface, which a class must implement to replace the default JClient I/O handler

## Method Summary

| Modifier and Type | Method and Description |
| --- | --- |
| String | getTermType() |
| String | input(int maxChars) |
| void | output(String characters) |

### Method Detail

#### input

``` java
String input(int maxChars)
```

#### output

``` java
void output(String characters)
```

#### getTermType

``` java
String getTermType()
```

Back to [jRCS java API](./../README.md)
