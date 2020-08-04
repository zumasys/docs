POSConnect Client Self-Installation

STEP 1- Extract Installation Packet

There are a total of 2 files that are delivered to the client for
POSConnect Java Listener installation:

1.  POSConnect zip/tar file (Windows/Unix)

2.  POSConnect license file (Delivered after initial setup has been
    completed)

Extract the POSConnect zip/tar file, provided by TCS, to the POSConnect
Install Directory.

For Windows installations "only", after the zip file has been extracted
to the POSConnect Install Directory, navigate to the config directory
and double click to run the following scripts:

1\. installPOSConnect\
2. installScheduler\
3. installSweeper

Running these scripts will install the POSConnect listeners, the
scheduler, and the sweeper as separate Windows services that can be seen
and controlled from the standard Windows Services control panel.

STEP 2- Encrypt Login Credentials.

Then follow these steps to enter and encrypt the database login
credentials.

Navigate to the scripts directory:

1.  PCT.editProps

2.  Select TCSPOS.database.Password

3.  Enter your UniData Password

4.  Press RETURN to Continue\...

5.  Press RETURN again to Exit

Step 3- Validate License

Go to the POSConnect Install Directory. Then follow these steps to get
the license information:

Navigate to the scripts directory.
PCT.checkLicense (double-click PCT.license on Windows)

E-mail the output shown below

The JVM reports the following network information about your system:
\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\--\
IP Address: 123.123.123.123\
Hostname: csp.posconnect.net

Error reading existing license. Details: java.io.FileNotFoundException:
../config/POSConnect_Test.lic (No such file or directory)

Step 4- License Delivery

1.  The client will be notified with an email to download the new
    license file from the client Product Repository. Copy this file into
    the directory POSConnect Install Directory \> config.

2.  Run the PCT.checkLicense script again (double-click PCT.License on
    Windows), the license information should match similar the system
    information as shown below:

The JVM reports the following network information about your system:\
\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\--

IP Address: 123.123.123.123\
Hostname: csp.posconnect.net

License Information:\
\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\--

License application name: POSConnect\
License client name: Total Computing Solutions\
License file name: POSConnect_Test.lic\
License client IP 1: 123.123.123.123\
License client hostname 1: csp.posconnect.net\
License client IP 2: 123.123.123.123\
License client hostname 2: csp. posconnect.net\
License expiration date: Mon Dec 31 00:00:00 EST 2021
