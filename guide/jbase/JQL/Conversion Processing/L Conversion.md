# L Conversion 

**Created At:** 6/8/2018 1:38:14 PM  
**Updated At:** 7/13/2018 12:46:27 PM  


## Description 

L codes return the length of a value, or the value if it is within specified criteria. They take the general form:

```
L{{min,}max}
```

where:

- min specifies that the process is to return an element if its length is greater than or equal to the number min.
- max specifies that the process is to return an element if its length is less than or equal to the number max.


### Note:


> The L code by itself returns the length of an element.
> 
> When used with max, or min and max, the L code returns the element if it is within the length specified by min and/or max.




### EXAMPLE 1

```
L
```

Assuming a value of ABCDEF, returns the value 6.



### EXAMPLE 2

```
L4
```

If JBCEMULATE is set to ROS, L4 is translated as return the value if its length is less than or equal to 4 - the equivalent of L0,4. Assuming a value of ABCDEF, L4 will return null - the value is longer than 4 characters.

If JBCEMULATE is not set to ROS, L4 is translated as return the value if its length is exactly equal to 4 - the equivalent of L4,4. Assuming a value of ABCDEF, L4 will return null - the value is longer than 4 characters.



### EXAMPLE 3

```
L4,7
```

L4,7 is translated as return the value if its length is greater than or equal to 4 and less than or equal to 7. Assuming a value of ABCDEF, L4,7 will return ABCDEF



Back to [Conversion Processing](321577-conversion-processing)
