# KS2 Technologies Bluemix API

You did it you have made it to step one of the KS2 Bluemix API Demo. Your mothers will be so proud. (Print this page to hang on fridge) 

## And... Go!
### First things first
At this point you should have `node.js` installed on your computer and the `loopback` npm package installed as a global node module.

### 1. Generating the API project
Now we can begin setting up our project. We will start by typing in the command that will generate our loopback project.

```
> lb
```
This command will take you through the loopback project generator. We are going to use the following information to generate our project.

- name             : notes-demo
- directory        : notes-demo (or just hit enter)
- version          : use arrow keys to select `3.x (current)`
- application type : use arrow keys to select the `notes` default app

Your terminal should loop something like this

```

     _-----_
    |       |    ╭──────────────────────────╮
    |--(o)--|    │  Let's create a LoopBack │
   `---------´   │       application!       │
    ( _´U`_ )    ╰──────────────────────────╯
    /___A___\   /
     |  ~  |
   __'.___.'__
 ´   `  |° ´ Y `

? What's the name of your application? notes-demo
? Enter name of the directory to contain the project: notes-demo
   create notes-demo/
     info change the working directory to notes-demo

? Which version of LoopBack would you like to use? 3.x (current)
? What kind of application do you have in mind? notes (A project containing a basic working example, including a memory database)
```
Once you have filled out this infromation and hit enter your app should have downloaded all of the necessary dependencies and generated all of the files you need to run this api.

### 2. Running the API Locally

At this point you now have a fully functioning api. To test our your api move from your current terminal directory into the `notes-demo` directory with the following command

```
> cd notes-demo
```

Then run the api by typing the following command

```
> npm start
```

Once your project has started you will see the server start message that looks like this

```
> notes-demo@1.0.0 start <YOUR-PATH>/notes-demo
> node .

Web server listening at: http://0.0.0.0:3000
Browse your REST API at http://0.0.0.0:3000/explorer
```

### 3. Testing your API locally
Now to view your api endpoints open `http://0.0.0.0:3000/explorer` in whatever browser you would like.

This should show you a webpage that looks something like this
![notes-demo](http://ks2inc.com/wp-content/uploads/2017/03/screencapture-0-0-0-0-3000-explorer-1488385860414.png)

This will allow you to explore your newly created API. Lets click on the `Note` section to reveal all of your `Note` related endpoints.

![note-expanded](http://ks2inc.com/wp-content/uploads/2017/03/screencapture-0-0-0-0-3000-explorer-1488386024443.png)

To create a new note with your new API click on the `POST Notes` endpoint and input the following json object into the data section.

```
{
  "title": "New Note",
  "content": "This is something I wanna remember"
}
```
Once you have entered the json payload into the data section click the `Try it out!` button. This will store a new `Note` in your API datasource. Your screen will look something like this.

![note-saved](http://ks2inc.com/wp-content/uploads/2017/03/screencapture-0-0-0-0-3000-explorer-1488386640620.png)

Now that we have created a note we can query for this note using the `GET Notes` endpoint.

![note-fetch](http://ks2inc.com/wp-content/uploads/2017/03/screencapture-0-0-0-0-3000-explorer-1488386845378.png)

> NOTE: To stop this local server got to your terminal window and hit `ctl + c`

## Section 1 Complete
You have now completed creating your first API. In the next Section we are going to learn how to deploy this application as a `node.js` in bluemix. To get to the next section select the `Section-2` branch in the branch dropdown. 

## General notes about the API project

### Data source
In a loopback project your data source is declaired in the `server/datasources.json` file. Loopback takes these config files and turnes them into javascript code that accesses your database. 