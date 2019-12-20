# Customizing the Output of Commands

**Created At:** 8/2/2018 2:39:24 PM  
**Updated At:** 10/24/2018 8:49:15 AM  
**Original Doc:** [customizing-the-output-of-commands](https://docs.jbase.com/46963-utilities/customizing-the-output-of-commands)  

**Tags:**
<badge text='where' vertical='middle' />
<badge text='listu' vertical='middle' />
<badge text='jbcusercustomisedisplay' vertical='middle' />
<badge text='output specifications' vertical='middle' />
<badge text='utilities' vertical='middle' />

## Description 

It is possible for a user to modify the output characteristics of the **WHERE** and **LISTU** (which are utility programs). This is achieved by creating a subroutine that is called by these programs. The subroutine must be accessible to all users who will call the programs.

This subroutine has the fixed name **JBCUserCustomiseDisplay**. It is passed a single parameter that is both the input and the output parameters. This subroutine is called as a common subroutine for **WHERE** and **LISTU** and is called once at the start of each program to present the heading information, and once again for each line of data that will be output to the screen (or printer). The subroutine can choose to modify the headers and output data as required, and can do so differently for each command, or add it's own options. For example, a new command line option such as **(U)**could be added on the command line to specify that user location details should be displayed.

The subroutine can be called in two different ways.

**1. Header Specification**

The following information will be presented to the caller in the single parameter:


| Attribute<br> | Description<br> |
| --- | --- |
| attribute 1<br> | "WHERE" or "LISTU"<br> |
| attribute 2<br> | Always 1 to show it is presenting the headers.<br> |
| attribute 3<br> | A multi-value list of the heading text, one value per column.<br> |
| attribute 4<br> | A multi-value list corresponding to attribute 3 which has numeric definitions to describe the column. These definitions are contained in the supplied JBC.h file. This makes it better and more portable to find, for example, what column the port number is displayed in. You would use this code<br>INCLUDE JBC.h<br>LOCATE CUSTOM\_TYPE\_PORT\_NUMBER in parameter&lt;4&gt; SETTING ....<br>which will find what column number the port number will be presented in.<br> |
| attribute 5<br> | This is the width of each heading column. This value does not include the delimiter added by the jBASE program.<br> |




**2. Body Specification**

The subroutine is called once for each line of body data that the jBASE program will output. When this is done the following information will be presented to the caller in the single parameter


| Attribute<br> | Description<br> |
| --- | --- |
| attribute 1<br> | "WHERE" or "LISTU". Do not amend this attribute<br> |
| attribute 2<br> | Always "2" to show it is presenting the data. Do not amend this attribute.<br> |
| attribute 3<br> | A multi-value list of the data it wishes to display. Each value corresponds to the layout in the heading as presented in the first call shown above. For example, if the account name were to be presented in the 3rd column of the output of WHERE, then the account name will be in the 3rd multi-value of this attribute 3, and the first call which defines the headings will have multi-value 3 in attributes 3,4 and 5 defining the account name. If you want to remove a complete row of data, then in attribute 3 return a null string.<br> |




## Note: 


> - When finding out what column a particular piece of information is held in, remember that if you insert or delete fields that field number might become invalid, so the order of finding the information is important. For example you might use LOCATE (as in the examples) to find out what column the Account name is during the WHERE command , this is usually by default in column 3. If you later decide to delete the Port number , in column 1, then the Account name will now be displayed in column 2 instead of column 3.
> - The WHERE command has the (V) option, which means multiple lines of information are displayed for each jBASE active program. When this happens you probably want to mimic the layout of the WHERE command i.e. the columns such as Port, Device, Account are only displayed on the first row of data for each jBASE process
> - The 'Command' column on the WHERE command is variable in width. They are initially created so the command fits the entire width of the available screen. If you modify the columns to display, the jBASE command WHERE will re-calculate their variable length fields so that it fits onto the screen width. The LISTU command has no such fields and it is up to the programmer to ensure all modified fields will fit onto the screen width.




**EXAMPLE 1**

Remove the "Device" column from the output of the WHERE command. The output of a WHERE command that is:

```
Port     Device   Account      PID      Command
10       ttyp0    jbase32      8838     jsh
                               8840     ED BP TASKLIST
*12      ttyp2    jbase32      11328    WHERE
14       ttyp1    jbasebld     11327    ADD.CUSTOMER
```

is changed to:

```
Port     Account      PID      Command
10       jbase32      8838     jsh
                      8840     ED BP TASKLIST
*12       jbase32      11328    WHERE
14       jbasebld     11327    ADD.CUSTOMER
```

```
This is the required subroutine.

SUBROUTINE JBCUserCustomiseDisplay(rec)
*
* Customize so that for the WHERE command only, we will not display the DEVICE column.
*
* In order to keep the functionality quicker, we will use named commons
* so we aren't permanently opening and closing files.
*
INCLUDE JBC.h
COMMON /JBCUserCustomiseDisplay/ device.column
IF rec<1> EQ "WHERE" THEN ;* Limit ourselves to the WHERE command
    IF rec<2> EQ "1" THEN
*
* This is the call that defines the heading statements.
* Look to see where the device name is stored.
*
    LOCATE CUSTOM_TYPE_DEVICE_NAME IN rec<4> SETTING device.column THEN
*
* Delete the 3 values that define, for the device name, the heading
* text, the heading identifier and the heading width.
*
        DEL rec<3,device.column>
        DEL rec<4,device.column>
        DEL rec<5,device.column>
    END ELSE
        device.column = 0
    END
END ELSE
*
* This is a line of data. Remove the data for the device name
* as we did for the heading statement.
*
        IF device.column THEN
            DEL rec<3,device.column>
        END
    END
END
RETURN
```



**EXAMPLE 2**

In this example we:

- Remove the device name column as we did in the first example.
- Insert a new column of our own which we will call 'Location'. This column will be filled in by data we create ourselves. In this example it is simply a cross reference between the port number and a record keyed on the port number.
- The account name field will be changed to have a width of 16. This will allow us extra room to add a (S) to the account name if we find the user is in sales.


So the output of WHERE will change from:

```
Port   Device    Account       PID      Command
10     ttyp0     rogerm        8838     jsh
                               8840     ED BP newshell
*12    ttyp2     jbase32       11328    WHERE
14     ttyp1     dorisk        11327    ADD.CUSTOMER
```



to:

```
Port    Account         Location          PID      Command
10      rogerm (S)      Sales station 12  8838     jsh
                                          8840     ED BP newshell
*12     jbase32         Developer desk    11328    WHERE
14      dorisk          Marketing SW      11327    ADD.CUSTOMER
```



Here is the required code.

```
SUBROUTINE JBCUserCustomiseDisplay(rec)
*
* Customize ourselves purely for the WHERE command.
* The output for WHERE is normally like this:
*      Port     Device     Account     PID     Command
* We will modify the output in the following manners
*    (a) Delete the Device column
*    (b) Insert a new "Location" field , preferably after the
*        Account field
*    (c) Update the Account column to be 16 characters and
*        append (S) for sales
* This means the heading now looks like:
*      Port     Account          Location         PID      Command
*
* In order to keep the functionality quicker, we will use named commons
* so we aren't permanently opening and closing files.


*
INCLUDE JBC.h
COMMON /JBCUserCustomiseDisplay/ FILEVAR , delvalue
COMMON /JBCUserCustomiseDisplay/ insvalue , accvalue
COMMON /JBCUserCustomiseDisplay/ okayflag , portnumber
*
* This function is called by many commands other than
* the WHERE command,
*
command = rec<1>          ;* Extract the name of the command
type = rec<2>   ;* Extract the type of call.
BEGIN CASE
CASE command EQ "LISTU"   ;* Ignore the LISTU command (for clarity)
CASE command EQ "WHERE"
* It is only the WHERE command we are interested in.
* The other CASE statements added for clarity of code only
*
* See if this is a heading statement or line of details
*
IF type EQ "1" THEN
*
* This is the heading definition. The rest of the 'rec' is made up as follows
* attribute 3: Multi-value list of heading text
* attribute 4: Multi-value list of heading definitions
* attribute 5: Multi-value list of widths of each column
*
* Open the LOCATION file for our use.
*
OPEN "LOCATION" TO FILEVAR ELSE
okayflag = 0
RETURN
END
okayflag = 1
*
* Find out where we can extract the port number from.
*
LOCATE CUSTOM_TYPE_PORT_NUMBER IN rec<4> SETTING portnumber ELSE
okayflag = 0
rec = recsave
RETURN
END
*
* (a) Find the Device Name to delete
*
recsave = rec
LOCATE CUSTOM_TYPE_DEVICE_NAME IN rec<4> SETTING delvalue THEN
DEL rec<3,delvalue>     ;* Delete the heading text
DEL rec<4,delvalue>     ;* Delete the definitio
DEL rec<5,delvalue>     ;* Delete the width
END ELSE
delvalue = 0  ;* Cannot find the heading
END
*
* (b) We will add the 'Location' value AFTER the account name
*
LOCATE CUSTOM_TYPE_ACCOUNT_NAME IN rec<4> SETTING insvalue THEN
insvalue++    ;* This is the value we insert BEFORE
END ELSE
insvalue = 2  ;* Default to becoming the second column
END
INS "Location" BEFORE rec<3,insvalue> ;* Insert the text
INS "99" BEFORE rec<4,insvalue>       ;* Insert a dummy value for the heading definition
INS "20" BEFORE rec<5,insvalue>       ;* Insert the width to use
*
* (c) Find the column of the Account definition
*
LOCATE CUSTOM_TYPE_ACCOUNT_NAME IN rec<4> SETTING accvalue ELSE
accvalue = 0
END
*
END ELSE
*
* This is a line of data in attribute 3. Each column is
* multi-valued. We will amend this line of data according
* to the data we extracted earlier.
*
* Make sure the OPEN went okay
*
IF NOT(okayflag) THEN
RETURN
END
*
* Extract the port number before we do anything else.
*
port = rec<3,portnumber>
*
* (a) Delete the Device Name
*
IF delvalue THEN
DEL rec<3,delvalue>
END
*
* (b) Insert the LOCATION information.
*
IF port NE "" THEN
READ location FROM FILEVAR , port ELSE
location = "UNKNOWN"
END
END ELSE
location = ""
END
IF insvalue THEN
INS location<1> BEFORE rec<3,insvalue>
END
*
* (c) Amend the account name to have (S) appended if a sales account
*
accname = rec<3,accvalue>   ;* The account name or ""
IF NOT(LEN(accname)) THEN
location = ""
END
IF location<2> = "SALES" AND LEN(accname) THEN
rec<3,accvalue> = accname :" (S)"
END
END
END CASE
RETURN
```
