# Multi-value Support

<PageHeader />

**Tags:**
<badge text='subroutine' vertical='middle' />
<badge text='file indexing' vertical='middle' />

When an index is created, by default jBASE assumes it is a multi-value index. Consider the following creation of an index.

```
jsh --> create-index PRODUCTS BY DESCRIPTION
```

Assuming DESCRIPTION is a DICT record that defines attribute 1 and a single record exists like this :

```
jsh --> COPY PRODUCTS * (T
Jim
001 SLIPPERS]PIPE]BOOKS
```

This shows there is one record called "Jim" who has 3 products assigned to him, SLIPPERS, PIPE and BOOKS. As an index has been created on attribute 1, there will be 3 index keys created, one for each value.

This default usage of multi-values breaks down when multiple attributes are defined in the index definition. Consider the following index definition.

```
jsh --> create-index PRODUCTS BY 1 BY 2
```

In this example, attributes 1 and 2 are concatenated to create the index definition. Assuming both attributes are multi-valued, then what does the above actually mean? Does it mean the 3 values in attribute 1, add the 3 values in attribute 2, this creates 6 values and so a total of 6 index keys are created? Or does it mean value 1 from both attribute 1 and 2 and concatenate them to create a single value ? If so, what happens when they have differing number of values in each attribute ?

These questions show , once 2 or more attributes are used, the multi-value approach becomes difficult to solve in a logical and consistent manner. Therefore the above example of create-index fails resulting in an error.

If a more complex definition is desired, it is only possible in non-multi-value mode. This is performed using the -m or (M) option to create-index. With this option, the entire attribute is treated as a single entity, as though it had no multi-value marks. Therefore the above create-index example could be replaced by :

```
jsh --> create-index PRODUCTS BY 1 BY 2 (M)
```

Full multi-value support may be accomplished by coding a jBC subroutine, then [calling the subroutine](./../using-subroutine-in-index-definitions) to perform it. In the following example a subroutine called CONCAT is called. This subroutine will be called with attribute 5 (in this example) passed. However the subroutine will also have the entire record passed to it in another parameter. The resulting output can have as many values as desired, created however desired.

```
jsh --> create-index PRODUCTS BY CALL(5,"CONCAT")
```

Back to [Indexes](./../README.md)
