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
* [Cloudfoundry](https://github.com/cloudfoundry/cli#downloads)

## 1. Sign up for bluemix account
Register for a new [Bluemix account](https://console.ng.bluemix.net/registration/?target=%2Fdashboard%2Fapps). You should be able to create an account that will allow you to use try Bluemix for 30 days for free.

### Log in to bluemix console
Now that you have created and verified your account lets login to the [Bluemix dashboard](https://console.ng.bluemix.net/)

Once you have logged in we are going to spin up a Watson service so you will need to click the create app button.

![create](http://ks2inc.com/wp-content/uploads/2017/03/Create-app.png)

Select the Watson section on the left side of the screen and then select the Visual Recognition service.

![watson-select](http://ks2inc.com/wp-content/uploads/2017/03/Watson-Service.png)

By default the free tier is selected so you can hit the create button

![watson-create](http://ks2inc.com/wp-content/uploads/2017/03/Watson-Create.png)

Once your watson service has been created save your Watson credentials to a note on your computer. (or leave the tab open)

![watson-credentials](http://ks2inc.com/wp-content/uploads/2017/03/screencapture-console-ng-bluemix-net-services-2906cb9b-d878-4db7-a1e6-820dfd01266a-1488437127410.png)

## 2. Install Node.js and CloudFoundry
Now that we have our Bluemix account set up we will get our local enviroments set up to test and deploy our API.

First install [Node.js](https://nodejs.org/en/download/).

Then install [Cloudfoundry](https://github.com/cloudfoundry/cli#downloads)


## 3. Development setup
Once you have `node.js` and `cloudfoundry` installed you will need to install a few global `npm` package.

#### Step 1
Open your terminal / command prompt app on your Mac or Windows computer 

#### Step 2 
Create new directory for our project

```
MacOS
> mkdir ~/lbproject
> cd ~/lbproject
Windows
> mkdir ~\lbproject
> cd ~\lbproject
```

#### Step 3
Run the following command to install loopback

```
npm install loopback -g
```
The `-g` flag installs the loopback commandline interface globally on your computer. 

> NOTE: if you get a permission denied after the install finishes it means you need to run as admin / sudo user so try this command `sudo npm install loopback -g`

### Dev set up complete

## Following Along?
If you have installed all of the componets to your computer and you would like to follow along with the demonstration just pull or download the step 1 branch from this repository. This will initalize your folder with this git repository and allow you to pull from another step in the excersize if you get lost.

#### I'm lost what should I do?
Not to worry just find or ask what step we are on and then pull or download that branch from the github and run this command in the folder you have downloaded the branch into.

```
> npm install
``` 

