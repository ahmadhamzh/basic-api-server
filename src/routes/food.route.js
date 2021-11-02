'use strict'

const express = require('express');
const foodRout = express.Router();
const {Food} = require('../models/index')

foodRout.get('/food', getAllFood)
foodRout.get('/food/:id', getFoodById)
foodRout.post('/food', addFood)
foodRout.put('/food/:id', updateFood)
foodRout.delete('/food/:id', deleteFood)

async function getAllFood(req,res) {

    const allFood = await Food.findAll()
    res.status(200).json(allFood)
    
}

async function getFoodById(req,res) {
    const id = parseInt(req.params.id) 
    const oneFood = await Food.findOne({where : {id:id}})
    res.status(200).json(oneFood)
    

}
async function addFood(req,res) {
    const foodObject = req.body;
    const addFood = await Food.create(foodObject)
    res.status(201).json(addFood)
    
}

async function updateFood(req,res) {
    const id = parseInt(req.params.id);
    const updatObject = req.body; 
    const foundFood = await Food.findOne({where:{id:id}})
    const updateFood = await foundFood.update(updatObject)
    res.status(201).json(updateFood);    
}

async function deleteFood(req,res) {
    const id = parseInt(req.params.id);     
    const deleteFood = await Food.destroy({where:{id:id}})
    res.status(204).json(deleteFood);    
}

module.exports = foodRout
