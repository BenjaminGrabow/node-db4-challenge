const express = require("express");
const knex = require('knex');
// const db = knex(require('./knexfile').development);
const db = require('./data/db.js');

const server = express();
server.use(express.json());

function getRecipes() {
  return db("recipes");
}

function getIngredients() {
  return db("ingredients");
}

// function getEmptyCourses() {

// }

// function getLazyStudents() {
// //   select
// //   users.id,
// //   users.fname,
// //   users.lname
// // from
// // users
// // left join enrollments on users.id = enrollments.user_id
// // left join courses on courses.id = enrollments.course_id
// // where courses.id is NULL;
// return db.select('user_id', 'fname', 'lname', 'name')
//   .from('users')
//   .leftJoin('enrollments', 'users.id', 'enrollments.user_id')
//   .leftJoin('courses', 'courses.id', 'enrollments.course_id')
//   .where({ 'courses.id': null });
// }

// function getLazyStudentsWithCourses() {
//   return db.select('user_id', 'fname', 'lname', 'name')
//   .from('users')
//   .innerJoin('enrollments', 'users.id', 'enrollments.user_id')
//   .innerJoin('courses', 'courses.id', 'enrollments.course_id');
// }

server.get('/recipes', async (req, res, next) => {
  try {
    const result = await getRecipes();
    res.json(result);
  } catch (error) {
    next(error);
  }
});

server.get('/ingredients', async (req, res, next) => {
  try {
    const result = await getIngredients();
    res.json(result);
  } catch (error) {
    next(error);
  }
});

// server.post('/cookingbook', async (req, res, next) => {
//   try {
//     const { fname, lname, email } = req.body;
//     const result = await addUserWithEmail({
//       fname, lname, email
//     });
//     res.json(result);
//   } catch (error) {
//     console.log(error);
//     next(error);
//   }
// });



module.exports = server;

