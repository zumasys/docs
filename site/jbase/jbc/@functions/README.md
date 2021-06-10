# @functions

<PageHeader />

## @ cursor functions for screen manipulation

The @ function is used to position the cursor to a specific point on the terminal screen.  

The function can be used as follows:

```
@(col{, row})
```

Where:

- **col** and **row** can be any expression that evaluates to a numeric value.
- **col** specifies, to which column on the screen the cursor should be moved.
- **row** specifies which row (line) on the screen to position the cursor.

Specifying **col** on its own will locate the cursor to the required column on whichever row it currently occupies. The terminal address starts at (0,0), that being the top left hand corner of the screen.

## Note

> When specified values exceed either of the physical limits of the current terminal, then unpredictable results will occur.
>
> Cursor addressing will not normally work when directed at a printer. Building printer independence into a program can be achieved by accessing the terminfo database through the SYSTEM() function.

If the function is given a screen code as an argument as below:

```
@(screen_code)
```

Where **screen\_code** is any valid jBASIC screen code.

The function can be used to control the behavior of the display screen. Screen color can also be controlled. For example:

```
CRT @(-1):@(2, 30):"Hi there!":
```

The above can be used to clear the screen before the greeting "Hi there!" is displayed at the location specified by the second @ function.

Some valid screen codes are listed below:

| <!----> | <!----> |
| --- | --- |
| -1 | clear the screen and home the cursor. |
| -2 | home the cursor. |
| -3 | clear screen from the cursor to the end of the screen. |
| -4 | clear screen from cursor to the end of the current screen line. |
| -9 | move the cursor one character to the left. |
| -10 | move the cursor one row up the screen. |  

Go back to [jBASE BASIC](./../README.md)

Go back to [Programmers' Reference Guide](./../../reference-guides/jbc/README.md)

<PageFooter />
