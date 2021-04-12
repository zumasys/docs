# Adoption Import File Specification

<PageHeader />

## Format Layouts for Various Import/Export Files (Banner, Course Adoption, etc.)

From Campus to TCS:

File Name: Adpt-Imp.txt File Type: DOS ASCII Text – Tab Delimited Line Terminator: Carriage Return/Line Feed \[decimal 13:10\]

There is one line per adoption. If there is more than one book per adoption, you must provide a new line for each with the department, course, and section duplicated.

The fields with an “**\***” in the front are required.

If you are exporting for use with the on-line faculty adoptions then you also need fields 5 (Instructor) and 18 (Instructor Email).

If you are only reporting Actual Enrollment then fields 1, 2, 3, and 19 are required.

The fields MUST be provided in the order listed. This means that if position 8, Required (Y/N), is going to be imported then positions 5-7 must be populated or entered as an empty position. An empty position in Excel would display as an empty column. An empty position in text format would be denoted with an empty tab delimiter. \*1. Department \*2. Course \*3. Section \*4. Estimated Enrollment 5. Instructor 6. ISBN-13 7. Quantity to Cover <-- required if importing ISBN 8. Required (Y/N) 9. Course Description 10. Author <-- required if importing ISBN 11. Title <-- required if importing ISBN 12. Edition 13. Copyright Year 14. New Price 15. Used Price 16. QOH New 17. QOH Used 18. Instructor Email 19. Actual Enrollment 20. Class Number 21. Store Number 22. Reserved for admin system

**A/R Customer File Export to TCS**

From Campus to TCS: File Name: BKSTCHRG\_yyyymmdd\_hhmnss.TXT File Type: DOS ASCII Text Line Terminator: Carriage Return/Line Feed \[decimal 13:10\] Line Layout as follows:

This file can either be fixed column as shown below or Tab delimited in the order below. The Customer must indicate their preference when the interface is initially configured.

Columns:

<table style="border-collapse: collapse; width: 100%;" border="1"><tbody><tr style="height: 66px;"><td style="width: 50%; height: 66px;">1 - 10</td><td style="width: 50%; height: 66px;">Customer Identification Number&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Up to 10 numeric characters left justified - space filled</td></tr><tr style="height: 94px;"><td style="width: 50%; height: 94px;">11 - 40</td><td style="width: 50%; height: 94px;">Customer Name Up to 30 alpha characters left justified - space filled (Last name, First name)</td></tr><tr style="height: 150px;"><td style="width: 50%; height: 150px;">41 - 50</td><td style="width: 50%; height: 150px;">Credit limit dollar amount 10 numeric characters right justified - space filled No decimal (2 point assumed) Remit ‘9999999999’ if Credit Limit is NOT Limited Remit ‘0’ (zero) if Credit Limit is NONE</td></tr><tr style="height: 178px;"><td style="width: 50%; height: 178px;">51 - 65</td><td style="width: 50%; height: 178px;">Customer type/termyear (e.g. PELLGRNT/201310) Customer type is limited to 8 alpha numeric characters Termyear is limited to ‘/’ and 6 alpha numeric characters These two fields should be concatenated and then left justified in 15 characters - space filled.</td></tr><tr style="height: 106px;"><td style="width: 50%; height: 106px;">66 - 100</td><td style="width: 50%; height: 106px;">E-mail address (optional) Up to 35 characters left justified - space filled</td></tr><tr style="height: 134px;"><td style="width: 50%; height: 134px;">101 - 110</td><td style="width: 50%; height: 134px;">Expiration Date (optional) Up to 10 characters left justified - space filled Format: mmddyy or mm/dd/yy or mm/dd/yyyy</td></tr></tbody></table>

**A/R Customer File Export to Campus**

From TCS to Campus:

File Name: BKSTINVO\_yyyymmdd\_hhmnss.TXT File Type: DOS ASCII Text Line Terminator: Carriage return/line feed \[decimal 13:10\]

Line layout as follows: This file can either be fixed column as shown below or Tab delimited in the order below. The Customer must indicate their preference when the interface is initially configured.

Columns

<table style="border-collapse: collapse; width: 100%;" border="1"><tbody><tr><td style="width: 50%;">1 - 10</td><td style="width: 50%;">Customer Identification Number Up to 10 numeric characters left justified - space filled</td></tr><tr><td style="width: 50%;">11 - 40</td><td style="width: 50%;">Customer Name Up to 30 alpha characters left justified - space filled (Last name, First name)</td></tr><tr><td style="width: 50%;">41 - 55</td><td style="width: 50%;">Customer type/termyear (e.g. PELLGRNT/201310) Up to 15 alpha numeric characters left justified – space filled This field is same as what is sent in the BKSTCHRG file. (Customer type is limited to 8 alpha numeric characters Termyear is limited to ‘/’ and 6 alpha numeric characters These two fields should be concatenated and then left justified in 15 characters - space filled.)</td></tr><tr><td style="width: 50%;">56 - 65</td><td style="width: 50%;">Transaction Reference Up to 10 numeric characters 5 digit register number + 5 digit receipt number</td></tr><tr><td style="width: 50%;">66 - 75</td><td style="width: 50%;">Transaction amount 10 numeric characters right justified – space filled Positive value&nbsp;&nbsp;&nbsp;&nbsp; (e.g. ‘<u>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 1423</u>’ = $14.23 charge) Negative value &nbsp;&nbsp; (e.g. ‘<u>&nbsp;&nbsp;&nbsp;&nbsp; </u><u>-</u><u>1423</u>’ = $14.23 credit)</td></tr><tr><td style="width: 50%;">76 - 83</td><td style="width: 50%;">Transaction date 8 numeric characters YYYYMMDD format (e.g.&nbsp; 20130620 = June 20, 2013)</td></tr></tbody></table>

<PageFooter />
