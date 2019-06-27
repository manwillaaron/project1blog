const postsArr = [
    {
        title: 'hello world',
        image: "https://images.unsplash.com/photo-1535402803947-a950d5f7ae4b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" ,
        content: 'This is the first blog post',
        timeStamp:'todays date',
        id : 14534
    },
    {
        title: 'hello world',
        image: "https://images.unsplash.com/photo-1535402803947-a950d5f7ae4b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" ,
        content: 'This is the first blog post',
        timeStamp:'todays date',
        id : 7345
    },
    {
        title: 'hello world',
        image: "https://images.unsplash.com/photo-1535402803947-a950d5f7ae4b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" ,
        content: 'This is the first blog post',
        timeStamp:'todays date',
        id : 232
    },
    {
        title: 'hello world',
        image: "https://images.unsplash.com/photo-1535402803947-a950d5f7ae4b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" ,
        content: 'This is the first blog post',
        timeStamp:'todays date',
        id : 312
    },
    {
        title: 'hello world',
        image: "https://images.unsplash.com/photo-1535402803947-a950d5f7ae4b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" ,
        content: 'This is the first blog post',
        timeStamp:'todays date',
        id : 4
    },
    {
        title: 'hello world',
        image: "https://images.unsplash.com/photo-1535402803947-a950d5f7ae4b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" ,
        content: 'This is the first blog post',
        timeStamp:'todays date',
        id : 5543
    },
    {
        title: 'hello world',
        image: "https://images.unsplash.com/photo-1535402803947-a950d5f7ae4b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" ,
        content: 'This is the first blog post',
        timeStamp:'todays date',
        id : 654
    }
]

let id = 0

module.exports = {
    allPosts(req,res){
        res.status(200).send(postsArr)
    },
    
    createPost(req,res){
        let {title, content,image} = req.body
        let timeStamp = new Date()
        let newPost = {
            title,
            image,
            content,
            timeStamp,
            id
        }
        id++;
        postsArr.push(newPost)
        res.status(200).send(postsArr)
    },
    updatePost(req,res){
        
        let {id} = req.params
        let {newTitle, newContent, newImage} = req.query
        let index = postsArr.findIndex( post => post.id === +id)
      
        if(newTitle){
            postsArr[index].title = newTitle 
    }
    if(newTitle){
            postsArr[index].title = newTitle 
    }

    if(newImage){
        postsArr[index].image = newImage 
    }

    if(newContent){
    postsArr[index].content = newContent
    }
               
            res.status(200).send(postsArr)
        },

    deletePost(req,res){
        // console.log('hit3')
        let {id} = req.params
        let index = postsArr.findIndex( post => post.id === +id)
         if(postsArr[index].id === +id){
           postsArr.splice(index, 1)
         }
         res.status(200).send(postsArr)

    }

    
    }