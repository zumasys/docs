# PQ AND PQN  Differences 

**Created At:** 5/28/2018 10:15:14 AM  
**Updated At:** 6/6/2019 8:16:56 AM  


## Introduction 

The first line of a **jCL**program defines the program as one of two basic types, a **PQ**or a **PQN** style program. Wherever possible, the **PQN**style should be used.

There are several differences between the two styles, as outlined in the following topics.

### 


### Delimiters 

**PQ**-style programs usually use a blank as the delimiter between parameters in the buffers. **PQN**-style programs usually use a field mark. **PQN**allows parameters to be null or contain blanks and more closely mirrors the native record structure.

**PQ** commands are still supported for compatibility but the functionally superior PQN commands in new or revised **j****CL**programs should be used.  When pointers are moved, **PQ**commands will generally leave the pointer at the first character of a parameter. PQN commands will generally leave the pointer at a field mark. Commands affected by this difference are **A, B, BO, F, H, IH**and **IP**.



### Buffers 

Buffer referencing, file buffers and select registers are only available with **PQN** commands.



### Commands 

These commands are only used in **PQN**-style **jCL**programs:

**F;, F-KLOSE , F-WRITE , L, MVD F-CLEAR, F-OPEN , FB, MS,
F-DELETE, F-READ , IBH, MV, F-FREE, F-UREAD, IBP, MVA,**

These commands are functionally equivalent in both **PQ**and **PQN**-style programs:

[**( )**](318584-jcl-command)**, G, IF E, RSUB, U,[\[\]](318585-jcl-command), GO  B, IFN, RTN, X,[+](318586-jcl-command), GO F,**

**M, S, -, GOSUB , P, STOFF, C, IF, RI, STON**




