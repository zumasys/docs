## Millennium Editor Settings (ME.CONTROL)
<PageHeader />

##

![](./ME-CONTROL-1.jpg)

| **ID**|  The record ID of ME is automatically entered into this field.

-  
**Key**|  Enter the number corresponding to the function key you want to use
to invoke the associated text insert in the millennium editor. For example,
enter the number 1 for the F1 key. The function key must be used in conjuction
with the Ctrl key. In this example the insert would be invoked using Ctrl+F1.

**Text Description**|  Enter the description of the associated insert text to
be displayed in the editor pull down window.

**T$X59**|  Enter each line of text that is to be inserted when the associated
function key number is pressed. To include the current date as part of the
text enter a left curly brace ({) followed by the word date, followed by a
comma, followed by the date conversion to be applied, followed by a right
curly brace (}). For example, {date,D2-} will insert a date with a two digit
year. {date,D4-} will insert a date with a four digit year.


<badge text= "Version 8.10.57 " vertical="middle" />

<PageFooter />
