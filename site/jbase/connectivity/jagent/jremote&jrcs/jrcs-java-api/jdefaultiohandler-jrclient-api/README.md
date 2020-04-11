# JDefaultIOHandler (jrclient API)

<PageHeader />

## Class JDefaultIOHandler

com.jbase.jrcs.JDefaultIOHandlerAll Implemented Interfaces : [JIOHandler interface in com.jbase.jrcs](./../jiohandler-jrclient-api)

``` java
public final class JDefaultIOHandler
extends Object
implements JIOHandler
```

Default implementation of jRCS I/O handler

## Constructor Summary

| Modifier | Constructor and Description |
| --- | --- |
| protected | JDefaultIOHandler() |

## Method Summary

| Modifier and Type | Method and Description |
| --- | --- |
| String | getTermType() |
| String | input(int maxChars) |
| void | output(String characters) |

## Methods inherited from class java.lang.Object

`clone, equals, finalize, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`

### Constructor Detail

#### **JDefaultIOHandler**

``` java
protected JDefaultIOHandler()
```

### Method Detail

#### getTermType

``` java
public String getTermType()
```

Specified by: `getTermType` in interface `JIOHandler`

#### input

``` java
public String input(int maxChars)
```

Specified by: `input` in interface `JIOHandler`

#### **output**

``` java
public void output(String characters)
```

Specified by: `output` in interface `JIOHandler`

Back to [jRCS java API](./../README.md)

  
<PageFooter />
