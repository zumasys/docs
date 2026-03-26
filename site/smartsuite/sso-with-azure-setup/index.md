# SSO with Azure AD - Setup

<PageHeader />

The following steps cover creating and configuring an AzureAD application to allow for Single Sign On into the webstore.

## Create the Application

If you have not yet set up an application to house the webstore, do so now.

1. Go to your Azure AD Home Page.
2. Click "Add".
3. Select "Enterprise application".
4. Click "Create your own application".
5. Give the application a meaningful name.
6. Check off "Integrate any other application you don't find in the gallery."

## Configure Application for SSO

1. Navigate to the webstore Application and select Single sign-on from the left-hand pane.
2. Select the SAML option.
3. Edit the Basic SAML Configuration Panel and add the following information:
    1. Change the Entity ID to your webstore login URL (this will end in "/login").
    2. Change the Reply URL to your webstore login URL (this will end in "/login").
4. Save your changes.
5. Now Edit the User Attributes & Claims Panel. Make sure you have the following claims listed:
    1. Student ID (the azure name for this is employeeid).
    2. Email (emailaddress).
    3. First Name (givenname).
    4. Last Name (surname).
6. Name each claim however you would like (or leave it as the default), but we will need to know what they are.
7. Save your changes.
8. We will need to be sent the Metadata URL. This can be found in the SAML Signing Certificate Panel.

<PageFooter/>
