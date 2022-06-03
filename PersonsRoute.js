const express = require('express');
const { redirect } = require('express/lib/response');
const router = express.Router();
const Persons = require('./PersonsSchema');

//postpersons
router.post('/',async(req,res) =>{
try{
    const postPersons = await new Persons({
        Name : req.body.Name,
        Age : req.body.Age
    })
    const savePersons = await postPersons.save();
    res.status(200).json(savePersons);
}
catch(err){
    res.join({"err":err});
}
 });

//Getpersons
router.get('/:id',async(req,res) =>{
    try{
        router.getAll = await Persons.findd();
        res.status(200).json(getAll);
    }
    catch(err){
        res.join({"err" : err});
    }
});

//GetById
router.get('/:id',async(req,res) =>{
    try{
        router.getById = await Persons.findById(req.params.id);
        res.status(200).json(getById);
    }
    catch(err){
        res.join({"err" : err});
    }
});

//updatePersons
router.put('/',async(req,res) =>{
    router.get('/:id',async(req,res) =>{
        try{
            const updPersons = await persons.updateOne({id:req.params},{$set:{Name:req.body.name,Age:req.body.age}})
            res.status(200).json(updPersons);
        }
        catch(err){
            res.join({"err" : err});
        }
    });
});

//deletePersons
router.delete('/',async(req,res) =>{
    router.get('/:id',async(req,res) =>{
        try{
            const delPersons = await persons.remove({id:req.params})
            res.status(200).json(delPersons);
        }
        catch(err){
            res.join({"err" : err});
        }
    });
});

     
module.exports = router;