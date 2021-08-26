# curlInit

<PageHeader />

Create a [jCURL](./../README.md) handle for subsequent use.

## Syntax

***result_code*** = **curlInit**(***curlHandle***)

where:

| Variable | Type | Description |
|--|--|--|
***result_code*** | integer | result code
***curlHandle*** | var | a handle to use with other [jCURL](./../README.md) functions

## Example

```
rc = curlInit(curlHandle)
...perform curl operations using curlHandle
```

Back to [jCurl.](./../README.md)

<PageFooter />
