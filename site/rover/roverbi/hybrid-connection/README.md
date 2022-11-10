# Hybrid Connection Setup Guide (Zumasys will set this up for each customer)
<PageHeader />

## Azure Setup Steps

Our process follows the exact same process as [Microsoft’s documentation](https://docs.microsoft.com/en-us/azure/app-service/app-service-hybrid-connections#add-and-create-hybrid-connections-in-your-app)

The steps below are to provide some helpful information and specific values for our setup.

- Log into the Azure portal and navigate to the App Service > Networking (left hand menu or enter in the search bar) > and click on the Hybrid connections option
- Click on the “Add hybrid connection” option in the middle of the screen, above any pre-existing connections. 
- Select the “Create new hybrid connection” at the top of the next blade. (Note: you could add a previously configured connection to a second web app from the list of connections)
- Provide the appropriate information:	
  - Hybrid connection name unique to this customer
  - Endpoint host.  This MUST be the name of the computer where mvConnect is installed.  This can be found by opening a command prompt on the destination server and entering `hostname`. Copy and paste that into the Endpoint Host field.
  - Endpoint Port.  8180 or whatever port we are going to communicate to. If they have caddy, this would be 443 (or possibly 80)
  - Service Bus Namespace (Create New)
    - Name (must be unique to this customer)
    - Location (should be relatively close to customer's geographic location)
    - Click on OK and close the blade. You should be back at the Hybrid connections view where we can download the connection manager 
- Click on the option to download the manager and move that to the Rover server
- Copy the gateway connection string for the connection
  - Click on the connection in the list of connections under the “Hybrid connections screen
  - Click the copy option under the “GATEWAY CONNECTION STRING”
  - Paste the connection string into Notepad or other scratch document, this is used when setting up the HCM in the steps below. 


## Rover Server Setup

These steps are covered by [Microsoft’s documentation](https://docs.microsoft.com/en-us/azure/app-service/app-service-hybrid-connections#hybrid-connection-manager) with a couple of call outs.

- Install the HCM that was downloaded from the portal
- After installing the HCM select the option to “Enter Manually”
- Paste the string GATEWAY CONNECTION STRING that was copied earlier into the text box
- Save the change and wait ~5 seconds for the status to change to “Connected”.  If it doesn’t update to connected, then open the Windows Services, locate the “Azure Hybrid Connection Manager Service” and restart the service

## secrets file

At this point, all that's left to do is add the new client entry to the secrets file on prod-rover-api.
Follow the format from the other customer entries.  When you are finished, make sure to update the Prod API Secrets note in LastPass.

<PageFooter />
