# jBASE 5.8.4 Release Notes

<PageHeader />

This release includes internal bug fixes and the following patches:

## Patches

- [PN931](./pn931/README.md)    - jBC: Add SYSTEM(9010) Function  
- [PN1250](./pn1250/README.md)  - jBC: ON GOTO needs to no-op if zero parameter  
- [PN1279](./pn1279/README.md)  - jBC: OPENSEQ should take the THEN clause after creating the file  
- [PN1284](./pn1284/README.md)  - jQL: F-correlative does not repeat field 0
- [PN1305](./pn1305/README.md)  - jBC: Debugger Stack issue  
- [PN1310](./pn1310/README.md)  - jQL: Query using @ID = 'item list' should not perform a full file scan
- [PN1314](./pn1314/README.md)  - jQL: IF inside two parentheses causes Parse Error  
- [PN1323](./pn1323/README.md)  - jQL: Segv when testing WITHIN keyword in 'd3' emulation  
- [PN1325](./pn1325/README.md)  - jQL: Verbs require a space between the filename and a quoted item-list
- [PN1331](./pn1331/README.md)  - jQL: A correlative named attribute with extraneous spaces fails  
- [PN1335](./pn1335/README.md)  - jBC: BASIC FMT inserts CHAR(251) and space on fold/wrap  
- [PN1336](./pn1336/README.md)  - jQL: TRANS interprets D-type dict in the attr parameter as a synonym to the attr of the dict  
- [PN1337](./pn1337/README.md)  - jQL: IType IF THEN ELSE compound expression produces incorrect result  
- [PN1338](./pn1338/README.md)  - jQL query involving BY and WITH attr_0_dict = 'item list' causes segv
- [PN1341](./pn1341/README.md)  - Alternative behaviour of the DELETE command  
- [PN1344](./pn1344/README.md)  - jQL: F-Correlatives in 'universe' emulation need integer calculation  
- [PN1350](./pn1350/README.md)  - jQL: ICONV on a $amount with an MD conversion returns an empty string  
- [PN1351](./pn1351/README.md)  - jBC: An empty PASSLIST causes a full file select  
- [PN1352](./pn1352/README.md)  - jQL: MR or MD conversion in F-correlative causing missing closed parenthesis  
- [PN1353](./pn1353/README.md)  - jQL: Multiple conversions in an F-correlative involving multivalues are not operating on all values.
- [PN1421](./pn1421/README.md)  - jBC: CHANGE causes a SEGV  

[Back to 5.8.x Release Notes](./../README.md)
  
<PageFooter />
