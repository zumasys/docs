# Setting Break Points in jBC Debugger

When setting a break point, the debugger appends a \n (line feed) to the variable contents prior to testing for the break. For example: 0001     PROGRAM break_point_test 0002     x = 0 0003     DEBUG; * Set a break point: b x = 5\n 0004     LOOP UNTIL x = 10 0005         x++ 0006         CRT x 0007     REPEAT jsh home ~ --&gt;break_point_test jBASE   

**Created At:** 12/13/2017 10:14:31 PM  
**Updated At:** 4/19/2018 9:47:06 PM  

