# QM MVConnect with WEBSVC
<PageHeader />

## MVConnect with WEBSVC

WEBSVC is a simple web server included with QM.  MVConnect on QM uses this webserver to connect into the MVConnect libraries.

## Usage

1. Log into the Account you wish to run the web server from
2. WEBSVC MVCONNECTSVR DEBUGGING PORT 8180
3. Point your browser to http://<ipofqm>:8180/api/wresttest

You should get a WRESTTEST testing page.  

Refer to the QM docs for full usage options of WEBSVC.

## Debugging/Troubleshooting WEBSVC

The DEBUGGING keyword will make WEBSVC produce debug files in the $COMO file.  If you are having issues look at this file to see what is happening.

Also verify that WRESTEST can be ran from the QM shell.

If the port is already in use you will need to resolve this conflict.  The easiest is to try a different port.

## Firewalls

If you cannot connect at all validate you do not have any firewalls involved.  If you are connecting to a remove machine try testing the connection from the local machine.  On windows this would be logging into the console and trying http://<localhost:8180/api/wresttest.  On linux you can use curl from the command line

```
# curl http://localhost:8180/api/wresttest
```

If a local test works and a remote one does not then you have a firewall running that is blocking inbound calls.  You will need to setup a exception to allow TCP traffic inbound to the port you define. If you are on windows do NOT enable security/encrypted traffic only.  

## Application Debugging

Once you have wresttest working the normal application debugging techniques desribed in the MVConnect documentation will work.  With WEBSVC you will have the additional $COMO DEBUGGING file as a option.  Please refer to the WDEBUG documentation on how to debug application issues.




<PageFooter />
