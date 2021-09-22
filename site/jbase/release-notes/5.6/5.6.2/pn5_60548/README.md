# PN5_60548

<PageHeader />

## Description

User-defined PROMPT value lost after doing BASIC ENTER or CHAIN

### Previous Release Behavior

Following a CHAIN or ENTER, the PROMPT string would be reset to "?".

### Current Release Behavior

When the new emulation option **retain\_prompt\_on\_enter** is set then the PROMPT string will be retained after doing a CHAIN or ENTER statement.

This emulation option has been added to the D3 emulation.

Back to [5.6.2 Release Notes](./../README.md)

  
<PageFooter />
