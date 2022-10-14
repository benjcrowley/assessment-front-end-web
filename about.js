console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('form has been submitted "sUcSESsFuLLy"')

}

function hoverCompliment() {
	alert('You are as cute as a kitten and a duck playing scabble together')
}

let form = document.querySelector('#contact');
let pictureHover = document.querySelector('img')

pictureHover.addEventListener('mouseover', hoverCompliment)
form.addEventListener('submit', handleSubmit);