# Rover BI Quick Reference

## Creating Datasets from rest calls to Rover ERP system
Informer's Web Query designer can be used to pull data from a Rover ERP system into a Dataset.  Datasets which utilize the Rover REST API Datasource will either use getreport to duplicate an existing Rover report in Informer, or use getrecord to generate an Informer Dataset from one or more Rover data files.  All such we queries will share a few things in common:
1. Append "Dataset" to base URL from Datasource
2. Response Handler set to Custom Script
3. Required parameters:
  - account (this is your API client code)
  - routine (this will either be `getrecord` or `getreport`)
  - format (`table` for `getrecord` or `json` for `getreport`)

### getrecord

### getreport
