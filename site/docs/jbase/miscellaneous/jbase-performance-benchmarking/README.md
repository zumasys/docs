# jBASE Performance Benchmarking

**Created At:** 3/18/2019 10:45:32 PM  
**Updated At:** 3/18/2019 11:03:31 PM  
**Original Doc:** [jbase-performance-benchmarking](https://docs.jbase.com/jbase-performance-benchmarking)  
**Original ID:** 373594  
**Internal:** Yes  

## Overview

There are now a couple of sets of programs that enable comparative benchmarks of jBASE. They can be used to compare jBASE against itself, for example is a new build showing any performance improvements. They can also be used to compare jBASE against other MultiValue platforms.

This benchmark has 64 different MultiValue BASIC instructions that it times. Each BASIC instruction test can have 3 variations, small, medium and large, and these variations are intended to run the BASIC instruction with different sizes of data. For example, it might compare the INDEX() function against a small string, a medium string and a large string.

You run one of these tests and it will provide a Radband rating for each individual test and then a final figure of the Radband rating as a whole. The Radband rating is the inverse uselessness of performance: the higher the value, the better the instruction performs. A Radband rating of 1.0 is the reference value obtained when the tests were first written and were run on a reference platform -- A Pentium chip running at 400MHz. We would therefore hope that on a modern CPU, the Radband rating is always way above 1.

## SINGLE test benchmark

Each test run is written to the RESULTS directory. You can then run a command to compare different results.

## MULTI test benchmark

This benchmark is intended as a "real life" multi user application and is very useful for getting a single value describing the TPS of the system.

## Installing and running the benchmarks

Ensure you are set up as a jBASE user, the same jBASE user that you want to run the benchmark:

```
jbase-centos-~: WHO
1 fb
```

Change to the benchmark directory like this:

```
jbase-centos-~: cd ~/src/Tools/Benchmarks
jbase-centos-~/src/Tools/Benchmarks: ls RESULTS
bin    data         install  lib  setup   singletest.h RESULTS]D  clean  dhrystone.c  jbackup  s1   single  whetstone.c
```

Establish some environment variables:

Note the use of periods , it isn't "./setup" it is ". ./setup".

```
jbase-centos-~/src/Tools/Benchmarks: . ./setup
jbase-centos-~/src/Tools/Benchmarks:
```

Clean up any residual noise from a previous benchmark:

```
jbase-centos-~/src/Tools/Benchmarks: ./clean
Cleaning up the benchmark tests
jbase-centos5-~/src/Tools/Benchmarks:
```

Install the benchmarks, which will build the programs in a new lib and bin directory, avoiding cross contamination with anything else on your system.

```
jbase-centos-~/src/Tools/Benchmarks: ./install
Creating SYSTEM file
[ 417 ] File ./SYSTEM]D created , type = J4
[ 417 ] File ./SYSTEM created , type = J4
Creating SYSTEM file
[ 417 ] File /home/fb/src/Tools/Benchmarks/data/MD]D created , type = J4
245 Items copied from /home/fb/5.0_rels/jbcdev5.6.0/src/MD TO /home/fb/src/Tools/Benchmarks/data/MD
[ 417 ] File TESTER-PROC]D created , type = J4
[ 417 ] File TESTER-PROC created , type = J4
MESSAGE.CHECK
Source file MESSAGE.CHECK compiled successfully
CF.TKLR
Source file CF.TKLR compiled successfully
CFSCREEN300
Source file CFSCREEN300 compiled successfully

[ Some lines of output removed for brevity and clarity ]

TEST04
Object TEST04 cataloged successfully
Library /home/fb/src/Tools/Benchmarks/lib/lib1.so.3 rebuild okay

Running the raw CPU benchmarks for this platform
Please note these values so you can evaluate different
tests run on different hardware platforms
Dhrystone time for 1000000000 passes = 35.96
This machine benchmarks at 27.8 Million Dhrystones/Second
Whetstone time for 500000 passes = 34.95
This machine benchmarks at 1431 Million Whetstone/Second - MWIPS

There are now 2 benchmarks to choose from
(1) The CUBS multi-user benchmarks
    Create files using CREATE.FILES
    RUN-SIMULATOR to actually run a benchmark
(2) The single instruction benchmarks

    SINGLETEST -- runs a test with single instructions benchmarks
    SINGLEDIFF -- compares two previously executed tests
jbase-centos-~/src/Tools/Benchmarks:
```

### Info

At the end of the install script, it runs a couple of simple CPU-centric benchmarks. They are standard dhrystone and whetstone tests, and are useful to enable us to measure the relative CPU performance of the platform. This enables us to compare different benchmarks that have been run on different CPUs, and take into account the CPU speed. The dhrystone test simply runs general CPU instructions, whereas the whetstone is more concerned with floating point operations.

Run the SINGLE instruction benchmarks

As per the output displayed at the end of step (6) shown above, simply execute 'SINGLETEST' and this will run the benchmarks. Each test takes 10 seconds.

You can use the (H) option to SINGLETEST to run in half the time (5 seconds per test) or the (Q) option to run in a quarter of the time (2.5 seconds per test). The results are all relative so running for a shorter time will not seriously impact the results -- although as with any benchmark, the longer the test, the more accurate the results.

```
jbase-centos-~/src/Tools/Benchmarks: SINGLETEST \(Q
Enter the test identifier, e.g. R83 , JBase  : Centos10.28.32.22
Enter the hardware name, e.g. Sun , Intel P400, Alpha 266  : Intel
Enter the operating system name and version, e.g. AIX 4.2 , Unixware 7.0  : Centos
Enter the MultiValue software and release, e.g. jBASE 3.2 , mvBase 2.1.2  : jBASE 5.5
Enter general notes abot this test, e.g. Beta trial of jBASE  : This is just a test
Enter a list of tests from 1 upwards, separated by spaces  : *
Creating scratch files ...
Allow time for the created files to flush to disk ...
Begin benchmark tests ...
1   , FOR/NEXT loop        , small   , loops 28     , category B , CPU 2.517   , Radband rating 0.8301
1   , FOR/NEXT loop        , medium  , loops 35     , category B , CPU 2.512   , Radband rating 0.9743
1   , FOR/NEXT loop        , large   , loops 23     , category B , CPU 2.565   , Radband rating 0.7005
2   , LOOP UNTIL DO REPEAT , small   , loops 642    , category B , CPU 2.502   , Radband rating 20.0464
2   , LOOP UNTIL DO REPEAT , medium  , loops 630    , category B , CPU 2.502   , Radband rating 19.6717

[ Lots of lines of output removed for brevity and clarity ]

62  , DELETE function      , large   , loops 385    , category S , CPU 2.502   , Radband rating 12.6128
63  , PRINT null           , small   , loops 88     , category O , CPU 2.526   , Radband rating 1.9036
64  , LOCK/RELEASE         , small   , loops 131    , category D , CPU 2.516   , Radband rating 2.925
64  , LOCK/RELEASE         , medium  , loops 126    , category D , CPU 2.508   , Radband rating 3.4888

Average Radband rating = 9.242 over 156 tests

Results written to record 'results.Centos10.28.32.22' in file 'RESULTS'
jbase-centos-~/src/Tools/Benchmarks:
jbase-centos-~/src/Tools/Benchmarks: ls RESULTS
results.Centos10.28.32.22  results.jbase5.5
results.jbase3.4           results.jbase5.5CI
```

As you can see, a new entry has been written to the RESULTS directory called results.Centos10.28.32.22 which describes these results. You can display these results again with SINGLEDIFF, or compare with other benchmarks using SINGLEDIFF.

Below is an example of running SINGLEDIFF to print the results of just one benchmark result. Enter a &lt;RETURN&gt; when asked for the second test and it will use the reference values where all the Radband values are 1 -- in other words, it just displays the results from the test.

```
jbase-centos-~/src/Tools/Benchmarks: SINGLEDIFF
1     jbase5.5CI
2     Centos10.28.32.22
3     jbase5.5
4     jbase3.4
Enter the identifier for the first test  (?) : 2
Enter the identifier for the second test (?) :

jBASE benchmark comparison report at 13:14:57  29 APR 2016

                                        Reference test         Comparison test
Test identifier                         Centos10.28.32.22
Original date of test                   03 DEC 1998 12:54:38   29 APR 2016 13:04:42
Hardware                                Intel P400             Intel
Operating system                        Red Hat Linux 5.2      Centos
Software                                jBASE 3.1.8            jBASE 5.5
Notes                                   Reference test         This is just a test

The following table shows the relative performance of the two mentioned
benchmark runs. For each test there can be between 1 and 3 columns of
values, the first being the standard test, the second column (optional)
being an extended version and the third column (optional) being a severe
test. The value is a ratio between the execution time of the first benchmark
result (Centos10.28.32.22) and the second benchmark result (). Therefore if a
value of LESS than 1 is shown, it shows 'Centos10.28.32.22' is the better performer,
whereas a value of GREATER than 1 shows '' is the better performer.

For sub-category Assignment
---------------------------
21 Assign = 0                           49.2332
22 Assign = 1                           51.5617
23 Assign = 2                           51.5491
24 Assign small strings                 6.3473    7.5225    2.4886
25 Assign large strings                 11.3386   15.3397   5.2223
57 Variable assignment                  6.7183    12.8582   44.6124
58 1 dimensioned array extraction       9.5681    5.3504
59 2 dimensioned array extraction       9.3922    7.2197

Sub-category averages for Assignment    24.4636   9.6581    17.4411
Sub-category weighted for Assignment    16.5711   8.9465    8.3386

For sub-category Branch
-----------------------
01 FOR/NEXT loop                        0.8302    0.9743    0.7005
02 LOOP UNTIL DO REPEAT                 20.0465   19.6718   6.4219
03 CALL no parameters                   2.3002
04 CALL @ no parameters                 4.3824
05 CALL with one parameter              2.4476    2.4150    2.7672
06 GOTO                                 1.0737
07 GOSUB                                24.3479   17.3795
08 IF/THEN                              1.1273    2.3316    2.3390

Sub-category averages for Branch        7.0695    8.5544    3.0572
Sub-category weighted for Branch        3.2386    4.5147    2.3229

For sub-category Database
-------------------------
11 OPEN file                            16.0331   18.9848
12 READNEXT                             5.8091    4.1145    4.8043
13 READ record                          1.0025    1.2578    2.2033
14 READ record with lock                1.3073    1.4268    2.2400
15 READV record single field            1.7097    1.8394    2.7643
16 MAT READ record                      1.6674    2.7663    4.2651
17 MAT READ record with lock            1.7274    2.5897    3.8655
18 WRITE record                         5.5698    14.3175   17.0741
19 WRITEV record single field           3.4177    11.3639   9.1644
20 MAT WRITE                            5.0274    8.2062    14.0674
64 LOCK/RELEASE                         2.9251    3.4888

Sub-category averages for Database      4.1997    6.3960    6.7165
Sub-category weighted for Database      2.9860    4.2700    5.1107

For sub-category Maths
----------------------
40 INT function                         4.6520
41 LEN function                         6.3610    9.0258    9.1606
42 NOT function                         15.3812
43 NUM function                         15.3431   8.0343
44 MOD function                         2.0864    2.7746
47 ADD                                  7.0541    2.5510    43.4129
48 ADD strings                          25.7021   19.4031
49 SUBTRACT                             7.5873    5.2592    26.2959
50 MULTIPLY                             11.7341   0.3433    13.4227
51 DIVIDE                               9.3445    1.1640    16.9362

Sub-category averages for Maths         10.5246   6.0694    21.8457
Sub-category weighted for Maths         8.5940    3.4681    18.8459

For sub-category String
-----------------------
09 LOCATE                               6.9447    9.2221    9.5962
10 MAT assignment                       2.0557    2.6437    6.1539
27 ABS function                         12.4219   4.5631    4.5668
28 ASCII function                       2.1026    2.2429    2.6806
29 CHAR function                        5.2788    11.1971
30 EQUATE to CHAR                       5.3882    5.3389
31 COUNT function                       4.4831    9.1205    8.3597
33 EBCDIC function                      2.6488    3.3495    3.6813
34 Attribute extraction                 5.6241    5.8258    6.9527
35 Attribute insertion                  5.8246    8.1989    8.7619
36 FIELD function                       6.4066    8.8586    9.2812
37 OCONV 100 MR2                        0.7524    0.9117    1.1846
38 ICONV 100 MR2                        0.5925
39 INDEX function                       5.2097    6.2185    6.2053
45 STR function                         11.1757   11.0000   23.0391
52 STRING[x,y] extraction               6.3881    5.3775    50.6244
53 RELATIONAL comparisons               37.2738   3.3736    10.1574
54 MATCHES function                     1.8986    1.3818
55 Simple CAT operator                  6.1463    7.2708    49.1838
56 Complex CAT operator                 5.6602    6.1491    19.1236
60 FORMAT                               0.6081    0.6282
61 INSERT function                      9.4399    9.9286    17.4390
62 DELETE function                      6.5134    10.5918   12.6129

Sub-category averages for String        6.5582    6.0633    13.8669
Sub-category weighted for String        4.3155    4.7811    9.2084

For sub-category Other
----------------------
26 Cursor function @()                  12.3888   11.8799
32 DATE function                        25.6169
46 SYSTEM(9) function                   5.1282    3.1149
63 PRINT null                           1.9037

Sub-category averages for Other         11.2594   7.4974
Sub-category weighted for Other         7.4607    6.0831

================
Overall averages                        9.3685    6.7615    12.4060
=============
Weighted logs                           5.3284    4.7376    7.5926
```

We are now going to run SINGLEDIFF to compare two benchmarks, one with Case Independence, the other with default jBASE Emulation. Everything else is the same. This is a useful example of checking to ensure Case Independence doesn't add unexpected overhead. In fact we can see that OPEN and CAT are having problems, and these were logged as issues to be looked in to.

```
jbase-centos-~/src/Tools/Benchmarks: SINGLEDIFF
1     jbase5.5CI
2     Centos10.28.32.22
3     jbase5.5
4     jbase3.4
Enter the identifier for the first test  (?) : 1
Enter the identifier for the second test (?) : 3

jBASE benchmark comparison report at 13:19:11  29 APR 2016

                                        Reference test         Comparison test
Test identifier                         jbase5.5CI             jbase5.5
Original date of test                   25 APR 2016 18:19:16   25 APR 2016 17:32:58
Hardware                                AMD                    AMD
Operating system                        Suse 13                Suse 13
Software                                jBASE 5.5              jBASE 5.5
Notes                                   With Case Independenc  Latest release with j

The following table shows the relative performance of the two mentioned
benchmark runs. For each test there can be between 1 and 3 columns of
values, the first being the standard test, the second column (optional)
being an extended version and the third column (optional) being a severe
test. The value is a ratio between the execution time of the first benchmark
result (jbase5.5CI) and the second benchmark result (jbase5.5). Therefore if a
value of LESS than 1 is shown, it shows 'jbase5.5CI' is the better performer,
whereas a value of GREATER than 1 shows 'jbase5.5' is the better performer.

For sub-category Assignment
---------------------------
21 Assign = 0                           0.9572
22 Assign = 1                           0.9531
23 Assign = 2                           0.9526
24 Assign small strings                 0.9604    0.6314    0.9116
25 Assign large strings                 0.9734    1.2760    1.0334
57 Variable assignment                  0.7896    0.9530    1.0014
58 1 dimensioned array extraction       0.9892    0.9977
59 2 dimensioned array extraction       0.9977    1.0023

Sub-category averages for Assignment    0.9467    0.9721    0.9821
Sub-category weighted for Assignment    0.9445    0.9485    0.9808

For sub-category Branch
-----------------------
01 FOR/NEXT loop                        1.0039    0.9899    0.9897
02 LOOP UNTIL DO REPEAT                 0.9704    1.0086    0.9854
03 CALL no parameters                   1.1201
04 CALL @ no parameters                 1.0043
05 CALL with one parameter              1.0671    1.0526    1.0431
06 GOTO                                 0.9808
07 GOSUB                                0.9951    0.9907
08 IF/THEN                              0.9633    1.0135    0.9996

Sub-category averages for Branch        1.0131    1.0111    1.0045
Sub-category weighted for Branch        1.0119    1.0108    1.0042

For sub-category Database
-------------------------
11 OPEN file                            33.0169   32.9027
12 READNEXT                             1.1090    1.0520    1.0462
13 READ record                          1.0502    1.0343    1.0426
14 READ record with lock                1.0224    1.0468    1.0401
15 READV record single field            1.0254    1.0132    1.0329
16 MAT READ record                      1.0067    1.0283    1.0012
17 MAT READ record with lock            1.0373    1.0611    1.0315
18 WRITE record                         1.0422    1.0023    1.0170
19 WRITEV record single field           0.9713    0.9524    1.0052
20 MAT WRITE                            0.9511    0.9075    0.9350
64 LOCK/RELEASE                         1.2347    1.1396

Sub-category averages for Database      3.9516    3.9218    1.0169
Sub-category weighted for Database      1.4272    1.4013    1.0163

For sub-category Maths
----------------------
40 INT function                         0.9449
41 LEN function                         0.9324    0.9268    0.9250

42 NOT function                         0.9315
43 NUM function                         0.9314    0.9227
44 MOD function                         0.9350    0.9465
47 ADD                                  0.9994    1.0046    0.9787
48 ADD strings                          1.0010    0.9913
49 SUBTRACT                             0.9895    1.0474    0.9760
50 MULTIPLY                             0.9913    0.9897    0.9806
51 DIVIDE                               1.0087    0.9706    0.9726

Sub-category averages for Maths         0.9665    0.9750    0.9666
Sub-category weighted for Maths         0.9660    0.9742    0.9663

For sub-category String
-----------------------
09 LOCATE                               0.9151    1.1589    1.1418
10 MAT assignment                       0.9633    0.9393    0.9718
27 ABS function                         1.0138    1.0399    1.0600
28 ASCII function                       0.9978    1.0006    1.0517
29 CHAR function                        1.0066    1.0103
30 EQUATE to CHAR                       0.9837    0.9740
31 COUNT function                       0.8812    0.9409    0.9550
33 EBCDIC function                      0.9429    0.9980    1.0297
34 Attribute extraction                 5.9617    3.2023    1.0784
35 Attribute insertion                  0.9395    0.9404    0.9350
36 FIELD function                       0.9587    0.9431    0.9365
37 OCONV 100 MR2                        0.9244    0.9247    1.1113
38 ICONV 100 MR2                        0.9198
39 INDEX function                       1.0957    0.9217    0.9211
45 STR function                         0.9447    0.9493    0.9286
52 STRING[x,y] extraction               2.0710    1.0370    0.2063
53 RELATIONAL comparisons               1.0059    0.9852    0.9797
54 MATCHES function                     1.0006    1.0064
55 Simple CAT operator                  16.5285   8.5831    10.4505
56 Complex CAT operator                 1.0080    1.4658    1.6285
60 FORMAT                               1.1129    1.0078
61 INSERT function                      1.1174    1.1426    1.0234
62 DELETE function                      0.9501    0.9702    0.9931

Sub-category averages for String        1.9236    1.4610    1.5224
Sub-category weighted for String        1.2405    1.1750    1.0773

For sub-category Other
----------------------
26 Cursor function @()                  0.9278    0.9644
32 DATE function                        0.9505
46 SYSTEM(9) function                   0.9271    0.9746
63 PRINT null                           0.9958

Sub-category averages for Other         0.9503    0.9695
Sub-category weighted for Other         0.9499    0.9695

================
Overall averages                        1.8259    1.7912    1.2398
=============
Weighted logs                           1.1324    1.1364    1.0332
```

Run the CUBS benchmarks

Decide how many ports you want to run, and execute CREATE.FILES to ensure enough work files are pre-created. You can always re-run CREATE.FILES at a later date if you want to run a larger test.

```
jbase-centos5-~/src/Tools/Benchmarks: CREATE.FILES
Platform is jBASE.
ENTER TOTAL NUMBER OF PORTS:?10
THERE ARE 8 PORT(S) THAT DO NOT HAVE DATA!
DO YOU WANT TO CREATE DATA FOR THESE PORT(S)? (CR=Y/N): ?Y
NOW CREATING DATA FOR CF2
[ 417 ] File /home/fb/src/Tools/Benchmarks/data/CF2]D created , type = J4
[ 417 ] File /home/fb/src/Tools/Benchmarks/data/CF2 created , type = J4

[ Lines of output removed for brevity and clarity ]
```

Now run RUN-SIMULATOR as shown below.

Important: The first time you run this, the first background job will time out and fail. I haven't debugged this yet. So let this first test run and ignore the results (so only run the test for a few seconds).**The timeout will take 75 seconds -- please be patient!**

```
jbase-centos5-~/src/Tools/Benchmarks: RUN-SIMULATOR
Platform is jBASE running under Unix.
THIS WILL START THE SIMULATOR ON THE NUMBER OF PORTS WHICH YOU DESIGNATE.
HOW MANY PORTS DO YOU WISH TO HAVE RUN? (CR=15,/,P,S,?): 10
ENTER TIME TO RUN THE TESTS FOR? (CR=60) :
DO YOU WISH TO TEST FIRST 1 PORT, THEN 2 PORTS, AND SO
ON UP TO 10 PORTS? (Y,CR=N,/):
OK TO CONTINUE? (CR=Y,N):
NOW STARTING PORT 1.STMT=jpq -Jb /home/fb/src/Tools/Benchmarks/data/MD/TESTER

[ Lines of output removed for brevity and clarity]

NOW STARTING PORT 10.STMT=jpq -Jb /home/fb/src/Tools/Benchmarks/data/MD/TESTER
SIMULATOR NOW RUNNING ON 10 PORT(S) FOR 60 SECONDS

ELAPSED TIME= 00:00:60

13:31:32  29 APR 2016     REPORT ON SIMULATOR USAGE

PORT   START-TM   END-TIME   SECONDS   #TRANS   TRANS/SEC
   1   13:30:31   13:31:31        60    61200   1020.0000
   2   13:30:31   13:31:31        60    50400    840.0000
   3   13:30:31   13:31:31        60    34650    577.5000
   4   13:30:31   13:31:31        60    41400    690.0000
   5   13:30:31   13:31:31        60    31950    532.5000
   6   13:30:31   13:31:31        60    32400    540.0000
   7   13:30:31   13:31:31        60    40950    682.5000
   8   13:30:31   13:31:31        60    53550    892.5000
   9   13:30:31   13:31:31        60    36900    615.0000
  10   13:30:31   13:31:31        60    61650   1027.5000

****************************************************************
*                                                              *
*           10  PORTS PROCESSED                                *
*        60.00  AVERAGE NUMBER OF SECONDS TO RUN PER PORT      *
*       741.75  AVG TRANSACTIONS/SEC/PORT                      *
*       445050  TOTAL NUMBER OF TRANSACTIONS PROCESSED         *
*                                                              *
*      7417.50  TOTAL NUMBER OF TRANSACTIONS PROCESSED/SECOND  *
*             (THIS IS THE VALUE THAT IS USED FOR COMPARISONS) *
*                                                              *
****************************************************************

DO YOU WISH TO SEND A COPY OF THIS REPORT TO A HOLDFILE? (CR=Y/N): N

DO YOU WISH TO RUN ANOTHER TEST? (CR=Y/N): N
```

## Results so far

As mentioned earlier, the results are highly sensitive and company confidential. Do not give them out unless expressly authorized.

So, finger wagging over, here are the results.

The results for the SINGLE instruction benchmark are in the RESULTS directory. As shown before, you can use SINGLEDIFF to display a comparison with the reference results (meaning you effectively just display the results of a benchmark run), or use SINGLEDIFF to compare to sets of results.

[Back to Miscellaneous](./../README.md)
