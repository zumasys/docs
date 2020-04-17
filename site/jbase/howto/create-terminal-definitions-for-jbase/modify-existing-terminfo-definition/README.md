# Modifying an existing terminfo definition  

<PageHeader />

The mechanism for modifying an existing terminfo definition is quite simple.  

1. Create a source definition for the terminal.
2. Edit the source definition for the terminal.
3. Compile the source definition for the terminal into a binary entry in the terminfo database.

These 3 simple steps are shown below for the vt100 definition (Note the 'vi' editor commands not shown).

```
% cd $HOME/source
% pwd
/home/slipper/source
% infocmp vt100 > vt100.ti
% vi vt100.ti
% su -
Password:
# tic /home/slipper/source/vt100.ti
```

The infocmp command is used to de-compile the binary database entry for the vt100 terminal and the output is re-directed to file vt100.ti. This file can then be modified with any editor, in this example vi was shown. Finally , as root user, the tic command is used to compile the source file definition into a compiled binary entry in the terminfo database.

The layout of the source file 'vt100.ti' is explained fully by using the Unix command 'man terminfo'. However as an introduction a short overview will be given on terminfo definitions. Let us look at the first few lines of the file vt100.ti that was created in the above example using the infocmp command:

```
# Reconstructed via infocmp from file: /usr/share/lib/terminfo/v/vt100
vt100|vt100-am|dec vt100 (w/advanced video),
am, mir, msgr, xenl, xon,
cols#80, it#8, lines#24, vt#3,
bel=^G, blink=\E[5m$<2>, bold=\E[1m$<2>,
```

## Comments

Any lines beginning with # are considered comments.

## Terminfo names

The first non-comment line is a number of fields delimited by a pipe character | . Each field is the name of an entry in the terminfo database that it will be compiled to, with the last field being a comment. In the above example, if the source file is compiled with the 'tic' command then it will create a terminfo database entry for vt100 and vt100-am.

## Binaries

The next line is a list of 'binaries' but in reality there may be 0 or more lines of binaries. In the above example the binaries am,mir,msgr, xenl and xon are defined. These binaries simply equate to 'true' and the absence of a binary defaults to 'false'. The meaning of each possibly binary is found by using 'man terminfo'. In our example 'am' shows the terminal has automatic right margins, the 'msgr' binary shows it is safe to work in standout mode and so on.

## Numbers

The next line is a list of 'numbers' and again there may be 0 or more lines of numbers. These 'numbers' assign an integer value to a terminal capability. In the example 'cols#80' shows the number of columns of the terminal is 80, 'lines#24' shows there are 24 lines and so on.

## Strings

 The remainder of the source file describes strings. Each string defines a set of characters that are related to each terminal capability. The 'man terminfo' describes these strings fully. In the above example we can see that to sound the bell on the terminal we need the string ^G, which is translated to mean <CTRL>+G or CHAR(7).  

 A more complicated example is the string needed to turn on bold characters. This is shown as \E[1m$<2> -- the \E will get translated as an Escape character or CHAR(27), the [1m are string literals with no translation and finally the $<2> shows to send 2 pad characters to the terminal. This last construct is designed for old slow dumb terminals with no flow control that may need extra time to interpret these character strings. The $<2> are stripped away in jBASE and ignored.

The layout of the source file needn't follow the above example. The first non-comment line is always the list of terminfo names to be compiled to and the remainder of the non-comment lines can be a mix of binaries, numbers and strings with each capability delimited by a comma character,

Back to [Creating terminal definitions in jBASE](./../README.md)

<PageFooter />
