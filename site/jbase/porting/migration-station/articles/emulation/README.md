# Emulation

**Created At:** 10/31/2017 10:00:45 PM  
**Updated At:** 2/19/2019 10:35:08 AM  
**Original Doc:** [emulation](https://docs.jbase.com/44497-articles/emulation)  
**Original ID:** 283717  
**Internal:** No  

**Tags:**
<badge text='configuration' vertical='middle' />
<badge text='config_emulate' vertical='middle' />

## Description

Emulation support is provided by the **Config\_EMULATE** file in the **config** subdirectory of the jBASE release directory. All text in the file is case insensitive.

The format of that file is:

| Code | Definition |
| --- | --- |
| **#** | Denotes a comment and the line is ignored. |  
| **x:** | Denotes a label, signifying the start of an emulation definition. |  
| **any** | Denotes an emulation definition. |  

Labels must be alpha-numeric, i.e. no periods, underlines, etc. If one label directly follows another then the label is synonym for the same emulation definition. The emulation definition ends when another label or the end of file encountered.

Multiple emulation definitions can be defined on the same line with each definition delimited by a comma or a semicolon. Emulation definitions can be interrupted by blank lines and can contain any amount of white space, i.e. one or more spaces or tab characters.

Emulation definitions can be declared 'on', 'yes' or 'true' to mean the emulation is enabled or similarly use the strings 'off', 'no' or 'false' to mean the emulation effect is disabled.

To use a different set of emulation definitions from the default set, set the environment variable **JBCEMULATE** in your current environment to the required emulation label. When the environment variable is not configured then the emulation definition defined by the default label is in effect. If the default label is not present then the first label detected will be used for the default emulation.

Generally any emulation definitions which affect BASIC, (such as the @(-n) codes), use the JBCEMULATE environment variable when the programs are compiled, whereas the other definitions tend to be used at runtime, when the program is executed.

You can create your own custom emulation sections in the **Config\_EMULATE** file but it is recommended to use Alternate Emulations for this purpose.

## Alternate Emulations

An Alternate Emulation has the general form:

```
Config_EMULATE_name
```

where **name** is the name of the emulation. These emulations are also stored in the **config** directory under **$JBCRELEASEDIR**. and follow the exact same rules. The file name of the alternate emulation must be the same as the **label**, i.e. the **x:** line.

Alternate Emulations can contain any combination of configuration options except **dup** entries. If you require the behavior of a **dup** entry then all configuration settings in that section must be explicitly added to the Alternate Emulation.

For example, to create an alternate **jbase** emulation called **jcustom**,which changes the value of the **old\_jql\_output\_style** setting, would be:

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

To use this definition, set the **JBCEMULATE** environment variable to **jcustom**, e.g.

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

You must expand all of the entries explicitly.

### Configuration Definitions

| Variable | Description | Set At: |
| --- | --- | --- |
| **allow\_bad\_day\_of\_month = true\|false** | If set, allows invalid date conversions like 31 Sep to convert to valid dates (1st Oct). | Run Time |
| **allow\_unassigned\_assignment = true\|false** | Suppress "UNASSIGNED VARIABLE" message where "X=Y" and Y has not been assigned. | Run Time |
| **alternate\_chain\_exit = true\|false** | If set then under certain circumstances drops an extra run level on returning from a CHAIN command. This is an emulation of jBASE 3.4 behaviour. Current behaviour is believed to be preferable. Only set this if necessary for backwards compatibility. | Run Time |
| **alternative\_oconv = true\|false** | If set then for the "DD" and "DM" output conversions, single digit results are prefixed by zero. Default for Sequoia. | Run Time |
| **breakon\_l\_suppresses\_blank\_line = true\|false** | If set then "L" in a "BREAK-ON" clause means suppress the blank line before the data line. The default is to skip the break line, i.e. only output a blank line. | Run Time |
| **byexp\_mv\_dup\_like\_d3 = true\|false** | If set, when using BY-EXP, reuse the first, and only, value in single valued attributes. The default behaviour, i.e. with "byexp\_mv\_dup\_like\_d3" unset or false, is to assume a null value for the 2nd and subsequent values. Currently, this option is not set under any emulation in the "Config\_EMULATE" file supplied with the jBASE Installation. | Run Time |
| **case\_insensitive\_file\_ids = true\|false** | If set, try and ignore the case of file names, default behaviour will be to open the first UPPER CASE version of the file name. | Run Time |
| **case\_insensitive\_md = true\|false** | If set, the MD does not care about case, everything should end up as UPCASE. | Run Time |
| **case\_insensitive\_queries = true\|false** | If set, verbs used in jQL queries and dictionaries ignore case. | Run Time |
| **case\_insensitive\_runtime\_strings = true\|false** | If set, any jBASE functions which accept a VAR as a parameter will UPCASE it. | Run Time |
| **compiler\_case\_insensitive\_subroutines = true\|false** | If set, all SUBROUTINE names are case insensitive. | Compile Time |
| **compiler\_case\_insensitive\_variables\_keywords = true\|false** | If set, the compiler ignores the case on variable names and keywords. [Not currently implemented] | Compile Time |
| **chk\_typeahead\_on\_inputminus = true\|false** | If set then check for typeahead when INPUT x,-1 syntax is used. | Run Time |
| **conv\_mct\_uv\_compat = true\|false** | Universe compatible capitalisation after non-alpha characters. | Run Time |
| **conv\_old\_mct = true\|false** | Capitalise character following non-alpha character, e.g. "-" (hyphen). | Run Time |
| **dates\_upper\_case = yes\|no**<br> | If "yes" then date conversions (e.g. "DM" and "DW") force the text to uppercase format, e.g. "March" is forced to "MARCH". Without this option, the casing for dates is dependent upon the operating system.<br> | Run Time<br> |
| **defer\_header\_output = true\|false**<br> | Set by default under Ultimate emulation. Any Basic HEADER will be output at the next natural page break. Normally the HEADER is issued immediately. The output of the HEADER can also be deferred, to the next natural page break, by prefixing the HEADER data with an Attribute Mark (@AM).<br> | Run Time<br> |
| **dict\_sub\_call = true\|false**<br> | On some emulations, when calling a SUBROUTINE from a DICT item, a parameter will be passed to the SUBROUTINE which is the current item -- if this is the case, set this to "true".<br> | Run Time<br> |
| **dot\_not\_numeric = true\|false**<br> | Set to true for compatibility with systems that expect ".", "+" and "-" to be treated as non-numeric characters.<br> | Run Time<br> |
| **dup = name**<br> | Duplicates the definition "name", where "name:" is a previously defined "label:", i.e. this "definition" inherits the behaviour defined for "name:", "option" settings following a "dup" override the inherited behaviour for that "option".<br> | N/A<br> |
| **enter\_keeps\_common\_data = true\|false**<br> | Set if you want the ENTER statement to retain global common when "(I" option is used.<br> | Run time<br> |
| **error\_numbers\_are\_single\_attribute = true\|false**<br> | If set, check that the first value is a number, if so use it as the error message, (i.e., return 401 instead of 401]QLSELNO) (Could be problematic).<br> | Run time<br> |
| **ext\_pattern\_match = true\|false**<br> | For systems which use extended pattern matching.<br> | Compile Time<br> |
| **format\_defaults\_no\_decimals = true\|false**<br> | If set, a format mask that does not specify decimal places will not output any decimals. Default is to output all decimal places.<br> | Run time<br> |
| **generic\_pick = true\|false**<br> | The emulation will otherwise behave as if coming from a Pick environment.<br> | Compile Time1<br> |
| **generic\_prime = true\|false**<br> | The emulation will otherwise behave as if coming from a Prime environment.<br> | Compile Time1<br> |
| **generic\_reality = true\|false**<br> | The emulation will otherwise behave as if coming from a Reality Operating System environment.<br> | Compile Time1<br> |
| **generic\_universe = true\|false**<br> | The emulation will otherwise behave as if coming from a Universe system.<br> | Compile Time1<br> |
| **generic\_unidata = true\|false**<br> | The emulation will otherwise behave as if coming from a Unidata environment.<br> | Compile Time1<br> |
| **header\_with\_s = yes\|no**<br> | For systems (Sequoia) S-types with null "header" WILL use the default column heading.<br> | Run Time<br> |
| **hush\_input\_and\_output = true\|false**<br> | If set then control both input and output on HUSH.<br> | Run Time1<br> |
| **iconv\_nonnumeric\_return\_null = true\|false**<br> | If true then ICONV will return null instead of the original value when that value is non-numeric and numeric is expected.<br> | Run Time<br> |
| **insert\_default\_zero\_to\_one = true\|false**<br> | If set, treat a param value of zero as one for INSERT function.<br> | Run Time<br> |
| **invert\_F\_correl = yes\|no**<br> | Set this for systems (Reality) where the F correlative operates on the top stack elements in the reverse order to that expected for certain operators<br> | Run Time<br> |
| **itype\_trans\_replace\_delim = true\|false**<br> | Set to replace delimiters with spaces in the TRANS() function ( ITYPES only ).<br> | Run Time<br> |
| **itype\_unquoted\_numeric\_literal = true\|false**<br> | Set for systems (Universe/Unidata ) where the 3rd and 4th parameters of the 'FIELD'' function can be specified as an unquoted numeric. The unquoted numeric will be treated as a numeric literal in these cases, rather than an attribute reference.<br> | Run Time<br> |
| **jbase\_field = yes\|no**<br> | For systems (jBASE and Prime), FIELD function will use the entire delimiter not just the first character.<br> | Run Time<br> |
| **jpqn\_replace\_semicolon = true\|false**<br> | Set by default under Ultimate emulation. When moving data from the Input buffer to the Primary Output buffer using the A command in PQN Procs, any semicolons are replaced with specified delimiter, e.g. : A' changes abc;def;xyz to abc"def"xyz.<br> | Run Time<br> |
| **jql\_A\_substring\_literal = true\|false**<br> | For systems (as yet unknown) which assume unquoted numerics (inside substring extraction) should be treated as Numeric literals (NOT attribute references as expected by default).<br> | Run Time<br> |
| **jql\_acalc\_int\_only = true\|false**<br> | Set for systems (Reality, R83, Universe) where integer only arithmetic is performed in calculations within "A;" correlatives/conversions.<br> | Run Time<br> |
| **jql\_divide\_by\_zero\_zero = true\|false**<br> | For systems (R91), division by zero in conversions/correlatives will return zero. (The default behaviour is to return the numerator unchanged).<br> | Run Time<br> |
| **jql\_mv\_subcall = true\|false**<br> | For systems (Sequoia) the user subroutine will be called for each multivalue and subvalue in data being processed by jQL. Default is false<br> | Run Time<br> |
| **length\_field\_formatting = true\|false**<br> | For systems that preceed formatting with a length field.<br> | Run Time<br> |
| **list\_keys = yes\|no**<br> | If set then commands such as T-DUMP , T-LOAD , COPY will by default display all the record keys and use the (I) option to suppress this. Without this option then by default the reverse is true e.g. T-DUMP will not list any record keys but the (I) option indicates that record keys should be displayed<br> | Run Time2<br> |
| **locate\_null\_only\_in\_array = yes\|no**<br> | Set for systems requiring null to only match within the real array, not the implied array, e.g. : FIND "" IN "abc" will return 'true' under the default mode.<br> | Run Time<br> |
| **long\_who = yes\|no**<br> | If set, the WHO command is extended to give the node name and UNIX account name.<br> | Run Time<br> |
| **log\_runtime\_errors = true\|false**<br> | If true, runtime errors such as divide by zero are logged in the $JBCRELEASEDIR/runtime-errors directory, assuming the error message in $JBCRELEASEDIR/jbcmessages contains the string ^LOGERRORS^.<br> | Run Time<br> |
| **make\_locate\_dr\_like\_dn = true\|false**<br> | Set for systems requiring the DR of the LOCATE statement to act like DN.<br> | Compile Time<br> |
| **match\_last\_delimiter = true\|false**<br> | If set to 'true' then the last delimiter in pattern match string is used within the pattern to match, e.g.: "a]b]c]" will match "c]".<br> | Run Time<br> |
| **matread\_assigns\_to\_end = true\|false**<br> | Additional attributes are appended to the last element of a DIMensioned array by 'MATREAD'. By default additional attributes are returned in element '0' of the DIMensioned array. Set 'true' under Sequoia emulation. [Runtime]<br> | Run Time<br> |
| **md\_int\_only = true\|false**<br> | If set, only integers will be allowed in MD or MR conversions. If a decimal number is used then it will be treated as non-numeric, returning the original value, e.g. OCONV(12.99,'MD2') returns '12.99' instead of '0.13' .<br> | Run Time<br> |
| **multiple\_cmd\_execution = true\|false**<br> | For systems that allow execution of multiple commands if provided as a dynamic array to 'PERFORM'/'EXECUTE' statements.<br> | Run Time<br> |
| **named\_common = unassigned\|null\|zero**<br> | Indicates how to set named common when first referenced. Default is unassigned.<br>'setting' can be :<br><br><br>| <br> | a) "zero" to initialise to numeric 0.<br> |<br>| <br> | b) "unassigned" to keep it as an unassigned variable.<br> |<br>| <br> | c) "null" to create it as a zero length null string.<br> |<br><br> | Run Time2<br> |
| **no\_equate\_on\_call = true\|false**<br> | If set, inhibit the Equate processing on the 'Subroutine' name specified in CALL statements but not CALL @ statements.<br> | Run Time<br> |
| **no\_extra\_delimiter = true\|false**<br> | For systems ( currently Sequoia and R83 ) which do not insert a delimiter (AM/VM/SVM) if the current string being appended to ( by specifying '-1' as the parameter to append/insert before ) has a 'trailing' delimiter (AM/VM/SVM ) already. This behaviour is true for all of :<br><br><br>| <br> | dyn\_array&lt;-1&gt; = whatever ,<br> |<br>| <br> | x = INSERT( dyn\_array,-1,.., ..; whatever ),<br> |<br>| <br> | and<br> |<br>| <br> | INS whatever BEFORE dyn\_array&lt;-1,..,...&gt;<br> |<br><br> | Compile Time<br> |
| **no\_id\_prompt = true\|false**<br> | For systems (Sequoia) which do NOT 'prompt for ids' when using 'QSELECT' (for example) and no items are specified. If 'no\_id\_prompt' is set do NOT 'prompt' for the item ids but assume '\*' (i.e. ALL items) are required.<br> | Run Time<br> |
| **no\_value\_maths = true\|false**<br> | If set to 'true' then jBASE will NOT perform automatic multi-value maths on a non-numeric string, e.g. : A = "12":@AM:"3" + 1 will fail with a 'NON\_NUMERIC' error.<br> | Run Time<br> |
| **nopage\_null\_header = true\|false**<br> | For systems (as yet unknown) which do NOT expect a pause at the end of Page when a Null HEADING is requested in Basic. The default behaviour is to leave this 'flag' unset.<br> | Run Time<br> |
| **null\_eq\_zero = true\|false**<br> | For systems (Universe) right justified null fields will sort equal to zero.<br> | Run Time<br> |
| **oconv\_format\_null = true\|false**<br> | For systems whose OCONV functions force formatting of null values.<br> | Run Time<br> |
| **oconv\_no\_mask\_formatting = true\|false**<br> | For systems that do not use OCONV mask formatting when value is null or nonnumeric.<br> | Run Time<br> |
| **oconv\_no\_scale\_formatting = true\|false**<br> | For systems that do not using a scaling factor by default for OCONV formatting.<br> | Compile Time<br> |
| **old\_jql\_output\_style = true\|false**<br> | If set then the number of spaces between columns, for the jQL **LIST**and **SORT**commands, is always 1.<br><br>If not set then jQL adjusts the spacing between columns depending on the number of columns and the width setting of the TERM command. The maximum number of spaces between columns is 4.<br><br>This option is only effective when the jQL display is in columnar format.<br> | Run Time<br> |
| **openseq\_creates = true\|false**<br> | When set, the jBC OPENSEQ statement will create the specified file if it does not exist. This parameter is set by default for Sequoia.<br> | Run Time<br> |
| **page\_0\_header = true\|false**<br> | For systems (Sequoia) PAGE 0 will clear any existing HEADINGs and FOOTINGs.<br> | Run Time<br> |
| **para\_stacked\_data = true\|false**<br> | Set by default under Unidata emulation.<br>Externally stacked 'DATA', passed from a Basic program to an 'EXECUTE'd PAragraph, is only used to satisfy 'INPUT' requests within the PAragraph and is not passed indirectly to programs 'EXECUTE'd from the PAragraph, e.g. :<br><br><br>| <br> | Program :<br> |<br>| <br> | <br> |<br>| <br> | DATA 'input1'<br> |<br>| <br> | EXECUTE 'Paragraph'<br> |<br>| <br> | <br> |<br>| <br> | PAragraph :<br> |<br>| <br> | <br> |<br>| <br> | PA<br> |<br>| <br> | SELECT file<br> |<br>| <br> | C 'input1' will NOT be passed to the above 'SELECT' if 'para\_stacked\_data = true'<br> |<br>| <br> | &lt;&lt;'GetInput'&gt;&gt;<br> |<br>| <br> | C 'GetInput' above will be satisfied by 'input1' if 'para\_stacked\_data = true'<br> |<br><br> | Run Time<br> |
| **pq\_Aquote\_prepends\_space = true\|false**<br> | ( Currently not enabled under any emulation by default).<br>This option can be enabled to assist in the construction of 'commands' within the Proc Output buffer.<br>Specifically for Proc's where a required trailing space has been omitted during creation of the Proc, e.g. :<br><br><br>| <br> | <br> |<br>| <br> | ...<br> |<br>| <br> | ...<br> |<br>| <br> | HSELECT &lt;--- The trailing 'space' has been omitted within the Proc<br> |<br>| <br> | IP<br> |<br>| <br> | A'<br> |<br>| <br> | ...<br> |<br>| <br> | ...<br> |<br>| <br> | <br> |<br>| <br> | With this option enabled, the A' and/or A", will prepend a 'space' to the current contents of the Output buffer, where necessary, prior to appending the 'quoted' contents of the 'A' buffer, e.g. :<br> |<br>| <br> | <br> |<br>| <br> | When this option is enabled the 'Output' buffer will contain :<br> |<br>| <br> | SELECT 'input\_data'<br> |<br>| <br> | rather than:<br> |<br>| <br> | SELECT'input\_data'.<br> |<br>| <br> | <br> |<br><br> | Run Time<br> |
| **pq\_backslash = true\|false**<br> | If set, PQ procs will use backslash delimiters when extending past the end of input buffer with Sn or Rin. Default for Sequoia.<br> | Run Time<br> |
| **pq\_indirection = true\|false**<br> | If set then PQ procs can execute PQN proc commands (Universe).<br> | Run Time<br> |
| **prime\_runtime\_errors = true\|false**<br> | 'ZERO\_USED' , 'DIVIDE\_ZERO' and 'NON\_NUMERIC' errors generate message ids appended with '\_PRIME', eg 'ZERO\_USED\_PRIME' , 'DIVIDE\_ZERO\_PRIME' and 'NON\_NUMERIC\_PRIME' etc.<br> | Run Time<br> |
| **print\_initial\_formfeed = true\|false**<br> | Set by default under Ultimate emulation.<br>Under normal circumstances the leading form feed, from a HEADER, is suppressed in PRINTed output.<br>This emulation mode causes such form feeds to be PRINTed at the start of the PRINT jobs.<br> | Run Time<br> |
| **prt\_video = true\|false**<br> | Support the following extensions, mainly for printer definitions : @(-27) to @(-33) , @(-47) to @(-55) and @(-59) to @(-126) , and @(-220) through @(-239).<br> | Run Time<br> |
| **quit\_eq\_end = true\|false**<br> | Quit (or Stop) from the debugger has the same effect as End or Abort, meaning any calling proc or paragraph is terminated.<br> | Run Time<br> |
| **read\_reset\_as\_null = true\|false**<br> | For systems which, when a read fails, reset the read variable to a null string.<br> | Run Time<br> |
| **readnext\_dont\_null\_last\_key\_on\_eof = true\|false**<br> | If set, then retain the value of the last key on a READNEXT instead of setting it to NULL when EOF is reached.<br> | Run Time<br> |
| **readv0 = binary\|dcount\|key**<br> | When a READV (or READVU) is performed and attribute 0 is specified, this defines what to return:<br><br><br>| binary<br> | return '1' if the record exits ( '0' otherwise ).<br> |<br>| dcount<br> | return the number of attributes in the record, if the record exists.<br> |<br>| key<br> | return the record key.<br> |<br><br> | Run Time<br> |
| **reality\_video = true\|false**<br> | Support the Reality video extensions from @(-128) through @(-191) for video effects such as combinations of reverse, underline, flashing and so on. These can usually be added to all emulations without harmful effects.<br> | Run Time<br> |
| **reformat\_append = true\|false**<br> | By default the REFORMAT command overwrites existing attributes. With this set, then the REFORMAT command will append a multi-value to existing attributes.<br> | Run Time<br> |
| **report\_bad\_tapeblksz = true\|false**<br> | Attempting to write a 'NULL' tape block or a block which is larger than the attached tape block size will return the appropiate error code in SYSTEM(0).<br>This option is NOT set by default for any emulation.<br> | Run Time<br> |
| **resize\_array = true\|false**<br> | If true then the re-DIMensioning of arrays is permitted. Set to 'true' under 'Universe', 'Prime', 'Unidata' and 'Ultimate' emulations.<br> | Compile Time<br> |
| **returning\_am\_delimited = true\|false**<br> | If set then data returned from the RETURNING/SETTING clause of the EXECUTE statement will be attribute mark delimited. Otherwise the data will be value mark delimited.<br>The default is true for Sequoia, otherwise false.<br> | Run Time<br> |
| **round\_neg\_tozero = true\|false**<br> | Round -0.5 to 0 instead of to -1. This does not affect 0.5.<br> | Run Time<br> |
| **scale\_masked\_string = true\|false**<br> | For systems (Reality) where formatted strings are descaled by the specified scaling factor, e.g.:<br><br><br>| <br> | '123456' 'R26' gives :<br> |<br>| <br> | with 'scale\_masked' set : '0.12'<br> |<br>| <br> | with 'scale\_masked' unset : '1234.56'.<br> |<br><br> | Compile Time<br> |
| **selected\_count\_not\_binary = true\|false**<br> | SYSTEM(11), which returns the status of the default select list will, by default, return 1 if a default select list is present, or 0 if no default select list is present. If this option is set, 'SYSTEM(11)' returns the number of items in the default select list.<br> | Run Time<br> |
| **single\_space\_timedate = true\|false**<br> | The TIMEDATE() function uses a single space separator (default is two spaces).<br> | Run Time<br> |
| **skip\_pib\_on\_ip\_null = true\|false**<br> | If set, leave PIB unchanged when null entered at IP command in PQ proc.<br> | Run Time<br> |
| **skip\_spaces\_and\_tabs = true\|false**<br> | For systems which ignore leading and trailing spaces when handling values for maths.<br> | Run Time<br> |
| **sline\_with\_heading = true\|false**<br> | For systems (Prime), specifying a heading in jQL will NOT suppress the "n Records listed." messages.<br> | Run Time<br> |
| **sp\_assign\_all ==true\|false**<br> | For systems (Reality), where SP-ASSIGN without a 'channel' number will assign the specified form to ALL 'channels'. By default SP-ASSIGN without a specified 'channel' number only assigns to 'channel 0 (zero).<br> | Run Time<br> |
| **spooler4\_only\_recent\_jobs = true\|false**<br> | Set by default under Reality emulation.<br>Under normal cicumstances ALL print jobs for the specified port will be returned by the SPOOLER(4) function. This emulation limits the information returned to those Print jobs created by the specified/current port, since the program issuing the SPOOLER(4) was started.<br> | Run Time<br> |
| **stacked\_input\_global = true\|false**<br> | Set if the DATA stack operates globally or traditionally i.e. : determines whether 'unused' stacked DATA is still available on return from 'EXECUTE'.<br> | Run Time<br> |
| **substring\_zero\_eq\_one = true\|false**<br> | For systems (Reality) which treat a starting position of '0' as '1' in substring assignment, e.g. : x[0,1] = bla is equivalent to x[1,1] = bla.<br>The default behaviour, for 'x[0,n] = value' is to prepend to the original string. With 'substring\_zero\_eq\_one' set, the first 'n' character(s) are replaced, e.g. : where 'x' is originally 'abc', x[0,1] = 'z' will give : 'zbc' with 'substring\_zero\_eq\_one' set and 'zabc' by default.<br> | Run Time<br> |
| **system\_19\_timedate = true\|false**<br> | SYSTEM(19) will return a unique 'date + time' stamp, e.g. '1103361234' when compiled under this emulation, (rather than the 'account name'). (Sequoia emulation).<br> | Run Time<br> |
| **tconv\_no\_replace = true\|false**<br> | By default the T conversion in OCONV will replace system delimiters. This causes that effect not to happen.<br> | Run Time<br> |
| **time\_is\_hours = true\|false**<br> | For systems (Reality and Sequoia) ICONV(1,"MTS") will return 3600 (not 60).<br> | Run Time<br> |
| **treat\_with\_as\_and\_with = true\|false**<br> | If set treat jQL WITH &lt;Clause&gt; WITH &lt;Clause&gt; as AND WITH - default is OR WITH.<br> | Run Time<br> |
| **treat\_with\_as\_or\_with = true\|false**<br> | If set treat jQL WITH &lt;Clause&gt; WITH &lt;Clause&gt; as OR WITH - [ this is the default behaviour].<br> | Run Time<br> |
| **unnamed\_common = unassigned\|null\|zero**<br> | Indicates how to set un-named common when first referenced. Same as 'named\_common'.<br> | Run Time<br> |
| **use\_id\_lptr\_reporting = true\|false**<br> | For systems (Prime) that use @ID and @LPTR for default listings.<br> | Run Time<br> |
| **use\_sql\_syntax\_for\_select = true\|false**<br> | Use SQL syntax in SELECT commands.<br> | Run Time<br> |
| **use\_uv\_locate = true\|false**<br> | When set to 'true', use the Universe syntax for the Basic 'LOCATE' function, i.e. 'search string' and 'array to search' parameters are interposed.<br> | Compile Time<br> |
| **ux1ad\_use\_four\_digits = true\|false**<br> | If set, user exits U11AD, U21AD and U31AD will generate four digit rather than two digit numbers. i.e. nnnnP vs nnP<br> | Run Time<br> |
| **wrap\_r\_just = true\|false**<br> | For systems (Universe and Prime), right justified data will wrap in jQL.<br> | Run Time<br> |
| **writelist\_on\_select\_from\_var = true\|false**<br> | If set then write any select list, generated by basic "SELECT Var" to the default select list.<br> | Run Time<br> |

## Note

> Some of the "generic" emulation behavior will change at run-time, but for a **complete** change, the code should be recompiled.
>
> Despite being set at Run-time, if running from jshell, requires that a new jshell be invoked before the behavior will change.

On many platforms, @(-n) codes are used to control special terminal characteristics. However the definition of these codes differs between platforms. Rather than "hard coding" the @(-n) codes, jBASE allows their definition in the **Config\_EMULATE** file. This allows legacy applications to use existing @(-n) codes and so reduces the time required to port an application to jBASE. A knowledge of [terminfo capabilities](./../../../environment-variables/terminfo) can be useful when defining these codes.

| Code | Action | Description |
| --- | --- | --- |
| @(-n) | **clear\_screen** | Move cursor to position 0,0 and clear to end of screen |
| @(-n) | **cursor\_home** | Move cursor to position 0,0 |
| @(-n) | **clear\_eos** | Clear the screen from current position to end of screen |
| @(-n) | **clear\_eol** | Clear the screen from current position to end of line |
| @(-n) | **blink\_on** | Turn on blinking video |
| @(-n) | **blink\_off** | Turn off blinking video |
| @(-n) | **prot\_on** | Turn on protected fields |
| @(-n) | **prot\_off** | Turn off protected fields |
| @(-n) | **reverse\_on** | Turn on reverse video |
| @(-n) | **reverse\_off** | Turn off reverse video |
| @(-n) | **underline\_on** | Turn on underline video |
| @(-n) | **underline\_off** | Turn off underline video |
| @(-n) | **bold\_on** | Turn on bold video |
| @(-n) | **bold\_off** | Turn off bold video |
| @(-n) | **printer\_on** | Turn on the slave printer |
| @(-n) | **printer\_off** | Turn off the slave printer |
| @(-n) | **print\_screen** | Dump the entire screen to the printer |
| @(-n) | **status\_line\_on** | Turn the line 25 status line on |
| @(-n) | **status\_line\_off** | Turn the line 25 status line off |
| @(-n) | **cursor\_down** | Move the cursor down one position |
| @(-n) | **cursor\_up** | Move the cursor up one position |
| @(-n) | **cursor\_right** | Move the cursor one position to the right |
| @(-n) | **cursor\_left** | Move the cursor one position to the left |
| @(-n) | **cursor\_on** | Turn the visible cursor on |
| @(-n) | **cursor\_off** | Turn the visible cursor off |
| @(-n) | **delete\_line** | Delete a single line |
| @(-n) | **insert\_line** | Insert a single line |
| @(-n) | **scroll\_forward** | Scroll the screen display up one line |
| @(-n) | **scroll\_backward** | Scroll the screen display down one line |
| @(-n) | **delete\_char** | Delete a single character at present cursor position |
| @(-n) | **insert\_char** | Insert a blank character at present cursor position |
| @(-n) | **insert\_on** | Begin insert mode |
| @(-n) | **insert\_off** | End insert mode |
| @(-n) | **effects\_off** | Turns off ALL the video effects |
| @(-n) | **graphics\_on** | Turn on the alternate character set |
| @(-n) | **graphics\_off** | Turn off the alternate character set |
| @(-n) | **graphics\_vertical** | In graphics mode a vertical bar |
| @(-n) | **graphics\_horizontal** | In graphics mode a horizontal bar |
| @(-n) | **graphics\_upper\_left** | In graphics mode a top left hand corner |
| @(-n) | **graphics\_upper\_right** | In graphics mode a top right hand corner |
| @(-n) | **graphics\_bottom\_left** | In graphics mode a bottom left hand corner |
| @(-n) | **graphics\_bottom\_right** | In graphics mode a bottom right hand corner |
| @(-n) | **graphics\_intersection** | In graphics mode **+** intersection character |
| @(-n) | **graphics\_tee\_left** | In graphics mode a left hand tee character |
| @(-n) | **graphics\_tee\_right** | In graphics mode a right hand tee character |
| @(-n) | **graphics\_tee\_up** | In graphics mode a top tee character |
| @(-n) | **graphics\_tee\_down** | In graphics mode a bottom tee character |
| @(-n) | **background colorname** | Set the background to one of the supported colors , where "colorname" is one of: black , blue , green , cyan, red , magenta , yellow , white |
| @(-n) | **foreground colorname** | Set the foreground to one of the supported colors , where "colorname" is one of: black , blue , green, cyan , red , magenta , yellow , white |

[Back to Articles](./../README.md)
