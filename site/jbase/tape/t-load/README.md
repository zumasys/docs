# T-LOAD

<PageHeader />

## Description

The **T-LOAD** command selectively loads records from a tape device formatted in dump format by the [T-DUMP](./../t-dump) command. The command has the general form:

```
T-LOAD file-specifier {record-list} {selection-criteria} {USING file-specifier} {(options}
```

where option may be:

| Option | Description |
| --- | --- |
| I | Suppress or display the record ids as they are loaded. |
| O | Overwrite existing records of the same id. |
| P | Direct output to the spooler. |

Refer to the [jQL documentation](./../../jql/README.md) for explanation of the remaining syntax elements.

## Note

> **T-LOAD** can only be used on the default channel. Records ids are displayed or suppressed depending upon the emulation mode.

An example of use may be as:

```
T-LOAD SALES WITH S.CODE EQ "DEF]"
```

Loads all records with first three characters of attribute, defined by S.CODE, equal to string "DEF" into file SALES. Do not overwrite any existing record ids.

Back to [Tape Commands](./../tape-commands/README.md)

<PageFooter />
