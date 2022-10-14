
// Set up my querySelectors
const restaurantBtn = document.querySelector('#randomRestaurant')
const restaurantSelection = document.querySelector('#restaurant-choice')

//create an array of possible restaurants
let restauantArr = ['Jimmy Johns', 'Bumblebees', 'little ceasars', 'two jacks pizza (get the ranch)', 'more Betters', 'Bombay house', 'Midici Pizza', 'swig', 'wendys', 'cafe rio', 'in-n-out', 'Thai Papaya Cuisine', 'Five Sushi Brothers', 'Bowls Superfoods']

//write a function that will choose a random restaurant (this will be invoked later)
function chooseRestaurant() {
    let choice = restauantArr[Math.floor((Math.random() * restauantArr.length))]
    
    restaurantSelection.textContent = "You should try " + choice
}

// add an event listener to the button so when it is clicked, the chooseRestaurant function is called
restaurantBtn.addEventListener('click', chooseRestaurant)