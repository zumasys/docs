# PN5_60772

**Created At:** 8/27/2018 1:23:07 PM  
**Updated At:** 10/24/2018 8:45:52 PM  
**Original Doc:** [pn5_60772](https://docs.jbase.com/48420-5-7-1-release-notes/pn5_60772)  
**Original ID:** 336256  
**Internal:** No  


### Description

Add the syntax =&gt; and =&lt; to the compiler



### Previous Release Behavior

The new pre-processor was unable to use the (little-used) constructs =&gt; or =&lt; in conditional statements as synonyms for GE and LE.

These synonyms were previously supported, but disappeared in 5.7.0 with the new pre-processor.



### Current Release Behavior

These synonyms added back to the compiler (or to be more precise, to the pre-processor which converts =&gt; to GE and =&lt; to LE)
