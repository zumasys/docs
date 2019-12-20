# INTRODUCTION TO TRIGGERS

**Created At:** 7/12/2017 12:37:15 PM  
**Updated At:** 9/5/2018 10:18:34 PM  
**Original Doc:** [263119-introduction-to-triggers](https://docs.jbase.com/42462-distributed-files/263119-introduction-to-triggers)  


Database triggers provide users with the capability to monitor updates to the database to file level. The three database updates for which triggers are provided are Write, Delete and Clear. Two database trigger events, a pre update event and a post update event are provided for each update type. The pre update event is triggered before the update to the database is executed and the post update event is triggered after the database update. The trigger events manifest themselves by calling a user supplied subroutine (see trigger API), which can be independently configured for each file. Each user subroutine must make provision for all the event types which could be triggered for that file. The following jBASE database trigger utilities enable users to configure and display database triggers for any file within the database.

- CREATE-TRIGGER - create trigger events for a file
- DELETE-TRIGGER - delete trigger events for a file
- LIST-TRIGGER - list triggers events on a file


Once the trigger is cataloged, only new sessions will know about it.

In order to test the trigger, just write a null id to whatever file you have assigned the trigger to, e.g.

```
PROGRAM write_null_id
OPEN "CUSTOMER" to customer ELSE STOP
id = ""
WRITE TIMEDATE() ON customer, id
```

Now, run the program which will fire the trigger and there will be a record in the TRACKFILE file with all of the information you need to determine who, what, where, and how that null item got there.

To attach the trigger to a file called CUSTOMER:

```
create-trigger CUSTOMER POSTWRITE detect_null_id_trigger
```



detect\_null\_id\_trigger

```
SUBROUTINE detect_null_id_trigger(filevar, event, prerc, flags, recordkey, record, userrc)
*** Initialization    
    INCLUDE JBC.h    
    COMMON /delete_null_common/ openflag, trackfile    
    EQU space TO CHAR(32)    
    EQU underscore TO CHAR(95)

*** Open the tracking file, once per session, to named common.    
    IF UNASSIGNED(openflag) OR NOT(openflag) THEN        
        OPEN "TRACKFILE" TO trackfile THEN            
            openflag = @TRUE        
        END ELSE            
            ABORT 201, 'TRACKFILE'        
        END    
    END

*** Get the program stack and build the tracking file    

    IF event = TRIGGER_TYPE_POSTWRITE THEN        
        IF recordkey = '' THEN            
            programstack = CHANGE(OCONV('','U0016'), space, @AM)
            process = SYSTEM(1029)            
            program_name = process<1,1,4>            
            DEL programstack<1>     ;* remove 'this' program from the stack
            programstack = CHANGE(programstack, @AM, underscore)
            READU trackrecord FROM trackfile, programstack ELSE trackrecord = ''            
            trackrecord<1> += 1         ;* Number of times this program (process) has 'hit' the file            
            trackrecord<2,-1> = program_name            
            trackrecord<3,-1> = DATE()            
            trackrecord<4,-1> = TIME()            
            trackrecord<5,-1> = SYSTEM(18)        ;* port number        
            trackrecord<6,-1> = SYSTEM(50)        ;* user id
            WRITE trackrecord ON trackfile, programstack        
        END    
    END    
RETURN
```
