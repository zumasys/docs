# jBC String Operations

<PageHeader />

**Tags:**
<badge text='substrings' vertical='middle' />
<badge text='string operations' vertical='middle' />

A substring can be extracted with the following notation:

```
substring = stringvalue[x{,y}]
```

A substring can be assigned with the notation:

```
stringvalue[x,y] = "newstring"
```

[Note that y is not optional when used in this context]

Where:

- x is the starting position
- y is specifies the substring length

If x = 0 then 1 is assumed.
If x &gt; 0 then the starting position is x.
If x &lt; 0 then the starting position is taken x characters from the end of the string.
If x &gt; LEN(stringvalue) then '' is returned regardless of the value of y.

If y is not specified then all characters starting with x up to the end of the string are returned.
If y = 0 then '' is returned.
If y &gt; 0 then y characters are extracted starting at position x. If y is greater than the remaining characters in the string then all characters up to the end of the string are returned.
If y &lt; 0 then the pointer is positioned y characters from the end of the string (i.e. LEN(stringvalue) - y + 1), and the substring is taken up to that position.

## Examples

Given the strings:

```
s = "Anyone who needs a will just isn't spending their money properly."
t = " all of "
```

```
s[1,999] returns s
s[1,-1] returns s
s[0,-1] returns s
s[1,3] returns "Any"
s[4,3] returns "one"
s[-15,-10] returns "money"
s[-15,5] returns "money"
s[999,10] returns ''
s[1,0] returns ''

s[-22,1] = t returns "Anyone who needs a will just isn't spending all of their money properly." to s.
```

## Note #1  

A substring can also be extracted with the following notation:

```
substring = stringvalue[d,x,y]
```

Where:

- d is a delimiter
- x is the initial occurrence
- y is number of delimited fields to extract  

For example:

```
a = "123-456-789"
CRT a["-",2,1]

returns "456".
```

## Note #2

> Negative substring operations are not available in all emulations. Consult your legacy manual.  

[Back to Knowledgebase](./../README.md)

<PageFooter />
