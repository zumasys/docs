# PN5_60566

<PageHeader />

## Description

Updates to XML library.

- Fix issue with corruption in resulting XML, previously tag names would be corrupted with whatever is hanging around in memory.
- Merge windows and UNIX code, seemed silly to have two separate functions that are almost identical.
- Add new function to jBC, [XML.REMOVE.TAG.VALUE]

New function: [XML.REMOVE.TAG.VALUE]

This is a clone of [XML.GET.TAG.VALUE], it will locate a node using a valid XPATH string and return the value, it also removes the node from the source XML. [XML.GET.TAG.VALUE], will also locate and return a value using an XPATH string but will leave the source XML intact.

### Previous Release Behavior

Previously, Running the following example,

```
        xml_tag = "firstname"
        text = "Greg"
        CRT "result_one_xml = XML.ADD.TEXT(" : xml_tag : ", ": text :")"
        result_one_xml = XML.ADD.TEXT(xml_tag, text)
        CRT "xml_tag    [":xml_tag:"]"
        CRT "text       [":text:"]"
        CRT "result_one_xml [":result_one_xml:"]"
        xml_tag = "lastname"
        text = "Cooper"
        CRT "result_two_xml = XML.ADD.TEXT(" : xml_tag : ", ": text :")"
        result_two_xml = XML.ADD.TEXT(xml_tag, text)
        CRT "xml_tag    [":xml_tag:"]"
        CRT "text       [":text:"]"
        CRT "result_two_xml [":result_two_xml:"]"
```

Would output

```
        result_one_xml = XML.ADD.TEXT(firstname, Greg)
        xml_tag    [firstname]
        text       [Greg]
        result_one_xml [<firstname->Greg</firstname->]

        result_two_xml = XML.ADD.TEXT(lastname, Cooper)
        xml_tag    [lastname]
        text       [Cooper]
        result_two_xml [<lastnamee>Cooper</lastnamee>]
```

Both firstname and lastname tags have an invalid character on the end.

### Current Release Behavior

No corruption in tags

Back to [5.6.2 Release Notes](./../README.md)

  
<PageFooter />
