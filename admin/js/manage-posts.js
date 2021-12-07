
let postsTable = document.getElementById('handle-table');

blogPostsTable();
async function blogPostsTable(){
    let response = await fetch('http://localhost:5000/posts')
    let data = await response.json();
    console.log(data);
    console.log(response);
    
    for(let i = 0; i < data.length; i++){
    let datePost = new Date(data.date);
    let formatedDate = `${datePost.getFullYear()}-${datePost.getMonth() + 1}-${datePost.getDate()} ${datePost.getHours()}:${datePost.getMinutes()}`
          
    postsTable.innerHTML += `
          <td> ${data[i].title}</td>
          <td> ${data[i].author}</td>
          <td> ${formatedDate}</td>
          <td>
          <button>Ändra</button>
          <button>Radera</button>
          </td>


          `;

        }
}