const SchoolService = require('../services/schoolServices');

//The addSchool function handles adding a new school. 
//It tries to create a school using data from the request body via the SchoolService.createSchool method. 
//If successful, it responds with a status of 201 and the created school data. 
//If there's an error, it responds with a status of 400 and an error message
exports.addSchool = async (req, res) => {
    try {
        const school = await SchoolService.createSchool(req.body);
        res.status(201).json(school);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

//The listSchools function handles listing schools. 
//It tries to list all school using data from the request body via the SchoolService.getSchoolsSortedByProximity method. 
//If successful, it responds with a list of schools sorted by distance. 
//If there's an error, it responds with a status of 400 and an error message
exports.listSchools = async (req, res) => {
    try {
        const { latitude, longitude } = req.query;
        const schools = await SchoolService.getSchoolsSortedByProximity(latitude, longitude);
        res.json(schools);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};
