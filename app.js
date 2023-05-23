const movieState = {
    3: {
        title: 'Barbie',
        overview: 'skdjghsd sjdhgkj hsdkjg ksjhg kjsd',
        poster: './Upcoming Movies/barbie_poster.jpg',
        trailer: 'https://www.youtube.com/watch?v=8zIf0XvoL9Y&ab_channel=WarnerBros.Pictures',
        wallpaper: './barbie-bg.jpg'
    }
}

function navigate(id){
    window.location.href = "http://127.0.0.1:5500/movie.html";
    setTimeout(() => {}, 2000)
    const moviePage = document.getElementById('movie_page_container');
}

const nav = document.getElementById('nav');
        
window.addEventListener('scroll', () => {
    if(window.scrollY >=100) {
        nav.classList.add('nav__black')
    } else {
        nav.classList.remove('nav__black')
    }
});