# PROMPT

**Created At:** 9/22/2017 2:29:31 PM  
**Updated At:** 11/27/2018 9:15:45 AM  
**Original Doc:** [277639-prompt](https://docs.jbase.com/36868-jbase-basic/277639-prompt)  
**Original ID:** 277639  
**Internal:** No  

**Tags:**
<badge text='terminal input' vertical='middle' />

## Description

Used to change the **PROMPT** character used by terminal input commands. It takes the general from:

```
PROMPT expression
```

Where **expression** can evaluate to any printable string.

The entire string will be used as the prompt.

The default prompt character is the question mark (**?**).

An example of use is as:

```
PROMPT "Next answer: "
INPUT Answer
```

Go back to [jBASE BASIC](./../README.md)
