# Deploy Dashboards and Widgets to Production Systems

<PageHeader />

Complete these instructions to manually deploy dashboard components to a production system. To deploy your dashboards or dashboard components to a production system:  

1. Copy the elements you need from the following three files (in the MVDB account) to a tape device using the `t-dump` command.  
     
   MVDB.DEFS (dashboard definitions)  
   MVDB.WIDGETS (widget definitions)   
   MVDB.SUBS (widget subroutines)  
     
   | <!----> | <!----> |
   | --- | --- |
   TIP | If your development system's files contain more data than you intend to deploy, use the `select` or `get-list` commands to define relevant subset before you run `t-dump`.    

1. If you added users to your development system that need to be deployed to production systems, additionally copy the following file to tape:  

   MVDB.USERS (dashboard user ids)  

1. Load the files you sent to tape to the production system’s MVDB account files using the t-load command.  

1. Compile and catalog any subroutines you loaded from the MVDB.SUBS file.  
   
   Your dashboards or dashboard components are deployed.  

   | <!----> | <!----> |
   | --- | --- |
   NOTE | It is important to remember that you must update the production system with any additions or changes to their application such as new dictionaries, procs or programs and/or q-pointers to new files that support the elements of the dashboard that you are deploying   
     
   <PageFooter />
