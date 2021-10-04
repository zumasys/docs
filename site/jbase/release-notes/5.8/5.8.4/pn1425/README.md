Back to [MVDashboard FAQ](./../README.md)

<PageHeader />

## Description

A query which has a WITH condition followed by AND # dict "value" causes a seg fault if the file has an index.

## Previous Release Behavior  

```
make-demo-file 10 mdf jd (C
CREATE-INDEX mdf FIRSTNAME
COUNT mdf WITH OS = "NO SUCH OS" AND # LASTNAME "SMITH"
Crashes with segfault.
```

## Current Release Behavior

Now displays

```
No Records counted.
```

Back to [5.8.4 Release Notes](./../README.md)

<PageFooter />
