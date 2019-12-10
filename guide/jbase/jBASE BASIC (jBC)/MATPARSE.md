# MATPARSE

**Created At:** 9/15/2017 12:09:41 PM  
**Updated At:** 11/27/2018 9:49:43 AM  

**Tags:**
<badge text='dynamic arrays' vertical='middle' />

# Description

The **MATPARSE** statement is used to assign the elements of a matrix from the elements of a dynamic array. It takes the general form:

```
MATPARSE array{, expression1{, expression2}} FROM variable1 {USING expression3} SETTING variable2
```

where:

- **array** is a previously dimensioned matrix, which will be assigned to from each element of the dynamic array. variable1 is the jBASE BASIC variable from which the matrix array will be stored.
- **expression1** and **expression2** should evaluate to numeric integers. **expression1** specifies which element of the array the assignment will start with; **expression2** specifies which element of the array the assignment will end with (inclusive).
- By default, the **dynamic array** assumes the use of a field mark to separate each array element.
- By specifying **expression3**, the separator character can be changed. If **expression3** evaluates to more than a single character, only the first character of the string is used.
- As assignment will stop when the contents of the **dynamic array** have been exhausted, it can be useful to determine the number of matrix elements that were actually assigned to.
- If the **SETTING** clause is specified then **variable2** will be set to the number of elements of the array that were assigned to.


When specifying starts and end positions with multi-dimensional arrays, it is necessary to expand the matrix into its total number of variables to calculate the correct element number. See the information about dimensioned arrays earlier in this section for detailed instructions on calculating element numbers.

An example of use is as:

```
DIM A(40)
MATPARSE A,3,7 FROM Dynamic
```

Assign 5 elements of the array starting at element 3.



Back to [jBASE BASIC](263498-jbase-basic).
