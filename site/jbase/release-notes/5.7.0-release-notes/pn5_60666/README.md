# PN5_60666

<PageHeader />

### Description

jQL: The use of LIST would cause a memory leak



### Previous Release Behavior

Using LIST would cause a memory leak. It only had to be a fairly basic LIST statement to get the process to leak memory. After looping thousands of times, it could cause the jBASE process to fall over and die due to exhaustion of memory.



### Current Release Behavior

No memory leak!
