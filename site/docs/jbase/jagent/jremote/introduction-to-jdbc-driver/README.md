# INTRODUCTION TO jDBC DRIVER

**Created At:** 10/2/2017 11:49:27 PM  
**Updated At:** 4/3/2018 7:26:16 PM  
**Original Doc:** [introduction-to-jdbc-driver](https://docs.jbase.com/38991-jremote/introduction-to-jdbc-driver)  


The jBASE JDBC 2.0 Driver is a jBASE component implementing the JDBC API. The JDBC API is part of the JavaTM 2 Platform Standard Edition 5.0 (J2SETM).

The following diagrams show two of the most common deployment scenarios. In both cases, the JDBC API implemented by the jBASE JDBC 2.0 Driver provides client applications with the ability to perform SQL queries against a jBASE server.

- [Deploying jDBC Driver](deploying-the-jdbc-driver)
- [jDBC API](com_jbase_jdbc_package-summary)




# TWO-TIER MODEL

This model represents deployment scenarios where a Java Client Application has the responsibility to create and manage connection, transaction and security resource.



![](http://www.jbase.com/r5/knowledgebase/manuals/3.0/30manpages/man/j5_JDBC_files/image002.gif)





# **THREE-TIER MODEL**

A three-tier deployment scenario would often involve an application server hosting different application components as e.g EJBs, servlets, etc. Deploying the jBASE JDBC Driver on a JEE application server does not only allow those applications to perform SQL queries against jBASE, but also allows the application server to manage its connections, transactions and security aspects.



![](http://www.jbase.com/r5/knowledgebase/manuals/3.0/30manpages/man/j5_JDBC_files/image004.gif)




