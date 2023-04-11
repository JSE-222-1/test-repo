async function getUsers() {
    let usersResp = await fetch('https://jsonplaceholder.typicode.com/users');
    return await usersResp.json();
};
let div  = document.querySelector("div");
async function drawUsers(){
    let users = await getUsers();
    for(let user of users){
        let newUser = document.createElement("p");
        newUser.innerHTML += user.name;
        newUser.setAttribute("onclick", `drawPage(${user.id})`)
        document.body.appendChild(newUser);

    }
}

function drawPage(userId){
    localStorage.setItem("clickedUserId", userId)
    location.href= 'liza.html'
}
drawUsers()