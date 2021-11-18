const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();
router.use(express.static(__dirname+'/PagesResource'));
const dirResources = __dirname + '/PagesResource'

router.get('/',function(req,res){
  res.sendFile(path.join(__dirname + '/PagesResource' + '/index.html'));
  //__dirname : It will resolve to your project folder.
});

router.get('/Agapanthus',function(req,res){
  res.sendFile(path.join(__dirname + '/PagesResource' + '/Agapanthus.html'));
});

router.get('/Ageratum',function(req,res){
  res.sendFile(path.join(__dirname + '/PagesResource' + '/Ageratum.html'));
});


router.get('/PaeoniaCoralSunset',function(req,res){
  res.sendFile(path.join(__dirname + '/PagesResource' + '/PaeoniaCoralSunset.html'));
});


router.get('/Peony',function(req,res){
  res.sendFile(path.join(__dirname + '/PagesResource' + '/Peony.html'));
});


router.get('/Paeonia',function(req,res){
  res.sendFile(path.join(__dirname + '/PagesResource' + '/Paeonia.html'));
});

//add the router
app.use('/', router);
//process.env.port we use when there is environment variables file
//and when there is not then we use 3000 port
//currently we dis not learn it but I love to be like pro
app.listen(process.env.port || 3000);

console.log('Running at Port 3000');