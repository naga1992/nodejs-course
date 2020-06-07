// const add = require('./notes')
// const sum= add(4,-2)
// console.log(sum)

const  validator=require('validator')
const getNotes = require('./notes')

console.log(getNotes())

console.log(validator.isEmail("abc@test.com"))