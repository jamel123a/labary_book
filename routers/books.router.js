const bookContoller=require('../controllers/books.controller')
const router =require('express').Router();


router.get('/books',bookContoller.AllBooksController)
router.get('/books/:id',bookContoller.OneBookController)

module.exports=router ///t3ml export bch t5dem beha fi server