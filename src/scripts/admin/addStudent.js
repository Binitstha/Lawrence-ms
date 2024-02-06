document.getElementById("addStudentForm").addEventListener("submit", (e) => {
	e.preventDefault();
	const formData = new FormData(e.target);
	formData.append("role", "student");
	fetch("http://localhost:3000/api/student/addStudent", {
		method: "POST",
		body: formData,
	})
		.then((response) => {
			return response.json();
		})
		.then((data) => {
            notify("Student data inserted");
			return console.log(data);
		});
});

const notifyModal = document.getElementById("addStudentModal");
const notifyModalText=document.getElementById('notifyModal');
const notify =async (text) => {
	notifyModalText.innerHTML = text;
	notifyModal.classList.replace("-top-20", "top-20");
	 setTimeout(() => {
		notifyModal.classList.replace("top-20", "-top-20");
        location.reload();
	}, 1000);
    
    
};
