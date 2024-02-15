const passwordInput = document.getElementById("password");
import Cookies from "js-cookie";
// change eye icon
const eyeIcon = document.getElementById("eyeIcon");
eyeIcon.addEventListener("click", () => {
	eyeIcon.classList.contains("fa-eye")
		? eyeIcon.classList.replace("fa-eye", "fa-eye-slash") &&
		passwordInput.setAttribute("type", "password")
		: eyeIcon.classList.replace("fa-eye-slash", "fa-eye") &&
		passwordInput.setAttribute("type", "text");
});

//login
const loginBtn = document.getElementById("loginBtn");

const loginBtnLoading=document.getElementById("loginBtn")
const loadingText=document.getElementById("loadingText");
const loadingDots=document.getElementById("loadingDots");
const setLoading = () => {
	loadingText.classList.add("hidden");
	loadingDots.classList.remove("hidden");
	// setTimeout(()=>{
	// 	loginBtnLoading.innerHTML = "Logging in..";
	// },250);
	// setTimeout(()=>{
	// 	loginBtnLoading.innerHTML = "Logging in...";
	// },500);
	// setTimeout(()=>{
	// 	setLoading();
	// },750);

};
const removeLoading = () => {
	document.getElementById("loginBtn").innerHTML = "Login";
	loadingText.classList.remove("hidden");
	loadingDots.classList.add("hidden");
};
const errorBox = document.getElementById("errorBox")

const passwordDiv = document.getElementById("password")
passwordDiv.addEventListener("change",()=>{
	errorBox.classList.replace("flex","hidden")
})
const form = document.getElementById('form')
form.addEventListener("submit",(event)=>{
	event.preventDefault()
	setLoading();
	const email = document.getElementById("email").value;
	const password = btoa(document.getElementById("password").value);
	fetchToken(email, password);
})

const fetchToken = (email, pass) => {
	const requestBody = {
		email: email,
		password: pass,
	};
	fetch("http://localhost:3000/auth/signIn", {
		method: "POST",
		headers: {
			"content-type": "application/json",
		},
		body: JSON.stringify(requestBody),
	})
		.then((response) => {
			if (!response.ok) {
				return console.log("response error");
			}
			return response.json();
		})
		.then(async (resData) => {
			if (resData.status != 200) {
				removeLoading();
				errorBox.classList.replace("hidden","flex")
				return console.log(resData.error.message);
			}
			Cookies.set("token", resData.data, { expires: 15 });
			// localStorage.setItem("token", resData.data);
			return storeDataToLocalstorage(resData.data);
		});
};

const storeDataToLocalstorage = async (token) => {
	fetch("http://localhost:3000/auth/getFullUserDetails", {
		method: "POST",
		headers: {
			"content-type": "application/json",
			Authorization: `Bearer ${token}`
		},
	}).then((response) => {
		if (!response.ok) {
			return console.log("Response error");
		}
		return response.json();
	}).then((data) => {
		console.log(data)
		const { photo, ...userDetail } = data.data
		localStorage.setItem('user-details', JSON.stringify(userDetail));
		return (window.location.href = "/dashboard/");
	}).catch((err) => {
		console.error(err)
	})
}