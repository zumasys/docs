# Supported User Exits

**Created At:** 6/28/2018 12:55:45 PM  
**Updated At:** 5/30/2019 5:51:15 PM  
**Original Doc:** [324980-supported-user-exits](https://docs.jbase.com/46351-conversion-processing/324980-supported-user-exits)  
**Original ID:** 324980  
**Internal:** No  

**Tags:**
<badge text='user exits' vertical='middle' />
<badge text='supported' vertical='middle' />
<badge text='bit test' vertical='middle' />
<badge text='remove duplicate' vertical='middle' />
<badge text='reverse' vertical='middle' />
<badge text='replace' vertical='middle' />
<badge text='remove' vertical='middle' />
<badge text='proc' vertical='middle' />
<badge text='truncate' vertical='middle' />
<badge text='pad' vertical='middle' />
<badge text='command line options' vertical='middle' />
<badge text='user name' vertical='middle' />
<badge text='who' vertical='middle' />
<badge text='sleep' vertical='middle' />
<badge text='encrypt' vertical='middle' />
<badge text='remove spaces' vertical='middle' />
<badge text='program stack' vertical='middle' />
<badge text='active select' vertical='middle' />
<badge text='control characters' vertical='middle' />

U3060     Encrypt a string.

U307A     Sleep

U407A     Sleep

U50BB     WHO

U60BB     Return user name

U10E0     Return command line options

U20E0     Return command line options delimited with AM

U30E0     Is there an active select list ?

U70E0     ECHO ON

U80E0     ECHO OFF

U0016     Return the program stack as a space-delimited string

U31A4     Pad/Truncate to requested length or remove trailing spaces

U01A6     Provide Proc 'T{ERM}' statement functionality.

U01A9     Remove Spaces

U11A9     Called with "U11A9?," Extract specific character.

U21A9     Remove non ASCII Characters.

U31A9     Called with "U31A9/st" Exchange char s for char t

U51AA     Reverse String

U31AC     Remove duplicate consecutive characters.

U01AD     Equivalent of READV (in Basic) for Procs.

U11AD     Read next multivalue from attribute 2 of requested item in 'nnP' file and increment multivalue pointer.

U21AD     As above but don't increment multivalue pointer.

U31AD     Return port number suffixed with 'P', ('nnP').

U02D5     Sorts and manipulations of lists

U12D5     Sorts and manipulations of lists

U22D5     Sorts and manipulations of lists

U32D5     Sorts and manipulations of lists

U42D5     Sorts and manipulations of lists

U52D5     Sorts and manipulations of lists

U82D5     Sorts and manipulations of lists

U12DF     Remove non ASCII Characters.

U02E7     Remove non-printable characters.

U030C     Bit test function

U130C     Bit test function

U230C     Bit test function

U330C     Bit test function

U430C     Bit test function

U530C     Bit test function

U630C     Bit test function

U1319     Conversion between bit strings & Numerics

U2319     Conversion between bit strings & Numerics

U047F     Pack leading 0 in a field of n chars

U147F     Date or Time formatting.

U247F     Return port number and user name

U447F     BREAK OFF

U547F     BREAK ON

U847F     Last error number from statement executed in Proc.

U0DBF     Encrypt a string.

U0FF0     Convert raw unix Coordinated Universal Time into local internal format time.

U0FF1     Convert raw unix Coordinated Universal Time into local internal format date.

Back to [Conversion Processing](./../conversion-processing)