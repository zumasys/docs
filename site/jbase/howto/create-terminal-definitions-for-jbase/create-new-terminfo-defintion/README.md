# Creating a new terminfo definition  

<PageHeader />

Most often you will be [modifying an existing terminfo definition](./../modify-existing-terminfo-definition/README.md). Sometimes though there is no choice but to create an entry from scratch. There are two ways to approach this.

The first way is to simply create a new source file anywhere on your system and then as root user to compile it to the binary database entry. This is an example of taking this approach (note the 'vi' editor commands not show).

```
% cd $HOME/source
% pwd
/home/slipper/source
% vi myterminal.ti
% cat myterminal.ti
myterm|myterm80|Comments put here,
am, bw, hs, msgr, nxon, xon,
cols#80, it#8, lines#24, wsl#79, xmc#1,
bel=^G, blink=\E[5m, bold=\E[1m, civis=\E[<4l,
(some lines not shown for clarity)
% su -
Password:
# tic /home/slipper/source/myterminal.ti
```

Note that the name of the source file (/home/slipper/source/myterminal.ti) and its location are not important. The only important thing is that you must be root user to run the 'tic' program.

The second approach is to use an existing terminfo definition as a template for your new one. It is quite often the case that a new terminfo definition has a similar product that you can base your new one on. Plus it makes it easier to get the format of the file right ! Below is an example of using the vt100 terminfo definition as a template by [displaying an existing terminfo entry](.//../display-existing-terminfo-definition/README.md) to a file, editing the changes and finally creating the binary database entry from the definition source file.

```
% cd $HOME/source
% pwd
/home/slipper/source
% infocmp vt100 > myterminal.ti
% vi myterminal.ti
% su -
Password:
# tic /home/slipper/source/myterminal.ti
```

The section [Modifying an existing terminfo definition](./../modify-existing-terminfo-definition/README.md) will provide you with more details on the contents of these terminal definition source files.

Back to [Creating terminal definitions in jBASE](./../README.md)

<PageFooter />
