# COPY-LIST

**Created At:** 7/9/2018 12:27:05 PM  
**Updated At:** 7/13/2018 9:24:41 AM  

**Tags:**
<badge text='jql' vertical='middle' />
<badge text='lists' vertical='middle' />

## Description 

Copies a saved list to another list or to another file. It takes the general form:

```
COPY-LIST {from_listname} {from_accountname} {(options} TO: {to_spec}
```

where:

- **from\_listname** specifies the source list. If you do not specify from\_listname, the default list will be used.
- **from\_accountname** specifies the source account if different to the current account.
- **to\_spec** specifies the destination list. Can be:


```
{to_listname} {to_accountname}
```

or

```
({DICT }to_filename {to_record_key}
```

Use the first variant if attempting to copy the list or change the account it's attached to. Use the second variant attempting to copy the list to a data file. Each key becomes a separate field in the list record. Note use of the left parenthesis before to\_filename.

- If  to\_spec is unspecified, the list will be copied to the default list.
- option may be:



| Option<br> | Description<br> |
| --- | --- |
| O<br> | overwrite destination list or record if it already exists<br> |
| D<br> | delete source list after successfully copying it<br> |
| L<br> | synonymous with S option<br> |
| N<br> | suppresses auto paging. Only used with T<br> |
| P<br> | sends the list to the printer<br> |
| S<br> | suppresses line numbers. Only used with T or P.<br> |
| T<br> | sends the list to the screen.<br> |
| X<br> | outputs in hexadecimal notation; only used with T or P<br> |




### EXAMPLE 1

```
:COPY-LIST A.SALES (O
TO: B.SALES
List "A.SALES" copied to "B.SALES"
```

Copies A.SALES (a previously saved list) to B.SALES, and overwrites if necessary.



### EXAMPLE 2

```
:COPY-LIST A.SALES
TO: A.SALES ACCOUNTS
List "A.SALES" copied to "A.SALES ACCOUNTS"
```

Copies A.SALES (a previously saved list belonging to the current account) to A.SALES, and marks it as belonging to the ACCOUNTS account.



### EXAMPLE 3

```
:COPY-LIST A.SALES
TO: (SALES.LISTS APRIL.SALES
List "A.SALES" written to record "APRIL.SALES" in file "SALES.LISTS"
```

Copies A.SALES (a previously saved list) to record APRIL.SALES, in file SALES.LISTS.

### 


See also [list storage](325913-list-storage).

Back to [List Processing](325912-list-processing)
