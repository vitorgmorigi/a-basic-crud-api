const express = require('express');
const courses = require('./courses');
const MiddlewareController = require('./controllers/MiddlewareController');

const routes = express();

routes.get('/courses', (req, res) => {
    return res.json(courses);
});

routes.get('/courses/:index', MiddlewareController.checkIndexCourse, (req, res) => {
    return res.json(req.course);
});

routes.post('/courses', MiddlewareController.checkCourse, (req, res) => {
    const { course } = req.body;
    courses.push(course);

    return res.json(courses);
});

routes.put('/courses/:index', MiddlewareController.checkIndexCourse, MiddlewareController.checkCourse, (req, res) => {
    const { index } = req.params;
    const { course } = req.body;

    courses[index] = course;

    return res.json(courses);
});

routes.delete('/courses/:index', MiddlewareController.checkIndexCourse, (req, res) => {
    const { index } = req.params;

    courses.splice(index, 1);

    return res.json(courses);
});

module.exports = routes;