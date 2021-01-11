
const envDemo = {
  stage: "demo",
  graphqlEndpoint: "https://v2-demo.api.gets.by/graphql",
  region: "eu-central-1",
  identityPoolId: "eu-central-1:dece8f0a-07f4-4135-bf56-ce8188b29494",
  userPoolId: "eu-central-1_6PvnyTilK",
  userPoolWebClientId: "3vvhm64dn6dpme036kja8o4uk3",
}
const envDev = {
  stage: "dev",
  graphqlEndpoint: "https://v2-dev.api.gets.by/graphql",
  region: "eu-central-1",
  identityPoolId: "eu-central-1:541ebaf6-bbd2-4383-81be-ff58904831a1",
  userPoolId: "eu-central-1_RETO432t8",
  userPoolWebClientId: "5nbnnt9ft4792h04grncuh065a",
}

const envProd = {
  stage: "production",
  graphqlEndpoint: "https://v2.api.gets.by/graphql",
  region: "eu-central-1",
  identityPoolId: "eu-central-1:6c1bf450-cfad-4cdb-aa01-20bf80b9bd1a",
  userPoolId: "eu-central-1_ZRmQQzc4G",
  userPoolWebClientId: "49ds79t4ovahqsu6898u4pd3o1",
}

module.exports = {
  envDemo,
  envDev,
  envProd,
}
