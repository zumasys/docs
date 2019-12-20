# Tfile Conversion

**Created At:** 6/8/2018 1:49:14 PM  
**Updated At:** 7/13/2018 1:21:29 PM  
**Original Doc:** [tfile-conversion](https://docs.jbase.com/46351-conversion-processing/tfile-conversion)  


## Description 

Tfile codes provide a method for retrieving data fields from any other file to which the user has access. It is as:

```
T[*|DICT]file-specifier;c{n};{i-fmc};{o-fmc}
```

where:

- **\***or DICT indicates that the dictionary of the specified file is to be used, rather than the data section.
- **file-specifier** identifies the reference file by name in the format file-name{,data-section-name}.
- **c**specifies a translation code. Can be any one of the following:



| C<br> | If reference record does not exist or the specified FMC is null, output the value unchanged.<br> |
| --- | --- |
| I<br> | Input verify. Functions as a C code for output and as a V code for input.<br> |
| O<br> | Output verify. Functions as a C code for input and as a V code for output.<br> |
| V<br> | Reference record must exist and the specified FMC must contain a translatable value. If the record does not exist or the FMC contains a null, an error message will be output.<br> |
| X<br> | If reference record does not exist or the specified FMC is null, return a null.<br> |


- **n**specifies a value mark count to return one specific value from a multivalued field. If omitted, all values are returned.
- **i-fmc** is the field number for input translation. If omitted or the value is null, no input translation takes place.
- **o-fmc**is the field number for output translation. If the value is null, no output translation takes place.




The current data value is used as the record key for searching the specified reference file if it also has a 0 in field 2. Any positive number in field 2, will cause the content of that field from the current record to be used as the key when accessing the reference file.

A data field, or a single value from a data field, is returned from the record.

Tfile codes can be used in fields 7 or 8 of the data definition record. Use field 8 if translation of a multivalued field or comparisons and sorts are required.

If selection criteria might be applied, you can either use field 8, or you can use field 7 and set up special records in the reference file to perform any input translation you require.

The special records in the reference file have as record keys values that the field subject to translation may be compared with in a jQL sentence. Field i-fmc within these records contains the translate value that will be compared to values on file. Typically, values in a jQL sentence are output values, so that the special input translation records are effectively the inverse of the output translation records.

Tfile codes can be "embedded" in other conversion codes but you must still follow the syntactical conventions of the "host" code. For example, if you include a Tfile code in an F code conversion, the Tfile code must be enclosed in parentheses.



## Input /output conversion

Output conversion is valid. The Tfile code has a parameter (o-fmc) that specifies the field in the translation record to use for output conversion.

Input conversion is valid. The Tfile code has a parameter (i-fmc) that specifies the field in the translation record to use for input conversion.



### EXAMPLE 1

```
TSALES;X;;2
```

Using this Tfile code in field 8 of a data definition record, which also has a 0 in field 2, will cause the key of the current record to be used as the key when accessing the reference file SALES. If the record cannot be found, a null will be returned. If the record is found, the value of field 2 will be returned.



### EXAMPLE 2

```
TSALES;C;;2
```

Using this Tfile code in field 8 of a data definition record, which also has a 6 in field 2, will cause the content of field 6 from the current record to be used as the key when accessing the reference file SALES. If the record cannot be found, or if found, field 2 is null, the content of field 6 of the current record will be returned. If the record is found, and field 2 contains a value, that value will be returned.



### EXAMPLE 3

```
A;3(TSALES;X;;2)
```

Using this embedded Tfile code in field 8 of a data definition record will cause field 3 of the current record to be used as the key when accessing field 2 of the reference file SALES. If the record cannot be found a null will be returned. If the record is found, the value of field 2 will be returned.



Back to [Conversion Processing](321577-conversion-processing)
