# Best Practices for being Pick Like

<PageHeader />

## Introduction

There is nothing inherently wrong with keeping separate object spaces for each account.  There are a lot of good things about it and it opens many new possibilities for code distribution and control.  However, when approaching jBASE from a MultiValue bias, one needs to be aware of the flexibility and the risks of the various approaches.  If your organization wishes to keep with the "Pick" way of doing things then there are certain configuration best practices that should be followed.

## Keep Code In a Code Account

Instead of placing code into production database file accounts, create a new account just for code and move the code there. This will ensure that you know precisely where your code objects should live.

## Create O/S Groups for Developers

You should create O/S security groups for developers and then set the permissions of the source directories so that normal users cannot access the source.  Consider whether visibility of source could be desirable when debugging code as a user.  If so, then you may need to open permissions on source as needed to debug code as a normal user.  But, it is generally a bad practice to give user's permissions to read, and certainly not to write, program source code.

## Establish Compile/Catalog Policies

Review with your developers that they need to ONLY compile and catalog code from the account where the code lives, and not from other accounts unless you have taken steps to prevent duplicate objects from being created.

Back to [Organizing Program Compiled Objects](./../organizing-program-compiled-objects)

Or ..

Back to [Coding Corner](./../README.md)

  
<PageFooter />
