# PN1010

<PageHeader />

## Description

If a dictionary's justification is changed jQL still tries to use the index when it shouldn't.

## Previous Release Behavior
```SELECT filename WITH indexed_dict >= "val1 AND <= "val2"``` would use the index created on indexed_dict even if the dictionary's justification was changed post index creation.

## Current Release Behavior

Indexes are only used if the original sort justification matches the dictionary (except in some cases "=" is allowed).


Back to [5.7.10 Release Notes](./../README.md)
  
<PageFooter />
