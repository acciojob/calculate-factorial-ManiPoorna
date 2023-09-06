//your JS code here. If required.
let number = parseInt(prompt())
let factorial = 1;
for (let i = 1; i <= number; i++) {
	factorial*=i;
}

alert(`The factorial of 5 is ${factorial}`)