# jBASE 5.8.1 Release notes

<PageHeader />

## New Features in jBASE 5.8.1

### Trigger Enhancements  

In a subroutine which is used with a trigger, the fourth parameter has always been documented as "Flags" and "This parameter not yet implemented".

This parameter has now implemented.

See [Trigger API](./../../../triggers/trigger-api/README.md)

This release also includes internal bug fixes and the following patches:

## Patches

- [PN638](./pn638/README.md)   - SQL: I-type with `EXTRACT` causes segmentation violation  
- [PN642](./pn642/README.md)   - jBC: EXECUTE'ing a SELECT/RTNLIST on an empty file returns a select-list  
- [PN647](./pn647/README.md)   - "Flags" parameter implemented for Trigger API
- [PN1144](./pn1144/README.md) - jED enhancement  
- [PN1156](./pn1156/README.md) - I-type definitions with decimal arithmetic are not processed/interpreted correctly  
- [PN1158](./pn1158/README.md) - SQLSELECTL reports 1 Items selected when 0 returned  
- [PN1165](./pn1165/README.md) - jBC: New `key` operator to the `for` iterator  
- [PN1169](./pn1169/README.md) - SQLSELECT duplicating multi-value rows  
- [PN1198](./pn1198/README.md) - TRANS function causes segmentation violation in SQLSELECT  

[Back to 5.8.x Release Notes](./../README.md)
  
<PageFooter />
