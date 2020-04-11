# Calling a Subroutine from a Dictionary Item

**Created At:** 5/23/2018 8:50:57 AM  
**Updated At:** 4/25/2019 1:00:57 PM  
**Original Doc:** [317985-calling-subroutine-from-dictionary-items](https://docs.jbase.com/46350-jql/317985-calling-subroutine-from-dictionary-items)  
**Original ID:** 317985  
**Internal:** No  

## Description

It is possible to have dictionary items call subroutines. This can be done as follows:

```
B;{filename} subname
```

or

```
CALL {filename} subname
```

where :

- **filename** is ignored but provided for compatibility with older systems,
- **Subname** is the name of the called subroutine (or function).  This subroutine must reside in one of the libraries defined by the user and must be visible via [JBCOBJECTLIST](./../../environment-variables/jbcobjectlist).

The subroutine can be called as a conversion (attribute 7 of the dictionary item) or as a correlative (attribute 8 of the dictionary item). Data is passed to and from the subroutine with named COMMON elements. In each subroutine the following line must be included:

```
INCLUDE qbasiccommonpick
```

For ex-Sequoia users, It is possible to INCLUDE the file **qbasiccommonseq**, which provides compatibility with that platform.

The INCLUDE file defines the named common that is used by jQL. The named common consists of 2 arrays: **access** and **newpick**.

Their usage of these arrays is:

## access

| <!----> | <!----> |
| --- | --- |
| access(1) | Data file open variable |
| access(2) | Dictionary file open variable |
| access(3) | Data item currently being processed. If BY-EXP is used then only the current multi-value from each attribute is included in the item. |
| access(4) | Item count  (Initialized to 1 at the start of each jQL statement) |
| access(5) | Attribute being processed. This is the value in attribute 2 of the calling dictionary item. |
| access(6) | Value mark counter |
| access(7) | Sub value mark counter |
| access(8) | reserved |
| access(9) | reserved |
| access(10) | Item id |
| access(11) | Data file name |
| access(12) | reserved |
| access(13) | reserved |
| access(14) | Multivalue number from an exploded select-list |
| access(15) | reserved |
| access(16) | reserved |
| access(17) | reserved |

By default jBASE will only call a subroutine once per item. This is normally desirable, since value and sub value manipulation can be done within the subroutine. In addition, it is clearly more efficient to only call the subroutine once per item. However, for backward compatibility, jBASE can be configured to call the subroutine for every value and sub value processed. If this is required then set [jql\_mv\_subcall = true](./../../migration-station/articles/emulation) in the **$JBCRELEASEDIR/config/Config\_EMULATE** file under the appropriate emulation section. If this setting is in place, **access(6)** and **access(7)** are incremented appropriately as each value and sub value is processed. Otherwise the values in **access(6)** and **access(7)** have no meaning

## newpick

**newpick(1)** through **newpick(11)** are reserved

**newpick(12)** - On entry to the subroutine this will contain the value of the data passed from jQL to the subroutine. By default, this will be **all** the *data defined by the calling dictionary item* (i.e. all values and sub values). However if **jql\_mv\_subcall = true** is set, then the subroutine is called for every value/sub value and **newpick(12)** contains just each value or sub value as it is processed.

It is worth noting that a subroutine can be called as part of a multi-valued correlative. For example, the calling dictionary item could look like:

```
<1>S
<2>17
<8>F;"ABCD"]CALL SUB1
```

In this instance, the data defined by the calling dictionary item is "ABCD". But if the calling dictionary item is...

```
<1>S
<2>17
<8>CALL SUB1
```

...then the data passed to the subroutine in newpick(12) is simply the contents of attribute 17 of the current item, which may be multi/sub valued.

On exit of the subroutine, newpick(12) contains the value used by jQL.

\*Exception to this is if Config\_EMULATE has **generic\_pick=true** as in D3, R83, AP or R91 emulations. In that case the passed parameter on the SUBROUTINE line would contain the value used by jQL.

## Persistent Variables

When calling subroutines from dictionary items it is sometimes advantageous for the values of variables to persist between CALLs for the duration of the jQL execution. An example of how persistent variables can be employed is when it is necessary to READ from a file in the subroutine. Rather than open the file every time the subroutine is called (i.e. for each record processed by jQL), it is more efficient to open the file when the first record is processed and keep the file variable available for subsequent records. Likewise, this technique is useful for initializing any other variable that is required to persist throughout the jQL process.

This can be achieved with the following code in the subroutine:

```
    SUBROUTINE process_customers
    COMMON /persist/ customer_file, static_time
    INCLUDE qbasiccommonpick
    EQU item_count TO access(4) ;* access(4) is initialized to 1 at the start of each jQL statement
    EQU id TO access(10)
    IF item_count = 1 THEN
*-- Initialize all persistent variables here...
        OPEN "CUSTOMERS" TO customer_file ELSE ABORT
        static_Time = TIME()
    END
    READ customer_record FROM customer_file, id THEN
*------ Process the customer here and return the result in newpick(12)
    END
    RETURN
```

Notice that the persistent variables (**customer\_file** and **static\_time**) are treated as named COMMON variables. The one caveat is that they are initialized for each jQL command. If a subroutine is called from two or more dictionary items in the same jQL command then the variables will be shared in the same way that COMMON variables are. If the subroutine is called recursively, then the variables will be shared between each level of recursion, in the same way that COMMON variables are.

### Example 1

This example illustrates how to get a running total of an attribute.

First, create this subroutine:

```
    SUBROUTINE running_total_sub
    COMMON /running_total_common/ running_total
    INCLUDE qbasiccommonpick
    EQU item TO access(3)
    EQU item_count TO access(4)
    EQU attribute_number TO access(5)
    IF item_count = 1 THEN running_total = 0
    running_total += item<attribute_number>
    newpick(12) = running_total
    RETURN
```

Note that the program is using named COMMON to allow the **running\_total** variable to persist when the subroutine is CALL'd for each record being processed.

Line 5 is intialized to 1 at the start of a jQL query and is incremented for each record processed.

Now, create a file called **JQLDEMO** with these records, where the AMT values are in attribute 6:

```
JQLDEMO....... AMT

1               97
2               30
3               18
4               96
5                3
6               44
7               61
8               12
9               28
10              96
```

Create a dictionary item for attribute 6:

```
ID: AMT
001 A
002 6
003
004
005
006
007
008
009 R
010 3
```

Create a dictionary item to call the subroutine to display a running total from attribute 6:

```
ID: RUNNING.TOTAL
001 A
002 6
003 RUNNING]  TOTAL
004
005
006
007 MD0,
008 CALL running_total_sub
009 R
010 7
```

Now run this jQL statment:

```
LIST JQLDEMO TOTAL AMT RUNNING.TOTAL HDR-SUPP
```

Results:

```
JQLDEMO....... AMT RUNNING
                     TOTAL

1               97      97
2               30     127
3               18     145
4               96     241
5                3     244
6               44     288
7               61     349
8               12     361
9               28     389
10              96     485
               ===
***            485

 10 Records Listed
```

You will notice that each amount is added to the previous value in the RUNNING TOTAL column and that the total of AMT matches the final running total.

### Example 2

This program illustrates how to obtain the last multi-value from an attribute:

```
    SUBROUTINE lastmv
    INCLUDE qbasiccommonpick
    newpick(12) = newpick(12)<1, DCOUNT(newpick(12), @VM)>
    RETURN
```

For instance, this dictionary will display the last multi-value from attribute 1:

```
ID:LASTVAL
001 A
002 1
...
008 CALL lastmv
009 L
010 10
```

Back to [jQL](jbase-query-language-jql-)

  
<PageFooter />
