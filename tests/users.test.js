// You already have the methods imported
//const { default: expect } = require('expect');
//const {getUser, getUsers} = require('../users');


// Make a test to verify if the method getUser(id) works correctly
// Verify any data of the resulting object you want

// READ documentation


//const { test } = require('picomatch');
const {getUser, getUsers} = require('../users');

test('prueba user',()=>{
    expect(getUser(1).email).toBe("sirious90@gmail.com")
})

test('prueba user',()=>{
    expect(getUsers(1)[1].password).toBe('2D$aLzX9(_2')
})
