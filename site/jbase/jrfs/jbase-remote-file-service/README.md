# jBASE Remote File Service (jRFS)

<PageHeader />

**Tags:**
<badge text='remote files' vertical='middle' />
<badge text='jrfs' vertical='middle' />

## Description  

The main purpose of jBASE Remote File Service (jRFS) is to allow files to be shared between two machines (a Client and a Server). It consists of a Server program which runs on the machine that hosts the files, and a remote JEDI which will allow the Client machine to access the files stored on the remote server. jRFS also allows jQL Statements to be run on the Host machine via the client. The benefit of this is just the results of the select will be returned over the network to the client hence reducing the network traffic between the host and the client (If using standard file sharing between host and client, the client would need to read all the contents of a file over the network to process the jQL Statement). In addition jRFS allows the execution of programs via the client on the host machine returning any output to the client.

![306074-remote-files: 1522713719604-jrfs](./1522713719604-jrfs.png)

| Topic                                                               | Description                                                                |
| --------------------------------------------------------            | -------------------------------------------- |
| [jRFS Linux Quick Start](./../jrfs-example)                         | Quick start on Linux                         |
| [Configuration Files](./../jrfs-configuration-files)                | List of configuration files|
| [Starting jRFS as a Service](./../remote-file-service)              | How to configure jRFS as a service |
| [Creating Stub Files](./../creating-stub-files)                     | Creating STUB files to point to remote files |
| [Creating Remote Pointers](./../creating-remote-pointers)           | Using SYSTEM and R MD/VOC entries to point at remote files |
| [Remote Query Options](./../jql-and-remote-files) | Performance options of where a query is run.  |
| [Access Security](./../access-security)                             | Optional Access Security |

[Back to Knowledgebase](./../../README.md)

<PageFooter />
