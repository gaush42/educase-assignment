const School = require('../models/schoolModel');
const calculateDistance = require('../utils/claculateDistance');

//This code defines an asynchronous function createSchool that takes schoolData as input. 
//It checks if the required fields (name, address, latitude, longitude) are present. 
//If any field is missing, it throws an error. 
//Otherwise, it creates and returns a new School record in the database using the provided data.
exports.createSchool = async (schoolData) => {
    const { name, address, latitude, longitude } = schoolData;

    if (!name || !address || !latitude || !longitude) {
        throw new Error('All fields are required');
    }

    return await School.create({ name, address, latitude, longitude });
};


//This function, getSchoolsSortedByProximity, retrieves all schools from the database and 
//calculates the distance of each school from a given user's latitude and longitude. 
//It then returns a list of schools sorted by their proximity to the user's location. 
//If the user's latitude or longitude is missing, an error is thrown.
exports.getSchoolsSortedByProximity = async (userLatitude, userLongitude) => {
    if (!userLatitude || !userLongitude) {
        throw new Error('Latitude and longitude are required');
    }

    const schools = await School.findAll();
    
    return schools.map(school => {
        const distance = calculateDistance(userLatitude, userLongitude, school.latitude, school.longitude);
        return { ...school.toJSON(), distance };
    }).sort((a, b) => a.distance - b.distance);
};