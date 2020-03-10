console.log("Filter");
const buttons = document.querySelectorAll("button");
const listItems = document.querySelectorAll("li");

const restaurants = [
  {
    name: "Dan's Hamburgers",
    price: 'Cheap',
    cuisine: 'Burger',
    directions: 'https://goo.gl/maps/1UwLnGjCFDkTnrsEA'
  },
  {
    name: "Austin's Pizza",
    price: 'Cheap',
    cuisine: 'Pizza',
    directions: 'https://maps.google.com/?q=Houston,+TX'
  },
  {
    name: "Via 313",
    price: 'Moderate',
    cuisine: 'Pizza',
    directions: 'https://www.google.com/maps/search/?api=1&query=centurylink+field'
  },
  {
    name: "Bufalina",
    price: 'Expensive',
    cuisine: 'Pizza',
  },
  {
    name: "P. Terry's",
    price: 'Cheap',
    cuisine: 'Burger',
  },
  {
    name: "Hopdoddy",
    price: 'Expensive',
    cuisine: 'Burger',
  },
  {
    name: "Whataburger",
    price: 'Moderate',
    cuisine: 'Burger',
  },
  {
    name: "Chuy's",
    cuisine: 'Tex-Mex',
    price: 'Moderate',
  },
  {
    name: "Taquerias Arandina",
    cuisine: 'Tex-Mex',
    price: 'Cheap',
  },
  {
    name: "El Alma",
    cuisine: 'Tex-Mex',
    price: 'Expensive',
  },
  {
    name: "Maudie's",
    cuisine: 'Tex-Mex',
    price: 'Moderate',
  },
];

const activityGrid = document.querySelector('.activity-grid');
const createGrid = restaurants.map(restaurant =>
  `<li>
  <div>Name: ${restaurant.name}</div>
  <div>Cuisine: ${restaurant.cuisine}</div>
  <div>Price: ${restaurant.price}</div>
  <div><a href="${restaurant.directions}">Address</a> </div>
  </li>
  `).join("");

activityGrid.innerHTML = createGrid;

  // const buttons = document.querySelectorAll("button");
// const listItems = document.querySelectorAll("li");
// const arr = [];

// const runFilter = (e) => {
//   e.preventDefault();
//   const categoryName = e.target.dataset // button text
//   console.log(categoryName);

//   listItems.forEach(li => {
//     if (li.dataset.category.includes(categoryName)) {
//       li.classList.add("selected");
//     } else {
//       li.classList.remove("selected");
//     }

//   })
// }

// const changeButtonColor = (e) => {
//   const selectedButton = document.querySelector(".button.selected");
//   if (selectedButton) {
//     console.log("selectedButton ", selectedButton);
//     e.target.classList.remove("selected");
//   } else {
//     e.target.classList.add("selected");
//   }
// }

// const checkDuplicates = (e) => {
//   const clickedButton = e.target.dataset.category;
//   if (arr.indexOf(clickedButton) < 0) {
//     arr.push(clickedButton);
//   } else {
//     arr.splice(arr.indexOf(clickedButton), 1);
//   }
//   console.log(arr);
// }

// buttons.forEach(button => {
//   button.addEventListener("click", (e) => {
//     changeButtonColor(e);
//     checkDuplicates(e);
//     runFilter(e);
//   })
// })
