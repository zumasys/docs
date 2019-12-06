# PN5_60656

**Created At:** 12/24/2017 12:12:12 PM  
**Updated At:** 2/16/2018 7:05:31 PM  


### Description

Enhancement: Add an option to the **jshow** command to display information about the jBASE system



### Previous Release Behavior

The option didn't exist.



### Current Release Behavior

This enhancement involves using the new **-d** option, followed by optional operands. The help screen has been updated and is shown below.

The output is a JSON string, enabling remote applications to easily capture, parse and use the output.

```
jsh home ~ -->jshow -h
Usage: jshow.exe {-cfhpsv} Name {Name ...}
       jshow.exe -d {emulation | user | routine } {verbose , mangle , portnumber}
Where:
        -c      Create time and file display.
        -d      Display general information about the system
        -f      File name only search.
        -h      Display this help screen.
        -p      Program name only search.
        -s      Subroutine name only search.
        -v      Verbose mode.
        Name    Name of file,subroutine or program.
```

By default, **jshow -d** will show all of its available information as a JSON string. For example,

```
jsh home ~ -->jshow -d
{
        "emulation":{
                "long_who":0,
                "error_numbers_are_single_attribute":0,

[ Lots of screen output removed ]
```

You can limit this screen output by adding 'emulation' and/or 'user' and/or 'routine'.

There are other options of 'nnnn' which restricts the 'user' to a single portnumber, or 'verbose' (same as the -v option) or 'mangled' so the routine names are shown in their mangled format.

For example, to display everything about port 123 you would do this

```
jsh home ~ -->jshow -d user 123 verbose
{
        "port":{
                "123":{
                        "port_number":123,
                        "number_programs":1,
                        "connect_time":36,
                        "listen_time":1,


[ Lots of screen output removed ]
```



All the information displayed is readily available as a jBASE Dynamic Object using the **$system**class. For example, to display all your routines (and the OS shared objects that contain them) you can use the code below -- note that this is functionally equivalent to executing "jshow -d routine"

```
fbcentos-~/tmp5: ED . test6.jabba
New record
test6.jabba
TOP
.i
001+obj = new object("$system")
002+obj->getroutines()
003+print obj->$tojson(1)
004+
BOTTOM
.fi
Record 'test6.jabba' written to file '.'
fbcentos-~/tmp5: jcompile test6.jabba -o test6
fbcentos-~/tmp5: test6
{
        "object":{
                "main()":0,
                "/home/gregc/lib/lib0.so.8":1,
                "/home/gregc/5.0_rels/jbcdev5.6.0/lib/libjbaseutil.so":2,
                "/home/gregc/5.0_rels/jbcdev5.6.0/lib/libSQLSYS.so":3,
                "/home/gregc/5.0_rels/jbcdev5.6.0/lib/libjsub.so":4,
                "/home/gregc/5.0_rels/jbcdev5.6.0/lib/libjcon.so":5,
                "/home/gregc/5.0_rels/jbcdev5.6.0/lib/libjrest.so":6,
                "/home/gregc/5.0_rels/jbcdev5.6.0/lib/libjwobj.so":7
        },
        "routine":{
                "$system::getemulation":2,
                "$system::getroutines":2,
                "$system::getuserinfo":2,
                "DEBUG1":1,
                "DEBUG2":1,
                "EDICT_CHECKTYPES":2,
                "EDICT_COLWIZ":2,
                "EDICT_DELETE":2,

[ Lots of lines removed ]
```
