window.onload = function () {
    createPunEvent();
}

function createPunEvent() {
    let form = document.getElementById('create-post');
    let selectTagOption = document.getElementById('tags');

    let availableTags = [
     "Hundar",
     "Katter",
     "Blommor",
     "Resor",
     "Mat",
     "Bilar",
     "Inredning"
    ];

    for (let i = 0; i < availableTags.length; i++){
        selectTagOption.innerHTML += `
        <option>${availableTags[i]}</option>
        
        `;
    }

    form.addEventListener('submit', async function (e) {
        e.preventDefault();

        let formData = new FormData(form);
        let newArray = [];
        for (let oneTag of availableTags){
            if (oneTag.selected == true){
             oneTag.push(newArray); // Denna loopen funkar inte just nu
            }
        }


       

        formDataObject = {
            "title": formData.get('title'),
            "author": formData.get('author'),
            "content": formData.get('content'),
            "tags": newArray
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

