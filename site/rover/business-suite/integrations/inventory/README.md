# Rover Inventory

<PageHeader />

## Inventory Display Lookups

INV.CONTROL response JSON format to show additional lookup tables in the Inventory Parts module.

```json
{
  "inv_lookup_items": [
    {
      "inv_lookup": "QUOTE*PART",
      "inv_lookup_desc": "Parts on Quote"
    },
    {
      "inv_lookup": "INV*PART",
      "inv_lookup_desc": "Active Parts"
    }
  ]
}
```

<PageFooter />
