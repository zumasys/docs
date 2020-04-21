# Customizing the jBASE Error Message File

<PageHeader />

When jBASE is installed, the file "jbcinit.err" is placed in the install directory ($JBCRLEASEDIR). The installation process runs the **jmakeerr** program which creates the file "jbcmessages", also in the install directory. However, you can make a copy of "jbcinit.err" and run the **jmakeerr** command to generate error messages that your users are used to rather than changing the programs that rely on them.

It is recommended that you copy this file to your own global directory, then keep in it only those error messages that you create anew or modify. The file may be configured so that the desired effect is achieved for any particular error message or and new ones that are not part of the standard jBASE set are created. Complete documentation about the various tokens can be found in the "jbcinit.err" file. By default, the jbcmessages file exists in JBCRELEASEDIR( UNIX: echo $JBCRELEASEDIR, Windows: echo %JBCRELEASEDIR%).

You can produce a test version of the error message file and have your development user account point to it by setting the variable [JBCERRFILE](../../environment-variables/jbcerrfile/README.md)=*pathtoyourmessagefile*. This can also be useful if you require multiple language versions of error messages for each account on the system.

All jBASE run-time messages exist in the jbcmessages file as items. Each item contains the text of the message as well as a number of tokens which define what action is taken when the error message occurs. For example, the token ^BELL^ will cause the bell to sound on the users terminal. The token ^DEBUGQUIT^ will cause the debugger to be invoked and allow only the (q)uit and (a)bort debugger commands. The token ^DEBUGCONTINUE^ will cause the debugger to be invoked but allows the user to enter the (c)ontinue debugger command.  

**Remember though, that you do not modify the "jbcmessages" file but rather you generate this file by running the "jmakeerr" command against your own version of the "jbcinit.err" file.**

[Back to Coding Corner](./../README.md)

<PageFooter />
