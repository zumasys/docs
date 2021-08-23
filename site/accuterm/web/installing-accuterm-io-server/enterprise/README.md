# AccuTerm IO Server: Enterprise

<PageHeader />

## Installation

* [Install on Linux](./install-accuterm-io-server-linux/README.md)  
* [Install on Windows](./install-accuterm-io-server-windows/README.md)  

### Docker

If you would like to use docker for running AccuTerm IO you can download the docker image with the command: `docker pull zumasys/accuterm:latest`

To run the image use `docker run -it -p 4380:port zumasys/accuterm`. You can replace `port` with any port you wish to use but the image uses port 4380 and must not be changed.

If want to enter the image you can use `docker run -it -p 4380:port zumasys/accuterm bash`


## Licensing

Once AccuTerm IO Server is installed you must add your AccuTerm license by opening your internet browser and navigate to where server is running and add forward slash admin, i.e. `https://<server-ip>:<io-port>/admin`.



After you login, you will be navigated to the settings menu. You can add your AccuTerm license key in the license key field (at the bottom of the page). Saving will update your `config.json` file.

Once you've added your license you can trigger the activation clicking the `Activate License` button or by entering this URL: `https://<server-ip>:<io-port>/activate`

> **Note:**
> You must save any changes to the settings before clicking the `Activate License` button.

Where the `<server-ip>` is your IP and the `<io-port>` is the port you specified during installation (4380 is the default). This activation will also add the machine fingerprint (`machinefp`) to the license property in the `config.json` file), which you will need to copy to generate your enterprise link:

``` json
{ 
    ... ,
    "license": {
        "valid": true,
        "machineId": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
        "machinefp": "1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef",
        "machineStatus": "Activated",
        "licenseId": "aaaaaaaaa-bbbb-cccc-dddddddddddd",
        "licenseKey": "XXXX-XXXX-XXXX-XXXX-XXXX-XXXX",
        "productAttributes": {
        "softUserLimit": 20,
        "hardUserLimit": 20,
        "maintenanceExpires": "2025-10-01"
    },
    "companyName": "Your Company Name"
}
```

## Profiles

To configure profiles, you can navigate to the profiles menu within the admin page.

Here you'll have options to add/remove/duplicate AccuTerm profiles. Create your first profile by clicking the plus symbol in the top right. Then proceed to fill out the appropriate information.

If you already have an AccuTerm profile you want to use you can upload a profile using the upload tool (bottom of page).
 
Once in the directory those profiles will be displayed in the admin tools and available for editing.

## Access Token (for accuterm.io instant access)

You can create an access token URL by either clicking on the URL creation button next to a profile or clicking on the generic URL button. This will copy a base64 url to your clipboard with the following information:

``` json
{
    "key":"1234-abcd-5678-efgh",
    "fp":"1234567890abcdefghijklmnop",
    "server":"https://domain:port"
    "profile":"24a83f34-aae3-4f20-9fd5-d4c1f4846ce5"
}
```

The `key` value is your license key.
The `fp` is the machine fingerprint obtained above.
The `server` is the url for the IO server as, either `https://<IP>:<port>` or a custom domain.

To access accuterm.io using the enterprise token simply navigate to `https://accuterm.io/?enterprise=<Base64Value>` where `<Base64Value>` is the newly created value.

You can also embed this in an iframe like so:

``` html
<html>
<body>
<iframe src="https://accuterm.io/?enterprise=<Base64Value>" height="800" width="1200" title="Iframe Example"></iframe>
</body>
</html>
```

<PageFooter />