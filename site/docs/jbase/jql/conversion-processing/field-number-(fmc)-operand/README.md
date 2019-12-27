# Field Number (FMC) Operand

**Created At:** 6/12/2018 7:58:15 AM  
**Updated At:** 6/12/2018 2:50:10 PM  
**Original Doc:** [321523-field-number-fmc-operand](https://docs.jbase.com/46351-conversion-processing/321523-field-number-fmc-operand)  
**Original ID:** 321523  
**Internal:** No  


## Description

Specifies a field which contains the value to be used. It takes the form:

```
 field-number{R{R}}
```

where:

- field-number is the number of the field (FMC) which contains the required value.
- R specifies that the value obtained from this field is to be applied repeatedly for each multivalue not present in a corresponding part of the calculation.
- RR specifies that the value obtained from this field is to be applied repeatedly for each subvalue not present in a corresponding part of the calculation.




## Note: 


> The following field numbers have special meanings:
> 
> - 0 - Record Key
> - 9998- Sequential record count
> - 9999 Record size in bytes




### EXAMPLES 

```
A;2
```

Returns the value stored in field 2 of the record.

```
A;9999
```

Returns the size of the record in bytes.

```
A;2 + 3R
```

For each multivalue in field 2 the system also obtains the (first) value in field 3 and adds it. If field 2 contains 1]7 and field 3 contains 5 the result would be two values of 6 and 12 respectively. Where 3 does not have a corresponding multivalue, the last non-null multivalue in 3 will be used.

```
A;2 + 3RR
```

For each subvalue in field 2 the system also obtains the corresponding subvalue in field 3 and adds it. If field 2 contains 1\2\3]7 and field 3 contains 5\4 the result would be five values of 6, 6, 7, 12 and 4 respectively.



Back to [A-Correlatives](./../a-correlatives)
