# Installing the ODBC jEDI on Linux/Unix

**Created At:** 12/20/2019 4:47:27 PM  
**Updated At:** 12/21/2019 12:33:41 AM  
**Original Doc:** [installing-the-odbc-jedi-on-linuxunix](https://docs.jbase.com//installing-the-odbc-jedi-on-linuxunix)  


As previously stated, in order to properly perform the steps within this section, you will need a licensed system running jBASE 5.6 or greater, and must obtain the ODBC jEDI tool-set installation package by contacting Zumasys licensing. The installation package has two components, the **ODBCjEDI.jpkg** and the **jpkginstaller.zip**both can be removed from the target file system after successful installation.

After receiving the ODBC jEDI tool-set installation package, do the following to ensure successful installation:

1. Save the installation packages components to a desired location within your file-system.

### Note

For this example, we will use sample directory **InstallDir/**as the location our components are stored after initial download

2. Navigate to where your ODBC jEDI tool-set components are located within your file system

```
~$ cd /InstallDir
~/InstallDir$ ls
~/InstallDir$ ODBCjEDI.jpkg
~/InstallDir$ jpkginstaller.zip
```

3. Create a **bin/** sub-directory within the components storage location

```
~/InstallDir$ mkdir /bin
```

4. Unzip the **jpkginstaller.zip**component into the **bin/**subdirectory

```
~/InstallDir$ unzip jpkginstaller.zip -d ./bin
```

### Note

You may need to install the unzip utility if it is not already installed on your OS

4. Add the **bin/**sub-directory to your $PATH environment variable

```
~/InstallDir$ export PATH=/InstallDir/bin:$PATH
```

5. Run the **jpkginstall**command from the same directory your **ODBCjEDI.jpkg**file is located

```
~/InstallDir$ jpkginstall
```

6.



results of running the code samples if any,

```
this is what came off the previously run code 
```






> ### Notes: 
> 
> Notes if any may take this form.




Link to parent document here
