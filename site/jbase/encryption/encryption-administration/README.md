# Encryption Administration

<PageHeader />

## Administration

The **jsecurity** command is used to create an encryption profile. At the present time, only one profile per system is allowed.

***\*\*\* Most options of the*** **jsecurity** ***command require root/administrator privileges \*\*\****

```
jsh ~ -->jsecurity -h
jsecurity: Utility to manipulate the encryption and security of jBASE data.
Called as:
jsecurity {-f filename} {-o} new
jsecurity {-f filename} {-o} load
jsecurity {-f filename} display
jsecurity status
jsecurity unload
jsecurity -h

Where:
-f   Optional filename for security file.
filename can be a full or relative path.
Default: JBCRELEASEDIR/config/filesecurity

-o   Overwrite existing key or key file.

-h   Display this help screen.

jsh ~ -->jsecurity new

Enter encryption key for security file :
Re-enter encryption key for security file :

Enter the encryption type and key for the jBASE data files.
Enter encryption type, Q to quit or ? for a list (default AES) : ?
RC2
DES
3DES
BLOWFISH
AES
AES_CTR
Enter encryption type, Q to quit or ? for a list (default AES) :
Encryption: AES

Enter encryption key for jBASE Data files :
Re-enter encryption key for jBASE Data files :

Enter number of iterations to hash key, Q to quit
or ? for more info (default 5000 iterations) : ?

jBASE uses PBKDF2 to derive the actual encryption key based
on the key you enter. The default number of iterations is 5000,
but you can enter a number between 0 and 50000. Hashing the key
using PBKDF2 greatly strengthens the security of your system.
If you choose 0 iterations, your actual key will be used to
encrypt files, however it is recommended to hash the key for
increased security.

Enter number of iterations to hash key, Q to quit
or ? for more info (default 5000 iterations) :
New security profile successfully created.
jsh ~ -->
```

### Notes

- The **filename** used with the **-f** option can be full or relative. If the **-f** option is not used then the default is **$JBCRELEASEDIR/config/filesecurity**.
- The **AES** cipher is **AES256**
- [**PBKDF2**](https://en.wikipedia.org/wiki/PBKDF2) is a way of obscuring the password


The last step is to **load** the profile into shared memory. ***This needs to be done EACH TIME the system is rebooted or when a new security profile needs to be activated.***

```
jsh ~ -->jsecurity load

Enter encryption key for security file :
Security profile successfully loaded.

jsh ~ -->jsecurity display
Enter encryption key for security file :
File encryption type : AES
```

There is no maximum length for the encryption key for jBASE data files when using **PBKDF2** to derive the actual key. This is the default. However, if the number of iterations is 0, the maximum key size is 32 characters.

**Caveat!** On Windows, the shared memory that jBASE creates is unloaded when the last jBASE process terminates. This means that you must have at least 1 running jBASE process in order for the security profile to remain loaded. The best way to accomplish this is to start **jDLS** beforehand which will allow shared memory to persist.

To determine whether or not the security profile has been loaded:

```
jsh ~ -->jsecurity status
Security profile is loaded.
```

This is the only option that does not require root/administrator privileges, so it can be used by any user, or process, to ensure that programs will not run into any issues attempting to access encrypted files.

The status can also be obtained programmatically :

```
PROGRAM jsecurity_status
EXECUTE "jsecurity status" SETTING error_code CAPTURING quiet
security_profile_is_loaded = (error_code<1,1> NE 12)
IF security_profile_is_loaded THEN
    CRT "Security profile is loaded."
END ELSE
    CRT "Security profile is NOT loaded."
END
```

Back to [Encryption](./../README.md)

  
<PageFooter />
