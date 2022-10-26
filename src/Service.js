const Post = require('../models/Post.model')

//Queries
getAllPosts = async () => {
    return await Post.find()
}

getPost = async (parent, { id }, context, info) => {
    return await Post.findById(id)
}

//Mutations
createPost = async (parent, args, context, info) => {
    const {title,description} = args.post
    const post = new Post({ title, description })
    await post.save()
    return post
}

updatePost = async (parent, args, context, info) => {
    const { id } = args
    const { title, description } = args.post
    return await Post.findByIdAndUpdate(id,{ title,description }, {new:true})
}

deletePost = async (parent, args, context, info) => {
        const { id } = args
        return await Post.findByIdAndDelete(id)
}

module.exports = { createPost, updatePost, deletePost, getAllPosts, getPost }