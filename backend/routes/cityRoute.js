const express = require('express')
const City = require('../model/cityModel')

const router = express.Router()

// @desc    Get all cities
// @route   GET /api/city
// @access  Public
router.get('/', async (req, res) => {
    const cities = await City.find()

    return res.status(200).json(cities)
})

// @desc    Add new city
// @route   POST /api/city
// @access  Public
router.post('/', async (req, res) => {

    const { cityName } = req.body

    // Check if cityName is provided 
    if(!cityName){
        return res.status(400).json({message: 'City name is required'})
    }

    // Check if city already exists
    const cityExists = await City.findOne({cityName})

    if(cityExists) {
       return res.status(400).json({message: 'City already exists'})
    }

    const city = await City.create({
        cityName
    })

    return res.send(city)
})

module.exports = router