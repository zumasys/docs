# Using Clause  

<PageHeader />

The using clause specifies a dictionary file, which is the source of data definition records.  

## Syntax  

```
USING {DICT} filename {,data-section-name}
```

### Sytax Elements  

- **USING** specifies the use of the named file as the dictionary for the data file.
- **DICT** specifies that the dictionary of filenames be used.  
- **filename** names a file. If the **DICT** modifier is not specified, it will use the data section of the file.  
- **data-section-name** specifies a secondary data section of the file with a name different from the dictionary; it must follow **filename**, separated by a comma but no space.

### Note  

>There can be only one USING clause in a jQL sentence  
  
One main advantage of the **USING** clause is that you can share a dictionary between several files where, for example, there are common data definition records.

### Example

```
SORT ORDER USING DICT ORDER
```

The data definition records in the dictionary of the file ORDER (DICT ORDER) is used to access File ORDER

Back to [jQL Keywords and Connectives](./../README.md)  

<PageFooter />
