# AR Control

<PageHeader />

## Payment Fields

AR.CONTROL response JSON format to enable or disable fields in the payment screen for Accounting and Customer module.

```json
{
    "payment_field_items": [
        { "payment_field": "DISC.DESC"},
        { "payment_field": "DISC.AMT"},
        { "payment_field": "DISC.PCT"},
    ]
}
```

> Requires fields to be defined in FDICT AR response.

<PageFooter />
