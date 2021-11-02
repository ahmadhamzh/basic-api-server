'use strict'

const {app} = require('../src/server');
const supertest = require('supertest');
const mockRequest = supertest(app);
const {db} = require('../src/models/index');


beforeAll(async ()=>{
    await db.sync()
});

afterAll(async ()=>{
    await db.drop()
});

describe('web server', ()=>{
    
    test('check to add one record', async () => {
        const foodRespons = await mockRequest.post('/food').send({
            foodName : "fries",
            dishType : "snack"
        });
        const clothesRespons = await mockRequest.post('/clothes').send({
            clotheName : "skirt",
            price : 15
        });
        expect(foodRespons.status).toBe(201)
        expect(clothesRespons.status).toBe(201)        
    })

    test('check to get all data', async () => {
        const foodRespons = await mockRequest.get('/food');
        const clothesRespons = await mockRequest.get('/clothes');
        expect(foodRespons.status).toBe(200)
        expect(clothesRespons.status).toBe(200)        
    })
    
    test('check to get one record', async () => {
        const foodRespons = await mockRequest.get('/food/1');
        const clothesRespons = await mockRequest.get('/clothes/1');
        expect(foodRespons.status).toBe(200)
        expect(clothesRespons.status).toBe(200)        
    })

    test('check to update record', async () => {
        const foodRespons = await mockRequest.put('/food/1').send({
            foodName : "fries",
            dishType : "side dish"
        });
        const clothesRespons = await mockRequest.put('/clothes/1').send({
            clotheName : "skirt",
            price : 10
        });
        expect(foodRespons.status).toBe(201)
        expect(clothesRespons.status).toBe(201)        
    })

    test('check to delete record', async () => {
        const foodRespons = await mockRequest.delete('/food/1');
        const clothesRespons = await mockRequest.delete('/clothes/1');
        console.log('=============');
        console.log(foodRespons.status);        
        console.log('=============');       
        expect(foodRespons.status).toBe(204)
        expect(clothesRespons.status).toBe(204)        
    })
})
