window.onload = function() {
    let queryString = location.search;       // retrieving the querystring
    console.log(queryString);
    let urlParams = new URLSearchParams(queryString);
    console.log(urlParams.get('id'));


getPost(urlParams.get('id'));

async function getPost(id) {
    try {
        let response = await fetch('http://localhost:5000/posts/' + id);
        let post = await response.json();
        console.log(response)
        console.log(post)


        document.getElementById('title').value = post.content;
        document.getElementById('author').value = post.content;
        document.getElementById('content').value = post.content;
    } catch(error) {
        console.log(error);
    }
}}