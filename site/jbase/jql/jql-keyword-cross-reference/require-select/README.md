# REQUIRE-SELECT, REQUIRE.SELECT

<PageHeader />

The **REQUIRE-SELECT** keyword indicates that an active select list must be used to process this query.

## Syntax

```
REQUIRE-SELECT
```

## Example

In the following query, a select list is active and a result will be obtained:

```
SELECT BOOK_SALES SAMPLED 20

 250 Records selected

>LIST BOOK_SALES WITH TITLE_ID EQ "200" NO.INDEX REQUIRE-SELECT
```

If an active select list is not present, then the query will not be processed:

```
LIST BOOK_SALES WITH TITLE_ID EQ "200" NO.INDEX REQUIRE-SELECT
Error in Statement "LIST BOOK_SALES WITH TITLE_ID EQ "200" NO.INDEX REQUIRE-SELECT"
A Select list was required and not supplied.
```

Back to [Cross Reference](./../README.md)

<PageFooter />
