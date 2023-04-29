'use strict'

const fp = require('fastify-plugin')

let user = process.env.MONGO_USERNAME
let passwd = process.env.MONGO_PASSWORD
let host = process.env.MONGO_HOSTNAME

/**
 * This plugins adds some utilities to handle http errors
 *
 * @see https://github.com/fastify/fastify-sensible
*/
module.exports = fp(async function (fastify, opts) {
    const url =`mongodb://${user}:${passwd}@${host}:27017/?authMechanism=DEFAULT`
    console.log(url)
  
    fastify.register(require('@fastify/mongodb'), {
      forceClose: true,
      url: url
    })
})

