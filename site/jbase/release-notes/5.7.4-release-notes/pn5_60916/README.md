# PN5_60916

<PageHeader />

## Description

jQL: Optimize select-list output when the list contains a large number of multi-values (&gt; 100,000).

### Previous Release Behavior

If a SELECT statement references an attribute definition that returns a very large number of values, it takes a long (minutes) time to complete.

### Current Release Behavior

Handling of a large number of multi-values is now optimized and the output-phase of SELECT should be almost immediate, regardless of how many values are involved.

Back to [5.7.4 Release Notes](./../README.md)
