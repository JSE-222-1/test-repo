let usersDiv = document.querySelector(`#users`)
async function getUsers() {
    let response = await fetch(`https://jsonplaceholder.typicode.com/users`)
    return await response.json()
}
async function drawUsers() {
    let users = await getUsers()
    for (let user of users) {
        let userDiv = document.createElement(`div`)
        let pName = document.createElement(`p`)
        let pUserName = document.createElement(`p`)
        userDiv.setAttribute(`userId`, `${user.id}`)
        userDiv.classList.add(`user__div`)
        userDiv.style.cursor = `pointer`
        pName.innerHTML = `${user.name}`
        pUserName.innerHTML = `${user.username}`
        userDiv.appendChild(pUserName)
        userDiv.appendChild(pName)
        usersDiv.appendChild(userDiv)
    }
}
drawUsers().then(() => {
    let userDivs = document.querySelectorAll(`.user__div`)
    for (const userDiv of userDivs) {
        userDiv.addEventListener(`click`, () => {
            localStorage.setItem(`clickedUserId`, userDiv.getAttribute(`userId`))
            location.href = `yeldos.html`
        })
    }
})