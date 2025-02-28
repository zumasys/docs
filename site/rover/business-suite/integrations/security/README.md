# Security

<PageHeader />

## Command Rights

Add the JSON response within the user object in the LOGIN response.

### Block/Hide Fields

To enable block or hide fields you must add the field ids in the LOGIN response in the access rights section.


### Example

```json
{
  "commands_rights": {
    "AR.E": {
      "add": false,
      "view": false,
      "change": false,
      "delete": false,
      "block_fields": [],
      "hide_fields": ["DISC.PCT", "DISC.AMT"]
    },
    "CUST.Q": {
      "add": false,
      "view": false,
      "change": false,
      "delete": false,
      "block_fields": ["CREDIT.HOLD", "FAX"],
      "hide_fields": ["TERMS"]
    }
  }
}
```

<PageFooter />
