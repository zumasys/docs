# T-DUMP, ST-DUMP

<PageHeader />

## Description  

The **T-DUMP** command dumps selected file records to the tape device. The command takes the general form:

```
T-DUMP file-specifier {record-list} {selection-criteria} {sort-criteria} {USING file-specifier} {HEADING "label-text"} {(options}
```

where

- **label-text** specifies up to 44 characters of text for the tape label. If you do not use HEADING with label-text, the file-name will be written to the label.
- **options** may be:

| Option | Description |
| --- | --- |
| I | Display or suppress record ids as they are dumped |
| P | Directs output to the spooler |

Refer to the [jQL documentation](./../../jql/jbase-query-language/README.md) for explanation of the remaining syntax elements.

## Note

> - T-DUMP can only be used on the default channel.
> - T-DUMP will fail if the media has not been made write enabled.
> - The records will not be sorted unless you specify a sort criteria clause.
> - Records ids are displayed or suppressed depending upon the emulation mode.
> - T-DUMP will write an end of file mark, (EOF), on the media after dumping all selected records. See below for considerations when using T-DUMP to an operating system file.
> - ST-DUMP can be used to obtain a sorted T-DUMP  

An example of use is as:

```
T-DUMP SALES WITH S.CODE = "DEF"
```

Dumps all records with attribute, defined by S.CODE, equal to string "DEF" from SALES file.

## Considerations when using T-DUMP to an Operating System file

There is no concept of multiple End Of File (EOF) marks when using **T-DUMP** to an operating system file.

You can **T-DUMP** multiple files as long as the device is a physical device (tape, floppy, etc) rather than a file.

i.e.

```
T-ATT FILE0 DEVICE=device_name
T-DUMP DICT CUSTOMERS
T-DUMP CUSTOMERS
```

will NOT give the desired multiple **T-DUMP** to **device\_name**, however:

```
T-ATT DAT0
T-DUMP DICT CUSTOMERS
T-DUMP CUSTOMERS
```

will give the desired multiple **T-DUMP**s on the DAT tape.

If you need to T-DUMP multiple files then you require a separate file for each T-DUMP, e.g.

```
T-ATT FILE0 DEVICE=file1
T-DUMP filename1
T-ATT FILE0 DEVICE=file2
T-DUMP filename2
T-ATT FILE0 DEVICE=file3
T-DUMP filename3
...
T-ATT FILE0 DEVICE=fileX
T-DUMP filenameX
```

Back to [Tape Commands](./../tape-commands/README.md)

<PageFooter />
