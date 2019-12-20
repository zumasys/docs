# WHERE 

**Created At:** 9/3/2018 7:24:40 AM  
**Updated At:** 9/3/2018 7:59:45 AM  
**Original Doc:** [where](https://docs.jbase.com/46963-utilities/where)  

**Tags:**
<badge text='display' vertical='middle' />
<badge text='output processing' vertical='middle' />

## Description 

The **WHERE**utility can be used to display information on processes executing jBASE programs. It takes the general form:

```
WHERE Ports (Options
```

Where:

- Ports can be a range of Ports of the form Port-Port
- options may be any of:



| Option<br> | Description<br> |
| --- | --- |
| A<br> | all ports displayed<br> |
| N<br> | nopage<br> |
| P<br> | send output to printer<br> |
| S<br> | display processes NOT waiting at jSHELL prompt<br> |
| U<br> | suppress own process from display<br> |
| V<br> | verbose output<br> |




## Note: 


> The output of WHERE can be [customized](customizing-the-output-of-commands).

