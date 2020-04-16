# Secondary Index Examples  

<PageHeader />

The following two subroutines, 'nextpage.b' and 'prevpage.b', can be used for generic secondary index traversal (forward and reverse). Hopefully, the logic and comments in the programs will clarify what is required and the differences between [READNEXT KEY](./../../jbc/readnext-key/README.md) and [READPREV KEY](./../../jbc/readprev/README.md).

The main difference is that [SELECT ATKEY](./../../jbc/selectindex/README.md) does not include the initial key when doing a READPREV KEY, like it does for READNEXT KEY, so we need to explicitly add it to the list that is being returned.

## nextpage.b

```
SUBROUTINE nextpage(BTREE, INDEXKEY, ID, MAX, KEYLIST, IDLIST, NOMORE)
 * Returns the next page of keys from a jBASE secondary index where a 'page' is
 * a specified number of keys/ids to return.
 *
 * BTREE is the index file variable from an [OPENINDEX](./../../jbc/openindex/README.md) statement
 * INDEXKEY is key to search for. This along with ID is the exact point to start the search
 * ID see explanation for INDEXKEY
 * MAX indicates the number of keys and IDs to return as dynamic arrays in KEYLIST and IDLIST
 * KEYLIST is a list of MAX index keys returned to the calling program
 * IDLIST is a list of MAX IDs returned to the calling program
 * NOMORE is a boolean value which indicates that we have reached the end of the index
 *
 IDLIST = ""
 KEYLIST = ""
 CNT = 0 ;* Keep track of how many we have
 NOMORE = @FALSE ;* Assume that we are not at the end of the index
 SELECT BTREE ATKEY INDEXKEY, ID
 LOOP UNTIL CNT = MAX OR NOMORE DO
     READNEXT KEY INDEXKEY, ID THEN
         IDLIST<-1> = ID
         KEYLIST<-1> = INDEXKEY
         CNT += 1
     END ELSE
         NOMORE = @TRUE
     END
 REPEAT
 RETURN
```

## prevpage.b

```
SUBROUTINE prevpage(BTREE, INDEXKEY, ID, MAX, KEYLIST, IDLIST, NOLESS)
 * Returns the previous page of keys from a jBASE secondary index where a 'page' is
 * a specified number of keys/ids to return.
 *
 * BTREE is the index file variable from an OPENINDEX statement
 * INDEXKEY is key to search for. This along with ID is the exact point to start the search
 * ID see explanation for INDEXKEY
 * MAX indicates the number of keys and IDs to return in KEYLIST and IDLIST
 * KEYLIST is a list of MAX index keys returned to the calling program
 * IDLIST is a list of MAX IDs returned to the calling program
 * NOLESS is a boolean value which indicates that we have reached the beginning of the index
 *
 IDLIST = ""
 KEYLIST = ""
 CNT = 0 ;* Keep track of how many we have
 NOLESS = @FALSE ;* Assume that we are not at the beginning of the index
 SELECT BTREE ATKEY INDEXKEY, ID
 * SELECT ATKEY does not include the initial key for READPREV (like it does for READNEXT).
 * To overcome this inconsistency we have to get the next key as the first key selected.
 READNEXT KEY INDEXKEY, ID ELSE NULL
 INS ID BEFORE IDLIST<1>
 INS INDEXKEY BEFORE KEYLIST<1>
 CNT += 1
 * Reposition the pointer; at times this seems to be necessary when changing direction
 * (ie, from READNEXT to READPREV) but is harmless otherwise.
 SELECT BTREE ATKEY INDEXKEY, ID
 LOOP UNTIL CNT = MAX OR NOLESS DO
     READPREV KEY INDEXKEY, ID THEN
         INS ID BEFORE IDLIST<1>
         INS INDEXKEY BEFORE KEYLIST<1>
         CNT += 1
     END ELSE
         NOLESS = @TRUE
     END
 REPEAT
 RETURN
```

Back to [Indexes](./../README.md)

<PageFooter />
