# Set or Reset a User Password

<PageHeader />

While the steps on how to change a user’s password are straight forward, there are a few points that need to be kept in mind.

1. When you set a user’s password in User Maintenance (UU-5-1) the system automatically sets their password to reset when they first log in.
    1. This means that the password set in User Maintenance is temporary. Do not set the password to what the user would like to use long term.
2. It is necessary to set the user’s password from the Host Connection. While these steps can be followed on an individual register, passwords ARE NOT sent to all of the other registers.
    1. By setting the password on the host all registers will get the updated password.
    2. Check POS-6-2 to view which registers are communicating. Those who have a "To Be Xfered" amount of zero in the right hand column will immediately have the updated password.
        1. Steps to restart the register communications can be found in the Smartlane Communications video [here](http://tcs-training-wp.azurewebsites.net/videos/).

### To quickly reset the password for the logged in user

1. Type PASSWORD into any menu prompt and press Enter
2. A dialogue will appear prompting for the users password along with a Enter New Password and Confirm Password prompt
    1. Enter your current password into the “Enter Your Password” prompt
        1. This is to confirm the identity of the logged in user
    2. Enter a new password into the “Enter New Password” field.
        1. Passwords must be 8 characters long and include at least one letter and one number
            - g. 1234567A or ABCDEFG1
        2. Re-enter the new password into the “Confirm Password” field and press enter.
    3. The password has now been set for the logged in user and will update to all of the registers.

 

### To reset the password for another user

1. From any moduel, go to UU-5-1
2. Enter the user ID of the user who’s password is going to be reset
3. Navigate to the Password field and type in the new password
    1. Note that this new password is temporary. The user will be forced to set their own password after the log in with this temporary password.
    2. Passwords must be 8 characters long and include at least one letter and one number
        - g. 1234567A or ABCDEFG1. They can also include special characters.
4. Enter the temporary password again into the Confirm Password field
    1. Press Continue on the notification box. This is a notification that the password entered is temporary and the user will need to reset their password when they log in.
5. Press ESC after reaching the Expires field
6. Enter to save the password change.
7. Have the user log in with their new temporary password.
    1. You can type in ID at the menu and press enter to display the login prompt or have them log into another connection.
8. They will immediate get a prompt to reset their password
    1. They need to enter their new, permanent password into the Enter New Password and Confirm Password fields
    2. Passwords must be 8 characters long and include at least one letter and one number
        - g. 1234567A or ABCDEFG1. They can also include special characters.
9. After that is complete their password will update to all of the registers.

<PageFooter />
