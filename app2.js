const reviews = [
  {
    id: 1,
    name: "Martin Smith",
    job: "Lawyer at Wright LLC",
    img:
      "co.jpeg",
    text:
      "I enjoy the environment of the Diner. It is vast, but also small. I love the Spicy Burger during my lunch break. In the mornings I recommend the Oatmeat meal, it makes me full until my spicy treat at noon. 5 stars, I recommend totally. ",
  },
  {
    id: 2,
    name: "Ana Jackson",
    job: "Web developer at Max Co.",
    img:
      "gl.jpeg",
    text:
      "I enjoy how fast the Diner is. It is packed, but quick. I love the blueberry panackes during breakfast. The coffee is always fresh and hot: it is my go to place. My friends and I love going here. 5 stars, I recommend totally",
  },
  {
    id: 3,
    name: "Jen Jones",
    job: "Intern at TechStar",
    img:
      "wg.jpeg",
    text:
      "I enjoy how friendly the Diner is. Everyone is always smiling and never mad. I love the blueberry panackes during breakfast. Their Choco-coffee is FIRE. My coworkers and I love going here. 5 stars, I recommend totally.",
  },
  {
    id: 4,
    name: "Nikki Nicholas",
    job: "Fashion Designer at Gizzo",
    img:
      "wc.jpeg",
    text:
      "I enjoy how late the Diner stays open. Everyone is always quick with their orders and always positive. I love the spaghetti during dinner. Also, their Choco-coffee is to die for. My coworkers and I love going here. 6 out of 5 stars, I recommend totally.",
  },
];

const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");


let currentItem = 0;


window.addEventListener("DOMContentLoaded", function () {
  const item = reviews[currentItem];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
});


function showPerson(person) {
  const item = reviews[person];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
}

nextBtn.addEventListener("click", function () {
  currentItem++;
  if (currentItem > reviews.length - 1) {
    currentItem = 0;
  }
  showPerson(currentItem);
});

prevBtn.addEventListener("click", function () {
  currentItem--;
  if (currentItem < 0) {
    currentItem = reviews.length - 1;
  }
  showPerson(currentItem);
});

randomBtn.addEventListener("click", function () {
  console.log("hello");

  currentItem = Math.floor(Math.random() * reviews.length);
  showPerson(currentItem);
});
