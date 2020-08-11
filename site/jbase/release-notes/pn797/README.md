# PN797

<PageHeader />

## Description

jQL: ACCESS(6) is not being updated for each multi-value when using BY-EXP

## Previous Release Behavior

In a case-insensitive emulation, a dictionary calling a subroutine should set the whole record in ACCESS(3) and the current multi-value in ACCESS(6) when using BY-EXP on a multi-valued field.

ACCESS(3) would only hold the relevant MV from the BY-EXP for each attribute and ACCESS(6) would always be 1.

## Current Release Behavior

ACCESS(3) now holds the full item and ACCESS(6) the BY-EXP pos.

## Notes

This behavior is dependent on the configuration option **generic_d3 = true**

Back to [5.7.8 Release Notes](../5.7.8/README.md)
  
<PageFooter />
