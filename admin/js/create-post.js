window.onload = function() {
    createPunEvent();
}

function createPunEvent() {
    let form = document.getElementById('create-post');

    form.addEventListener('submit', async function(e) {
        e.preventDefault();


        let formData = new FormData(form);
        formDataObject = {
            "content": formData.get('content')
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

let serializeForm = function (form) {
    var obj = {};
    var formData = new FormData(form);
    // console.log(formData.getAll());

    for (var key of formData.keys()) {
        let inputData = formData.getAll(key);

        if (inputData.length > 1) {
            obj[key] = inputData;
        } else {
            obj[key] = inputData[0];    
        }
    }
    
    // console.log(obj);
    return obj;
};
