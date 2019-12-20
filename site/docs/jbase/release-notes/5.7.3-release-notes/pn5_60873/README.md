# PN5_60873

**Created At:** 6/29/2019 7:37:18 AM  
**Updated At:** 6/29/2019 8:58:09 AM  
**Original Doc:** [pn5_60873](https://docs.jbase.com/61286-5-7-3-release-notes/pn5_60873)  


### Description

Enhance **jpq**, the Proc processor, to allow external calls to paragraphs



### Previous Release Behavior

The ability to chain to or call paragraphs from a proc did not exist.



### Current Release Behavior

Paragraphs can now be executed from a proc in 2 ways:



```
(filename paragraph)     chain to a paragraph
[filename paragraph]     call a paragraph and continue execution of the proc
```

where **filename** is the name of the file where the paragraph is stored.

For example, given this proc in the MD (or VOC):



```
ID: EXEC
001 PQ
002 S2
003 (PROK
```

and this paragraph, stored in a file called PROK which, for this example, holds both Procs and Paragraphs:



```
ID: PATEST
001 PA
002 DISPLAY "Better a little which is done well, than a great deal imperfectly." -- Socrates
```

The proc will chain to the paragraph and then termninate:



```
jsh ~ -->EXEC PATEST
"Better a little which is done well, than a great deal imperfectly." -- Socrates

jsh ~ -->
```

Likewise, a paragraph can be called within a proc as in:



```
001 PQ
002 [PROK PATEST]
003 ODone!
```

The proc will continue execution after the **PATEST** paragraph has been executed.



### Notes

Paragraphs are orthogonal to the proc. In other words, any output from the paragraph does not affect any of the proc buffers; it is an independent process from the rest of the proc.

Paragraphs can exist in any file and can then be run with the **para** command. For example, if the above paragraph is stored in a file called **SCRIPTS** then it can be executed with:



```
para SCRIPTS PATEST
```
