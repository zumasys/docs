# File Definitions

**Created At:** 6/25/2018 1:02:00 PM  
**Updated At:** 7/13/2018 10:20:28 AM  


## Description

File definition records contain information that is used when formatting reports. For example, should the key field of a file be left or right justified, and how wide a column should it occupy. You can also define sublist codes to tell the system that a particular field is multivalued.

This section starts with a review of file definition records and discusses how the content of these records can affect the output from jQL commands - particularly with reference to sublists.



## Record Structure 

The fields of a file definition record that affect jQL reports are:


| Field 7<br> | Conversion code for key, if required. For date, time, etc.<br> |
| --- | --- |
| Field 8<br> | V code to notify a multivalued (sublist) field, if required. See [Sublists - V Code](324522-sublists-v-code).<br> |
| Field 9<br> | Justification for key. Can be one of the following (see [Data Definition Records](324525-data-definition-records)):<br><br>| L | Left justified |<br>| R | Right justified |<br>| T | Text |<br>| U | Unlimited |<br><br> |
| Field 10<br> | Column width for key. Default is 14 characters. Also see JBCIDLEN.<br> |




Back to [jBASE Query Language (JQL)](jbase-query-language-jql-)



### 

