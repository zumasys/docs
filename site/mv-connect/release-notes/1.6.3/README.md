# MV Connect 1.6.3 Release Notes

<PageHeader />

# Patches

- MV.DEBUG rewritten to make debugging request handlers easier.
- Added ACCOUNT field to WDB.RESOURCE record to cause request to execute in different account.
- Discard NUL characters returned by the MV database in the response.
- Fixed WDB.LOG and WDB.SESSION dictionaries for Unidata compatibility.
- WREST.BP: redirect WSETHEADER when setting the Content-Type header to call WSETCONTENTTYPE. Fixed WSEND removed extra CR being appended to response.
- WOBJ: fixed several bugs, including JSON parser, LENGTH, DELETE, SET actions. Added TYPE and VERSION actions. Fixed problem with nested arrays.




# 


  
<PageFooter />
