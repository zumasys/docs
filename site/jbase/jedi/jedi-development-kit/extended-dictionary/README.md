# Extended Dictionary Definitions  

<PageHeader />

## Appendix A - Extended Dictionary Header

| Equate | Value | Comments |
| --- | --- | --- |
| EDICT_START               | "JBASE_EDICT_START"   | String defining start of extended dict info |
| EDICT_END                 | "JBASE_EDICT_END"     | String defining end of extended dict info |
| EDICT_OPTIONS_ITEMID      | "jDP_Options"         | Item Id in dictionary for general file and default column options |
| EDICT_LEN                 | 17                    | Number of extended dictionary definitions |
| EDICT_DATA_TYPE           | EDICT_START_ATTR + 1  | Valid data type values |
| EDICT_LENGTH              | EDICT_START_ATTR + 2  | Maximum length of a string field otherwise null |
| EDICT_SCALE               | EDICT_START_ATTR + 2  | Maximum length of a string field; otherwise null |
| EDICT_DESCRIPTION         | EDICT_START_ATTR + 3  | Text description of the field |
| EDICT_COLUMN_NAME         | EDICT_START_ATTR + 4  | If not null used as column name rather than dict |
| EDICT_MV_GROUP_NAME       | EDICT_START_ATTR + 5  | If not null dictionary entry belongs to the named MV group table |
| EDICT_SMV_GROUP_NAME      | EDICT_START_ATTR + 6  | If not null dictionary entry belongs to the named SV group table |
| EDICT_MAX_VALUES          | EDICT_START_ATTR + 7  | If not null max values in attr and means it is ctrl field |
| EDICT_MAX_SUBVALUES       | EDICT_START_ATTR + 8  | If not null max subvalues in attr and means it is ctrl field |  
| EDICT_FLAGS               | EDICT_START_ATTR + 9  | Flags as defined below |
| EDICT_STORAGE_FORMAT      | EDICT_START_ATTR + 10 | Format of data in the Item |
| EDICT_FOREIGN_KEY_TABLE   | EDICT_START_ATTR + 11 | Table name of foreign key |
| EDICT_FOREIGN_KEY_COLUMNS | EDICT_START_ATTR + 12 | Column names of foreign key |
| EDICT_NEXT_ROW_ID         | EDICT_START_ATTR + 13 | Auto increment ItemID - next available number |
| EDICT_MV_SV_POS           | EDICT_START_ATTR + 14 | Positional multi-value, sub-value |
| EDICT_XREF_NAME           | EDICT_START_ATTR + 15 | Cross reference to dictionary entry for synonym's entries |
| EDICT_END_MARKER          | EDICT_START_ATTR + EDICT_LENGTH | |
| EDict_Ok                  | 0   | |  
| EDict_InfoNotFound        | -1  | |
| EDict_ItemNotFound        | -2  | |
| EDict_ItemNotValid        | -3  | |  
| EDict_DataType            | EDICTARRAY<1>  | Extended Dictionary Data Types (see below) |
| EDict_Length              | EDICTARRAY<2>  | Length of string type column |
| EDict_Scale               | EDICTARRAY<3>  | Scaling factor for scaled type |
| EDict_Description         | EDICTARRAY<4>  | Text description of column |
| EDict_ColumnName          | EDICTARRAY<5>  | Column name used for access if not null |
| EDict_MVGroupName         | EDICTARRAY<6>  | Name of dictionary for Multi-valued group |
| EDict_SVGroupName         | EDICTARRAY<7>  | Name of dictionary for Sub-valued group |
| EDict_MaxMV               | EDICTARRAY<8>  | If not null then maximum number of multi-values, hence controlling attr |
| EDict_MaxSV               | EDICTARRAY<9>  | If not null then maximum number of sub-values, hence controlling attr |
| EDict_Visible             | EDICTARRAY<10> | Flag column as visible, flags override file options default |
| EDict_NotVisible          | EDICTARRAY<11> | Flag column as not visible |
| EDict_Updateable          | EDICTARRAY<12> | Flag column as updateable |
| EDict_NotUpdateable       | EDICTARRAY<13> | Flag column as not updateable |
| EDict_Nullable            | EDICTARRAY<14> | Flag column nullable |
| EDict_NotUpdateable       | EDICTARRAY<15> | Flag column as not nullable |
| EDict_SQLNulls            | EDICTARRAY<16> | Flag column may contain SQL Null type |
| EDict_NotSQLNulls         | EDICTARRAY<17> | Flag column may not contain SQL Null type |
| EDict_UseAttr7            | EDICTARRAY<18> | Flag column should use conversion if provided on attr 7 |
| EDict_NotUseAttr7         | EDICTARRAY<19> | Flag column should not use conversion on attr7 |
| EDict_s3                  | EDICTARRAY<20> | |
| EDict_s4                  | EDICTARRAY<21> | |
| EDict_StorageFormat       | EDICTARRAY<22> | Storage format for data (see below) |
| EDict_ForeignKeyTable     | EDICTARRAY<23> | Table name of foreign key |
| EDict_ForeignKeyColumns   | EDICTARRAY<24> | Column names of foreign key |
| EDict_NextRowID           | EDICTARRAY<25> | Auto increment ItemID - Next available number |
| EDict_MV_SV_Pos           | EDICTARRAY<26> | Specify positional multi-value and sub-value |
| EDict_XrefName            | EDICTARRAY<27> | Specify cross reference dict entry for synonym type |
| EDict_ValidBit            | EDICTARRAY<28> | Flag options are valid only on read |

## Appendix B - Extended Dictionary Data Types

| Equate | Value | Comments |
| --- | --- | --- |
| EDict_DT_STRING      | 108 | DT_TYPE_CSTRING, A null terminated string |
| EDict_DT_UINT32      |   4 | DT_TYPE_LU_ longword, logical; 32-bit unsigned quantity |
| EDict_DT_INT32       |   8 | DT_TYPE_L_ longword integer; 32-bit signed 2's-complement |
| EDict_DT_DATE        | 123 | DT_TYPE_ODBC_DATE_ ODBC Date format |
| EDict_DT_TIME        | 124 | DT_TYPE_ODBC_TIME_ ODBC Time format |
| EDict_DT_SCALEDINT32 | 101 | DT_TYPE_LS_ 32-bit signed scaled longword integer |
| EDict_DT_DECIMAL     | 101 | DT_TYPE_LS_ 32-bit signed handles embedded decimal |
| EDict_DT_LONGDECIMAL | 104 | DT_TYPE_QS_ 64-bit signed handles embedded decimal |

Back to [jEDIJDK](./../README.md)

<PageFooter />
