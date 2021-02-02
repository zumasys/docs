# Docker Container How-To

<PageHeader />

## Images

These are your Templates. When you do a "docker pull", you are pulling a template. Think of a template as a "golden" VM image.

Lists all your docker images:

```powershell
PS C:\WINDOWS\system32> docker image list
REPOSITORY           TAG       IMAGE ID       CREATED         SIZE
centos               7         7e6257c9f8d8   5 months ago    203MB
zumasys/jbase_base   <none>    37f9777ff8f3   12 months ago   813MB
```

Pull the latest jBASE docker image

```powershell
docker pull zumasys/jbase_base
```

All docker images have their original name plus a hash (internal id for the image)

This command allows you to basically have alias names for the docker:

```powershell
docker tag 
```

## Example

We create a local image "jbase_base".

Later we want to push it to docker hub. We tag it as "Zumasys/jbase_base - Alias".  

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

This will list your container, where you should see zumasys/jbase_base Containers

```powershell
PS C:\WINDOWS\system32> docker image list
REPOSITORY           TAG       IMAGE ID       CREATED         SIZE
zumasys/jbase_base   latest    cd79b76a11bf   4 weeks ago     1.07GB
centos               7         7e6257c9f8d8   5 months ago    203MB
zumasys/jbase_base   <none>    37f9777ff8f3   12 months ago   813MB
```

### Note #1

>All official Zumasys docker images can be found [here](https://hub.docker.com/u/zumasys)

## Containers

These are actual running machines, think of a virtual machine. The major difference is they are NOT designed to stay around forever. They are typically very transitory. You are supposed to boot yourself a “container” from a “image”, use git to pull in your project, do your work, git push your work and remove the container. With that being said, you can keep your container around as long as you like but you must be careful on your disk usage and how you clean up your environment.

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

Open a second cmd box and do:

```powershell
PS C:\WINDOWS\system32> docker container list
CONTAINER ID   IMAGE                COMMAND       CREATED         STATUS         PORTS     NAMES
6bbc2fd28069   zumasys/jbase_base   "/bin/bash"   3 minutes ago   Up 3 minutes             wonderful_leakey
```

There you can see all my containers.

CONTAINER ID: Actual Docker ID for your container.  
IMAGE: What image this container was based on.  
COMMAND: What command was execute when the container was started.  
CREATED: When it was created.  
STATUS: Status of the container.  
PORTS: Any ports forwarded.  
NAMES: The friendly name for the container.  

If we do NOT define one when we start the container one will be created for us. In this case our new container is called wonderful_leakey. Now go back to your other window and do an exit, then on the second window:

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

The docker is back up and now it is running in the background. It is as if the machine was rebooted, therefore stuff that was running would be stopped but your data is still there. We can access that contaner again with:

```powershell
PS C:\WINDOWS\system32> docker attach wonderful_leakey
[root@6bbc2fd28069 ~]#
```

We can manually stop the container with:

```powershell
PS C:\WINDOWS\system32> docker stop wonderful_leakey
wonderful_leakey
```

We can remove the docker (this removes your DATA!!!):

```powershell
PS C:\WINDOWS\system32> docker rm wonderful_leakey
wonderful_leakey
```

Back to [Getting Started](./../README.md)

<PageFooter />
