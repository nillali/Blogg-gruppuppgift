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
        console.log(post.tags)


        let tagnames = post.tags;

        // let viewTags = document.getElementById('tags');

        let tags = [
        "Hundar",
        "Katter",
        "Blommor",
        "Resor",
        "Mat",
        "Bilar",
        "Inredning"
        ];

        // for(let i = 0; i < tags.length; i++){
        //     viewTags.innerHTML += `
        //     <option>${tags[i]}</option>
        //     `;
        // }


        for(let tag of tags){
            let selected = '';
            if(tagnames.includes(tag)){
                selected = 'selected';

                document.getElementById('tags').innerHTML += `
                <option value="${tag}"${selected}>${tag}</option>
                `;

            }else{
                document.getElementById('tags').innerHTML += `
                <option value="${tag}">${tag}</option>
                `;
            }
            
            
            // console.log(selecTag)
            
        }
        
        document.getElementById('title').value = post.title;
        document.getElementById('author').value = post.author;
        document.getElementById('content').value = post.content;

        

    } catch(error) {
        console.log(error);
    }
}
}


function updatePost(id) {
    let updateform = document.getElementById('update-form');
    updateform.addEventListener('submit', async function(e) {
        e.preventDefault();

        let tagId = document.getElementById('tags');
        let tags = [
            "Hundar",
            "Katter",
            "Blommor",
            "Resor",
            "Mat",
            "Bilar",
            "Inredning"
        ]
        for (let i = 0; i < tags.length; i++){
            tagId.innerHTML += `
            <option>${tags[i]}</option>
            `;
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