# Using Regular Expressions With Indexes

**Created At:** 8/16/2018 1:40:11 PM  
**Updated At:** 5/16/2019 6:15:46 PM  
**Original Doc:** [334526-using-regular-expressions-with-indexes](https://docs.jbase.com/48152-indexes/334526-using-regular-expressions-with-indexes)  
**Original ID:** 334526  
**Internal:** No  

**Tags:**
<badge text='indexes in queries' vertical='middle' />
<badge text='file indexing' vertical='middle' />

Regular expressions are the name given to a set of pattern matching characters. The term derived from Unix environment. The regular expressions can be used to great effect using the [query-index](./../query-index) command to decide what records to select. A full description of regular expressions can be obtained on Unix systems by entering the command:

``` bash
% man 8 regexp
```

For Windows systems only a limited subset of regular expressions are available. The following characters inside a regular expression have special meaning:

| Character  | Meaning |
| --- | --- |
| **^** | The text must match the start of the record key. |
| **$** | The text must match the end of the record key |
| **.\*** | Any number of characters of any value may follow |
| **\x** | This escapes the character x meaning it just evaluates to x. This is useful if you want to include say the ^ character as part of your text string rather than a character with special meaning. |

For example, on either a Unix or Windows/NT system you could use [key-select](./../query-index) to find a product description that has the text SLIPPER at the start of the description. This can be done using the jQL format ,with say the SELECT command or by using regular expressions. The two methods are therefore:

```
jsh --> key-select -mJQL PRODUCTS IF description EQ "SLIPPER]"
```

```
jsh --> key-select -mREGEXP PRODUCTS if description EQ "^SLIPPER"
```

As a more complicate regular expression, the following example looks for a product that begins with the string BIG , has the words RED somewhere in the text, and then must end with the words ENGINE:

```
jsh --> query-index -mREGEXP PRODUCTS "^BIG.*RED.*ENGINE$"
```

The Unix implementation uses the operating system supplied version of regular expressions and these are far more powerful than the jBASE supplied version of regular expressions on Windows systems. As already mentioned , use man 5 regexp to find more details.

An example of use would be looking for a product description that begins with the words PIPE , any number of spaces, then one or more numeric characters follow (including optionally a decimal point), any number of spaces, and finally the characters "mm" , which are case insensitive. The command would be as:

```
jsh -->query-index -mREGEXP PRODUCTS EQ "^PIPE *[0-9\.][0-9\.]*[mM][mM]$"
```

to output:

```
PIPE 5 mm
PIPE15MM
PIPE 33.3 mm
```

Back to [Indexes](./../README.md)
