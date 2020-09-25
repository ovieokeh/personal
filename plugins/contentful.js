const contentful = require('contentful')

const config = {
  space: process.env.cfSpaceId,
  accessToken: process.env.cfAccessToken,
}

export const client = contentful.createClient(config)
