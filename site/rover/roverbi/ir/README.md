# Managing and Deploying Bundles
<PageHeader />

The Rover BI standard package is divided into modules based on business category.

## Modules

| Module Code | Module Name         |
| ----------- | ------------------- |
| ap          | Accounts Payable    |
| ar          | Accounts Receivable |
| eng         | Engineering         |
| exec        | Executive           |
| gl          | General Ledger      |
| inv         | Inventory           |
| mfg         | Manufacturing       |
| mrk         | Marketing           |
| prod        | Production          |
| pur         | Purchasing          |

## Bundles and Tags

The above module codes correspond to Tags in Informer.  Anything in Informer that belongs to a standard module
(datasets, reports, jobs, etc.) will be assigned the `standard` tag, and the tag for the corresponding module code.
Bundles can be created from tags, and this will be our primary strategy for managing and deploying Informer content to
customers.

## Github Management Strategy

### Structure
We are maintaining a repository of the Rover BI standard package in github.  The repo contains a directory for each module,
which is an Informer bundle for the corresponding tag exported in directory form.

### Branches
There is a `master` branch and a `dev` branch.  The `dev` branch will correspond to our zumasyslabs Informer instance.
The `master` branch will correspond to reports.rovererp.com/manager.

### Workflow
When modifying any of the standard modules, we will make changes on the zumasyslabs Informer instance, export bundles for any modified tags,
and commit changes to the `dev` branch.  When satisfied, we will issue a pull request to merge from `dev` into `master`.  Once changes have
been merged into `master`, we will import any modified bundles from github `master` to the rovererp manager tenant.  Deployment to customers
will be done directly from the manager tenant.

## ir Command Line Tool

Entrinsik has created a tool called `ir` that can create, import, export, and directly deploy bundles from the command line.
`ir` can export a bundle as a directory.  This means we can easily manage standard modules with github.

I am setting up command line scripts for each step of the standard workflow that utilize the `ir` tool.

<PageFooter />
