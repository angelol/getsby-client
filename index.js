const { Amplify } = require("@aws-amplify/core")
const { graphqlOperation, GraphQLResult } = require("@aws-amplify/api-graphql")
const API = require("@aws-amplify/api-graphql").default
const { AdminGetReceiptsWithGastronomyQuery, GetGastronomyQuery } = require('./graphql-operations')
const { Auth } = require('@aws-amplify/auth')

const { envDemo: Config } = require('./config')
// Uncomment the following line for live settings
// const { envProd: Config } = require('./config')

// Please fill out these values
const USERNAME = ''
const PASSWORD = ''
const RESTAURANT_UUID = '4432632d-bbf5-48f9-9e6e-cc99ff2d2c6a'

async function main() {
  try {
    const orders = await get_orders()
  } catch(e) {
    console.log(e)
  }
}

async function get_orders() {
  Amplify.configure({
    Auth: {
      identityPoolId: Config.identityPoolId,
      region: Config.region,
      userPoolId: Config.userPoolId,
      userPoolWebClientId: Config.userPoolWebClientId,
      mandatorySignIn: false,
    },
    API: {
      graphql_endpoint: Config.graphqlEndpoint,
      graphql_endpoint_iam_region: Config.region,
    },
  })
  await Auth.signIn(USERNAME, PASSWORD);
  const { data } = await API.graphql(
    graphqlOperation(AdminGetReceiptsWithGastronomyQuery, {
      params: {
        user_uuid: RESTAURANT_UUID,
        status: ["RECEIVED", "ACCEPTED", "READY"]
      },
    })
  )
  return data  
}

main()