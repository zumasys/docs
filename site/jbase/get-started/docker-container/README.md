# Docker Container Cheat Sheet

<PageHeader />

The assumption here is that you already have Docker installed in some form on your system.

Our examples all use PowerShell and Docker Desktop for Windows, but the same commands should work just as well at the bash prompt in WSL, on Linux itself, or at the zsh in macOS.

## Images

These are your Templates. When you do a "docker pull", you are pulling a template. Think of a template as a "golden" VM image**.

List all your docker images:

```powershell
PS C:\WINDOWS\system32> docker image list
REPOSITORY           TAG       IMAGE ID       CREATED         SIZE
zumasys/jbase_base   <none>    37f9777ff8f3   12 months ago   813MB
```

Pull the latest jBASE docker image

```powershell
docker pull zumasys/jbase_base
```

All docker images have their original name plus a hash (internal id for the image)

This command allows you to define an alias name for the Docker:

```powershell
docker tag 
```

## Example

In all of these examples, your output may be different to ours.  

We create a local image "jbase_base".

Later we may want to push it to docker hub. We tag it as "Zumasys/jbase_base - Alias".  

To get started do:

```powershell
PS C:\WINDOWS\system32> docker pull zumasys/jbase_base
Using default tag: latest
latest: Pulling from zumasys/jbase_base
a02a4930cb5d: Already exists
2f7d6b22c26b: Already exists
dc16f7ccf794: Already exists
397f8fc85d60: Already exists
6e85673c8724: Already exists
424e0452a45d: Already exists
08a50f3e89e0: Already exists
6118dc413717: Already exists
12380d4de17d: Pull complete
d4ec77651ee5: Pull complete
6dc942eb556d: Pull complete
366b874ef9b2: Pull complete
e50c14a6ffd1: Pull complete
d4f06837bbbd: Pull complete
bb222abe73fb: Pull complete
Digest: sha256:f588beb91fc6c37472de69f11e929df5c2419572a0c4c09159c4fc50336b49de
Status: Downloaded newer image for zumasys/jbase_base:latest
docker.io/zumasys/jbase_base:latest
```

which pulls the default jbase image, a CentOS 7 image with jBASE already installed.  

The following will list your container, where you should see zumasys/jbase_base Containers

```powershell
PS C:\WINDOWS\system32> docker image list
REPOSITORY           TAG       IMAGE ID       CREATED         SIZE
zumasys/jbase_base   latest    cd79b76a11bf   4 weeks ago     1.07GB
```

### Note #1

>A current list of all official Zumasys Docker images can be found [here](https://hub.docker.com/u/zumasys)

## Containers

These are actual running machines, think of a virtual machine. The major difference is they are NOT designed to stay around forever. They are typically very transitory. You are supposed to boot yourself a “container” from a “image”, use git to pull in your project, do your work, git push your work and remove the container. With that being said, you can keep your container around as long as you like, but you must be careful on your disk usage and how you clean up your environment.

To start a new container you would use:

```powershell
docker run
```

This is how you start a new container, in this case a temporary non-named container in the foreground:

```powershell
PS C:\WINDOWS\system32> docker run -it zumasys/jbase_base
[root@6bbc2fd28069 ~]#
```

You are sitting in that container as root.  

Open a second PowerShell window and do:

```powershell
PS C:\WINDOWS\system32> docker container list
CONTAINER ID   IMAGE                COMMAND       CREATED         STATUS         PORTS     NAMES
6bbc2fd28069   zumasys/jbase_base   "/bin/bash"   3 minutes ago   Up 3 minutes             wonderful_leakey
```

There you can see all the containers on your system.

CONTAINER ID: Actual Docker ID for your container.  
IMAGE: What image this container was based on.  
COMMAND: What command was executed when the container was started.  
CREATED: When it was created.  
STATUS: Status of the container.  
PORTS: Any ports forwarded.  
NAMES: The friendly name for the container.  

If we do NOT define one when we start the container, a name will be created for us.  

In this case our new container is called "wonderful_leakey". Now go back to your other window and do an exit, then on the second window:

```powershell
PS C:\WINDOWS\system32> docker container list
CONTAINER ID   IMAGE     COMMAND   CREATED   STATUS    PORTS     NAMES
PS C:\WINDOWS\system32>
```

See, it is gone!!! This is the scariest thing about containers. Is it really gone? No.

Do:

```powershell
PS C:\WINDOWS\system32> docker container list -all
CONTAINER ID   IMAGE                COMMAND       CREATED         STATUS                          PORTS     NAMES
6bbc2fd28069   zumasys/jbase_base   "/bin/bash"   6 minutes ago   Exited (0) About a minute ago             wonderful_leakey
```

You can see it is still there and the status was exited. The reason it shutdown was we started it in the foreground. Think of that like booting a physical PC and that window was your Console. Since we exited out of it the PC shutdown. We can restart it with:

```powershell
docker restart wonderful_leakey
```

The docker is back up and now it is running in the background. It is as if the machine was rebooted, therefore stuff that was running would be stopped but your data is still there. We can access that container again with:

```powershell
PS C:\WINDOWS\system32> docker attach wonderful_leakey
[root@6bbc2fd28069 ~]#
```

We can manually stop the container with:

```powershell
PS C:\WINDOWS\system32> docker stop wonderful_leakey
wonderful_leakey
```

We can remove the docker (this removes your DATA too!):

```powershell
PS C:\WINDOWS\system32> docker rm wonderful_leakey
wonderful_leakey
```

## Notes

As mentioned earlier, these containers are designed to be very temporary. You can keep them around, but you must be very careful. On a physical reboot of your PC, all your running containers will shut down. The system will prune/remove non-named containers when disk space gets low. Therefore, care is needed.

Keep in mind the real purpose of a container is to boot up a small production server, load up your code/project via git, develop, git push and remove the VM. You can boot as many containers as you want. The footprint of these are VERY low:

```powershell
PS C:\WINDOWS\system32>docker stats
CONTAINER ID   NAME              CPU %     MEM USAGE / LIMIT     MEM %     NET I/O       BLOCK I/O   PIDS
5695f09ace19   dazzling_dhawan   0.00%     7.727MiB / 24.88GiB   0.03%     1.17kB / 0B   0B / 0B     1
```

Our example container now has a new name, "dazzling_dhawan".

By default your docker is booted into a private network 172.17.0.X. These Containers can NAT network out of that network but you cannot directly ping from your workstation/network into that private network. All containers inside that network can ping/talk to each other. Think of this as your own private data centre.  

## Other limitations

Systemd/systemctl stuff does not work. These are lightweight containers and are usually intended to do one thing. A full docker would usually have an init script that would run required services on the console. If, for example, you wanted a MySQL box, you would:  

a. docker pull mysql  
b. docker run -it –name “mysql” mysql  
c. You would then have a fully functional container running MySQL.  

The mysql daemon is really running on the console vs systemctl scripts.

## Access

Containers usually do NOT run telnet or ssh. You can "docker exec" and jump directly from cmd into a docker. If you need to run ssh, you must install ssh (via yum) and run ssh manually from a prompt (We will show how to do this later)

## Port forwarding

If you wish to access ports from your windows desktop you must port forward them when you launch the container. If you do not do this when you start the container you cannot change it later.

## Create a VM like setup

If you wish to have as close to a VM, here is what you do:

```powershell
PS C:\WINDOWS\system32> docker run -it -d --name jbase -p 20022:20002 -p 10022:22 zumasys/jbase_base
7d4ca225b78a4034f5f8faf0535172fc2dd282abd9f5b9ca2bceefd4424b30fc
```

### Important items  

--name  (we are naming our docker)  
-d      Run it as a daemon (background)  
-p 200022:20002  – Port forward port 20022 on our PC to port 20002 in the container.  
-p 10022:22      – Port forward port 10022 on our PC to port 22 in the container.  

20002 is where jAgent runs, by default.  

Since we may also run jAgent on our own PC, also on port 20002, we are telling port 20022 to forward to 20002 (20002 may be in use on ours).

```powershell
PS C:\WINDOWS\system32> docker container list
CONTAINER ID   IMAGE                COMMAND       CREATED         STATUS         PORTS                                             NAMES
7d4ca225b78a   zumasys/jbase_base   "/bin/bash"   4 minutes ago   Up 4 minutes   0.0.0.0:10022->22/tcp, 0.0.0.0:20022->20002/tcp   jbase
```

Now jump into the container.  

```powershell
PS C:\WINDOWS\system32> docker exec -it jbase bash
[root@7d4ca225b78a ~]#
```

If you would like work with REST, you can log onto the default account and start jAgent:

```powershell
[root@7d4ca225b78a ~]# jb JBASEADM

jsh JBASEADM ~ -->make-demo-file
Enter <X> at any prompt to eXit.

How many records to create: 1000
Filename: DEMOFILE
File Type (JD=Dynamic=default, JP=jPlus, J4, UD=Directory, X=Exit):
[ 417 ] File DEMOFILE]D created , type = JD
[ 417 ] File DEMOFILE created , type = JD

1,000 records created.
jsh JBASEADM ~ -->jbase_agent --config=
(45|140004913489728) NOTICE starting up jAgent, Process Per Connection mode, listening on port 20002, SocketAcceptor.h +63
(45|140004913489728) NOTICE Configured using config file located in [/opt/jbase/CurrentVersion/config/jagent_config], SocketAcceptor.h +70
```

At this point we have created some sample data and launched jAgent.  

Open up your browser and navigate to <http://localhost:20022/api/wresttest>  

You will see this hit jAgent in your Docker

```powershell
(47|140583899756352) NOTICE RequestHandlerService::open: connected with 172.17.0.1, RequestHandlerService.cpp +244
(49|140288625264448) NOTICE RequestHandlerService::open: connected with 172.17.0.1, RequestHandlerService.cpp +244
(47|140583899756352) NOTICE Shutting down Connection, JAgentSocketServer.cpp +118
(49|140288625264448) NOTICE No resource defined for path /favicon.ico, HTTPAction.cpp +276
(49|140288625264448) NOTICE Shutting down Connection, JAgentSocketServer.cpp +118
```

and you should see something like this in your browser:

```json
{"RestVersion":"1.1", "Who":"2 ", "pwd":"\/opt\/jbase\/JBASEADM", "wresttest": [ "File path:                \/opt\/jbase\/JBASEADM\/MD]D","File path:                \/opt\/jbase\/JBASEADM","File path:                .","Subroutine object:        main()","Subroutine object:        \/opt\/jbase\/CurrentVersion\/lib\/libjsub.so","Subroutine object:        \/opt\/jbase\/CurrentVersion\/lib\/libclasses.so","Subroutine object:        \/opt\/jbase\/CurrentVersion\/lib\/libjee.so","Subroutine object:        \/opt\/jbase\/CurrentVersion\/lib\/libjrest.so","Subroutine object:        \/opt\/jbase\/CurrentVersion\/lib\/libjcon.so","Subroutine object:        \/opt\/jbase\/CurrentVersion\/lib\/libSQLSYS.so","Subroutine object:        \/opt\/jbase\/CurrentVersion\/lib\/libjbaseutil.so","Subroutine object:        \/opt\/jbase\/CurrentVersion\/lib\/libjwobj.so","Execute path:             \/opt\/jbase\/JBASEADM\/MD]D","Execute path:             \/opt\/jbase\/JBASEADM\/bin","Execute path: (DUP!!)     \/opt\/jbase\/JBASEADM\/bin","Execute path:             \/opt\/jbase\/CurrentVersion\/bin","Execute path: (DUP!!)     \/opt\/jbase\/CurrentVersion\/bin","Execute path:             \/usr\/local\/sbin","Execute path:             \/usr\/local\/bin","Execute path:             \/usr\/sbin","Execute path:             \/usr\/bin","Execute path:             \/sbin","Execute path:             \/bin","Executable:               \/opt\/jbase\/CurrentVersion\/bin\/WRESTTEST","Shared Object: (DUP!!)    \/opt\/jbase\/CurrentVersion\/bin\/WRESTTEST.so"], "vars": {}, "cookies": {}, "headers": {"REMOTE_ADDR":"172.17.0.1", "REMOTE_HOST":"172.17.0.1", "PROTOCOL_VERSION":"HTTP\/1.1", "REQUEST_METHOD":"GET", "PATH_INFO":"\/api\/wresttest", "SERVER_PORT":"20002", "HTTP_ACCEPT":"text\/html,application\/xhtml+xml,application\/xml;q=0.9,image\/webp,image\/apng,*\/*;q=0.8,application\/signed-exchange;v=b3;q=0.9", "HTTP_ACCEPT_ENCODING":"gzip, deflate, br", "HTTP_ACCEPT_LANGUAGE":"en-US,en;q=0.9", "HTTP_CONNECTION":"keep-alive", "HTTP_HOST":"localhost:20022", "HTTP_SEC_FETCH_DEST":"document", "HTTP_SEC_FETCH_MODE":"navigate", "HTTP_SEC_FETCH_SITE":"none", "HTTP_SEC_FETCH_USER":"?1", "HTTP_UPGRADE_INSECURE_REQUESTS":"1", "HTTP_USER_AGENT":"Mozilla\/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit\/537.36 (KHTML, like Gecko) Chrome\/88.0.4324.96 Safari\/537.36 Edg\/88.0.705.56"}, "body":"", "status":"ok", "statusmsg":""}
```

Because this is a named VM, it will never be purged without you doing that manually. This means you can continue to use it.  

To start your container forwarding 10022 to 22 (-p 10022:22), inside your docker, perform the following steps:

```bash
yum install openssh-server  
/usr/bin/ssh-keygen -A   
/usr/sbin/sshd -f /etc/ssh/sshd_config  
passwd root (create password for root)  
# Alternatively
passwd jbaseadm (create password for jbaseadm)
```

You should then be able to connect via ssh (from WSL, for instance):

```bash
zumasys@DESKTOP-8KMHUNK:~$ssh root@localhost -p 10022
The authenticity of host '[localhost]:10022 ([127.0.0.1]:10022)' can't be established.
ECDSA key fingerprint is SHA256:WwPkUoVIlvVgsWyjvYk7GMhrWTZvds8QDgNSuNFdnnc.
Are you sure you want to continue connecting (yes/no/[fingerprint])? yes
Warning: Permanently added '[localhost]:10022' (ECDSA) to the list of known hosts.
root@localhost's password:
-bash-4.2# jb
Account name or path: JBASEADM
jsh JBASEADM ~ -->

```

** A golden image is a template for a virtual machine (VM), virtual desktop, server or hard disk drive. A golden image may also be referred to as a clone image, master image or base image.

Back to [Getting Started](./../README.md)

<PageFooter />
