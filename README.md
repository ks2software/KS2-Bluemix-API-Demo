# KS2 Technologies Bluemix API

> Prereq: navigate to the `notes-demo-deploy` folder in your terminal or command prompt.

## Advanced Loopback Example and... Go!
For this advanced tutorial we are going to show how to create a custom API endpoint in the Notes section that adds the weather to a new note.

### 1. Install request node module
To get the current weather we are going to make an API call to a free weather API service called [Open Weather Map](https://openweathermap.org). To perform this API request we are going to need to install the [`request`](https://www.npmjs.com/package/request) node module with the following command.

```
> npm install request --save
```

### 2. Create a custom endpoint
Now we are going to create a custom Notes endpoint called weather that is going to allow us to submit a new note and in the background append todays weather to the note. 

First we need to register a remote method with our Loopback `Notes` endpoint. Open the `common/models/notes.js` file. Replace the contents of the `notes.js` file with the following

> Note: replace the key variable with the key provided

```
var request = require('request');

module.exports = function(Note) {
	Note.remoteMethod('weather', {
		accepts: [
	      {arg: 'body', type: 'object', http: { source: 'body' }}
	    ],
	    http: {path: '/weather', verb: 'post'},
	    returns: {arg: 'response', type: 'object'}
	});
	
	Note.weather = function (body, cb) {
	   var key = '';
		var url = 'http://api.openweathermap.org/data/2.5/weather?zip=66214,us&units=imperial&appid=' + key;
		request(url, function(err, response, data) {
			if(err) cb(err, null);
			else {
				data = JSON.parse(data);
				body.weather = data.main;
				Note.create(body,cb);
			}
		});
	}

};
```
This new block of code registers a new `POST Notes` endpoint that accepts a json body, queries the current weather from open weather, appends weather data to the notes body and returns the response from creating a new `Note`.

### Test your new endpoint
Now that we have registered our new endpoint we will want to test out our application locally. To run your project locally run the following command.

```
> npm start
```

Once your application starts open the following URL in your browser [http://localhost:3000/explorer](http://localhost:3000/explorer)

Open the `Notes` endpoint on the webpage

![open-notes](http://ks2inc.com/wp-content/uploads/2017/03/screencapture-0-0-0-0-3000-explorer-1488396868003.png) 

Select the `POST Notes/weather` endpoint you created and paste the following json into the body section and click the `Try it out!` button.

```
{
  "title": "New Note",
  "content": "Note should contain weather"
}
```

![weather](http://ks2inc.com/wp-content/uploads/2017/03/screencapture-localhost-3000-explorer-1488397274709.png)

As you can see we have successfully posted a Note and the current weather data has been appended to our Note.