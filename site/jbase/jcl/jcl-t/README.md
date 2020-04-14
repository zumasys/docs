# jCL T

<PageHeader />

**Tags:**
<badge text='formatted output' vertical='middle' />
<badge text='terminal' vertical='middle' />
<badge text='jcl' vertical='middle' />

## Description

This command produces formatted terminal output. It takes the general form:

```
T element{, element}
```

where **element** is literal text, a reference or a formatting instruction:

| element  | Description  |
| --- | --- |
| "text" | Outputs the specified text. The text must be enclosed in double quotes. |
| r{;input;} | Outputs the value obtained by the direct or indirect reference to a buffer or select register specified by r. An optional jQL  input conversion can be applied to the value prior to output. |
| r{:output:} | Outputs the value obtained by the direct or indirect reference to a buffer or select register specified by r. An optional jQL  output conversion can be applied to the value prior to output. |
| (c,r) | Sets the cursor to the column c and row r. Can be direct or indirect buffer references. |
| (c) | Sets the cursor to the column c in the current row. |
| \*cn | Outputs the character c n number of times. Value n can be a direct or indirect reference to a buffer or select register. |
| (-n) | Provides terminal independent cursor control or video effects. |
| + | Outputs carriage return/line feed at the end of the output line. On ROS emulations, this clause will inhibit the carriage return/line feed at the end of the output line. |
| B | Sounds terminal bell. |
| C | Clears the screen (outputs top-of-form). |
| D | One-second delay. Often used when outputting error messages. |
| Ir | Converts the integer r (0 to 255) into its equivalent ASCII  character. r can be a direct or indirect reference to a buffer or select register that contains the integer. |
| L | Terminates a loop started with a T element. The elements between the T and L are executed three times. |
| Sn | Outputs the number of spaces specified by n. The value n can be a direct or indirect reference to a buffer or select register than contains the number of spaces. |
| T | Marks the top of a loop. The loop is terminated by the L element. The elements between T and L are executed three times. |
| U | Moves the cursor up one line. |
| Xr | Converts the hex value r (x"00" to x"FF") into its equivalent ASCII  character. The value r can be a direct or indirect reference to a buffer or select register that contains the hex value. |

## Note

and must be followed by a single space and a comma must separate each element. Create continuation lines (which do not start with a T) by ending the preceding line with a comma.

## Terminal Independent Cursor Control

Terminal independent cursor control is available using the same table of negative numbers as used by the jBC  @ command. See the jBC @ command for more details.

### Example 1

```
| Commands              |  Terminal Output   |
| -------               |  ---------------   |
| MV %1 "99"            |                    |
| T C, "%1 = ",%1       | clear screen       |
|                       | %1 = 99            |
```

### Example 2

```
| Commands               |  Terminal Output   |
| -------                |  ---------------   |
| T "Enter Password :",+ |                    |
| IP %3                  | Enter Password : _ |
```

### Example 3

```
| Command                |  Terminal Output   |
| -------                |  ---------------   |
| T \*=6                 | ======             |
```

### Example 4

```
| Commands                |  Terminal Output  |
| --------                |  ---------------  |
| MV %1 "9873"            |                   |
| T "Date:",S2,%1:D2:     | Date: 11 JAN 95   |
```

### Example 5

```
| Command                               |    Terminal Output    |
| -------                               |    ---------------    |
| T (0,10),T,(0),"Error",B,D,(O),S5,D,L | Error bell (flashing) |
```

### Example 6

```
| Commands                |    Terminal Output     |
| --------                |    ---------------     |
| T X1B,"J",+             | erase to end of screen |
| T I27,I74,+             | erase to end of screen |
| T (-3),+                | erase to end of screen |
```

Back to [jCL.](./../README.md)
  
<PageFooter />