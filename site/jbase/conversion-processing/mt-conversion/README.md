# MT Conversion

<PageHeader />  

## Description

The MT code is used to convert time notations such as 01:40:30 or 1:30 AM between internal and external format. It takes the general form:

```
MT{H}{S}
```

where:

- **H** specifies 12-hour format. If omitted, 24-hour format will be used.
- **S** specifies that seconds are to be included.

Time is stored internally as the number of seconds since midnight. The stored value can be output in 12 hour or 24 hour (international) format.

12:00PM is defined as noon and 12:00AM is defined as midnight.

For output conversions, AM and PM designators are automatically displayed. For example: 09:40AM and 06:30PM.

## Input Conversion #1

Input conversion is valid. Generally, for selection processing you should specify MT codes in field 7 of the data definition record.

AM or PM designators are taken into account. The result of the input conversion for certain values can be affected by the [time\_is\_hours](./../../emulation/README.md) emulation setting.

### Examples

### Input Conversion #2

| Code | Input | Result |
| --- | --- | --- |
| MT | 00:00 | 0 |
| MTH | 12:00AM | 0 |
| MT | 01:00AM | 3600 |
| MT | 01:00 | 3600 |
| MTH | 01:00 | 3600 |
| MTH | 01:00AM | 3600 |
| MT | 01:00PM | 46800 |
| MTH | 01:00PM | 46800 |
| MTS | 01:00:30 | 3630 |

### Output Conversion

| Code | Source Value | Result |
| --- | --- | --- |
| MTS | 0 | 00:00:00 |
| MTHS | 0 | 12:00:00AM |
| MT | 3600 | 01:00 |
| MTH | 3600 | 01:00AM |
| MT | 46800 | 13:00 |
| MTS | 46800 | 13:00:00 |
| MTH | 46800 | 01:00PM |
| MTHS | 46800 | 01:00:00PM |

Back to [Conversion Processing](./../conversion-processing)

<PageFooter />
