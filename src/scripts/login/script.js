const passwordInput = document.getElementById("password");
// change eye icon
const eyeIcon = document.getElementById("eyeIcon");
eyeIcon.addEventListener("click", () => {
	eyeIcon.classList.contains("fa-eye")
		? eyeIcon.classList.replace("fa-eye", "fa-eye-slash") &&
		  passwordInput.setAttribute("type", "password")
		: eyeIcon.classList.replace("fa-eye-slash", "fa-eye") &&
		  passwordInput.setAttribute("type", "text");
});

// notify model
const notifymodel = document.getElementById("loginModel");
const notifyModelText = document.getElementById("loginModelText");
const notify = (text) => {
	notifyModelText.innerHTML = text;
	notifymodel.style.top = "0vh";
	setTimeout(() => {
		notifymodel.style.top = "-100vh";
	}, 1000);
};
//login
const loginBtn = document.getElementById("loginBtn");

const setLoading = () => {
	document.getElementById("loginBtn").innerHTML = "Logging in...";
};
const removeLoading = () => {
	document.getElementById("loginBtn").innerHTML = "Login";
};


const loginUser = () => {
	setLoading();
	const email = document.getElementById("email").value;
	const password = btoa(document.getElementById("password").value);

	if (email == "" || password == "") {
		removeLoading();
		return notify("Fill in all the boxes");
	}
	fetchToken(email, password);
};


loginBtn.addEventListener("click", loginUser);
document.addEventListener("keydown", (e) => {
	e.key == "Enter" && loginUser();
});

const fetchToken = (email, pass) => {
	const requestBody = {
		email: email,
		password: pass,
	};
	fetch("http://localhost:3000/api/auth/signIn", {
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
				notify(resData.error.message);
				return console.log(resData.error.message);
			}
			document.cookie = `userData=${JSON.stringify(resData.data)}`;
			return storeDataToLocalstorage(resData.data.id);
			
		});
};

const storeDataToLocalstorage=async (id)=>{
	fetch("http://localhost:3000/api/auth/getFullUserDetails",{
		method:"POST",
		headers:{
			"content-type":"application/json",
		},
		body:JSON.stringify({
			id:id
		})
	}).then((response)=>{
		if(!response.ok){
			return console.log("Response error");
		}
		return response.json();
	}).then( (data)=>{
		localStorage.setItem('user-details',JSON.stringify(data.data));
	}).then(()=>{
		return (window.location.href = "/dashboard/");
	})
}