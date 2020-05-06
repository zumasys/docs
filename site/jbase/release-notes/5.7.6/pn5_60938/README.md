# PN5_60938

<PageHeader />

## Description

Segmentation violation when running **SQLSELECT** from an active select on a file with no indexes.

### Previous Release Behavior

Running **SQLSELECT** from an active select would crash if the file had no indexes.

### Current Release Behavior

No longer crashes.

Back to [5.7.6 Release Notes](../jbase-5.7.6-release-notes/README.md)

<PageFooter />
