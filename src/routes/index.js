const express = require('express');
const router = express.Router();

router.get('/',(req,res)=>{
    res.render('index.html',{title: 'Mi Primer Sitio'});
});

router.get('/contact', (req, res) => {
    res.render('contact.html', { title: 'pagina Contacto' });
});

module.exports = router;