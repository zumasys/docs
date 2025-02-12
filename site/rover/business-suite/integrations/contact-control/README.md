# Contact Control

<PageHeader />

## Control ID

CONTACT.CONTROL response JSON format to set the control ID. Required for enabling caching.

```json
{
    "contact_id": "CONTACT"
}
```

## Contact Lookup

CONTACT.CONTROL response JSON format to enable lookup table for contacts.

```json
{
    "contact_lookup": "CONTACT.LOOKUP",
    "contact_lookup_desc": "Search Contacts"
}
```

> Data response must contain `contact_id` to work correctly.

<PageFooter />
