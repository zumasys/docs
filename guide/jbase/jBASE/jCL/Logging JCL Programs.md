# Logging JCL Programs 

**Created At:** 5/23/2018 2:56:03 PM  
**Updated At:** 6/1/2018 5:32:49 PM  

**Tags:**
<badge text='jcl' vertical='middle' />

## Description 

It is possible to create jCL  programs, which will be run automatically, each time a user logs in or logs in to a specific account. Simply create a jCL program with the same name as the account or user, and put "jshell -" on the last line of the login script (usually ".profile").

This feature can be used for example, to configure the jSHELL environment, implement a security system, or display an initial menu.

For example, let's assume that all users who login to an account called SALES must be offered an initial menu, which is a jBC  program, called MENU held in a file called PROGS. You would create a jCL  program in the MD of the SALES account and call it SALES like this:

```
SALES
001 PQN
002 HRUN PROGS MENU
003 P
```

Each time a user logs in to the SALES account, the system will search for a program called SALES in the MD of the account. The jCL  program will then run the MENU program from the PROGS file.



Back to [JCL](318022-jcl)
