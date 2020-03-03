# curlInit

Create a [jCURL](../jcurl) handle for subsequent use.

## Synax:

***result_code*** = **curlInit**(***curlHandle***)

where:

| Variable | Type | Description |
|--|--|--|
***result_code*** | integer | result code
***curlHandle*** | var | a handle to use with other [jCURL](../../jcurl) functions

## Example

```
rc = curlInit(curlHandle)
...perform curl operations using curlHandle
```

Back to [jCurl.](./../README.md)
