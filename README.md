# KS2 Technologies Bluemix API

> Prereq: copy the `notes-demo` folder to a new folder called `notes-demo-deploy`

## Deploy to Bluemix and... Go!
Go ahead and just edit your existing project with the following information.

### 1. Create your deployment file
We are going to use CloudFoundry to deploy our Loopback application to a `node.js` runtime out on Bluemix. So you are going to need to create a `manifest.yml` file in your loopback project directory that looks like this.

```
applications:
- path: .
  memory: 256M
  instances: 1
  domain: mybluemix.net
  name: notes-demo-<Your Last Name>
  host: notes-demo-<Your Last Name>
  disk_quota: 512M

``` 
When we run the CloudFoundry command to push our code to Bluemix it will look for this `manifest.yml` file and use it to build our application server. CloudFoundry will take care of all of the necessary components for creating a `node.js` server.

### 2. Deploy your application
Once you have created your `manifest.yml` file you are ready to deploy your app to bluemix. 

We will start by opening your terminal or command prompt app.

Once this is opened navigate to the directory your loopback application is in. 

> Note: Make sure you are in the `notes-demo-deploy` folder in your git repository.

Now you will need to double check that you are logged in to the CloudFoundry cli by typing the following command.

```
> cf login
```

This command will take you through the login process.

```
> cf login
API endpoint: https://api.ng.bluemix.net

Email> djarvis@ks2inc.com

Password>
Authenticating...
OK

Select an org (or press enter to skip):
1. org1
2. demoOrg
3. org3

Org> 2
Targeted org demoOrg

Select a space (or press enter to skip):
1. space1
2. space2
3. internal_sandbox
4. space3

Space> 3
Targeted space internal_sandbox



API endpoint:   https://api.ng.bluemix.net (API version: 2.54.0)
User:           djarvis@ks2inc.com
Org:            demoOrg
Space:          internal_sandbox
```
Once you have logged in your are ready to deploy your app to Bluemix.

```
> cf push
```

This command will deploy your app to Bluemix with the specifications you supplied in your `manifest.yml` file. Your output should look like this when it is complete.

```
Using manifest file <Your Path>/notes-demo-deploy/manifest.yml

Updating app notes-demo-app in org ks2_technologies / space internal_sandbox as djarvis@ks2inc.com...
OK

Using route notes-demo-app.mybluemix.net
Uploading notes-demo-app...
Uploading app files from: <Your Path>/notes-demo-deploy
Uploading 10.7M, 10851 files
Done uploading
OK

Stopping app notes-demo-app in org ks2_technologies / space internal_sandbox as djarvis@ks2inc.com...
OK

Starting app notes-demo-app in org ks2_technologies / space internal_sandbox as djarvis@ks2inc.com...
Downloading xpages_buildpack...

...

0 of 1 instances running, 1 starting
0 of 1 instances running, 1 starting
1 of 1 instances running

App started


OK

App notes-demo-app was started using this command `./vendor/initial_startup.rb`

Showing health and status for app notes-demo-app in org ks2_technologies / space internal_sandbox as djarvis@ks2inc.com...
OK

requested state: started
instances: 1/1
usage: 256M x 1 instances
urls: notes-demo-app.mybluemix.net
last uploaded: Wed Mar 1 18:42:44 UTC 2017
stack: cflinuxfs2
buildpack: SDK for Node.js(TM) (ibm-node.js-4.7.2, buildpack-v3.10-20170119-1146)

     state     since                    cpu    memory           disk             details
#0   running   2017-03-01 12:44:17 PM   0.0%   111.4M of 256M   139.5M of 512M
```

After your app is deployed to Bluemix you you view and test out your API at the `host` you had created in your `manifest.yml` file.

- https://notes-demo-<Your LastName>.mybluemix.net/explorer
- This is how mine looks [https://notes-demo-app.mybluemix.net/explorer](https://notes-demo-app.mybluemix.net/explorer)