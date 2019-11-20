# INTRODUCTION

Once you have installed MV Connect you are ready to start developing.  MV Connect is as cross platform Web/Rest platform.  The product includes two main components

1.  Small web server that runs directly on your Pick box.  This is a non-pick program that listens for web requests and transfers that call into pick.  On jBASE since 5.6 we offer this web server built into jAgent.  On other platforms and jBASE prior to 5.6 we offer MVAppsvr which facilitates getting into Pick via the Pick executable.  Both of these front end web servers are configured a little differently.  Look [here](/36307-mv-connect/mv-connect-manual "MVConnect Documentation") for documentation on how to configure MVAppsvr while this [link](https://docs.jbase.com/30312-jagent/introduction-to-jagent "jAgent documentation") describes how to setup jAgent.
2.  Pick side library for doing web work.  These library pieces are the same for all versions of pick.  This allows you to write Web and Rest applications that can easily move to different versions of pick.

## **jBASE/jAgent**

If you are using jBASE/jAgent then MV Connect and all it's API's are available in any account you are working on.  This is because all the MV Connect API's are included with the core jBASE libraries.  There is no need to setup a account.

## **MV Connect/MVAppsver**

If you are using MV Connect with MVAppsvr then by default MV Connect installs a MVDB account and that is where your MV Connect code must run from.  You can add Q-pointers from that account to any other accounts you need access to.  MV Connect also will support LOGTO operations (see below) to allow you to switch to other accounts if needed.  This feature is dependent on the MV platform's capabilities here. In advanced setups MV Connect can be configured to run from existing accounts.

![](https://static.helpjuice.com/helpjuice_production/uploads/upload/image/3556/direct/1524595434147-MVConnect_4.2018.jpg)

# RESOURCES

This video is a quick demo on jBASE showing how to quickly get jAgent/MV Connect up and running and build out a quick sample app.  On other platforms MVAppsvr will already be running as a web server/service but the code sample will be identical.

<span class="fr-video fr-fvc fr-dvb fr-draggable" contenteditable="false" draggable="true"><iframe src="//www.youtube.com/embed/7Nu7cRn4Wc4?wmode=opaque" allowfullscreen="" frameborder="0" height="360" width="640" class="fr-draggable"></iframe></span>  

# MV Connect Rest API Library

The MV Connect Rest API library is a series of subroutines to work with the web call.  These are the normal functions you would see in other languages, such as working with headers, the body, form vars, return codes, etc.

Click [here](/36566-mv-connect-api) for MV Connect Rest API Library

# TESTING CONNECTIVITY WITH WRESTTEST

A default testing REST service is supplied called wresttest to allow you to test connectivity.  It is recommended you use POSTMAN to test your REST Functions.  POSTMAN is free and is available on Windows and Linux at this [link](https://www.getpostman.com/). 

Open up POSTMAN and enter the URL to your Server.  In the example below replace 10.10.17.205 with the IP of your server.  MV Connect is by default installed at port 8180.

![](https://static.helpjuice.com/helpjuice_production/uploads/upload/image/3397/115623/blob)

This test service grabs some information from your system and outputs it in JSON format.  Many of the functions are Unix specific, therefore if you are on a Windows machine some of the responses will be blank.

The important fields are

<table>

<tbody>

<tr>

<td>Who  
</td>

<td>What line the Connector processed the request on.    
</td>

</tr>

<tr>

<td>vars  
</td>

<td>This is a list of vars.  This will include any vars sent on the url bar plus any x-www-form-urlencoded data  
</td>

</tr>

<tr>

<td>headers  
</td>

<td>This is headers sent by the client.  The MV Connector will limit the headers sent.  If you wish to send more headers look at the MV Connector config file and add the header name.  
</td>

</tr>

<tr>

<td>body  
</td>

<td>When the post is not x-www-form-urlencoded, the raw body will be sent.  
</td>

</tr>

</tbody>

</table>

# EXAMPLE OF SENDING REST DATA

To send REST Data

Switch the action to POST

![](https://static.helpjuice.com/helpjuice_production/uploads/upload/image/3397/115625/blob)

Click on body, change data to raw, adjust output to JSON (application/JSON) and then enter your JSON into the body.

![](https://static.helpjuice.com/helpjuice_production/uploads/upload/image/3397/115626/blob)

Hit the send button and your raw JSON will now be in the body tag.  Notice also that the CONTENT_TYPE switched to application/JSON.

![](https://static.helpjuice.com/helpjuice_production/uploads/upload/image/3397/115627/blob)

You can also test sending form vars the same way.  Go back to Body and change to x-www-form-urlencoding.  You can enter a var directly into the URLbar and/or add items in the key/value area.  The URL bar will always work no matter the encoding.  The MV Connect does not support form-data encoding.

In the vars area you will see you passed variables.

![](https://static.helpjuice.com/helpjuice_production/uploads/upload/image/3397/115628/blob)

You are now ready to build your first Application.

First, log into the MVDB account.  First we will build our first "Hello World" application.

Create a BP file to create your program in. This will be platform specific.  Once you have a BP file create a program as follows

HELLOWORLD

<pre>CALL WSEND("Hello World")</pre>

Compile and Catalog your program.  By default if you are on D3 all the programs are not Flash Compiled.  Therefore do not Flash Compile this program.

We are now ready to expose this program as an API.  The WDB.RESOURCE file is where we store our API Catalog.

<pre>ED WDB.RESOURCE API*HELLOWORLD
001 P 
002 Hello World 
003 HELLOWORLD 
004  
005 1 
006 1</pre>

Now go back to POSTMAN and call your program.  Because we just spit out straight text you need to click on the RAW output button (postman by default expects JSON).

![](https://static.helpjuice.com/helpjuice_production/uploads/upload/image/3397/115632/blob)

Now lets make it interactive. Change your HELLOWORLD program as follows.

<pre>001 CALL WSETCONTENTTYPE("application/json") 
002 CALL WGETVAR(NAME,"name") 
003 JSON=\{ "response": "Hello \:NAME:\" }\ 
004 CALL WSEND(JSON)</pre>

Adjust the POSTMAN configuration as below and resend

![](https://static.helpjuice.com/helpjuice_production/uploads/upload/image/3397/115644/blob)

You have now created a simple RESTful function.  You can call this function now from any language that supports http calls.  On the top right of POSTMAN you will see a code button.  Click on that button and you can get actual code examples for different languages.

For example here is code for PHP

![](https://static.helpjuice.com/helpjuice_production/uploads/upload/image/3397/115664/blob)

# Run MV Connect in different account

While it is generally recommended to run your REST service handlers from the MVDB account, it is possible to LOGTO a different account to run the handler program. The name of the account must be configured in the [WDB.RESOURCE](wdbresource) file. In addition, the target account requires several q-pointers and cataloged programs:

<table style="width: 100%;">

<tbody>

<tr>

<td style="width: 17.5606%; vertical-align: bottom;">

WBPD

</td>

<td style="width: 82.3022%;">contains INCLUDE files, not needed at runtime  
</td>

</tr>

<tr>

<td style="width: 17.5606%;">WREST.BP  
</td>

<td style="width: 82.3022%;">catalog all items in target account  
</td>

</tr>

<tr>

<td style="width: 17.5606%;">WOBJ.BP  
</td>

<td style="width: 82.3022%;">catalog all items in target account if JSON parser needed  
</td>

</tr>

</tbody>

</table>

[](wsetcontenttype)