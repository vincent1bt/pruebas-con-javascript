import Api from "./../lib/api.js"

var client = new Api("http://jsonplaceholder.typicode.com/posts")

client.get((data) => {
  var posts = data
  console.log(posts)
})

client.get_one(4, (data) => {
  var one_post = data
  document.querySelector("#main").innerHTML += data.title
})
