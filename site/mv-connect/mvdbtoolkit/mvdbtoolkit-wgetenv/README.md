# MVDBTOOLKIT.WGETENV

<PageHeader />

MVDBTOOLKIT.WGETENV will read in O/S environment variables.  

## Usage

Command

MVDBTOOLKIT(ENVVARIABLE,VALUE)

| Param | Description |
| ----  | ----------- |
| ENVVARIABLE | Environment variable you wish to retrieve |
| VALUE | Environmant Variable value |

### Example

```BASIC
CALL MVDBTOOLKIT.WGETENV("PATH",PATH)
PRINT PATH

```

</PageFooter>
