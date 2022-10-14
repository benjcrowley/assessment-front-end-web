const restaurantBtn = document.querySelector('#randomRestaurant')

let restauantArr = ['Jimmy Johns', 'Bumblebees', 'little ceasars', 'two jacks pizza (get the ranch)', 'more Betters', 'Bombay house', 'Midici Pizza', 'swig', 'wendys', 'cafe rio', 'in-n-out', 'Thai Papaya Cuisine', 'Five Sushi Brothers', 'Bowls Superfoods']

function chooseRestaurant() {
    let choice = restauantArr[Math.floor((Math.random() * restauantArr.length))]
    

}