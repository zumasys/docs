# jCheckSchema  

<PageHeader />

A CSV vetting utility – **jCheckSchema** – is provided to check a CSV against a source jBASE hash file. This can find errors and even correct things like field lengths.

## Syntax

```
jCheckSchema { multi-value_file} {schema_path}schema_def {ID} {options}
```

## Options

-al     ignore "undefined" for the attributes specified, where "l" should be a comma delimited list  
-c      check data integrity  
-i      interactive: prompts for changes  
-q      quiet: no progress displayed  
-rn     round column lengths up to nearest factor of "n"  
-w      disable control character warnings  
-R      report only  

Where:

**schema_def** is the CSV name.  
**Schema_path** is optional, as the CSV is typically read from the CSVdir as per jEDIdrivers.ini.  

## Example #1

```
jCheckSchema J5TEST CUSTOMER.csv -r5
```

By default jCheckSchema displays warnings on control characters. Use the -w option to suppress this behaviour.

If you plan to store multi-values in a single column (i.e. by not defining a multi-value set) you should use the -
a option so that jCheckSchema will only check the length of the values in the attribute and not warn that the multi-values have not been defined.

## Example #2

```
jCheckSchema J5PROD PRODUCT.csv -r5 -a7,11,13
```

## Note

>This utility should be run prior to CREATE-FILE for the target RDBMS as it only alters the relevant CSV record which is read in during the [CREATE-FILE](./../create-file/README.md) phase.

Back to [jEDIJDK](./../README.md)

<PageFooter />
