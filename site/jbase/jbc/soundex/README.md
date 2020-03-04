# SOUNDEX

**Created At:** 9/28/2017 9:48:37 AM  
**Updated At:** 1/5/2018 6:18:33 PM  
**Original Doc:** [278812-soundex](https://docs.jbase.com/36868-jbase-basic/278812-soundex)  
**Original ID:** 278812  
**Internal:** No  

## Description

The **SOUNDEX** function allows for phonetic conversions of strings. It takes the general form:

```
SOUNDEX(expression)
```

Where:

**expression** may evaluate to any data type but the function will only give meaningful results for English words.

## Note

> The phonetic equivalent of a string is calculated as the first alphabetic character in the string followed by a 1 to 3-digit representation of the rest of the word.
>
> The digit string is calculated as:
>
> | Characters | Value Code |
> | --- | --- |
> | B F P V | 1 |
> | C G J K Q S X Z | 2 |
> | D T | 3 |
> | L | 4 |
> | M N | 5 |
> | R | 6 |
>
>
>
> All characters not contained in the above table are ignored. The function is case insensitive and identical sequences of a character are interpreted as a single instance of the character.
>
> The idea is to provide a crude method of identifying words such as last names even if they are not spelt correctly. The function is not foolproof, andshould not be the sole method of identifying a word.

An example of use is as:

```
INPUT VAR_IN
Lastname = SOUNDEX(VAR_IN)
```

Go back to [jBASE BASIC](./../README.md)
