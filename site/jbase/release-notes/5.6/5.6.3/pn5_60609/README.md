# PN5_60609

<PageHeader />

## Description

Correct the behavior of SYSTEM(0) for D3 emulation

### Previous Release Behavior

SYSTEM(0) was not coded for D3 emulation.

### Current Release Behavior

As per the D3 documentation, SYSTEM(0) returns the last error number usually. This is broadly compatible with other emulations.

However,  if the last error was caused by a LOCKED clause being taken on a READU,  then SYSTEM(0), under D3 emulation, returns the port number of the process holding the lock.

Back to [5.6.3 Release Notes](./../README.md)

<PageFooter />
