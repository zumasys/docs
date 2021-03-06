# jBASE 5.7.7 Release notes

<PageHeader />

This release includes various internal bug fixes and the following enhancements and patches:

## Patches

- [PN614](./../pn614/README.md) - F-correlative repeat issue
- [PN620](./../pn620/README.md) - **CREATE-INDEX** issue when using conversion codes
- [PN662](./../pn662/README.md) - jshow on Windows returns null if the path has a ")" character in it
- [PN680](./../pn680/README.md) - Issue with jRemote switchAccount
- [PN703](./../pn703/README.md) - Hostname Length Restriction
- [PN707](./../pn707/README.md) - Quick succession of PH-START will try to use the same port and fail
- [PN708](./../pn708/README.md) - Case insensitivity issue with CATALOG/DECATALOG of subroutines/functions/methods
- [PN712](./../pn712/README.md) - Slow jQL with Audit Logging
- [PN713](./../pn713/README.md) - **PORTBAS** problem with **C** option and strings with reserved words

## New Commands

[jfilesave](./../../../../tools-and-utilities/jfilesave/README.md)  
[jfilerestore](./../../../../tools-and-utilities/jfilerestore/README.md)

## New jBC Statements or Functions

[for](./../../../../jbc/for-iterator/README.md) iterator

## New Dynamic Objects Classes and Methods

- Add @null to the jabbascript language.
- Enhance @true and @false so that if they are used to set values in a dynamic object, they become boolean true and false rather than 1 and 0.
- Add the built-in functions \$setnumber(), \$setnumeric() and \$setstring().
- Add a generalised iterator.
- Add \$jobs() class.

[Back to 5.7.x Release Notes](./../../README.md)
  
<PageFooter />
