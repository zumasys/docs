# M3Services Setup Creation

<PageHeader />

Rover ERP utilizes the M3Services Windows Service to process documents, emails, and other connectivity processes.

[You can find the latest client installer here](../release-notes/README.md)

## Installing M3Services

1. Open up `Control Panel` and uninstall any previously installed M3Services.
2. Unzip the M3ServicesSetup_5.xx.zip file and run the `setup.exe` contained within it.
3. Move through the installation prompts, selecting the defaults.
4. After the install is complete, launch Windows `Services` and start M3Services for the first time.

## Verifying the Install

If you'd like, you can optionally verify that the service is running and that Rover ERP is communicating with it correctly.

1. Launch the Rover desktop client.
2. Launch `M3SERVICES.CONTROL`.
3. Click `Test Connection` and verify the popup box displays the new version.

<PageFooter />
