# Emulation revision

**Created At:** 3/5/2019 12:11:31 PM  
**Updated At:** 7/19/2019 9:33:43 AM  


## Description

Emulation support is provided by the **Config\_EMULATE** file in the **config** sub directory of the jBASE release directory. All text in the file is case insensitive.

The format of that file is:

- **#**Denotes a comment and the line is ignored.
- **x:**Denotes a label, signifying the start of an emulation definition.
- **any**Denotes an emulation definition.


Labels must be alpha-numeric, i.e. no periods, underlines, etc. If one label directly follows another then the label is synonym for the same emulation definition. The emulation definition ends when another label or the end of file encountered.

Multiple emulation definitions can be defined on the same line with each definition delimited by a comma or a semicolon. Emulation definitions can be interrupted by blank lines and can contain any amount of white space, i.e. one or more spaces or tab characters.

Emulation definitions can be declared 'on', 'yes' or 'true' to mean the emulation is enabled or similarly use the strings 'off', 'no' or 'false' to mean the emulation effect is disabled.

To use a different set of emulation definitions from the default set, set the environment variable **JBCEMULATE**in your current environment to the required emulation label. When the environment variable is not configured then the emulation definition defined by the default label is in effect. If the default label is not present then the first label detected will be used for the default emulation.

Generally any emulation definitions which affect BASIC, (like the @(-n) codes), use the JBCEMULATE environment variable when the programs are compiled, whereas the other definitions tend to be used at runtime, when the program is executed.

You can create your own custom emulation sections in the **Config\_EMULATE** file but it is recommended to use Alternate Emulations for this purpose.



## Alternate Emulations

An Alternate Emulation has the general form:

```
Config_EMULATE_name
```

where **name** is the name of the emulation. These emulations are also stored in the **config**directory under **$JBCRELEASEDIR**. and follow the exact same rules. The file name of the alternate emulation must be the same as the **label**, i.e. the **x:** line.

Alternate Emulations can contain any combination of configuration options except **dup**entries. If you require the behavior of a **dup**entry then all configuration settings in that section must be explicitly added to the Alternate Emulation.

For example, to create an alternate **jbase**emulation called **jcustom**,which changes the value of the **old\_jql\_output\_style** setting, would be:

```
File name: Config_EMULATE_jcustom

jcustom:
      @(-1) = clear_screen ; @(-2) = cursor_home ; @(-3) = clear_eos ; @(-4) = clear_eol   
      @(-5) = blink_on ; @(-6) = blink_off
      @(-7) = prot_on ; @(-8) = prot_off ;
      @(-9) = cursor_left ; @(-10) = cursor_up ; @(-20) = cursor_down ; @(-19) = cursor_right
      @(-13) = reverse_on ; @(-14) = reverse_off
      @(-15) = underline_on ; @(-16) = underline_off
      @(-17) = printer_on ; @(-18) = printer_off
      @(-33) = background white ; @(-34) = background yellow ; @(-35) = background magenta ; @(-36) = background red
      @(-37) = background cyan ; @(-38) = background green ; @(-39) = background blue ; @(-40) = background black
      @(-41) = foreground white ; @(-42) = foreground yellow ; @(-43) = foreground magenta ; @(-44) = foreground red
      @(-45) = foreground cyan ; @(-46) = foreground green ; @(-47) = foreground blue ; @(-48) = foreground black
      @(-57) = foreground white ; @(-58) = foreground yellow ; @(-59) = foreground magenta ; @(-60) = foreground red
      @(-61) = foreground cyan ; @(-62) = foreground green ; @(-63) = foreground blue ; @(-64) = foreground black
      @(-200) = cursor_on , @(-201) = cursor_off
      list_keys = true
      reality_video = true
      jbase_field = true
      named_common = null
      readv0 = key
      treat_with_as_or_with = true
      dates_upper_case = yes
      use_sql_syntax_for_select = false
      old_jql_output_style = true
      itype_trans_replace_delim = false
      itype_unquoted_numeric_literal = true
      enter_keeps_common_data = false
      error_numbers_are_single_attribute = false
```

To use this definition, set the **JBCEMULATE**environment variable to **jcustom**, e.g.

```
export JBCEMULATE=jcustom   [Linux]
set JBCEMULATE=jcustom      [Windows]
```

Note that you can't use the **dup** option with alternate emulations. In other words, you can't do something like this:

```
jcustom:
      dup = jbase
      old_jql_output_style = true
```

The entries must be expanded explicitly.

### Configuration Definitions


| Variable | Description | Set At: | ?  |
| --- | --- | --- | --- |
| **allow\_bad\_day\_of\_month = true|false**<br> | If set, allows invalid date conversions like 'ICONV('31 FEB 19', 'D')' to convert to a  valid date; '03 MAR 19' .<br> | Run Time<br> | + |
| **allow\_unassigned\_assignment = true|false**<br> | Suppress "UNASSIGNED VARIABLE" message where "X=Y" and Y has not been assigned.<br> | Run Time<br> | <br> |
| **alternate\_chain\_exit = true|false**<br> | If set then under certain circumstances drops an extra run level on returning from a CHAIN command. This is an emulation of jBASE 3.4 behaviour. Current behaviour is believed to be preferable. Only set this if necessary for backwards compatibility.<br> | Run Time<br> | <br> |
| **alternative\_oconv = true|false**<br> | If set then for the "DD" and "DM" output conversions, single digit results are prefixed by zero. Default for Sequoia is true.<br> | Run Time<br> | + |
| **breakon\_l\_suppresses\_blank\_line = true|false**<br> | If set then "L" in a "BREAK-ON" clause means suppress the blank line before the data line. The default is to skip the break line, i.e. only output a blank line.<br> | Run Time<br> | <br> |
| **byexp\_mv\_dup\_like\_d3 = true|false**<br> | If set, when using BY-EXP, reuse the first, and only, value in single valued attributes. The default behaviour, i.e. with "byexp\_mv\_dup\_like\_d3" unset or false, is to assume a null value for the 2nd and subsequent values. Currently, this option is not set under any emulation in the "Config\_EMULATE" file supplied with the jBASE Installation.<br> | Run Time<br> | <br> |
| **case\_insensitive\_file\_ids = true|false**<br> | If set, try and ignore the case of file names, default behaviour will be to open the first UPPER CASE version of the file name.<br> | Run Time<br> | <br> |
| **case\_insensitive\_md = true|false**<br> | If set, the MD does not care about case, everything should end up as UPCASE.<br> | Run Time<br> | <br> |
| **case\_insensitive\_queries = true|false**<br> | If set, verbs used in jQL queries and dictionaries ignore case.<br> | Run Time<br> | <br> |
| **case\_insensitive\_runtime\_strings = true|false**<br> | If set, any jBASE functions which accept a VAR as a parameter will UPCASE it.<br> | Run Time<br> | <br> |
| **compiler\_case\_insensitive\_subroutines = true|false**<br> | If set, all SUBROUTINE names are case insensitive.<br> | Compile Time<br> | <br> |
| **compiler\_case\_insensitive\_variables\_keywords = true|false**<br> | If set, the compiler ignores the case on variable names and keywords. [Not currently implemented]<br> | Compile Time<br> | <br> |
| **chk\_typeahead\_on\_inputminus = true|false**<br> | If set then check for typeahead when INPUT x,-1 syntax is used.<br> | Run Time<br> | <br> |
| **conv\_mct\_uv\_compat = true|false**<br> | Universe compatible capitalisation after non-alpha characters.<br> | Run Time<br> | <br> |
| **conv\_old\_mct = true|false**<br> | Capitalise character in a string following non-alpha character, e.g. "-" (hyphen) when the string is used in an OCONV() function. For instance:<br><br>```<br>string = 'Bas-e'
OCONV(string, 'MCT')<br>```<br>The resulting string is "BASE"  | Run Time<br> | + |
| **dates\_upper\_case = yes|no**<br> | If "yes" then date conversions (e.g. "DM" and "DW") force the text to uppercase format, e.g. "March" is forced to "MARCH". Without this option, the casing for dates is dependent upon the operating system.<br> | Run Time<br> | + |
| **defer\_header\_output = true|false**<br> | Set by default under Ultimate emulation. Any Basic HEADER will be output at the next natural page break. Normally the HEADER is issued immediately. The output of the HEADER can also be deferred, to the next natural page break, by prefixing the HEADER data with an Attribute Mark (@AM).<br> | Run Time<br> | <br> |
| **dict\_sub\_call = true|false**<br> | On some emulations, when calling a SUBROUTINE from a DICT item, a parameter will be passed to the SUBROUTINE which is the current item -- if this is the case, set this to "true".<br> | Run Time<br> | <br> |
| **dot\_not\_numeric = true|false**<br> | Set to true for compatibility with systems that expect ".", "+" and "-" to be treated as non-numeric characters.<br> | Run Time<br> | <br> |
| **dup = name**<br> | Duplicates the definition "name", where "name:" is a previously defined "label:", i.e. this "definition" inherits the behaviour defined for "name:", "option" settings following a "dup" override the inherited behaviour for that "option".<br> | N/A<br> | <br> |
| **enter\_keeps\_common\_data = true|false**<br> | Set if you want the ENTER statement to retain global common when "(I" option is used.<br> | Run time<br> | <br> |
| **error\_numbers\_are\_single\_attribute = true|false**<br> | If set, check that the first value is a number, if so use it as the error message, (i.e., return 401 instead of 401]QLSELNO) (Could be problematic).<br> | Run time<br> | <br> |
| **ext\_pattern\_match = true|false**<br> | For systems which use extended pattern matching.<br> | Compile Time<br> | <br> |
| **format\_defaults\_no\_decimals = true|false**<br> | If set, a format mask that does not specify decimal places will not output any decimals. Default is to output all decimal places.<br> | Run time<br> | <br> |
| **generic\_pick = true|false**<br> | The emulation will otherwise behave as if coming from a Pick environment.<br> | Compile Time1<br> | <br> |
| **generic\_prime = true|false**<br> | The emulation will otherwise behave as if coming from a Prime environment.<br> | Compile Time1<br> | <br> |
| **generic\_reality = true|false**<br> | The emulation will otherwise behave as if coming from a Reality Operating System environment.<br> | Compile Time1<br> | <br> |
| **generic\_universe = true|false**<br> | The emulation will otherwise behave as if coming from a Universe system.<br> | Compile Time1<br> | <br> |
| **generic\_unidata**<br> | The emulation will otherwise behave as if coming from a Unidata environment.<br> | Compile Time1<br> | <br> |
| **header\_with\_s = yes|no**<br> | For systems (Sequoia) S-types with null "header" WILL use the default column heading.<br> | Run Time<br> | <br> |
| **hush\_input\_and\_output = true|false**<br> | If set then control both input and output on HUSH.<br> | Run Time1<br> | <br> |
| **iconv\_nonnumeric\_return\_null = true|false**<br> | If true then ICONV will return null instead of the original value when that value is non-numeric and numeric is expected.<br> | Run Time<br> | <br> |
| **iconv\_strip\_leading\_zeros = true|false**<br> | When set, ICONV() will strip any leading whitespace on the string being operated on. | Run Time | +  |
| **insert\_default\_zero\_to\_one = true|false**<br> | If set, treat a param value of zero as one for INSERT function.<br> | Run Time<br> | <br> |
| **invert\_F\_correl = yes|no**<br> | Set this for systems (Reality) where the F correlative operates on the top stack elements in the reverse order to that expected for certain operators<br> | Run Time<br> | <br> |
| **itype\_trans\_replace\_delim = true|false**<br> | Set to replace delimiters with spaces in the TRANS() function ( ITYPES only ).<br> | Run Time<br> | <br> |
| **itype\_unquoted\_numeric\_literal = true|false**<br> | Set for systems (Universe/Unidata ) where the 3rd and 4th parameters of the 'FIELD'' function can be specified as an unquoted numeric. The unquoted numeric will be treated as a numeric literal in these cases, rather than an attribute reference.<br> | Run Time<br> | <br> |
| **jbase\_field = yes|no**<br> | For systems (jBASE and Prime), FIELD function will use the entire delimiter not just the first character.<br> | Run Time<br> | <br> |
| **jpqn\_replace\_semicolon = true|false**<br> | Set by default under Ultimate emulation. When moving data from the Input buffer to the Primary Output buffer using the A command in PQN Procs, any semicolons are replaced with specified delimiter, e.g. : A' changes abc;def;xyz to abc"def"xyz.<br> | Run Time<br> | <br> |
| **jql\_A\_substring\_literal**<br> | For systems (as yet unknown) which assume unquoted numerics (inside substring extraction) should be treated as Numeric literals (NOT attribute references as expected by default).<br> | Run Time<br> | <br> |
| **jql\_acalc\_int\_only**<br> | Set for systems (Reality, R83, Universe) where integer only arithmetic is performed in calculations within "A;" correlatives/conversions.<br> | Run Time<br> | <br> |
| **jql\_divide\_by\_zero\_zero = true|false**<br> | For systems (R91), division by zero in conversions/correlatives will return zero. (The default behaviour is to return the numerator unchanged).<br> | Run Time<br> | <br> |
| **jql\_mv\_subcall = true|false**<br> | For systems (Sequoia) the user subroutine will be called for each multivalue and subvalue in data being processed by jQL. Default is false<br> | Run Time<br> | <br> |
| **length\_field\_formatting = true|false**<br> | For systems that precede formatting with a length field.<br> | Run Time<br> | <br> |
| **list\_keys = yes|no**<br> | If set then commands such as T-DUMP , T-LOAD , COPY will by default display all the record keys and use the (I) option to suppress this. Without this option then by default the reverse is true e.g. T-DUMP will not list any record keys but the (I) option indicates that record keys should be displayed<br> | Run Time2<br> | <br> |
| **locate\_null\_only\_in\_array = yes|no**<br> | Set for systems requiring null to only match within the real array, not the implied array, e.g. : FIND "" IN "abc" will return 'true' under the default mode.<br> | Run Time<br> | <br> |
| **long\_who = yes|no**<br> | If set, the WHO command is extended to give the node name and UNIX account name, in addition to the port associated to the current user.<br> | Run Time<br> | + |
| **log\_runtime\_errors = true|false**<br> | If true, runtime errors such as divide by zero are logged in the $JBCRELEASEDIR/runtime-errors directory, assuming the error message in $JBCRELEASEDIR/jbcmessages contains the string ^LOGERRORS^.<br> | Run Time<br> | <br> |
| **make\_locate\_dr\_like\_dn = true|false**<br> | Set for systems requiring the DR of the LOCATE statement to act like DN.<br> | Compile Time<br> | <br> |
| **match\_last\_delimiter = true|false**<br> | If set to 'true' then the last delimiter in pattern match string is used within the pattern to match, e.g.: "a]b]c]" will match "c]".<br> | Run Time<br> | <br> |
| **matread\_assigns\_to\_end = true | false**<br> | Additional attributes are appended to the last element of a DIMensioned array by 'MATREAD'. By default additional attributes are returned in element '0' of the DIMensioned array. Set 'true' under Sequoia emulation. [Runtime]<br> | Run Time<br> | <br> |
| **md\_int\_only = true | false**<br> | If set, only integers will be allowed in MD or MR conversions. If a decimal number is used then it will be treated as non-numeric, returning the original value, e.g. OCONV(12.99,'MD2') returns '12.99' instead of '0.13' .<br> | Run Time<br> | + |
| **multiple\_cmd\_execution = true | false**<br> | For systems that allow execution of multiple commands if provided as a dynamic array to 'PERFORM'/'EXECUTE' statements.<br><br>incase a CAPTURING clause is added to the EXECUTE/PERFORM, only the result of the last EXECUTEd program is returned.<br> | Run Time<br> | + |
| **named\_common = unassigned|null|zero**<br> | Indicates how to set named common when first referenced. Default is unassigned.<br>'setting' can be :<br><ol><li>&quot;zero&quot; to initialise to numeric 0.</li><li>&nbsp;&quot;unassigned&quot; to keep it as an unassigned variable.</li><li>&nbsp;&quot;null&quot; to create it as a zero length null string.</li></ol> | Run Time2<br> | <br> |
| **no\_equate\_on\_call = true | false**<br> | If set, inhibit the Equate processing on the 'Subroutine' name specified in CALL statements but not CALL @ statements.<br> | Run Time<br> | <br> |
| **no\_extra\_delimiter = true|false**<br> | For systems ( currently Sequoia and R83 ) which do not insert a delimiter (AM/VM/SVM) if the current string being appended to ( by specifying '-1' as the parameter to append/insert before ) has a 'trailing' delimiter (AM/VM/SVM ) already. This behaviour is true for all of :<br><br>```<br>dyn_array<-1> = whatever ,
x = INSERT( dyn_array,-1,.., ..; whatever )<br>```<br><br>and<br><br>```<br>INS whatever BEFORE dyn_array<-1,..,...><br>```<br><br><br> | Compile Time<br> | <br> |
| **no\_id\_prompt = true|false**<br> | For systems (Sequoia) which do NOT 'prompt for ids' when using 'QSELECT' (for example) and no items are specified. If 'no\_id\_prompt' is set do NOT 'prompt' for the item ids but assume '\*' (i.e. ALL items) are required.<br> | Run Time<br> | <br> |
| **no\_value\_maths = true|false**<br> | If set to 'true' then jBASE will NOT perform automatic multi-value maths on a non-numeric string, e.g. : A = "12":@AM:"3" + 1 will fail with a 'NON\_NUMERIC' error.<br> | Run Time<br> | <br> |
| **nopage\_null\_header = true|false**<br> | For systems (as yet unknown) which do NOT expect a pause at the end of Page when a Null HEADING is requested in Basic. The default behaviour is to leave this 'flag' unset.<br> | Run Time<br> | <br> |
| **null\_eq\_zero = true|false**<br> | For systems (Universe) right justified null fields will sort equal to zero.<br> | Run Time<br> | <br> |
| **oconv\_format\_null = true|false**<br> | For systems whose OCONV functions force formatting of null values.<br> | Run Time<br> | <br> |
| **oconv\_no\_mask\_formatting = true|false**<br> | For systems that do not use OCONV mask formatting when value is null or nonnumeric.<br> | Run Time<br> | <br> |
| **oconv\_no\_scale\_formatting = true|false**<br> | For systems that do not use a scaling factor by default for OCONV formatting.<br> | Compile Time<br> | <br> |
| **old\_jql\_output\_style = true|false**<br> | If set then the number of spaces between columns, for the jQL **LIST**and **SORT**commands, is always 1.<br><br>If not set then jQL adjusts the spacing between columns depending on the number of columns and the width setting of the TERM command. The maximum number of spaces between columns is 4.<br><br>This option is only effective when the jQL display is in columnar format.<br> | Run Time<br> | + |
| **openseq\_creates = true|false**<br> | When set, the jBC OPENSEQ statement will create the specified file if it does not exist. This parameter is set by default for Sequoia.<br> | Run Time<br> | <br> |
| **page\_0\_header = true|false**<br> | For systems (Sequoia) PAGE 0 will clear any existing HEADINGs and FOOTINGs.<br> | Run Time<br> | <br> |
| **para\_stacked\_data = true|false**<br> | Set by default under Unidata emulation.<br>Externally stacked 'DATA', passed from a Basic program to an 'EXECUTE'd PAragraph, is only used to satisfy 'INPUT' requests within the PAragraph and is not passed indirectly to programs 'EXECUTE'd from the PAragraph, e.g. :<br><br>```<br>Program: 
DATA 'input1'
EXECUTE 'paragraph'
PA
SELECT file
C 'input1' will NOT be passed to the above 'SELECT' if 'para_stacked_data = true'
<<'GetInput'>>
C 'GetInput' above will be satisfied by 'input1' if 'para_stacked_data = true'<br>```<br><br><br> | Run Time<br> | <br> |
| **pq\_Aquote\_prepends\_space = true|false**<br> | This option can be enabled to assist in the construction of 'commands' within the Proc Output buffer.Currently not enabled under any emulation by default.<br>Specifically for Proc's where a required trailing space has been omitted during creation of the Proc, e.g. :<br><br>```<br>....
...
HSELECT <--- The trailing 'space' has been omitted within the Proc
IP
A'
...
...<br>```<br><br>With this option enabled, the A' and/or A", will prepend a 'space' to the current contents of the Output buffer, where necessary, prior to appending the 'quoted' contents of the 'A' buffer, e.g. :<br><br>When this option is enabled the 'Output' buffer will contain :<br><br>```<br>SELECT 'input_data'
rather than:
SELECT'input_data'.<br>```<br><br><br> | Run Time<br> | <br> |
| **pq\_backslash = true|false**<br> | If set, PQ procs will use backslash delimiters when extending past the end of input buffer with Sn or Rin. Default for Sequoia.<br> | Run Time<br> | <br> |
| **pq\_indirection = true|false**<br> | If set then PQ procs can execute PQN proc commands (Universe).<br> | Run Time<br> | <br> |
| **prime\_runtime\_errors = true|false**<br> | 'ZERO\_USED' , 'DIVIDE\_ZERO' and 'NON\_NUMERIC' errors generate message ids appended with '\_PRIME', eg 'ZERO\_USED\_PRIME' , 'DIVIDE\_ZERO\_PRIME' and 'NON\_NUMERIC\_PRIME' etc.<br> | Run Time<br> | <br> |
| **print\_initial\_formfeed = true|false**<br> | Set by default under Ultimate emulation.<br>Under normal circumstances the leading form feed, from a HEADER, is suppressed in PRINTed output.<br>This emulation mode causes such form feeds to be PRINTed at the start of the PRINT jobs.<br> | Run Time<br> | <br> |
| **prt\_video = true|false**<br> | Support the following extensions, mainly for printer definitions : @(-27) to @(-33) , @(-47) to @(-55) and @(-59) to @(-126) , and @(-220) through @(-239).<br> | Run Time<br> | <br> |
| **quit\_eq\_end = true|false**<br> | Quit (or Stop) from the debugger has the same effect as End or Abort, meaning any calling proc or paragraph is terminated.<br> | Run Time<br> | <br> |
| **read\_reset\_as\_null = true|false**<br> | For systems which, when a read fails, reset the read variable to a null string.<br> | Run Time<br> | <br> |
| **readnext\_dont\_null\_last\_key\_on\_eof = true|false**<br> | If set, then retain the value of the last key on a READNEXT instead of setting it to NULL when EOF is reached.<br> | Run Time<br> | <br> |
| **readv0 = binary|dcount|key**<br> | When a READV (or READVU) is performed and attribute 0 is specified,as in:<br><br>```<br>READV variablename FROM filevariable ,'my_record', 0  
ELSE ABORT 202,'my_record'<br>```<br><br>the setting defines what will be returned by the 'variblename' variable as :<br><ul><li>binary - return &#39;1&#39; if the record exits ( &#39;0&#39; otherwise).</li><li>dcount - return the number of attributes in the record, if the record exists.</li><li>key - return the record key.</li></ul> | Run Time<br> | + |
| **reality\_video = true|false**<br> | Support the Reality video extensions from @(-128) through @(-191) for video effects such as combinations of reverse, underline, flashing and so on. These can usually be added to all emulations without harmful effects.<br> | Run Time<br> | <br> |
| **reformat\_append = true|false**<br> | By default the REFORMAT command overwrites existing attributes. With this set, then the REFORMAT command will append a multi-value to existing attributes.<br> | Run Time<br> | <br> |
| **report\_bad\_tapeblksz = true|false**<br> | Attempting to write a 'NULL' tape block or a block which is larger than the attached tape block size will return the appropriate error code in SYSTEM(0).<br>This option is NOT set by default for any emulation.<br> | Run Time<br> | <br> |
| **resize\_array = true|false**<br> | If true then the re-DIMensioning of arrays is permitted. Set to 'true' under 'Universe', 'Prime', 'Unidata' and 'Ultimate' emulations.<br> | Compile Time<br> | <br> |
| **returning\_am\_delimited = true|false**<br> | If set then data returned from the RETURNING/SETTING clause of the EXECUTE statement will be attribute mark delimited. Otherwise the data will be value mark delimited.<br>The default is true for Sequoia, otherwise false.<br> | Run Time<br> | + |
| **round\_neg\_tozero = true|false**<br> | Round -0.5 to 0 instead of to -1. This does not affect 0.5.<br> | Run Time<br> | <br> |
| **scale\_masked\_string = true|false**<br> | For systems (Reality) where formatted strings are descaled by the specified scaling factor, e.g.:<br><br>'123456' 'R26' gives :<br><ul><li>with &#39;scale_masked&#39; set : &#39;0.12&#39;</li><li>with &#39;scale_masked&#39; unset : &#39;1234.56&#39;.</li></ul> | Compile Time<br> | <br> |
| **selected\_count\_not\_binary = true|false**<br> | If this option is set to true, 'SYSTEM(11)' returns the number of items in the default select list. If not, SYSTEM(11) returns either 1, if a default select list is present, or 0 if no default select list is present.<br> | Run Time<br> | + |
| **single\_space\_timedate = true|false**<br> | If set to true, the TIMEDATE() function uses a single space separator (default is two spaces).<br> | Run Time<br> | + |
| **skip\_pib\_on\_ip\_null = true|false**<br> | If set, leave PIB unchanged when null entered at IP command in PQ proc.<br> | Run Time<br> | <br> |
| **skip\_spaces\_and\_tabs = true|false**<br> | For systems which ignore leading and trailing spaces when handling values for maths.<br> | Run Time<br> | <br> |
| **sline\_with\_heading = true|false**<br> | For systems (Prime), specifying a heading in jQL will NOT suppress the "n Records listed." messages.<br> | Run Time<br> | <br> |
| **sp\_assign\_all =**<br> | For systems (Reality), where SP-ASSIGN without a 'channel' number will assign the specified form to ALL 'channels'. By default SP-ASSIGN without a specified 'channel' number only assigns to 'channel 0 (zero).<br> | Run Time<br> | <br> |
| **spooler4\_only\_recent\_jobs = true|false**<br> | Set by default under Reality emulation.<br>Under normal circumstances ALL print jobs for the specified port will be returned by the SPOOLER(4) function. This emulation limits the information returned to those Print jobs created by the specified/current port, since the program issuing the SPOOLER(4) was started.<br> | Run Time<br> | <br> |
| **stacked\_input\_global = true|false**<br> | Set if the DATA stack operates globally or traditionally i.e. : determines whether 'unused' stacked DATA is still available on return from 'EXECUTE'.<br> | Run Time<br> | <br> |
| **substring\_zero\_eq\_one = true|false**<br> | For systems (Reality) which treat a starting position of '0' as '1' in substring assignment, e.g. : x[0,1] = bla is equivalent to x[1,1] = bla.<br>The default behaviour, for 'x[0,n] = value' is to prepend to the original string. With 'substring\_zero\_eq\_one' set, the first 'n' character(s) are replaced, e.g. : where 'x' is originally 'abc', x[0,1] = 'z' will give : 'zbc' with 'substring\_zero\_eq\_one' set and 'zabc' by default.<br> | Run Time<br> | <br> |
| **system\_19\_timedate = true|false**<br> | When set to true, SYSTEM(19) will return a unique 'date + time' stamp, e.g. '1103361234' , instead of login name or JBASICLOGNAME (account name). This is set by default for sequoia emulation.<br> | Run Time<br> | + |
| **tconv\_no\_replace = true|false**<br> | By default the T conversion in OCONV will replace system delimiters. This causes that effect not to happen.<br> | Run Time<br> | <br> |
| **time\_is\_hours = true|false**<br> | when set to true, time will be considered in minutes rather than seconds. Thus ICONV(1,"MTS") will return 60 (not 3600). By default this value is set to false in Reality and Sequoia.<br> | Run Time<br> | + |
| **treat\_with\_as\_and\_with = true|false**<br> | If set treat jQL WITH &lt;Clause&gt; WITH &lt;Clause&gt; as AND WITH - default is OR WITH.<br><br>For instance the query:<br><br>```<br> "List MD WITH *A1 't' WITH *A2'115'" <br>```<br><br>, will be evaluated the same as:<br><br>```<br> "List MD WITH *A1 't' AND WITH *A2'115'"<br>```<br> | Run Time<br> | + |
| **treat\_with\_as\_or\_with = true|false**<br> | If set treat jQL WITH &lt;Clause&gt; WITH &lt;Clause&gt; as OR WITH - [ this is the default behaviour].<br><br>For instance the query:<br><br>```<br> "List MD WITH *A1 't' WITH *A2'115'" <br>```<br><br>, will be evaluated the same as:<br><br>```<br> "List MD WITH *A1 't' OR WITH *A2'115'"<br>```<br> | Run Time<br> | + |
| **unnamed\_common = unassigned|null|zero**<br> | Indicates how to set un-named common when first referenced. Same as 'named\_common'.<br> | Run Time<br> | <br> |
| **use\_id\_lptr\_reporting = true|false**<br> | For systems (Prime) that use @ID and @LPTR for default listings.<br> | Run Time<br> | <br> |
| **use\_sql\_syntax\_for\_select = true|false**<br> | Use SQL syntax in SELECT commands.<br> | Run Time<br> | <br> |
| **use\_uv\_locate = true|false**<br> | When set to 'true', use the Universe syntax for the Basic 'LOCATE' function, i.e. 'search string' and 'array to search' parameters are interposed.<br> | Compile Time<br> | <br> |
| **ux1ad\_use\_four\_digits = true|false**<br> | If set, user exits U11AD, U21AD and U31AD will generate four digit rather than two digit numbers. i.e. nnnnP vs nnP<br> | Run Time<br> | <br> |
| **wrap\_r\_just = true|false**<br> | For systems (Universe and Prime), right justified data will wrap in jQL.<br> | Run Time<br> | <br> |
| **writelist\_on\_select\_from\_var = true|false**<br> | If set then write any select list, generated by basic "SELECT Var" to the default select list.<br> | Run Time<br> | <br> |




## Note:


> some of the "generic" emulation behavior will change at run-time, but for a **complete** change, the code should be recompiled.
> 
> Despite being set at Run-time, if running from jshell, requires that a new jshell be invoked before the behavior will change.




On many platforms, @(-n) codes are used to control special terminal characteristics. However the definition of these codes differs between platforms. Rather than "hard coding" the @(-n) codes, jBASE allows their definition in the **Config\_EMULATE** file. This allows legacy applications to use existing @(-n) codes and so reduces the time required to port an application to jBASE. A knowledge of [terminfo capabilities](326793-terminfo) can be useful when defining these codes.




| Code | Action | Description |
| --- | --- | --- |
| @(-n)<br> | **clear\_screen**<br> | Move cursor to position 0,0 and clear to end of screen<br> |
| @(-n)<br> | **cursor\_home**<br> | Move cursor to position 0,0<br> |
| @(-n)<br> | **clear\_eos**<br> | Clear the screen from current position to end of screen<br> |
| @(-n)<br> | **clear\_eol**<br> | Clear the screen from current position to end of line<br> |
| @(-n)<br> | **blink\_on**<br> | Turn on blinking video<br> |
| @(-n)<br> | **blink\_off**<br> | Turn off blinking video<br> |
| @(-n)<br> | **prot\_on**<br> | Turn on protected fields<br> |
| @(-n)<br> | **prot\_off**<br> | Turn off protected fields<br> |
| @(-n)<br> | **reverse\_on**<br> | Turn on reverse video<br> |
| @(-n)<br> | **reverse\_off**<br> | Turn off reverse video<br> |
| @(-n)<br> | **underline\_on**<br> | Turn on underline video<br> |
| @(-n)<br> | **underline\_off**<br> | Turn off underline video<br> |
| @(-n)<br> | **bold\_on**<br> | Turn on bold video<br> |
| @(-n)<br> | **bold\_off**<br> | Turn off bold video<br> |
| @(-n)<br> | **printer\_on**<br> | Turn on the slave printer<br> |
| @(-n)<br> | **printer\_off**<br> | Turn off the slave printer<br> |
| @(-n)<br> | **print\_screen**<br> | Dump the entire screen to the printer<br> |
| @(-n)<br> | **status\_line\_on**<br> | Turn the line 25 status line on<br> |
| @(-n)<br> | **status\_line\_off**<br> | Turn the line 25 status line off<br> |
| @(-n)<br> | **cursor\_down**<br> | Move the cursor down one position<br> |
| @(-n)<br> | **cursor\_up**<br> | Move the cursor up one position<br> |
| @(-n)<br> | **cursor\_right**<br> | Move the cursor one position to the right<br> |
| @(-n)<br> | **cursor\_left**<br> | Move the cursor one position to the left<br> |
| @(-n)<br> | **cursor\_on**<br> | Turn the visible cursor on<br> |
| @(-n)<br> | **cursor\_off**<br> | Turn the visible cursor off<br> |
| @(-n)<br> | **delete\_line**<br> | Delete a single line<br> |
| @(-n)<br> | **insert\_line**<br> | Insert a single line<br> |
| @(-n)<br> | **scroll\_forward**<br> | Scroll the screen display up one line<br> |
| @(-n)<br> | **scroll\_backward**<br> | Scroll the screen display down one line<br> |
| @(-n)<br> | **delete\_char**<br> | Delete a single character at present cursor position<br> |
| @(-n)<br> | **insert\_char**<br> | Insert a blank character at present cursor position<br> |
| @(-n)<br> | **insert\_on**<br> | Begin insert mode<br> |
| @(-n)<br> | **insert\_off**<br> | End insert mode<br> |
| @(-n)<br> | **effects\_off**<br> | Turns off ALL the video effects<br> |
| @(-n)<br> | **graphics\_on**<br> | Turn on the alternate character set<br> |
| @(-n)<br> | **graphics\_off**<br> | Turn off the alternate character set<br> |
| @(-n)<br> | **graphics\_vertical**<br> | In graphics mode a vertical bar<br> |
| @(-n)<br> | **graphics\_horizontal**<br> | In graphics mode a horizontal bar<br> |
| @(-n)<br> | **graphics\_upper\_left**<br> | In graphics mode a top left hand corner<br> |
| @(-n)<br> | **graphics\_upper\_right**<br> | In graphics mode a top right hand corner<br> |
| @(-n)<br> | **graphics\_bottom\_left**<br> | In graphics mode a bottom left hand corner<br> |
| @(-n)<br> | **graphics\_bottom\_right**<br> | In graphics mode a bottom right hand corner<br> |
| @(-n)<br> | **graphics\_intersection**<br> | In graphics mode **+** intersection character<br> |
| @(-n)<br> | **graphics\_tee\_left**<br> | In graphics mode a left hand tee character<br> |
| @(-n)<br> | **graphics\_tee\_right**<br> | In graphics mode a right hand tee character<br> |
| @(-n)<br> | **graphics\_tee\_up**<br> | In graphics mode a top tee character<br> |
| @(-n)<br> | **graphics\_tee\_down**<br> | In graphics mode a bottom tee character<br> |
| @(-n)<br> | **background colorname**<br> | Set the background to one of the supported colors , where "colorname" is one of: black , blue , green , cyan, red , magenta , yellow , white<br> |
| @(-n)<br> | **foreground colorname**<br> | Set the foreground to one of the supported colors , where "colorname" is one of: black , blue , green, cyan , red , magenta , yellow , white<br> |



