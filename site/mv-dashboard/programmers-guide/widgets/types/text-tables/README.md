# Text Tables

<PageHeader />

Widgets can create HTML tables by setting the W$TYPE to “TABLE” and the following variables:

| <!----> | <!----> |
| --- | --- |
| W$TABLE.COL.LABELS | VM-Array of column heading labels. |
| W$TABLE.COL.JUST | VM-Array of text-justification settings (“left”, “right”, “center”). |
| W$TABLE.DATA | AM/VM-Array. Each AM is a table ROW, each VM is a column within the row. |
| W$TABLE.TOTALS | VM-Array of total values (optional) at the bottom of each column.  |

This type of widget allows for easy creation of HTML-based tables. However, if you need more control over the way that these tables are presented, use the HTML type widget to create more complex tables.

<PageFooter />
