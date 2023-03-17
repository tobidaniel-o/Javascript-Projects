// Make a div
const div = document.createElement("div");

// add a class of wrapper to it
div.classList.add("wrapper");
// put it into the body
document.body.append(div);

// make an unordered list
const ul = document.createElement("ul");
// add three list items with the words "one, two, three" in them
ul.innerHTML = `
    <li>one</li>
    <li>two</li>
    <li>three</li>
`;
// put that list into the above wrapper
document.querySelector(".wrapper").append(ul);

// create an image
const img = document.createElement("img");

// set the source to an image
img.src = "https://picsum.photos/500";
// set the width to 250
img.width = 250;
// add a class of cute
img.classList.add("cute");
// add an alt of Cute Puppy
img.alt = "Cute Puppy";
// Append that image to the wrapper
document.querySelector(".wrapper").append(img);

// with HTML string, make a div, with two paragraphs inside of it
const twoParagraphs = document.createElement("div");
twoParagraphs.innerHTML = `<p>First Paragraph</p><p>Second Paragraph</p>`;

// put this div before the unordered list from above
ul.insertAdjacentElement("beforebegin", twoParagraphs);

// add a class to the second paragraph called warning
twoParagraphs.querySelectorAll("p")[1].classList.add("warning");
// remove the first paragraph
twoParagraphs.querySelectorAll("p")[0].remove();

// create a function called generatePlayerCard that takes in three arguments: name, age, and height

function generatePlayerCard(name, age, height) {
	return `<div class="playerCard">
                <h2>${name} — ${age}</h2>
                <p>They are ${height} and ${age} years old. In Dog years this person would be ${age}INDOGYEARS. That would be a tall dog!</p>
            </div>`;
}

// have that function return html that looks like this:
// <div class="playerCard">
//   <h2>NAME — AGE</h2>
//   <p>They are HEIGHT and AGE years old. In Dog years this person would be AGEINDOGYEARS. That would be a tall dog!</p>
// </div>

// make a new div with a class of cards
const cards = document.createElement("div");
cards.classList.add("cards");

// make 4 player cards using generatePlayerCard
let cardHTML = generatePlayerCard("Jack", 2, "73cm");
cardHTML += generatePlayerCard("Rob", 4, "65cm");
cardHTML += generatePlayerCard("Kin", 1, "35cm");
cardHTML += generatePlayerCard("Kimu", 2, "30cm");

// append those cards to the div
cards.innerHTML = cardHTML;

// put the div into the DOM just before the wrapper element
div.insertAdjacentElement("beforebegin", cards);
// Bonus, put a delete Button on each card so when you click it, the whole card is removed

// select all the buttons!
// make out delete function
// loop over them and attach a listener
