POSConnect Client Installation Package Preparation

1.  Please use an SSH program to connect to the server

ssh csp.posconnect.net

user: pssdev

pass: xxxx

2.  Browse to the path:\
    /home/pssdev/PSS_services/dev/src/POSConnect/scripts/install

3.  Run;

'./installPOSConnect.win' script for Windows servers

'./installPOSConnect.unix' script for Unix servers

4.  Windows package

./installPOSConnect.win /home/userhomefolder

POSConnect system environment and path configuration for Windows

Please use slashes (/) instead of backslashes (\\) in all paths

Please specify whether the Java Virtual Machine (JVM) in the target

environment is 32-bit or 64-bit

1\. 32-bit

2\. 64-bit

5.  Choose 2 for 64bit package creation

6.  Enter necessary fields

Please enter the path to Java Virtual Machine, which is where the java
executable (java.exe) is located.

Current value: c:/Program Files/Java/jre6/bin

pathname with backslash

Please enter the path to Java Client Home, which is where the jvm.dll
file is located.

Current value: c:/Program Files/Java/jre6/bin/client

pathname with backslash

Please enter the installation directory for the POSConnect Listener.

Current value: C:/datatel/services/POSConnect/test

pathname with backslash

Please select how many instances of listeners are required, don\'t
forget to include the background listener.

Valid values are 2-99.

Current value: 1

1

7.  Check pathnames and verify with Y

POSConnect environment and path configuration

JVM architecture: 64-bit

Path to Java executable: pathname with backslash

Path to Java Virtual Machine (jvm.dll): pathname with backslash

Installation base directory (service home): pathname with backslash

Listener count: 1

Are these parameters correct? (y/n)

8.  Enter necessary information

POSConnect instance configuration

Please use slashes (/) instead of backslashes (\\) in all paths

Please enter the username to connect to the Unidata DB

Current value: None

username

Please enter the IP to connect to the Unidata DB

Current value: 127.0.0.1

ip of the server

Please enter the port to connect to the Unidata DB

Current value: 31438

port

Please enter the DB account path

Current value: none

pathname with backslash

Please enter value for DB connection persistence

Current value: false

true

Please enter the first listener\'s port number

Current value: 57401

port for listener

Please enter the port increment

Each subsequent listener will add this value to the previous listener
port number

Current value: 1

1

Please enter the the timeout value for all listeners

Current value: 120

120

Please enter the name of the license file that the listeners will use

Current value: POSConnect.lic

POSConnect_X11Live.lic

9.  Check the parameters and approve with Y

POSConnect listener configuration

DB username: username

DB account path: pathname with backslash

DB connection persistence: true

Listener starting port: port for listener

Listener port increment: 1

Listener timeout: 120

License file: POSConnect_X11Live.lic

Proceed with install? (y/n)

Y

10. Go to /home/userhomefolder and locate POSConnect.zip file and share
    it with the client.
