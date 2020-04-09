# Running in D3 Flashed Mode

<PageHeader />

As installed, the dashboard control programs and subroutines are not flash-compiled. Complete these instructions to run the dashboard in flashed mode.

To run the dashboard in flashed mode:

1. Log onto the MVDB account of the D3 server on which the dashboard is installed.  

1. Run these commands:
   ```
   COMPILE RSS.BP (O  
   COMPILE MVBP.BP (OW  
   COMPILE WDB.BP (OW  
   COMPILE MVDB.SUBS (O
   ```  

1. Change attribute 1 in the `COMPILE.SETUP` item (controls the manner in which the Dashboard code editor compiles widget subroutines) in the `MVDB.CONTROL` file in the `MVDB` account from:  
   ```
   BASIC %FILENAME% %ITEMNAME%
   ```  
   to:  
   ```
   COMPILE %FILENAME% %ITEMNAME% (O
   ```  

1. Save the updated item.
   The dashboard will now run in flashed mode and will flash compile any new or modified widget subroutines.
   | <!----> | <!----> |
   | --- | --- |
   Warning | If you choose to run the Dashboard in flashed mode, make sure that all subroutines called from your existing applicaiton are flash-compiled as well. See the "Compiling Programs" topic in the "BASIC" section fo the D3 Reference Manual for mor information

## Disabling Flashed Mode

Complete these instructions to disable flashed mode.  
  
To disable flashed mode:
1. Change attribute 1 in the `COMPILE.SETUP` item in the `MVDB.CONTROL` file in the `MVDB` account from:
   ```
   COMPILE %FILENAME% %ITEMNAME% (O
   ```  
   to:  
   ```
   BASIC %FILENAME% %ITEMNAME%
   ```  

1. Save the updated item.  

1. Un-flash the programs by running the following commands:  
   ```
   DEOPTIMIZE DICT RSS.BP  
   DEOPTIMIZE DICT MVBP.BP  
   DEOPTIMIZE DICT WDB.BP  
   DEOPTIMIZE DICT MVDB.SUBS
   ```  
   Flashed mode is disabled.<PageFooter />
