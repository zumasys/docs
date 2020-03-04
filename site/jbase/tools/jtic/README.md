# jtic

**Created At:** 8/30/2018 2:21:53 PM  
**Updated At:** 12/28/2018 8:50:54 AM  
**Original Doc:** [jtic](https://docs.jbase.com/48399-tools/jtic)  
**Original ID:** 336943  
**Internal:** No  

## Description

The program is executed as:

```
jtic -Options DescriptionFile
```

Where Options can be:

- **-x** the Description file contains extended capabilities
- **-v** verbose mode

By default, the program jtic will take a source description file called terminfo.src and assume it contains standard terminfo names. The output will be to a file called /usr/lib/terminfo/x/xyz, where x/xyz depends upon the terminal name as contained in the description file.

You can use any alternative description file to terminfo.src by specifying the description file name on the command line. You can specify an alternative output directory to /usr/lib/terminfo by amending the TERMINFO environment variable. However, when you run a BASIC program that accesses these definitions in an alternative directory, the TERMINFO variable needs to match that when the definition was compiled. By default the jtic program assumes the description file contains standard terminfo definitions: e.g.

cuu1=\E[1A, cols#80,

If you want to create a binary with the extended capabilities, use the -x option. Remember when running jtic you will probably require root privileges to write to the /usr/lib/terminfo directory.

jtic Description File

To run jtic you need a description file to describe the capabilities. This file is very similar to that required by the UNIX tic command.

Comment lines start with # as the first character of each line. Blank lines are also counted as comment lines.

Terminal names. This tells jtic the names of the terminal definition. It is a list of names delimited by | characters. The final field is treated as a comment. Following the terminal names will be the binary definitions, integer values and string values for those terminals. When another set of terminal names are defined, the current definitions are written to file and the current definitions nulled. E.g.

vt100|vt100am|prism-ans|Simple vt100 support

Binary definition. These are just the name of the definition. E.g.xon

Integer value. The name of the definition followed by # then the value. E.g. cols#132

String value. The name of the definition followed by = followed by the string value. jtic supports all the functionality of tic, such as defining characters 1 to 26 using ^A through ^Z, specials such as \E for escape, \s for space, \t for tab. It also supports the if/else/endif structure and logical/arithmetic operations supported by tic. E.g. if\_prtr\_letter=\E[02l,

use=name. Resets the definition to that of a previously defined name in the definition. You can use this to create a terminfo definition for one or more names, and then base subsequent definitions on that. An example of using this can be found in the source $JBCRELEASEDIR/src/prism. E.g.use=ansi

The comments and terminal names must all start at column 1. The binaries, integers, strings and use=name must all have a leading tab character. There can be more than one binary, integer or string on a line, and each definition should be delimited by a comma. When invoked with the -x option a terminfo binary file with the suffix \_jbase is generated for the extended capabilities.

### Extended Definitions

| Access | Long name Description |
| --- | --- |
| @(-53) | if\_slave\_only Send data to slave printer only. No VDT display |
| @(-54) | if\_crt\_type Returns VDT terminal type |
| @(-55) | if\_crt\_graphics Returns a 1 if Regis graphics available |
| @(-59) | if\_crt\_cuprot Clear all unprotected fields |
| @(-27) | if\_crt\_132 Switch VDT to 132 column mode |
| @(-28) | if\_crt\_80 Switch VDT to 80 column mode |
| @(-29) | if\_crt\_dwide Display double wide characters |
| @(-30) | if\_crt\_swide Display single wide characters |
| @(-32) | if\_crt\_sron Set-up scrolling region. (Enter ? for help) |
| @(-33) | if\_crt\_sroff Reset scrolling region to normal |
| @(-47) | if\_crt\_udhdw Top half of double height line |
| @(-48) | if\_crt\_bdhdw Bottom half of double height line |
| @(-60) | if\_prtr\_executive Change paper size to executive |
| @(-61) | if\_prtr\_a4 Change paper size to A4 |
| @(-62) | if\_prtr\_monarch Envelope type "Monarch" |
| @(-63) | if\_prtr\_comm10 Envelope type "Commercial 10" |
| @(-64) | if\_prtr\_interntldl Envelope type "International DL" |
| @(-65) | if\_prtr\_reset Reset printer defaults |
| @(-66) | if\_prtr\_envfeed Envelope feeder |
| @(-70) | if\_prtr\_letter Change paper size to letter |
| @(-71) | if\_prtr\_legal Change paper size to legal |
| @(-72) | if\_prtr\_chgcpy Change number of copies to print on Laser |
| @(-73) | if\_prtr\_cpwo1 Compressed print for Service WO form 1 |
| @(-74) | if\_prtr\_spcol Start printing at specified column |
| @(-75) | if\_prtr\_sprow Start printing at specified row |
| @(-76) | if\_prtr\_utray Use Upper Tray |
| @(-77) | if\_prtr\_ltray Use Lower Tray |
| @(-78) | if\_prtr\_portrt Portrait orientation |
| @(-79) | if\_prtr\_land Landscape orientation |
| @(-80) | if\_prtr\_simplx Simplex binding |
| @(-81) | if\_prtr\_duplxl Duplex, long edge binding |
| @(-82) | if\_prtr\_duplxs Duplex, short edge binding |
| @(-83) | if\_prtr\_macro Call MACRO |
| @(-84) | if\_prtr\_setdef Set default ( Font size, HMI, VMI ) |
| @(-85) | if\_prtr\_lpi2 2 lines per inch |
| @(-86) | if\_prtr\_lpi3 3 lines per inch |
| @(-87) | if\_prtr\_lpi4 4 lines per inch |
| @(-88) | if\_prtr\_lpi6 6 lines per inch |
| @(-89) | if\_prtr\_lpi8 8 lines per inch |
| @(-90) | if\_prtr\_lpi12 12 lines per inch |
| @(-91) | if\_prtr\_dwide Double wide mode |
| @(-92) | if\_prtr\_swide Single wide mode |
| @(-93) | if\_prtr\_96 96 column mode |
| @(-94) | if\_prtr\_pld 1/2 line down |
| @(-95) | if\_prtr\_plu 1/2 line up |
| @(-96) | if\_prtr\_suon Superscript mode |
| @(-97) | if\_prtr\_sbon Subscript mode |
| @(-98) | if\_prtr\_ssoff Superscript and subscript off |
| @(-99) | if\_prtr\_40 Double wide for 80 column mode (5 pitch) |
| @(-100) | if\_prtr\_48 Double wide for 96 column mode (6 pitch) |
| @(-101) | if\_prtr\_ff Top of form |
| @(-102) | if\_prtr\_80 80 column mode (10 pitch) |
| @(-103) | if\_prtr\_132 132 column mode (16 pitch) |
| @(-104) | if\_prtr\_bold Bold |
| @(-105) | if\_prtr\_ul Underline |
| @(-106) | if\_prtr\_norm Turn off bold and underline |
| @(-107) | if\_prtr\_hmi Set horizontal motion index to U-1 |
| @(-108) | if\_prtr\_vmi Set vertical motion index to U-1 |
| @(-109) | if\_prtr\_pson Proportional spacing on |
| @(-110) | if\_prtr\_psoff Proportional spacing off |
| @(-111) | if\_prtr\_1key Linefeed and backspace |
| @(-112) | if\_prtr\_2key Linefeed |
| @(-113) | if\_prtr\_3key Linefeed and space |
| @(-114) | if\_prtr\_4key Backspace |
| @(-115) | if\_prtr\_6key Space |
| @(-116) | if\_prtr\_7key Negative linefeed and backspace |
| @(-117) | if\_prtr\_8key Negative linefeed |
| @(-118) | if\_prtr\_9key Negative linefeed and space |
| @(-119) | if\_prtr\_cvd Coarse vertical distance ( 1 line = 1 inch) |
| @(-120) | if\_prtr\_mvd Medium vertical distance ( 1 line = 1/6 inch ) |
| @(-121) | if\_prtr\_type Returns slave/printer type |
| @(-122) | if\_prtr\_fvd Fine vertical distance ( 1 line = 1/48 inch) |
| @(-123) | if\_prtr\_chd Coarse horizontal distance ( 1 space = 1 inch ) |
| @(-124) | if\_prtr\_mhd Medium horizontal distance ( 1 space = 1/12 inch ) |
| @(-125) | if\_prtr\_fhd Fine horizontal distance ( 1 space = 1/120 inch ) |
| @(-126) | if\_prtr\_status Retrieve slave/printer device status |
| @(-220) | IF\_PRTR\_DUL\_ON |
| @(-221) | IF\_PRTR\_DUL\_OFF |
| @(-223) | IF\_PRTR\_STRIKE\_ON |
| @(-224) | IF\_PRTR\_STRIKE\_OFF |
| @(-225) | IF\_PRTR\_HARD\_HYPHEN |
| @(-226) | IF\_PRTR\_HARD\_BLANK |
| @(-230) | IF\_PRTR\_FONT\_0 |
| @(-231) | IF\_PRTR\_FONT\_1 |
| @(-232) | IF\_PRTR\_FONT\_2 |
| @(-233) | IF\_PRTR\_FONT\_3 |
| @(-234) | IF\_PRTR\_FONT\_4 |
| @(-235) | IF\_PRTR\_FONT\_5 |
| @(-236) | IF\_PRTR\_FONT\_6 |
| @(-237) | IF\_PRTR\_FONT\_7 |
| @(-238) | IF\_PRTR\_FONT\_8 |
| @(-239) | IF\_PRTR\_FONT\_9 |

### jBASE Extended terminfo definitions generation

To generate a terminfo extension file, using the jtic -x comamnd, setting any of the following terminfo strings references in lowercase. Ensure that the prt\_video emulation flag is configured to true, for the required emulation.

e.g.

Generate jBASE extension tic file

```
ED . Mytic
TOP
.
001 # My jBASE extension file for vt220
002 vt220|VT220
003 if_crt_132=My132String,
004 if_crt_80=My80String,
.FI
```

Generate jBASE terminfo extension file.

```
jtic -x Mytic
```

This generates a jBASE extension entry for vt220 in the terminfo database. e.g. /usr/lib/terminfo/v/vt220\_ext\_jbase

Test terminfo produces correct result

```
ED . TESTMYTIC.b
TOP
.
001 CRT "Output my 80 column terminfo command ":@(-28)
002 CRT "Output my 132 column terminfo command ":@(-27)
.FI
export TERM=vt220
export JBCEMULATE=ROS
jbc -Jo TESTMYTIC.b
TESTMYTIC > MyFile
```

[Back to Tools](./../README.md)
