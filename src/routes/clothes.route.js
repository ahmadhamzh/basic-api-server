'use strict'
const express = require('express');
const {Clothes} = require('../models/index')
const clothesRout = express.Router()

clothesRout.get('/clothes', getAllClothes)
clothesRout.get('/clothes/:id', getClothesById)
clothesRout.post('/clothes', addClothes)
clothesRout.put('/clothes/:id', updateClothes)
clothesRout.delete('/clothes/:id', deleteClothes)

async function getAllClothes(req,res) {

    const allClothes = await Clothes.findAll()
    res.status(200).json(allClothes)
    
}

async function getClothesById(req,res) {
    const id = parseInt(req.params.id) 
    const oneClothes = await Clothes.findOne({where : {id:id}})
    res.status(200).json(oneClothes)
}

async function addClothes(req,res) {
    const clothesObject = req.body;
    const addClothes = await Clothes.create(clothesObject)
    res.status(201).json(addClothes)
    
}

async function updateClothes(req,res) {
    const id = parseInt(req.params.id);
    const updatObject = req.body; 
    const foundClothes = await Clothes.findOne({where:{id:id}})
    const updateClothes = await foundClothes.update(updatObject)
    res.status(201).json(updateClothes);    
}

async function deleteClothes(req,res) {
    const id = parseInt(req.params.id);     
    const deleteClothes = await Clothes.destroy({where:{id:id}})
    res.status(204).json(deleteClothes);    
}

module.exports = clothesRout

