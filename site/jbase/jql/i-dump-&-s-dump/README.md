# I-DUMP / S-DUMP

**Created At:** 6/8/2018 1:57:34 PM  
**Updated At:** 7/13/2018 10:10:06 AM  
**Original Doc:** [i-dump-s-dump](https://docs.jbase.com/46350-jql/i-dump-s-dump)  
**Original ID:** 321316  
**Internal:** No  

**Tags:**
<badge text='value mark' vertical='middle' />
<badge text='jql' vertical='middle' />
<badge text='attribute' vertical='middle' />

## Description

The command displays the entire contents of items in a file, including the system delimiters. It takes the general form:

```
I-DUMP file-specifier {record-list} {selection-criteria} {sort-criteria} {USING file-specifier}  {(options}
```

## Note

> The S-DUMP command can be used to produce sorted output.  
>
> System delimiters are denoted as follows:
>
>
> | <!----> | <!----> |
> | --- | --- |
> | Attribute mark | `^` |
> | Value mark | `]` |
> | Sub value mark | `\` |

### Example 1

```
I-DUMP EMPLOYEE WITH EMP.JOB = "SALESREP"
```

The following output is generated:

```
8499^HARRIS^TAMMY^SALESREP^8698^5400^250000^30000^90030^^^^^]11588^
8654^MCBRIDE^KEVIN^SALESREP^8698^5620^215000^140000^90030^^^^^]11639\^
8521^TAYLOR^MAVIS^SALESREP^8698^5402^219000^50000^90030^^^^^3]11500^
```

### Example 2

```
S-DUMP EMPLOYEE BY EMP.HIREDATE WITH EMP.TITLE "SALESREP"
```

The following output is generated:

```
8499^HARRIS^TAMMY^SALESREP^8698^5400^250000^30000^90030^^^^^]11588^
8521^TAYLOR^MAVIS^SALESREP^8698^5402^219000^50000^90030^^^^^3]11500^
8654^MCBRIDE^KEVIN^SALESREP^8698^5620^215000^140000^90030^^^^^]11639\^  
```

Back to [jQL](jbase-query-language-jql-)
