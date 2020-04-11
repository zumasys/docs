# MP Conversion

<PageHeader />

## Description

MP codes convert packed decimals to unpacked decimal representation for output or decimal values to packed decimals for input. It takes the general form:

```
MP
```

The MP code is most often used as an output conversion. On input, the MP processor combines pairs of 8-bit ASCII digits into single 8-bit digits as follows:

- The high order four bits of each ASCII digit are stripped off.
- The low order four bits are moved into successive halves of the stored byte.
- A leading zero will be added (after the minus sign if present) if the result would otherwise yield an uneven number of halves.
- Leading plus signs (+) are ignored.
- Leading minus (-) signs are stored as a four-bit code (D) in the upper half of the first internal digit.

When displaying packed decimal data, you should always use an MP or MX code. Raw packed data is almost certain to contain control codes that will upset the operation of most terminals and printers.

## Input Conversion

Input conversion is valid. Generally, for selection processing you should specify MP codes in field 7 of the data definition record.

### Examples

`OCONV -1234 "MP"`

yields 0x D01234

`ICONV 0x D01234 "MP"`

yields -01234

Back to [Conversion Processing](./../conversion-processing)

  
<PageFooter />
