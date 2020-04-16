# PN5_60772

<PageHeader />

## Description

Add the syntax =&gt; and =&lt; to the compiler

### Previous Release Behavior

The new pre-processor was unable to use the (little-used) constructs =&gt; or =&lt; in conditional statements as synonyms for GE and LE.

These synonyms were previously supported, but disappeared in 5.7.0 with the new pre-processor.

### Current Release Behavior

These synonyms added back to the compiler (or to be more precise, to the pre-processor which converts =&gt; to GE and =&lt; to LE)

Back to [5.7.1 Release Notes](./../README.md)

  
<PageFooter />
