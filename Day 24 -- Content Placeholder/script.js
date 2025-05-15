// AMDG
const header = document.getElementById('header');
const title = document.getElementById('title');
const excerpt = document.getElementById('excerpt');
const profile_img = document.getElementById('profile_img');
const name = document.getElementById('name');
const date = document.getElementById('date');

const animated_bgs = document.querySelectorAll('.animated-bg');
const animated_bg_texts = document.querySelectorAll('.animated-bg-text');

/* Set the data for all of the card entries */
function getData() {
    header.innerHTML = '<img src = "https://images.unsplash.com/photo-1521496373971-49d0747fd4d7?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D">'

    title.innerText = 'Why Christianity is based'
    excerpt.innerText = 'hey guys so in this post im gonna talk a bit about why Christianity is based. so basically im a sinner right? logically that means that im not worthy of Gods love. but check this right? ...'
    profile_img.innerHTML = '<img src="https://upload.wikimedia.org/wikipedia/en/c/c7/Chill_guy_original_artwork.jpg">'
    name.innerHTML = 'Chill guy'
    date.innerHTML = 'April 17, 2025'

    animated_bgs.forEach(bg => bg.classList.remove('animated-bg'));
    animated_bg_texts.forEach(bg => bg.classList.remove('animated-bg-text'))
}

setTimeout(getData, 2000);