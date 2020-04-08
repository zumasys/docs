# PN5_60554

<PageHeader />

## Description

jQL: Enable caseless sorting of attribute data.

Requires **case\_insensitive\_jql\_sort\_attributes = true**, which is set by default for the D3 emulation.

jQL still only sorts using the columns specified, for example:

- LIST FILE BY \*A0 BY \*A1 \*A1

Will look very different from:

- LIST FILE BY \*A0 BY-EXP \*A1 \*A1

In the first statement, only the first MV of \*A1 will be used in the sort, using BY-EXP cause all items in \*A1 to be sorted caseless.

### Previous Release Behavior

All sorts where alpha numeric, e.g. McMURPHY would sort after MURPHY.

### Current Release Behavior

When sorting, all attribute data is sorted caseless, e.g. McMURPHY = MCMURPHY = mcmurphy

Back to [5.6.2 release Notes](./../README.md)
