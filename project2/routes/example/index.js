'use strict'

module.exports = async function (fastify, opts) {
  fastify.get('/', async function (request, reply) {
    return 'this is an example'
  })
  
  fastify.post('/', async function (request, reply) {
      const test = this.mongo.client.db('test')
      const article = test.collection('article')
      await article.insertOne({ 'title': 'devops 8 team' })
  
      const result = await article.find({}).toArray();
  
      reply.send(result)
    })
}

