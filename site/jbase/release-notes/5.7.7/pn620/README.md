# PN620

<PageHeader />

## Description

If an index is created using a dictionary with a conversion code (attribute <7> for A/S types, <3> for I-types) the index was incorrectly created to include the conversion in the indexed data whereas it should only apply dict<2> and dict<8> (for A/S types).

## Previous Release Behavior

Given a dictionary of:

```
001 S
002 99
...
007 MR2
008 F;2;3;+
009 R
010 10
```

Performing CREATE-INDEX using the above dictionary would apply MR2 to attribute 99 instead of on the F-correlative on dict<8>.

## Current Release Behavior

CREATE-INDEX now ignores dict<7> (or dict<3> for I-types).

## Notes

When querying indexes with dictionaries that have a conversion (<7> or <3>) the matching data in the query is matched against the index data with the conversion subsequently applied. This means that the index is usable by dictionaries that do/don't have the conversion (although without the conversion the query matching values would also need to be based on the non-converted value).

Back to [5.7.7 release Notes](../jbase-5.7.7-release-notes/README.md)
  
<PageFooter />
