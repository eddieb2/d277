const emailInput1 = document.getElementById('emailInput1');
const emailInput2 = document.getElementById('emailInput2');

// Email verification: This will change the background color of the email input boxes depending on whether or not the email address match.
emailInput1.addEventListener('input', function () {
	if (emailInput1.value !== emailInput2.value) {
		emailInput1.style.backgroundColor = 'pink';
		emailInput2.style.backgroundColor = 'pink';
	} else {
		emailInput1.style.backgroundColor = 'lightgreen';
		emailInput2.style.backgroundColor = 'lightgreen';
	}
});

emailInput2.addEventListener('input', function () {
	if (emailInput1.value !== emailInput2.value) {
		emailInput1.style.backgroundColor = 'pink';
		emailInput2.style.backgroundColor = 'pink';
	} else {
		emailInput1.style.backgroundColor = 'lightgreen';
		emailInput2.style.backgroundColor = 'lightgreen';
	}
});
