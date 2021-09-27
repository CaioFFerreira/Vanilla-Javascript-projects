let counterContainer = document.querySelector('#counter');


// controls
const decrease = document.querySelector('#decrease');
const reset = document.querySelector('#reset');
const increase = document.querySelector('#increase');

let counter = 0;

// functions
const increaseCounter = () => {
	counterContainer.innerHTML = ++counter;
	colorCounter()
}

const decreaseCounter = () => {
	counterContainer.innerHTML = --counter;
	colorCounter()
}

const resetCounter = () => {
	counter = 0;
	colorCounter()
  initCounter()
}

const initCounter = () => {
	counterContainer.innerHTML = counter;
}

const colorCounter = () => {
	if (counter > 0) return counterContainer.setAttribute('class', 'green')
	if (counter < 0) return counterContainer.setAttribute('class', 'red')
	
	return counterContainer.setAttribute('class', 'black');
}

initCounter();


decrease.addEventListener('click', decreaseCounter);
reset.addEventListener('click', resetCounter);
increase.addEventListener('click', increaseCounter);
