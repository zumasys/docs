# What is Internationalization?  

More applications are crossing international and cultural boundaries, which require localization to provide support for the local language of the user. Internationalization is the development of software for localized user communities without the need to change the executable code.
Fundamentally, computers deal with numbers. They store letters and other characters by assigning a number for each one. Before the invention of  Unicode, there were hundreds of different encoding systems for assigning these numbers. No single encoding could contain enough characters: for example, the European Union alone requires several different encodings to cover all languages. Even for a single language like English, no single encoding was adequate for all the letters, punctuation, and technical symbols in common use.
These encoding systems also conflict with one another. That is, two encodings can use the same number for two different characters, or use different numbers for the same character. Any given computer may need to support many different encodings; yet, whenever passing data between different encodings or platforms, that data always runs the risk of character corruption from incorrect or incompatible conversion.

## Internationalizing allows applications to

- Provide applications for global markets  
- Interface to internationalized processes  
- Increase portability  
- Reduce development costs  

### What needs to be internationalized?

- Terminal and File I/O
- Dates / Times
- Numbers / Currency
- Searching / Sorting
- Messages / Properties

### How to go about internationalizing an application

- Separate Executable Code from User Interface
- Handle Numbers, Currency, Dates and Times independently of formatting
- Provide for Text Input and Layout
- Allow for Alphabetical Order of Characters
- Allow for Character Format
- Avoid Cultural Assumptions

### The Development Challenges

As different countries use different characters to represent words, some basic problems arise in the context of software development when considering the global market. Here follows some common problems developers need to consider:

- The basic concern is that there are more than 256 characters in the world. Languages such as Cyrillic, Hebrew, Arabic, Chinese, Japanese, Korean, and Thai use characters that are not included in the 256-character ASCII set; but somehow, these characters must be made available.
- It is impossible to store text from different character sets in the same document/record: if each document has its own character set, manual intervention for conversion becomes inevitable.
- The introduction of new characters, such as Euro symbols must be accounted for. The Euro has replaced old European currency symbols; documents containing these symbols have now changed.
  
How can applications interchange data that may include one or more character sets? The solution is to adopt a worldwide usable character set and use a well-conceived strategy that incorporates that character set to produce software products.

### The Development Approaches  

Companies often develop a first version of a program or system to just deal with English. Later, when it becomes necessary to produce the first international version, the product is ‘internationalized’ by going through all the lines of code, translating the literal strings.
The process is time consuming and is not a good long-term strategy. Each new version is expensive, as the painstaking process to identify all the strings, which require translation is repetitive. Because there are multiple versions of the source code, maintenance and support becomes very expensive. Moreover, there is a high probability that a translator may introduce bugs by mistakenly modifying code.

The fundamental advantage of internationalizing software is that the developer is not limited to the number of different languages or countries that you can support. If, after developing the internationalized product and you need to provide the software in another language, it is simply a matter of translating resource files into that language.
By truly internationalizing the product, the software developer is able to:

- Provide applications to global markets;
- Interoperate with external processes;
- Increase systems portability; and
- Reduce development costs.

For applications that will only use the standard ASCII characters, internationalization is not a vital concern. However, for those applications that need to handle characters outside the ASCII range, internationalization is the best medium- and long-range development solution.

### Internationalization and Localization

*Internationalization is the process of producing a globalized product, in terms of both the design and the code, which is independent of the language, script, and culture*.

The design of Internationalized products is to support any language, script, culture, and code pages, through the localization process, with minimal expense and effort. The localization of an internationalized product is possible without any code change, merely by translating text and perhaps supplying new graphics.

When internationalizing a software product, the goal is to develop software independently of the countries or languages of its intended users. The translated software is ready for multiple countries or regions. This completes and reduces the Localization time as the process of internationalization through eliminating the need to examine the source code in order to translate the displayed user strings; it translates the resource files containing the display strings.

### The Process of Internationalizing  

The overriding goal of internationalizing programs is to prepare and ensure the code never needs modification; separate files contain the translatable information. This process involves a number of modifications to the code:

- Move all translatable strings into separate files called resource files, and make the code access those strings when needed. These resource files are completely separate from the main code, and contain nothing but the translatable data.
- Change variable formatting to be language-independent.
- Change sorting, searching, and other types of processing to be language-independent. This means that dates, times, numbers, currencies, and messages call functions to format according to local language and country requirements.
  
Concluding the process gives you an internationalized product.

### The Process of Localizing  

Localization is the process of adapting an internationalized offering to a specific language, script, and culture. A localized product is one that is fully adapted to a country's language and cultural conventions, such as currency, number formats, sorting sequence, and so on.
Localizing an internationalized program involves no changes to the source. Instead, contractors and/or translation agencies modify the files.
The initial cost of producing internationalized code is somewhat higher than localizing to a single market, but the advantage is that you only pay that cost once. The cost of doing an additional localization, once the code is internationalized, is a fraction of the previous cost, and avoids the considerable cost of maintenance and source code control for multiple code versions.

### Code Pages  

The term ‘code page’ refers to any of the many different schemas and standards used to represent character sets for various languages. Unicode has combined the various code pages into the Unicode Standard (which is equivalent to ISO 10646).
Examples of languages and their corresponding code pages:  

| <!----> | <!----> |
| --- | --- |
| English | ASCII |
| French, German | Latin1, Windows1252 |
| Cyrillic | Latin5, Windows1251 |
| Chinese, Japanese, Korean, and Vietnamese | CJKV, Win950, Win932, Win949, Win1258 |

### Locales  

From a geographical perspective, a locale is a place. From a software perspective, a locale is a set of information associated with a place. The locale information includes the name and identifier of the spoken language, sorting and collating requirements, currency usage, numeric display preferences, and text directionality (left-to-right or right-to-left, horizontal or vertical).

Up to three different parts reference specified locales:

- Language code
- Country Code
- Variant Code

Depending on the locale, you can specify

- Only the language code,
- The language code and country code
- Or the language code, country code and variant.

Each locale specifies a resource bundle of localized text, for example:

```
fr_FR_EURO
```

The ‘fr’ is the French language code, the ‘FR’ is the country code; the EURO signifies the use of euro currency.

### Unicode

Unicode is a single-coded character set providing a repertoire for all the languages of the world. Its first version used 16-bit numbers, which allowed encoding for 65,536 characters; further development allowed a repertoire of more than one million characters, requiring 21 bits. Higher bits have been declared unusable to ensure interoperability between UTF encoding schemes; UTF16 cannot encode any code points above this limit. The handling of values above 16 bits is by two 16-bit codes.

- The first Unicode version used 16 bits, which allowed for encoding 65,536 characters.
- Further extended to 32 bits, although restricted to 21 bits to ensure interoperability between UTF encoding schemes.
- Unicode provides a repertoire of more than one million characters.

The 16-bit subset of UCS (Universe Character Set) is known as the Basic Multilingual Plan (BMP) or Plane 0.

Unicode provides a unique number for every character, on every platform, for every program, no matter what the language. Standards such as XML, Java, ECMAScript (JavaScript), LDAP, CORBA 3.0, WML, etc., requires Unicode and is the official way to implement ISO/IEC 10646; supported in many operating systems, all modern browsers, and many other products.

Incorporating Unicode into client-server or multi-tiered applications and websites can offer significant cost savings over the use of legacy character sets. Unicode enables a single software product or a single website to be targeted across multiple platforms, languages and countries without re-engineering, and allows data to be transported through many different systems without corruption.

### Unicode Combining/Composite Characters

Some code points have been assigned to combining characters. A combining character is not a full character by itself; rather, it is an accent or other diacritical mark added to the previous character. This makes it possible to add an accent or other on any character. This capability is particularly important for scientific notation in mathematics.

### Unicode Expanding and Contracting Characters  

Some languages treat certain single characters as two separate characters for collating purposes (expanding), whereas some languages also treat two characters as a single character when collating (contracting).

Contracting In Spanish sort order, ‘ch’ is considered a single letter. All words that begin with ‘ch’ sort after all other words beginning with ‘c’
Expanding In German, ä is equivalent to ‘ae,’ such that words beginning with ä sort between words starting with ‘ad’ and ‘af’.

### Unicode Normalization  

Normalization is the removal of ambiguities caused by precomposed and compatibility characters. There are four different forms of normalization.

| <!----> | <!----> |
| ---       | --- |
| Form D    | Split up (decompose) precomposed characters into combining sequences where possible. |
| Form C    | Use precomposed instead of combining sequences where possible. |
| Form NFKD | Like D but avoid use of compatibility characters (e.g., use ‘fi’ instead of U+FB01 LATIN SMALL LIGATURE FI). |
| Form NFKC | Like C but avoid use of compatibility characters. |

Below is an example of Precomposed vs. Decomposed characters.

``` utf8
Precomposed ü = U+00FC
Decomposed ü = U+0075 + U+0308
```

#### Note  

>UTF-8 encoding requires the use of precomposed characters wherever possible.

### Unicode Universal Character Set and UTF-8

The Universal Character Set, UCS assigns each character not only a code number, but also an official name. A U+ precedes a hexadecimal number representing a Unicode Code Point or (e.g., U+0041 ‘Latin Capital Letter A’).

UTF-8 can represent all possible Unicode code points by byte sequences, which in turn represent different code points. The sequence used for any given character depends on the Unicode number, which represents that particular character. The Universal Character Set has the following properties:

- UCS U+0000 to U+007F is identical to US-ASCII (IISO 646 IRV).
- UCS U+0000 to U+00FF are identical to ISO-8859-1 (Latin-1)
- UCS U+E000 to U+F8FF is reserved for private use.

UTF-8 encoding is a Unicode Translation Format of Unicode. Before UTF-8 emerged, users all over the world had to use various language-specific extensions of ASCII. This made the exchange of files difficult, and application software had to consider small differences between these encodings. Support for these encodings was usually incomplete and unsatisfactory, because the application developers rarely used all these encodings themselves.

### Unicode UTF-8 Properties  

UTF-8 encoding avoids several problems inherent in other encoding systems:

- Files and strings that contain only 7-bit ASCII characters have identical encoding under ASCII and UTF-8.
- ASCII bytes 0x00-0x7F cannot appear as part of any other character.
- Allows easy resynchronization and makes the encoding stateless and guards against the possibility of missing bytes.
- Can encode all possible 231 UCS codes.
- UTF-8 encoded characters may theoretically be up to six bytes long, however 16- bit BMP characters are only up to three bytes long.
- The sorting order of Bigendian UCS-4 byte strings is preserved.
- It never uses the byte 0xFE and 0xFF in the UTF-8 encoding.
- UTF-8 is also much more compact than other encoding options, because characters in the range 0x00-0x7f still only use one byte.
- Use only the shortest possible multi byte sequence that can represent the code point of the character.
- In multi byte sequences, the number of leading one bit in the first byte is identical to the number of bytes in the entire sequence.
- Unicode represents a unique character by a unique 32-bit integer. Hence using UTF-8 encoding avoids problems which would arise if using 16 or 32 bit character byte streams, as the normal C string termination byte is a zero, thus byte streams could become prematurely truncated.

### International Components for Unicode (ICU)

International Components for Unicode (ICU) is IBM’s open source package for cross-platform Unicode library enablement for C/C++ products. ICU provides functions for formatting numbers, dates, times, currencies according to locale conventions, and similarly, ICU provides code and data to handle the complexities of native language collation, searching, and other processes. It also provides a mechanism for accessing strings from resource files, whereby sharing common strings across countries that have the same language.
Perhaps the chief benefit of ICU is that it provides fully portable cross-platform libraries. Since the code is portable to a wide variety of platforms, it is possible to share data formats that drive the code, at runtime, across different platforms.
JBASE has implemented additional functions that interface with the ICU API’s; for example, instead of using normal standard jBASE date conversions, it invokes the ICU date conversion procedures, thereby providing fully internationalized date formats.

<PageHeader />

Back to [Internationalization](./../README.md)

<PageFooter />
