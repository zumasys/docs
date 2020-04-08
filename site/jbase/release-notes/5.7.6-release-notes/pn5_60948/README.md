# PN5_60948

<PageHeader />

## Description

Allow dynamic files (HASHD/JD) to support the network friendly flag

### Previous Release Behavior

Dynamic files (aka HASHD or JD files) cannot be used when mounted over a network file system such as NFS or Samba. Therefore they were excluded from having any network friendly flags, as this was meaningless.

However, the use of the **FILELOCK** statement only works on files with network friendly flags as this causes JEDI to use OS locks for item locks instead of jDLS.

So, if you used the **FILELOCK** command on a dynamic file when jDLS was running then you would get this error.

```
Error 22 during FILELOCK_ERROR to file ./jdfile
Enter I to Ignore, R to Retry , Q to Quit :
```

### Current Release Behavior

You can now create a dynamic file as a network friendly file as you can other files, e.g.

```
$ create-file myfile network=true
[ 417 ] File myfile]D created , type = JD
[ 417 ] File myfile created , type = JD

$ jchmod -t myfile
./myfile +B -C +L -M +N -S +T -R
```

You can also use **jchmod** with **+N** and **-N** to change the settings.

```
$ jchmod -N myfile
$ jchmod -t myfile
./myfile +B -C +L -M -N -S +T -R

$ jchmod +N myfile
$ jchmod -t myfile
./myfile +B -C +L -M +N -S +T -R
```

Back to [5.7.6 release Notes](../jbase-5.7.6-release-notes/README.md)
