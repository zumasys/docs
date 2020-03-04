# PN5_60691

**Created At:** 1/2/2018 11:49:57 AM  
**Updated At:** 2/16/2018 7:10:29 PM  
**Original Doc:** [pn5_60691](https://docs.jbase.com/release-notes/pn5_60691)  
**Original ID:** 292988  
**Internal:** No  


### Description

jRClient: JIndex start position ignored



### Previous Release Behavior

As per the following C# code, specifying a start position on a jBASE index file would always result in the first item in the index being returned:

```
       try
       {
           using (jf = _jc.OpenFile("UPC.REF"))
           {
               using (JIndex idx = jf.openIndex("SKU"))
               {
                   var itemSeq = "5611881";
                   itemIndex = 0;

                   using (JSelectList jsl = idx.Select(itemSeq)) // start string is ignored
                   {
                       var Results = _jc.Execute(strCommand, JExecFlags.EXEC_GET_CAPTURE | JExecFlags.EXEC_GET_RETURNLIST | JExecFlags.EXEC_GET_RETURNSTRING);

                       Console.WriteLine("Results = " + Results.CaptureString);

                       while (jsl.ReadNext().Length > 0)
                           {
                           var iKey = jsl.IndexKey;              // Initial key will always be the first key in the index
                           var rKey = jsl.RecordKey;
                           var vmCount = jsl.VMCount;
                           Console.WriteLine("iKey = " + iKey + ", rKey = " + rKey, ", vmCount = " + vmCount);
                           itemIndex++;
                           if (itemIndex > 50)
                               break;
                       }
                   }

                   Console.WriteLine("Number of keys read " + itemIndex.ToString());
                   jf.Close();
                   idx.Close();
               }
           }
       }
       catch (Exception ex)
       {
           errCode = ex.GetBaseException();
       }
```

```
iKey = 1100017, rKey = 016500980322
iKey = 1100017, rKey = 041294980326

...

iKey = 1100319, rKey = 062338827971
iKey = 1100327, rKey = 074999011354
Number of keys read 51
```



### Current Release Behavior

The start position on the jBASE index file is now recognised and the correct start key is returned:

```
iKey = 5611881, rKey = 008236074567
iKey = 5611881, rKey = 037504810484

...

iKey = 5612217, rKey = 037504564585
iKey = 5612225, rKey = 008236034639
Number of keys read 51
```
