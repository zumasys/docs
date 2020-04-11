# PN5_60746

<PageHeader />

### Description

jQL: Repeat function with A/F-correlatives only processes first multi-value



### Previous Release Behavior

Some combinations of multi-value data would not be joined correctly, subsequently only processing the first multi-value. For example, in

```
(N(ID.CO):"!":3:"!100")
```

only the first MV returned was being used from attribute 3, causing the following translate to fail:

```
(Ttranslatefile;X;;4)
```



### Current Release Behavior

All multi-values are processed.

  
<PageFooter />
