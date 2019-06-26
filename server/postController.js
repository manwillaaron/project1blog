const posts = [
    {
        title: 'hello world',
        image: "https://images.unsplash.com/photo-1535402803947-a950d5f7ae4b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" ,
        content: 'This is the first blog post',
        timeStamp:'todays date',
        id : 0
    }
]

let id = 1

module.exports = {
    allPosts(req,res){
        res.status(200).send(posts)
    },
    
    createPost(req,res){
        let {title, content,image} = req.body
        let timeStamp = new Date()
        let newPost = {
            title,
            image,
            content,
            timeStamp,
            id: 1
        }
        id++;
        posts.push(newPost)
        res.status(200).send(posts)
    },
    updatePost(req,res){
        
        let {id} = req.param
        let {newTitle, newContent, newImage} = req.query
        let index = posts.indexOf( post => post.id === +id)
        let originalId = posts[index].id
            posts[index] = { 
                newTitle,
                newContent, 
                newImage,
                originalId}
            res.status(200).send(posts)
        },

    deletePost(req,res){
        let {id} = req.param
        let index = posts.indexOf( post => post.id === +id)
         if(posts[index].id === id){
             posts.splice(index, 1)
         }
         res.status(200).send(posts)

    }

    
    }