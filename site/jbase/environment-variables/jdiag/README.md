# JEDIFILEPATH

<PageHeader />

**Tags:**
<badge text='jdirectories' vertical='middle' />
<badge text='environment variables' vertical='middle' />

## Description

This environment variable **JDIAG** turns on special debugging features.

## Values

| Option          | Description                                      |
| --------------- | ------------------------------------------------ |
| TRACE=LICENSING | Extended Licening output                         |
| TRACE=INDEX     | jQL index help                                   |
| TRACE=INDEXVERBOSE | Very verbose jQL help                         |
| TRACE=jSQLBREAK | sql debugging |
| TRACE=SCANFILE  | Scanfile debugging |

## Default

The current directory

## UNIX

```
export JDIAG=TRACE=LICENSING
```

## Windows

```
set JDAIG=TRACE=LICENSING
```

Go Back to [Environment Variables](./../README.md)

<PageFooter />
