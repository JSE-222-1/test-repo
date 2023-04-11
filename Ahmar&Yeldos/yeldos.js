let userId = localStorage.getItem(`clickedUserId`);

const URL_USER = `https://jsonplaceholder.typicode.com/users/${userId}`;

async function loadUser() {
    const responce = await fetch(URL_USER)
    const data = await responce.json();
    const div = document.querySelector('div');
    div.innerHTML += `
        Name: ${data.name} <br>
        Username: ${data.username}<br>
        Email: ${data.email}<br>
        Phone: ${data.phone}<br>
        Company: ${data.company.name}<br>
    `;
    document.body.appendChild(div)
}

loadUser();