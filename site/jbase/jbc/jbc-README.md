# jBASE BASIC (jBC)

<PageHeader />

## jBASE Statements and Functions by Name

| Name                                                                          | Description          |  
| ----------------------------------------------------------------------------  | -------------------- |  
| [@unassigned](./@unassigned/README.md)                                        | Unassigns a variable. |
| [abort](./abort/README.md)                                                    | The **ABORT** statement terminates the current running program and the program that called it. |
| [abs](./abs/README.md)                                                        | This function returns the mathematical absolute of the mathematical expression in the argument. |
| [abss](./abss/README.md)                                                      | The **ABSS** function returns the absolute values of all the elements in a dynamic array. |
| [adds](./adds/README.md)                                                      | The **ADDS** function creates a dynamic array of the element-by-element addition of two dynamic arrays. |
| [alpha](./alpha/README.md)                                                    | This function will check that an expression consists entirely of alphabetic characters. |
| [ands](./ands/README.md)                                                      | The **ANDS** function creates a dynamic array of the logical AND of corresponding elements of two dynamic arrays. |
| [ascii](./ascii/README.md)                                                    | The **ASCII**function converts all the characters in the expression from the [EBCDIC](./../ebcdic) character set to the ASCII character set. |
| [assigned](./assigned/README.md)                                              | The function returns a Boolean TRUE or FALSE result depending on whether or not a variable has an assigned value. |
| [bitand](./bitand/README.md)                                                  | The **BITAND** function may be used to perform the bitwise AND comparison of two integers specified by numeric expressions. |
| [bitchange](./bitchange/README.md)                                            | **BITCHANGE** toggles the state of a specified bit in the local bit table, and returns the original value of the bit. |
| [bitcheck](./bitcheck/README.md)                                              | **BITCHECK** returns the current value of a specified bit from the local bit table. |
| [bitload](./bitload/README.md)                                                | **BITLOAD** assigns all values in the local bit table, or retrieves all the values. |
| [bitnot](./bitnot/README.md)                                                  | The **BITNOT** function returns the bitwise negation of an integer specified by any numeric expression. |
| [bitor](./bitor/README.md)                                                    | The **BITOR** function is used to perform the bitwise OR comparison of two integers specified by numeric expressions. |
| [bitreset](./bitreset/README.md)                                              | **BITRESET** resets the value of a specified bit in the local bit table to zero and returns the previous value of the bit. |
| [bitset](./bitset/README.md)                                                  | **BITSET** sets the value of a specified bit in the bit table to one and returns the value of the bit before it was changed. |
| [bittest](./bittest/README.md)                                                | The **BITTEST** function may be used to test the bit number of the integer specified by expression. |
| [bitxor](./bitxor/README.md)                                                  | The **BITXOR** function performs the bitwise XOR comparison of two integers specified by numeric expressions. |
| [break](./break/README.md)                                                    | The statement allows for the configuration of the **BREAK** statement. |
| [break-on-and-off](./break-on-and-off/README.md)                              | This is used to turn the break key on of off in an application. |
| [bytelen](./bytelen/README.md)                                                | The **BYTELEN** function returns the length of the expression as the number of bytes rather than the number of characters. |
| [call](./call/README.md)                                                      | The statement transfers program execution to an external [SUBROUTINE](./../subroutine). |
| [calldotnet](./calldotnet/README.md)                                          | This command allows BASIC to call any .NET assembly and is useful when using third party applications. |
| [callj](./callj/README.md)                                                    | The **CALLJ** command allows BASIC to call a Java method. |
| [callonexit](./callonexit/README.md)                                          | The **CALLONEXIT** function call allows you to specify the name of a [SUBROUTINE](./../subroutine) to call when the program terminates. |
| [case](./case/README.md)                                                      | The **CASE** statement allows the programmer to execute a particular sequence of instructions based upon the results of a series of test expressions. |
| [catalog](./catalog/README.md)                                                | The **CATALOG** command is used to create executables and shared libraries from the application source code. |
| [cats](./cats/README.md)                                                      | The **CATS** function concatenates the corresponding elements in two dynamic arrays. |
| [chain](./chain/README.md)                                                    | The **CHAIN** statement exits the current program and transfers process control to the program defined by the expression. |
| [change](./change/README.md)                                                  | The **CHANGE** statement operates on a variable and replaces all occurrences of one string with another. |
| [change()](./change()/README.md)                                              |  |
| [changetimestamp](./changetimestamp/README.md)                                | The **CHANGETIMESTAMP** function can be used to adjust existing timestamp to return a new timestamp value. |
| [char](./char/README.md)                                                      | The **CHAR** function returns the ASCII character of its argument. |
| [chars](./chars/README.md)                                                    | The **CHARS** function accepts a dynamic array of numeric expressions as an argument and returns a dynamic array of corresponding ASCII characters. |
| [chdir](./chdir/README.md)                                                    | The **CHDIR** function allows the current working directory, as seen by the process environment, to be changed. |
| [checksum](./checksum/README.md)                                              | The **CHECKSUM** function returns a simple numeric checksum of a character string. |
| [clear](./clear/README.md)                                                    | The **CLEAR** statement will initialize all the variables to numeric 0. |
| [clearcommon](./clearcommon/README.md)                                        | The statement initializes all unnamed common variables to a value of zero. |
| [cleardata](./cleardata/README.md)                                            | The statement clears data stacked by the [DATA](. |
| [clearfile](./clearfile/README.md)                                            | The **CLEARFILE** statement is used to clear all the data from a file previously opened with the [OPEN](./../open) statement. |
| [clearinput](./clearinput/README.md)                                          | The command clears the terminal type-ahead buffer to allow the next **INPUT** statement to force a response from the user. |
| [clearselect](./clearselect/README.md)                                        | The **CLEARSELECT** statement is to clear active select lists. |
| [close](./close/README.md)                                                    | The **CLOSE** statement is used to close an opened file, which is no longer required. |
| [closeseq](./closeseq/README.md)                                              | The **CLOSESEQ** statement closes the file previously opened for sequential access. |
| [col1-and-col2](./col1-and-col2/README.md)                                    | These functions can be used in conjunction with the **FIELD** function to determine the character positions one position before and one position after the location of the last field. |
| [collectdata](./collectdata/README.md)                                        | The **COLLECTDATA** statement is used to retrieve data passed from the **PASSDATA** clause of an [EXECUTE](./../execute) statement. |
| [common](./common/README.md)                                                  | The **COMMON** statement declares a list of variables and matrices that can be shared among various programs. |
| [compare](./compare/README.md)                                                | The **COMPARE** function compares two strings and returns a value indicating whether or not they are equal. |
| [continue](./continue/README.md)                                              | The **CONTINUE** statement is the complimentary statement to the [BREAK](./../break) statement, without arguments. |
| [convert](./convert/README.md)                                                | **CONVERT** is the function form of the [CONVERT](./../convert-(statement)) statement. |
| [convert-(statement)](./convert-(statement)/README.md)                        | The **CONVERT** statement converts one or more characters in a string to their corresponding replacement characters. |
| [cos](./cos/README.md)                                                        | The function calculates the cosine of any angle using floating point arithmetic, then rounds to the [PRECISION](./../precision) implied by the jBASE BASIC program, which makes it very accurate. |
| [count](./count/README.md)                                                    | The **COUNT** function returns the number of times that one string occurs in another. |
| [counts](./counts/README.md)                                                  | This function is useful to count the number of times a substring is repeated in each element of a dynamic array. |
| [create](./create/README.md)                                                  | This statement is intended to create files. |
| [crt](./crt/README.md)                                                        | This statement sends data directly to the terminal, even if a [PRINTER ON](./../printer/README.md) statement is currently active. |
| [data](./data/README.md)                                                      | The **DATA** statement stacks the series of expressions on a terminal input FIFO stack. |
| [date](./date/README.md)                                                      | The **DATE** function returns the date in internal system form. |
| [dcount](./dcount/README.md)                                                  | This function counts the number of field elements in a string that are separated by a specified delimiter. |
| [debug](./debug/README.md)                                                    |  |
| [decatalog-and-delete-catalog](./decatalog-and-delete-catalog/README.md)      |  |
| [decrypt](./decrypt/README.md)                                                | This function decrypts strings. |
| [defc](./defc/README.md)                                                      | Use the **DEFC** statement to declare an external C function to the jBASE BASIC compiler, define its arguments, and return types. |
| [defce](./defce/README.md)                                                    | The **DEFCE** statement should be used, rather than the [DEFC](. |
| [deffun](./deffun/README.md)                                                  | This statement is used to declare an external jBASE BASIC function to the jBASE BASIC compiler and optionally define its arguments. |
| [del](./del/README.md)                                                        | The **DEL** statement is used to remove a specified element of a dynamic array. |
| [delete](./delete/README.md)                                                  | This statement is used to delete a record from a jBASE file. |
| [deletelist](./deletelist/README.md)                                          | The **DELETELIST** statement will delete the previously stored list named by expression. |
| [deleteseq](./deleteseq/README.md)                                            | The **DELETESEQ** statement deletes a sequential file. |
| [deleteu](./deleteu/README.md)                                                | The **DELETEU** statement is used to delete a record without releasing the update record lock set by a previous [READU](. |
| [dimension-(dim)](./dimension-(dim)/README.md)                                | The **DIM** statement is used to declare arrays to the compiler before referencing. |
| [dir](./dir/README.md)                                                        | The **DIR()** function is used to return information about a file. |
| [div](./div/README.md)                                                        | The **DIV** function is used to calculate the value of the quotient after division of the dividend by the divisor. |
| [divs](./divs/README.md)                                                      | The **DIVS** function is used to create a dynamic array containing the result of the element-by-element division of two dynamic arrays. |
| [downcase-&-upcase](./downcase-&-upcase/README.md)                            | **DOWNCASE** converts all uppercase characters in an expression to lowercase characters. |
| [dround](./dround/README.md)                                                  | The **DROUND** function performs double-precision rounding on a value. |
| [dtx](./dtx/README.md)                                                        | The **DTX** function will return the hexadecimal representation of a numeric expression. |
| [dyntoxml](./dyntoxml/README.md)                                              | This function converts an array to an xml representation of the array. |
| [ebcdic](./ebcdic/README.md)                                                  | This function converts all the characters in an expression from the ASCII character set to the **EBCDIC** character set. |
| [echo](./echo/README.md)                                                      | The **ECHO** statement will turn on or off the echoing of characters typed at the keyboard. |
| [embedded-sql-for-jbase-basic](./embedded-sql-for-jbase-basic/README.md)      |  |
| [encrypt](./encrypt/README.md)                                                | This function encrypts, hashes or signs a string. |
| [enter](./enter/README.md)                                                    | The **ENTER** statement unconditionally passes control to another executable program. |
| [eqs](./eqs/README.md)                                                        | The function is used to test if elements of one dynamic array are equal to the elements of another dynamic array. |
| [equate](./equate/README.md)                                                  | **EQUATE** is used to declare a symbol equivalent to a literal, variable or simple expression. |
| [ereplace](./ereplace/README.md)                                              | The **EREPLACE** function is useful for replacing substring in an expression with another substring. |
| [execute](./execute/README.md)                                                | The **EXECUTE** or **PERFORM** statement allows the currently executing program to pause and execute another program. |
| [exit](./exit/README.md)                                                      | The **EXIT** statement halts the execution of a program and returns a numeric exit code to the parent process. |
| [exp](./exp/README.md)                                                        | The **EXP** function returns the mathematical constant to the specified power. |
| [extract](./extract/README.md)                                                | The **EXTRACT** function is an alternative method of accessing values in a dynamic array other than using the &lt;n,n,n&gt; syntax. |
| [fadd](./fadd/README.md)                                                      | This function performs floating point addition of two numeric values. |
| [fdiv](./fdiv/README.md)                                                      | This function performs floating point division on two numeric values. |
| [field](./field/README.md)                                                    | This function returns a multi-character delimited field from within a string. |
| [fields](./fields/README.md)                                                  | The **FIELDS** function is an extension of the [FIELD](./../field) function. |
| [fileinfo](./fileinfo/README.md)                                              | Use the **FILEINFO** function to return information about the specified file variable. |
| [filelock](./filelock/README.md)                                              | The **FILELOCK** statement is used to acquire a lock on an entire file. |
| [fileunlock](./fileunlock/README.md)                                          | This statement is used to release a file lock set by the [FILELOCK](./../filelock) statement. |
| [find](./find/README.md)                                                      | The **FIND** statement allows the location of a specified string within a dynamic array. |
| [findstr](./findstr/README.md)                                                | The **FINDSTR** statement locates a string as a substring of a dynamic array element. |
| [flush](./flush/README.md)                                                    | Writes all the buffers for a sequential I/O file immediately. |
| [fmt](./fmt/README.md)                                                        | This function is useful for formatting data for output, according to a defined mask. |
| [fmts](./fmts/README.md)                                                      | The **FMTS** function may be used to format elements of dynamic.array for output. |
| [fmul](./fmul/README.md)                                                      | This function performs floating point mutiplication on two numeric values. |
| [fold](./fold/README.md)                                                      | The **FOLD** function segments a text string by replacing spaces with  a delimiter at positions defined by a length parameter. |
| [footing](./footing/README.md)                                                | The **FOOTING** statement halts all subsequent output to the terminal at the end of each output page. |
| [for](./for/README.md)                                                        | The **FOR** statement allows the construction of looping constructs within the program, which is controlled by a counting variable; this can be terminated early by expressions tested after every iteration. |
| [for-iterator](./for-iterator/README.md)                                      |  |
| [formlist](./formlist/README.md)                                              | The **FORMLIST** statement creates an active select list from a dynamic array. |
| [fsub](./fsub/README.md)                                                      | The **FSUB** function performs floating-point subtraction on two numeric values. |
| [function](./function/README.md)                                              | Identifies a user-defined function, which can be invoked by other jBASE BASIC programs. |
| [ges](./ges/README.md)                                                        | The function is used to test if elements of one dynamic array are greater than or equal to corresponding elements of another dynamic array. |
| [get](./get/README.md)                                                        | The **GET** statement reads a block of data directly from a device. |
| [getcwd](./getcwd/README.md)                                                  | This function returns the current working directory of the program, which is normally the directory in which execution of the program occurred but possibly changed using the [CHDIR](./../chdir) function. |
| [getenv](./getenv/README.md)                                                  | All processes have an environment associated with them that contains a number of variables indicating the state of various parameters. |
| [getlist](./getlist/README.md)                                                | **GETLIST** allows the program to retrieve a previously stored list (perhaps created with the **SAVE-LIST** command), into a variable. |
| [getusergroup](./getusergroup/README.md)                                      | For UNIX, the jBC function **GETUSERGROUP** returns the group number for the user ID specified by @uid. |
| [getx](./getx/README.md)                                                      | The **GETX** statement reads a block of data (in ASCII hexadecimal format) directly from a device. |
| [gosub](./gosub/README.md)                                                    | The **GOSUB** statement causes execution of a local subroutine, after which execution will continue with the next line of code. |
| [goto](./goto/README.md)                                                      | The **GOTO** statement causes program execution to jump to the code at a specified label. |
| [group](./group/README.md)                                                    | The **GROUP** function is equivalent to the [FIELD](./../field) function. |
| [groupstore](./groupstore/README.md)                                          | The **GROUPSTORE** statement inserts, deletes or replaces one group of characters for another in a string. |
| [heading](./heading/README.md)                                                | **HEADING** halts all subsequent output to the terminal at the end of each page. |
| [headinge-and-headingn](./headinge-and-headingn/README.md)                    |  |
| [hush](./hush/README.md)                                                      | The **HUSH** statement controls character echo of input and output in programs and procs. |
| [iconv](./iconv/README.md)                                                    | The **ICONV()** function converts data in external form such as dates to their internal form. |
| [iconvs](./iconvs/README.md)                                                  | This function converts each element of a dynamic array to a specified internal storage format. |
| [if-(statement)](./if-(statement)/README.md)                                  | Allows for the conditional execution of some statements. |
| [ifs](./ifs/README.md)                                                        | The function returns a **dynamic array** whose elements are chosen individually from one of two dynamic arrays based on the contents of a third dynamic array. |
| [in](./in/README.md)                                                          | The **IN** statement allows the program to receive raw data from the input device, which is normally the terminal keyboard, one character at a time. |
| [incremental-file-errors](./incremental-file-errors/README.md)                |  |
| [index](./index/README.md)                                                    | The **INDEX** function will return the position of a character or characters within another string. |
| [indices](./indices/README.md)                                                | The function finds information about a file's indexes. |
| [inmat](./inmat/README.md)                                                    | The **INMAT** function returns the number of dimensioned array elements. |
| [input](./input/README.md)                                                    | The **INPUT** statement allows the program to collect data from the current input device, which will normally be the terminal keyboard but may be stacked input from the same or separate program. |
| [inputclear](./inputclear/README.md)                                          | The **INPUTCLEAR** statement clears the type-ahead buffer. |
| [inputnull](./inputnull/README.md)                                            | The **INPUTNULL** statement allows the definition of a character that will allow a null input to be seen by the [INPUT@](./../input) statement. |
| [ins](./ins/README.md)                                                        | The **INS** statement allows the insertion of elements into a dynamic array. |
| [insert](./insert/README.md)                                                  | **INSERT** is the function form of the [INS](./../ins) statement, with preference given to the use of [INS](./../ins). |
| [int](./int/README.md)                                                        | The **INT()** function returns the floor of a numeric value. |
| [ioctl](./ioctl/README.md)                                                    | This is an intrinsic function of the jBASE BASIC language, that behaves in a similar manner to the C function ioctl(). |
| [isalnum](./isalnum/README.md)                                                | The function will check that the expression consists of entirely alphanumeric characters. |
| [isalpha](./isalpha/README.md)                                                | The function will check that the expression consists of entirely alphabetic characters. |
| [iscntrl](./iscntrl/README.md)                                                | The **ISCNTRL()** function will check that the expression consists entirely of control characters. |
| [isdigit](./isdigit/README.md)                                                | The **ISDIGIT** function will check that the expression consists of entirely numeric characters. |
| [islower](./islower/README.md)                                                | The **ISLOWER** function will check that the expression consists of entirely lower case characters. |
| [isprint](./isprint/README.md)                                                | The **ISPRINT** function will check that the expression consists of entirely printable characters. |
| [isspace](./isspace/README.md)                                                | The **ISSPACE()** function will check that the expression consists of entirely space type characters. |
| [isupper](./isupper/README.md)                                                | The **ISUPPER()** function will check that the expression consists of entirely upper case characters. |
| [itype](./itype/README.md)                                                    | The **ITYPE** function returns the value resulting from the evaluation of an I-type expression in a jBASE file dictionary. |
| [jbasecoredump](./jbasecoredump/README.md)                                    | This is used as a diagnostic tool for applications, and allows a snapshot of the application to be dumped to an external file for later analysis. |
| [jbasethreadcreate](./jbasethreadcreate/README.md)                            | Use the **JBASETHREADCreate** command to start a new thread. |
| [jbasethreadstatus](./jbasethreadstatus/README.md)                            | The **JBASETHREADStatus** command shows the status of all running threads. |
| [jqlcompile](./jqlcompile/README.md)                                          | **JQLCOMPILE** compiles a jQL statement. |
| [jqlexecute](./jqlexecute/README.md)                                          | **JQLEXECUTE** starts executing a compiled jQL statement. |
| [jqlfetch](./jqlfetch/README.md)                                              | **JQLFETCH** fetches the next result in a compiled jQL statement. |
| [jqlgetproperty](./jqlgetproperty/README.md)                                  | Gets the property of a compiled jQL statement. |
| [jqlputproperty](./jqlputproperty/README.md)                                  | **JQLPUTPROPERTY**sets a property in a compiled jQL statement. |
| [keyin](./keyin/README.md)                                                    | Use the **KEYIN** function to read a single character from the input buffer and return it. |
| [latin1](./latin1/README.md)                                                  | This function converts a UTF-8 byte sequence into the binary or latin1 equivalent. |
| [left](./left/README.md)                                                      | The **LEFT()** function extracts a sub-string of a specified length from the beginning of a string. |
| [len](./len/README.md)                                                        | The **LEN** function returns the character length of the supplied expression. |
| [lendp](./lendp/README.md)                                                    | The **LENDP** function returns the display length of an expression. |
| [lens](./lens/README.md)                                                      | This function returns a dynamic array of the number of bytes in each element of **dynamic.array**. |
| [les](./les/README.md)                                                        | The **LES** function is used to determine whether elements of one dynamic array are less than or equal to the elements of another dynamic array. |
| [ln](./ln/README.md)                                                          | The **LN** function returns the value of the natural logarithm of the supplied value. |
| [localdate](./localdate/README.md)                                            | This function returns an internal date using the specified **Timestamp** and **TimeZone** combination. |
| [localtime](./localtime/README.md)                                            | Returns an internal time using the specified **Timestamp** and **TimeZone** combination. |
| [locate](./locate/README.md)                                                  | The **LOCATE** statement finds the position of an element within a specified dimension of a dynamic array. |
| [lock](./lock/README.md)                                                      | The **LOCK** statement will attempt to set an execution lock thus preventing any other program that respects that lock to wait until this program has released it. |
| [loop](./loop/README.md)                                                      | The **LOOP** construct allows the programmer to specify loops with multiple exit conditions. |
| [lower](./lower/README.md)                                                    | The **LOWER()** function lowers system delimiters in a string to the next lowest delimiter. |
| [maketimestamp](./maketimestamp/README.md)                                    | The function generates a timestamp using a combination of **Internal Date**, **Internal Time** and **Timezone**. |
| [mat](./mat/README.md)                                                        | The **MAT** command is used to either assign every element in a specified array to a single value or to assign the entire contents of one array to another. |
| [matbuild](./matbuild/README.md)                                              | The **MATBUILD** statement creates a dynamic array out of a dimensioned array. |
| [matches](./matches/README.md)                                                | The **MATCH** or **MATCHES** function applies pattern matching to an expression. |
| [matchfield](./matchfield/README.md)                                          | The function checks a **string** against a match **pattern**, as does the [MATCH](. |
| [matparse](./matparse/README.md)                                              | The **MATPARSE** statement is used to assign the elements of a matrix from the elements of a dynamic array. |
| [matread](./matread/README.md)                                                | The **MATREAD** statement allows a record stored in a jBASE file to be read and mapped directly into a dimensioned array. |
| [matreadu](./matreadu/README.md)                                              | This statement allows a record stored in a jBASE file to be read and mapped directly into a dimensioned array. |
| [matwrite](./matwrite/README.md)                                              | The **MATWRITE** statement transfers the entire contents of a dimensioned array to a specified record on disc. |
| [matwriteu](./matwriteu/README.md)                                            | The **MATWRITEU** statement transfers the entire contents of a dimensioned array to a specified record on file, in the same manner as the [MATWRITE](./../matwrite) statement. |
| [maximum](./maximum/README.md)                                                | The function returns the element of a dynamic array with the highest numerical value. |
| [minimum](./minimum/README.md)                                                | This function returns the element of a dynamic array with the lowest numerical value. |
| [mod&rem](./mod&rem/README.md)                                                | The **MOD** or **REM** functions return the arithmetic modulo of two numeric expressions. |
| [mods](./mods/README.md)                                                      | The **MODS** function creates a dynamic array of the remainder after the integer division of corresponding elements of two dynamic arrays. |
| [msleep](./msleep/README.md)                                                  | Allows the program to pause execution for a specified number of **milliseconds**. |
| [muls](./muls/README.md)                                                      | The function creates a dynamic array of the element-by-element multiplication of two dynamic arrays. |
| [neg](./neg/README.md)                                                        | The NEG function is used to invert the arithmetic value of an **expression**. |
| [negs](./negs/README.md)                                                      | This function returns the negative values of all the elements in a **dynamic array**. |
| [nes](./nes/README.md)                                                        | The function is used to determine whether elements of one dynamic array are equal to the elements of another dynamic array. |
| [nobuf](./nobuf/README.md)                                                    | jBASE can buffer for sequential input and output operations. |
| [not](./not/README.md)                                                        | The **NOT** function is used to invert the Boolean value of an expression. |
| [nots](./nots/README.md)                                                      | The function returns a dynamic array of the logical complements of each element of **dynamic.array**. |
| [null](./null/README.md)                                                      | The **NULL** statement performs no function but can be useful in clarifying syntax and where the language requires a statement but the programmer does not wish to perform any actions. |
| [num](./num/README.md)                                                        | The **NUM** function is used to test arguments for numeric values. |
| [nums](./nums/README.md)                                                      | The **NUMS** function is used to determine whether the elements of a dynamic array are numeric or non-numeric strings. |
| [oconv](./oconv/README.md)                                                    | Use the **OCONV** statement to convert internal representations of data to their external form. |
| [oconvs](./oconvs/README.md)                                                  | The **OCONVS** function converts the elements of a dynamic.array to a specified format for external output. |
| [ongoto](./ongoto/README.md)                                                  | The [ON...GOSUB](./../gosub) and **ON...GOTO** statements are used to transfer program execution to a label based upon a calculation, or a condition being met. |
| [open](./open/README.md)                                                      | The **OPEN** statement opens a file or device to a descriptor variable. |
| [opendev](./opendev/README.md)                                                | Opens a device (or file) for sequential writing and/or reading. |
| [openindex](./openindex/README.md)                                            | The **OPENINDEX** statement is used to open a particular index definition for a particular file. |
| [openpath](./openpath/README.md)                                              | The **OPENPATH** statement opens a file (given an absolute or relative path) to a descriptor variable within jBASE BASIC. |
| [openseq](./openseq/README.md)                                                | Opens a file for sequential writing and/or reading. |
| [openser](./openser/README.md)                                                | The **OPENSER** statement is used to handle Serial IO. |
| [ors](./ors/README.md)                                                        | The **ORS** function is used to create a dynamic array of the logical OR of corresponding elements of two dynamic arrays. |
| [osbread](./osbread/README.md)                                                | The **OSBREAD** command reads data from a file starting at a specified byte location for a certain length of bytes, and assigns the data to a variable. |
| [osbwrite](./osbwrite/README.md)                                              | The **OSBWRITE** command writes an expression to a sequential file starting at a specified byte location. |
| [osclose](./osclose/README.md)                                                | The **OSCLOSE** command closes a sequential file that was previously opened with the [OSOPEN](./../osopen) or [OPENSEQ](./../openseq) command. |
| [osdelete](./osdelete/README.md)                                              | The **OSDELETE** command deletes a NT or UNIX file. |
| [osopen](./osopen/README.md)                                                  | The **OSOPEN** command opens a sequential file that does not use CHAR(10) as the line delimiter. |
| [osread](./osread/README.md)                                                  | Reads an OS file. |
| [out](./out/README.md)                                                        | The **OUT** statement is used to send raw characters to the current output device (normally the terminal). |
| [output-formatting](./output-formatting/README.md)                            |  |
| [page](./page/README.md)                                                      | Prints any [FOOTING](./../footing) statement, throws a **PAGE** and prints any heading statement on the current output device. |
| [pause](./pause/README.md)                                                    | The **PAUSE** statement allows processing to be suspended until an external event triggered by a [WAKE](./../wake) statement from another process or a timeout occurs. |
| [pcperform](./pcperform/README.md)                                            | **PCPERFORM** is synonymous with [PERFORM](. |
| [precision](./precision/README.md)                                            | The **PRECISION** statement informs jBASE as to the number of digits of precision it uses after the decimal point in numbers. |
| [print](./print/README.md)                                                    | The **PRINT** statement sends data directly to the current output device, which will be either the terminal or the printer. |
| [printer](./printer/README.md)                                                | Use the **PRINTER** statement to control the destination of output from the [PRINT](./../print) statement. |
| [printerr](./printerr/README.md)                                              | This function is used to print standard jBASE error messages. |
| [procread](./procread/README.md)                                              | **PROCREAD** is used to retrieve data passed to programs from a jCL program. |
| [procwrite](./procwrite/README.md)                                            | **PROCWRITE** is used to pass data back to the primary input buffer of a calling jCL program. |
| [program](./program/README.md)                                                | **PROGRAM** performs no function other than to document the source code. |
| [prompt](./prompt/README.md)                                                  | Used to change the **PROMPT** character used by terminal input commands. |
| [putenv](./putenv/README.md)                                                  | The **PUTENV** function is used to set environment variables for the current process. |
| [pwr](./pwr/README.md)                                                        | The **PWR** function raises a number to the n'th power. |
| [quote-&-dquote-&-squote](./quote-&-dquote-&-squote/README.md)                | These three functions will put single or double quotation marks at the beginning and end of a string. |
| [raise](./raise/README.md)                                                    | The **RAISE** function raises system delimiters in a string to the next highest delimiter. |
| [randomize](./randomize/README.md)                                            | Use the **RANDOMIZE** statement with an expression to make the [RND](. |
| [read](./read/README.md)                                                      | The **READ** statement allows a program to read a record from a previously opened file into a variable. |
| [readblk](./readblk/README.md)                                                | The **READBLK** statement is used to read a block of data, of a specified length from a file opened for sequential processing and assigns it to **variable**. |
| [readl](./readl/README.md)                                                    | The **READL** statement allows a process to read a record from a previously opened file into a variable and takes a read-only shared lock on the record. |
| [readlist](./readlist/README.md)                                              | **READLIST** allows the program to retrieve a previously stored list, into a variable. |
| [readlist](./README.md/README.md)                                             |  |
| [readnext](./readnext/README.md)                                              | **READNEXT** retrieves the next element in a list variable. |
| [readnext-key](./readnext-key/README.md)                                      | The regular jBC READNEXT statement is extended in two ways. |
| [readprev](./readprev/README.md)                                              | This statement is syntactically similar to the [READNEXT](./../readnext) but it works in reverse order. |
| [readselect](./readselect/README.md)                                          |  |
| [readseq](./readseq/README.md)                                                | The statement allows for reading from a file opened for sequential access. |
| [readt](./readt/README.md)                                                    | The **READT** statement is used to read a range of tape devices 0-9. |
| [readu](./readu/README.md)                                                    | The **READU** statement allows a program to read a record from a previously opened file into a variable. |
| [readv](./readv/README.md)                                                    | The **READV** statement allows a program to read a specific field from a record in a previously opened file into a variable. |
| [readvl](./readvl/README.md)                                                  | The **READVL** statement acquires a shared record lock and then reads a field from the record. |
| [readvu](./readvu/README.md)                                                  | The **READVU** statement allows a program to read a specific field in a record in a previously opened file into a variable. |
| [readxml](./readxml/README.md)                                                | This function reads a record and from it, outputs the data retrieved in XML format. |
| [recordlocked](./recordlocked/README.md)                                      | This function is used to ascertain the status of a record lock. |
| [regexp](./regexp/README.md)                                                  | The **REGEXP** function is a powerful function that allows pattern matching using UNIX regular expressions. |
| [release](./release/README.md)                                                | The **RELEASE** statement enables a program to explicitly release record locks without updating the records using [WRITE](./../write). |
| [remove](./remove/README.md)                                                  | **REMOVE** will successively extract delimited strings from a dynamic array. |
| [replace](./replace/README.md)                                                | **REPLACE** is an obsolete way to assign to dynamic arrays via a function. |
| [return](./return/README.md)                                                  | The **RETURN** statement transfers program execution to the caller of a subroutine/function or to a specific label in the program. |
| [rewind](./rewind/README.md)                                                  | The **REWIND** statement will issue a rewind command to the device attached to the specified channel. |
| [right](./right/README.md)                                                    | The **RIGHT** function returns a sub-string composed of the last n characters of a specified string. |
| [rnd](./rnd/README.md)                                                        | The **RND** function allows the generation of random numbers by a program. |
| [rqm](./rqm/README.md)                                                        |  |
| [rtndata](./rtndata/README.md)                                                |  |
| [sadd](./sadd/README.md)                                                      | The **SADD** function performs string addition of two base 10-string numbers. |
| [sdiv](./sdiv/README.md)                                                      | The **SDIV** function performs a string division of two base 10-string numbers and rounds the result to 14 decimal places. |
| [seek](./seek/README.md)                                                      | The **SEEK** statement is used to move the file pointer by an offset specified in bytes, relative to the current position, the beginning of the file, or the end of the file. |
| [select](./select/README.md)                                                  | The **SELECT**statement creates a select list of elements in a specified variable. |
| [selectindex](./selectindex/README.md)                                        | This statement will create a dynamic array of record keys based on a single selection of a single index key value. |
| [send](./send/README.md)                                                      | The **SEND** statement sends a block of data directly to a device. |
| [sendx](./sendx/README.md)                                                    | The **SENDX** statement sends a block of data (in hexidecimal) directly to a device. |
| [sentence](./sentence/README.md)                                              | The **SENTENCE** function allows a program to locate the command used to invoke it and the arguments it was given. |
| [seq](./seq/README.md)                                                        | The **SEQ** function returns numeric ASCII value of a character. |
| [seqs](./seqs/README.md)                                                      | The **SEQS** function is used to convert a dynamic array of ASCII characters to their numeric string equivalents. |
| [sequential-file-extensions](./sequential-file-extensions/README.md)          |  |
| [serial-i&o-extensions](./serial-i&o-extensions/README.md)                    | Serial IO to the com ports on NT and to device files on UNIX can be achieved using the sequential file statements. |
| [sin](./sin/README.md)                                                        | The **SIN** function returns the mathematical sine value of a numeric expression. |
| [sleep](./sleep/README.md)                                                    | **Sleep** allows the program to pause execution for a specified period. |
| [smul](./smul/README.md)                                                      | The **SMUL** function performs string multiplication of two base 10-string numbers. |
| [sort](./sort/README.md)                                                      | The **SORT** function sorts all elements of a dynamic array in ascending left-justified order. |
| [soundex](./soundex/README.md)                                                | The **SOUNDEX** function allows for phonetic conversions of strings. |
| [space](./space/README.md)                                                    | The **SPACE** function generates a specific number of ASCII space characters. |
| [spaces](./spaces/README.md)                                                  | The **SPACES** function returns a dynamic array with elements composed of blank spaces. |
| [splice](./splice/README.md)                                                  | The **SPLICE** function creates a dynamic array of the element-by-element concatenation of two dynamic arrays, separating concatenated elements by a specified value. |
| [spooler](./spooler/README.md)                                                | The **SPOOLER** function returns information from the jBASE spooler. |
| [sqrt](./sqrt/README.md)                                                      | The **SQRT** function returns the mathematical square root of a value. |
| [sselect](./sselect/README.md)                                                | The **SSELECT** statement may be used to create: |
| [sselectn](./sselectn/README.md)                                              |  |
| [sselectv](./sselectv/README.md)                                              |  |
| [ssub](./ssub/README.md)                                                      | The **SSUB** function performs string subtraction of two base 10-string numbers. |
| [status-function](./status-function/README.md)                                |  |
| [status-statement](./status-statement/README.md)                              | The **STATUS** statement is used to determine the status of an open file. |
| [stop](./stop/README.md)                                                      |  |
| [str](./str/README.md)                                                        | The **STR** function allows the duplication of a string a number of times. |
| [strs](./strs/README.md)                                                      | The **STRS** function to produces a dynamic array containing the specified number of repetitions of each element of dynamic.array. |
| [subroutine](./subroutine/README.md)                                          | The **SUBROUTINE** statement is used at the start of any program that will be called externally by the [CALL](./../call) statement. |
| [subs](./subs/README.md)                                                      | The **SUBS** function returns a dynamic array, the content of which is derived by subtracting each element of the second dynamic array argument from the corresponding element of the first dynamic array argument. |
| [substrings](./substrings/README.md)                                          | The **SUBSTRINGS** function returns a dynamic array of elements, which are sub-strings of the corresponding elements in a supplied dynamic array. |
| [sum](./sum/README.md)                                                        | The **SUM** function sums numeric elements in a dynamic array. |
| [swap](./swap/README.md)                                                      | The **SWAP** function operates on a variable and replaces all occurrences of one string with another. |
| [system-functions](./system-functions/README.md)                              |  |
| [tan](./tan/README.md)                                                        | The **TAN** function returns the mathematical tangent of an angle. |
| [the-'@'-function](./the-'@'-function/README.md)                              | The @ function is used to position the cursor to a specific point on the terminal screen. |
| [time](./time/README.md)                                                      | The **TIME** function returns the current system time. |
| [timedate](./timedate/README.md)                                              | The **TIMEDATE** function returns the current time and date as a printable string. |
| [timediff](./timediff/README.md)                                              | This function returns the interval between two timestamp values as a dynamic array. |
| [timeout](./timeout/README.md)                                                | The statement is used to terminate a read statement when no data has been read in a specified time period. |
| [timestamp](./timestamp/README.md)                                            | This function returns a Universal Coordinated Time (UTC) timestamp value as decimal seconds i.e. |
| [trans](./trans/README.md)                                                    | This function will return the data value of a field, given the name of the file, the record key, the field number, and an action code. |
| [transabort](./transabort/README.md)                                          | The statement is used to abort the current transaction and reverse any updates to the database. |
| [transend](./transend/README.md)                                              | The **TRANSEND** statement is used to mark the end of a successfully completed transaction. |
| [transquery](./transquery/README.md)                                          | The **TRANSQUERY** function is used to detect whether or not a transaction is active on the current process. |
| [transtart](./transtart/README.md)                                            | In transaction processing, the **TRANSTART** statement is used to mark the beginning of a transaction. |
| [trim](./trim/README.md)                                                      | The **TRIM** function allows characters to be removed from a string in a number of ways. |
| [trimb](./trimb/README.md)                                                    |  |
| [trimbs](./trimbs/README.md)                                                  | The **TRIMBS** function removes all trailing spaces and tabs from each element of dynamic.array. |
| [trimf](./trimf/README.md)                                                    |  |
| [trimfs](./trimfs/README.md)                                                  | This function removes all leading spaces and tabs from each element of dynamic array, reducing multiple occurrences of spaces and tabs to a single space or tab . |
| [udtexecute](./udtexecute/README.md)                                          |  |
| [unassigned](./unassigned/README.md)                                          | The **UNASSIGNED** function allows a program to determine whether a variable has been assigned a value. |
| [uniquekey](./uniquekey/README.md)                                            | The function returns a unique 16-byte character key, that it generates at each call to the function. |
| [unlock](./unlock/README.md)                                                  | The **UNLOCK** statement releases a previously [LOCK](./../lock)ed execution lock. |
| [upcase](./upcase/README.md)                                                  |  |
| [utf8](./utf8/README.md)                                                      | The **UTF8** function converts a latin1 or binary string into the UTF-8 equivalent byte sequence. |
| [wake](./wake/README.md)                                                      | The **WAKE** statement wakes a suspended process, which has executed a [PAUSE](./../pause) statement. |
| [weof](./weof/README.md)                                                      | The **WEOF** statement allows the program to write an EOF mark on an attached tape device. |
| [weofseq](./weofseq/README.md)                                                | **WEOFSEQ** writes end of file on file opened for sequential access, forcing truncation of the file at the current file pointer. |
| [write](./write/README.md)                                                    | The **WRITE** statement allows a program to write a record into a previously opened file. |
| [writeblk](./writeblk/README.md)                                              | The **WRITEBLK** statement writes a block of data to a file opened for sequential processing. |
| [writelist](./writelist/README.md)                                            | **WRITELIST** allows the program to store a list held in a jBASE BASIC variable to the global list file. |
| [writeseq](./writeseq/README.md)                                              | This statement will write to a file opened for sequential access. |
| [writeseqf](./writeseqf/README.md)                                            | The **WRITESEQF** statement writes new lines to a file opened for sequential processing, and ensures that data is physically written to disk (that is, not buffered) before the next statement in the program is executed. |
| [writet](./writet/README.md)                                                  | The **WRITET** statement enables data to be written to a range of tape devices between 0-9. |
| [writeu](./writeu/README.md)                                                  | The **WRITEU** statement allows a program to write a record into a previously opened file. |
| [writev](./writev/README.md)                                                  | The **WRITEV** statement allows a program to write a specific field of a record in a previously opened file. |
| [writevu](./writevu/README.md)                                                | The **WRITEVU** statement allows a program to write a specific field on a record in a previously opened file. |
| [writexml](./writexml/README.md)                                              | This writes a dynamic array in XML format to a hash file. |
| [xlate](./xlate/README.md)                                                    | The **XLATE** function will return the data value of a field, given the name of the file, the record key, the field number, and an action code. |
| [xmltodyn](./xmltodyn/README.md)                                              | This function converts XML to a dynamic array. |
| [xmltoxml](./xmltoxml/README.md)                                              | This function transforms XML using a given XSL. |
| [xtd](./xtd/README.md)                                                        | The **XTD** function converts hexadecimal numbers into its decimal equivalent. |

[Back to Knowledgebase](./../README.md)

<PageFooter />
