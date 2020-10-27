# PN892

<PageHeader />

## Description

**access(6)** not returning the correct value in D3 emulation

## Previous Release Behavior

**access(6)** would always return "1" a CALL from a dictionary item, even though there was more that 1 multi-value in the attribute.

## Current Release Behavior

**access(6)** now returns the correct value number.

Back to [5.7.9 Release Notes](./../README.md)
  
<PageFooter />
