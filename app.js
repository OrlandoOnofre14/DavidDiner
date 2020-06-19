const menu = [
  {
    id: 1,
    title: "Pancakes Blueberry ",
    category: "breakfast",
    price: 15.99,
    img: "pancake.jpg",
    desc: `Whole grain pancakes with blueberries within and mixed with layers of strawberries. The order includes 5 large pancakes, a large cup of coffee, and a side order of a bowl of fruits.`,
  },
  {
    id: 2,
    title: "Burger Spicy Sliders ",
    category: "lunch",
    price: 10.99,
    img: "burger.jpg",
    desc: ` Two slider burgers made with 100% angus beef and topped of with jalapeño peppers, griled onions, bacon, peppper jack cheese, and our special habanero-chipotle sauce. The order comes with a large sea salt and rosemary french fries and a large soda.`,
  },
  {
    id: 3,
    title: "Fruit-Smoothie VeryBerry ",
    category: "shakes",
    price: 6.99,
    img: "shake.jpg",
    desc: ` A blackberry, blueberry, strawberry, and raspberry infused milkshake using low fat milk, and low fat vanilla ice cream. The milkshake had a lime for added flavor kick. The milkshake can come included with whipped cream when asked. `,
  },
  {
    id: 4,
    title: "Breakfast Platter",
    category: "breakfast",
    price: 19.99,
    img: "breakfast.jfif",
    desc: `The large plate comes with scrambled eggs, diced roma tomatoes, Rye toasted bread, four sausages, and 4 strips of bacon. The order comes with unlimited refills on coffee for your heart's delight. `,
  },
  {
    id: 5,
    title: "Spaghetti Surprise",
    category: "lunch",
    price: 24.99,
    img: "Sp.jfif",
    desc: ` This meal comes with cooked shrimp and clams using our special blend of herbs and spices. The spaghetti uses our secret tomato mixture to enhance the flavors of the seafood and noodles. The meal comes with unlimited amount of garlic breadsticks. `,
  },
  {
    id: 6,
    title: "Milkshake Choco-coffee",
    category: "shakes",
    price: 6.99,
    img: "ml.jpg",
    desc: ` Our iced coffee milkshake frappe is toppped off with whipped cream and dark chocolate, carmel, or milk chocolate. The coffee beans are grown in Mexico and taste great. `,
  },
  {
    id: 7,
    title: "Oatmeal of Dreams",
    category: "breakfast",
    price: 8.99,
    img: "oats.jpg",
    desc: ` The banana oatmeal is given with fresh sliced apples, blueberries, chocolate milk shavings, and cinnamon. Our meal includes a large drink coffee with our healthy banana oatmeal plate.  `,
  },
  {
    id: 8,
    title: "Burrito Tex-Mex",
    category: "lunch",
    price: 18.21,
    img: "br.jpg",
    desc: ` This meal has a Tex-Mex burrito with your choice of steak, chicken, or chorizo. The burrito has white or brown rice, Monterey Jack cheese, jalapeños, and tomatoes. The meal comes with unlimited chips and salsa. `,
  },
  {
    id: 9,
    title: "Fruit-Shake Active",
    category: "shakes",
    price: 5.99,
    img: "juice.jpg",
    desc: ` Our shake comes full of nutrients and packs a punch of vitamins. The shake consists of oranges, grapefruit, and apples with a mixture of lemons. The drink is a great for boost for your active lifestyle.`,
  },
  {
    id: 10,
    title: "Steak Fest",
    category: "dinner",
    price: 39.99,
    img: "steak.jpg",
    desc: `Our five-star meal has 100% beef with our tangy steak vegetable-based special sauce. The steak comes with a side order of mashed potatoes with gravy, shrimp fried rice, or steamed vegetables and rice. The meal comes with umlimited red or white wine. `,
  },
  {
    id: 11,
    title: "Zesty-Pasta Supreme",
    category: "dinner",
    price: 19.99,
    img: "p2.jpg",
    desc: `The Rigatoni bolognese with fresh mozarella and basil. This meal comes with ground beef using our special blend of herbs and spices. The meal uses our secret tomato mixture to enhance the flavors of the beef and noodles. The meal comes with unlimited amount of garlic breadsticks.`,
  },
  {
    id: 12,
    title: "Sandwich Deluxe",
    category: "dinner",
    price: 18.99,
    img: "sandwich.JPG",
    desc: `A very tasty beef steak sandwich with onions, mushroom and melted provolone cheese in a ciabatta. The meal comes with a side order of potato slices or potato wedges. The meal includes a large drink as well.`,
  },
];

const sectionCenter = document.querySelector(".section-center");
const container = document.querySelector(".btn-container");


window.addEventListener("DOMContentLoaded", function () {
  displayMenuItems(menu);
  displayMenuButtons();
});

function displayMenuItems(menuItems) {
  let displayMenu = menuItems.map(function (item) {
    

    return `<article class="menu-item">
          <img src=${item.img} class="photo" alt=${item.title} />
          <div class="item-info">
            <header>
              <h4>${item.title}</h4>
              <h4 class="price">$${item.price}</h4>
            </header>
            <p class="item-text">
              ${item.desc}
            </p>
          </div>
        </article>`;
  });
  displayMenu = displayMenu.join("");

  sectionCenter.innerHTML = displayMenu;
}

function displayMenuButtons() {
  const categories = menu.reduce(
    function (values, item) {
      if (!values.includes(item.category)) {
        values.push(item.category);
      }
      return values;
    },
    ["all"]
  );
  const categoryBtns = categories
    .map(function (category) {
      return `<button class="filter-btn" type="button" data-id=${category}>
      ${category}
      </button>`;
    })
    .join("");
  container.innerHTML = categoryBtns;
  const filterBtns = container.querySelectorAll(".filter-btn");
  
  filterBtns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      const category = e.currentTarget.dataset.id;
      const menuCategory = menu.filter(function (menuItem) {
      
        if (menuItem.category === category) {
          return menuItem;
        }
      });
      
      if (category === "all") {
        displayMenuItems(menu);
      } else {
        displayMenuItems(menuCategory);
      }
    });
  });
}
