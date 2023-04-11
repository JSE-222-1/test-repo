let clickedUserId = localStorage.getItem('clickedUserId');
(async () => {
    let response = await fetch('https://jsonplaceholder.typicode.com/users/' + clickedUserId);
    let data = await response.json();
    document.body.innerHTML += "Name: " + data.name + "<br>";
    document.body.innerHTML += "Name: " + data.username + "<br>";
    document.body.innerHTML += "Email: " + data.email + "<br>";
    document.body.innerHTML += "Phone: " + data.phone + "<br>";
    document.body.innerHTML += "City: " + data.website+ "<br>";
    document.body.innerHTML += "City: " + data.company.name + "<br>";
})();

