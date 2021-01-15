# Trigger API

<PageHeader />

**Tags:**
<badge text='events and triggers' vertical='middle' />

## Description

The mechanism provided to define the action that takes place when a database trigger event occurs is a jBC subroutine. The name of the subroutine is specified in the [create-trigger](./../../triggers/create-trigger/README.md) command. A different subroutine can be defined for each of the nine database trigger events, however it is usually more convenient to use one subroutine for each file that has a trigger defined, distinguishing between the different events in the subroutine.

The subroutine can used to define ancillary updates that need to occur as a result of the primary update. The seven parameters passed to the subroutine allow interrogation and (where applicable) manipulation of the record being updated.

| SubroutineParameter | Description |
| --- | --- |
| Filevar | The file variable associated with the update. For instance:<br><br>```WRITE var ON filevar,"newkey"```<br><br>however caution must be exercised not to call this subroutine recursively. |
| Event | One of the TRIGGER\_TYPE\_xxx values to show which of the 9 events is currently about to take place. Defined in source $JBCRELEASEDIR/include/JBC.h (UNIX) and %JBCRELEASEDIR%\include\JBC.h (Windows).<br>[See Table #1 below](./#Table-#1) |
| Prerc | The current return code (i.e. status) of the action. For all the TRIGGER\_TYPE\_PRExx events, it will be 0. For all the TRIGGER\_TYPE\_POSTxx events, it will show the current status of the action, with 0 meaning that the action was performed successfully and any other value showing the update failed. For example, if a WRITE fails because the lock table is full, the value in prerc is 1. |
| Flags | Various flags to show things like if a WRITE or WRITEV was performed.  **Not used yet**. |
| RecordKey | The record key (or item-id) of the WRITE or DELETE being performed. For CLEARFILE, this is set to null. |
| Record| For the WRITE actions, this is the record currently being updated. For the DELETE or CLEARFILE actions, this is set to null. It is possible to modify this variable in user defined subroutines if need be.  However, the modification will be discarded unless the [create-trigger](./../../../files/create-trigger) command was executed with the -a option.|
| Userrc | This can be set to a non-zero value for the TRIGGER\_TYPE\_PRExxx actions so that it will abort the action. However, unless the -t option was used with the [create-trigger](./../../../files/create-trigger) command, it will be meaningless.<br>There are two options to setting this value:<ol><li>Any negative value will cause the action to be terminated. However, nothing will be flagged to the application, and it will appear to all intents and purposes that the action performed. Any positive value is taken to be the return code for the action.</li><li>For example, when a WRITE completes it will normally give a return code of 0. If this variable is then set to say 13 (which is the Unix error number for &quot;Permission denied&quot;) then the application will fall into the jBASE debugger with error code 13.</li></ol> |

### Table #1 (Trigger events)

| Type  | Event |
| :---: | ----- |
| TRIGGER\_TYPE\_PREWRITE | before a WRITE occured |
| TRIGGER\_TYPE\_POSTWRITE | after a WRITE occured |
| TRIGGER\_TYPE\_PREDELETE | before a DELETE occured |
| TRIGGER\_TYPE\_POSTDELETE | after a DELETE occured |
| TRIGGER\_TYPE\_PRECLEAR | before a CLEARFILE occured |
| TRIGGER\_TYPE\_POSTCLEAR | after a CLEARFILE occured |
| TRIGGER\_TYPE\_PREREAD | before a READ occured |
| TRIGGER\_TYPE\_POSTREAD | after a READ occured |
| TRIGGER\_TYPE\_POSTOPEN | after an OPEN occured|

### Assignment of Trigger Subroutine Arguments

The arguments of a trigger subroutine are generally assigned by the database management system at the time the subroutine is invoked, but there are exceptions.  The subroutine can in turn assign or reassign argument values if the trigger was created with the -a option.

The table below summarizes the state of each argument at the time the subroutine is invoked, according to each trigger type.  Note that there are three cases where record is null even though the record key is assigned, i.e., pre- and post-delete and pre-read.  This is so for the read event because there is no need to read a record before reading a record, and in the case of the delete events, because the attempt to delete a non-existent record warrants no further action.  If an application requires a record to be verified prior to deleting it, then that operation that should be performed at a higher level.

|  | filevar | event | prerc | flags | recordkey | record | userrc |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Pre-Write | ASSIGNED\* | ASSIGNED | ASSIGNED | NOT USED | ASSIGNED | ASSIGNED | USER DEFINABLE |
| Post-Write | ASSIGNED\* | ASSIGNED | ASSIGNED | NOT USED | ASSIGNED | ASSIGNED | USER DEFINABLE |
| Pre-Delete | ASSIGNED\* | ASSIGNED | ASSIGNED | NOT USED | ASSIGNED | NULL | USER DEFINABLE |
| Post-Delete | ASSIGNED\* | ASSIGNED | ASSIGNED | NOT USED | ASSIGNED | NULL | USER DEFINABLE |
| Pre-Clear | ASSIGNED\* | ASSIGNED | ASSIGNED | NOT USED | NULL | NULL | USER DEFINABLE |
| Post-Clear | ASSIGNED\* | ASSIGNED | ASSIGNED | NOT USED | NULL | NULL | USER DEFINABLE |
| Pre-Read | ASSIGNED\* | ASSIGNED | ASSIGNED | NOT USED | ASSIGNED | NULL | USER DEFINABLE |
| Post-Read | ASSIGNED\* | ASSIGNED | ASSIGNED | NOT USED | ASSIGNED | ASSIGNED | USER DEFINABLE |
| Post-Open | ASSIGNED\* | ASSIGNED | ASSIGNED | NOT USED | NULL | NULL | USER DEFINABLE |

## Note

> filevar is not the name of the file, but rather the system-level file unit.  It can be treated as such for file operations  within the subroutine, but cannot be treated as a typical variable, e.g., it cannot be used with a PRINT or CRT statement.

## Example

```
SUBROUTINE CUSTOMERS-CHECK(filevar , event , prerc , flags , recordkey , record , userrc )
INCLUDE JBC.h
COMMON /CUSTOMER_CHECK/ openflag , odfile , arfile , defile
*
* This is an example of using database triggers. To run this example, you need
* to have the following files :
*
* CUSTOMERS: The file to which the database triggers have been applied and that
* contains the actual customer records. We assume attribute 4 is the
* balance of the account, and we set and reset attribute 5, the
* overdrawn flag.
* OVERDRAWN: We use this to keep a list of customers who have gone overdrawn.
* ARCHIVE: We use this as a waste-bin to archive deleted customer records.
* DELETED: We keep a track of all deleted records in here
*
* The following commands should have been run against the CUSTOMERS file :
*
* create-trigger -at CUSTOMERS PREWRITE CUSTOMERS-CHECK
* create-trigger -t CUSTOMERS PREDELETE CUSTOMERS-CHECK
* create-trigger -t CUSTOMERS PRECLEAR CUSTOMERS-CHECK
*
* The parameters passed are :
* filevar: The file variable associated with the update. For example, you
* can do this 'WRITE var ON filevar,"newkey"' , however you must then
* be very careful of calling this subroutine recursively !
* event: One of the TRIGGER_TYPE_xxx values to show which of the 6 events is
* currently about to take place. Defined in source JBC.h .
* prerc: The current return code (i.e. status) of the action. For all the
* TRIGGER_TYPE_PRExx events, it will be 0. For all the TRIGGER_TYPE_POSTxx
* events, it will show the current status of the action, with 0 being the
* action was performed successfully and any other value showing the update
* failed. For example, if a WRITE fails because the lock table is full, the
* value in prerc is 0.
* flags: Various flags to show things like if a WRITE or WRITEV was performed. Not
* used yet.
* recordkey: The record key (or item-id) of the WRITE or DELETE being performed. For
* CLEARFILE, this is set to ""
* record: For the WRITE actions, this is the record currently being updated. For the
* DELETE or
* CLEARFILE actions, this is set to "". You can modify this variable if you
* wish. However the changes will be thrown away unless the 'create-trigger'
* command was run with the -a option.
* userrc: You can set this to a non-zero value for the TRIGGER_TYPE_PRExxx actions
* so that it will abort the action. However, unless the -t option was used
* with the 'create-trigger' command, it will be meaningless. There are two
* options to setting this value :
* (a) Any negative value will cause the action to be terminated. However,
* nothing will be flagged to the application, and it will appear to all
* intents and purposes that the action performed.
* (b) Any positive value is taken to be the return code for the action. For
* example, when a WRITE completes it will normally give a return code of 0.
* If this variable is then set to say 13 (which is the Unix error number for
* 'Permission denied') then the application will fall into the jBASE
* debugger with error code 13.
*
* In this subroutine we use a number of alternative flags.
* In order to prevent us continually opening and closing the
* files as we enter and exit the subroutine, we will do it
* just the once in this application by using named common variables.
*
    IF NOT(openflag) THEN
        OPEN 'OVERDRAWN' TO odfile ELSE
            PRINTERR 201:CHAR(254):'OVERDRAWN'
            userrc = 2 ;* Set up an appropriate return code
            RETURN
            END
        OPEN 'ARCHIVE' TO arfile ELSE
            PRINTERR 201:CHAR(254):'ARCHIVE'
            userrc = 2 ;* Set up an appropriate return code
            RETURN
        END
        OPEN 'DELETED' TO defile ELSE
            PRINTERR 201:CHAR(254):'DELETED'
            userrc = 2 ;* Set up an appropriate return code
            RETURN
        END
        openflag = 1
    END
* Now to handle each of the actions possible, 3 of which we actually
* do something, 3 of which we have no code for.
    BEGIN CASE
    CASE event EQ TRIGGER_TYPE_PREWRITE ;* If this is a call BEFORE a WRITE is performed
* For the purposes of this example, we will assume that
* attribute 4 of the record is a balance field. It it has gone
* negative, we write a marked in the 'OVERDRAWN' field and set their
* negative flag in attribute 5.
* For this to work, the 'create-trigger' must have been run
* with the '-a' option so we can amend the record, and the -t option
* so we can terminate the update if we want (by setting 'userrc').
        balance = record<4> ;* Extract the current balance
        IF NUM(balance) THEN ;* Make sure we are looking at a numeric value
        IF balance GE 0 THEN
            record<5> = "" ;* Clear the 'negative balance' field.
        END ELSE
            record<5> = "1" ;* Set the 'negative balance' field.
* The customer has gone overdrawn. Add an entry in the
* file 'OVERDRAWN' in the item 'NEWIDS'.
* Read in the control record and update it.
            READU control FROM odfile,"NEWIDS" ELSE control = ""
                control<-1> = recordkey ;* Add the record key to the list of overdrawn.
                WRITE control ON odfile,"NEWIDS"
            END
        END
    CASE event EQ TRIGGER_TYPE_POSTWRITE ;* If call AFTER a WRITE has been performed
* Note: We ignore this action
CASE event EQ TRIGGER_TYPE_PRE_DELETE ;* If call BEFORE a DELETE is performed
*
* The user is going to delete a customer record.
* Stop this happening unless the balance is zero !
* Note that the value for 'record' is currently "" , so we
* have to read in the current value ourselves !
        READ newrecord FROM filevar,recordkey ELSE
* Trying to delete something that doesn't exist ! So, ignore this
            RETURN
        END
        balance = newrecord<4>
        IF NUM(balance) AND balance NE 0 THEN
            CRT "ERROR! You can only delete customer ":recordkey:" if they"
            CRT " have a zero balance -- please retry the operation!"
            userrc = 2 ;* Sets the error code
            RETURN
        END
* We want to keep a list of customer records deleted in a separate
* file. This includes copying the customer record for archive
* purposes and keeping a log of deleted records.
        arkey = "CUSTOMERS*":TIME():"*":DATE():recordkey ;* The key to write to archive.
        WRITE newrecord ON arfile , arkey ;* Make archive of record before deleted
* Make up a record describing this record delete.
        hist = ""
        hist<1> = TIMEDATE() ;* The time and date in external format
        hist<2> = TIME() ;* The time of deletion in internal format
        hist<3> = DATE() ;* The date of deletion in internal format
        hist<4> = SYSTEM(18) ;* The port number it was deleted from
        hist<5> = SYSTEM(19) ;* The user name who deleted it.
        hist<6> = arkey ;* The name of the record key it was save in the 'ARCHIVE'.
        WRITE hist ON defile,arkey ;* Write back these details
    CASE event EQ TRIGGER_TYPE_POST_DELETE ;* If call AFTER a DELETE performed
* Note: We ignore this action
    CASE event EQ TRIGGER_TYPE_PRECLEAR ;* If call BEFORE a CLEARFILE performed
* We are about to do a CLEAR-FILE on the CUSTOMERS file.
* We only allow this to go ahead if the users name is 'GREG', and even then
* we prompt to confirm this.
        IF SYSTEM(19) NE "GREG" THEN
            CRT "ERROR! A clear-file on the CUSTOMERS file can only be"
            CRT" performed by user GREG. Please see him to confirm this"
            userrc = 13 ;* Causes a 'Permission denied' message
            RETURN
        END
* Prompt user GREG to confirm he wants to clear the CUSTOMERS file.
* However, if we have stacked data, then we probably don't
* have a keyboard attached, and so we must abort this action.
        IF SYSTEM(10) THEN
            CRT "ERROR! A clear-file on the CUSTOMERS file cannot be performed"
            CRT " from an application with stacked data"
            userrc = 13 ;* Causes a 'Permission denied' message.
            RETURN
        END
* Similarly, don't allow this from a background process.
        IF SYSTEM(25) THEN
            CRT "ERROR! A clear-file on the CUSTOMERS file cannot be performed"
            CRT " from an application running in the background"
            userrc = 25 ;* Causes a 'Permission denied' message.
            RETURN
        END
* Now we can at last prompt user GREG.
        promptsave = SYSTEM(26) ;* Save the current value of the PROMPT string
        PROMPT "" ;* Amend the PROMPT to a NULL string
        CRT "GREG, are you SURE you want to clear the CUSTOMERS file ? ":
        INPUT ans
        IF OCONV(ans[1,1],"MCU") EQ "Y" THEN
            CRT "Okay, be it on your head !"
        END ELSE
* GREG does NOT want to carry on with the clear-file.
* Set the 'userrc' to -1, which means the clear-file will abort,
* but there will be no error message -- the application will
* believe it has completed okay.
            CRT "Good to know you've changed your mind"
            userrc = -1
        END
    CASE event EQ TRIGGER_TYPE_POSTCLEAR ;* Ifcall AFTER a CLEARFILE performed
* Note: We ignore this action
    END CASE
    RETURN
```

Back to [Triggers](./../README.md)

<PageFooter />
