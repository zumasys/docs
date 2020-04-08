# PN5_60562

<PageHeader />

## Description

Slow index performance when using T-correlatives

### Previous Release Behavior

The performance of indexes being built with T-correlatives was very slow. This performance drag was also noticeable with jQL queries that didn't use indexes but used T-correlatives.

The problem was found that

- Windows is just plain slow on some system calls, such as stat(), open() and fstat().
- The T-correlative always opened 2 or 3 more files than necessary. This was in anticipation of some of the @xyz variables that needed the current file.

### Current Release Behavior

There is now a cache of the 10 most recently files OPEN'd, which can give up to a 24x performance improvement.

Back to [5.6.2 release Notes](./../README.md)
