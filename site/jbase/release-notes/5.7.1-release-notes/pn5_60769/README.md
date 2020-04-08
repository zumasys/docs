# PN5_60769

<PageHeader />

## Description

jBC: Add support for the **STOPM** and **STOPE** commands

### Previous Release Behavior

These commands were not supported .

### Current Release Behavior

The commands are now supported.

You must enable the commands in the compiler before they can be accepted. This is by setting the 'universe' option in the compiler. For example

```
export JBC_JPP2=universe   [Unix]
set JBC_JPP2=universe      [Windows]
```

Another way is to set the default compiler options in Config\_EMULATE, for example add this to your emulation

```
compiler_options = universe
```

This patch has now added this option as a default for Universe emulations, so to enable **STOPM** and **STOPE** while running in Universe you need do nothing. If you want these Universe emulations in other emulation types, you can use one of the above mechanisms.

See PN5\_60770 for more details on setting compiler options.

The syntax is similar to Universe, e.g.

```
STOPM {Expression { , Expression { , Expression ...}}
   or
STOPE {Expression { , Expression { , Expression ...}}
```

On Universe it only supports a single 'Expression' , but jBASE supports multiple 'Expression' separated by a comma.

The **STOPM** statement uses the STOPM item in the jBASE error message file &lt;JBASEDIRECTORY&gt;/jbcmessages , and it looks like this

```
fbcentos-~: ED $JBCRELEASEDIR/jbcmessages STOPM
STOPM
TOP
.p
TOP
001 %s %s %s %s %s %s %s %s
BOTTOM
```

So you can configure the message for **STOPM** as you wish, as well as all the other options that can be used. By default we simply print up to 8 'Expression' statements.

The **STOPE** statement simply uses a message in the jbcmessages file whose item id is the first 'Expression', so in fact it operates exactly the same as **STOP**

Back to [5.7.1 Release Notes](./../README.md)
