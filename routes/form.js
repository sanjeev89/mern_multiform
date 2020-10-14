const express = require('express')
const route = express.Router();
const data = require('../models/data')
const Form = require('../models/Form')


route.get("/v1/270/formData", (req, res) => {

  Form.viewFormData()
    .then((data) => {
        // console.log(data)
        return res.status(200).json({
                   success: true,
                   data: data
    })
    .catch((err) => res.send(err));
})
})

route.post('/v1/formData', (req, res) => {

    const {email, firstName, lastName, city, bio, occupation} = req.body
    
    Form.addData(firstName, lastName, email, city, occupation, bio)
    .then((data)=>{ res.send("data added with succcess")})
    .catch((err) => res.send(err))


})

module.exports = route;

