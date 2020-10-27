# PN5_60629

<PageHeader />

## Description

ICONV doesn't strip leading zeros when the number to be converted is a string

### Previous Release Behavior

Numeric strings with leading zeros or spaces would be incorrectly formatted.

```
CRT ICONV('003','MD2')
```

Displayed 3

### Current Release Behavior

The above example will display **300**

New behavior must be enabled by setting **iconv\_strip\_leading\_zeros = true** in Config\_EMULATE.

Back to [5.6.3 release Notes](./../README.md)

<PageFooter />
