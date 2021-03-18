# MV-ETL Toolkit Data Mapping and ETL Tools

<PageHeader />

## Table of Contents

- [MV-ETL Toolkit Data Mapping and ETL Tools](#mv-etl-toolkit-data-mapping-and-etl-tools)
  - [Table of Contents](#table-of-contents)
  - [Overview](#overview)
    - [System Analyzer](#system-analyzer)
    - [Data Mapping](#data-mapping)
    - [Extraction](#extraction)
  - [Files Required](#files-required)
  - [Software Modules Used](#software-modules-used)
  - [Configuration Options](#configuration-options)
    - [ANALYZE.JSON](#analyzejson)
    - [MAPPING.JSON](#mappingjson)
    - [EXTRACT.JSON](#extractjson)
  - [Associative Multivalue Variance Percentage](#associative-multivalue-variance-percentage)
  - [File Multivalue Associations](#file-multivalue-associations)
  - [Parent/Child Child/Parent Relationships](#parentchild-childparent-relationships)
    - [Exporting Subvalues](#exporting-subvalues)
  - [Data Cleansing](#data-cleansing)

## Overview

The MV-ETL Toolkit data mapping and ETL tools provide a uniform approach of discovering and extracting MultValue data regardless of the flavor of the underlying database.  The tools are multivalue flavor and operating system agnostic, and are integrated into the _[MVConnect](https://docs.zumasys.com/mv-connect/)_ application suite. The tools provide metadata templating capabilities for various applications regardless of the business sector out of the box.

Use cases for the MV-ETL toolkit can be:

- Business Intelligence data needs (The tools are also Business Intelligence application agnostic)
- Data Migrations
- Custom batch extracts
- Preparing data mapping for API endpoints

Mapping and extraction require a multiple phase process consisting of:

- Execution of the system analyzer to assist the customer in the scoping of the accounts and files to be mapped and extracted
- Import of the results of the system analyzer into an Excel workbook using the "MV-ETL System Analyzer Template" to assist the scoping process
- The mapping of the files to be extracted
- The extraction of the data using either a flat file or JSON format.
  
The system analyzer execution, mapping, and extraction phases are highly configurable and can be tailored to meet:

- the customer requirements,
- the type of extracts needed,
- what purpose they will be used for,
- the number of files needed,
- any specific logic required that is dependent of the application in use which updates the database for whatever business scenario it is intended to fulfill.

### System Analyzer

The system analyzer provides an approach to identify all accounts and files of a multivalue system and is the initiating process of a discovery phase with a customer. It guides requirements gathering for data needs and provides audit information. The tool extracts system information in JSON notation which is fed into an Excel workbook with various file information which assists in charting the ETL project requirement needs.  It will crawl any number of accounts based on the configuration options provided, identifies all files in an account, and gathers the following information for import into Excel:

- File name
- Number of records
- File size
- File analysis time
- Minimum record size
- Maximum record size
- Value Mark count
- Subvalue Mark count

### Data Mapping

The data mapping can be setup using two separate approaches.  Taking the "**Black Box**" approach allows for the mapping tool to crawl an entire MultiValue system (or a set of predefined accounts) and map each file it finds in the account being crawled.  The "**Analytical**" approach requires the discovery phase mentioned above with the customer to determine requirements, files needed, and a possible deep dive into the account to determine which dictionary items are needed or any ancillary files required.

It is highly recommended to take the analytical approach with the usage of the ETL tool suite.

The mapping consists of analyzing a file in multiple steps.  The first filters out any attributes that are unused, which removes any unnecessary dictionary items in the maps created.  The next analyzes the file to determine multivalued attributes and finds associations amongst these.  In addition, it is determined if there are subvalues in the attribute.  Then the file's dictionary is analyzed to determine controlling and dependent attributes in the associations or identifying any additional that were not discovered in the second pass over the data. The final step creates the top-level map in one item with references to all associative maps that will be created as separate map items based on associations or single multivalued attributes found.

The mapping has by default all attributes used in the file.  As part of the analytical path it is possible to restrict the number of multivalues that are found in an associative array for export.  It is also possible to create a template which can be updated at a later point in time that can be used to filter which attributes will be used in the extraction process.  This allows for a cleansing of the output being produced, which compacts the data based on which purpose it is being created for.

Items created from the mapping process are of three types, with each type reflected in the nomenclature of the map name as the item ID.  Each type begins with the prefix "GET".  The next part of the name is the actual account to be queried, then the actual file name in the account.  Using this convention there are two map items created, the first setup for a JSON extract, and the second for the creation of a flat file.  The last type created is used in the extraction process to query the actual file to be exported and has the prefix "GET.QUERY".   With this naming convention, and taking for example an INVOICE file that is to be extracted, the items created for querying and the actual maps will have this format:

- GET.ACCT-INVOICE
- GET.ACCT-INVOICE_FLAT
- GET.QUERY.ACCT-INVOICE

The top-level map will be the map item as named above, and will be used for a RESTful pull of the data. Associative multivalued arrays will have 2 sets of map items created, the first for the purpose of exporting using JSON, and the second for a flat file export.  The name of the associative array is added onto the end of the item name.  Extending our example, should the INVOICE file have a set of multivalued attributes setup for the purpose of handling an invoice's line items, and identified in the mapping process as an associative array using the name "LI", the items created will have the following format:

- GET.ACCT-INVOICELI
- GET.ACCT-INVOICELI_FLAT

### Extraction

In most cases, the extraction is used to flatten MultiValue data into delimited text files for import into the relational database world.  It also can be used as part of a RESTful API.

Using the example of creating flat delimited text files, extraction is dependent of the path taken.  Using the Black Box path without any previous configuration, the extraction will determine all accounts on the MultiValue system, within each account it will select all files, and using the maps previously created it will export the entire file and the entire database.  Associative arrays are downloaded to a text file created especially for flattening the arrays.  This path requires only one configuration item; where to export the files to.

The Analytical path makes extensive use of the configurable options that allows it to be selective of the files and maps created for export.  It also allows for a per file time serialization which will select the file by the attribute that contains the controlling date and breaks the file into multiple export files with records created per year based on the date.

Time serialization also requires a beginning complete export, with subsequent exports only creating files for the current year.

In addition, the analytical path also enables adding columns to the extract that were not previously mapped.  This is mainly due to the application and database design which may not have columns required for the export not setup on a file being exported, e.g. breaking out a concatenated record key into individual columns, calculating a value, or adding columns to a file where the data must be pulled from another file in the database.  This is accomplished through application specific subroutines that can be called from the extraction process.

## Files Required

The following files are required for extending _MvConnect_ with the MV-ETL data mapping and ETL tools:

- MVMAP.BP - This file contains all modules and subroutines for the data mapping and ETL tools
- MVMAP.TABLE - Parameters for DATA.MAP.TOOL and MAPPEDEXPORT
- MVMAP.TEMPLATE - MAPPEDEXPORT output templates generated from running MAP.DATA.TOOL
- MVMAP.DATA - File mappings for MAPPEDEXPORT and MAPPEDSERVICE generated from running MAP.DATA.TOOL
- MVDBTOOLKIT.BP - Zumasys toolkit programs used for exporting data - See the [MVDBTOOLKIT](https://docs.zumasys.com/mv-connect/mvdbtoolkit/) documentation for more information
- WDB.RESOURCE - End point pointer for mapped services - See the _[MVConnect](https://docs.zumasys.com/mv-connect/)_ documentation for more information on WDB.RESOURCE API*REQUEST

## Software Modules Used

MVMAP.BP contains a series of software modules to assist in creating all maps and extracting data.  These include:

| Module | Description |
| :--- | :--- |
| BUILD.GET.RESPONSE.SUB | Subroutine called from MAPPEDSERVICE to GET JSON data using data maps |
| CLEAN.CONTROL.CHARS | Subroutine to remove control characters|
| MAP.DATA.TOOL | Tool to analyze files and dictionaries to produce JSON and flat mappings of data - used by MAPPEDSERVICE and MAPPEDEXPORT |
| _name_.APP.SPECIFIC | Subroutine using an abbreviation of an application's _name_ for the handling of specific logic that is related to that application only - used by MAPPEDEXPORT |
| GET.VARS.SUB | Subroutine to extract and pass JSON parameter data used by MAPPEDSERVICE |
| MAPPEDEXPORT | Tool to export data using data maps and templates |
| MAPPEDSERVICE | Subroutine called from REQUEST end point that GETs or POSTs JSON data using data maps |
| MVMAP.SYSTEM.ANALYZER | Tool to analyze accounts of a multivalue database system
| PROCESS.PUTPOST.SUB | Subroutine called from mapped service to POST JSON data using data maps |
| REPL.WORD.SUB | Utility program used to replace strings |
| REQUEST | End point for MAPPEDSERVICE |

## Configuration Options

MVMAP.TABLE contains the configuration tables in items using JSON notation. These items are:

- ANALYZE.JSON - Configuration settings for MVMAP.SYSTEM.ANALYZER
- MAPPING.JSON - Configuration settings for MAP.DATA.TOOL
- EXTRACT.JSON - Configuration settings for MAPPEDEXTRACT

The following tables outline the different configuration options available:

### ANALYZE.JSON

| Option | Type | Description |
| :--- | :--- |  :--- |
| ApplicationName | String  | Application name |
| AccountRepository | String | Repository where all account names can be found, e.g. SYSTEM for D3, QM.ACCOUNTS in QM, UV.ACCOUNT in UniVerse |
| FileType | String | File definition type (Usually D or F) |
| MasterDictionary | String  | Name of master dictionary (Usually MD or VOC) |
| DictionarySelector | String | Platform dependent way to select the DICT by attribute 2 and be right justified, thus selecting in numeric order (*A2 for most Pick versions, F2 for UniVerse). For jBASE a special item named "A2R" is created and written to the MD |
| AnalyzeAccounts | Array | Array of string values defining the accounts to analyze |
| ExcludeAccounts | Array | Array of string values defining the accounts to exclude from analysis |
| ExcludeFiles | Array | Array of string values defining account wide files to exclude from analysis |
| ExportDirectory | String  | Local directory to drop the SystemAnalysis.json file to |
| FilesWithDifferentDictionary | Array | Array of accounts objects that have files using shared dictionaries |
| AccountName | String | Name of account with shared dictionaries as an object element in the Accounts array |
| Files | Array | Array of file objects nested within the account object that contains the file names using shared dictionaries |
| FileName | String | Name of file name that has the shared dictionary as element in the file object |
| DictionaryFileName | String | Name of dictionary file defining the shared dictionary |

### MAPPING.JSON

| Option | Type | Description |
| :--- | :--- |  :--- |
| AppName | String | Application name |
| BiAppName | String | Name of a business intelligence application name extracted data is being supplied to |
| AccountRepo | String | Repository where all account names can be found, e.g. SYSTEM for D3, QM.ACCOUNTS in QM, UV.ACCOUNT in UniVerse |
| MstrDict | String | Name of master dictionary (Usually MD or VOC) |
| FileType | String | File definition type (Usually D or F) |
| ExcludeFiles | String | List of files to exclude from mapping (comma separated), used only when Files = ALL |
| DictSelector | String | Platform dependent way to select the DICT by attribute 2 and be right justified, thus selecting in numeric order (*A2 for most Pick versions, F2 for UniVerse). For jBASE a special item named "A2R" is created and written to the MD |
| CanSample | Boolean | Set to true if the SELECT statement has a SAMPLE option |
| DoSample | Boolean | Sample a number of records in a file or not |
| SampleRecs | Integer | Number of records to select for a sample, or the number of records to read in if sampling is not possible |
| AssocMvVarPct | Fraction | Associated counted multivalue variance percentage, see detailed description below |
| ExcludeNullAttrs | Boolean | Exclude attributes of a file that has no data in the attribute |
| CreateTemplate | Boolean | Create a template of the file being mapped in addition to the map created |
| FileSuffix | String | File name suffix |
| Accounts | Array | Array of accounts objects to map |
| AccountName | String | Name of account to map as an object element in the Accounts array. Can also be "ALL" in order to map all accounts |
| Files | Array | Array of file objects nested within an account object that will contain the files to be mapped |
| FileName | String | Name of file to map as element in the file object.  Can also be "ALL" to map all files in the account |
| FileMultiValueAssociations | Array | Array of objects pre-defining associated multivalued attributes nested in the Files array, see detailed description below |
| Name | String | Object element defining the name of the associated multivalue association |
| Attributes | Array | Integer values defining the attribute numbers in the multivalue association |
| ExternalFileName | String | Assignment of a different name to use other than the file name for the extraction process |
| DictionaryFileName | String | Name of dictionary file if the data file uses a shared dictionary |
| DictionaryReplacement | Array | Array of objects defining a replacement of the dictionary item to use for mapping |
| DictIdFound | String | Element of the dictionary replacement object defining the dictionary item ID found by MAP.DATA.TOOL that needs to be replaced |
| ReplaceWith | String | Element of the dictionary replacement object defining the dictionary item ID that MAP.DATA.TOOL should use for mapping |

### EXTRACT.JSON

| Option | Type  | Description |
| :--- | :---  | :--- |
| ApplicationName | String  | Application name |
| BiApplicationName | String | Name of a business intelligence application name extracted data is being supplied to |
| AccountRepository | String | Repository where all account names can be found, e.g. SYSTEM for D3, QM.ACCOUNTS in QM, UV.ACCOUNT in UniVerse |
| LocationCode | String  | Customer location code |
| MasterDictionary | String  | Name of master dictionary (Usually MD or VOC) |
| ExportDirectory | String  | Local directory to export files to |
| FilePrefix | String  | File name prefix (Usually "GET.QUERY") |
| FileDelimiter | String  | File name delimiter |
| FileSuffix | String  | File name suffix |
| MaximumFileSize | Integer | Maximum size to initiate actual file write |
| BlockSize | Integer  | Size of data chunks for serial I/O |
| DataDelimiter | Integer  | ASCII value of the delimiter character, set to 124 for \| |
| ApplicationFilesNeeded | String | Open additional files used in the application for retrieving data (Max 30) |
| ApplicationSubroutineName | String | Name of application specific subroutine that is called in order to deliver additional functionality |
| BeginEpoch | String | Date of first successful extraction |
| LastExtract | String | Last date of successful extract |
| Accounts | Array | Array of accounts objects to extract from |
| AccountName | String | Name of account to extract from as an object element in the Accounts array |
| Files | Array | Array of file objects nested within an account object that will contain the files to be extracted |
| FileName | String | Name of file to extract as element in the file object |
| ChildMap | String | Additional map to include in extract |
| ParentMap | String | Additional map to include in extract |
| DeleteExistingFile | Boolean | Set to true for each existing file from a previous export to be deleted before it is opened |
| CanTimeSerialize | Boolean | Set to true for each file to export using time series |
| TimeSeriesAttribute | Integer | Attribute to use in the file to determine time series |
| TimeSeriesDefault | String | Type of time series file creation -> Yearly, Monthly (Currently unused) |
| TimeSeriesSelection | String | Dictionary item to use when selecting, usually a date |
| TimeSeriesInitialSelection | String | Dictionary item to use when selecting for the initial extract, usually a date |
| SelClause | String | Add a clause to the SSELECT statement when exporting a file (Associated to file list) |
| ExtractFrom | String | Begin period for extracted file to select records from, can be either a date or 'CYR' for current year (Associated to file list) |

## Associative Multivalue Variance Percentage

In the mapping process the number of multivalues per attribute are determined. These numbers are used to determine associative attributes, and with the use of a variance percentage any additional attributes that fall within the deviation amount will be considered to be part of the association. Take for example a file that has 50,000 records and uses 150 attributes. From these a total of 35 were identified as having 100 multivalues in them. Through the use of a 0.5% variance allowance and another 15 attributes were found to be in the range of 95 to 105 multivalues, these additional 15 would be considered a part of the association and added to the already exisiting 35.

## File Multivalue Associations

In such cases where the mapping process does not find associative multivalued attributes, but the application's users are aware of such, this parameter can be used to setup such associations for the mapping process to use. The "Attributes" array contains the attribute numbers to use in the association, with the first value in the array declared to be the controlling attribute. The "Name" parameter needs to be the controlling attributes header as found in column heading attribute of the dictionary item used for mapping. For most dictionary types this attribute 3, but for "D" type dictionary items this is attribute 4.

## Parent/Child Child/Parent Relationships

Extracting data for import into a relational database will create separate flat files for each associative array found and mapped in a multivalued file.  For an ETL scenario creating flat files for import into a business intelligence tool this is in some cases undesired.  The configuration options accommodate this by allowing the setup of a parent/child or child/parent relationship between mapped files.  Using these relationships an exported flat file can contain data from two different maps.

Use of one of these relationships is quite simple.  For a parent/child relationship, the name of the main file is added as one of the files to export in the "FileName" parameter in the file object of the "ExportFiles" array and the suffix of the file name of the main map as the child map is added in the "ChildMap" parameter.  A child/parent relationship has the name of the child map in the "FileName" parameter, and the name of the parent map in the "ParentMap" parameter.

The result of using these combinations is that the flat file will have one line for each of the associative arrays.  The header information from the top-level file will be redundant, and it will be up to the BI tool where the data is being uploaded to filter this information out.

### Exporting Subvalues

The use of these type of relationships works only at the attribute and multivalue level. Exporting subvalues of a given multivalue is by design to be in its own flat file, which will always have the suffix "-DETAIL".

## Data Cleansing

The MAP.TEMPLATE file is updated during the mapping process.  The items created in this file use the nomenclature "ACCT*FILENAME" in the item id.  In each attribute of this item is the actual dictionary name and the attribute number from the actual file.  Because the mapping process captures all attributes and associative arrays and writes them to the map items themselves, the items in this file can be used to remove any unwanted attributes from an export, thus performing a cleansing of the data being extracted and reducing the amount of information sent.

The template file should be used to cleanse all maps created for a file, beginning with the top-level map and including all associated child maps.

<PageFooter />
