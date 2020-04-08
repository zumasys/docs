# PN5_60623

<PageHeader />

## Description

Enhancement to make "N" a synonym of "PA" in Paragraphs

### Previous Release Behavior

**N** was not legal in attribute 1 of paragraphs.

The paragraph ID was not case insensitive in the MD.

Paragraph keywords were not case insensitive.

### Current Release Behavior

**N** is now a synonym of **PA**.

The paragraph ID can be used in a case insensitive manner.

Most paragraph keywords are case insensitive, e.g. **DISPLAY** is the same as **display** or **Display**.

This behavior requries **Config\_EMULATE** option **case\_insensitive\_md = true**, which is set by default for the **D3** emulation.

Back to [5.6.2 release Notes](./../README.md)
