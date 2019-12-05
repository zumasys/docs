# JCL F -CLEAR

Description  The F-CLEAR command clears the specified file buffer. It takes the general form:  F-CLEAR file-buffer or F-C file-buffer where file-buffer is the number (1 to 9) of the file buffer to be cleared.   Note:  This command is equivalent to using the MV file-buffer.0 ",_ command   EXAMPLE 001 PQN 002 F-C 1 003 MV &amp;1.0 "Key", "Field 1" Cle  

**Created At:** 5/28/2018 10:25:06 AM  
**Updated At:** 6/11/2018 4:21:49 AM  

**Tags:**
<badge text='file' vertical='middle' />
<badge text='buffer' vertical='middle' />
<badge text='jcl' vertical='middle' />
