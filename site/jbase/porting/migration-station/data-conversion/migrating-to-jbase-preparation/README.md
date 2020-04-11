# Migrating to jBASE: Preparation

<PageHeader />

**Tags:**
<badge text='conversion' vertical='middle' />
<badge text='converting from universe' vertical='middle' />
<badge text='converting from d3' vertical='middle' />
<badge text='jbase conversion' vertical='middle' />

<iframe width="640" height="360" class="fr-draggable" src="https://www.youtube.com/embed/pBZkxtmgWTU?wmode=opaque" frameborder="0" allowfullscreen=""></iframe>

## Description

This article and accompanying video will provide you with an overview of steps and questions or a checklist to be reviewed an answered as preparation for a migration to jBASE.

## Source

1. Where is it?
   - It is usual to locate source in development accounts, but it may be mixed with data.
2. What is it?
   - Basic, Proc, Paragraphs, Macros, Scripts, Other.
3. Who's is it?
   - Third Party Software.
4. Do you have the source code and is it readable?
   - Is encryption/decryption part of the product?
   - Are some programs running, but have no source?
5. Licensing?
   - Do you have license to move the source?

## Data

1. Where is it?
   - Single account or spread over multiple accounts.
2. How big is it?
   - Single tape or multiple tape or network transfer.

## Security / Users

1. What level of security do you want?
   1. Do you currently secure files at the O/S level?  (Usually only available on U2 type systems)
   2. Do you want to secure them?
2. Where are users based?
   - Do you have O/S level users or one single user entry point at that level?
   - Do you have multiple database users?  e.g. D3 Users
   - Does your application have its own users?

## Connectivity / Devices

1. How do your applications use connectivity?
   - Input/Output data via tcp ports?
   - remote data connections? (nfs/super-qpoint)
2. How do end-users and devices connect?
   - Terminal Telnet/SSH connections?
   - Printer connections?
   - Special Device?

## Transfer

1. How should you backup your existing system for initial transfer?
   - See Restoring data section for details on your platform/database
   - Consider the physical devices needed such as tape or disk space for backup files
   - Consider method for transfer of backup to new platform
2. How should you refresh this data during the migration process?
   - Can programs and other source items altered for migration be segregated?
   - How often will you be needing "refreshed" data?
3. How will you transfer for the LIVE jBASE conversion?
   - Consider amount of downtime needed for final transfer
   - Can some historical files be restored ahead of go-live?

## Prep the new server

1. Where will your jBASE source and data reside?
   - The jBASE installer will install jBASE and prerequisites for it
   - It is usually best to create a file system or drive specifically for the jBASE data
2. Review the Security/Users section and prep the new system to match
3. Be sure inter-machine connectivity and devices work with the new server

[Migrating to jBASE: Universe Systems](./../migrating-to-jbase-universe-systems)

[Migrating to jBASE: D3 Systems](./../migrating-to-jbase-d3-systems)

Back to [Data Conversion](.../../README.md)

  
<PageFooter />
