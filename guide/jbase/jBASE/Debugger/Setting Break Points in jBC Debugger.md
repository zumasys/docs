# Setting Break Points in jBC Debugger

**Created At:** 12/13/2017 10:14:31 PM  
**Updated At:** 4/19/2018 9:47:06 PM  


When setting a break point, the debugger appends a \n (line feed) to the variable contents prior to testing for the break.

For example:

```
0001     PROGRAM break_point_test
0002     x = 0
0003     DEBUG; * Set a break point: b x = 5\n
0004     LOOP UNTIL x = 10
0005         x++
0006         CRT x
0007     REPEAT

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





Back to [jBC Debugger](291163-introduction-to-the-jbc-debugger)
