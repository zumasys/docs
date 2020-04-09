# Using the Code Editor to Edit Non-Widget Source

<PageHeader />

The dashboard code editor can be used to edit widget subroutines and other PickBASIC programs on your system.

| <!----> | <!----> |
| --- | --- |
Note | Your dashboard user must have the administrative rights to use the code editor

To open the code editor, click the code editor icon from the title bar of any widget on any dashboard. This opens the code for that particular widget.  
  
To edit other programs or create new programs with the code editor:  
1. Click the Load icon from the code editor. The Open Item dialog box displays  

1. Do one of the following:
   * To open an existing program, type the account name and file name where the code is stored and the item ID of the code. Click Open.
   * To create a new program, enter the account name and file name where you want to store the code and provide an item ID for the code. Click Open.
   If the item already exists, the code will be displayed in the code editor. If the item doesn’t exist, an empty code editor window opens.  
  
1. Create new code or modify existing code as appropriate, then click Save.  

1. Click the Compile icon to compile your code.  

1. Close the code editor.
   | <!----> | <!----> |
   | --- | --- |
   Note | As installed, the code editor is configured to use the `BASIC` command to compile, and the `CATALOG` command is subsequently invoked by the code editor for the MVDB.SUBS file only. If you want the code editory to compile and catalog your code, configure the code editor to use the `COMPILE-CATALOG` command (see [Running in D3 Flashed Mode](./../running-in-d3-flashed-mode/README.md) for more information). This will result in MVDB.SUBS subroutines to be cataloged twice, which has no negative effect. <PageFooter />
