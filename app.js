let img = document.querySelector('.card-img-top')
let userName = document.querySelector('.card-title')
let bio = document.querySelector('.card-text')
let followers = document.querySelector('.number-f')
let searchInput = document.querySelector('.form-control')
let searchButton = document.querySelector('.btn-outline-secondary')




searchButton.addEventListener('click',() => {
    let user = ''
    user = searchInput.value 
    
    fetch('https://api.github.com/users/'+`${user}`).then((response) => {
    return response.json()
    }).then(data => {
    img.setAttribute('src', `${data.avatar_url}`)
    userName.innerText = data.name
    if (data.bio === null) {
        bio.innerText = 'This user has no bio'
    } else {
        bio.innerText = data.bio

    }
    followers.innerText = data.followers

    })
    searchInput.value =''
  
})