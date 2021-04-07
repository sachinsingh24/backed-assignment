const express = require("express")  
const router = express.Router()
const PQR = require('../models/model1')

router.get('/', async(req,res) =>{
    
        const abc = await PQR.find()
        res.json(abc)   

})

router.get('/:id', async(req,res) =>{
    
        const abcd = await PQR.findById(req.params.id)
        res.json(abcd)   
    
})
router.post('/', async(req,res)=> {
    const STR = new PQR ({
        name:req.body.name,
        img: req.body.img,
        summary:req.body.summary 
    })
    
        const a1 = await STR.save()
        res.json(a1)
   

})
router.put('/:id', async(req,res)=>{
    
        const b1 = await PQR.findById(req.params.id)
        b1.name= req.body.name,
        b1.img= req.body.img,
        b1.summary = req.body.summary

        const b2 =await b1.save()
        res.json(b2)
  
})
router.delete('/:id', async(req,res)=>{
    
        const c1 = await PQR.findById(req.params.id)
        c1.name= req.body.name,
        c1.img= req.body.img,
        c1.summary = req.body.summary 
        const c2 =await c1.remove()
        res.json(c2 )
   
})

module.exports = router