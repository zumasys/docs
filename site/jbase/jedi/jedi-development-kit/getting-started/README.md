# jEDIDK - Getting Started

<PageHeader />

The first step in migrating a jBASE hash file to an RDBMS table using the jEDIDK is to create a comma-separated-value (CSV) record to map each attribute/multi-value/sub-value data entity to a corresponding column in an RDBMS table. The CSV map essentially defines the column names that will be used to represent the attributes in the original multi-value record and the transformation from a dynamic array to a “row” in an RDBMS table.

Please refer to the section CSV Definition for full details on the CSV layout.

e.g. if you have a CUSTOMER file with a record as follows:

```
0001
<1> Holmes
<2> Sherlock
<3> 221B]Baker Street]London
```

You will need the following definitions:

1. A key (for 0001)
2. A surname (Holmes)
3. A first name (Sherlock)
4. An address definition (221B]Baker Street]London)

We will dissect attribute 3 in more detail later but for example these definitions could be represented using the names:  

0. CUSTOMER_NBR
    1. SURNAME
    2. FIRSTNAME
    3. <Address definition>
       1. STREET_NBR
       2. STREET_NAME
       3. CITY

An example CSV format would look like this:  

```
001 CUSTOMER_NBR,0,10,AN,,,1,,,
002 SURNAME,1,50,A,,,1,,,
003 FIRSTNAME,2,50,A,,,0,,,
004 STREET_NBR,3,10,AN,,,,1,,
005 STREET_NAME,3,50,AN,,,,2,,
006 CITY,3,50,A,,,,3,,
```

As you can see, each definition starts with the column name followed by the attribute number (0 for the key), a length, a type (these will be explained later) and a few other CSV parameters.  
Now let’s look at the address portion of the above example.  

```
<3> 221B]Baker Street]London
```

In a multi-value database this is not uncommon to store an entire address on a single attribute. However, this is not a “one-to-many” relationship. There are (in this case) clearly designated fields:  

1. Street number
2. Street name
3. City

These are non-repeating multi-values or positional values. So instead of specifying a separate “MV Set” table, multi-value positions are used (i.e. 1, 2, 3) in the V-pos field. In this way the address line is essentially flattened out into imaginary attributes and mapped to columns in the same table as SURNAME and FIRSTNAME. From a jBASE perspective they still appear as 3 multi-values in attribute 3 but in the RDBMS they are 3 columns in a table.  

It is possible to have multi-value addresses using the above example: i.e. 3 sub-values for street number, street name and city which are then repeated in a multi-value group. In this case all you need to do is specify a MV set name (e.g. ADDRESS) to create a sub-table (e.g. CUSTOMER#ADDRESS).  

To assist in the creation of each CSV map a GUI designer – JEDI_CSV.exe – is provided with a built-in Generate command to take standard dictionaries from a multi-value file and populate the CSV definition.  

If you already have a definition for your files (e.g. in a separate file or perhaps in the dictionary as non-dictionary items) it may be better to utilise that rather than generating CSVs from standard dictionaries if your dictionaries are not “clean” i.e. one A or D type for each attribute and S and I/V types for synonyms.  
In other words write a program to read through your definitions and generate the resulting CSV definitions.  

Once you have created your CSV it is recommended to check the CSV against the original data source (assuming there is one) before you create a jEDIDK version of the file. A program is provided – jCheckSchema – to automate this process.  

Once this is done you are ready to create a file using the jEDIDK.

e.g. CREATE-FILE CUSTOMER TYPE=OLESQ

Back to [jEDIJDK](./../README.md)

<PageFooter />
