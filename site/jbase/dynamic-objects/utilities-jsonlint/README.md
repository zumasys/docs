# JSON Validator

<PageHeader />

A JSON verifier has been written.  

The syntax is simple:

```
jsonlint filename
```

In the example below, we successfully run the program against a file containing JSON:

```
$ jsonlint config/test1.json
File config/test1.json parsed okay in 0 seconds using 3,392 bytes of memory
File config/test1.json parsed okay in 0 seconds using 60,288 bytes of memory including comments
    7 objects found with 14 key/value pairs
    1 arrays found with 5 values
    339 comment blocks found
```

In the following example, an error has been introduced to the JSON string. This will show the line containing the error, and the two lines before and after the error:

```
$ jsonlint config/test1.json
000084             # and for Q-pointer resolution.
000085             {
000086 +++             "name": "JEDIFILENAME_SYSTEM", THIS IS AN ERROR
           -------------------------------------------^^^ Parsing error at line 86 , offset 44
000087                 "default": "$JBCDATADIR/SYSTEM]D"},
000088             #
```

Back to [Dynamic Objects - Overview](./../README.md)

<PageFooter />
