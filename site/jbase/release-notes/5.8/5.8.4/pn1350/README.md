# PN1350

<PageHeader />

## Description  

ICONV on a $amount with an MD conversion returns an empty string instead of the numeric internal representation

## Previous Release Behavior

```
CRT ICONV('$6,000.00','MD2')
```

Produces

```

```

## Current Release Behavior

```
CRT ICONV('$6,000.00','MD2')
```

Produces

```
600000
```

Back to [5.8.4 Release Notes](./../README.md)

<PageFooter />
