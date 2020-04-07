# ReZume Session Resilience

<PageHeader />

## Description

AccuTerm ReZume Session Resilience allows an AccuTerm session to resume after an interruption in the network connection between the AccuTerm workstation and the server. This feature is available beginning with AccuTerm 7 release 7.3. To use this feature, a session manager is required on the server. AccuTerm ReZume requires Secure Shell (ssh) connections to the host, and only Linux and AIX hosts are supported at this time.

## Details

**Overview**

AccuTerm ReZume Session Resilience is implemented by client (AccuTerm) and server (atsr session manager) components. When a session begins, AccuTerm creates a unique session identifier and performs a handshake with the server session manager on the server. After the handshake, the session manager on the server invokes the database session command, and the session proceeds in a normal fashion. However, if a network interruption occurs, the server session state is preserved by the session manager. When the network problem is resolved, the user clicks the "ReZume" button causing AccuTerm to reconnect and resume. The session manager attaches the new AccuTerm connection to the original session, and after performing another handshake the two sides resend any data lost during the interruption, and the session resumes from the point of the interruption.


> **Note:**
> 
> AccuTerm ReZume is a premium feature, and is only available if an AccuTerm maintenance subscription is in effect.




## Client configuration (AccuTerm)

**Connection Settings**

To enable ReZume Session Resilience for an AccuTerm session, open the settings for the session. Click on the Connection node. Ensure that the connection type is "Secure Shell". Click the "ReZume settings" button to open the ReZume settings page.

Select the “Allow session to reconnect and resume” check-box to enable ReZume. You can also specify the size of the resume buffer by selecting an entry from the dropdown, or simply entering a decimal value. The buffer is used to resend data lost during a network outage to the server when the session is resumed. The default buffer size is about 512K bytes. Any number between 0 and 1048576 is valid. Use 0 if you do not want to send any lost data to the server. For simple data entry applications, a small buffer (100 characters) is usually sufficient.

After changing any of the ReZume settings, you need to save the session configuration file (.atcf), close the session, and re-open the session. This is because an initial handshake between AccuTerm and the server is performed when the connection is first opened.

**Keepalives**

“Keepalives” are short messages that are periodically sent from AccuTerm to the server in order to prevent idle connections from timing out. We recommend using keepalives in conjunction with ReZume, as they can speed up detection of network failures, enabling the “reconnect and resume” option.

In AccuTerm, the keepalive option is in the Secure Shell settings. It is an “advanced option”, so you need to check the “show advanced options” check-box in order to access this option. Check the “send keepalives” check box and adjust the keepalive interval if necessary. A keepalive interval between 30 and 120 seconds is recommended.

**Reconnect and Resume**

If a network failure interrupts the connection for your session, it may take a short time before AccuTerm detects the failure. When the failure is detected, a connection status window will pop up in front of the session window. If the session is resumable after reconnecting, the first button in the status window will be “Reconnect and resume”. Otherwise it will be simply “Reconnect”. Clicking the “Reconnect and resume” button will reconnect to the host and log in using the same credentials used for the initial connection. If the session is still “alive” on the server, AccuTerm will resume the existing session and you can continue exactly where you left off before the interruption.



## Server configuration (Linux / AIX)

**Installation**

In order to support AccuTerm ReZume Session Resilience, a companion session manager program, ‘atsr’, must be installed on the Linux or AIX server. Also, the SSH server configuration may require minor modifications.

To install the 'atsr' session manager, download the installer [here](https://www.zumasys.com/atfiles/downloads/atsr/install-atsr-newest.bin). You can use 'wget' or 'curl' to download the installer from a Linux or AIX 'bash' prompt:

```
wget https://zdownload.blob.core.windows.net/accuterm/ReZume-Server/Linux/x64/0.1.7.0/install-atsr-0.1.7.bin
```

or

```
curl -O https://zdownload.blob.core.windows.net/accuterm/ReZume-Server/Linux/x64/0.1.7.0/install-atsr-0.1.7.bin
```

After downloading the installer, use 'chmod' to make the file executable:

```
chmod +x install-atsr-0.1.7.bin
```

Run the installer:

```
./install-atsr-0.1.7.bin
```

Confirm the license agreement, and answer the prompts for installation directory, adding ATSR\_ID to sshd\_config, restarting sshd, and timeout for orphaned sessions. Once the selections are verified, enter Y to proceed with the installation.


> **Note:**
> 
> If the 'atsr' binary is not compatible with your version of AIX or Linux, an error message will be displayed and the installation will terminate. Please contact Zumasys if this occurs.


**Profiles**

Often, a user's '.profile' (or '.bash\_profile') initiates a MultiValue database session. Adding session resilience to a '.profile' is as simple as inserting the path to the atsr 'rezumable' script at the beginning of the command line used to start the database session. The following examples show before and after versions of typical commands used to start popular MultiValue database sessions.

The examples below show simple commands, usually without arguments. However, any arguments that you include on the command line are passed along to the actual database command unchanged.

The examples assume that 'atsr' is installed in the default location; if you have installed in a different location, adjust the path to reflect your installation directory.

**d3**

change

```
d3
```

to

```
/usr/local/atsr/bin/rezumable d3
```



**jBASE**

change

```
jlogin .
```

to

```
/usr/local/atsr/bin/rezumable jlogin .
```



**QM**

change

```
/usr/qmsys/bin/qm
```

to

```
/usr/local/atsr/bin/rezumable /usr/qmsys/bin/qm
```



**Unidata**

change

```
/usr/ud81/bin/udt
```

to

```
/usr/local/atsr/bin/rezumable /usr/ud81bin/udt
```



**UniVerse**

change

```
/usr/uv/bin/uv
```

to

```
/usr/local/atsr/bin/rezumable /usr/uv/bin/uv
```


> **Note:**
> 
> Any command, not just database sessions, can be "protected" against network interruptions by using ReZume. For example, a 'bash' shell session can be protected by prefixing the 'bash' command with 'rezumable':


```
/usr/local/atsr/bin/rezumable bash
```



**SSH configuration**

AccuTerm ReZume Session Resilience requires a unique session identifier to save the session state on the server. The ID is created by AccuTerm when the session is initiated, and is sent to the server as an environment variable. Because accepting arbitrary environment variables from an SSH client is a security risk, variables that are trusted need to be enumerated in the sshd\_config file. The 'atsr' installer can update the sshd\_config file, adding this directive at the appropriate place:

```
AcceptEnv ATSR_ID
```

If you prefer, you can manually update your sshd\_config file to include the directive. After modifying sshd\_config, restart the SSH server using the appropriate command for your platform.

**Note:**


> Adding "AcceptEnv ATSR\_ID" to sshd\_config does introduce a security risk. The vulnerability described by CVE-2014-2532 involves using wildcard characters in the AcceptEnv directive.


Optionally, you may want to enable server-to-client keepalives, to cause broken SSH connections to clean up more quickly. To enable server-to-client keepalives , add (or un-comment) the following directives in sshd\_config:

```
ClientAliveInterval 30
ClientAliveCountMax 2
```



**Listing active sessions**

Use the ‘-l’ option with the ‘atsr’ command to list the active sessions. This should be executed using sudo or from root login, because permissions for session sockets are restricted to the owner (original SSH login user). Items with leading asterisk (\*) indicate active sessions. Otherwise the session is not attached to the client, and is considered orphaned.

```
cd /usr/local/atsr      
bin/atsr -l session
```



**Orphans**

It is possible for sessions being managed by the ‘atsr’ program to become orphaned. If this occurs, use the Linux/AIX ‘kill’ command to terminate the instance of ‘atsr’ that has become orphaned. This process will always have a parent PID of ‘1’. The ‘-x’ option for the ‘atsc’ command can help, by terminating orphans that have been disconnected for a specified period. If the ‘-x’ option is not used, or the specified timeout is zero, orphan cleanup is disabled. When using the 'rezumable' script, you can edit the script (/usr/local/atsr/bin/rezumable) to modify the ORPHAN\_TIMEOUT variable.



**Buffers**

The size of the synchronize buffer can be set on both sides of the connection. On the server, use the “-b” option in the 'atsr' command, and specify the desired buffer size. The default is about 256K bytes. Valid size is between 0 and 524288. This size is the maximum number of bytes that will be sent from server to client when a session is resumed, to account for data lost during the connection outage. When using the 'rezumable' script, you can edit the script (/usr/local/atsr/bin/rezumable) to add the -b option to the 'atsr' command.



## Testing

Once you have the client and server configurations finished, you should test the setup to ensure it is functioning correctly before deploying to live users. Testing is fairly simple. Open a connection from AccuTerm to the server, log in using a user that has '.profile' configured to use the 'rezumable' script to launch the database session. Once logged in, interrupt the network connection. If possible, press a key or two on the AccuTerm screen before the network outage is detected. Restore the network (disable "airplane mode"). You should see the "Reconnect and resume" button on the connection status for the session that was interrupted. Click the "Reconnect and resume" button. Your session should continue where you left off, including any keys you entered after interrupting the network, but before the disconnect was detected.

To test the synchronization in the server-to-client direction, the SLEEP command may be used. Just before interrupting the network, type "SLEEP 30" at the command prompt and press &lt;enter&gt;. Interrupt the network. Wait at least 30 seconds, then restore the network. Click "Reconnect and resume" on the AccuTerm session. You should now see the normal output from a SLEEP command, typically the TCL prompt. Since the prompt would be sent to AccuTerm after the sleep expired, and the network was disconnected at that time, the fact that you see the prompt is evidence that ReZume was able to synchronize the session state after reconnecting.

If testing from a laptop, you may be able to use "airplane mode" to interrupt the network. On a desktop, you can open "Network and Sharing Center", then click "Change adapter settings". Select the ethernet or wireless network adapter, then click the "Disable this network device" button. To restore network functionality, disable "airplane mode", or click the "Enable this network device" button. For ethernet connections, you can also interrupt the network by unplugging the network cable.



**atsr command reference**

Although you can use the 'atsr' command directly, the 'rezumable' wrapper script is provided to simplify integration in your environment.

command syntax:

```
atsr  [options]  <session_name>  <command_to_run>
```

Alternatively, if the -i option is used to specify the session name as an environment variable, the following syntax should be used:

```
atsr  [options]  <command_to_run>
```

Command line options for the atsr command:

One of the following action options must be specified:

-a          attach client to existing session (used by the resume function in AccuTerm)

-t          attach client to existing session if possible, or create a new session if session does not exist

-c          create a new session and attach client to it

-n         create a new session, with no client attached

Other options:

-i &lt;session\_env\_var&gt;      specifies the name of an environment variable containing the session name

-f          force attachment to existing session

-r          attach to session in read-only mode

-s          synchronize client & server when session resumes

-w        do not update logon information for application process

Logon information is normally stored in a Unix database called 'utmp'. It is used by some Unix commands (who am i). Also, some MV databases (jBASE) use this information to identify the client IP address for licensing purposes. This feature may not be supported by all Linux installations, and can be disabled by specifying the -w option.

-b &lt;buffer size&gt;    size of buffer for “replaying” lost data sent from server to client when session resumes

-x &lt;timeout&gt;         clean up sessions which have been orphaned (no client attached) for&lt;timeout&gt; minutes

-e &lt;detach\_key&gt;   reserved for future use

Socket directory options: atsr uses a “Unix domain socket” for each session. The socket is a file system object located in a directory. If a directory is not specified on the command line using the -g or -u option, a default directory will be created automatically.

-g &lt;socket\_dir&gt;     shared socket directory. A subdirectory private to every user will be automatically created upon first use. Permissions for the user’s subdirectory will be set for access only by the user.

-u &lt;socket\_dir&gt;     user’s socket directory. This directory must have permissions for access only by the user.

If the -g or -u option is not specified, or if the directory specified is not valid, a default directory is used. The first valid directory in the following list will be used:

-u $ATSR\_SOCKET\_DIR

-u $HOME/.atsr

-g $TMPDIR/atsr

-g /tmp/atsr

Administration:

-l [&lt;socket\_dir&gt;]              list active sessions. If &lt;socket\_dir&gt; is specified, list sessions found in that directory. Otherwise the default directory (as shown above) will be used.

Diagnostic options:

-d &lt;level&gt;           display diagnostic messages to stderr. Levels: 1 = error and status messages, 2 = session details, 3 = detailed diagnostic info. This option is only used when running a debug version of 'atsr'.

-o &lt;log\_file&gt;        specifies the name of a file to write stderr messages. Messages are appended to this file.


