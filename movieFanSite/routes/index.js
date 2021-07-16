var express = require('express');
var router = express.Router();
const request = require('request');

const apiKey = '4cdfed3bf08c9bd60161d850d68007c4';
const apiBaseUrl = 'http://api.themoviedb.org/3';
const nowPlayingUrl = `${apiBaseUrl}/movie/now_playing?api_key=${apiKey}`;
const imageBaseUrl = 'http://image.tmdb.org/t/p/w300';

/* GET home page. */
router.get('/', function(req, res, next) {
  request.get(nowPlayingUrl, (err, res, data) => {
    const movieData = JSON.parse(data);
    console.log(movieData);
  });
  res.render('index', { title: 'Express' });
});

module.exports = router;
