# PN896

<PageHeader />

## Description

New option to **jdiag** to append **config-strings** information to **jdiag.out**

## Previous Release Behavior

Currently you need to run both a **jdiag -vl** and a **config-strings > config.out** and then send 2 files to Rocket for analysis. Often the **config-strings** is forgotten.

## Current Release Behavior

A new option, **-e**, can be used with the **jdiag** command which will append the output from **config-strings**. 

Back to [5.7.9 Release Notes](./../README.md)
  
<PageFooter />
