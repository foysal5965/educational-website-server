const express = require('express');
const app = express ();
const port = process.env.PORT || 5000;
const cors = require('cors')
app.use(cors());
const courses = require('./courses.json');
const course = require('./courseDetail.json')
app.get('/courses',(req, res)=>{
    res.send(courses)
})
app.get('/', (req, res)=>{
    res.send('api is working')
});
app.get('/course',(req, res)=>{
    res.send(course)
})
app.get('/category/:id', (req, res)=>{
    const id = req.params.id
    const courseCategory = course.filter(c=>c.course_id===id);
    res.send(courseCategory)
})
app.get('/course/:id', (req, res)=>{
    const id = req.params.id;
    const courseDetail= course.find(c=>c._id===id);
    res.send(courseDetail)
})
app.listen(port , ()=>{
    // console.log('api working on port ', port);
})