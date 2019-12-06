# jBASE Remote File Service (jRFS)

**Created At:** 4/2/2018 9:59:09 PM  
**Updated At:** 7/8/2019 11:38:09 PM  

**Tags:**
<badge text='remote files' vertical='middle' />
<badge text='jrfs' vertical='middle' />

## Description 

The main purpose of jBASE Remote File Service (jRFS) is to allow files to be shared between two machines (a Client and a Server). It consists of a Server program which runs on the machine that hosts the files, and a remote JEDI which will allow the Client machine to access the files stored on the remote server. jRFS also allows jQL Statements to be run on the Host machine via the client. The benefit of this is just the results of the select will be returned over the network to the client hence reducing the network traffic between the host and the client (If using standard file sharing between host and client, the client would need to read all the contents of a file over the network to process the jQL Statement). In addition jRFS allows the execution of programs via the client on the host machine returning any output to the client.



![](https://static.helpjuice.com/helpjuice_production/uploads/upload/image/3397/direct/1522713719604-jrfs.png)



[Configuration Files](306076-jrfs-configuration-files)

[jQL and Remote Files](307818-untitled-question)

[Starting jRFS as a Service on Windows](307819-untitled-question)

[Creating Stub Files](307820-untitled-question)

[Creating Remote Pointers](307821-untitled-question)

[Access Security](307823-untitled-question)

[jRFS Example Configuration](307836-untitled-question)

[jRFS Quick Start](jrfs-quick-start-guide)



[Return to jBASE Files](306052-jbase-files)
