# CUSTOMIZE ERROR MESSAGE BEHAVIOR

jBASE allows you to customize the behavior of error messages to have similar behavior to other multivalue database systems.   To change the behavior of the PERFORM_NULL error:   cd $JBCRELEASEDIR   Edit the '$JBCRELEASEDIR/jbc.init.err file', locate the line that starts with 'PERFORM_NULL' and replace the string 'EXIT7' with 'NOPRINT'   Rebuild the   

**Created At:** 10/2/2017 12:08:55 PM  
**Updated At:** 4/16/2019 3:42:05 PM  

**Tags:**
<badge text='error message' vertical='middle' />
<badge text='errmsgconfig' vertical='middle' />
<badge text='message' vertical='middle' />
<badge text='error' vertical='middle' />
<badge text='customize error message' vertical='middle' />
