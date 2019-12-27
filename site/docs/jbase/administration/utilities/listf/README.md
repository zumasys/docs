# LISTF

**Created At:** 9/7/2018 12:03:22 PM  
**Updated At:** 10/24/2018 2:11:19 PM  
**Original Doc:** [listf](https://docs.jbase.com/46963-utilities/listf)  
**Original ID:** 338153  
**Internal:** No  

**Tags:**
<badge text='page formatting' vertical='middle' />

## Description

The jBASE **LISTF**(aka **LISTFILES**) command displays files in page format.

## 
Syntax

```
LISTF {options} {directory} {LPTR | (P}
```

If no options are specified then the display will include all files in $HOME, files accessible on $JEDIFILEPATH and all MD entries with attribute one set to either **F** or **Q**.

If **directory** is specified then only files in that path will be displayed.

Options:

**-xml** - display file details in $HOME and accessible on **$JEDIFILEPATH** as XML string.  This mode also includes **jstat**details.

**-h** | **-?** - Display a help page with examples
