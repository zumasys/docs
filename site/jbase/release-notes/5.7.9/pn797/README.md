# PN797

<PageHeader />

## Description

ACCESS(6) is not being updated for each value when using BY-EXP

## Previous Release Behavior

In **D3** emulation, a dictionary calling a subroutine should set the whole record in **ACCESS(3)** and the current multi-value in **ACCESS(6)** when using BY-EXP on a multi-valued field.

Currently, **ACCESS(3)** would only hold the relevant MV from the BY-EXP for each attribute and **ACCESS(6)** would always be 1.

## Current Release Behavior

**ACCESS(3)** now holds the full item and **ACCESS(6)** the BY-EXP position.

## Notes

This behavior is dependent on **generic_d3 = true** configuration option.

Back to [5.7.9 Release Notes](./../README.md)
  
<PageFooter />
