# Creating terminal definition for jBASE

<PageHeader />

## Introduction

Normally jBASE applications are executed with the "client" being what is now called a "terminal emulator". This is changing somewhat with the use of jBASE Objects and PC clients. However a huge number of legacy applications still exist that have been written assuming a terminal as the client.

There are many different terminal types in use today and each terminal has its own characteristics. This makes it a nightmare for an application developer to create an application that works with all terminals. This problem was mostly solved on UNIX platforms by the use of a database which defined the characteristics of a range of terminals. This database is called the 'terminfo' database (It had a predecessor called the 'termcap' database, but this is obsolete and not used by jBASE).

Facilities exist under UNIX to display and create or modify these terminfo definitions. Often the terminfo definitions supplied by the UNIX system will be all that is required.

However it is often necessary for a user to modify an existing terminfo definition so that it will work with their application. Sometimes a terminfo definition needs to be created from scratch for a terminal that is not included with the UNIX system.

The terminfo database is normally a 'compiled' database. This means it exists as a binary image of the capabilities of the terminal. The use of the 'tic' command in UNIX will compile a source code definition into a binary database entry and the 'infocmp' command in UNIX will de-compile an existing binary database entry and display the equivalent source code to the terminal.

These notes show how to create or modify the UNIX terminfo database and what parts of it are used by jBASE.

[Displaying an existing terminfo definition](./display-existing-terminfo-definition/README.md) shows how to see what definitions exist and how to view them.

[Creating a new terminfo definition](./create-new-terminfo-defintion/README.md) shows how a new terminfo definition can be created.

[Modifying an existing terminfo](./modify-existing-terminfo-definition/README.md) definition shows how to modify an existing terminfo definition.

[Terminfo usage](./terminfo-usage/README.md) shows what parts of the terminfo database are used by jBASE. This gives you some idea of what you need in your terminfo definition for your application.

Back to [How To](./../README.md)

<PageFooter />
