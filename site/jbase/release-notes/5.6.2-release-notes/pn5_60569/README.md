# PN5_60569

**Created At:** 6/13/2017 1:56:18 PM  
**Updated At:** 11/21/2017 8:57:32 PM  
**Original Doc:** [pn5_60569](https://docs.jbase.com/36526-5-6-2-release-notes/pn5_60569)  
**Original ID:** 258848  
**Internal:** No  


### Description

jQL: ICONV doesn't strip leading zeros

This patch should cause them to be stripped and affect ICONV only providing,

- It's a number
- No decimal point exists




### Previous Release Behavior

On D3 and most other platforms, ICONV will strip leading zeros, e.g.

```
CRT ICONV('01230', 'MR%5')
CRT ICONV('01230', 'ML%5')
CRT ICONV('000042', 'MR0')
CRT ICONV(000042,'MR0')
```

will output:

```
1230
1230
42
42
```

However, on jBASE, the leading zeros were not removed...

```
01230
01230
000042
000042
```



### Current Release Behavior

Should now output

```
1230
1230
42
42
```
