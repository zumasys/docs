# Indexes APPENDIX A

**Created At:** 8/16/2018 1:51:28 PM  
**Updated At:** 9/26/2018 10:54:52 PM  

**Tags:**
<badge text='index definitions' vertical='middle' />
<badge text='file indexing' vertical='middle' />

This appendix deals with the description of how to build the index key from the record data. The syntax of the index definition can be summarised as:

```
by-expr sort-def {by-expr sort-def {by-expr sort-def }}
```

Where **by-expr** is one of BY , BY-AL , BY-DL , BY-AR or BY-DR and sort-def will be described later. Each **by-expr** causes another sort sequence in the index key. Consider the following example:

```
create-index filename indexname BY 3 BY 2
```

The means the index key will be made up from attribute 3 of the record , a 0xff delimiter, and finally attribute 2 of the record. The index data will be sorted by attribute 3. Where there are cases when attribute 3 is the same as previous index keys, it will be further sorted by attribute 2.

The keywords by,by-al,by-dl,by-ar and by-dr are all case insensitive.

- BY means the sort sequence is ascending left justified.
- BY-AL same as BY and means the sort sequence is ascending left justified.
- BY-DL means the sort sequence is descending left justified.
- BY-AR means the sort sequence is ascending right justified.
- BY-DR means the sort sequence is descending right justified.


When a sort sequence is described as right justified then this takes on the same meaning as it does in jQL commands such as LIST and SELECT, i.e. it assumes numeric data. Therefore right justified fields will be sorted numerically and left justified fields sorted textually. In the event that a right justified field contains a null string or non-numeric data, then the sort sequence will be the same as jQL command and have the following precedence:

- Fields that contain entirely numeric values
- Fields that are an empty zero length string
- Fields that begin with a numeric value and then are followed by non-numeric
- Fields that are one or more bytes and are not numeric.


The "sort-def" definition mentioned earlier is the description of how an individual sort sequence is defined. The "sort-def" can be one or more extract definitions , each definition being delimited by a colon. Each sort-def definition is concatenated to each other. For example:

```
by 3 : 4 : 5 by-dr DATE
```

means the index key is made up as follows:

- attribute 3 from the record concatenated with attribute 4 from the record concatenated with attribute 5 from the record concatenated with a 0xff delimiter between the sort sequence
- attribute NN from the record, where NN is described the in DICTionary item DATE.


When the index key is added to the index data, the key will be sorted , in ascending left justified sequence, by the first sort sequence , attributes 3 , 4 and 5. If there are duplicate keys then it is further sorted in descending right justified sequence by attribute NN from the record where NN is described in the DICTionary item.

Note that when using DICTionary items to describe what attribute number to extract the index definition simply extracts the attribute number and forgets the DICTionary name. This way the index remains logically consistent even if the DICT record is later amended. The "sort-def" definition can be more than a simple attribute number. It can be any of the following types.

- Numeric - extracts attribute "Numeric" from the record. If the numeric value is 0 then this means the record key.
- Numeric.Numeric - extracts a specific multi-value from a specific attribute. For example 4.3 shows to extract multi-value 3 from attribute 4.
- OCONV(field , "code") - causes an output conversion to be applied to the defined "field" The conversion to apply is any that can be applied with the OCONV function in jBC code. The "field" is defined using one of the above mentioned definitions of "Numeric" or "Numeric.Numeric".
- CALL(field,"subname") - allows a normal jBC subroutine to be called.
- "STRING" -  a string constant may be specified.


When an index definition is created using the create-index command, a description of how the index key is to be built must be specified. Below is an example of a basic index definition such that the index key is created from attribute 4 of the record:

```
create-index CUSTOMERS CUST-NAME BY 4
```

CUSTOMERS is the name of the file and CUST-NAME is the name of the index definition.

As a more complex example, consider:

```
CREATE-INDEX CUSTOMERS BY 3.1 : "*" : 2.1 BY-AR 4
```

which creates an index key with two sort sequences. The first sort sequence is in ascending left justified with multivalue 1 of attribute 3 concatenated with an asterisk and then concatenated with multivalue 1 of attribute 2. The second sort sequence is an ascending right (e.g. numeric) sequence on the fourth attribute. This index could be, for instance, a customers surname , and asterisk and a customers first name. In the event that two or more customers with the same name exist, it will be further sorted by their date of birth.

Another example would be the use of the CALL function as:

```
create-index -lD -n CUSTOMERS by-ar CALL(3,"TESTDATE")
```

In this scenario, attribute 3 will be extracted from the record and passed to a user-written subroutine call TESTDATE. This subroutine can amend the index key from what it was passed (e.g. attribute 3) to whatever it likes. We will assume the purpose of this subroutine is to test the attribute passed to it, and if it was a numeric, assume it is a date field and check the date is inside a range. If the date is okay, it passes back attribute 3 . If not, it passes back a null string.

- The use of the **-n** option means any null index keys will not be stored in the index data. Hence when used in conjunction with the subroutine, it is a way of using a user-written subroutine to decide what records to put in the index data.
- The use of **by-ar** further shows that all index keys (in this case non- null keys) will be stored in ascending right justified fashion, e.g. as a numeric sort.
- The use of the **-lD** option shows that when an enquiry is made of the index via query-index , key-select or the jQL commands such as LIST or SELECT, then the string to search for will first of all be converted using an input conversion of type "D". This is primarily used so that these commands can use date (or times) in external format (e.g. 23-jul-1970) but will be compared numerically as internal values against the index data.

