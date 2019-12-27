# PN5_60770

**Created At:** 8/27/2018 12:53:33 PM  
**Updated At:** 10/24/2018 8:39:45 PM  
**Original Doc:** [pn5_60770](https://docs.jbase.com/48420-5-7-1-release-notes/pn5_60770)  
**Original ID:** 336216  
**Internal:** No  


### Description

Rationalise the way we set compiler options.



### Previous Release Behavior

Setting compiler options is a bit of mixed bag.



### Current Release Behavior

There are a number of options with which you can control the compiler. Some options control the operation of the compiler (including debug information), and some control the language aspect. This change rationalises the setting of options into a sane, useful and consistent manner.

The options you can set may be detailed by executing the command **jpp2 -h**. You can add 'no' to the option to negate the option.

The manner in which we decide options during compilation is now like this:

1) If the file name ends in **.jabba**, we set the jabba option and turn off case sensitivity (i.e. we become case insensitive for keywords and variables).

2) Any options in Config\_EMULATE with the 'compiler\_options = xxx' statement are processed. This was added for this change, and the Universe emulation now contains this

```
compiler_options = universe
```

See PN5\_60769 for a description of what the **universe** option gives.

3) Any options in the 'JBC\_JPP2' environment variable are now processed.

4) Any options in the source code are processed for example:

```
$option jabba,nocase
```

As an example, if you want to compile all the time without case sensitivity, this is the option you would add to Config\_EMULATE

```
compiler_options = nocase
```

You could also achieve this by setting the following environment variable:

```
export JBC_JPP2=nocase   [Unix]
set JBC_JPP2=nocase      [Windows]
```

Note that for D3 emulations, this has been added as a default option and it now replaces the defunct option **compiler\_case\_insensitive\_variables\_keywords = true**
