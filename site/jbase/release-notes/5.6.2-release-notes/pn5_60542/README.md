# PN5_60542

<PageHeader />

## Description

Case Independence: Allow the CHANGE() function to operate in a case insensitive fashion

### Previous Release Behavior

The CHANGE() function was not case insensitive, e.g.

```
consId = "123"
Template = "consid = changetext"
CRT CHANGE(template, "ChangeText", consId)
```

would return the original unchanged string:

```
consid = changetext
```

### Current Release Behavior

In D3 emulation, or with **case\_insensitive\_runtime\_strings** set in Config\_EMULATE, we now get:

```
consid = 123
```

Back to [5.6.2 release Notes](./../README.md)
