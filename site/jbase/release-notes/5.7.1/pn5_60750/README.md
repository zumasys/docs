# PN5_60750

<PageHeader />

## Description

jBASE hanging when run from java

### Previous Release Behavior

The process would lock.

Because the process is executed from a java application it did not have a valid tty, when jBASE tried to check for any stacked input it assumed there should be something to enter and sits there waiting.

### Current Release Behavior

jBASE now checks if it is valid jBASE process before trying to get at any stacked input.

Back to [5.7.1 Release Notes](./../jbase-5.7.1-release-notes/README.md)

<PageFooter />
