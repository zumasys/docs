# Usage of the terminfo capabilities within jBASE  

<PageHeader />

This page is intended to help you find out what definitions in the terminfo database are used by jBASE. Using this knowledge you can create a new terminfo definition for a terminal not supported by your Unix platform, or upgrade the terminfo definition if it is lacking in some areas. First though, a short description of some of the terminology we will use.

## Variable name

This is the long name of the capability that is displayed with the -L option to infocmp. It is usually fairly meaningful. This is also the name you would use in a C program to reference the capability. There is always an equivalent Cap name for each Variable Name.

## Cap name

This is the short name of the capability and is displayed by default using the infocmp command. It is the name that must be in the terminal definition source file if it is to be compiled into a binary entry using the 'tic' command. There is always an equivalent Variable name for each Cap name.

## jBASE name

This is the name of the terminal capability as defined in the Config_EMULATE file.

## Config_EMULATE

This file on jBASE provides the definitions for the different emulations that are supported by jBASE. In particular it defines the relationship between the values passed to the @() function and the effect that this returns. For example the default entry shows '@(-1) = clear_screen'. This shows that if you code "PRINT @(-1)" in your application then this will cause the screen to be cleared using the jBASE terminal capability 'clear_screen'.

In the rest of this documentation we have avoided the use of the @(-nn) function calls. This is because the value of the passed parameter varies considerably between different supported emulations. Instead we use the jBASE name to describe the capability. If you look at file /usr/jbc/config/Config_EMULATE you will see these translations. For example if later on we refer to the jBASE name of 'printer_on', you will see that in the default emulation this is the equivalent of using @(-17) in your application.

Two tables now follow.

1. The jBASE Name Usage table shows what terminfo capabilities are required to support all the jBASE names (and thus all the @(-nn) functions).
2. The Variable Name Usage table shows all the uses of the terminfo database Cap names and how it is used in jBASE.

### jBASE Name Usage

| jBASE name              | Cap Name(s) used | Notes |
| --- | --- | --- |
| background              | setaf<br>setab | setaf sets the foreground colour and setab sets the background colour. Not all platforms have this capability and only a few terminals such as PC consoles support this. |  
| blink_off               | sgr0<br>sgr | As there is no specific terminfo definition for this, we remove all video effects. |  
| blink_on                | blink |    |  
| bold_off                | rmso  |    |  
| bold_on                 | bold<br>sgr0<br>smso<br>rmso | If the 'sgr0' capability exists it means we can turn off bold easily so we try to use the 'bold' mode. If 'bold' or 'sgr0' do not exist, we try to use the 'smso' and 'rmso' pair which turn standout mode on and off. |  
| clear_eol               | el    |    |  
| clear_eos               | ed    |    |  
| clear_screen            | clear |     |  
| cursor_down             ! cud1  |     |  
| cursor_home             | home<br>cup | We try to use the 'home' variable first. If this is not available we use 'cup' which positions the cursor at column 0, row 0. |  
| cursor_left             | cub1  |     |  
| cursor_off              | civis |     |  
| cursor_on               ! cnorm |     |  
| cursor_right            | cuf1  |     |  
| cursor_up               | cuu1  |     |  
| delete_char             | dch1  |     |  
| delete_line             | dl1   |     |  
| dim_on                  | dim   |     |  
| effects_off             | sgr0<br>sgr<br>rmul<br>rmso | First we try to use 'sgr0' which resets all video attributes. If that doesn't exist we use 'sgr' which sets individual attributes -- we set them all to OFF. Finally if both of those don't exist we try to use rmul to remove underline mode and rmso to remove standout (bold) mode. |  
| foreground              | setaf<br>setab | setaf sets the foreground colour and setab sets the background colour. Not all platforms have this capability and only a few terminals such as PC consoles support this. |  
| graphics_bottom_left    | acsc  |     |  
| graphics_bottom_right   | acsc  |     |  
| graphics_horizontal     | acsc  |     |  
| graphics_intersection   | acsc  |     |  
| graphics_off            | rmacs |     |  
| graphics_on             | enacs<br>smacs | enacs is used to first enable the alternate character set and smacs is then used to begin the usage of the alternate character set. |  
| graphics_tee_down       | acsc  |     |  
| graphics_tee_left       | acsc  |     |  
| graphics_tee_right      | acsc  |     |  
| graphics_tee_up         | acsc  |     |  
| graphics_upper_left     | acsc  |     |  
| graphics_upper_right    | acsc  |     |  
| graphics_vertical       | acsc  |     |  
| insert_char             | ich1  |     |  
| insert_line             | il1   |     |  
| insert_off              | rmir  |     |  
| insert_on               | smir  |     |  
| print_screen            | mc0   |     |  
| printer_off             | mc4   |     |  
| printer_on              | mc5   |     |  
| prot_off                | sgr0<br>sgr | As there is no specific terminfo definition for this, we remove all video effects. |  
| prot_on                 | prot  |     |  
| reverse_off             | sgr0<br>sgr | As there is no specific terminfo definition for this, we remove all video effects. |  
| reverse_on              | rev   |     |  
| scroll_forward          | ind   |     |  
| status_line_off         | fsl   |     |  
| status_line_on          | tsl   |     |  
| underline_off           | rmul  |     |  
| underline_on            | smul  |     |  
| @(-128) through @(-191) | xmc<br>sgr | These turn on a combination of bold, blink, reverse, protect and underline on and off. See the individual entries in this table. If the terminal has the magic cookie glitch set (xmc) then it means each effect will lose one position on the screen and so we attempt to use the sgr capability instead of concatenating individual effects. |  
| @(nn)                   | "\r"<br>hpa<br>cuf<br>cuf1 | This moves to a column position only. If move to column 0 we always use a "\r" carriage return. If to any other column we first try the hpa capability. If this doesn't exist we try the cuf capability preceded by a "\r" and this will move the cursor to column 0 and then move nn characters to the right. Finally if none of these exist we try using a "\r" followed by nn occurrences of cuf1 (move cursor right just once). |
| @(nn,mm)                | cup   | Move to a specific row and column cursor address |  

### Variable Name Usage

This next table shows all the usage's of the terminfo database as used by jBASE.  
The first column is the Variable name as defined in the terminfo database.  
The second column is the equivalent Cap name.  
The third column is a description of how it may be used in jBASE.

Many of the entries are used in the @(-nn) functions and these function calls are not only used by typical applications, but are used by many jBASE supplied programs as well. For example you may not use the @(-3) command to clear to end of line anywhere in your own application, but remember that jBASE programs such as jED and jsh will use this themselves.

| Variable name | Cap Name | Usage within jBASE |
| --- | --- | --- |
| back_tab               | cbt   | Used by jED and jsh to establish what character sequence is sent by the terminal should the user press the BACK-TAB key. |
| bell                   | bel   | Used by the @SYS.BELL variable. Used by the INPUT statement under certain circumstances to signify an error. |
| clear_screen           | clear | Used by the jBASE name clear_screen to clear the screen and start a fresh clean page. |
| clr_eol                | el    | Used by the jBASE name clear_eol to clear to the end of line. |
| clr_eos                | ed    ! Used by the jBASE name clear_eos to clear to the end of the screen. |
| column_address         | hpa   ! Used by jBASE to move the cursor to a specific column on the screen using the @(nn) function call where nn is a positive integer. |
| columns                | cols  ! Used by jBASE to determine the default width of the terminal e.g. when the "SYSTEM(2)" function is executed). It can be over-ridden by the TERM statement or JBCTERM_WIDTH environment variable. It can also be over-ridden if the terminal is connected through a protocol that defined the terminal width, such as many PC terminal emulators connected over telnet. |
| cursor_address         | cup   | Used by jBASE to move the cursor to a specific row and column on the screen using the @(nn,mm) function call. May also be used by the jBASE name cursor_home if the 'home' capability is not defined. |
| cursor_down            | cud1  | Used by the jBASE name cursor_down to move the cursor down one position. |
| cursor_home            | home  | Used by the jBASE name cursor_home to move the cursor to the home position on the screen, i.e. to column 0 row 0. |
| cursor_invisible       | civis | Used by the jBASE name cursor_off in order to turn the cursor off. |
| cursor_left            | cub1  | Used by the jBASE name cursor_left to move the cursor left one position. |
| cursor_normal          | cnorm | Used by the jBASE name cursor_on in order to turn the cursor on. |
| cursor_right           | cuf1  | Used by the jBASE name cursor_right to move the cursor right one position. |
| cursor_up              | cuu1  | Used by the jBASE name cursor_up to move the cursor upwards one position |
| delete_character       | dch1  | Used by the jBASE name delete_char to delete a single character |
| enter_alt_charset_mode | smacs | Used by jBASE to start the alternative character set. This is typically to enable dumb terminals to do simple box graphics. |
| enter_blink_mode       | blink | Used by the jBASE name blink_on to turn on blinking on the terminal. |
| enter_bold_mode        | bold  | Used by the jBASE name bold_on turn turn on bold mode on the terminal. |
| enter_dim_mode         | dim   | Used by the@(-129) through @(-191) function calls to turn on dim mode |
| enter_insert_mode      | smir  | Used by the jBASE name insert_on to begin inserting characters at the current cursor location. |
| enter_protected_mode   | prot  | Used by the jBASE name prot_on to start printing to a protected area of the terminal. |
| enter_reverse_mode     | rev   | Used by the jBASE name reverse_on to begin displaying characters in reverse mode video. |
| enter_secure_mode      | invis | Used by the @(-129) through @(-191) function calls to begin displaying in secure mode i.e. the characters are not actually displayed on the screen. |
| enter_standout_mode    | smso  | Used by the jBASE name bold_on as an alternative to 'bold' should 'bold' not be available, or should the 'sgr0' not be available making it difficult to turn bold off. |
| enter_underline_mode   | smul  | Used by the jBASE name underline_on to begin displaying characters in underlined mode video. |
| exit_alt_charset_mode  | rmacs | Used by the jBASE name graphics_off to stop writing the box graphics and begin normal character set display. |
| exit_attribute_mode    | sgr0  | Used by a number of jBASE names in order to turn certain video effects off. |
| exit_insert_mode       | rmir  | Used by the jBASE name insert_off to stop the character insert mode. |
| exit_standout_mode     | rmso  | Used by the jBASE name to turn off the bold mode if we have chosen to use standout instead of bold. |
| exit_underline_mode    | rmul  | Used by the jBASE name underline_off to turn off the underline video effects mode. Can also be used by the jBASE name effects_off if the other capabilities sgr0 or sgr are not defined. |
| from_status_line       | fsl   | Used by the jBASE name status_line_off to move the cursor out of the status line (usually line 25) and back to the previous cursor position. |
| insert_character       | ich1  | Used by the jBASE name insert_char to insert a single space character at the current cursor position which will then be overwritten by the next displayable character sent to the terminal. |
| insert_line            | il1   | Used by the jBASE name insert_line to insert a single blank line after the current cursor position. |
| key_backspace          | kbs   | Used by jED and jsh to establish what character sequence is sent by the terminal should the user press the BACKSPACE key. |
| key_dc                 | kdch1 | Used by jED and jsh to establish what character sequence is sent by the terminal should the user press the DELETE key. |
| key_dl                 | kdl1  | Used by jED to establish what character sequence is sent by the terminal should the user press the DELETE-LINE key. |
| key_down               | kcud1 | Used by jED and jsh to establish what character sequence is sent by the terminal should the user press the DOWN arrow key. |
| key_eol                | kel   | Used by jED and jsh to establish what character sequence is sent by the terminal should the user press the CLEAR-END-LINE key. |
| key_eos                | ked   | Used by jED to establish what character sequence is sent by the terminal should the user press the CLEAR-END-SCREEN key. |
| key_f1                 | kf1   | Used by jED and jsh to establish what character sequence is sent by the terminal should the user press function key 1. |
| key_f2                 | kf2   | Used by jED and jsh to establish what character sequence is sent by the terminal should the user press function key 2. |
| key_f3                 | kf3   | Used by jED and jsh to establish what character sequence is sent by the terminal should the user press function key 3. |
| key_f4                 | kf4   | Used by jED to establish what character sequence is sent by the terminal should the user press function key 4. |
| key_f5                 | kf5   | Used by jED to establish what character sequence is sent by the terminal should the user press function key 5. |
| key_f6                 | kf6   | Used by jED to establish what character sequence is sent by the terminal should the user press function key 6. |
| key_f7                 | kf7   | Used by jED to establish what character sequence is sent by the terminal should the user press function key 7. |
| key_f8                 | kf8   | Used by jED to establish what character sequence is sent by the terminal should the user press function key 8. |
| key_f9                 | kf9   | Used by jED to establish what character sequence is sent by the terminal should the user press function key 9. |
| key_f10                | kf10  | Used by jED to establish what character sequence is sent by the terminal should the user press function key 10. |
| key_home               | khome | Used by jED and jsh to establish what character sequence is sent by the terminal should the user press the HOME key. |
| key_ic                 | kich1 | Used by jED to establish what character sequence is sent by the terminal should the user press the INSERT-CHARACTER key. |
| key_il                 | kil1  | Used by jED to establish what character sequence is sent by the terminal should the user press the INSERT LINE key. |
| key_left               | kcub1 | Used by jED and jsh to establish what character sequence is sent by the terminal should the user press the left arrow key. |
| key_npage              | knp   | Used by jED and jsh to establish what character sequence is sent by the terminal should the user press the NEXT-PAGE key. |
| key_ppage              | kpp   | Used by jED and jsh to establish what character sequence is sent by the terminal should the user press the PREVIOUS-PAGE key. |
| key_right              | kcuf1 | Used by jED and jsh to establish what character sequence is sent by the terminal should the user press the right arrow key. |
| key_sf                 | kind  | Used by jED and jsh to establish what character sequence is sent by the terminal should the user press the SCROLL-FORWARD key. |
| key_sr                 | kri   | Used by jED and jsh to establish what character sequence is sent by the terminal should the user press the SCROLL-REVERSE key. |
| key_up                 | kcuu1 | Used by jED and jsh to establish what character sequence is sent by the terminal should the user press the up arrow key. |
| lines                  | lines | Used by jBASE to determine the default depth of the terminal e.g. when the "SYSTEM(3)" function is executed). It can be over-ridden by the TERM statement or JBCTERM_DEPTH environment variable. It can also be over-ridden if the terminal is connected through a protocol that defined the terminal width, such as many PC terminal emulators connected over telnet. |
| magic_cookie_glitch    | xmc   | When you use a single function call such as @(-155) , this will build up a total of four video effects. Normally this is done by building up a string of each effect in turn. However if this binary value is set, it shows the terminal has serial attributes and so loses a character position for each effect. In our example we would not want to lose 4 positions and so we will attempt to use the 'sgr' capability instead which allows multiple video effects to be established with the loss of only a single character position. |
| parm_right_cursor      | cuf   | This may be used to do absolute column positioning such as the @(12) function call should the capability 'hpa' not be present. |
| print_screen           | mc0   | Used by the jBASE name print_screen in order to print the contents of the current screen onto any printer attached to the terminal. |
| prtr_off               | mc4   | Used by the jBASE name printer_off to stop the copying of terminal characters to any printer attached to the terminal. |
| prtr_on                | mc5   | Used by the jBASE name printer_on to begin copying of terminal characters to any printer attached to the terminal. |
| scroll_forward         | ind   | Used by the jBASE name scroll_forward to scroll the terminal screen forwards by one line. |
| scroll_reverse         | ri    | Used by the jBASE name scroll_forward to scroll the terminal screen forwards by one line. |
| set_attributes         | sgr   | Used by many jBASE names in order to set a certain video effect either on or off. |
| tab                    | ht    | Used by jED and jsh to establish what character sequence is sent by the terminal should the user press the TAB key. |
| to_status_line         | tsl   | Used by the jBASE name status_line_on to move the cursor from the current cursor position to the status line (usually line 25). |

Back to [Creating terminal definitions in jBASE](./../README.md)

<PageFooter />
