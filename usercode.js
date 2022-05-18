var AWS = require('aws-sdk');

module.exports = async ({
  region = 'eu-west-1',
  accessKeyId,
  secretAccessKey,
  functionName,
  payload,
}) => {
  const lambda = new AWS.Lambda({
    region,
    credentials: { accessKeyId, secretAccessKey },
  });

  const params = {
    FunctionName: functionName,
    // ClientContext: 'STRING_VALUE',
    InvocationType: 'RequestResponse',
    LogType: 'None',
    Payload: JSON.stringify(payload || {}),
    // Qualifier: 'STRING_VALUE'
  };

  const lambdaResult = await lambda.invoke(lambdaParams).promise();
  const result = JSON.parse(lambdaResult.Payload);

  return result;
};
