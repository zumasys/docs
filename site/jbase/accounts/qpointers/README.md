# Q-pointers

<PageHeader />

## Description

Due to the additional overhead of resolving Q to Q pointers which is not normally necessary in a well maintained system, an environment variable [JEDIENABLEQ2Q](./../../environment-variables/jedienableq2q/README.md) must be set.  

The use of Q to Q pointers should be discouraged. However, if these Q-pointer chains exist, they can be displayed with the `listq` command.

## Note

> If an ACCOUNT name does not exist in the JEDIFILENAME\_SYSTEM when resolving system entries then on UNIX, the ACCOUNT is looked up in the /etc/password file. If successful then the home directory from the /etc/password file is used for SystemEntryAttr2.

## Q and F pointer Resolution

|  | Structure | Resolution  |
| --- | --- | --- |
| 1. | &lt;1&gt; Q<br>&lt;2&gt;<br>&lt;3&gt;<br> | Reflexive Qpointer to MD<br>JEDIFILENAME\_MD else HOME/MD |
| 2. | &lt;1&gt; Q<br>&lt;2&gt;<br>&lt;3&gt; RealFILE<br> | Append File to HOME directory<br>HOME/RealFILE |
| 3. | &lt;1&gt; F<br>&lt;2&gt; RealFILE<br>&lt;3&gt; RealDictFILE<br> | Append File to HOME directory<br>HOME/RealFILE or HOME/RealDictFile |
| 4. | &lt;1&gt; F<br>&lt;2&gt; RealFILE<br>&lt;3&gt; D\_RealDictFILE<br> | Append File to HOME directory<br>HOME/RealFILE or HOME/RealDictFile]D |
| 5. | &lt;1&gt; Q<br>&lt;2&gt;<br>&lt;3&gt;AnotherQ/Fpointer<br> | Recursively look up until failure Another Qpointer or Another Fpointer in<br>HOME/MD or JEDIFILENAME\_MD<br>Then resolve as 2 or 3<br>HOME/RealFILE |
| 6. | &lt;1&gt; Q<br>&lt;2&gt; SYSTEM<br>&lt;3&gt;<br> | Qpointer to SYSTEM<br>JEDIFILENAME\_SYSTEM |
| 7. | &lt;1&gt; Q<br>&lt;2&gt; SYSTEM<br>&lt;3&gt; SYSTEM<br> | Qpointer to SYSTEM<br>JEDIFILENAME\_SYSTEM |
| 8. | &lt;1&gt; Q<br>&lt;2&gt; SYSTEM<br>&lt;3&gt; RealACCOUNT<br> | Qpointer to ACCOUNT MD<br>System Entry Attr2/Suffix of JEDIFILENAME\_MD or SystemEntry Attr 2/MD |
| 9. | &lt;1&gt; Q<br>&lt;2&gt; SYSTEM<br>&lt;3&gt; QpointerACCOUNT<br> | Qpointer to ACCOUNT MD<br>Recursively look up until failure QpointerACCOUNT in JEDIFILENAME\_SYSTEM<br>Then resolve as 8.<br>System Entry Attr 2/Suffix of JEDIFILENAME\_MD or System Entry Attr 2/MD |
| 10. | &lt;1&gt; Q<br>&lt;2&gt; RealACCOUNT<br>&lt;3&gt;<br> | Qpointer to ACCOUNT MD<br>System Entry Attr 2/Suffix of JEDIFILENAME\_MD or System Entry Attr2/MD |
| 11. | &lt;1&gt; Q<br>&lt;2&gt; QpointerACCOUNT<br>&lt;3&gt;<br> | Qpointer to ACCOUNT MD<br>Recursively look up until failure Qpointer ACCOUNT in JEDIFILENAME\_SYSTEM<br>Then resolve as 10<br>System Entry Attr 2/Suffix of JEDIFILENAME\_MD or System Entry Attr 2/MD |
| 12. | &lt;1&gt; Q<br>&lt;2&gt; RealACCOUNT<br>&lt;3&gt; RealFile<br> | Qpointer to ACCOUNT FILE<br>System Entry Attr 2/RealFILE |
| 13. | &lt;1&gt; Q<br>&lt;2&gt; QpointerACCOUNT<br>&lt;3&gt; RealFile<br> | Qpointer to ACCOUNT FILE<br>Recursively look up until failure Qpointer ACCOUNT in JEDIFILENAME\_SYSTEM<br>Then resolve as 12<br>System Entry Attr 2/RealFILE |
| 14. | &lt;1&gt; Q<br>&lt;2&gt; RealACCOUNT<br>&lt;3&gt; AnotherQ/Fpointer<br> | Qpointer to ACCOUNT FILE<br>Recursively look up until failure Another Qpointer or Another Fpointer in System Entry Attr 2/Suffix of JEDIFILENAME\_MD or System Entry Attr 2/MD<br>Then resolve as 12 |
| 15. | &lt;1&gt; Q<br>&lt;2&gt; QpointerACCOUNT<br>&lt;3&gt; AnotherQ/Fpointer<br> | Qpointer to ACCOUNT FILE<br>Recursively look up until failure Qpointer ACCOUNT in JEDIFILENAME\_SYSTEM<br>Recursively look up until failure Another Qpointer or Another FPointer in System Entry Attr 2/Suffix of JEDIFILENAME\_MD or System Entry Attr 2/MD<br>Then resolve as 12 |
| 16. | &lt;1&gt; Q<br>&lt;2&gt; ACCOUNT<br>&lt;3&gt; RealFILE,SECTION<br> | Qpointer to ACCOUNT FILE,SECTION<br>System Entry Attr 2/FILE]MSECTION |
| 17. | &lt;1&gt; Q<br>&lt;2&gt; ACCOUNT<br>&lt;3&gt; AnotherQ/Fpointer,SECTION<br> | Qpointer to ACCOUNT FILE,SECTION<br>Recursively look up until failure Another Qpointer or Another Fpointer in System Entry Attr 2/Suffix of JEDIFILENAME\_MD or System Entry Attr 2/MD<br>Then resolve as 16<br>System Entry Attr 2/FILE]MSECTION |
| 18. | &lt;1&gt; Q<br>&lt;2&gt; Remote Account<br>&lt;3&gt; Remote File<br> | Remote Q pointer for use with the jBASE Remote file service. [See jRFS](./../../jrfs/README.md) |
| 19. | &lt;1&gt; QL<br>&lt;2&gt; Remote Account<br>&lt;3&gt; Remote File<br> | Remote Q pointer for use with the jBASE Remote file service. [See jRFS](./../../jrfs/README.md) . The **L** indicates that updates to remote file are not [Logged](./../../transactions/README.md). |
| 20. | &lt;1&gt; F<br>&lt;2&gt; /absolute/path/for/DATA<br>&lt;3&gt; /absolute/path/for/DICT<br> | Fpointer to absolute file<br>/absolute/path/for/DATA |

Back to [Accounts](./../README.md)

<PageFooter />
