window.onload = function () {
    createPunEvent();
}

function createPunEvent() {
    let form = document.getElementById('create-post');

    form.addEventListener('submit', async function (e) {
        e.preventDefault();


        let formData = new FormData(form);
        var selectedTags = document.getElementById("tags").selectedOptions;

        var tags = [];
        for (var i = 0; i < selectedTags.length; i++) {
            tags.push(selectedTags[i].value);
        }

        formDataObject = {
            "title": formData.get('title'),
            "author": formData.get('author'),
            "content": formData.get('content'),
            "tags": tags
        }

        try {
            await fetch('http://localhost:5000/posts', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formDataObject),
            })

            location.replace('index.html');
        } catch (error) {

        }
    });
}

