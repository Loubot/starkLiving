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
        image_url: 'http://www.stark-living.com/images/fb_splitter.jpg'
    })
})


router.get('/jack-cover', function (req, res, next) {
    res.render('jack_cover', {
        url: 'http://www.stark-living.com/kindling-spitter/jack-cover',
        image_url: 'http://www.stark-living.com/images/fb_jack_cover.jpeg'
    })
})

router.get('/tick-removal', function (req, res, next) {
    res.render('tick_removal', {
        url: 'http://www.stark-living.com/kindling-spitter/tick-removal',
        image_url: 'http://www.stark-living.com/images/fb_tick_removal.jpeg'
    })
})

module.exports = router;