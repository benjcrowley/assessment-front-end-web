const colorBtn = document.querySelector('#color')
const placeBtn = document.querySelector('#place')
const ritualBtn = document.querySelector('#ritual')

function alertColor() {
    alert("my favorite color is blue jolly rancher color")
}
function alertPlace() {
    alert('my favorite place is hawaii')
}
function alertRitual() {
    alert('my favorite ritual is exercising')
}

colorBtn.addEventListener('click', alertColor)
placeBtn.addEventListener('click', alertPlace)
ritualBtn.addEventListener('click', alertRitual)