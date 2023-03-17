const wes = document.querySelector(".wes");
// wes.addEventListener("click", function (event) {
// 	event.preventDefault();
// 	const shouldChangePage = confirm(
// 		"This website might be malicious!, do you wish to proceed?"
// 	);
// 	if (shouldChangePage) {
// 		window.location = event.currentTarget.href;
// 	}
// });

// Another way is this:
wes.addEventListener("click", function (event) {
	const shouldChangePage = confirm(
		"This website might be malicious!, do you wish to proceed?"
	);
	if (!shouldChangePage) {
		event.preventDefault();
	}
});

const signupForm = document.querySelector('[name="signup"]'); //selecting something based on its name like the form, you use [name="signup"]
signupForm.addEventListener("submit", function (event) {
	const name = event.currentTarget.name.value;
	event.preventDefault();
	// console.log(event.currentTarget.email.value);
	// console.log(event.currentTarget.agree.checked);
	if (name.includes("chad")) {
		alert("Sorry bro");
		event.preventDefault();
	}
});

function logEvent(event) {
	console.log(event.type);
	console.log(event.currentTarget.value);
}
signupForm.name.addEventListener("keyup", logEvent);
signupForm.name.addEventListener("keydown", logEvent);
signupForm.name.addEventListener("focus", logEvent);
signupForm.name.addEventListener("blur", logEvent);
// events with form inputs - 'keyup', 'keydown', 'focus', 'blur'
