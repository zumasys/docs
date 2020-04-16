# PN5_60688

<PageHeader />

### Description

Unable to stack KEY-SELECTs



### Previous Release Behavior

KEY-SELECT (aka QUERY-INDEX, aka ISELECT) would ignore the active select-list.

For example, if you were to do something like...

```
SELECT CUSTOMERS WITH CITY "PORTLAND"
SELECT CUSTOMERS WITH STATE "OR"
```

...the select-list created for the first select will be used in the second.

However, this did not happen for KEY-SELECT...

```
KEY-SELECT GMN WITH CITY "PORTLAND"
KEY-SELECT GMN WITH STATE "OR"
```

The second KEY-SELECT would ignore the select-list created by the first KEY-SELECT.



### Current Release Behavior

KEY-SELECT/QUERY-INDEX/ISELECT now operate off of the active select-list, regardless of how the select-list was generated.

  
<PageFooter />
