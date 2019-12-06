# JCL T

**Created At:** 5/29/2018 7:17:26 AM  
**Updated At:** 6/11/2018 4:16:25 AM  

**Tags:**
<badge text='formatted output' vertical='middle' />
<badge text='terminal' vertical='middle' />
<badge text='jcl' vertical='middle' />

## Description 

This command produces formatted terminal output. It takes the general form:

```
T element{, element}
```

where element is literal text, a reference or a formatting instruction:




| element <br> | Description <br> |
| --- | --- |
| "text"<br> | Outputs the specified text. The text must be enclosed in double quotes.<br> |
| r{;input;}<br> | Outputs the value obtained by the direct or indirect reference to a buffer or select register specified by r. An optional jQL  input conversion can be applied to the value prior to output.<br> |
| r{:output:}<br> | Outputs the value obtained by the direct or indirect reference to a buffer or select register specified by r. An optional jQL  output conversion can be applied to the value prior to output.<br> |
| (c,r)<br> | Sets the cursor to the column c and row r. Can be direct or indirect buffer references.<br> |
| (c)<br> | Sets the cursor to the column c in the current row.<br> |
| \*cn<br> | Outputs the character c n number of times. Value n can be a direct or indirect reference to a buffer or select register.<br> |
| (-n)<br> | Provides terminal independent cursor control or video effects.<br> |
| +<br> | Outputs carriage return/line feed at the end of the output line. On ROS emulations, this clause will inhibit the carriage return/line feed at the end of the output line.<br> |
| B<br> | Sounds terminal bell.<br> |
| C<br> | Clears the screen (outputs top-of-form).<br> |
| D<br> | One-second delay. Often used when outputting error messages.<br> |
| Ir<br> | Converts the integer r (0 to 255) into its equivalent ASCII  character. r can be a direct or indirect reference to a buffer or select register that contains the integer.<br> |
| L<br> | Terminates a loop started with a T element. The elements between the T and L are executed three times.<br> |
| Sn<br> | Outputs the number of spaces specified by n. The value n can be a direct or indirect reference to a buffer or select register than contains the number of spaces.<br> |
| T<br> | Marks the top of a loop. The loop is terminated by the L element. The elements between T and L are executed three times.<br> |
| U<br> | Moves the cursor up one line.<br> |
| Xr<br> | Converts the hex value r (x"00" to x"FF") into its equivalent ASCII  character. The value r can be a direct or indirect reference to a buffer or select register that contains the hex value.<br> |




## Note: 


> The T command must be followed by a single space and a comma must separate each element. Create continuation lines (which do not start with a T) by ending the preceding line with a comma.




## Terminal Independent Cursor Control 

Terminal independent cursor control is available using the same table of negative numbers as used by the jBC  @ command. See the jBC @ command for more details.



###### EXAMPLE 1


| command<br> | Terminal Output <br> |
| --- | --- |
| MV %1 "99"<br> | <br> |
| T C, "%1 = ",%1<br> | clear screen<br> |
| <br> | %1 = 99<br> |




###### EXAMPLE 2


| Command <br> | Terminal Output <br> |
| --- | --- |
| T "Enter Password :",+<br> | <br> |
| IP %3<br> | Enter Password : \_<br> |




###### EXAMPLE 3


| Command <br> | Terminal Output <br> |
| --- | --- |
| T \*=6<br> | ======<br> |




###### EXAMPLE 4


| Command <br> | Terminal Output<br> |
| --- | --- |
| MV %1 "9873"<br> | <br> |
| T "DATE:",S2,%1:D2:<br> | DATE: 11 JAN 95<br> |




###### EXAMPLE 5


| Command <br> | Terminal Output <br> |
| --- | --- |
| T (0,10),T,(0),"ERROR",B,D,(O),S5,D,L<br> | ERROR bell (flashing)<br> |




###### EXAMPLE 6


| Command<br> | Terminal Output<br> |
| --- | --- |
| T X1B,"J",+<br> | erase to end of screen<br> |
| T I27,I74,+<br> | erase to end of screen<br> |
| T (-3),+<br> | erase to end of screen<br> |




Back to [JCL Commands](jcl-commands)


