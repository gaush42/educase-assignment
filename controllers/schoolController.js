const SchoolService = require('../services/schoolServices');

exports.addSchool = async (req, res) => {
    try {
        const school = await SchoolService.createSchool(req.body);
        res.status(201).json(school);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

exports.listSchools = async (req, res) => {
    try {
        const { latitude, longitude } = req.query;
        const schools = await SchoolService.getSchoolsSortedByProximity(latitude, longitude);
        res.json(schools);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};
