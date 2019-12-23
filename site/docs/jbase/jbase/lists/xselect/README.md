# XSELECT

**Created At:** 7/9/2018 12:32:27 PM  
**Updated At:** 7/13/2018 9:36:46 AM  
**Original Doc:** [xselect](https://docs.jbase.com/47026-lists/xselect)  

**Tags:**
<badge text='lists' vertical='middle' />

## Description 

Generates a select list (or display) of all keys in a file which do not match given selection criteria. It takes the general form:

```
XSELECT file-name
```

where **file-name** specifies the name of the file to be searched

If the command is issued while a select list is active, the process will return with a list of all the records in the file which are not in the active list.

If the command is issued without an active select list, the user will be prompted initially for the name of a saved list to use. The process will then return with a list of all the records in the file which are not in the supplied list. If no list name is supplied but &lt;Enter&gt; is pressed after the prompt, the user will be asked to supply selection criteria (in normal jQL format) which will identify all the records in the file that are not desired in the returned list.

In all cases, providing the returned list contains one or more record keys, the user will be asked for a new name to save the list to. If non is supplied but &lt;Enter&gt; is pressed to this prompt, the list of record keys will be displayed on the terminal screen.



### EXAMPLE 1

```
:GET-LIST CUSTOMERS.MK
>XSELECT CUSTOMERS
Input save list name: CUSTOMERS.NOT.MK
```

GET-LIST makes the CUSTOMERS.MK list active. XSELECT then creates a list of all the records in the CUSTOMERS file which are not in the active list, and save it as CUSTOMERS.NOT.MK.



### EXAMPLE 2

```
:XSELECT CUSTOMERS 
Input list name: CUSTOMERS.MK
Input save list name: CUSTOMERS.NOT.MK
```

XSELECT first prompts for the name of a list to use. It then creates a list of all the records in the CUSTOMERS file which are not in the specified list, and save the new list as CUSTOMERS.NOT.MK.



### EXAMPLE 3

```
:XSELECT CUSTOMERS
Input list name: <Enter>
Input selection criteria: WITH POST.CODE = "MK]"
Input save list name: CUSTOMERS.NOT.MK
```

XSELECT first prompts for the name of a list to use. Because a list name is not supplied, it prompts for the anti-selection criteria to use. A list is then created which contains all the keys of the CUSTOMERS file where the records do not match the selection criteria. The new list is saved as CUSTOMERS.NOT.MK.



Back to [List Processing](./../list-processing)
