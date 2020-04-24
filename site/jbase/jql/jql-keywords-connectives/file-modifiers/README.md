# File Modifiers  

<PageHeader />

As described below, file modifiers DICT, ONLY, WITHIN and TAPE modify the use of the file, and how it is accessed  

## Syntax Elements

```
{DICT} {ONLY} {WITHIN} {TAPE} filename{,data-section-name}
```

| <!----> |  <!----> |  
| --- | --- |  
| DICT | Specifies the dictionary section of the file and contains the data for referencing. You must type the modifier DICT before the filename. When modifying a filename by the DICT the processor looks in the MD for attribute and macro definition items. |  
| ONLY | Specifies that only item-ids are to be output and suppress any default output contents. You can type the modifier ONLY before filename or following all clauses, which contain attribute names. |  
| WITHIN | Specifies a sublist such as bill of material items. Use WITHIN only with the LIST and COUNT verbs and must precede filename. Specify one item-id only; if you enter more than one item-id, it displays an error message. |  
| TAPE | Tells the processor to retrieve data from a magnetic tape, which written only in a T-DUMP format. This modifier cannot be used with the sorting verbs such as SORT and ST-DUMP, nor with tape output verbs, such as T-DUMP, nor with the updating verb EDELETE |  
| filename | Specifies a dictionary section and a data section |
| data-sectionname | Specifies a data section other than the data section called filename. It must follow filename and use a comma with no spaces for separation. |  

Back to [jQL Keywords and Connectives](./../README.md)

<PageFooter />
