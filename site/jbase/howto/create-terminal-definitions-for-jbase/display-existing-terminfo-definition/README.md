# Displaying an existing terminfo definition  

<PageHeader />

This page is only applicable to UNIX systems. It shows how you can display the definition for any existing terminfo entry that currently exists on your system. Normally this involves using the UNIX command 'infocmp'. This command is available on most, but not all, UNIX systems.  

The infocmp command will take a compiled binary entry in the terminfo database and display to the terminal the equivalent source code. Here is an example of using infocmp to display the capabilities of a viewpoint terminal.

```
% infocmp viewpoint
# Reconstructed via infocmp from file: /usr/share/lib/terminfo/v/viewpoint
viewpoint|adds|adds viewpoint,
am,
cols#80, lines#24,
bel=^G, clear=\f$<10.1*>, cnorm=^O\E0`, cr=\r,
cub1=\b, cud1=\n, cuf1=^F,
cup=\EY%p1%'\s'%+%c%p2%'\s'%+%c$<6>, cuu1=^Z,
cvvis=^O\E0P, dl1=\El, ed=\Ek$<16.1*>, el=\EK$<16>,
ind=\n, is2=^O\E0`, kcub1=^U, kcud1=\n, kcuf1=^F,
kcuu1=^Z, kf0=^B1, kf2=^B2, kf3=^B!, kf4=^B", kf5=^B#,
khome=^A, ll=^A, rmso=^O, rmul=^O, smso=\E0P^N,
smul=\E0`^N,
```

The above example shows the definition for a terminal named 'viewpoint' , which can also be seen is also a synonym for 'adds'.

You can also use the -L option to use the long C names. The same example but with the -L option gives us

```
% infocmp -L viewpoint
# Reconstructed via infocmp from file: /usr/share/lib/terminfo/v/viewpoint
Terminal type viewpoint
viewpoint|adds|adds viewpoint
flags
auto_right_margin,
numbers
columns = 80, lines = 24,
strings
bell = '^G', carriage_return = '\r',
clear_screen = '\f$<10.1*>', clr_eol = '\EK$<16>',
clr_eos = '\Ek$<16.1*>',
cursor_address = '\EY%p1%'\s'%+%c%p2%'\s'%+%c$<6>',
cursor_down = '\n', cursor_left = '\b',
cursor_normal = '^O\E0`', cursor_right = '^F',
cursor_to_ll = '^A', cursor_up = '^Z',
cursor_visible = '^O\E0P', delete_line = '\El',
enter_standout_mode = '\E0P^N', enter_underline_mode = '\E0`^N',
exit_standout_mode = '^O', exit_underline_mode = '^O',
init_2string = '^O\E0`', key_down = '\n', key_f0 = '^B1',
key_f2 = '^B2', key_f3 = '^B!', key_f4 = '^B"', key_f5 = '^B#',
key_home = '^A', key_left = '^U', key_right = '^F',
key_up = '^Z', scroll_forward = '\n',
end of strings
```

These names are the ones used in a C application to address each capability of the terminal. However the short name format is what is used to create a new definition.

If you want to find out what terminal names are defined on your system, then look in the directory /usr/lib/terminfo. This is further sub-divided into 'a' through 'z'. For example the terminfo definition for the 'viewpoint' terminal will be found in file /usr/lib/terminfo/v/viewpoint. Note that on some platforms the terminfo library is in another directory (use a command like 'man infocmp' to find out the directory name).

Quite often you will find the source code for the terminals defined for the Unix platform in the /usr/lib/terminfo directory. For example under AIX the file /usr/lib/terminfo/wyse.ti is the original source code for Wyse terminals that AIX uses in its terminfo database.

Back to [Creating terminal definitions in jBASE](./../README.md)

<PageFooter />
