# M3Services Setup Creation

<PageHeader />

## Build the Release(Visual Studio)

1. Open the M3Services solution.
2. Select "Release" for the build type.
3. From the Build pull-down menu select "Build Solution."

## Copy Solution to the Hosting Server

1. Create a new folder at E:\FileShare\InstalleShie;d_2016_Projects\Version_x.x where x.x is the next version number
2. Copy the M3ServiceInstallation folder from the previous version folder into the new folder.
3. Copy the M3ServicesSolution folder from the development machine into the new folder.

## Publish Files from Solution

1. Open a command window as administrator.
2. Navigate to E:\FileShare\InstallShield_2016_Projects\Version_x.x\M3ServicesInstallation.
3. Run M3Services_Publish.bat

## Build InstallShield Setup

1. Open Windows file explorer.
2. Navigate to E:\FileShare \InstallShield_2016_Projects\Version_x.x\M3ServicesInstallation.
3. Double click on M3ServicesSetup.ism to open InstallShield.
4. In the tree menu on the left click on Installation Information > General Information.
5. In the panel on the right, change the Product Version to the new version.
6. Click on the Build button in the toolbar and click on Build Release001 in the menu that appears.
7. Close InstallShield.

## Copy InstallShield Setup

1. Open a command window as administrator.
2. Navigate to E:\FileShare \InstallShield_2016_Projects\Version_x.x\M3ServicesInstallation\Zipped.
3. Run M3ServicesSetup_GetDisk1.bat.

## Create and Store Zip Setup File

1. Navigate to E:\FileShare \InstallShield_2016_Projects\Version_x.x\M3ServicesInstallation\Zipped\M3ServicesSetup.
2. Select all of the files in the folder, create a zip file and name it M3ServicesSetup_x.x.
3. Move the zip file to E:\FileShare\Software\Rover\M3Services\Current.
4. Delete the previous zip file in that folder.
5. Create a new folder name Version_x.x in E:\FileShare\Software\Rover\M3Services\Releases.
6. Copy the zip file into the folder.

<PageFooter />
