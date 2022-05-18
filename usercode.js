var AWS = require('aws-sdk');

module.exports = (data) => {
  return { ...data, test: 'test' };
};
