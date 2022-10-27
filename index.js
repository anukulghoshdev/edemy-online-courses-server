const express = require('express')
const app = express()

const port = process.env.PORT || 5000;

var cors = require('cors');
app.use(cors())



app.get('/', (req, res) => {
  res.send('edu hive api is running')
})



// load the categories
const categories = require('./data/categories.json');
app.get('/categories', (req, res)=>{
    res.send(categories)
})


const courses = require('./data/courses.json');

app.get('/courses', (req,res)=>{
    res.send(courses);
})

// load a course by id
app.get('/course/:id', (req, res)=>{
    const id = req.params.id;
    const selectedCourse = courses.find(course=>course._id===id);

    res.send(selectedCourse);
})

// for checkout
app.get('/checkout/:id', (req, res)=>{
    const id = req.params.id;
    const selectedCourse = courses.find(course=>course._id===id);

    res.send(selectedCourse);
})


// load the all courses of a category
app.get('/category/:id', (req, res)=>{
    const id = req.params.id;
    if(id==='08'){
        res.send(courses);
    }
    const categoryCourses =  courses.filter(course=> course.category_id===id);

    res.send(categoryCourses);
})











app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})