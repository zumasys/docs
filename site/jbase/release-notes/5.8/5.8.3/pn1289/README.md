# PN1289

<PageHeader />

## Description

Floating point numbers that are real IEEE 64 bit floating point numbers can sometimes be converted to scientific notation. This problem is not related to normal MV floating point numbers, which are usually scaled integers.

## Previous Release Behavior

IEEE Floating point numbers are converted to scientific notation if they are large numbers or small numbers. For example:

```
    ANS = FMUL(100000,100000)
    CRT ANS
    ANS = FMUL(0.0001,0.0001)
    CRT ANS
```

Gives the output:

```
1E+10
1E-08
```

This means that if this is stored in a record or otherwise re-used, the value will become non-numeric as there is nothing else in jBASE which supports scientific notation.

## Current Release Behavior

The output is always a string of numeric characters (and + , - , .)

The above example now displays as:

```
10000000000
0
```

Notice how the last value has become 0. This is because we now use the current PRECISION value to determine the number of characters after the decimal point, and by default that is 4, which is insufficient to display the small number. 

If we change the program to have a different PRECISION, it becomes this:

```
    PRECISION 12
    ANS = FMUL(100000,100000)
    CRT ANS
    ANS = FMUL(0.0001,0.0001)
    CRT ANS
```

Gives the output:

```
10000000000
0.00000001
```

## Note

>Should the original, incorrect behavior be required, please set/export JBC_FLOAT_OLD_CONVERSION=1

Back to [5.8.3 Release Notes](./../README.md)

<PageFooter />
