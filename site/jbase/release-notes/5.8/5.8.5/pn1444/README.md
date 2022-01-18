# PN1444  

<PageHeader />

## Description

JBASE_CRYPT_AES256_CTR constant incorrectly defined in jbc.h

## Previous Release Behavior

From jBASE 5.8.0 through jBASE 5.8.4, the equated symbol JBASE_CRYPT_AES256_CTR was defined twice in jbc.h. The second definition, which was incorrect, overrode the first (correct) definition. The symbol JBASE_CRYPT_AES128_CTR was not defined. The second definition for ...256_CTR should have been ...128_CTR.  

## Current Release Behavior

The problem constant has been removed from jbc.h, and new constants for JBASE_CRYPT_AES_128_CTR and JBASE_CRYPT_AES_256_CTR have been added.  

For clarification, alias constants JBASE_CRYPT_AES_128_CBC and JBASE_CRYPT_AES_128_CTR have also been added.  

## Notes

>If a program fails to compile after this update (JBASE_CRYPT_AES256_CTR is not defined), to preserve existing program behavior, change the constant name in the program from JBASE_CRYPT_AES256_CTR to JBASE_CRYPT_AES_128_CTR. The program will function as it did before the update.  
>If it is desired to use AES256 CTR encryption, use the new constant `JBASE_CRYPT_AES_256_CTR'.

Back to [5.8.5 Release Notes](./../README.md)

<PageFooter />
