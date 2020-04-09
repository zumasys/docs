# User Input

<PageHeader />

This feature is very similar to adding links to a widget; however, unlike the links feature, this allows the user the ability to select or specify values.

There are five types of user input available:

1. The user may fill in a text field. (W$INPUT.TYPE = "TEXT")
2. The user may fill in a password field (W$INPUT.TYPE = "PASSWORD"), which behaves the same as text field input except that the typed characters are obfuscated by dots.
3. The user may select a value from a list of predetermined values. (W$INPUT.TYPE = "SELECT")
4. The user may select a date from a date picker pop-up: (W$INPUT.TYPE = “DATE”)
5. The user may select or deselect a check box (W$INPUT.TYPE = "CHECKBOX") which sets WIDGET.USER.DATA() to "1" if selected or "0" if deselected. Note that the initial value will be "" and will not become "0" unless and until it has been deselected after being previously selected, and therefore should be evaluated as being equal to "1" or not equal to "1".


Each of the values listed below may contain multiple attributes in order to generate multiple input prompts. When the submit button is clicked, all input data values will be assigned to the prescribed WIDGET.USER.DATA element(s) prior to running the widget on the next page load. Input prompts are defined by populating the following variables:

When the user submits the form (clicks the "Go" button), the global variable G$SUBMITTED will be set to "1" when the widget subroutine is executed.


| <!----> | <!----> |
| --- | --- |
| W$INPUT.PROMPT<br> | The prompt text associated with this input<br> |
| W$INPUT.TYPE<br> | “TEXT”, “PASSWORD”, “SELECT”, “DATE” or “CHECKBOX”<br> |
| W$INPUT.SELOPTS<br> | For SELECT type, this is a value-mark-delimited list of selection options presented to the user in a drop-down list.<br> |
| W$INPUT.SELVALS<br> | For SELECT type, this is a value-mark-delimited list of values associated with the options provided. The user does not see these values.<br> |
| W$INPUT.DEFAULT<br> | The default value to be displayed to the user. For SELECT type, this should be the value data, not the option text.<br> |
| W$INPUT.UDPOS<br> | The element of the WIDGET.USER.DATA array in which the user’s input/selection will be stored.<br> |
| W$INPUT.PARAMS<br> | If specified, this string is added as an attribute to the &lt;input&gt; or &lt;select&gt; HTML tag.  Multiple attributes for a single tag must be separated by spaces (For example: W$INPUT.PARAMS&lt;1,1&gt;=\size=30 maxlength=20 style="color:white;background-color:red"\) creates a text box with a red background that is sized at 30% of the available width.  A maximum of 20 white characters are allowed.<br> |
| W$INPUT.PROMPT.PARAMS<br> | If specified, this string is used to style the prompt text specified in the W$INPUT.PROMPT string in the same way that the W$INPUT.PARAMS string is used to style the actual field itself.<br> |
| W$INPUT.BUTTON<br> | The name of the submit button. If not specified, "Go" will be used. This is only a single value – only one button is present to submit all input fields for any widget.<br> |

<PageFooter />
