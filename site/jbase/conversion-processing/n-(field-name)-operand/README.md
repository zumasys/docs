# N (Field Name) Operand

<PageHeader />

**Tags:**
<badge text='field operand' vertical='middle' />
<badge text='jql' vertical='middle' />

## Description

References another field defined by name in the same dictionary or found in one of the default dictionaries. It takes the general form:

```
N(field-name){R{R}}
```

where:

- **field-name** is the name of another field defined in the same dictionary or found in the list of default dictionaries (see the JBCDEFDICTS environment variable).
- **R** specifies that the value obtained from this field is to be applied repeatedly for each multivalue not present in a corresponding part of the calculation.
- **RR** specifies that the value obtained from this field is to be applied repeatedly for each subvalue not present in a corresponding part of the calculation.

Any pre-process conversion codes in the specified **field-name**, including any further N(**field-name**) constructs are processed as part of the conversion code. N(**field-name**) constructs can be nested to 30 levels. The number of levels is restricted to prevent infinite processing loops. For example:

```
TEST1
008 A;N(TEST2)
```

```
TEST2
008 A;N(TEST1)
```

## Note

> If the data definition record of the specified field contains field 8 pre-process conversion codes, these are applied before the value(s) are returned.

### Examples

```
A;N(S.CODE)
```

Returns the value stored in the field defined by S.CODE.

```
A;N(A.VALUE) + N(B.VALUE)R
```

For each multivalue in the field defined by A.VALUE, the system also obtains the corresponding value in B.VALUE and adds it. If A.VALUE returns 1]7 and B.VALUE returns 5, the result would be two values of 6 and 12 respectively.

```
A;N(A.VALUE) + N(B.VALUE)RR
```

For each subvalue in the field defined by A.VALUE, the system also obtains the corresponding value in B.VALUE and adds it. If A.VALUE returns 1\2\3]7 and B.VALUE returns 5, the result would be four values of 6, 7, 8 and 12 respectively.

Back to [A-Corelatives](./../a-correlatives)

  
<PageFooter />
