# PN5_60706

<PageHeader />

## Description

jQL: Issue with using duplicate association member in queries

### Previous Release Behavior

Having duplicate association columns in queries caused issues.

Doing something like:

```
LIST my_file assoc_controller assoc_dep1 assoc_dep2 *A2 assoc_controller assoc_dep1 assoc_dep2
```

Would fail to produce the correct results, internally jQL will use the controller to track how many values to replicate and what's been processed.

### Current Release Behavior

This patch addresses the following issues:

- Only uses the first instance of the controller
- Doesn't reprocess any duplicate columns

Back to [jBASE 5.7.0 Release Notes](./../README.md)

<PageFooter />
