# PN5_60586

**Created At:** 6/22/2017 11:50:17 AM  
**Updated At:** 11/22/2017 11:59:02 AM  
**Original Doc:** [pn5_60586](https://docs.jbase.com/36526-5-6-2-release-notes/pn5_60586)  
**Original ID:** 260734  
**Internal:** No  

## Description

jQL: Process malformed A-correlatives with missing semicolon

### Previous Release Behavior

Without a semicolon, not all correlatives would work.

### Current Release Behavior

The following variations are now supported:

- A(1+2)/'2'
- A9;(1+2)/2
- A;(1+2)/2
- A9(1+2)/2
- A;(1\*2+2+2+2)\*'9'(MCL)
- A(3(TMD;X;;1))
- A1(MCL)
- A;(3(TMD;X;;1))

Back to [5.6.2 release Notes](./../README.md)
