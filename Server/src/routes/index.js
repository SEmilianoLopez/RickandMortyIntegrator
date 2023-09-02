const { login } = require('../controllers/login')
const { getChardById }= require('../controllers/getCharById')
const { postFav, deleteFav } = require('../controllers/handleFavorites')

const router = require('express').Router();

router.get('/character/:id', (req, res) =>{
    getChardById(req, res)
})

router.get('/login', (req, res )=>{
    login(req, res)
})

router.post('/fav', (req, res) =>{
    postFav(req, res)
})

router.delete('/fav/:id', (req, res) =>{
    deleteFav(req, res)
})

module.export = router;
