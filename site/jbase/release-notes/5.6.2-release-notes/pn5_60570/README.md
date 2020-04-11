# PN5_60570

<PageHeader />

## Description

Secondary Indexes: Make **-w** the default create-index option

### Previous Release Behavior

Indexes were having all sorts of problems with create-index, such as segmentation violation.

We discovered that the **-w** option fixed all these problems without any noticeable detrimental effect.

### Current Release Behavior

The -w option is now applied as a default.

If for some reason this proves a problem, a new **-b** option will revert to the old behavior.

LIST-INDEX with the -v option now has an extra field to show if this option is in use or not -- see the PERMANENT WRITE MODE row below.

```
INDEX definitions for file greg at 18:47:06  25 MAY 2017        PAGE    1

INDEX NAME................. index1
LOCALE NAME................ C
SORT KEYS.................. AL
BASE FID................... 8192
CREATE DATE................ 25 MAY 17
CREATE TIME................ 18:43:35
MODIFIED DATE.............. 25 MAY 17
MODIFIED TIME.............. 18:43:35
INDEX NUMBER............... 0
DEBUG PSEUDO CODE?......... NO
NULL INDEX VALUES ALLOWED?. YES
CASE INSENSITIVE?.......... NO
MULTI VALUE EXTRACT?....... YES
DATA AND INDEX IN SYNC?.... YES
MAXIMUM VALUES EXTRACTED... UNLIMITED
PERMANENT WRITE MODE?...... YES
INDEX DEFINITION........... by 8
LOOKUP.....................


1 Records Listed
```

Back to [5.6.2 release Notes](./../README.md)

  
<PageFooter />
