# MV Connect Comparison

**Created At:** 8/23/2017 1:33:02 PM  
**Updated At:** 8/23/2017 1:33:59 PM  
**Original Doc:** [mv-connect-comparison](https://docs.zumasys.com/36307-mv-connect/mv-connect-comparison)  
**Original ID:** 268479  
**Internal:** Yes  




MVS.net is a web server right on the d3 box, but what it is producing is Soap and not Rest. They have two options when you make a soap functions

1 – AQL – This is like uniobjects and redbeans where it tries to make the object for you automatically using a gui and pick dictionary. I asked the customer about this and they said they don’t use it because it doesn’t work well. This backs up my argument.

2. subroutine – Exports pick subroutines.

#2 is basically what we are doing with rest. If they caught on to what we are doing they could probably pivot this product pretty quick to mirror what we are doing. Here is some of their custom functions that you can use to bypass the soap engine, mirrors very closely to what we are doing. The big one they are missing is WGETBODY. I am guessing this product was an evolution of flashconnect. This makes me now understand why so many people were confused about MVS.NET, it is less of a UNIOBJECTS competitor and more in line with what we are doing but it is Soap (which is not popular anymore).

[https://www3.rocketsoftware.com/rocketd3/support/documentation/mvs/users/index.htm](https://www3.rocketsoftware.com/rocketd3/support/documentation/mvs/users/index.htm)
