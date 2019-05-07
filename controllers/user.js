const express = require('express');
const router = express.Router();
const db = require('../config/database');
const User = require('../models/user');

//get list user
router.get('/',(req,res) => 
User.findAll()
.then(result => {
    res.render('admin/user',{result} );
})
.catch(err => console.log(err))
);

//add user
router.get('/add',(req,res) =>{
    const data = {
        username: 'tâm',
        address: 'Binh Dinh',
        phone:'0123456789',
        email: 'ad@gmail.com',
        password: '123456789',
        role: 1
    }
    let { username,address, phone, email,password,role} = data;
    //insert into table
    User.create({ username, address,phone,email,password,role})
    .then(result => res.redirect('/admin/user'))
    .catch(err => console.log(err))

    //delete from table
    User.destroy({
        where: {
          id: 2
        }
      }).then(() => {
        console.log(`Delete complete user has id: ${id}`);
      });

      //alter table
      User.update({ 
        username: 'Nguyễn Thị Huỳnh Mai',
        email: 'nthm@gmail.com'
        }, {
        where: {
          id: 9
        }
      }).then(() => {
        console.log("Update complete");

      });
})

module.exports = router;
