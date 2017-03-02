# KS2 Technologies Bluemix API

Welcome to the KS2 Technologies Bluemix API demo / follow along. We are going to be demonstrating how easy it is to create and deploy an API to bluemix. 

##### What is an API?
An API is an application programming interface that allows other developers or API consumers to access data using standerd HTTP protocols.

##### What is Loopback?
Loopback is a configuration over coding appoach to creating secure CRUD based APIs to expose your data.

##### What is Bluemix?
Bluemix is a PaaS that allows developers to create applications in the cloud without the hassle of maintaining hardware infrastructure or networking.

> Note: If you have installed all the dependencies and would like to get started or you are looking for a specific step just select the branch dropdown and select the step you are looking for. 

##Required Technologies
* [Bluemix account](https://console.ng.bluemix.net/registration/?target=%2Fdashboard%2Fapps)
* [Node.js](https://nodejs.org/en/download/)
* [cloudfoundry](https://github.com/cloudfoundry/cli#downloads)

## Sign up for bluemix account
Regisert for a new [Bluemix account](https://console.ng.bluemix.net/registration/?target=%2Fdashboard%2Fapps). You should be able to create an account that will allow you to use try Bluemix for 30 days for free.

## How to set up your computer
Once you have `node.js` and `cloudfoundry` installed you will need to install a few global `npm` package.

#### Step 1
Open your terminal / command prompt app on your Mac or Windows computer 

#### Step 2
Run the following command to install loopback

```
npm install loopback -g
```
The `-g` flag installs the loopback commandline interface globally on your computer. 

> NOTE: if you get a permission denied after the install finishes it means you need to run as admin / sudo user so try this command `sudo npm install loopback -g`

## Following Along
If you have installed all of the componets to your computer and you would like to follow along with the demonstration just pull or download the step 1 branch from this repository. This will initalize your folder with this git repository and allow you to pull from another step in the excersize if you get lost.

#### I'm lost what should I do?
Not to worry just find or ask what step we are on and then pull or download that branch from the github and run this command in the folder you have downloaded the branch into.

```
> npm install
``` 

