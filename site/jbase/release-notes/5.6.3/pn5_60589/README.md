# PN5_60589

<PageHeader />

## Description

On D3 systems, where we have case insensitivity, there was a problem with mixed case item ids and jQL statements.

### Previous Release Behavior

Consider a jQL statement like this:

```
SELECT HG.CONS WITH colldate GE "01/06/17" AND WITH 68 NE ""
```

In his example, both 'colldate' and '68' had an index.

The  problem was, because of case insensitivity, the application wrote back  the item with different cases. For example, let us assume there is an  item id called **GREG** where **colldate** is GE "01/06/17", but **68** is "". All well and good so far. The index for **68** will add the item id for **GREG** as having a key of "".

Now, edit item **GREG** and change attribute 68 to **ND**. We write it back as **greg**. This means the key for "" removes **GREG** and adds to the **ND** key the item id **greg**.

The index is correct.

If you do this, it works

```
SELECT HG.CONS WITH colldate GE 01/06/17
nnnnnn Items selected
> SELECT HG.CONS WITH 68 NE ""
mmmm items selected
```

But when you do both together, jQL tries to see if the IDs selected with **colldate** exist in the key for **68**. This was failing because of case insensitivity.

### Current Release Behavior

The above scenario produces the correct result and compares correctly when using the NO.INDEX modifier.

Note that the **-c** option is no longer used -- we pick that up from the emulation by default.

Back to [5.6.2 release Notes](./../README.md)

  
<PageFooter />
