##  Manage Services (SERVICE.CONTROL)

<PageHeader />

##

![](./SERVICE-CONTROL-1.jpg)

**Control ID** Automatically populated with "SERVICE".  
  
**Name** Contains the name of each of the available services from each account
identified in the ACCOUNT.CONTROL procedure.  
  
**Description** Contains a description of the associated service.  
  
**Status** Contains the current status of the service: Started, Stopped,
Paused, Starting, Stopping, Pausing, Not responding.  
  
**Pib** The process identification block (Pib) on which the associated service
is running. This value is shown in the output from the LISTU command.  
  
**Startup Type** Contains the startup type for the associated service:
Automatic, Manual, Disabled.  
  
**Account Name** Contains the account name where the associated service is
run.  
  
**Log On As** Contains the user id used to run the service.  
  
**Select** Checking this box indicates that when one of the action buttons is
clicked its action will be applied to the associated process. For example, you
could check the boxes for multiple services and click the Start button once to
start all of them. Note: If none of the check boxes is checked then clicking
on a button will cause the action to be taken against the service where the
cursor resides.  
  
**Master Select** Checking or unchecking the box will cause the check boxes
associated with each service to be set the same way.  
  
**Show Account** You can limit the services listed to only include only those
for the account selected in this field. To show the services all accounts
select "All Accounts". Note: Only accounts defined in ACCOUNT.CONTROL are
included as options.  
  
**Start** Clicking this button will start all of the services that are checked
or, if none are checked, the service where the cursor is currently located
will be started. Only services with a status of "Stopped" will be started.  
  
**Stop** Clicking this button will stop all of the services that are checked
or, if none are checked, the service where the cursor is currently located
will be stopped. Only services with a status of "Started", "Paused" or "Not
responding" will be stopped.  
  
**Pause** Clicking this button will pause all of the services that are checked
or, if none are checked, the service where the cursor is currently located
will be paused. Only services with a status of "Started" will be paused.  
  
**Resume** Clicking this button will resume all of the services that are
checked or, if none are checked, the service where the cursor is currently
located will be resumed. Only services that have a status of "Paused" will be
resumed.  
  
**Restart** Clicking this button will restart all of the services that are
checked or, if none are checked, the service where the cursor is currently
located will be restarted. Only services that have a status of "Started" will
be stopped and then started.  
  
**Properties** Click this button to view the properties of the service.  
  
**Logs** Click this button to display the status and log information for the
service.  
  
**Refresh** Click this button to refresh the list of services.  
  
**Close** Click this button to close the window.  
  
**Add Batch Service** Click this button to add a new batch service.  
  
  
<badge text= "Version 8.10.57" vertical="middle" />

<PageFooter />