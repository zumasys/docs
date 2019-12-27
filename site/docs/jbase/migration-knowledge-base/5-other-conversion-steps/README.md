# 5-Other Conversion Steps

**Created At:** 8/11/2017 12:11:42 AM  
**Updated At:** 11/21/2017 2:43:59 PM  
**Original Doc:** [5-other-conversion-steps](https://docs.jbase.com/36040-migration-knowledge-base/5-other-conversion-steps)  
**Original ID:** 266646  
**Internal:** Yes  


## 1.. Firewalls and VPNS

## 2.. Setup accuterm script

There is an accuterm script /dbms/profilesource/zumloginNP.atsc which should be altered and copied that will allow users to put a shortcut on their desktop which will then allow them to access the new server by putting in their name and the password will automatically be provided.  This script allows them to use the global zum.atcf configuration file and if they want it modified by client they can save a version on their local drive which will be used if found.

You will need to do the following steps to enable this…
                1. Copy the script and zum.atcf file to the /dbms/winshared directory so it can be shared on Windows clients.
                2. Change SHAREDRIVE to whatever the clients will be sharing /dbms/winshared as. i.e. Q:
                3. Alter the zum.atcf configuration file to be correct for this client and chmod 444 /dbms/winshared/zum.atcf

Sub Main()

Dim s As Session

Dim Cfg As String

Dim User As String

Dim Pswd As String

If GetUser(ID$) Then

Cfg = "zum.atcf" 'use one in their default directory first

If FileExists(Cfg) = 0 Then

Cfg = "SHAREDRIVE\zum.atcf" ' Use global one if other not found

End If

User = ID$

Pswd = "N0P@sswd"

Set s = Sessions.Add(Cfg,2,1) 'same as File Open

's.Output Chr$(13) 'send initial CR (uncomment this for telnet)

If s.WaitFor(1, 15, "login") = 1 Then

s.Output User & Chr$(13) 'send User-Id

If s.WaitFor(1, 15, "Password") = 1 Then

s.Output Pswd & Chr$(13) 'send password

s.InputMode = 0 'resume normal input processing

If s.WaitFor(1,2,"Last") = 1 Then

Exit Sub 'got Last login... message, so keep session

End If

AccuTerm.Terminate 'exit accuterm because did not login

End If

End If

End If

AccuTerm.Terminate 'exit accuterm because cancel was selected

End Sub

Function GetUser(ID$) As Integer

On Error Resume Next

Begin Dialog UserDialog 220,80

Text 10,10,80,15,"User ID"

TextBox 90,10,110,15,.ID$

OKButton 20,40,80,20

CancelButton 120,40,80,20

End Dialog

Dim dlg As UserDialog

Dialog dlg

If Err Then Exit Function

ID$ = dlg.ID$

GetUser = True

End Function

## 3.. What other servers does the system need to connect with

## 4.. NFS, CIFS, SFTP etc.
