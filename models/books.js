const { rejects } = require('assert')
const mongoose =require('mongoose')
const { resolve } = require('path')

// attrubue
var schemaBooks =mongoose.Schema({
    _id :String,
    title :String,
    description:String,
    author :String,
    price : Number,
    image : String  
}) // tjeb books mawjoudin fi mongodb
var Book =mongoose.model('books',schemaBooks)
const url ='mongodb://localhost:27017/library'
exports.getThreeBooks=()=>{
    return new Promise((resolve,rejects)=>{


        mongoose.connect(url,).then(()=>{
          return Book.find({}).limit(3) // find mtrj3ech promise 3lh n3mlou primise
          // limit  tjeb kn 3 loulanin
        }).then((books)=>{
            mongoose.disconnect()
            resolve(books)
        
        
        }).catch(err=>rejects(err))
    })
    
    
}
exports.getAllbooks=()=>{
    return new Promise((resolve,rejects)=>{


        mongoose.connect(url,).then(()=>{
          return Book.find({}) // find mtrj3ech promise 3lh n3mlou primise
       
        }).then((books)=>{
            mongoose.disconnect()
            resolve(books)
        
        
        }).catch(err=>rejects(err))
    })
    
    
}
exports.getOnebook=(id)=>{
    return new Promise((resolve,rejects)=>{


        mongoose.connect(url,).then(()=>{
          return Book.findById(id) // find mtrj3ech promise 3lh n3mlou primise
       
        }).then((books)=>{
            mongoose.disconnect()
            resolve(books)
        
        
        }).catch(err=>rejects(err))
    })
    
    
}