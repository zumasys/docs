# PN5_60815

<PageHeader />

## Description

Paragraphs process inline prompts on commented lines

### Previous Release Behavior

This paragraph would process line 3:

```
PA
* DISPLAY hello
* LIST COUNTRIES WITH LANGUAGE = <<Language>> LANGUAGE COUNTRY_NAME
```

### Current Release Behavior

This behavior is now disabled by default.

To enable it, set the following emulation option:

```
para_has_uv_bug = true
```

Back to [5.7.2 Release Notes](./../README.md)

  
<PageFooter />
