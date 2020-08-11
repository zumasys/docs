# PN770

<PageHeader />

## Description

A correlative with named-dictionary, N(dict), and translate does not return translate for all multi-values.

## Previous Release Behavior
If a dictionary with a correlative is referenced via a named attribute and the source attribute has multi-values, the conversion is not applied or is only applied to the first multi-value.

```
mainfile, rec
001 123*A]456*B

otherfile, 123
001 something

otherfile, 456
001 else

dict mainfile, tkey
001 S
002 1
...
008 G*1
...

dict mainfile, tcorr
001 S
002 0
...
008 A;N(tkey)(Totherfile;X;;1)
...

LIST mainfile tkey tcorr

mainfile......    tkey    tcorr.....

rec                123    something
                   456


 1 Records Listed

```
## Current Release Behavior
```
mainfile......    tkey    tcorr.....

rec                123    something
                   456    else


 1 Records Listed
```

Back to [5.7.8 Release Notes](../5.7.8/README.md)
  
<PageFooter />
