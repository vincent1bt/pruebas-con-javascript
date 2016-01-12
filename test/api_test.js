var test = require("tape")
import Api from "./../lib/api.js"
var url = "http://jsonplaceholder.typicode.com/posts"
var client = new Api(url)
var id = 5

test("client.get() should be a function", function(t) {
  
  t.equals(typeof client.get, 'function', "should be a function")
  t.end()
})

test("client.get_one() should be a function", function (t) {
  t.equals(typeof client.get_one, 'function', "should be a function")
  t.end()
})

test("should get a list of posts", function(t) {
  client.get(function (data) {
    t.ok(Array.isArray(data), "should be an array")
    t.end()
  })
})

test("should get one post", function(t) {
  client.get_one(id , function (data) {
     t.error(Array.isArray(data), "should not be an array")
     t.equals(typeof data, "object", "should be an object")
     t.end()
  })
})



