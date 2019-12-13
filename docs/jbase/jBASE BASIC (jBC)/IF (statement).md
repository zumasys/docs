# IF (statement)

**Created At:** 9/7/2017 9:18:31 AM  
**Updated At:** 4/19/2019 8:29:32 AM  

**Tags:**
<badge text='if/else' vertical='middle' />
<badge text='if/then/else' vertical='middle' />
<badge text='if/then' vertical='middle' />
<badge text='if not' vertical='middle' />
<badge text='if else then' vertical='middle' />
<badge text='if then else' vertical='middle' />
<badge text='if then' vertical='middle' />
<badge text='if else' vertical='middle' />
<badge text='program control' vertical='middle' />
<badge text='program execution ' vertical='middle' />

# Description

Allows for the conditional execution of some statements. It takes the general form:

```
IF expression THEN|ELSE statement
```

Where:

- The**expression** evaluates to a value of Boolean **TRUE**or **FALSE**.
- If the **expression**is **TRUE**, the statements defined by the **THEN**clause will execute (if present).
- If the **expression**is **FALSE**, the statements defined by the **ELSE**clause, if any will execute.
- The **THEN**and **ELSE**clauses may take two different forms being single and multiple line statements.


The simplest form of either clause is of the form:

```
IF A THEN CRT A
```

or

```
IF A ELSE CRT A
```

However, the **END**keyword may be used to expand the clauses to enclose multiple lines of code as so:

```
     IF A THEN
         A = A*6
         CRT A
     END ELSE
         A = 76
         CRT A
     END
```

It is possible to combine the single and multi-line versions of either clause to make complex combinations of the command. For reasons of readability it is suggested that where both clauses are present for an **IF**statement that the same form of each clause is coded.

IF statements can be nested within either clause to any number of levels.

An example of use is as:

```
0001     CRT "Are you sure (Y/N) ":
0002     INPUT Answer,1
0003     IF OCONV (Answer, "MCU")= "Y" THEN
0004     *Call delete subroutine here
0005         CRT "Files have been deleted"
0006     END ELSE
0007         CRT "File delete was ignored"
0008     END
```



Go back to [jBASE BASIC](263498-jbase-basic).
