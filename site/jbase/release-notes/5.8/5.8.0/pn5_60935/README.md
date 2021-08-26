# PN5_60935

<PageHeader />

## Description

Add the ability in jED to format embedded C code

## Previous Release Behavior

jED was unable to format C code inside a source and the result was often nicely formatted jabbascript/jBC code and awful C code

## Current Release Behavior

When the BI command or Ctrl+V command is executed inside jED, we now format any embedded C code appropriately.

Important: A pre-requisite of this is to have the clang-format program loaded on your system. To install this, use a search engine for 'clang-format install' as there are many ways to do it and the installation procedures evolve. However, for most Linux distributions, one of these commands should work:

```bash
sudo apt-get install clang-format

sudo yum install clang-format
```

As an example, here is a source with embedded 'C' both before formatting and after formatting.

Before:

```cpp
#header
static int dothis(int p1)
{
return p1+2 ;
}
#endheader
for i = 1 to 3
print "this is i = ":i
#inline
{
int i1 ;
for (i1 = 0 ; i1 < 2 ; i1++) {
printf("The value of %d + %d + 2 = %d\n",CONV_IB(_jb_I) , i1 , dothis(CONV_IB(_jb_I)+i1));
}
}
#endinline
next i
print "End of test"
```

After:

```cpp
$ cat prog1.jabba
#header
static int dothis(int p1) { return p1 + 2; }
#endheader
    for i = 1 to 3
        print "this is i = ":i
#inline
        {
            int i1;
            for (i1 = 0; i1 < 2; i1++) {
                printf("The value of %d + %d + 2 = %d\n", CONV_IB(_jb_I), i1, dothis(CONV_IB(_jb_I) + i1));
            }
        }
#endinline
    next i
    print "End of test"
```

When the formatting is performed, jBASE will search for a record in the current directory called .clang-format. If it can't find such a record, it creates a new record like this:

```cpp
Language: Cpp
# BasedOnStyle: Mozilla
IndentWidth: 4
ColumnLimit: 132
```

This record controls the formatting of the C code. You can edit this code to suit your C formatting. For a list of possible options, [see the Clang documentation](https://clang.llvm.org/docs/ClangFormatStyleOptions.html)

Back to [5.8.0 Release Notes](./../README.md)

<PageFooter />
