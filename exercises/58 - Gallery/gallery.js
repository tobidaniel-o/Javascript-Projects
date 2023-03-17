function Gallery(gallery) {
    if (!gallery) {
        throw new Error('No Gallery Found!')
    }

    // select the elements we need
    const images = Array.from(gallery.querySelectorAll('img'))
    const modal = document.querySelector('.modal')
    const prevButton = document.querySelector('.prev')
    const nextButton = document.querySelector('.next')
}

// Use it on the page
const gallery1 = Gallery(document.querySelector(".gallery1"));
const gallery2 = Gallery(document.querySelector(".gallery2"));

console.log(gallery1)
console.log(gallery2)