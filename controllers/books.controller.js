
const BookModel=require('../models/books')

exports.AllBooksController=(req,res,next)=>{

    BookModel.getAllbooks().then(books=>{
      res.render('books',{books :books})
  })
}
exports.OneBookController=(req,res,next)=>{

    let id =req.params.id
    BookModel.getOnebook(id).then(book=>{
      res.render('details',{books:book})
  })
}