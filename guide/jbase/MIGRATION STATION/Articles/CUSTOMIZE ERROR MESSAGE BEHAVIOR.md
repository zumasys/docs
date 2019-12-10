# CUSTOMIZE ERROR MESSAGE BEHAVIOR

**Created At:** 10/2/2017 12:08:55 PM  
**Updated At:** 4/16/2019 3:42:05 PM  

**Tags:**
<badge text='error message' vertical='middle' />
<badge text='errmsgconfig' vertical='middle' />
<badge text='message' vertical='middle' />
<badge text='error' vertical='middle' />
<badge text='customize error message' vertical='middle' />

jBASE allows you to customize the behavior of error messages to have similar behavior to other multivalue database systems.



To change the behavior of the PERFORM\_NULL error:



1. cd $JBCRELEASEDIR




1. Edit the '$JBCRELEASEDIR/jbc.init.err file', locate the line that starts with 'PERFORM\_NULL' and replace the string 'EXIT7' with 'NOPRINT'




1. Rebuild the 'jbcmessages' file:




```
jmakeerr . jbc.init.err (O
TO: (jbcmessages
```



To allow this change to persist after upgrades, copy 'jbc.init.err' (this file is called 'jbcinit.err' on Windows) and the 'jbcmessages' file to another directory outside of JBCRELEASEDIR and set the JBCERRFILE environment variable to the new location of 'jbcmessages'. For example, if you place those files in a directory called '/home/globals/' then…



```
            export JBCERRFILE=/home/globals/jbcmessages
```



Place this setting in some global profile where all users will pick it up.



Any future changes to error messages should be done to 'jbc.init.err' in the new location (refer to the documentation in 'jbc.init.err') and then run 'jmakeerr' as above.
