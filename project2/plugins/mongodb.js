'use strict'

const fp = require('fastify-plugin')

const {
    MONGO_USERNAME,
    MONGO_PASSWORD,
    MONGO_HOSTNAME
} = process.env

/**
 * This plugins adds some utilities to handle http errors
 *
 * @see https://github.com/fastify/fastify-sensible
*/
module.exports = fp(async function (fastify, opts) {
    const url =`mongodb://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_HOSTNAME}:27017/?authMechanism=DEFAULT`
    console.log(url)
  
    fastify.register(require('@fastify/mongodb'), {
      forceClose: true,
      url: url
    })
})