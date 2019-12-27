# TEXT TABLES

**Created At:** 9/26/2017 4:43:24 PM  
**Updated At:** 11/21/2017 6:01:47 AM  
**Original Doc:** [text-tables](https://docs.zumasys.com/36577-mv-dashboard/text-tables)  
**Original ID:** 278560  
**Internal:** No  


Widgets can create HTML tables by setting the W$TYPE to “TABLE” and the following variables:


| W$TABLE.COL.LABELS<br> | VM-Array of column heading labels.<br> |
| --- | --- |
| W$TABLE.COL.JUST<br> | VM-Array of text-justification settings (“left”, “right”, “center”).<br> |
| W$TABLE.DATA<br> | AM/VM-Array. Each AM is a table ROW, each VM is a column within the row.<br> |
| W$TABLE.TOTALS<br> | VM-Array of total values (optional) at the bottom of each column. <br><br> |


This type of widget allows for easy creation of HTML-based tables. However, if you need more control over the way that these tables are presented, use the HTML type widget to create more complex tables.
