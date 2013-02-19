var app = require('../server/main.js').app;
var chai = require('chai');
var request = require('supertest');
chai.should();

request = request(app);

describe('server API', function () {

  describe('for vendors', function () {
    it('should handle GET requests at /vendors', function (done) {
      request.get('/vendors').expect(200, function(err){
        console.log(err);
        done();
      });
    });
    //return all vendors

    it('should handle GET requests at /vendors/:id');
    //return vendor with :id

    it('should handle POST requests at /vendors');
    //create a new vendor

    it('should handle DELETE requests at /vendors/:id');
    //delete a vendor with :id
  });

  describe('for food types', function () {
    it('should handle GET requests at /foods', function (done) {
      request.get('/foods').expect(200, function(err){
        console.log(err);
        done();
      });
    });
    //return all foods

    it('should handle POST requests at /foods');
    //create a new food type

    it('should handle GET requests at /foods/:name');
    //return vendors
    //this doesn't seem very RESTful, no?
    //use search instead?

    it('should handle DELETE requests at /foods/:id');
    //delete a food type with :id
    //this doesn't seem very RESTful, no?
    //use search instead?
  });


});