# EJBCA performance tests


This project implements performance tests on EJBCA instances using GitHub workflows.  

The workflow runs on any self-hosted Linux runner added to the repo.  
It will install JMeter on the runner's file system and run the JMeter test defined on this [JMeter test plan](/tests/ejbca-performance-test.jmx). 
This test creates a key with the chosen algorithm and a CSR based on that key. EJBCA API /ejbca/ejbca-rest-api/v1/certificate/pkcs10enroll is used to create the certificates.  


<br><br>
| **Figure 1: GitHub runner and EJBCA on the same server.** |
|:--:|
| ![Same server](images/load_test_1.png) |



<br><br>
| **Figure 2: GitHub runner and EJBCA on different servers** |
|:--:|
| ![Different servers](images/load_test_2.png) |



<br><br>
| **Figure 3: Choose in which EJBCA will run the workflow** |
|:--:|
| ![Choose EJBCA](images/load_test_3.png) |



<br><br>

## Pre-requisites

 - The self-hosted runner must have installed jq tool
```
sudo apt-get install jq
```
 - `/ejbca/ejbca-rest-api/v1/certificate` endpoint must be enabled on EJBCA  

 - A new branch with name "gh-pages" must be created to store reports


## Get Started

1. Go to repository settings and choose [Actions | Runners](https://github.com/GryphusID/ejbca-performance-tests/settings/actions/runners).  
Follow the [recipe](https://github.com/GryphusID/ejbca-performance-tests/settings/actions/runners/new) to create a new self-hosted runner on your premises.  
Add a new label (example: prod) to that runner.  

2. Go to [Environments](https://github.com/GryphusID/ejbca-performance-tests/settings/environments) and create a [new environment](https://github.com/GryphusID/ejbca-performance-tests/settings/environments/new) with exactly the same name as the label added to the runner in the previous step.
   - Add one environment secret with the name "EJBCA_KEYSTORE_PASS". This secret must be configured with the EJBCA keystore password as it was configured on the property superadmin.password at the EJBCA web.properties file
   - Add 3 environment variables
     - EJBCA_HOSTNAME: with the hostname of the server where EJBCA is installed (example: "localhost" if both github runner and EJBCA are installed on the same server)  
     - EJBCA_P12_KEYSTORE_FILE: path on the GitHub ruuner server, where p12 keystore file are available (example: /opt/ejbca-ce/p12/superadmin.p12)  
     - EJBCA_PORT: EJBCA HTTPS API port (example: 8443)

3. Go to Actions and in the "Actions" list choose [Performance test](https://github.com/GryphusID/ejbca-performance-tests/actions/workflows/performance-test.yml), and then "Run workflow"

4. This workflow is parameterized, and mandatory settings must be filled with:
   - *Environment:* choose the environment (previously configured) where you want to run this test
   - *Number of threads:* number of (parallel) users pretended in this run
   - *Number of certificates per thread:* number of certificates each user must request
   - *Key algorithm:* choose the key algorithm to this run
   - *CA name:* name of CA to issue the certificates available at the EJBCA 
   - *CA profile name:* CA profile name available at the EJBCA  
   - *End user profile name:* end-user profile name available at the EJBCA  
   - *Subject DN:* subject DN. This can be dynamically customized for each user with the character "#".   
   Example: If subject DN =  "/CN=enduser#/O=enduser#_org/C=PT"  
    Subject DN for user 1: /CN=enduser2/O=enduser1_org/C=PT  
    Subject DN for user 2: /CN=enduser2/O=enduser2_org/C=PT  
     Subject DN for user 3: ...  


5. The results are availablr at the [GitHub pages](https://gryphusid.github.io/ejbca-performance-tests/) for this repository.

