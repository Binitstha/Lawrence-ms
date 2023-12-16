const menuBtn = document.getElementById("menuBtn");
const sidebar = document.getElementById("sidebar");
const menuIcon = document.getElementById("menuIcon");
menuBtn.addEventListener("click", () => {
	changeLogo();
	displaySidebar();
	return;
});

const displaySidebar = () => {
	if (sidebar.classList.contains("-left-64")) {
		sidebar.classList.replace("-left-64", "-left-0");
	} else {
		sidebar.classList.replace("-left-0", "-left-64");
	}
	return;
};
const changeLogo = () => {
	if (menuIcon.classList.contains("fa-bars")) {
		menuBtn.classList.replace("left-2", "left-44");
		menuIcon.classList.replace("fa-bars", "fa-xmark");
		menuBtn.style.border = "none";
	} else {
		menuBtn.classList.replace("left-44", "left-2");
		menuIcon.classList.replace("fa-xmark", "fa-bars");
		menuBtn.style.border = "2px solid skyblue";
	}
	return;
};

const userProfile = document.getElementById("userProfile");
const userDetails = document.getElementById("userDetails");
userProfile.addEventListener("click", (e) => {
	e.stopPropagation();
	if (userDetails.classList.contains("hidden")) {
		userDetails.classList.replace("hidden", "flex");
		return userProfile.classList.replace("rounded-full", "rounded-md");
	}
	return hideDetails();	
});

const hideDetails = () => {
	userDetails.classList.replace("flex", "hidden");
	return userProfile.classList.replace("rounded-md", "rounded-full");
};

document.addEventListener("click", (e) => {
	if (
		e.target != userDetails &&
		e.target != userProfile &&
		userDetails.classList.contains("flex")
	) {
		hideDetails();
	}
	return;
});
