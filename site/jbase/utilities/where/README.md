# WHERE

**Created At:** 9/3/2018 7:24:40 AM  
**Updated At:** 9/3/2018 7:59:45 AM  
**Original Doc:** [where](https://docs.jbase.com/46963-utilities/where)  
**Original ID:** 337528  
**Internal:** No  

**Tags:**
<badge text='display' vertical='middle' />
<badge text='output processing' vertical='middle' />

## Description

The **WHERE** utility can be used to display information on processes executing jBASE programs. It takes the general form:

```
WHERE Ports (Options
```

Where:

- **Ports** can be a range of Ports of the form Port-Port
- **options** may be any of:

| Option | Description |
| --- | --- |
| A | all ports displayed |
| N | nopage |
| P | send output to printer |
| S | display processes NOT waiting at jSHELL prompt |
| U | suppress own process from display |
| V | verbose output |

## Note

> The output of **WHERE** can be [customized](./../customizing-the-output-of-commands).

Back to [Utilities](./../utilities)
