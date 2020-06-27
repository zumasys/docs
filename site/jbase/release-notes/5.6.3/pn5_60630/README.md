# PN5_60630

<PageHeader />

## Description

Minor issues with the new **JPP2** pre-compiler

### Current Release Behavior

Prior to this patch:

- Numeric labels with decimal points in basic code were not supported.
- The use of CHAR() confused the pre-compiler and would wrongly convert &lt; and &gt; to LT and GT.
- IF @TRUE THEN DEBUG ELSE NULL       ;\* This would previously convert **DEBUG** to **Debug**

Back to [5.6.3 release Notes](./../README.md)

<PageFooter />
