const express = require('express')
const { ApolloServer } = require('apollo-server-express')
const mongoose = require('mongoose')
const dotenv = require('dotenv');

const { typeDefs } = require('./TypeDefs')
const { resolvers } = require('./Resolvers')

dotenv.config()

startServer = async () => {
    const app = express()

    const apolloServer = new ApolloServer({
        typeDefs,
        resolvers,
    })

    await apolloServer.start()

    apolloServer.applyMiddleware({ app })

    await mongoose.connect(process.env.DATABASE_URL, {
        useUnifiedTopology: true,
        useNewUrlParser: true
    })

    console.log('Mongoose connect')
    
    app.listen({ port: 3002 }, () => {
        console.log('Server Running')
    })

    app.use((req, res) => {
        res.send('Hello')
    })
}

startServer()