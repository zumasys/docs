# CORS

<PageHeader />

CORS stands for Cross-origin resource sharing and what it basically means is that a develeopment server is being used and therefore the source IP for the HTML/Web page is different from where the REST endpoint is. This is typical in a development environment and will go away once you are in production.

Clients will automatically enforce a security model. Therefore, even though the client is making a POST call to HTTP://MyServer:20002/api/mvquery, for instance, the browser/node will recognize a CORS situation and will make an OPTIONS call vs the POST. Your endpoint needs to see this and respond accordingly with the allowed rules.  

Many tools now understand this and have it as an option. MVConnect/jAgent does not have this, but it is reasonably easy to implement in code.  

At the top of the mvquery routine, we would add this code (after we set our content type):

```
CALL WSETCONTENTTYPE("application/json")

CALL WSETHEADER("Access-Control-Allow-Origin","*")

* Get our request_method

CALL WGETHEADER(REQUEST.METHOD,"REQUEST_METHOD")

* Special code for CORS.  If CORS kicks in and an OPTION request is sent by the browser the following code will make this work.  
* This is a development only item.  For production you need to read the CORS documents.

IF REQUEST.METHOD = "OPTIONS" THEN
    CALL WSETHEADER("Access-Control-Headers" ,"Content-Type, Authentication" )
    CALL WSETHEADER("Access-Control-Allow-Headers" ,"Content-Type, Authentication, Cookies" )
    CALL WSETHEADER("Access-Control-Allow-Methods" ,"GET,PUT,POST,DELETE" )
    CALL WSEND("")
    STOP
END
```

## Overview of what is happening

- We set a header allowing Access-Control-Allow-Origin to anything. These are development only rules. Once you go to production these can be pulled and are not needed.
- We then get the request method and if OPTION was sent, we set additional headers. We are basically telling the client what activities, headers, etc. are allowed. These are usually good enough. If we choose to add additional headers, we would have to add them.
- We then stop.
  
The client will automatically sense a CORS situation is in play, will make an OPTIONS call to our endpoint, we respond with the proper security rules, the client will validate what the server is trying to do matches the rules and will then make the real POST/GET call if allowed.

This is a key part of how we built MVConnect.  While CORS support could now be built into the product, these rules are changing pretty regularly.  

[Here is the technical explanation from Mozilla:](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS)

Back to [What is](./../README.md)

<PageFooter />
