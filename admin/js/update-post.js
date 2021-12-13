window.onload = function() {
    let queryString = location.search;
    console.log(queryString);
    let urlParams = new URLSearchParams(queryString);
    console.log(urlParams.get('id'));


getPost(urlParams.get('id'));
updatePost(urlParams.get('id'));

async function getPost(id) {
    try {
        let response = await fetch('http://localhost:5000/posts/' + id);
        let post = await response.json();
        console.log(response)
        console.log(post.tags)

        let tagnames = post.tags;
        
        for(tag of tagnames){
            let selecTag = tag;
            
            console.log(selecTag)

        
        document.getElementById('title').value = post.title;
        document.getElementById('author').value = post.author;
        document.getElementById('content').value = post.content;
        document.getElementById('tags').value = selecTag;
        
    
        }

    } catch(error) {
        console.log(error);
    }
}
}


function updatePost(id) {
    let updateform = document.getElementById('update-form');
    updateform.addEventListener('submit', async function(e) {
        e.preventDefault();

        let selectedTags = document.getElementById("tags").selectedOptions;


        let tags = [];
        for (let i = 0; i < selectedTags.length; i++) {
            tags.push(selectedTags[i].value);
        }
        

        let formData = new FormData(updateform);
        formDataObject = {
            "title": formData.get('title'),
            "author": formData.get('author'),
            "content": formData.get('content'),
            "tags": tags
        }

        console.log(formDataObject);
        console.log(JSON.stringify(formDataObject));

        try {
            await fetch('http://localhost:5000/posts/' + id, {
                method: 'PATCH', 
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formDataObject)
            })

            location.replace('index.html');
        } catch(error) {
            console.log(error);
        }
    })

}