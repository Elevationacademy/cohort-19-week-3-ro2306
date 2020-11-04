const posts = [
    {
        name: "yazan araidy",
        wish: "Happy birthday"
    },
    {
        name: "hiba lolo",
        wish: "Love you"
    },
    {
        name: "Dad",
        wish: "Happy birthda"
    }
]


const render = function () {
   
    for (let post of posts) {
        console.log(post)
        $("#pepole").append("<div>"+ post.name +":"+post.wish + "</p></div>")
    }
}


$('#btn').click(function () {
    let newName =  $('#name').text()
    let newWish =  $('#text').text()
    let newPost={name:newName,wish:newWish}
    posts.push(newPost)
    console.log(posts)
   
    render()
   
})
