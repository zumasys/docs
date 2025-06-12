##  Batch Service Settings (BS.E)

<PageHeader />

##

![](./BS-E-1.jpg)

**Service ID** Enter the name of the batch service you want to create or edit.  
  
**Display Name** Enter the name that is to be displayed for the service in
SERVICE.CONTROL.  
  
**Description** Enter a description of what the batch service does.  
  
**Type** Set the method to be used to process the batch queues:  
Continuous - Continually polls for new jobs at a defined frequency.  
Repeating - Runs all jobs in the queues repeatedly at a defined frequency.  
Run Once - Runs the jobs in each of the batch queues identified and stops.  
Scheduled - Runs the jobs in each of the batch queues identified on the times
and days scheduled.  
  
**Schedule Times** Enter the times of day, in 24 hour format (hh:mm), at which
the process is to be run on each of the scheduled days. If multiple times are
entered they must be in ascending sequence. If the process has not finished
before the next scheduled time it will skip the time and wait until the next
scheduled time.  
  
**Days Of Month** If you want the process to run on specific days of each
calendar month then enter the number associated with each day.  
  
**Sunday** Check this box if the process is to be run on Sundays.  
  
**Monday** Check this box if the process is to be run on Mondays.  
  
**Tuesday** Check this box if the process is to be run on Tuesdays.  
  
**Wednesday** Check this box if the process is to be run on Wednesdays.  
  
**Thursday** Check this box if the process is to be run on Thursdays.  
  
**Friday** Check this box if the process is to be run on Fridays.  
  
**Saturday** Check this box if the process is to be run on Saturdays.  
  
**Month End** Check this box if the process is to be run on the last day of the fiscal month as defined in [ FY.E ](../../../../../rover/AP-OVERVIEW/AP-ENTRY/ACCT-CONTROL/ACCT-CONTROL-1/ar-e/AR-E-1/CASH-E/recon-e/RECON-E-4/GLTRANS-E/GLTRANS-E-1/FY-E) .   
  
**Frequency** An entry in this field is only applicable if the Type is set to
continuous or repeating. If the type is continuous it contains the number of
seconds to wait between checking the batch queue for additional entries. This
wait time only takes place when there is no job detected in the queue after
the completion of the item currently being processed. If the type is repeating
then the process will process all jobs in the queue, even those that had been
run before, at the frequency defined in this field. If this field is left
blank then the default of 60 seconds is used.  
  
**Date To Start** Enter the date on which this execution record should begin
processing. The process will remain in a sleep state until this date. If no
date is entered then the current date is assumed. The date must be greater
than or equal to today's date.  
  
**Time To Start** Enter the time at which this execution record should begin
processing in the format hh:mm:ss where hh is the hour of the day in 24 hour
format, mm is the minutes and ss is the seconds. If this field is left blank
and a date to start has been specified then 00:00:00 (midnight) will be
assumed. If this field is blank and date to start is also blank the process
will be started immediately.  
  
**Week Start** Select the day of the week that should be considered the first
day of the week. This will determine the settings of the week start and end
dates each time the service processes the batch queues specified. This field
is typically set to either Saturday or Sunday.  
  
**Previous Day** Individual jobs included in the batch queues may have date
parameters that need to be defined when the job is run. To avoid having to
reset these dates manually each day the jobs can use one of the following
pseudo names in place of an actual date: @SD (today's date), @WSD (week start
date), @WED (week end date), @MSD (month start date), @MED (month end date).
You can also offset a date by some number of days. For example, @SD-1 will
cause the day before the current date to be used, and @SD+1 will cause the day
after the current date to be used. Each time the batch queues are processed
the system replaces the @xxx pseudo names with actual dates based on the
fiscal year calendar. It does this by assuming that the current system date
will be used as the current date (@SD) and will determine the other dates
based on this date. This works fine in situations where the process is set to
start on the same date you want to use for the current date parameter, for
example, 23:45 in the evening. But if you want t  
he process to start after midnight, for example 01:15, and to assume the
previous day as the current date you'll need to check this box to move the
date back one day from the system date.  
  
**Startup Type** Select the method for starting up the service:  
  
Automatic - service starts automatically when M3 is started  
Manual - service must be started manually  
Disabled - service may not be  
  
**Logon As** Enter the user id that is to be used when starting the service.  
  
**Password** Enter the password to be used when starting the process.  
  
**Alert Minutes** Enter the number of minutes to wait since the last status
update from the service before sending an alert that the process is not
responding.  
  
**Max Logs** Set this field to the maximum number of status log entries that
you want to be retained for the service. Log entries indicate events such as
when the process started, and when it stopped.  
  
**Batch Queue ID** Select the names of each batch queue record to be processed
by this batch service in the order they are to be processed. To create a new
batch queue select the  option. You will be prompted for the name to be
assigned to the queue and the batch queue settings procedure will be opened.  
  
**Batch Queue Description** Displays the description for the associated batch
queue id.  
  
**Edit Queue** Click this button to edit the batch queue settings for the
batch queue where the cursor is positioned.  
  
  
<badge text= "Version 8.10.57" vertical="middle" />

<PageFooter />