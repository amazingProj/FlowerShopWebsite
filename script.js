const { dir } = require('console');
const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();
router.use(express.static(__dirname+'/PagesResource'));
const dirResources = __dirname + '/PagesResource'

var allOrdersList = []
var count = 0

router.get('/',function(req,res){
  res.sendFile(path.join(dirResources + '/index.html'));
  //__dirname : It will resolve to your project folder.
});

router.post('/', (req,res) => {
  allOrdersList[count] = req.body
  ++count
})

router.get('/Agapanthus',function(req,res){
  res.sendFile(path.join(dirResources + '/Agapanthus.html'));
});

router.get('/Ageratum',function(req,res){
  res.sendFile(path.join(dirResources + '/Ageratum.html'));
});


router.get('/PaeoniaCoralSunset',function(req,res){
  res.sendFile(path.join(dirResources + '/PaeoniaCoralSunset.html'));
});


router.get('/Peony',function(req,res){
  res.sendFile(path.join(dirResources + '/Peony.html'));
});


router.get('/Paeonia',function(req,res){
  res.sendFile(path.join(dirResources + '/Paeonia.html'));
});

//add the router
app.use('/', router);
//process.env.port we use when there is environment variables file
//and when there is not then we use 3000 port
//currently we dis not learn it but I love to be like pro
app.listen(process.env.port || 3000);

console.log('Running at Port 3000');

function printAllOrders(){
  for (let i = 0; i < count - 1; ++i){
    console.log("order number :" + count + "  " + allOrdersList[i])
  }
}