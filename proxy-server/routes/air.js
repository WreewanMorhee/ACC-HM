var express = require('express')
var router = express.Router()
var axios = require('axios')

/* GET users listing. */
router.get('/', function (req, res, next) {
  let { page } = req.query
  var config = {
    method: 'get',
    url: `https://www.travel.taipei/open-api/zh-tw/Attractions/All?page=${page}`,
    headers: {
      accept: 'application/json',
      Cookie: '__cfduid=dbe9d9fcf93820205e3060af4b97c0bff1615146570',
    },
  }

  axios(config)
    .then(function (response) {
      res.json(response.data)
    })
    .catch(function (error) {
      res.json(error)
    })
})
module.exports = router
