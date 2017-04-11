const AWS = require('aws-sdk')
AWS.config.update({region:'us-west-2'})
const ssm = new AWS.SSM()

const env = (!process.env.NS_ENV) ? 'dev' : process.env.NS_ENV


module.exports = {
  variables: function(cb){
    var params = {
      Names: [
        `${env}.test.API_TOKEN`,
        `${env}.test.DOMAIN`,
        `${env}.test.PASSWORD`
      ],
      WithDecryption: true
    }

    ssm.getParameters(params, (err, data) => {
      if (err) {
        console.log(err, err.stack)
        cb(err)
      } else {
        process.env['API_TOKEN'] = data.Parameters[0].Value
        process.env['DOMAIN'] = data.Parameters[1].Value
        process.env['PASSWORD'] = data.Parameters[2].Value
        cb(null, data)
      }
    })
  }
}
