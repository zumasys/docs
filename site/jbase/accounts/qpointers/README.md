# QPOINTERS

**Created At:** 7/6/2018 9:13:32 AM  
**Updated At:** 1/16/2019 1:25:26 AM  
**Original Doc:** [325725-qpointers](https://docs.jbase.com/46964-accounts/325725-qpointers)  
**Original ID:** 325725  
**Internal:** No  


## Description 

Due to the additional overhead of resolving Q to Q pointers which is not normally necessary in a well maintained system, an environment variable JEDIENABLEQ2Q must be set. The use of Q to Q pointers should be discouraged.

## Note: 


> If an ACCOUNT name does not exist in the JEDIFILENAME\_SYSTEM when resolving system entries then on UNIX, the ACCOUNT is looked up in the /etc/password file. If successful then the home directory from the /etc/password file is used for SystemEntryAttr2.




## Q and F pointer Resolution


| <br> | Structure<br> | Resolution <br> |
| --- | --- | --- |
| 1.<br> | &lt;1&gt; Q<br>&lt;2&gt;<br>&lt;3&gt;<br> | Reflexive Qpointer to MD<br>JEDIFILENAME\_MD else HOME/MD<br> |
| 2.<br> | &lt;1&gt; Q<br>&lt;2&gt;<br>&lt;3&gt; RealFILE<br> | Append File to HOME directory<br>HOME/RealFILE<br> |
| 3.<br> | &lt;1&gt; F<br>&lt;2&gt; RealFILE<br>&lt;3&gt; RealDictFILE<br> | Append File to HOME directory<br>HOME/RealFILE or HOME/RealDictFile<br> |
| 4.<br> | &lt;1&gt; F<br>&lt;2&gt; RealFILE<br>&lt;3&gt; D\_RealDictFILE<br> | Append File to HOME directory<br>HOME/RealFILE or HOME/RealDictFile]D<br> |
| 5.<br> | &lt;1&gt; Q<br>&lt;2&gt;<br>&lt;3&gt;AnotherQ/Fpointer<br> | Recursively look up until failure AnotherQpointer or AnotherFpointer in<br>HOME/MD or JEDIFILENAME\_MD<br>Then resolve as 2 or 3<br>HOME/RealFILE<br> |
| 6.<br> | &lt;1&gt; Q<br>&lt;2&gt; SYSTEM<br>&lt;3&gt;<br> | Qpointer to SYSTEM<br>JEDIFILENAME\_SYSTEM<br> |
| 7.<br> | &lt;1&gt; Q<br>&lt;2&gt; SYSTEM<br>&lt;3&gt; SYSTEM<br> | Qpointer to SYSTEM<br>JEDIFILENAME\_SYSTEM<br> |
| 8.<br> | &lt;1&gt; Q<br>&lt;2&gt; SYSTEM<br>&lt;3&gt; RealACCOUNT<br> | Qpointer to ACCOUNT MD<br>SystemEntryAttr2/SuffixofJEDIFILENAME\_MD or SystemEntryAttr2/MD<br> |
| 9.<br> | &lt;1&gt; Q<br>&lt;2&gt; SYSTEM<br>&lt;3&gt; QpointerACCOUNT<br> | Qpointer to ACCOUNT MD<br>Recursively look up until failure QpointerACCOUNT in JEDIFILENAME\_SYSTEM<br>Then resolve as 8.<br>SystemEntryAttr2/SuffixofJEDIFILENAME\_MD or SystemEntryAttr2/MD<br> |
| 10.<br> | &lt;1&gt; Q<br>&lt;2&gt; RealACCOUNT<br>&lt;3&gt;<br> | Qpointer to ACCOUNT MD<br>SystemEntryAttr2/SuffixofJEDIFILENAME\_MD or SystemEntryAttr2/MD<br> |
| 11.<br> | &lt;1&gt; Q<br>&lt;2&gt; QpointerACCOUNT<br>&lt;3&gt;<br> | Qpointer to ACCOUNT MD<br>Recursively look up until failure QpointerACCOUNT in JEDIFILENAME\_SYSTEM<br>Then resolve as 10<br>SystemEntryAttr2/SuffixofJEDIFILENAME\_MD or SystemEntryAttr2/MD<br> |
| 12.<br> | &lt;1&gt; Q<br>&lt;2&gt; RealACCOUNT<br>&lt;3&gt; RealFile<br> | Qpointer to ACCOUNT FILE<br>SystemEntryAttr2/RealFILE<br> |
| 13.<br> | &lt;1&gt; Q<br>&lt;2&gt; QpointerACCOUNT<br>&lt;3&gt; RealFile<br> | Qpointer to ACCOUNT FILE<br>Recursively look up until failure QpointerACCOUNT in JEDIFILENAME\_SYSTEM<br>Then resolve as 12<br>SystemEntryAttr2/RealFILE<br> |
| 14.<br> | &lt;1&gt; Q<br>&lt;2&gt; RealACCOUNT<br>&lt;3&gt; AnotherQ/Fpointer<br> | Qpointer to ACCOUNT FILE<br>Recursively look up until failure AnotherQpointer or AnotherFpointer in SystemEntryAttr2/SuffixofJEDIFILENAME\_MD or SystemEntryAttr2/MD<br>Then resolve as 12<br> |
| 15.<br> | &lt;1&gt; Q<br>&lt;2&gt; QpointerACCOUNT<br>&lt;3&gt; AnotherQ/Fpointer<br> | Qpointer to ACCOUNT FILE<br>Recursively look up until failure QpointerACCOUNT in JEDIFILENAME\_SYSTEM<br>Recursively look up until failure AnotherQpointer or AnotherFPointer in SystemEntryAttr2/SuffixofJEDIFILENAME\_MD or SystemEntryAttr2/MD<br>Then resolve as 12<br> |
| 16.<br> | &lt;1&gt; Q<br>&lt;2&gt; ACCOUNT<br>&lt;3&gt; RealFILE,SECTION<br> | Qpointer to ACCOUNT FILE,SECTION<br>SystemEntryAttr2/FILE]MSECTION<br> |
| 17.<br> | &lt;1&gt; Q<br>&lt;2&gt; ACCOUNT<br>&lt;3&gt; AnotherQ/Fpointer,SECTION<br> | Qpointer to ACCOUNT FILE,SECTION<br>Recursively look up until failure AnotherQpointer or AnotherFpointer in SystemEntryAttr2/SuffixofJEDIFILENAME\_MD or SystemEntryAttr2/MD<br>Then resolve as 16<br>SystemEntryAttr2/FILE]MSECTION<br> |
| 18.<br> | &lt;1&gt; Q<br>&lt;2&gt; Remote Account<br>&lt;3&gt; Remote File<br> | Remote Q pointer for use with the jBASE Remote file service. See jRFS<br> |
| 19.<br> | &lt;1&gt; QL<br>&lt;2&gt; Remote Account<br>&lt;3&gt; Remote File<br> | Remote Q pointer for use with the jBASE Remote file service. See jRFS. The **L** indicates that updates to remote file are not [logged](304803-untitled-question).<br> |
| 20.<br> | &lt;1&gt; F<br>&lt;2&gt; /absolute/path/for/DATA<br>&lt;3&gt; /absolute/path/for/DICT<br> | Fpointer to absolute file<br>/absolute/path/for/DATA<br> |




[Accounts](./../accounts)
