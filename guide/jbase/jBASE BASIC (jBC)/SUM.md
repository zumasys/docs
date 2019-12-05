# SUM

Description The SUM function sums numeric elements in a dynamic array. It takes the general form: SUM(expr) Where: expr is a dynamic array. Non-numeric sub-values, values and attributes are ignored. An example of use is as:  s = CHAR (252) v = CHAR(253) a = CHAR(254) a0 = 1:s:2:v:3:a:4:s:5:v:6:a:7:s:8:v:'NINE' a1 = SUM (a0) a2 = SUM(a1) a3 = SUM(a2)  

**Created At:** 9/28/2017 2:16:30 PM  
**Updated At:** 1/5/2018 6:24:49 PM  

