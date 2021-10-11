# DELETE

<PageHeader />

The jBASE DELETE command allows the user to delete specific or selected records from a given file.  
The DICT keyword can be used to specify that the record or records should be deleted from the dictionary file.

## Command Syntax

```
DELETE {DICT} filename{,section} {recordlist}
```

## Syntax Elements

**filename** is the name of a valid file. The file type must be one of the supported jBASE file types. If the file type supports separate data and dictionary files, the DICT keyword may be used to delete from the dictionary file.

**section** is the name of the mutliple data section, if specified.

**recordlist** is the list of record identifiers to be deleted. If **recordlist** is omitted then the active SELECT list, if present, is used.

## Examples

```
DELETE File1 Record1
```

Deletes record Record1 from the file File1.

```
GET-LIST DeleteList
DELETE File1
```

Deletes all records from File1 that match the record ids contained in the active select list.

Back to [Files](./../README.md)

<PageFooter />
