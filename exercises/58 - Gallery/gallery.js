function Gallery(gallery) {
    if (!gallery) {
        throw new Error('No Gallery Found!')
    }

    // select the elements we need
    const images = Array.from(gallery.querySelectorAll('img'))
    const modal = document.querySelector('.modal')
    const prevButton = modal.querySelector(".prev");
	const nextButton = modal.querySelector(".next");
	let currentImage;

	function openModal() {
		console.info("Opening Modal...");
		// First check if the modal is already open
		if (modal.matches(".open")) {
			console.info("Modal already open");
			return; //stop the function from running
		}
	}

	function showImage(el) {
		if (!el) {
			console.log("no image to show");
			return;
		}
		// update the modal with this info
		console.log(el);
		modal.querySelector("img").src = el.src;
		modal.querySelector("h2").textContent = el.title;
		modal.querySelector("figure p").textContent = el.dataset.description;
		currentImage = el;
		openModal();
	}

	images.forEach((image) =>
		image.addEventListener("click", (e) => showImage(e.currentTarget))
	);
}

// Use it on the page

const gallery1 = Gallery(document.querySelector(".gallery1"));
const gallery2 = Gallery(document.querySelector(".gallery2"));
