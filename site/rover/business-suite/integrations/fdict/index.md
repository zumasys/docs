# Rover FDICT

<PageHeader />

This article describes how Rover File Dictionaries work with Rover Web

## Table of Contents <!-- omit from toc -->

- [Rover FDICT](#rover-fdict)
  - [Field](#field)
    - [Lookups](#lookups)

## Field

The field object controls the UI and controls of an Input in Rover Web.

### Lookups

Lookups can be used on an individual field if the `reference_file` property is defined and a corresponding FDICT with lookups exists. If all conditions are met a "Search" icon will appear to the right of the input.

```json 
{
    "field_no": "0",
    "conv": "MCU",
    "dict_name": "REP.ID",
    "desc_items": [
        {
            "desc": "Rep.Id"
        }
    ],
    "just": "R",
    "len": "6",
    "reference_file": "REP"
}
```

The FDICT file will need at least one `lookup_name_items` to be defined. If multiple lookups are available then a dropdown will be presented to allow a user to select from one. `lu_enabled` is set to "Y" is required.

```json
{
    "total_records_found": "1",
    "BlockSize": "50",
    "fdict_items": [
        {
            "file_name": "REP",
            "lookup_name_items": [
                {
                    "lookup_name": "NAME",
                    "lu_menu_caption": "Lookup rep by name",
                    "lu_enabled": "Y",
                    "lu_list_caption": "Lookup rep by name",
                },
                {
                    "lookup_name": "ALL.REPS",
                    "lu_menu_caption": "Rep Listing by Name",
                    "lu_enabled": "Y",
                    "lu_list_caption": "Rep Listing by Name",
                },
            ]
        }
    ]
}
```
