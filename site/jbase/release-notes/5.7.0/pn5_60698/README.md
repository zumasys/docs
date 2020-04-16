# PN5_60698

<PageHeader />

### Description

Allow HEADINGs and FOOTINGs to use case insensitive special characters



### Previous Release Behavior

Could not use lowercase special characters in a HEADING.

For example, if a HEADING was defined as:

```
my_header = 'LL' Item: ABC, File: testfile, User: some_bloke'L' 'T' PAGE 'PL'
```

You would expect the output from

```
HEADING my_header
```

To be something like:

```
Item: ABC, File: testfile, User: some_bloke                          11:27:58  23 JAN 2018 PAGE    1
```

However, if you used lowercase special characters:

```
'll' Item: ABC, File: testfile, User: some_bloke'l' 't' PAGE 'pl'
```

then it would fail to display the correct header.



### Current Release Behavior

HEADINGs and FOOTINGs can now use lowercase special characters.

  
<PageFooter />
