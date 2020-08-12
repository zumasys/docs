# PN829

<PageHeader />

## Description

Unable to CATALOG subroutines in a case insensitive manner

A fix to the compiler to handle case-insensitive subroutines/functions/methods caused a CATALOG/DECATALOG incompatibility of subroutines/functions/methods when users upgraded from a pre-5.7.7 release to 5.7.7.

## Previous Release Behavior

An attempt to re-catalog a subroutine on a pre-5.7.7 release would fail.

## Current Release Behavior

A new program, **fixlib**,  will be provided for users on 5.7.7 to fix the library.

The **CATALOG** and **DECATALOG** commands will be fixed to handle this condition automatically for users that came from a pre-5.7.7 release.

Back to [5.7.8 Release Notes](./../README.md)
  
<PageFooter />
