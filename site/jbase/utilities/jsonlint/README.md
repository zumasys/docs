# JSONLINT

<PageHeader />

**Tags:**
<badge text='json' vertical='middle' />

## Description

The **JSONLINT** command validates a JSON file. It takes the general form:

```
jsonlint filename
```

Where **filename** is a full or relative path.

## Example

```
jsh ~ -->jsonlint CurrentVersion/config/audit_logging.json
File CurrentVersion/config/audit_logging.json parsed okay in 0.001 seconds using 2,448 bytes of memory
File CurrentVersion/config/audit_logging.json parsed okay in 0.001 seconds using 33,264 bytes of memory including comments
    2 objects found with 17 key/value pairs
    2 arrays found with 0 values
    158 comment blocks found
```

## Notes

If the JSON file has an error then the output of the command will show the line containing the error and the two lines before and after the error.

Back to [Utilities](./../utilities)

<PageFooter />
