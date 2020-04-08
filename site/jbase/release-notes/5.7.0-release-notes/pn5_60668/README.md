# PN5_60668

<PageHeader />

### Description

New commands to list or regenerate all indexes and/or triggers from all files in an account



### Previous Release Behavior

There was no intrinsic way to display or regenerate indexes and triggers from all files in an account.



### Current Release Behavior

There are now 2 new commands:

```
jsh home ~ -->list-acct-indexes -?

Description: Lists indexes from all files in an account
                            -or-
             Creates a PAragraph in the MD of the account
             to regenerate all indexes in the account.
             The name of the paragraph is: create-acct-indexes

Syntax:      list-acct-indexes {-?|-h} {account name} {(options}

             account name - the name of an account from the SYSTEM file
             [If not specified then defaults to the current directory]

Options:
             A - Display All fields
             P - Send output to the spooler
             R - Create a PAragraph to Regenerate all indexes in the account
                 This option supercedes all other options.

             Options are Case Insensitive.
```

```
jsh home ~ -->list-acct-triggers -?

Description: Lists triggers from all files in an account
                            -or-
             Creates a PAragraph in the MD of the account
             to regenerate all triggers in the account.
             The name of the paragraph is: create-acct-triggers

Syntax:      list-acct-triggers {-?|-h} {account name} {(options}

             account name - the name of an account from the SYSTEM file
             [If not specified then defaults to the current directory]

Options:
             A - Display All fields
             P - Send output to the spooler
             R - Create a PAragraph to Regenerate all triggers in the account
                 This option supercedes all other options.

             Options are Case Insensitive.
```
