
let postsTable = document.getElementById('handle-table');

blogPostsTable();
async function blogPostsTable(){
    let response = await fetch('http://localhost:5000/posts')
    let data = await response.json();
    console.log(data);
    console.log(response);
    
    for(let post of data){
    let datePost = new Date(post.date);
    let formatedDate = `${datePost.getFullYear()}-${datePost.getMonth() + 1}-${datePost.getDate()} ${datePost.getHours()}:${datePost.getMinutes()}`
          
    
    console.log(post['_id']);
    postsTable.innerHTML += `
          <td> ${post.title}</td>
          <td> ${post.author}</td>
          <td> ${formatedDate}</td>
          <td>
          <button> Ändra</button>
          <button class="delete-post" data-id="${post['_id']}">Radera</button>
          </td>


          `;

        }
        
        let deletePost = document.getElementsByClassName('delete-post');
        console.log(deletePost);

        for (let post of deletePost){
            post.addEventListener('click', async function(e){
                e.preventDefault();

                try{
                   await fetch('http://localhost:5000/posts/' + e.target.dataset.id,
                   {
                       method: 'DELETE'
                   } 
                );
                  e.target.parentNode.parentNode.remove(); 
                   
                }catch(error){
                 console.log(error);
                }
            })
        }
    }
