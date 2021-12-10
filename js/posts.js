let main = document.getElementById('main-container');

blogPosts();
async function blogPosts() {
    let response = await fetch('http://localhost:5000/posts')
    let data = await response.json();
    console.log(data);
    console.log(response);

    for (let post of data) {
        let datePost = new Date(post.date);
        let formatedDate = `${datePost.getFullYear()}-${datePost.getMonth() + 1}-${datePost.getDate()} ${datePost.getHours()}:${datePost.getMinutes()}`


        console.log(post['_id']);
        main.innerHTML += `
          <h1> ${post.title}</h1>
          <p>${post.author} ⬥ ${formatedDate}</p>         
          <p>Tags: ${post.tags.join(', ')}</p>
          <hr>
          <p> ${post.content}  <a href="details.html?id=${post._id}">See more..</a>
          </p>
          <hr>


          `;

    }
}