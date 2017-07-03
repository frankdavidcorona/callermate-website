const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const options = {
    AWSConfigJSON: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
        region: 'us-east-1'
    }
};

module.exports = {

    app: function () {
        const app = express();
        const indexPath = path.join(__dirname, '/public/index.html');
        const publicPath = express.static(path.join(__dirname, 'public'));

        app.use(bodyParser.json({limit: '50mb'}));
        app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
        app.use('/public', publicPath);

        //Root
        app.get('/', function (_, res) {
            res.sendFile(indexPath)
        });

        // Catch all redirect to index.html
        app.get('*', function (req, res) {
            res.sendFile(indexPath)
        });

        return app
    }
};
