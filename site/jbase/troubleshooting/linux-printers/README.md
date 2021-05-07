# Linux printers and jBASE

<PageHeader />

<iframe width="640" height="360" src="https://www.youtube.com/embed/VA71g5a8cF0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## What to do when a printer does not work

Firstly, jBASE printer definitions are usually either a path to a Linux printer, a script or command and as such are seldom the actual problem.  It is best to start checking a jBASE printer by investigating the underlying Linux process first.  

Remember, jBASE printers are actually just sending the print output to the Linux command via stdin.

## Step 1…  Is the underlying Linux process working?

This can be tested by piping text to the Linux command

 For example, if we have the following pronter defined:

```
OFFICELASER created by SP-CREATE OFFICELASER PROG lp -d laser1
```

we can send text to that device as follows:

```bash  
$ echo This is a test | lp -d laser1
```

at which point, it should be possible to see that text on the laser1 device.

If the text does not print then the jBASE printer is not the problem, the underlying Linux printer is the problem.

```bash
$ lpstat -t | grep laser1
    device for laser1: socket://laser1:9100
    laser1 accepting requests since Tue 31 Jul 2018 09:51:55 AM EDT
    printer laser1 is idle.  enabled since Tue 31 Jul 2018 09:51:55 AM EDT
    laser1-219              jbaseadm           2048   Tue 31 Jul 2018 09:35:54 AM EDT
```

The device is a socket to laser1, port 9100.  

Is laser1 a valid entry in DNS or /etc/hosts, is the network down?  

Use ping to see if the address responds:

```bash
$ ping laser1
            PING -c1 -W 1 laser1 (192.168.0.90) 56(84) bytes of data.
            64 bytes from tpahp8150 (192.168.0.90): icmp_seq=1 ttl=62 time=73.2 ms

```

If ping responds with “ping: laser1: Name or service not known”, check that the DNS or /etc/hosts item is correct.  
If ping responds with “1 packets transmitted, 0 received, 100% packet loss, time 0ms”, check the network.  
Is port 9100 open on that IP address?  Use netcat (nc/ncat) to see if that port accepts input:

```bash
$ nc -w 100ms 192.168.0.90 9100 < /dev/null ;echo $?
0   <-- zero is good, any other value would indicate an error

```

Is laser1 accepting requests?  
If not, change cups to have the printer accept jobs:

```bash
# cupsaccept laser1
```

Is laser1 enabled?  
If not, have cups enable the printer:

```bash
# cupsenable laser1
```

Is the print job listed?  
If not, restart the cups service:

```bash
# systemctl restart cups
```

## Step 2… The underlying process works.   It is a jBASE problem

```
LISTPTR    
PRINTER ASSIGNMENTS                        23:17:30  07 AUG 2018

PRINTER    -----   FORMQ   -----   PAGE  STATUS         DEVICE
TYPE       #  NAME                 SKIP

PROG        0 F0                      0  ASSIGNED       /dbms/scripts/dopdf
PROG        1 F1                      0  I/O error      /dbms/scripts/dopdf
PROG        3 F3                      0  KILLED         /dbms/scripts/dopdf
PROG        4 F4                      0  ASSIGNED       /dbms/scripts/dopdf 
```

If any printer shows a status of "KILLED" or "I/O Error", an SP-RESUME may fix it, i.e.:

```
SP-RESUME F1
```

If this doesn’t fix it, you may need to shutdown and then restart the jBASE spooler.  
If you are going to do this, it is best to make sure no users are currently printing or it may cut their print job short.  

```
SP-SHUTDOWN
```

and answer Y then 30 seconds later when it returns to jsh type:

```
REST-SPOOLER 
```

to restart.

Back to [Troubleshooting](./../README.md)

<PageFooter />
