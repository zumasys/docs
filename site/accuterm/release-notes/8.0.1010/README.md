# AccuTerm 8.0.1010 Release Notes

<PageHeader />

August 27, 2019

AccuTerm 8 is designed to run on Windows 7 and above and Windows Server 2012 and above. It is a 32 bit Windows application and requires an Intel x86 / x64 architecture CPU. It is not compatible with ARM processors (Windows CE, Windows Mobile, Windows RT).

## What’s New

- Main window: the old MDI interface has been replaced with a simple tabbed interface. Previously you could open multiple sessions in a single main window. AccuTerm 8 supports multiple sessions in multiple main windows.
- Tear-off tabs: you can drag tabs on the session tab bar to re-order the tabs. You can drag tabs outside of the AccuTerm window to open them in a separate window. You can also drag tabs between different AccuTerm windows.
- Updated icons: all of the icons used by the main AccuTerm application have been updated to a simple monochrome theme.
- Connect button: the “reset connection” toolbar button (and the corresponding Tools menu item) has been replaced by a new “connect/disconnect” button. This button toggles the state of the connection and shows a hollow lightning bolt if the session is not connected, and a solid lightning bold when the session is connected.
- Simplified startup: the old “welcome” screen has been replaced by a simple startup panel. You have the option from the startup panel to launch a recently used session, open a saved session, or enter typical connection details to create a new session. There is a “More settings” button if you need access to the full settings.
- Simplified new connection: the old “connection wizard” has been replaced with a simple new connection panel where you can enter typical connection details to create a new session. This is similar to the new startup panel.
- Secure Shell: the encryption library used for Secure Shell connections has been replaced by the current version of OpenSSH. AccuTerm 8 SSH supports stronger encryption: SHA2 (256 & 512) hashes for message authentication, elliptic curve key exchange (NIST 256, 384 and 521 as well as curve 25519). Other enhanced cryptographic algorithms will be added in future releases.
- New licensing model: AccuTerm 8 uses a new licensing model, with per-user licenses, instead of a machine license. Administrators can manage licenses for their organization from the Zumasys Customer Portal (portal.zumasys.com). To activate the program, you need to select “Activate” from the evaluation notice screen, or from Help -&gt; Activate. You will need a valid email address and a license key, which is available to the administrator on the customer portal.
- New session file format: session configuration files are now stored in JSON format instead of the old “ini” format. This will make sharing session profiles between desktop, web and mobile versions easier. AccuTerm 8 can still open the old .atcf files, but it will only save changes using the new JSON (.atsp) format. The same is true for layout (.atly) files – these are now saved as JSON (.atlp) format.
- Programmer’s mode: a new option for screen size, Variable, will adjust the screen size (text columns and rows) to fit the window size. Previously, only Normal (80 column) and Extended (132 column) were supported. This feature will send a “screen resize” signal to the server when the window is resized. Applications (vi, JED, jsh) that respond to the “screen resize” signal should automatically adjust the screen for the new size.
  
## Deprecated Features

- Serial port and modem connections: these legacy devices are deprecated. While still supported, in order to access these devices in the settings dialog, you must check the “Enable legacy devices” on the General page of the settings.
- MDI window arrangements (cascade, tile, minimize, maximize): the new UI allows sessions in the main window to be tiled, but the tiled windows cannot be manually resized. Normally, the session windows occupy the entire main window.
- Dialer directory (phone book). If you use a modem for connecting to a server, the phone number to dial needs to be entered into a simple phone number dialog. The dialer phone book has been eliminated.

## Upgrading from prior versions of AccuTerm to AccuTerm 8

AccuTerm 8 should be installed in a separate directory from other versions of AccuTerm. AccuTerm 8 does not share any common components with prior versions of AccuTerm. The default installation directory is C:\Program Files\atwin80 (or C:\Program Files (x86)\atwin80 on 64 bit versions of Windows). The atwin.ini file has been renamed atwin80.ini. The application data directory for AccuTerm 8 is C:\Users\username\AppData\Roaming\Zumasys\atwin80. This is where private menu files and ssh key files are stored.

Although the host programs from prior AccuTerm versions are upward compatible with AccuTerm 8, we recommend installing the new host programs from AccuTerm 8. The host programs have been updated to support Unicode / UTF-8 on platforms supporting UTF-8. The updated programs are designed to be backward compatible with any previous version of AccuTerm.

To install the updated programs, use Update Host Programs from the MultiValue menu. This will reinstall the base programs in the FTBP file first, then display a dialog where you can select the other libraries and samples that you want to reinstall.

## MSI-based Installer

The AccuTerm 8 installer uses Microsoft Installer (MSI). The MSI installation file is wrapped in a standard EXE installer which allows the selection of the desired installation type. The EXE installer then launches the MSI install (msiexec) with appropriate options. As with AccuTerm 7, three installation modes are supported: normal (all users), personal (install for current user only), and portable (run from removable device). The silent install options are /SILENT or /VERYSILENT. The format of the setup.ini file used to customize the installation process has been changed. Please see the user manual or online help for more information.

## Product Activation

The product activation has been changed in AccuTerm 8. The new licensing model is “per user”, rather than “per machine.” Administrators manage licenses for their organization from the Zumasys customer portal (portal.zumasys.com). To activate the program, you need to select “Activate” from the evaluation notice screen, or from the Help -&gt; Activate menu. You will need a valid email address and license key, which is available to the administrator on the customer portal. Activation and license validation requires an Internet connection. The license is validated periodically, contacting the Zumasys license server.

## Importing your Settings

When you run AccuTerm 8 for the first time, AccuTerm checks if there are settings from older versions of AccuTerm that can be imported into AccuTerm 8. This is a one-time offer. It will display a list of the various settings that can be imported and you can choose which ones to import.

The session configuration files and layout files for AccuTerm 8 have changed (script files are the same). The new file extensions are .atsp for session files, and .atlp for layout files. While the AccuTerm 7 .atcf and .atly files will work with AccuTerm 8, the new session files are formatted as JSON and designed to work more efficiently with the new features and for sharing profiles between desktop, web and mobile versions. When you open an AccuTerm 7 configuration file, it is strongly recommended that you save it as the new type. When you click File &gt; Save As, AccuTerm 8 will automatically create the new session or layout file for you.

## Unicode Support

To use Unicode (UTF-8) as your host character set encoding, select "Unicode (UTF-8)" from the Host Character Set Encoding drop-down list in the Session Settings -&gt; Terminal -&gt; Font & Character Set page. Select a suitable font to support the language(s) you intend to use. Configure your host to use UTF-8 encoding.

### Note

If you attempt to display characters that are not defined in the selected font, Windows "font linking" will attempt to use another suitable font for those characters. Sometimes the results are acceptable, but if the linked font does not produce suitable results, choose a font that includes all of the characters for the scripts you intend to display.

At this time, the only left-to-right text is supported. We plan on adding bidirectional support for mixed left-to-right and right-to-left text in a future release.

To send or receive files containing Unicode data using the AccuTerm file transfer programs, you need to select the desired text encoding for use on the Windows machine: Session Settings -&gt; File Transfer -&gt; Text File Encoding. If this setting is anything other than "no encoding" AccuTerm will save text files in the selected encoding. When sending text files to the host, the file's BOM (byte order mark) is used to determine the encoding and the content is transcoded from the file's encoding to host character set encoding. The BOM is not included in the data sent to the host.

The AccuTerm host programs must be configured to enable character set conversion. On the ACCUTERM account, from TCL, type FTSETUP to configure the host programs. Choose item 3 (or 4), then set the "Convert character set" option to "yes".

### Note

UTF-8 support in the AccuTerm host programs required some platform-specific enhancements to the host programs. At this time, the following platforms include UTF-8 support:

QM release 3 and up

## AccuTerm Object Model Changes


### Server object

The name of the server object provided by AccuTerm 8 is "atMVSvr80.Server". For convenience, "atPickServer.Server" can also be used to create an AccuTerm 8 Server instance. You need to use one of these names in your CreateObject() function to access the AccuTerm 8 version of the MultiValue server. If you are using a reference to an older version of the AccuTerm MultiValue Server" type library,

You need to change the reference to "AccuTerm 8 MultiValue Server". To make your code version-independent, declare variables that reference the Server object as Object instead of an explicit type. Attempt to create the server object using the generic object name "atPickServer.Server", and if an error occurs, try using the AccuTerm 7, then the AccuTerm 2K2 name instead.

### AccuTerm object

PhoneBookName property is obsolete and has been removed.

TelnetHostsFile property is obsolete and has been removed.

ZModemAuto property is obsolete and has been removed.

All of the file transfer properties have been removed. These were a holdover from a very old version of AccuTerm.

### Session object

BackgroundPictureFile property has been added to support background pictures.

BackgroundPictureMode property has been added to support background pictures.

BackgroundTransparency property has been added to support background pictures.

BreakKeyAction property has been added to supersede the old TelnetAltBreak and SSHBreakCharacter properties. Previously, the character code was combined with the action in this property; now only the action (0 – 4) is allowed, and the BreakKeyCode is used to specify the character code.

BreakKeyCode property has been added to designate the character to send for a “break” when BreakKeyAction = 4.

Copy method has been changed so that the last line copied to the clipboard does not have a terminating CR/LF appended.

CopySelMode property has been added to support new "remove selection after copy" feature.

DDEResult property is obsolete and has been removed.

DefaultTextEncoding property specifies the encoding used for capture files or received text files. Set to 0 for raw (no encoding), 1 for ANSI, 2 for Unicode and 3 for UTF-8.

DeviceLicenseMode property has been added to supersede the old U2DeviceLicensing property (old property is still valid).

FKeys property and FKey object: the FKeys property returns an FKeys collection which acts like the FKeys() array property from previous AccuTerm versions so existing scripts should continue to work. Instead of containing strings, elements in the FKeys collection are FKey objects. The default property of the FKey object is the content of the key, which is a string.

FontSize property type has been changed from integer to float.

GetSelection method has been added to return coordinates of selection (instead of selected text returned by the Selection property).

KeepaliveInterval property has been added and supersedes the old TelnetKeepalive and SSHKeepalive properties. The new property allows the interval to be specified which was not possible using the old properties.

MenuFileName property is obsolete and has been removed.

OnLine property has been added. Set this property to True to connect or False to disconnect.

PasteAllowCurlyQuotes has been added, replacing the PasteOptions property from the previous version.

PasteEOLMode property no longer uses the 0x80 bit to suppress the final EOL in a paste operation. PasteSuppressFinalEOL property has been added. This option used to be specified by setting the 0x80 bit of the PasteEOLMode property. It is now moved to its own property. Use the PasteSuppressFinalEOL property instead.

PrinterFontSize property type has been changed from integer to float.

PhoneBookName property is obsolete and has been removed.

ScrAutoFwd property is obsolete and has been removed.

ScreenPrinterName, ScreenPrintPaperSize, ScreenPrintPaperSource, ScreenPrintOrientation properties have been added so that screen & slave printers can be configured independently.

ScreenPrintAdapterScript property has been added to support the use of a "print adapter script" to process screen printing. Server property is obsolete and has been removed. SlavePrintAdapterScript property has been added to support use of a "print adapter script" to process slave print jobs.

SlavePrinterName property has been added as a synonym for PrinterName property.

SSHBreakCharacter property has been superseded by BreakKeyCode and has been removed.

SSHKeepalive property is obsolete and has been removed. Use KeepaliveInterval property instead.

SSHNoDelay property is obsolete and has been removed. Use TcpNoDelay property instead.

SSHUseOnlyPreferredCipher property has been added.

TcpIdn property has been added to support "Internationalized Domain Names" or "punycode" for host names.

TcpNoDelay property has been added and supersedes the old TelnetNoDelay and SSHNoDelay properties.

TelnetAltBreak property is obsolete and has been removed. Use BreakKeyAction property instead.

TelnetEcho property has been removed. Use Duplex = 0 property to specify “echo” telnet option.

TelnetKeepAlive property is obsolete and has been removed. Use KeepaliveInterval property instead.

TelnetKeepaliveIsNOP property has been added to select the telnet NOP command as a keepalive message (the default is the telnet DMARK command).

TelnetNoDelay property is obsolete and has been removed. Use TcpNoDelay property instead.

TextFileEncoding property specifies the encoding used for capture files or received text files. Set to 0 for raw (no encoding), 1 for ANSI, 2 for Unicode and 3 for UTF-8.

ThemeStyle property specifies the name of one of the pre-defined color schemes, if one is selected. Otherwise it is set to “Custom”.

U2DeviceLicensing property has been superseded by DeviceLicenseMode property and has been removed.

ZModemAuto property is obsolete and has been removed.

### Settings object

Generally, the same properties that were added, removed or superseded in the Session object have been similarly updated in the Settings object.
  
<PageFooter />
