async function getStrit(){
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    let content = await response.json()
    let ul = document.querySelector("ul")
    content.forEach(user => {
      let li = document.createElement('li')
      li.setAttribute('id', user.id)
      li.setAttribute('onclick', "redirectToPage()")
      li.textContent = user.name;
      ul.appendChild(li)
    });
  }
  getStrit()
  function redirectToPage(userId) {
    localStorage.setItem('currentUserId', user.Id);
    window.location.href = "amir.html";
  }