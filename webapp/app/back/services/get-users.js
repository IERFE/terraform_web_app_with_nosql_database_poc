const AWS = require('aws-sdk');

// Promisify AWS SDK
AWS.config.setPromisesDependency(require('bluebird'));

// Set the region
AWS.config.update({region: 'eu-central-1'});

function getUsers() {
    // Create DynamoDB service object
    var ddb = new AWS.DynamoDB({apiVersion: '2012-08-10'});

    var params = {
        TableName: 'Users'
    };

    return ddb.scan(params).promise();
}

module.exports = getUsers;
