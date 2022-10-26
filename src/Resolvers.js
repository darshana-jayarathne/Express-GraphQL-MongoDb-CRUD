const { createPost, updatePost, deletePost, getAllPosts, getPost} = require("./Service")

const resolvers = {
    Query: {
        hello: () => {
            return 'hello world'
        },
        getAllPosts,
        getPost
    },
    Mutation: {
        createPost,
        updatePost,
        deletePost
    }
}

module.exports = { resolvers }