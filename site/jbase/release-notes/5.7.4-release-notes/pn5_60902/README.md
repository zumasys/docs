# PN5_60902

**Created At:** 9/24/2019 7:46:23 AM  
**Updated At:** 10/6/2019 11:03:58 AM  
**Original Doc:** [pn5_60902](https://docs.jbase.com/75024-5-7-4-release-notes/pn5_60902)  
**Original ID:** 459836  
**Internal:** No  

## Description

Distributed Files: Add new error messages to enable failures to be better reported

### Previous Release Behavior

Some errors with distributed files were difficult to find, and some were silent.

### Current Release Behavior

This change gives more informed messages to 2 errors with distributed files.

## (1) Missing part file

If one of the part files is missing, you wouldn't get an error, it would just fail. The following shows the new behaviour.

First, create a file like this ... In this file, we create parts 1 and parts 3 , but NOT part 2

```
[jbase@Milliways:~/tmp4]$ create-file DISTR TYPE=DISTRIB
[ 417 ] File DISTR]D created , type = J4
[ 417 ] File DISTR created , type = DISTRIB
[jbase@Milliways:~/tmp4]$ create-file DISTR-PART1
[ 417 ] File DISTR-PART1]D created , type = JD
[ 417 ] File DISTR-PART1 created , type = JD
[jbase@Milliways:~/tmp4]$ create-file DISTR-PART3
[ 417 ] File DISTR-PART3]D created , type = JD
[ 417 ] File DISTR-PART3 created , type = JD
[jbase@Milliways:~/tmp4]$ create-distrib -a DISTR 1 DISTR-PART1
Part file 'DISTR-PART1', Part number 1 added
[jbase@Milliways:~/tmp4]$ create-distrib -a DISTR 3 DISTR-PART3
Part file 'DISTR-PART3', Part number 3 added
```

We can now safely create an item in part 1 and part3. BUT if we create an item in part2, unpredictable things occur as in this example

```
[jbase@Milliways:~/tmp4]$ ED DISTR 2-2
2-2
TOP
.i
001+hello world
002+
.fi
Record '2-2' written to file 'DISTR'
[jbase@Milliways:~/tmp4]$ ED DISTR 2-2
2-2
TOP
.p
TOP
001 ...............................................................
BOTTOM
```

Other unpredictable behaviour includes segmentation violations.

Now, with the change, an error is generated and the 'errmsg' program enhanced to show all error message.

```
[jbase@Milliways:~/tmp4]$ ED DISTR 2-2

Error 2021 during READ_ERROR to file ./DISTR
Enter I to Ignore, R to Retry , Q to Quit : q
[jbase@Milliways:~/tmp4]$
[jbase@Milliways:~/tmp4]$ errmsg 2021
Error 2021: Distributed Files: Item Id generates part number which has no associated file
[jbase@Milliways:~/tmp4]$
```

## (2) A malformed item id generates an error

The default partition algorithm assumes a particular format, as in "nn-nn". If this format is not kept, we now give a meaningful error message

```
[jbase@Milliways:~/tmp4]$ ED DISTR ABC

Error 2020 during READ_ERROR to file ./DISTR
Enter I to Ignore, R to Retry , Q to Quit : q
[jbase@Milliways:~/tmp4]$ errmsg 2020
Error 2020: Distributed Files: Item Id malformed and cannot create part number
[jbase@Milliways:~/tmp4]$
```

### Notes

>In both examples, we've used the ED command to show the error. Inside a jBC application, you can use the ON ERROR clause to return the error to the application rather than giving an error message to the screen
