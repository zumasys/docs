# MVDBTOOLKIT.WSWAP

<PageHeader />

MVDBTOOLKIT.WSWAP is a cross platform SWAP command.  Not all MVPlatforms have the same command.  This function should be used if you need to use a SWAP command.

## Usage

Command

CALL MVDBTOOLKIT.SWAP(A,B,C)

| Param | Description |
| ----  | ----------- |
| A | Variable you wish to apply swap command against. |
| B | String you wish to swap from. |
| C | String to wish to swap to. |

### Example

```BASIC
S='TEST LINE TEST LINE'
CALL MVDBTOOLKIT.SWAP(S,"ES","XX")
PRINT S
```

</PageFooter>
