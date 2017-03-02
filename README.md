# KS2 Technologies Bluemix API

> Prereq: navigate to the `notes-demo-deploy` folder in your terminal or command prompt.

## Advanced Loopback Example and... Go!
Now that we have deployed our notes application to Bluemix we are getting requests from our API consumers that they would like to add images to their notes. We would also like to add a feature to query a note by the contents of the uploaeded image. So we are going to use the Watson Visual Recognition service we just created in bluemix to give us a summary of what is in the photos being uploaded with new notes.

There are three things we need to do to the API we just created.

1. We need to install the Watson SDK to our project
2. We need to update our Notes data model
3. We need to modify our create notes endpoint

### 1. Install Watson SDK
To install the Watson SDK to our Loopback project we will need to run this command in the top level folder of our loobackproject (should be in the ~/lbproject/notes-demo/ path)
```
> npm install watson-developer-cloud --save
```

### 2. Update our notes model
Next we will need to update our Notes model to accept an image_url passed in by the API consumer.

Open the `common/models/note.json` file and add the following property.

```
"image_url": {
  "type": "string"
}
```
Your `note.json` file should now look like this

```
{
  "name": "Note",
  "properties": {
    "title": {
      "type": "string",
      "required": true
    },
    "content": {
      "type": "string"
    },
    "image_url": {
      "type": "string"
    }
  }
}

```
### 3. Add logic to our HTTP POST endpoint
Now we are ready to over ride the deafult HTTP POST endpoint with some new logic.

Open the `common/models/note.js` file and add the following to the top of the file.

```
var VisualRecognitionV3 = require('watson-developer-cloud/visual-recognition/v3');
var api_key = 'YOUR WATSON VISUAL RECOGNITION API HERE';
var visual_recognition = new VisualRecognitionV3({
  api_key: api_key,
  version_date: '2016-05-19'
});
```
> NOTE: Replace the api_key variable with the api key you generated in Bluemix

Now we will add the logic for our HTTP POST endpoint

```
// Disable Post method
Note.disableRemoteMethodByName('create');
Note.remoteMethod('createWithImage', {
    accepts: [
      {arg: 'body', type: 'Note', required: true, description: 'Model instance data', http: { source: 'body' }}
    ],
    http: {path: '/', verb: 'post'},
    description: 'Create a new instance of the model and persist it into the data source.',
    returns: {arg: 'data', type: 'Note'}
});

var classifyImage = function (body, cb) {
    var params = {
        url: body.image_url
    };
    visual_recognition.classify(params, function(err, data) {
        if(err) cb(err, null);
        else {
            var imageData = data.images[0].classifiers[0].classes[0].class;
            body.image_subject = imageData;
            Note.create(body, cb);
        }
    });
} 

Note.createWithImage = function (body, cb) {
    // If body has an image url classify image
    if(body.image_url != null)
        classifyImage(body, cb);
    else 
        Note.create(body, cb);
}
```
This code basically checks to see if a new note sent via HTTP POST request contains a image_url and if it does then it adds the image_subject to the node so our app can query based on image subject later.

This first part of the code is overriding the custom HTTP POST endpoint

```
// Disable Post method
Note.disableRemoteMethodByName('create');
Note.remoteMethod('createWithImage', {
    accepts: [
      {arg: 'body', type: 'Note', required: true, description: 'Model instance data', http: { source: 'body' }}
    ],
    http: {path: '/', verb: 'post'},
    description: 'Create a new instance of the model and persist it into the data source.',
    returns: {arg: 'data', type: 'Note'}
});
```

The `classifyImage` function is running our images through the Watson Visual Recognition service to get a textual representation of what is in the image.

```
var classifyImage = function (body, cb) {
    var params = {
        url: body.image_url
    };
    visual_recognition.classify(params, function(err, data) {
        if(err) cb(err, null);
        else {
            var imageData = data.images[0].classifiers[0].classes[0].class;
            body.image_subject = imageData;
            Note.create(body, cb);
        }
    });
}
```

The `createWithImage` function is the entry point for our HTTP POST method we decalired in our remote method.

```
Note.createWithImage = function (body, cb) {
    // If body has an image url classify image
    if(body.image_url != null)
        classifyImage(body, cb);
    else 
        Note.create(body, cb);
}
```

### Test your new endpoint
Now that we have registered our new endpoint we will want to test out our application locally. To run your project locally run the following command.

```
> npm start
```

Once your application starts open the following URL in your browser [http://localhost:3000/explorer](http://localhost:3000/explorer)

Open the `Notes` endpoint on the webpage

![open-notes](http://ks2inc.com/wp-content/uploads/2017/03/screencapture-0-0-0-0-3000-explorer-1488396868003.png) 

Select the `POST Notes` endpoint you created and paste the following json into the body section and click the `Try it out!` button.

```
{
  "title": "New Note",
  "content": "Note should contain image subject",
  "image_url": "https://camo.githubusercontent.com/e53ee329763ec3bdef43a913fe414e019de53610/68747470733a2f2f76697375616c2d7265636f676e6974696f6e2d64656d6f2e6d79626c75656d69782e6e65742f696d616765732f73616d706c65732f352e6a7067"
}
```

![Watson](http://ks2inc.com/wp-content/uploads/2017/03/screencapture-0-0-0-0-3000-explorer-1488436424379.png)

As you can see we have successfully added an image subject to our Note.

Now we can query this Note based on the contents of the image with in the Note with our HTTP GET endpoint.

Copy this into the filter of the HTTP GET endpoint

```
{"where": {"image_subject": {"like":"dog"}}}
```

As you can see it gave us back our not becaue the image subject contains the word dog.