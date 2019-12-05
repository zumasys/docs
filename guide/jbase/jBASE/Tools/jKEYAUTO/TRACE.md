# TRACE

Description This allows you to trace the lines executed by jkeyauto. Can be useful when debugging very large scripts. You can also turn statement tracing on using the -t option to jkeyauto. trace ON | OFF  An example of use may be as:  trace on counter=1 again1: PIPEREAD FOR 100 UNTIL "greg" counter = counter+1 if counter LT 10 THEN goto again1 trac  

**Created At:** 8/30/2018 1:13:20 PM  
**Updated At:** 5/16/2019 6:28:44 PM  

**Tags:**
<badge text='program profiling' vertical='middle' />
