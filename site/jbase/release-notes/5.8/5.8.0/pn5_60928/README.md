# PN5_60928

<PageHeader />

## Description

Simplify the restore options for use with jrestore

## Previous Release Behavior

When selectively restoring a file from a backup created with jbackup, the options required could be confusing. More-so was the problem when you didn't know if the file you were restoring was a hashed file or directory/folder or some other file type.

## Current Release Behavior

The -Z "FileExpression" option simplifies the selective restore of file name.

The -Z option is followed by a regular expression which defines the file to be restored. This option replaces the -u , -h , -d , -o and -l option all into a single option, and removes some of the anomalies. You cannot use these options in conjunction with -Z.

Below is an example of restoring a single file called BP from account OWL. It doesn't matter if BP is a hashed file, a directory/folder, a linked file, whatever -- it gets restored!

```bash
$ jrestore -f /tmp/backup10 -Z "^./OWL/BP/*"  -O -v 

Label = Tue Oct 29 19:19:10 2019
Format = 2, Reel = 1, Blocksize = 16384

Native directory ./OWL/BP
Native file ./OWL/BP/.jbase_header
Native file ./OWL/BP/HelloWorld
Native file ./OWL/BP/$HelloWorld
Native directory ./OWL/BP]D
Native file ./OWL/BP]D/.jbase_header

Scanned Files  : 22
        Blocks : 6
        Reels  : 1

Restored Directories   : 2
         Regular files : 4
         Linked  files : 0
         Other   files : 0
         Hash    files : 0
         Hash  records : 0
         Control files : 0

0.0938 MB processed
```

The -Z option is unique amongst the options it replaces in that you can have more than one occurrence of it on the command line.  

In the following example we restore the BP and the bin file from the 'OWL' account:

```bash
$ jrestore -f /tmp/backup10 -Z "^./OWL/BP/*"  -O -v  -Z"^./OWL/bin/*"

Label = Tue Oct 29 19:19:10 2019
Format = 2, Reel = 1, Blocksize = 16384

Native directory ./OWL/BP
Native file ./OWL/BP/.jbase_header
Native file ./OWL/BP/HelloWorld
Native file ./OWL/BP/$HelloWorld
Native directory ./OWL/bin
Native file ./OWL/bin/HelloWorld.so
Native file ./OWL/bin/HelloWorld
Native file ./OWL/bin/HelloWorld.so.el
Native directory ./OWL/BP]D
Native file ./OWL/BP]D/.jbase_header

Scanned Files  : 22
        Blocks : 6
        Reels  : 1

Restored Directories   : 3
         Regular files : 7
         Linked  files : 0
         Other   files : 0
         Hash    files : 0
         Hash  records : 0
         Control files : 0

0.0938 MB processed
```

Back to [5.8.0 Release Notes](./../README.md)

<PageFooter />
