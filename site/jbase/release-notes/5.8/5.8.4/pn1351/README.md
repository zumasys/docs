# PN1351

<PageHeader />

## Description

An EXECUTE SELECT with an empty PASSLIST causes a full file query.

## Previous Release Behavior

With the config:

```
select_requires_passlist = true

make-demo-file 1 mdf jd

passlist_test.b
list = ''
execute 'select mdf' passlist list

passlist_test

1 Records selected
```

## Current Release Behavior

```
passlist_test

0 Records selected
```

Back to [5.8.4 Release Notes](./../README.md)

<PageFooter />
