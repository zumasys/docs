# LISTF

<PageHeader /> 

**Tags:**
<badge text='page formatting' vertical='middle' />

## Description

The jBASE **LISTF** (aka **LISTFILES**) command displays files in page format.

## Syntax

```
LISTF {options} {directory} {LPTR | (P}
```

If no **options** are specified then the display will include all files in $HOME, files accessible on $JEDIFILEPATH and all MD entries with attribute one set to either **F** or **Q**.

If **directory** is specified then only files in that path will be displayed.

| Option | Description |
| --- | --- |
| -xml | display file details in $HOME and accessible on **$JEDIFILEPATH** as XML string.  This mode also includes **jstat** details. |
|-h or -? | Display a help page with examples |

Back to [Tools and Utilities](./../README.md)

<PageFooter />
