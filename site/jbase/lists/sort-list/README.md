# SORT-LIST

<PageHeader />

**Tags:**
<badge text='lists' vertical='middle' />

## Description

Sorts a saved select list. It takes the general form:

```
SORT-LIST {list-name{account-name}} {(options}
```

where:

- **list-name** specifies the name under which the list is to be stored.
- **account-name** is the name of the account from which the list was saved. If you do not specify account-name, the system will use the current account name.
- **options** can be
  - U - remove duplicate entries.

The SORT-LIST command will sort a list previously saved with the SAVE-LIST command. SORT-LIST is useful for sorting lists which have modified by EDIT-LIST, or for avoiding an extra SSELECT when working with a large file.

### Example

```
jsh ~ -->SELECT CUSTOMERS LAST.NAME
4380 records selected
>SAVE-LIST CUSTOMERNAMES
jsh ~ -->SORT-LIST CUSTOMERNAMES (U
List 'CUSTOMERNAMES' sorted with 3872 records
```

Generates a sorted list of unique customer names.

Back to [List Processing](./../list-processing)

  
<PageFooter />
