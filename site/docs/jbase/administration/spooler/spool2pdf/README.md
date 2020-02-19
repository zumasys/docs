# SPOOL2PDF

**Created At:** 4/3/2018 5:06:12 PM  
**Updated At:** 3/19/2019 11:35:41 PM  
**Original Doc:** [spool-2-pdf](https://docs.jbase.com/44205-spooler/spool-2-pdf)  
**Original ID:** 306138  
**Internal:** No  

**Tags:**
<badge text='spooler' vertical='middle' />
<badge text='spooltopdf' vertical='middle' />
<badge text='pdfspooler' vertical='middle' />
<badge text='spool2pdf' vertical='middle' />
<badge text='pdf' vertical='middle' />
<badge text='jpdf' vertical='middle' />

## Document Scope

This document covers the use of the jBASE **Spool2pdf** utility and is intended to be read as a companion to the [Spooler documentation.](./..)

## Prerequisites / Installation

1. On Linux/AIX, the commands [**enscript**](http://linux.die.net/man/1/enscript) and [**ps2pdf**](http://linux.die.net/man/1/ps2pdf) are installed and available system wide via the **PATH** environment variable. Note that **ps2pdf** uses the same options as [**gs**](http://linux.die.net/man/1/gs) (Ghostscript).

    On Windows, the [**DOSPrinter**](http://www.dosprinter.net/) command is installed and visible system wide via the PATH environment variable. **DOSPrinter** is a commercial product not affiliated with jBASE.  
2. Ensure jBASE is installed, appropriately licensed, and the jBASE spooler has been created with [SP-NEWTAB](./../sp-newtab).
3. Download the [spool2pdf.zip](https://s3.amazonaws.com/helpjuice-static/helpjuice_production%2Fuploads%2Fupload%2Fimage%2F3397%2Fdirect%2F1522776828082-spool2pdf.zip) package and use the appropriate distribution for your platform. The package contains:

- **jPDF.b** – This program is the device driver that creates the PDF files from spooler output
- **ParseOptions.b**– This function is used by the jPDF driver to parse the options
- **jspform\_pdf** – This is the Form Type file for use on Linux/Unix platforms
- **jspform\_winpdf**– This is the Form Type file for use on Windows  

4. Extract the contents of **jPDF.tar.gz** (Linux/AIX) or **jPDF.zip**  (Windows):

```
gzip -d jPDF.tar.gz
tar -xvf jPDF.tar
```

(or use an application like **WinZip** or **7-zip**)  
5. Compile and catalog **jPDF.b** into a ‘bin’ directory visible system wide to the **PATH** environment variable. Compile and catalog **ParseOptions.b** into a ‘lib’ directory visible system wide to the **JBCOBJECTLIST** environment variable.  
6. If the platform is Linux or AIX then place the **jspform\_pdf** form-type file in the **$JBCRELEASEDIR/config** directory. If the platform is Windows then place the **jspform\_winpdf** form-type file in the **%JBCRELEASEDIR%\config** directory. The reason for the different form types is due to the different end-of-line characters.

## Create the Form Queue

```
SP-CREATE queue_name PROG jPDF [Options]
```

## Options

Linux/AIX:

```
jPDF -o[output directory] -q[queuename] -e[\“enscript options\”] -p[\“ps2pdf options\”]
```

Windows:

```
jPDF -o[output directory] -q[queuename] -d[DOSPrinter options]
```

Where:

- **output directory** - the full path of the base directory where the PDF files will be saved. If **output directory** is not specified then print jobs will go to **\$JBCSPOOLERDIR** or **\$JBCDATADIR/jbase\_data/jspooler**, in that order. **\$JBCDATADIR** defaults to **\$JBCRELEASEDIR**.

The full directory structure is:  **&lt;output directory&gt; / &lt;account&gt; / &lt;job number&gt;.pdf**

- **queuename**- alternative name to **formqueue**name. If not specified then this is the name of actual form queue
- **enscript options** - the entire option string must be wrapped in double-quotes and the double-quotes must be escaped. There is no limit to the order or number of options. Use the “xxx=yyyy” version where available.
- **ps2pdf options** - the entire option string must be wrapped in double-quotes and the double-quotes must be escaped (see examples under **Usage**). There is no limit to the order or number of options. Use the “xxx=yyyy” version where available.
- **DOSPrinter options** – All available options are described on the [DOSPrinter](http://www.dosprinter.net/) website. ***It is not recommended to*** wrap multiple options in quotes (see example under 'usage' ).

> ### Notes
>
> Options can be placed in any order.  
> Spaces can be used freely within the option string for clarity.  
> Each option should only be specified once, otherwise only he last one is used.  
> On Linux/AIX the work directory is **/tmp**. On Windows it is **%TEMP%** or **C:\temp**, which ever is defined first.

## Usage

After the form queue has been created, it must be assigned the required form-type using the [SP-TYPE](./../sp-type) command or option 3 on the [SP-STATUS](./../sp-status) menu.

Examples of use are as :

On Linux/AIX:

```
SP-CREATE JPDF PROG jPDF
SP-TYPE JPDF pdf
```

On Windows:

```
SP-CREATE JPDF PROG jPDF.exe
SP-TYPE JPDF winpdf
```

This example uses all of the default options and values and assumes that the **jPDF** executable is visible via **PATH**. The Unix/Linux **enscript -B** (no header) option is included by default. The Windows example uses [DOSPrinter](http://www.dosprinter.net/) to create the PDF.

```
SP-CREATE INSTRUCTIONS PROG /home/bin/jPDF –o /home/documents –q PDF –e \”--header=Hello, world! –borders --lines-per-page=42 --pass-through\”
SP-TYPE INSTRUCTIONS pdf
```

This example creates a formqueue named INSTRUCTIONS and uses the full path to the **jPDF** driver. The output-directory is; **/home/documents,** and the queuename is being overridden with the -q option, so PDFs will subsequently be stored in the **/home/documents/PDF/accountname** directory (where **accountname** is the user’s login name). Note the use of the xxxx=yyyy versions of the enscript options and that the double-quote marks have been ‘escaped’ as those are meta-characters that have special meaning to the operating system.

```
SP-CREATE TODO PROG jPDF.exe –d/CPI17 /LAND
SP-DEVICE TODO winpdf
```

This example uses **DOSPrinter** to create the PDF. The -d options set the Characters Per Inch to Condensed (17.14cpi) and the orientation to Landscape. Note that the options are not enclosed in quotes.

The jBASE [SP-DEVICE](./../sp-device) command can be used to change the original device specifications of an existing form  queue, e.g.

```
SP-DEVICE INSTRUCTIONS PROG jPDF [new options]
```

See Also: [Spooler](./../jbase-spooler).
