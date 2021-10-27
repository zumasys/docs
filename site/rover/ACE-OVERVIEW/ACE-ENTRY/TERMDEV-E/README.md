##  Terminal Device Definition (TERMDEV.E)

<PageHeader />

**Form Details**  
[ General ](TERMDEV-E-1/README.md)   
[ Mono Video ](TERMDEV-E-2/README.md)   
[ Color ](TERMDEV-E-3/README.md)   
[ Graphics ](TERMDEV-E-4/README.md)   
[ Keyboard ](TERMDEV-E-5/README.md)   

**Purpose**  
TERMDEV.E maintains the information used by the system to support various
terminal types. The ASCII character sequences that are used by various
terminals to display video, color and line graphics are different from one
manufacturer to another. The sequence of characters transmitted to the host
when function and navigation keys are pressed also varies. TERMDEV.E provides
a way of defining these codes in a consistent manner so that the application
program can be wriiten using one set of instructions that will produce the
desired result on many different types of terminals.  
  
One of the records defined in this file is called WINDOWS. This record is
associated with the M3 client program and should not be altered.

**Frequency of Use**  
Anytime a new terminal type needs to be introduced to the system.

**Prerequisites**  
Setup of the TERM.CONTROL record.

<badge text= "Version 8.10.57" vertical="middle" />

<PageFooter />