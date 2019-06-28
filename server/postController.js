const postsArr = [
    {
        title: 'hello world',
        image: "https://images.unsplash.com/photo-1535402803947-a950d5f7ae4b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" ,
        content: 'This is the first blog post',
        timeStamp:'todays date',
        id : 14534
    },
    {
        title: 'coding is cool',
        image: 'https://images.unsplash.com/photo-1468070454955-c5b6932bd08d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
        content: 'Jump to The Crazy Programmer - Programming Blogs. The Crazy Programmer. About Blog The Crazy Programmer will guide you through the simplest basics of C, C , Android, PHP, SQL and many more coding languages. SitePoint. Ray Wenderlich. CSS-Tricks. Stack Abuse. Java, SQL and jOOQ. Scott Hanselman',
        timeStamp:'todays date',
        id : 7345
    },
    {
        title: 'bloging 101',
        image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
        content: 'This is the first blog post',
        timeStamp:'todays date',
        id : 232
    },
    {
        title: 'ALL DAY I DREAM ABOUT SOCCER',
        image: 'https://images.unsplash.com/photo-1552667466-07770ae110d0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
        content: 'soccer is cool',
        timeStamp:'todays date',
        id : 312
    },
    {
        title: 'lifting',
        image: 'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
        content: 'This is the first blog post',
        timeStamp:'todays date',
        id : 5543
    },
    {
        title: 'Basketball',
        image: 'https://images.unsplash.com/photo-1525973132219-a04334a76080?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
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

    searchPosts(req,res){
        console.log(req.query);
        let {title} = req.query
           
          let filteredArr = postsArr.filter( post =>  post.title.includes(title) || post.content.includes(title)
            )  
          
        
            res.status(200).send(filteredArr)
            
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
        postsArr.unshift(newPost)
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