# Layout of the JCOVER output file

**Created At:** 8/30/2018 12:35:01 PM  
**Updated At:** 8/30/2018 12:49:35 PM  
**Original Doc:** [layout-of-the-jcover-output-file](https://docs.jbase.com/48399-tools/layout-of-the-jcover-output-file)  
**Original ID:** 336867  
**Internal:** No  

**Tags:**
<badge text='jbase tools' vertical='middle' />
<badge text='jcover' vertical='middle' />

## Description 

The records written to the jcover output file have different formats depending upon what they are showing. The formats are identified by a prefix on the record key. Note that in the following examples a **\*** character is used to delimit certain fields. This is the default delimiter character. Remember if the **-d** option was used to jcover, then this delimiter will be different.

**1. E\*itemid\*filename\*lineno**

These items show which lines of code have been executed. They are only generated if the -e option is used on jcover. There will be one item for each different line of code executed during the application execution.


| <br>Item Id<br> | <br>The 4 fields show the record type (E) , the item id, the source file name and the line number that were executed.<br> |
| --- | --- |
| <br>&lt;1&gt;<br> | <br>The actual line of source code taken from the source 'itemid' in file 'filename'<br> |




**2. F\*itemid\*filename**

Used internally to keep track of what items in what files have been accessed as part of the jcover execution


| Item Id<br> | The 3 fields show the record type (F) , the item id and the source file name that were executed.<br> |




**3. G\*descr**

These are general information items.


| Item Id<br> | The 2 fields show the record type (G) and then a unique identifier, not really of any use.<br> |
| &lt;1&gt;<br> | Textual description of the general information.<br> |
| &lt;2&gt;<br> | The actual general information.<br> |
| &lt;3&gt;<br> | The order in which the fields are to be displayed using 'LIST filename GENINFO'<br> |




**4. S\*itemid**

These items show what item has been executed and are used to build up a list of statistical analysis of the executed item.


| Item Id<br> | The 2 fields show the record type (S) and the item id that were executed.<br> |
| &lt;1&gt;<br> | Item ID of the source executed.<br> |
| &lt;2&gt;<br> | File name containing the executed source.<br> |
| &lt;3&gt;<br> | Number of lines of source. This attribute will be the sum of attributes &lt;4&gt; and &lt;5&gt;.<br> |
| &lt;4&gt;<br> | Total number of comment lines in the source code.<br> |
| &lt;5&gt;<br> | Number of lines of code in the source that are executable. Blank lines and comment lines are not included in this count.<br> |
| &lt;6&gt;<br> | Number of lines of code executed by the application.<br> |
| &lt;7&gt;<br> | Number of lines of code executed by the application as a percentage of the total number of executable lines.<br> |
| &lt;8&gt;<br> | Number of lines of code not executed by the application.<br> |
| &lt;9&gt;<br> | Number of lines of code not executed by the application as a percentage of the total number of executable lines.<br> |
| &lt;10&gt;-&lt;20&gt;<br> | Reserved for future use.<br> |
| &lt;21&gt;<br> | Details of line 1 of the source code. A character 'C' shows line 1 is a comment line. A numeric value shows line 1 is executable code and has been executed this many times. A blank shows line 1 is executable code, but was not executed during the application execution.<br> |
| &lt;22&gt;<br> | Ditto as &lt;21&gt; but for line 2 of the source code.<br> |
| &lt;23&gt;<br> | Ditto as &lt;21&gt; but for line 3 of the source code.<br> |


etc. for all lines in the source code.



**4. U\*itemid\*filename**

For every file name specified with the **-ffilename** parameter of jcover, there will be one of these items for every item in every file that was not used during the application execution. These items are only generated if the -u option is used on jcover. Item id's that show a non-source item will not be included and these are items that are appended with .o , .a , .so , .sl , .obj , .d or .d or items that begin with ! , $ or \*.


| Item Id<br> | The 3 fields show the record type (U) , the item id and the source file name that were not executed in any way whatsoever.<br> |




**5. X\*itemid\*filename\*lineno**

These items show which lines of code have not been executed. They are only generated if the **-x** option is used on jcover. There will be one item for each different line of code not executed during the application execution. Only the source files that have one or more line of code executed will be included here. Any source items not executed at all will not have a **X\*** item but will be included in the **U\*** items (assuming the **-u**option was used)


| Item Id<br> | The 4 fields show the record type (X) , the item id, the source file name and the line number that were not executed, but the source did have one or more lines of code executed.<br> |
| &lt;1&gt;<br> | The actual line of source code taken from the source 'itemid' in file 'filename'<br> |

