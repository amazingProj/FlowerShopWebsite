const { dir } = require('console');
const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();
const dirPublic = __dirname + '/public';
const dirImages = __dirname + '/images';
const users = require('./users.json')
router.use(express.static(dirPublic));
app.use('/images', express.static('images'));


router.get('/',function(req,res){
  res.sendFile(path.join(dirPublic + '/index.html'));
});

router.get('/login/:user/:password', (req,res) => {
  let temp = {}
  let password = req.params.password;
  let username = req.params.user;
  for (let key in users){
    temp = users[key]
    if (key == username && temp["password"] == password){
      let rule = temp["rule"];
      if (rule == "admin"){
        res.sendFile(path.join(dirPublic + "/admin.html"));
        
      }
      else if (rule == "employee"){
        res.sendFile(path.join(dirPublic + "/employee.html"));
      }
      else if (rule == "customer"){
        res.sendFile(path.join(dirPublic + "/customer.html"));
      }
      else if (rule == "Vendor"){
        res.sendFile(path.join(dirPublic + "/vendor.html"));
      }
      return;
    }
  }
  res.status(404);
})

router.get('logout', (req, res) => {
  path.join(dirPublic + '/index.html')
})

//add the router
app.use('/', router);


//process.env.port we use when there is environment variables file
//and when there is not then we use 3000 port
//currently we dis not learn it but I love to be like pro
app.listen(process.env.port || 3000);

console.log('Running at Port 3000');