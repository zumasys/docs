# JCL IF  E

**Created At:** 5/28/2018 10:59:53 AM  
**Updated At:** 6/11/2018 4:26:42 AM  
**Original Doc:** [318697-jcl-if-e](https://docs.jbase.com/45792-jcl/318697-jcl-if-e)  

**Tags:**
<badge text='jcl' vertical='middle' />

## Description 

This command conditionally executes a command depending on the presence or absence of an error message after running a shell command. It takes the general form:

```
IF {#} E command
```

or

```
IF E operator msg-key command
```

where:

- # tests for the absence of an error message.
- operator performs a value comparison. Operators are:
=   Equal to
#   Not equal to.
- msg-key is the key of a system message from the error file.
- command is a valid jCL  command.




## Note: 


> Any system messages generated as a result of running a shell command (see the P command) will cause the system message number to be placed in the SIB, in multivalue format. The value tested is the first multivalue (the STOP  code) of the error text returned from the last command. The IF E command is most often used to test for an error condition but can be used to detect any resulting system message. IF # E command tests for the absence of a system message.


Some jCL  commands, particularly those that operate on the PIB, will destroy the contents of the secondary input buffer. You should therefore use the IF E command as soon as control returns from the shell command.



###### EXAMPLE

```
021 HCOUNT SALES WITH VALUE > "1000"
022 PH
023 IF E = 401 G 100
```

If the SALES file does not contain any records, which match the criteria, the system will generate the message "No records counted". Using the PH command will stop the message being output on the terminal but the message key 401 will still be placed in the SIB where it can be detected by line 23.



Back to [JCL Commands](jcl-commands)

### 

