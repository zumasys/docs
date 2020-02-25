# Screen Settings

<PageHeader />

**Created At:** 11/15/2019 6:52:59 PM  
**Updated At:** 11/15/2019 7:32:18 PM  
**Original Doc:** [494604-accuterm-mobile-screen-settings](https://docs.zumasys.com/accutermmobile/494604-accuterm-mobile-screen-settings)  
**Original ID:** 494604  
**Internal:** No  




2

Use the Screen Settings panel to specify the size of the terminal screen, the number of screen pages, the number of history rows, the status line, and other options.

![494604-accuterm-mobile-screen-settings: 1573845191446-1573845191446](./1573845191446-1573845191446.png)





## Screen Size



There are two separate screen sizes that AccuTerm supports: normal and extended. These sizes are used to emulate the 80 and 132 column modes of the Wyse and VT terminals. AccuTerm has taken the extended and normal modes one step further: with AccuTerm you can define both the normal and extended modes to be any number of columns or rows (up to a maximum of 240). You can select which screen size is active when the session is first opened by checking the Active box for the desired size. You will probably leave these settings at their default settings of 80 columns by 24 rows for normal mode and 132 columns by 24 rows in extended mode. If you have software that supports other screen sizes, you can experiment with these settings until you find a size that you like. The number of rows may change if you change terminal emulations. The console terminal emulations use 25 rows with no status line; others use 24 rows with one or more status lines. When AccuTerm switches between the normal and extended modes, one of two things will happen: either the font will change the size to fit the visible screen, or scroll bars will be displayed if the full screen will not fit within the session window at the selected font size (see Fonts).



## Screen Size Settings




| <!----> | <!----> |
| --- | --- |
| Screen Pages: | Some of the terminals which AccuTerm emulates support multiple addressable pages. With AccuTerm, you can have up to 25 pages. |
| History Rows: | AccuTerm supports a "history" or "scrollback" buffer, which saves lines which have scrolled off of the terminal screen. To use this feature, specify how many rows (up to 10,000) are to be saved. When the history buffer has been enabled (by setting the number of rows), use the vertical scroll bar, mouse wheel, or keyboard commands to scan history. You can use CTRL+SHIFT+PGUP, CTRL+SHIFT+PGDN, CTRL+SHIFT+UP, CTRL+SHIFT+DOWN, CTRL+SHIFT+HOME, and CTRL+SHIFT+END to scan the history. |
| Status & Message Lines: | Some of the terminals that AccuTerm can emulate display status, function key labels or host messages on the top or bottom lines of the screen. Depending on the terminal emulation selected, you may be able to adjust the number of status lines to use. |


## Screen Options




| <!----> | <!----> |
| --- | --- |
| Automatic Line Wrap: | When this option is checked, automatic line-wrap is enabled. When the cursor reaches the end of a line, typing another character normally causes the cursor to move to the beginning of the next line. When this option is not set, the cursor does not move. |
| Cursor Style: | AccuTerm support |




## Attribute Effects

Since AccuTerm assigns colors to the visual attributes, some of the visual effects are not as important as they were on a real terminal. You can disable the underline effect or the blinking effect is you like. The assigned colors will still be used for those attributes, but the actual underline or blink will be disabled.

![494604-accuterm-mobile-screen-settings: 1573845463553-1573845463553](./1573845463553-1573845463553.png)




