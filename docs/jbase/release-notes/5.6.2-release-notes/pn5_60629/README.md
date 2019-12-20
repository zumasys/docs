# PN5_60629

**Created At:** 10/2/2017 3:44:26 PM  
**Updated At:** 11/25/2017 1:18:48 AM  


### Description

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
