var VisualRecognitionV3 = require('watson-developer-cloud/visual-recognition/v3');
var api_key = '16f8bd0f53ff51512e14553068f9883d8f86ecdb';
var visual_recognition = new VisualRecognitionV3({
  api_key: api_key,
  version_date: '2016-05-19'
});

module.exports = function(Note) {
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
};
