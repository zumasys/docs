# PN5_60568

<PageHeader />

## Description

REST: Spurious characters in API\* resource records cause REST to fail

### Previous Release Behavior

If attribute 1 of the resource record was "P " (a space after the P) then REST would fail.

### Current Release Behavior

The fields of the resource records are now normalized as follows:

- Fields 1,3 and 4 are TRIM'd
- Fields 5 and 6 are "MCN" converted

Back to [5.6.2 Release Notes](./../README.md)

  
<PageFooter />
