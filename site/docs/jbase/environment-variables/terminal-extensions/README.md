# Terminal Extensions

**Created At:** 11/3/2017 3:22:48 PM  
**Updated At:** 12/24/2018 4:17:54 PM  
**Original Doc:** [terminal-extensions](https://docs.jbase.com/41717-environment-variables/terminal-extensions)  




```
jtic -Options DescriptionFile
```



Where Options can be:


| Option <br> | Description <br> |
| --- | --- |
| -x<br> | the Description File contains extended capabilities<br> |
| -v<br> | verbose mode<br> |


By default, the program jtic will take a source description file called terminfo.src and assume it contains standard terminfo names. The output will be to a file called /usr/lib/terminfo/x/xyz, where x/xyz depends upon the terminal name as contained in the description file.

You can use any alternative description file to terminfo.src by specifying the description file name on the command line. You can specify an alternative output directory to /usr/lib/terminfo by amending the TERMINFO environment variable. However, when you run a BASIC program that accesses these definitions in an alternative directory, the [TERMINFO](./../terminfo) variable needs to match that when the definition was compiled. By default the jtic program assumes the description file contains standard terminfo definitions: e.g.

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



EXTENDED DEFINITIONS


| Access<br> | Long name Description<br> |
| --- | --- |
| @(-53)<br> | if\_slave\_only Send data to slave printer only. No VDT display<br> |
| @(-54)<br> | if\_crt\_type Returns VDT terminal type<br> |
| @(-55)<br> | if\_crt\_graphics Returns a 1 if Regis graphics available<br> |
| @(-59)<br> | if\_crt\_cuprot Clear all unprotected fields<br> |
| @(-27)<br> | if\_crt\_132 Switch VDT to 132 column mode<br> |
| @(-28)<br> | if\_crt\_80 Switch VDT to 80 column mode<br> |
| @(-29)<br> | if\_crt\_dwide Display double wide characters<br> |
| @(-30)<br> | if\_crt\_swide Display single wide characters<br> |
| @(-32)<br> | if\_crt\_sron Set-up scrolling region. (Enter ? for help)<br> |
| @(-33)<br> | if\_crt\_sroff Reset scrolling region to normal<br> |
| @(-47)<br> | if\_crt\_udhdw Top half of double height line<br> |
| @(-48)<br> | if\_crt\_bdhdw Bottom half of double height line<br> |
| @(-60)<br> | if\_prtr\_executive Change paper size to executive<br> |
| @(-61)<br> | if\_prtr\_a4 Change paper size to A4<br> |
| @(-62)<br> | if\_prtr\_monarch Envelope type "Monarch"<br> |
| @(-63)<br> | if\_prtr\_comm10 Envelope type "Commercial 10"<br> |
| @(-64)<br> | if\_prtr\_interntldl Envelope type "International DL"<br> |
| @(-65)<br> | if\_prtr\_reset Reset printer defaults<br> |
| @(-66)<br> | if\_prtr\_envfeed Envelope feeder<br> |
| @(-70)<br> | if\_prtr\_letter Change paper size to letter<br> |
| @(-71)<br> | if\_prtr\_legal Change paper size to legal<br> |
| @(-72)<br> | if\_prtr\_chgcpy Change number of copies to print on Laser<br> |
| @(-73)<br> | if\_prtr\_cpwo1 Compressed print for Service WO form 1<br> |
| @(-74)<br> | if\_prtr\_spcol Start printing at specified column<br> |
| @(-75)<br> | if\_prtr\_sprow Start printing at specified row<br> |
| @(-76)<br> | if\_prtr\_utray Use Upper Tray<br> |
| @(-77)<br> | if\_prtr\_ltray Use Lower Tray<br> |
| @(-78)<br> | if\_prtr\_portrt Portrait orientation<br> |
| @(-79)<br> | if\_prtr\_land Landscape orientation<br> |
| @(-80)<br> | if\_prtr\_simplx Simplex binding<br> |
| @(-81)<br> | if\_prtr\_duplxl Duplex, long edge binding<br> |
| @(-82)<br> | if\_prtr\_duplxs Duplex, short edge binding<br> |
| @(-83)<br> | if\_prtr\_macro Call MACRO<br> |
| @(-84)<br> | if\_prtr\_setdef Set default ( Font size, HMI, VMI )<br> |
| @(-85)<br> | if\_prtr\_lpi2 2 lines per inch<br> |
| @(-86)<br> | if\_prtr\_lpi3 3 lines per inch<br> |
| @(-87)<br> | if\_prtr\_lpi4 4 lines per inch<br> |
| @(-88)<br> | if\_prtr\_lpi6 6 lines per inch<br> |
| @(-89)<br> | if\_prtr\_lpi8 8 lines per inch<br> |
| @(-90)<br> | if\_prtr\_lpi12 12 lines per inch<br> |
| @(-91)<br> | if\_prtr\_dwide Double wide mode<br> |
| @(-92)<br> | if\_prtr\_swide Single wide mode<br> |
| @(-93)<br> | if\_prtr\_96 96 column mode<br> |
| @(-94)<br> | if\_prtr\_pld 1/2 line down<br> |
| @(-95)<br> | if\_prtr\_plu 1/2 line up<br> |
| @(-96)<br> | if\_prtr\_suon Superscript mode<br> |
| @(-97)<br> | if\_prtr\_sbon Subscript mode<br> |
| @(-98)<br> | if\_prtr\_ssoff Superscript and subscript off<br> |
| @(-99)<br> | if\_prtr\_40 Double wide for 80 column mode (5 pitch)<br> |
| @(-100)<br> | if\_prtr\_48 Double wide for 96 column mode (6 pitch)<br> |
| @(-101)<br> | if\_prtr\_ff Top of form<br> |
| @(-102)<br> | if\_prtr\_80 80 column mode (10 pitch)<br> |
| @(-103)<br> | if\_prtr\_132 132 column mode (16 pitch)<br> |
| @(-104)<br> | if\_prtr\_bold Bold<br> |
| @(-105)<br> | if\_prtr\_ul Underline<br> |
| @(-106)<br> | if\_prtr\_norm Turn off bold and underline<br> |
| @(-107)<br> | if\_prtr\_hmi Set horizontal motion index to U-1<br> |
| @(-108)<br> | if\_prtr\_vmi Set vertical motion index to U-1<br> |
| @(-109)<br> | if\_prtr\_pson Proportional spacing on<br> |
| @(-110)<br> | if\_prtr\_psoff Proportional spacing off<br> |
| @(-111)<br> | if\_prtr\_1key Linefeed and backspace<br> |
| @(-112)<br> | if\_prtr\_2key Linefeed<br> |
| @(-113)<br> | if\_prtr\_3key Linefeed and space<br> |
| @(-114)<br> | if\_prtr\_4key Backspace<br> |
| @(-115)<br> | if\_prtr\_6key Space<br> |
| @(-116)<br> | if\_prtr\_7key Negative linefeed and backspace<br> |
| @(-117)<br> | if\_prtr\_8key Negative linefeed<br> |
| @(-118)<br> | if\_prtr\_9key Negative linefeed and space<br> |
| @(-119)<br> | if\_prtr\_cvd Coarse vertical distance ( 1 line = 1 inch)<br> |
| @(-120)<br> | if\_prtr\_mvd Medium vertical distance ( 1 line = 1/6 inch )<br> |
| @(-121)<br> | if\_prtr\_type Returns slave/printer type<br> |
| @(-122)<br> | if\_prtr\_fvd Fine vertical distance ( 1 line = 1/48 inch)<br> |
| @(-123)<br> | if\_prtr\_chd Coarse horizontal distance ( 1 space = 1 inch )<br> |
| @(-124)<br> | if\_prtr\_mhd Medium horizontal distance ( 1 space = 1/12 inch )<br> |
| @(-125)<br> | if\_prtr\_fhd Fine horizontal distance ( 1 space = 1/120 inch )<br> |
| @(-126)<br> | if\_prtr\_status Retrieve slave/printer device status<br> |
| @(-220)<br> | IF\_PRTR\_DUL\_ON<br> |
| @(-221)<br> | IF\_PRTR\_DUL\_OFF<br> |
| @(-223)<br> | IF\_PRTR\_STRIKE\_ON<br> |
| @(-224)<br> | IF\_PRTR\_STRIKE\_OFF<br> |
| @(-225)<br> | IF\_PRTR\_HARD\_HYPHEN<br> |
| @(-226)<br> | IF\_PRTR\_HARD\_BLANK<br> |
| @(-230)<br> | IF\_PRTR\_FONT\_0<br> |
| @(-231)<br> | IF\_PRTR\_FONT\_1<br> |
| @(-232)<br> | IF\_PRTR\_FONT\_2<br> |
| @(-233)<br> | IF\_PRTR\_FONT\_3<br> |
| @(-234)<br> | IF\_PRTR\_FONT\_4<br> |
| @(-235)<br> | IF\_PRTR\_FONT\_5<br> |
| @(-236)<br> | IF\_PRTR\_FONT\_6<br> |
| @(-237)<br> | IF\_PRTR\_FONT\_7<br> |
| @(-238)<br> | IF\_PRTR\_FONT\_8<br> |
| @(-239)<br> | IF\_PRTR\_FONT\_9<br> |




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


