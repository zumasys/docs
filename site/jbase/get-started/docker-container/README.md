# Docker Container How-To

<PageHeader />

## Images

These are your Templates. When you do a docker pull you are pulling a template. Think of a template as a "golden" VM image.

```bash
docker image list
```

Lists all your docker images.

```
docker pull zumasys/jbase_base
```

Pulls latest jBASE docker image.

All docker images have their original name plus a hash (internal id for the image)

```bash
docker tag 
```

This command allows you to basically have alias names for the docker 

## Example

We create a local image "jbase_base".

Later we want to push it to docker hub. We tag it as "Zumasys/jbase_base - Alias". 

To get started do:

```bash
docker pull zumasys/jbase_base
```

This will pull the default jbase image. This is a CentOS 7 image with jBASE already installed. 

```bash
docker image list
```

This will list your container, where you should see zumasys/jbase_base Containers

### Note #1

>All official Zumasys docker images can be found [here](https://hub.docker.com/u/zumasys)

## Containers

These are actual running machines, think a VM. The major difference is they are NOT designed to stay around forever. They are typically very transitory. You are supposed to boot yourself a “container” from a “image”, use git to pull in your project, do your work, git push your work and remove the container. With that being said, you can keep your container around as long as you like but you must be careful on your disk usage and how you clean up your environment.

Start a new container – This is pure test mode!!! 

```bash
docker run
```

This is how you start a new container.

Start a temporary non-named container in the foreground:

```bash
docker run –it zumasys/jbase_base bash 
[root@3ed993c28125 ~] # 
```

You are sitting in that container as root. Open a second cmd box and do:

```
docker container list
```

Here you can see all my containers.

Container ID: Actual has ID for your container 
IMAGE: What image this container was based on 
COMMAND: What command was execute when the container was started 
CREATED: When it was created 
STATUS: Status of the container 
PORTS: Any ports forwarded 
NAMES: The friendly name for the container. 

If we do NOT define one when we start the container one will be created for us. In this case our new container is called frosty_tesla. Now go back to your other window and do an exit

See, it is gone!!! This is the scariest thing about containers. Is it really gone? No. 

Do:

```
docker container list –all
```

You can see it is still there and the status was exited. The reason it shutdown was we started it in the foreground. Think of that like booting a physical PC and that window was your Console. Since we exited out of it the PC shutdown. We can restart it with:

```
docker restart frosty_tesla
```

The docker is back up and now it is running in the background. It is as if the machine was rebooted, therefore stuff that was running would be stopped but your data is still there. We can manually stop the container with:

```
docker stop frosty_tesla
```

We can remove the docker (this removes your DATA!!!):

```
docker rm frosty_tesla
```

Back to [Getting Started](./../README.md)

<PageFooter />
