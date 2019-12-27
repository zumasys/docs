# How to Write a QA Test

**Created At:** 10/30/2017 10:04:01 AM  
**Updated At:** 10/30/2017 10:48:20 AM  
**Original Doc:** [how-to-write-a-qa-test](https://docs.jbase.com/40575-jbase-development/how-to-write-a-qa-test)  
**Original ID:** 283502  
**Internal:** Yes  


## 
1. Abstract

Each test  should be self-contained. If possible everything to do with the test  lives in the test; create-files and data, set up the environment, etc.  If the test fails, leave this data there so that someone can look at the cause of the failure.

The test should clean up any old files and data the next time it runs so that it is not operating on old data.

- **Follow the [Coding Guidelines](./../jbc-coding-guidelines)**
- All QA tests (we will subsequently just refer to them as 'tests') are called as subroutines from the main QA driver.
- The subroutine arguments (explained below) must be:


```
(result, parameters, feedback)
```

- Use UPPERCASE program names and the name of the subroutine must end in **.TST**, e.g. JQL\_BREAK-ON\_VALUE\_IN\_HEADING.TST
- Prefix  the test name with the module that they are testing, if applicable  (some tests, like conversion testing apply to multple places) e.g.  RUNTIME (if affecting runtime behavior, (jQL tests with JQL\_, sql with  SQL\_ , JBC\_, etc )
- If the subroutine needs to **EXECUTE** or **CALL** another program then that program can end in **.b**.
- Give  the test a meaningful name. What is it testing? Name it by what it  does, not how it does it. Don't put  the ticket number or patch number  in the name, that can be a constant or comment in the program.
- Each  program should be testing 1, and only 1, aspect. There may be several  permuations that can be included, for example, testing conversion codes  like MD or MR, or testing **true** and **false** conditions of an emulation option or different values of an environment variable.
- Return  the environment back to the way it was because other tests that follow  may assume certain original environment conditions and there is no way  to know the order of how tests run. For example, if you have to set  JBCEMULATE to test a specific emulation then do this:


```
save_jbcemulate = GETENV("JBCEMULATE") ;* save it
...do your test...
ok = PUTENV("JBCEMULATE=" : save_jbcemulate) ;* restore the original setting
```

- **Fail on first test.** If the test has multiple failure points then terminate the test at the first failure.


*Please submit all new QA tests to Daniel Klein for review.*



## 2. Important Variables

- feedback  - A dynamic array of the description of the error. The first line is a  summary of the what it is testing and how it failed. Include the most  important information on this line. The rest of the **feedback** should describe any other details, like the actual and expected  results, however these can be included on the first line if they are  brief.
- result  - This is a positive integer that determines whether or not the test  has passed. Any value other than zero indicates a failure. Each place  were a test can fail should assign a unique number so that someone  looking at the code will know where to look.
- debug - This is always set in the main program to **parameters&lt;1&gt;**. Its value is either **0** or **1**. The main purpose of this flag is to display details of the test whilst the test is running.


```
IF debug THEN
    CRT 'Show additional diagnostic info'
END
```

Display as many debug details as you can at every stage of the test.

Rule of thumb: Wherever there is a comment could be replaced with a **debug** display line.
 [I'm guilty of not doing this myself and, for the most part, the examples I'm providing are sparse in this respect.]



## 3. Setup

The  following INCLUDE contains many platform specific EQUates. If you need  to use any of these EQUates then you will need to place this line of  code in your program:

```
INCLUDE QA/QAInclude.h
```

[QAInclude.h](http://zwiki.zumasys.com/QATest?action=AttachFile&do=view&target=QAInclude.h)

So, if your tests reside in '/home/test/' then:

```
mkdir /home/QA
```

and place the **QAInclude.h** file in that directory.

Alternatively (this is actually my preference), use the **#ifdef** compiler directive, e.g.

```
0024 #ifdef WINDOWS
0025     is_windows = @TRUE
0026     mkdir_cmd = "cmd.exe /e:on /c mkdir"
0027     dir_delim_char = "\"
0028     dir_sep_char = ";"
0029     copy_cmd = "copy"
0030 #else
0031     is_windows = @FALSE
0032     mkdir_cmd = "mkdir -p -m 775"
0033     dir_delim_char = "/"
0034     dir_sep_char = ":"
0035     copy_cmd = "cp"
0036 #endif
```

**$QAHOME** is where all test files and any other resources get created. If the  test is going to create files or write out anything that the test needs  then it should do so in $QAHOME, so be sure that this environment  variable is set/export'd on your local system.

Your program code will then do something like this:

```
qahome = GETENV('QAHOME')
ok = CHDIR(qahome)
EXECUTE "CREATE-FILE testfile 3 11" CAPTURING quiet
```

To run the test on your local system you will need a driver program:

```
0001     PROGRAM testqa
0002 * Syntax: testqa testname {debug}
0003 * If 'debug' is specified  then this sets the 'debug' flag in the program
0004     testsub = SYSTEM(1001)<2>
0005     IF SYSTEM(1001)<3>'MCL' = 'debug' THEN debug = 1 ELSE
0006         debug = OCONV(SYSTEM(1001)<3>, 'MCN') + 0
0007     END
0008     result = 0
0009     feedback = ''
0010     CALL @testsub(result, debug, feedback)
0011     IF result THEN
0012         IF debug ELSE CRT 'Failed!'
0013     END ELSE
0014         CRT 'Passed!'
0015     END
```



## 4. Examples

This following test-sets are a good examples of many of the concepts discussed above.

[JBASE\_DATE\_FORMAT.TST](http://zwiki.zumasys.com/QATest?action=AttachFile&do=view&target=JBASE_DATE_FORMAT.TST)[DO\_JBASE\_DATE\_FORMAT.b](http://zwiki.zumasys.com/QATest?action=AttachFile&do=view&target=DO_JBASE_DATE_FORMAT.b)

[MASK\_MR\_MD.TST](http://zwiki.zumasys.com/QATest?action=AttachFile&do=view&target=MASK_MR_MD.TST)[DO\_MASK\_MR\_MD.b](http://zwiki.zumasys.com/QATest?action=AttachFile&do=view&target=DO_MASK_MR_MD.b)

[JBC\_READNEXT\_RETAIN\_LAST\_KEY.TST](http://zwiki.zumasys.com/QATest?action=AttachFile&do=view&target=JBC_READNEXT_RETAIN_LAST_KEY.TST)[DO\_JBC\_READNEXT\_RETAIN\_LAST\_KEY.b](http://zwiki.zumasys.com/QATest?action=AttachFile&do=view&target=DO_JBC_READNEXT_RETAIN_LAST_KEY.b)[create\_emulation.b](http://zwiki.zumasys.com/QATest?action=AttachFile&do=view&target=create_emulation.b)
