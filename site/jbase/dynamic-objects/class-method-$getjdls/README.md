# Class Method: $locks->getjdls()

<PageHeader />

## Description

The **\$locks->getjdls()** method will return all the locks that are held by jDLS. 

Note that this will not return any record locks held outside of jDLS, nor will it return any group locks or binary locks.

There are two optional parameters we can pass to the getjdls() method.

- Filter. If the parameter is missing, or is "", then we return ALL the known locks. However you can optionally provide the following to act as a filter.
  - A numeric value. The method only returns locks held by this port number.
  - File descriptor. An opened file descriptor will filter the returned locks to this file .

- Filename Flag. If this is set to 1, then we return the names of the files associated with the lock in the 'filename' property, which helps to identify the lock. However, this means the routine takes longer to execute.

The first way to call getjdls() is without a filter and without any file names.  

In the example below, we get all the locks and print to the screen. This is a much faster method than calling SHOW-ITEM-LOCKS:

```
    obj = new object("$lock") // Get a new object for the 'locks' class
    locks = obj->getjdls() // Return ALL the locks held by jDLS
    heading "Lock ID 1    Lock Id 2    Pid        Port       Key            Page 'PL'"
    for next_lock in locks // For each lock we return
        print next_lock->id1 "L#12 " : 
        print next_lock->id2 "L#12 " : 
        print next_lock->pid "L#10 " : 
        print next_lock->portno "L#10 " :
        print next_lock->key "L#20 " :
        print
    next next_lock
```

The next example is very similar, but we add the optional second parameter so the file name is returned:

```
    obj = new object("$lock") // Get a new object for the 'locks' class
    locks = obj->getjdls("",1) // Return ALL the locks held by jDLS and include the file name
    heading "Pid        Port       File Name            Key            Page 'PL'"
    for next_lock in locks // For each lock we return
        print next_lock->pid "L#10 " :
        print next_lock->portno "L#10 " : 
        print next_lock->filename "L#20 " : 
        print next_lock->key "L#20 " :
        print
    next next_lock
```

This example will filter the returned locks to the file name 'CUSTOMERS':

```
    obj = new object("$lock") // Get a new object for the 'locks' class
    open "CUSTOMERS" to filevar else stop 201,"CUSTOMERS"
    locks = obj->getjdls(filevar) // Return locks held by 'CUSTOMERS' only
    heading "Pid        Port       Key                               Page 'PL'"
    for next_lock in locks // For each lock we return
        print next_lock->pid "L#10 " : 
        print next_lock->portno "L#10 " : 
        print next_lock->key "L#20 " :
        print
    next next_lock
```

This final example will filter the returned locks to a specific port number (default is the port number of the calling process). 

As an extension, we also get details from a different class method and provide a little information about that user, e.g. account_name and number of files the process has open:

```
    portno = sentence(1)
    if portno eq "" then portno = system(18) // Default to our own port if none specified
    obj = new object("$lock")
    locks = obj->getjdls(portno,1) // Return ALL the locks held by port and include the file name
    obj2 = new object("$system")
    obj2->getuserinfo(portno) // Get information for user into the same 'obj2'
    userinfo = obj2->user->@portno // Return object just for that user
    print "Returning locks held by port ":portno:" , account ":userinfo->account_name:" , open files ":userinfo->open_app
    print "Pid        Port       File Name            Key"
    for next_lock in locks // For each lock we return
        print next_lock->pid "L#10 " :
        print next_lock->portno "L#10 " :
        print next_lock->filename "L#20 " :
        print next_lock->key "L#20 " :
        print
    next next_lock
```

<PageFooter />
