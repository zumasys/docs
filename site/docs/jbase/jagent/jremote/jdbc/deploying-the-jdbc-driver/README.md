# Deploying the JDBC driver

**Created At:** 10/2/2017 11:54:53 PM  
**Updated At:** 4/3/2018 7:21:38 PM  
**Original Doc:** [deploying-the-jdbc-driver](https://docs.jbase.com/39228-jdbc/deploying-the-jdbc-driver)  
**Original ID:** 279141  
**Internal:** Yes  


# Description

The jBASE JDBC Driver is packaged as a Java Archive (jar) file.

To use the JDBC Driver from a **non-managed** client application, it necessary to place this archive inside your CLASSPATH.

To deploy this archive on a **managed**environment it is necessary to configure a deployment descriptor specific to the application server.



# JBoss Deployment

The following deployment descriptor is used by JBoss to load the jBASE JDBC Driver, as specified by “driver-class”. This file should be modified according to deployment requirements.

```
jbasejdbc-ds.xml
<?xml version="1.0" encoding="UTF-8"?>
<!--========================================================================== -->
<!--                                                                           -->
<!--  JBoss deployment descriptor for jBASE JDBC Data Sources                  -->
<!--                                                                           -->
<!-- ========================================================================= -->
 
<datasources>
    <!—jBASE JDBC Data Source -->
    <local-tx-datasource>
        <jndi-name>jdbc/jBaseJdbcDS</jndi-name>
        <connection-url>
            jdbc:jbase:thin:@127.0.0.1:20002/mytestaccount    
        </connection-url>
        <driver-class>
            com.jbase.jdbc.driver.JBaseJDBCDriver
        </driver-class>
        <user-name>test</user-name>
        <password>test</password>
    </local-tx-datasource>
</datasources>
```



After configuring the deployment descriptor, follow the steps below to deploy the jBASE JDBC driver:

- Copy the jBASE jDBC Driver (jbasejdbc.jar) archive to the *lib* directory of the JBoss *default*configuration
- Copy the JBoss deployment descriptor to the *deploy* directory of the JBoss *default* configuration

