# jBASE, Internationalization and UTF-8  

<PageHeader />

The code in jBASE 5 releases provides internationalization functionality, sometimes referred to ‘i18n’, (*i followed by the 18 characters of nternationalizatio followed by n*). This enables applications to take advantage of the internationalization functionality and hence provide for the global market, i.e. a fully internationalized application.

When configuring application accounts for international mode, all program variables and data records are to be of type UTF-8 handled internally as UTF-8 encoded byte sequences. The UTF-8 encoding scheme manipulates characters other than those in the standard 7-bit ASCII range (0x00-0x7f) as two-byte or three-byte sequences, rather than the normal single 8-bit byte.
The number of bytes in the UTF-8 sequence will depend on the original code page. For example, it encodes characters in the range 0x80-0xff, representing the single byte character set ISO-8859- 1, as two bytes. However, it represents characters imported from a Double Byte Character Sequences (DBCS), such as Kanji characters from the Japanese code page “shift_jis”, as three bytes when encoded as a UTF-8 byte sequence.
When executing in international mode, all terminal input can be configured to be converted from the configured input code page to a UTF-8 byte sequence. Similarly, for terminal output, configure the UTF-8 byte sequences such that it converts the output to one of the output code pages dependent upon the code page of the terminal device. Normally the input and output code pages would be the same. There is also an obvious advantage to skipping the conversion step and using UTF-8 direct where possible to communicate with terminal devices as these helps reduce the conversion overhead from UTF-8 to the configured code page. Several telnet emulators now support a UTF-8 mode for telnet communication.
UTF-8 is an ASCII preserving encoding of the ISO/IEC Unicode Standard 10646. Therefore, all ASCII characters remain the same and still use a single byte of storage. This provides UTF-8 encoding with an advantage over other forms of Unicode encoding or translation formats. Some forms would require either a doubling (UTF-16, UCS2) or quadrupling (UTF-32, UCS4) of byte space required to represent the Unicode Code Point; however with UTF-8 encoding, only the characters over and above the ASCII 7 bit range need to be stored as multi bytes.

## jBASE Internationalization Configuration

JBASE 5 provides internationalization support code page conversion, collation sequences, international dates and times along with number and currency formatting. The basis of the internationalization configuration is based on user and/or certain jBASE environment variables:

    a. JBASE_CODEPAGE,
    b. JBASE_LOCALE,
    c. JBASE_TIMEZONE.

### Note #1

>The user configuration or environment variables have no effect if the account in which it executes the application is not configured for international mode or the environment variable JBASE_I18N is not set.
>Application providers are responsible for the handling of all directionality issues, such as left-to- right, top-to-bottom orientation. The jBASE library functions such as length (LEN); string comparisons (LT, LE, GT, GE) and collation order statements like (LOCATE/SORT) have all been modified to operate on a character basis in international mode rather than bytes, along with the currently configured user locale.

## jBASE Code Page Configuration  

*Configure the Code pages for the user id using the JBASE_CODEPAGE environment variable*.  

*Display a full list of available code pages using the “jcodepages” command*.

All input and output conversion can be undertaken, however it is more efficient to use UTF-8 for input and output if possible, as no code page conversion is then necessary, reducing system resource requirements. There are several commercially available telnet clients that can communicate using UTF-8, in these cases the telnet client performs the conversion from the configured code page to UTF-8, hence it is important to ensure that the client is configured correctly such that the input and output code page is the correct one for the keyboard mapping required.  

Code page conversion is only applicable when the JBASE_I18N environment variable is set. If the JBASE_I18N environment is not set, then code page conversion will not occur, and all variables will be handled as bytes rather than as characters. As configuration of international mode is on an account basis the state of international mode can change on execution of a LOGTO.

## jBASE Locale Configuration  

*Locales can be configured for the user id via the JBASE_LOCALE environment variable*.  

*Display a full list of available locales from the command line by the “jlocales” command*.  

Configured locales are only applicable when executing an application in international mode or the JBASE_I18N environment variable is configured. The locale is based on the underlying OS locale configuration and the configured locale for the user id has no effect.
As configuration of the international mode is on an account basis, the state of international mode can change on execution of a LOGTO. If configuring an account with international mode ‘false’ then the JBASE_I18N environment variable will be unset as the result of the LOGTO.  

## jBASE Timezone Configuration  

*Timezones can be configured for the user id via the JBASE_TIMEZONE environment variable*.  

*Display a full list of available Timezones from the command line by the “jtimezones” command*.  

Configured Timezones are only applicable when executing an application in international mode or when the JBASE_I18N environment variable is configured. If the JBASE_I18N, environment variable is not set, the timezone is based on the underlying OS timezone configuration and the configured timezone for the user id has no effect. As with configuration, the international mode on an account basis the state of international mode can change on execution of a LOGTO. If configuring an account with international mode ‘false’ then the JBASE_I18N environment variable will be unset as the result of the LOGTO.  

## jBASE Function Changes for International Mode  

Internally, very few of the jBASE library functions need changing to process data as UTF-8 encoded multi-byte sequences rather than single bytes. It bases resultant values on characters rather than bytes. Some functions change their internal workings depending upon the state of international mode or JBASE_I18N setting.

### Character vs. Bytes

```
LEN, SUBSTRINGS, X[n,m], INDEX
```

In international mode, length and sub string extraction works in ‘characters’ not ‘bytes’. Resultant positions are character positions not byte offset.  

```
BYTELEN
```

A new function has been provided to obtain the actual number of bytes rather than characters. For example:

The following source code example contains UTF-8 encoded characters representing the German ‘u’ umlaut (0xC3 0xBC) and the double ‘s’ (0xC3 0x9F).

```
X = "Füßball";* String as UTF-8 sequence "F.C3.BC.C3.9Fball"
CRT X
CRT "Character Length of X is " : LEN(X)
CRT "Byte Length of X is      " : BYTELEN(X)
CRT "Substring[1,3] of X is   " : X[1,3]
```

If executed in international mode and with the Input/Output Code Page configured to ISO-8859-1 (Latin1) this code will produce the following output.

### Note #2

>The length returned by the LEN function is the number of characters in variable X, whereas the length returned by the BYTELEN function is always the number of bytes in variable X.

```
Füßball
Character Length of X is 7
Byte Length of X is      9
Substring[1,3] of X is   Füß
```

### Character properties

```
UPCASE, DOWNCASE, ALPHA, MATCHES, MATCHFIELD
```

In international mode, functions use the configured locale to convert and/or test character properties. For example:
The following source code example contains a UTF-8 encoded byte sequence representing the German ‘u’ umlaut (0xC3 0xBC):

```
X = "ü" ;* this string held in source as UTF-8 "C3.BC"
CRT X : " becomes " : UPCASE(X)
IF ALPHA(X) THEN CRT X : " is alphabetic "
IF X MATCHES "1A" THEN CRT X : " is alphabetic "
```

If executing in international mode and with the Input/Output Code Page configured to ISO-8859- 1 and with the locale configured for German (de_DE) the code produces the following output.

```
ü becomes Ü
ü is alphabetic
ü is alphabetic
```

The UPCASE function converts the lower case u umlaut to the upper case equivalent. In other words, the UTF-8 byte sequence 0xC3 0xBC becomes 0xC3 0x9C.
The ALPHA function tests the lower case u umlaut as an alphabetic character according to the configured locale, de_DE.
The MATCHES statement tests the lower case u umlaut against the single alphabetic character according to the configured locale, de_DE.

### Collation properties

```
SORT, LOCATE, COMPARE, LE, LT, GE, GT
```

In international mode, statements use the configured locale to determine sort order. For example: A sort of the following UTF-8 encoded byte sequences using the SORT function will generate a different sort order depending on the configured locale.

locale configured for ‘en_US’

- cote stored as UTF-8 sequence ‘cote’
- coté stored as UTF-8 sequence ‘cot.C3.A9’
- côte stored as UTF-8 sequence ‘c.C3.B4te’
- côté stored as UTF-8 sequence ‘c.C3.B4t.C3.A9’

locale configured for ‘fr_FR’ (reverse accented collation)  

- cote
- côte
- coté
- côté  

### Note #3

>The word côte sorts BEFORE the word coté for the configured locale fr_FR

Given the following code:

```
X = "côte" ;* Source contains UTF-8 sequence "c.C3.B4te"
Y = "coté" ;* Source contains UTF-8 sequence "cot.C3.A9"
```

The statement :

```
IF X LT Y THEN CRT X:" is lower in collation sequence than ":Y
```

produces the following output in International mode when executed with the locale configured for French, fr_FR.

```
côte is lower in collation than coté
```

### Conversion properties

```
ICONV, OCONV, FMT
```

The implementation of conversions is by a set of jBASE library functions, which in turn invoke functions in the IBM Public License package, ICU. This package provides cross-platform open source libraries compliant with Unicode Standard 3.0 and currently supports over 170 locales independently of the system locales. Several input and output conversions become dependent upon the configured locale.  

For example, then following source code example will output a different date format dependent upon the configured locale when executing in international mode.

```
CRT OCONV(0,"D2/")
CRT OCONV(0,"D")
```

This code will produce the following if executed in international mode with a configured German locale of ‘de_DE’.

```
31/12/67
31 DEZ 1967
```

However, some conversions can be used to ‘force’ an expected format regardless of locale, for instance the DE date format will always produce a European date format. The DG format is a new Global date format for YYYYMMDD.

```
CRT OCONV(0,"D2/E") displays 31/12/67
CRT OCONV(0,”DG”)   displays 19671231
```

### Character functions  

```
CHAR, SEQ
```

The CHAR and SEQ functions behave differently for international mode.

In international mode the CHAR function now provides for an extended numeric range to support 32 bit Unicode code point values. The CHAR function will return a UTF-8 encoded byte sequence for the numeric range 128-247 (0x80-0xf7) and the range 256 and beyond, however numeric values in the system delimiter range 248-255 (0xf8-0xff) will continue to return the normal single byte system delimiters characters. The resultant characters for numeric values in the ASCII range 0-127 (0x00-0x7f) are unchanged.

In international mode, the SEQ function now accepts UTF-8 encoded byte sequences such that UTF-8 byte sequences representing characters in the range 0-127 (0x00-0x7f), i.e. single byte characters return the normal ASCII numeric values. UTF-8 encoded byte sequences representing characters in the range 128-255 (0x80-0xff) will return the ISO-8859-1 equivalent numeric value. System delimiter characters will return numeric values in the range 248-255 (0xf8-0xff). Other UTF-8 encoded byte sequences will return the equivalent numeric value as specified by the Unicode code point.

### Additional Functions

```
BYTELEN, LATIN1, LENDP, UTF8
```

The provision of additional functions helps with programs that need to know the actual real byte length of a variable as well as conversion functions for handling binary values. The conversion function should only be required when dealing with binary data, for example handling data to/from tape devices.

The BYTELEN function returns the number of actual bytes used for the string variable. Use this function whether executing in international mode or not.

The LATIN1 function will convert a string variable from ISO-8859-1 to a UTF-8 encoded byte sequence. Use this function whether executing in international mode or not.

The LENDP function will return the number of character display positions required in order to display the string variable. Use this function to determine the display width of characters, for instance the null character has a display width of zero, where as some Japanese Kanji characters require more than one display position. The LENDP function will change behaviour if used without international mode set true.

The UTF8 function will convert a string variable from UTF-8 encoded byte sequence to the ISO- 8859-1 (binary) equivalent. Use this function whether executing in international mode or not.

### Timestamp Functions  

```
TIMESTAMP, TIMDIFF, CHANGETIMESTAMP, MAKETIMESTAMP LOCALDATE, LOCALTIME
```

The provision of additional functions assists with date and time internationalisation; these functions enable applications to obtain, convert and process a ‘timestamp’. These functions are available regardless of current state of international mode.

The TIMESTAMP functions returns a timestamp of Universal Coordinated Time, UTC as decimal seconds.

The TIMEDIFF functions returns the interval between two timestamps.

The CHANGETIMESTAMP function generates a new timestamp by adjusting the supplied timestamp by a dynamic array, which specifies the adjustment values.

The MAKETIMESTAMP function generates a timestamp using a specified time zone.

The LOCALTIME function generates an internal time value using a supplied timestamp and time zone.

The LOCALDATE function generates an internal date value using a supplied timestamp and time zone.

### Byte Count Functions

```
READBLK, WRITEBLK, OSBREAD, OSBWRITE
```

The prime target of the statements READBLK and WRITEBLK are at device access and hence use a block size or byte count. It is normal for device formats to use binary values to describe the contents of the data blocks regardless of the underlying structure. As such, these statements continue to work on a byte rather than character basis whether used with international mode set true or not.  

*If the requirement is to read/write large files, use instead the READSEQ/WRITESEQ commands. In the default configuration the READSEQ and WRITESEQ statements read/write a line at a time such that once a line from the file has been read into a variable, that variable can be used on a character basis rather than bytes. This assumes that the data in the file is UTF-8 encoded. If the data in the file is not UTF-8 encoded, but ISO-8859-1 (binary) then convert the data to UTF-8 using the UTF8 function*.

### Note #4  

>Using IOCTL commands to suppress one line at a time mode for the READSEQ or WRITESEQ, operates these statements only in byte mode, and not character mode

### jBASE jQL Changes for International Mode

Modification of the jBASE jQL Processor in several areas provide full Internationalization capabilities.

### jQL Dictionary Conversions and Correlatives

For dates and times, jQL applies simple date format functions to use the configured locale to support the standard conversions D and MTS.  

Formatting numbers via MR/ML/MD, use locale for Thousands, Decimal Point and Currency notation.

```
TimeStamp "W{Dx}{Tx}"
```

In addition, it includes a provided suite of conversions including A, F and I-types for timestamp functionality. This is such that it displays a generated timestamp for date and/or time in short, long, and full formats. These conversions also support non-Gregorian locales. The meaning of the components of the conversion is as follows:

| <!----> | <!----> |
| ---     | ---     |
| W       | Is a new conversion code so not to clash with existing conversions. |
| D       | Date    |
| T       | Time    |
| x       | Format option: S = Short, M = Medium, L = Long, F = Full |
| "WDS" or "WTS"  | SHORT is completely numeric.12/13/52 or 3:30pm |
| "WDM"    | MEDIUM is longer. Jan 12, 1952 |
| "WDL" or "WTL"  | LONG is longer. January 12, 1952 or 3:30:32pm |
| "WDF" or "WTF"  | completely specifies FULL |

### jQL Locale-Based Collation

As a part of the internationalization of jBASE, jQL will now use collation tables, when enabled for international mode, that are specific for the user’s locale.

When international mode is not enabled, the keys are sorted by the binary value of the individual characters as in prior releases.
When international mode is enabled, the keys are first passed to a lookup algorithm that converts the key into a collation key, which is tailored specifically for the user’s language. Using the collation key, the sort processor is able to produce output in the order expected in the user’s locale.

### jQL Right Justified Sort

The primary purpose of right justified attribute definitions is to produce the correct sort sequence and display properties for numeric values; use also for mixed alpha and numeric fields to produce a meaningful sort order.

The use of right justified fields with completely non-numeric data does not affect sort order, just the display.

As part of the internationalization of jBASE, jQL uses a new algorithm for right justified fields designed to provide optimal sorting of mixed alpha and numeric fields as well as numeric fields. The field width specified in the attribute definition no longer affects the behaviour of the sort.

### Pure Numeric keys

Keys are sorted from the largest negative number to the largest positive number.

A single leading minus or plus sign may be present, which ignores leading zeros before a decimal point for sorting purposes. It ignores trailing zeros after a decimal point for sorting purposes.

Nulls will sort either before all numeric keys or as zero, depending on emulation option. If international mode is true, the defined characters in the Unicode 3.0 specification (section 4.6) to be decimal digits are sorted as numbers.  

### Mixed Alpha Numeric Sorting

The goal here is to produce a meaningful sort order of a field of mixed alpha and numeric data, for example, a field containing a suppliers’ part number.

In this format and content, the field is unknown and can be expected to contain alpha, alphanumeric, and pure numeric values. Each candidate key is split into parts, alternating between numeric and non-numeric parts. Sign characters are only valid as the first character of the key, elsewhere they are treated as non-numeric. If the part is numeric then it processes that part in the same manner as a pure numeric key above. If international mode is true, it passes non-numeric parts through the collation algorithm to produce collation key parts. If international mode is false, it sorts the non-numeric parts left to right.

### Data Conversion

When executing programs in international mode, it processes all variable contents as UTF-8 encoded sequences. As such all data must be held as UTF-8 encoded byte sequences. This means that data imported into an Account configured to operate in international mode must be converted from the data’s current code page to UTF-8. Normally if ALL the data are 8 bit bytes in the range 0x00-0x7f (ASCII) then no conversion is necessary as these values are effectively already UTF-8 encoded. However values outside of the 0x00-0x7f range must be converted into UTF-8 proper such that there can be no ambiguity between character set code page values.

For instance, the character represented by the hex value 0xE0 in the Latin2 code page, (ISO- 8859-2), is described as "LATIN SMALL LETTER R WITH ACUTE".  
However the same hex value in the Latin1 code page, (ISO-8859-1), is used to represent the character "LATIN SMALL LETTER A WITH GRAVE".
To avoid this clash of code pages the Unicode specification provides unique hex value representations for both of these characters within the specifications 32-bit value sequence.

#### Example

```
Unicode value 0x00E0 used to represent LATIN SMALL LETTER A WITH GRAVE
Unicode value 0x0155 used to represent LATIN SMALL LETTER R WITH ACUTE
```

#### Note #5

>UTF-8 is an encoding of 32 bit Unicode values, which also has ‘special’ properties (as described earlier), which UNIX and Windows platforms can use effectively.

Another good reason for complete conversion from the original code page to UTF-8 is that doing so also removes the requirement for ‘on the fly’ conversions when reading/writing to files, as this would add massive and unnecessary overhead to ALL application processing, whereas the conversion from original code page to UTF-8 is a ‘one off’ cost.

### jBASE File Conversion  

The first requirement before configuring an account and application for international mode is to convert the file data from the original code page into UTF-8 encoded byte sequences.

### Compiler

You must convert all source files containing characters in the range 0x80 thru 0x255 such that these characters are represented in UTF-8 before compiling.

### Conversion Utility

A conversion tool ‘jutf8’ has been provided to help with the file conversion. The first would be to restore the data in the normal way using a restore process working in binary mode. Once the files have been restored, use the following utility with the imported data files to convert the data. The syntax of the conversion utility is as follows:

```
jutf8 {-options} {filename {,...} }
```

where options can be:

| <!---->  | <!----> |
| ---      | ---     |
| -b       | Create the optional UTF-8 Byte Order Mark (BOM).<br>In general select this converted file is to be used with third party apps.<br>Do not use it if converted file is to be used only with jBASE.<br>Reverse conversion will accept files with or without BOM. |
| -c       | The code page to use for conversion, default latin1 |
| -d       | Process directories |
| -f       | Force mode, skip prompt for confirmation |
| -m MapFilePath | Use specified map file for conversion |
| -s       | Skip sample testing for file already converted |
| -u       | Convert from UTF-8 to code page, i.e., reverse conversion |
| -v       | Verbose mode |

The conversion utility, by default, will attempt to confirm that the data is not already converted into UTF-8. Directories are skipped by default unless the –d option is explicitly specified.

#### Note # 6

>The conversion of file contents containing binary data such as compiled programs may render the compiled object no longer usable.  
>It is recommended that the files be cleared of program object files before use of the utility on source files.

### Conversion Map

Use the MapFilePath option to specify a file that describes the mapping of certain characters, e.g., system delimiters, from and to the required hex value.

The map file describes how characters in the original file should be ‘mapped’ from their current hex value to the required hex value BEFORE conversion to UTF-8 proper. The example below maps any characters in the range 0x01-0x08 into what would normally be system delimiters before conversion to UTF-8. Therefore, character 0x04 is mapped to 0xFC and then converted to the two-byte UTF-8 encoded sequence 0xC4 0xBC, which does not clash with the system delimiter and which in turn represents the 32-bit Unicode value of 0x00FC.

#### MyMapFile  

| # From | To   |
| ---    | ---  |
| 0x01   | 0xFF |
| 0x02   | 0xFE |
| 0x03   | 0xFD |
| 0x04   | 0xFC |
| 0x05   | 0xFB |
| 0x06   | 0xFA |
| 0x07   | 0xF9 |
| 0x08   | 0xF8 |

#### Note #7

>If the map file is specified along with the ‘u’ option then it reverses mapping from/to.

### Data Import and Export

The jBASE Directory and SEQ drivers have been modified to provide for an additional IOCTL command, which provides for data conversion from a specified code page to UTF-8 when reading from the native operating system file. This command can also be used when writing to the native file such that the data is converted from UTF-8 to the configured code page. This IOCTL has been specifically developed for Import and/or Export of data to external applications and is not recommended for usage as part of an application for ‘on the fly’ conversion. You can also use this IOCTL with the READSEQ and WRITESEQ statements.

Below is an example of using the IOCTL to convert data in a UNIX directory file from ‘shift_jis’, Japanese, to UTF-8 while reading the record from the native file. The record is then written out (without conversion) to a jBASE Hash File. This IOCTL command will also return the previously configured Code Page for the File Descriptor. Note: hash files do not support this additional IOCTL command.

```
* Convert directory record from CodePage shift-jis to UTF-8 and place into Hash file
INCLUDE JBC.h

OPEN 'MYDIRECTORY.' TO FILE ELSE STOP OPEN 'MYHASHFILE' TO HASHFILE ELSE STOP
* Setup Code Page for IOCTL command
CodePage ="shift-jis"
IF IOCTL(FILE,JIOCTL_COMMAND_SETCODEPAGE,CodePage) ELSE
    CRT "Code page problem" ; STOP
END

IF CodePage NE "" THEN CRT "Previously configured Code Page : ":CodePage
* Read and convert record from code page shift-jis to UTF-8 READ Record FROM FILE,"MyCodePage" THEN
    CRT "No Chars " : LEN(Record), "No Bytes " : BYTELEN(Record)
    WRITE Record ON HASHFILE,"MyUTF8"
END
```

### jBASE Error Message Files

When executing in international mode, error messages files use the configured locale such that it generates de-nationalized error message files used in place of the default error message file.

The detection of the correct error message file for the locale works on the basis that if the error message for the full locale specification, i.e., it cannot open LanguageCode_CountryCode_Variant, and the process defaults to use the LanguageCode_ContryCode. If this still fails, it only uses LanguageCode until ultimately it uses no part of the locale to detect the error message file.

For instance, if configuring a user for the locale ‘fr_FR_EURO’ then any error messages for processing are initially searched for in the "jbcmessages_fr_FR_EURO" file.

If this file cannot be opened, the process will attempt to open "jbcmessages_fr_FR". Similarly, if this file is not available, the process will then attempt to open "jbcmessages_fr". If the open still fails, it uses the default error message file "jbcmessages".

### jBASE Spooling and Printing

#### Spooling

The jBASE spooler files will hold the created spooler jobs as UTF-8 encoded byte sequences only if generated by a program executing in international mode. i.e, as per the Account definition. Otherwise, it creates spooler jobs in the normal Latin1 (ISO-8859-1) code page as previously.

#### Printing

You can configure a new parameter, CODEPAGE, in the FORM TYPE configuration file in the jBASE release sub directory ‘config’, (see jspform_deflt), to specify a code page to use for conversion when despooling the print job. The syntax of the parameter is as follows:

```
CODEPAGE codepage
```

Where “codepage” is the name of the code page to use, such that the print job is converted from the internal format of UTF-8 encoded byte sequences to the required code page for the printer device. For example:

```
CODEPAGE shift-jis
```

This code page parameter will convert the UTF-8 byte sequence in the print job to shift-jis for Japanese.

#### Note #8

>The internal format MUST always be UTF-8 if using CODEPAGE parameters; otherwise, fatal conversion errors can occur. If the CODEPAGE parameter is not specified, output will be not be converted, hence if the spool job was generated by a process executing in international mode, then output will be in UTF-8, otherwise if the job was generated by a process executing in normal mode, output will be in ISO-8859-1 (latin1).

Whenever possible, printers should be configured to support UTF-8, so that code page conversion is not necessary, thereby further reducing unnecessary conversion overheads on the system.

### Potential Performance Issues

By operating in international mode, it is inevitable that certain functions will suffer in terms of application performance:

- LEN: must now scan variables counting characters, not simply return the number
- LOCATE: must use the locale for the sort order
- SORT/COMPARE: must use the locale for the sort/compare order  
- MATCHES/MATCHFIELD: must determine if characters are numeric, alpha, etc
- ICONV/OCONV: date, time and currency conversions all use the locale
- ALPHA, ISPRINT: properties must be based on the locale
- INPUT/PRINT: code page conversion to and from UTF-8

Normally, the LEN function returns the current byte length of the array, which is always kept up- to-date as the array increases or decreases in size. In international mode, the LEN function must return the number of characters rather than the number of bytes in the array. As a result, the array must be traversed in order to count the characters, causing a decrease in performance.

LOCATE usually compares strings directly, without regard for locale. In international mode, however, the locale is used during comparison. The same holds true for MATCHES, MATCHFIELD, SORT, COMPARE and property tests, since variables must first be converted to Unicode.

If international mode is enabled, conversion between code pages is required for Terminal I/O; however, this is a relatively slow operation. Whenever possible, it is ideal to use terminal emulators etc., which are capable of sending and receiving UTF-8, such that no code page conversion is necessary, thereby reducing the CPU overhead of conversion.

As all strings must be converted to UTF-8 encoding before compile time, and all read/write data is all presumed to be UTF-8 encoded, there should be no overhead to other functions, except as mentioned above or when functions are working on a character basis, e.g., substring extraction. If an account is not configured for international mode, the overhead is a simple bit test in a few functions.

### jBASE Environment Variables for Internationalization

Users can be configured for internationalization by setting the following environment variables.

```
JBASE_I18N
```

When the JBASE_I18N environment variable is set, the application is expecting to execute in International mode.
NOTE: that the value of this environment variable can be modified by a LOGTO command. The value of the JBASE_I18N variable will then be set according to the true or false value for the account.

```
JBASE_CODEPAGE
```
You can only set the JBASE_CODEPAGE environment variable to a valid code page available with the ICU package. Use the jcodepages command for a list of currently available code pages. Conversion for input and output will only take place if configuring the account for international mode or the JBASE_I18N variable is set.

```
JBASE_LOCALE
```

You can only set the [JBASE_LOCALE](./../../environment-variables/jbase_locale/README.md) environment variable to a valid locale available with the ICU package. Use the jlocales command for a list of currently available locales.  

```
JBASE_TIMEZONE
```

You can only set the [JBASE_TIMEZONE](./../../environment-variables/jbase_timezone/README.md) environment variable to a valid time zone available with the ICU package. Use the jtimezones command for a list of currently available time zones.  

As an example, the following environment variable configuration would configure a user for the French and the country locale specific for France and the code page set for latin1, iso-8859-1.

```
JBASE_I18N=1
JBASE_CODEPAGE=iso-8859-1
JBASE_LOCALE=fr_FR
```

[Back to Knowledgebase](./../README.md)

<PageFooter />
