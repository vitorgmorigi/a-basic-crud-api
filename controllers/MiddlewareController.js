const courses = require('../courses');

module.exports = {

    checkIndexCourse(req, res, next) {
        const course = courses[req.params.index];
        if(!course) {
            return res.status(400).json({error: 'The course does not exists.'});
        }
    
        req.course = course;
    
        return next();
    
    },
    
    checkCourse(req, res, next) {
        if(!req.body.course) {
            return res.status(400).json({error: 'The name of course is obrigatory.'});
        }
    
        return next();
    }

}

