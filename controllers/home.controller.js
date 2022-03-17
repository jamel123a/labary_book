const homeModel=require('../models/books')

exports.ThreeBookController=(req,res)=>{
            homeModel.getThreeBooks().then(books=>{
                res.render('index',{books :books})
            })
}
