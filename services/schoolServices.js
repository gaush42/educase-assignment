const School = require('../models/schoolModel');
const calculateDistance = require('../utils/claculateDistance');

exports.createSchool = async (schoolData) => {
    const { name, address, latitude, longitude } = schoolData;

    if (!name || !address || !latitude || !longitude) {
        throw new Error('All fields are required');
    }

    return await School.create({ name, address, latitude, longitude });
};

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