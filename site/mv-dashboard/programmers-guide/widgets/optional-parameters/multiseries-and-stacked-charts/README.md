# Optional Parameters Unique to Multiseries and Stacked Charts

<PageHeader />

| <!----> | <!----> |
| --- | --- |
| name=”String” | Determines the category name displayed on the x-axis as the data label. In our example, we've specified the category names as names of six months (in abbreviated format). |
| hoverText=”String” | Shows the abbreviated names on the x-axis (to avoid cluttering or to make the chart look more legible). However, you still have the option of showing the full name as tool tip using this attribute. Like, in our example, we're showing the abbreviated form "Jan" on our x-axis, but the full word "January" is shown as the tool tip. |
| showName=”1/0” | Can have either the value of 0 or 1. A 1 indicates that the name of this data set will be displayed in the graph, 0 indicates it won't be displayed. This attribute is particular useful when you want to show/hide names of alternate data items or say every x (th) data item. |
| seriesName=”String” D | Denotes the name of the dataset series. If you’re plotting a monthly sales analysis for the years 2004 and 2003, the seriesName for the first dataset would be 2004 and the second would be 2003. This is the value that’s shown in the legend. |
| color=”Hex Color” | Sets the color for that particular set of data. |
| showValue=”1/0” | Sets the configuration on whether the values (for this particular data set) will be shown alongside the data sets. You can set this value for individual datasets to highlight the most prominent data. |
| alpha=”0-100” | Sets the alpha (transparency) of the entire dataset.<br>You can also later specify alpha at the &lt;set&gt; level to override this value. For example,<br>&lt;dataset seriesName='Sales – 2001' color='FFF123' alpha='80' ..&gt;<br>&lt;set value='1'&gt;<br>&lt;set value='2'&gt;<br>&lt;set value='3' alpha='90'&gt;<br>&lt;/dataset&gt;<br>In the above data, the &lt;set&gt; elements with the value 1 and 2 will have an alpha of<br>80 on the graph, whereas the one containing 3 as its value will have alphas 90. |

## Dataset specific area properties (for Area Charts only)

| <!----> | <!----> |
| --- | --- |
| showAreaBorder=”1/0” | Configuration whether the border over the area would be shown or not. |
| areaBorderThickness=”NumericValue” | Sets the thickness (in pixels) of the area border. |
| areaBorderColor=”Hex Color” | Sets the color of the area border. |
| areaAlpha=”1-100” | Transparency of the area fill. |
| value=”NumericalValue” | Determines the numerical value for the set of data according to which the chart<br>would be built for the concerned set of data.<br>Example: &lt;set name='Jan' value='12345' ...&gt; |
| color=”HexCode” | Determines the color for the concerned set of data in which it would appear in the<br>graph. This value here overrides the value specified at dataset level.<br>Example: &lt;set name='Jan' value='12345' color='636363' ...&gt; |
| link=”URL”<br> | This attribute defines the hotspots in your graph. The hotspots are links over the<br>data sets. Please note that you'll need to URL Encode all the special characters<br>(like ? and &) present in the link. All the server side scripting languages provide a<br>generic function to URL Encode any string - like in ASP and ASP.NET, we've<br>Server.URLEncode(strURL) and so on.<br>Example: &lt;set … link='ShowDetails.asp%3FMonth=Jan' ...&gt;<br>To open a link in a new window, just put n- in front of the link e.g., link="nShowDetails.asp%3FMonth=Jan". |
| alpha=”Numerical Value 0-100” | Determines the transparency of a data set. The range for this attribute is 0 to 100.<br>0 means complete transparency (the data set won’t be shown on the graph) and<br>100 means opaque. This option is useful when you want to highlight a particular<br>set of data. This value here overrides the value specified at dataset level.<br>Example: &lt;set ... alpha='100' ...&gt;|

<PageFooter />
