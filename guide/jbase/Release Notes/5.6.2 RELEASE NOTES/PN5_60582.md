# PN5_60582

**Created At:** 6/20/2017 12:17:05 PM  
**Updated At:** 2/22/2018 6:09:44 PM  


### Description

Add a new environment variable to:

1. configure the number of commands in the jShell command history
2. specify that the command stack is username based




### Previous Release Behavior

The command stack was previously limited to 50 entries.

The  command stack was port number based, meaning that a user coming in on a  different port number will not obtain the same stack entries.



### Current Release Behavior

A new environment variable, JSH\_COMMAND\_STACK, can be used to configure the jShell command history.

The command stack can be set to any number greater or equal to 50.

The command stack can optionally be username based with the literal **USERNAME** (see examples below).

For a command stack that has a maximum command history of 500 entries and is port number based:

```
JSH_COMMAND_STACK=500
```

For a command stack that is username based and has a default stack size of 50 entries:

```
JSH_COMMAND_STACK=USERNAME
```

For a command stack that is both username based and has a maximum stack size of 1000 entries:

```
JSH_COMMAND_STACK=USERNAME,1000
```

The *value* of the environment variable is case insensitive, e.g.

```
JSH_COMMAND_STACK=UserName
```



If the environment variable is unassigned or any part of the value is invalid:

1. the stack will be port number based
2. the maximum stack size will be 50


If stack size is less than 50 then the default (minimum) stack size will be 50 entries.

If the stack is username based and the user is logged in to more than one port then the stack will be shared.

This environment variable must be set prior to entering the jShell.
