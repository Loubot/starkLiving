var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {
        url: 'http://www.stark-living.com',
        image_url: 'http://www.stark-living.com/images/fb_garden.jpeg'
    });
});

router.get('/kindling-splitter', function (req, res, next) {
    res.render('kindling_splitter', {
        url: 'http://www.stark-living.com/kindling-spitter',
        image_url: 'http://www.stark-living.com/images/fb_garden.jpeg'
    })
})


router.get('/jack-cover', function (req, res, next) {
    res.render('jack_cover')
})

router.get('/tick-removal', function (req, res, next) {
    res.render('tick_removal')
})

module.exports = router;