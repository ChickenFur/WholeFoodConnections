var chai = require('chai');
chai.should();

describe('server API', function () {
  describe('for vendors', function () {
    it('should handle GET requests at /vendors');
    //return all vendors

    it('should handle GET requests at /vendors/:id')
    //return vendor with :id

    it('should handle POST requests at /vendors');
    //create a new vendor

    it('should handle DELETE requests at /vendors/:id')
    //delete a vendor with :id
  });

  describe('for food types', function () {
    it('should handle GET requests at /foods');
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