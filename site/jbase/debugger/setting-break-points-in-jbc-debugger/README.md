# Setting Break Points in jBC Debugger

<PageHeader />

When setting a break point, the debugger appends a \n (line feed) to the variable contents prior to testing for the break.

For example:

```
PROGRAM break_point_test
x = 0
DEBUG; * Set a break point: b x = 5\n
LOOP UNTIL x = 10
    x++
    CRT x
REPEAT

jsh home ~ -->break_point_test
jBASE debugger->b x = 5\n
b0: x = 5\n
jBASE debugger->g
1
2
3
4
jBASE debugger->/x
x                         : 5
jBASE debugger->d b
b 0: x = 5\n - delete (Y/N) Y
b 0: x = 5\n - deleted
jBASE debugger->g
5
6
7
8
9
10
jsh home ~ -->
```

Back to [jBC Debugger](./../introduction-to-the-jbc-debugger)

<PageFooter />
