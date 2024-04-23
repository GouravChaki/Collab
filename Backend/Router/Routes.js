const express = require('express')
const { body, validationResult } = require('express-validator')
const User = require('../Model/user')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const fetch=require('../Fetch/Fetchuser')
const router = express.Router();
const JWT_SECRET ="jwtsecret"
router.post('/createuser', [
    body('name', 'name length must be minimum 3').isLength({ min: 8 }),
    body('email', 'email is not right').isEmail(),
    body('password', 'password length must be minimum 5').isLength({ min: 3 })
], async (req, res) => {
    const error = validationResult(req);
    if (!error.isEmpty()) {
        return res.status(404).json({ errors: error.array() });
    }
    try{
        let user = await User.findOne({email:req.body.email})
        console.log(user)
    if(user)
    {
        return res.status(404).json({error:"A user with this email id already exists"})
    }
    const salt= await bcrypt.genSalt(10)
    const pass= await bcrypt.hash(req.body.password,salt)
    user= await User.create({
        name: req.body.name,
        email: req.body.email,
        password: pass
    })
    const authtoken=jwt.sign({
        user:user.id
    },JWT_SECRET)
    res.send(authtoken)
    }
    catch(error)
    {
        res.status(500).send("Some Error Occured")
    }
})
router.post('/login', [
    body('email','email is not right').isEmail(),
    body('password', 'password length must be minimum 5').isLength({ min: 3 })
], async (req, res) => {
    const error = validationResult(req);
    if (!error.isEmpty()) {
        return res.status(404).json({ errors: error.array() });
    }
    try{
        const {email,password}=req.body
        let user = await User.findOne({email})
    if(!user)
    {
        return res.status(404).json({error:"Wrong Login credentials"})
    }
    const passcompare=await bcrypt.compare(password,user.password)
    if(!passcompare){
        return res.status(404).json({error:"Wrong Login credentials"})
    }
    // console.log(typeof user)
    const authtoken=jwt.sign(user.id,JWT_SECRET)
    res.send(authtoken)
    }
    catch(error)
    {
        console.log(error)
        res.status(500).send("Some Error Occured")
    }
})
router.post('/getuser',fetch, async (req,res)=>{
    try{
        const user=await User.findById(req.id)
        res.json(user)
    }
    catch(error){
        res.status(500).send("An error encountered")
    }
})
router.get('/', (req,res) => {
    res.send("Hello this is backend Testing website")
})
router.post('/getuser',fetch, async (req,res)=>{
    try{
        const user=await User.findById(req.id)
        res.json(user)
    }
    catch(error){
        res.status(500).send("An error encountered")
    }
})
router.post('/favourites',(req,res)=>{

})
module.exports = router