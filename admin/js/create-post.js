window.onload = function() {
    createPunEvent();
}

function createPunEvent() {
    let form = document.getElementById('create-post');

    form.addEventListener('submit', async function(e) {
        e.preventDefault();


        let formData = new FormData(form);
        formDataObject = {
            "title": formData.get('title'),
            "author": formData.get('author'),
            "content": formData.get('content'),

        }

        try {
            await fetch('http://localhost:5000/posts', {
                method: 'POST', // GET, POST, PATCH, DELETE.
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formDataObject),
            })

            location.replace('index.html');
        } catch(error) {

        }
    });
}

