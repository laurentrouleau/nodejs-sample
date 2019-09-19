var supertest = require("supertest");
var should = require("should");

var server = supertest.agent("http://localhost:8000");

describe("SAMPLE unit test google",function(){
    it("should return home page",function(done){
        server
            .get("/")
            .expect("Content-type",/json/)
            .expect(200)
            .end(function(err,res){
                res.status.should.equal(200);
                done();
            });
    });
});