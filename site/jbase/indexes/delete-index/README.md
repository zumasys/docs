# DELETE-INDEX

<PageHeader />

## Description

The DELETE-INDEX command deletes indexes on jBase files

```
delete-index -Options filename { {indexname {indexname ...}} | * }
```

Where Options can be:

| Option | Description |
| --- | --- |
| -a | delete ALL indexes in the file |
| -S | silent option |

This command is called to delete one or more index definitions that are associated with a file. All the space taken by the index is released to the file overflow space (but not necessarily the operating system file free space).

Option **-a** causes all index definitions to be deleted. Without option -a you need to specify one or more index name on the command line.

Example: Delete ALL the index definitions for file PRODUCTS

```
jsh --> DELETE-INDEX -a PRODUCTS
jsh --> DELETE-INDEX PRODUCTS *
```

Example: Delete the index name "value" in the file PRODUCTS

```
jsh --> delete-index PRODUCTS value
```

Back to [Indexes](./../README.md)
