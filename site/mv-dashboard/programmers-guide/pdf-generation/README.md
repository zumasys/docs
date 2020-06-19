# PDF Generation

<PageHeader />

MV Dashboard can be configured to generate PDF versions of most widgets. An external PDF conversion utility is used to transform widget HTML into a PDF file, which is then sent to the user's browser for display or saving.

In order to use the PDF feature, an appropriate HTML to PDF conversion utility must be installed on the same server as MV Dashboard. The converter must be accept a command line containing the input and output file names and must run without any prompting. Zumasys has tested and recommends the open-source 'wkhtmltopdf' conversion program for use with MV Dashboard.

The PDF Configuration widget is available from the Administrator dashboard. Specify the following items, then click the Save button.

- Enable PDF Generation - set this to "yes" to enable MV Dashboard widgets to generate PDF files. Note: the widget subroutine must set W$PDFABLE=1 to enable this feature. When PDF generation is enabled here (Administrator dashboard), and in the widget subroutine, a PDF icon is added to the widget toolbar. Clicking the icon invokes the PDF converter command, and if successful, sends the generated PDF file to the user's browser.
- PDF Converter Command – enter the actual command line to invoke the PDF converter. This should include the full path to the converter executable file, any required command line options, and tokens for the input file and output file. The tokens are [INPUT\_FILE] and [OUTPUT\_FILE]. Note that for some Windows MultiValue platforms, the command line may require "cmd.exe /c" before the actual converter command.
- Directory for PDF files – enter the full path of a directory that will contain the generated PDF files. During PDF generation, the source HTML is also temporarily written to this directory. For MultiValue platforms which support directory-type files, this file would be the path to the directory for the NATIVE.CONTENT file in the MVDB account. For other platforms, it can be any valid directory path.
- Delete PDF files after - select the number of days before PDF files will be automatically deleted. If you select "immediately" for this setting, the PDF files will be deleted 30 to 90 minutes after generation.

When PDF generation is enabled and the Save button is clicked, the PDF Configuration widget will attempt to create the directory for PDF files automatically.

For MultiValue platforms which support directory-type files (jBASE, QM, Unidata, Universe), the dictionary of the NATIVE.CONTENT file will be created as a normal hashed file in the MVDB account, and the data section of the NATIVE.CONTENT file will be created as a directory file.

For other MV platforms (D3), the directory specified in the PDF configuration will be created (if possible). The dictionary of the NATIVE.CONTENT file will be created as a normal hashed file in the MVDB account, and the data section of NATIVE.CONTENT will be an OSFI Q-pointer to the specified directory.

## wkhtmltopdf

Zumasys has tested MV Dashboard with the open-source wkhtmltopdf package. While you are free to use other conversion programs with MV Dashboard, wkhtmltopdf is the only program which has been tested. The PDF Configuration widget will supply default values for the converter command based on the default installation of wkhtmltopdf. If you install wkhtmltopdf in another location be sure to adjust the path in the converter command line.

## wkhtmltopdf Installation (Windows)

Download the 32 bit installation package for wkhtmltopdf from: <http://download.gna.org/wkhtmltopdf/0.12/0.12.3/wkhtmltox- 0.12.3\_msvc2013-win32.exe>.
 
 Install in the default location of C:\Program Files (x86)\wkhtmltopdf.

wkhtmltopdf Installation (Linux)

The Linux version of wkhtmltopdf requires the X.org 75dpi fonts package to be installed before installing wkhtmltopdf. If your Linux installation does not have this package installed, please download and install it before installing wkhtmltopdf.

```bash
yum -y install xorg-x11-fonts-75dpi
```

Then download the appropriate version of wkhtmltopdf based on your platform. Zumasys recommends installing the 0.12.2.1 version of wkhtmltopdf. While not the latest version, it is available as an rpm package. Download wkhtmltopdf from download.gna.org/wkhtmltopdf. For example, to download the 64 bit Centos6 version of wkhtmltopdf, use this commad:

```bash
wget http://download.gna.org/wkhtmltopdf/0.12/0.12.2.1/wkhtmltox-0.12.2.1_linuxcentos6-amd64.rpm 
```

Install using:

```bash
rpm -Uvh wkhtmltox-0.12.2.1_linux-centos6-amd64.rpm 
```

Substitute the actual filename in the above command line. The PDF Configuration widget assumes the following location for the wkhtmltopdf executable: /usr/local/bin/wkhtmltopdf After installing wkhtmltopdf be sure to test it from a command line to ensure there are no missing dependencies. For example:

```bash
wkhtmltopdf http://www.google.com.ph google.pdf
```

<PageFooter />
