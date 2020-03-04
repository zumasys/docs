# PN5_60914

**Created At:** 9/24/2019 8:42:23 AM  
**Updated At:** 10/6/2019 11:03:58 AM  
**Original Doc:** [pn5_60914](https://docs.jbase.com/75024-5-7-4-release-notes/pn5_60914)  
**Original ID:** 459844  
**Internal:** No  


### Description

GET-LIST in a Proc produced incorrect results in D3 emulation



### Previous Release Behavior

Create this Proc and a simple "Hello World" program:



```
id: PROCTEST
001 PQN
002 C This select-list was produced with SELECT MD, then SAVE-LIST TESTMD
003 HGET-LIST TESTMD
004 STON
005 C Execute a program
006 Hhello_world
007 P
```

Running the Proc in D3 emulation produced this result:



```
jsh ~  -->PROCTEST

  Records selected


jsh ~  -->
```



### Current Release Behavior



```
jsh ~ 1 -->PROCTEST

 346 Records selected

Hello, World!

>
```



### Notes

The previous behavior of GET-LIST in D3 emulation was such that doing a GET-LIST with multiple lists would return a list with unique entries.

The current behavior is that it concatenates the lists regardless of their contents. This is now compatible with D3 behavior.
