# Rover BI pre-flight checklist for new customers
<PageHeader />

This document outlines how to set up a new customer with Rover BI.

IMPORTANT: Customer MUST be running an up-to-date version of QM for Rover BI to function properly.

## Azure hybrid connection
- [Hybrid connection setup guide](../hybrid-connection/README.md)

## Create tenant from reports.rovererp.com/manager
- Obtain license key from Entrinsik for new customer
- Login to manager tenant
- Navigate to Administration -> Tenants
- Add NEW TENANT
  - Copy & Paste license key to create new tenant
  - Tenant ID will be URL extension for new customer (i.e. reports.rovererp.com/ID)
  - Default user for new tenant is `admin` pw: `123`

## Set up Datasource for new tenant
- First navigate to Administration -> Features, and verify that Web Datasource Support is turned ON.
- Navigate to Datasources
- Create a NEW DATASOURCE
- Choose Web -> REST API
- Copy connection settings from Zumasys tenant

## User Field (to allow standard datasets to function seamlessly)
- Navigate to Administration -> User Fields
- Add NEW FIELD
  - Name/Label must be `clientCode`
  - Type must be `Text`
  - Default Value must match the client code in the secrets file in Azure

<PageFooter />
