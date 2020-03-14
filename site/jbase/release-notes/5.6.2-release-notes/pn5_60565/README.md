# PN5_60565

**Created At:** 6/13/2017 1:43:35 PM  
**Updated At:** 11/25/2017 4:45:54 PM  
**Original Doc:** [pn5_60565](https://docs.jbase.com/36526-5-6-2-release-notes/pn5_60565)  
**Original ID:** 258844  
**Internal:** No  

## Description

jAgent: DATA INPUT and EXECUTE

### Previous Release Behavior

Previously the following would fail…

```
test_prog.b
    CRT "Program start"
    CRT "SYSTEM(10) [":SYSTEM(10):"]"
    CRT "SYSTEM(40) [":SYSTEM(40):"]"
    CRT "Setting DATA"
    DATA "1" : @AM : "2" : @AM: "3"
    CRT "System now has..."
    CRT "SYSTEM(10) [":SYSTEM(10):"]"
    CRT "SYSTEM(40) [":SYSTEM(40):"]"
    CRT "running input test"
    EXECUTE "TEST_INPUT"

test_input.b
    IF SYSTEM(40) OR SYSTEM(10) THEN
        CRT "SYSTEM(10) [":SYSTEM(10):"]"
        CRT "SYSTEM(40) [":SYSTEM(40):"]"
        INPUT VALUE1
        INPUT VALUE2
        INPUT VALUE3
        CRT VALUE1, VALUE2, VALUE3
        CRT "SYSTEM(10) [":SYSTEM(10):"]"
        CRT "SYSTEM(40) [":SYSTEM(40):"]"
        END
```

### Current Release Behavior

The example above should produce the following results when run via jbase\_agent

```
hello
com.jbase.jremote.JExecuteResults
setting : <1>0<2>0
capture : <1>Program start<2>SYSTEM(10) [0]<3>SYSTEM(40) [test_prog]<4>Setting DATA<5>System now has...<6>SYSTEM(10) [1]<7>SYSTEM(40
) [test_prog]<8>running input test<9>SYSTEM(10) [1]<10>SYSTEM(40) [TEST_INPUT]<11>1     2       3<12>SYSTEM(10) [0]<13>SYSTEM(40) [TEST_INPUT]
        :
        : Program start
        : SYSTEM(10) [0]
        : SYSTEM(40) [test_prog]
        : Setting DATA
        : System now has...
        : SYSTEM(10) [1]
        : SYSTEM(40) [test_prog]
        : running input test
        : SYSTEM(10) [1]
        : SYSTEM(40) [TEST_INPUT]
        : 1     2       3
        : SYSTEM(10) [0]
```

Back to [5.6.2 release Notes](./../README.md)
