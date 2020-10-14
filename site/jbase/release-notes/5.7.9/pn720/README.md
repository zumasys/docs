# PN720

<PageHeader />

## Description

Memory Leak creating an index with an A-correlative

## Previous Release Behavior

A CREATE-INDEX (or REBUILD-INDEX) on a file using using a dictionary with an A-correlative would causes each indexed record to consume additional memory.

## Current Release Behavior

No additional memory consumption.

Back to [5.7.9 Release Notes](./../README.md)
  
<PageFooter />
