# QUERY-INDEX

**Created At:** 8/16/2018 1:57:01 PM  
**Updated At:** 8/31/2018 11:53:22 AM  
**Original Doc:** [query-index](https://docs.jbase.com/48152-indexes/query-index)  
**Original ID:** 334558  
**Internal:** No  

**Tags:**
<badge text='key-select' vertical='middle' />
<badge text='jql' vertical='middle' />
<badge text='records' vertical='middle' />
<badge text='file indexing' vertical='middle' />

## Description 

This command allows you to select or count a list of record keys. It is called as:

```
query-index -Options filename index_name
```

```
query-index -Options filename {IF/WITH} iname {Op} "startpos"
```

```
query-index -Options filename {IF/WITH} iname {Op} "startpos" {AND} {Op} "endpos"
```

where Op can be:

- LT &lt; less than ,
- LE &lt;= less than or equal
- GT &gt; greater than
- GE &gt;= greater than or equal to


and Options can be:


| Option<br> | Description<br> |
| --- | --- |
| -c<br> | COUNT the records (default is to select records)<br> |
| -inn<br> | Indexes used restricted to approx. nn indexes<br> |
| -mTYPE<br> | Match algorithm - type is: "REGEXP" or "JQL" or "DEFAULT"<br> |
| -rnn<br> | Record count restricted to approx. nn records<br> |




It is important to note that file updates that cause a change to an index will wait for a query-index to complete.

The first structure of the query-index command allows for selection of all record keys sorted by the index definition. For example, to select all customers sorted by their last name:

```
jsh->query-index CUSTOMERS lastname
```



The second structure of the query-index command allows for specifying a single conditional parameter, making this query less than, greater than etc. to the parameter. If LT,GT,etc are unspecified, it defaults to equals. For example, select all customers whose name begins with "KOOP"

```
jsh->QUERY-INDEX CUSTOMERS IF lastname "KOOP"
```

Note that in this case the double quotes will be ignored , as would single quotes. The IF token is a throwaway token, and is used simply for clarity. WITH can also be used to the same effect.

Another example is to select all customers whose date of birth is before 25 July 1956

```
jsh->QUERY-INDEX CUSTOMERS WITH dob LT 25-JUL-1956
```



The third structure of the query-index command allows for specifying a range of values. This means the operators must be either GT or GE followed by LT or LE. If the operators are not specified the command defaults to GE and LE.

Example: Count all the customers whose last order was placed between 19-DEC-1996 and 23-DEC-1996 inclusively.

```
jsh->query-index -c CUSTOMERS IF order.date >= "19-DEC-1996" and <= "23-DEC-1996"
```

Option **-c** means a count of record keys is done instead of producing a select list.

Option **-m** allows the pattern matching algorithm to be changed :

When the command is performing its test, it does so using a simple string or numeric test. To make the test more akin to say a jQL command, then one would use the -mJQL option. For example, selecting all customers whose name ends in PATEL:

```
jsh-> query-index -mJQL CUSTOMERS IF lastname EQ "[PATEL"
```

Similarly -mREGEXP to use a pattern matching algorithm called "Regular Expressions". This allows complicated patterns to be searched for. See the "Regular Expressions" chapter in this document. As an example, the following command will select all products whose description begins with the letter A is followed by any number of characters before the sequence PIPE is found:

```
jsh-> query-index -mREGEXP PRODUCTS IF description EQ "^A.*PIPE"
```

Option **-i** can be used to restrict the number of indexes used to create the list of record keys. This can be useful to restrict a search to a smaller subset.

Option **-r** is similar to -i except it restrict the number of record keys.
