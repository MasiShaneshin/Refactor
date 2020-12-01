const assert = require('chai').assert;
const middle = require('../middle');

describe("#middle", () => {

  it("returns 3 for ([1, 2, 3, 4, 5])", () => {

    assert.equal(middle([1, 2, 3, 4, 5]),3);
  });

  it("returns [3,4] for ([1, 2, 3, 4, 5, 6])", () => {

    assert.equal(middle([1, 2, 3, 4, 5, 6]),[3,4]);
  });



  
});
