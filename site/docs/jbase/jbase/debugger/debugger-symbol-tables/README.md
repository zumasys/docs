# Debugger Symbol Tables

**Created At:** 12/13/2017 10:32:04 PM  
**Updated At:** 2/22/2019 6:12:28 PM  
**Original Doc:** [291167-debugger-symbol-tables](https://docs.jbase.com/41693-debugger/291167-debugger-symbol-tables)  


The jBC compiler produces debugging symbol tables for use by the debugger at runtime. These symbol tables are produced for each data area in the program. Issuing the command v -g will display the value of every symbol at every data level within the program. There are three types of data area within a jBC program:



## **Local Data Areas**

Local data areas have scope only within the current source file you are debugging. This will either be the variables used within the main (calling) program or the variables assigned in the current subroutine. By default the v command will only operate on the current local data area. The g option will cause the scope of the v command to be extended across all known data areas.



## **Global Common Area**

The Global Common area contains all the variables that were declared to the compiler using the COMMON statement without naming the common area.



## **Named Common Areas**

There may be many instances of Named Common Data areas within a single executable. Each area maps directly to the named common definitions within your programs. Therefore a statement such as:

COMMON /SIMPLE/ A,B,C

will produce a named common data area called **SIMPLE** for the debugger to use.



## Note:


> If your program contains the same variable name in both local and global   common areas the debugger will operate on each instance of the name in turn.

