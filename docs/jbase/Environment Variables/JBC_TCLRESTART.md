# JBC_TCLRESTART

**Created At:** 11/3/2017 5:14:25 PM  
**Updated At:** 8/22/2018 9:49:44 AM  

**Tags:**
<badge text='environment variables' vertical='middle' />

## Description

Enables the Command Level Restart feature.

## 


## Values

Restart Program.

## 


## Default

Command Level Restart feature disabled.

## 


## Setting

On UNIX or on Windows, the JBC\_TCLRESTART environment variable should be set before any jBASE program is invoked. The environment variable should contain the command string to execute when the user would otherwise go to a shell prompt.

To later enable the feature, use the BITSET(-2). To later disable the feature, use the BITRESET(-2).
