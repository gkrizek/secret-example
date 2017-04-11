const AWS = require('aws-sdk')
AWS.config.update({region:'us-west-2'})
const ssm = new AWS.SSM()

const env = (!process.env.NS_ENV) ? dev : process.env.NS_ENV

var params = {
  Names: [
    `${env}.test.API_TOKEN`,
    `${env}.test.PASSWORD`,
    `${env}.test.DOMAIN`
  ],
  WithDecryption: true
}

ssm.getParameters(params, (err, data) => {
  if (err) {
    console.log(err, err.stack)
    process.exit(1)
  } else {
    process.env['API_TOKEN'] = data.Parameters[0].Value
    process.env['PASSWORD'] = data.Parameters[1].Value
    process.env['DOMAIN'] = data.Parameters[2].Value
  }
})
