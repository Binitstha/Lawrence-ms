import { assignmentFetch } from "./assignmentRenderer";
const closeBtn = document.getElementById("addAssignmentModalCloseBtn");
const assinmentModel = document.getElementById("addAssignmentModal");
const addAssingment = document.getElementById("addAssignment");
const submit = document.getElementById("submitBtn");

const semesterValue = document.getElementById("semesterValue");
const assignmentTitle = document.getElementById("addAssignmentTitle");
const assignmentDesc = document.getElementById("addAssignmentDesc");
const assignmentDate = document.getElementById("addAssignmentDate");

const confirmationBox = document.getElementById("confirmationBox")
const errorBox = document.getElementById("errorBox")
const serverErrorBox = document.getElementById("serverErrorBox")

addAssingment.addEventListener("click", () => {
	assinmentModel.style.top = "0";
	assignmentTitle.value = '';
	assignmentDesc.value = '';
	assignmentDate.value = '';
});

closeBtn.addEventListener("click", () => {
	assinmentModel.style.top = "-100vh";
});

submit.addEventListener("click", () => {
	const result = {
		semester: semesterValue.value,
		Title: assignmentTitle.value,
		Description: assignmentDesc.value ? assignmentDesc.value : "No description",
		Date: assignmentDate.value ? assignmentDate.value : "No due date"
	}
	console.log(result);

	fetch("http://localhost:3000/api/assignment/addAssignment", {
		method: "POST",
		headers: {
			"content-type": "application/json",
		},
		body: JSON.stringify(result)
	})
		.then(response => {
			// assinmentModel.style.top = "-100vh";
			if (response.ok) {
				assinmentModel.style.top = "-100vh";
				assinmentModel.style.transition = "ease-out .3s";
				confirmationBox.style.transition = "ease-out .3s";
				
				setTimeout(() => {
					confirmationBox.style.top = "-100vh";
				}, 2500);

				setTimeout(() => {
					assinmentModel.style.top = "-100vh";
					confirmationBox.style.top = "0";
				}, 500);
				assignmentFetch(1);

			} else if (response.status == 403) {
				const errorBox = document.getElementById("errorBox");
				errorBox.style.transition = "ease-out .3s";
				errorBox.style.top = "0";
				setTimeout(() => {
					errorBox.style.top = "-100vh";
				}, 2500);

			} else {
				const serverErrorBox =
					document.getElementById("serverErrorBox");
				serverErrorBox.style.transition = "ease-out .3s";
				serverErrorBox.style.top = "0";
				setTimeout(() => {
					serverErrorBox.style.top = "-100vh";
				}, 2500);
			}
		})
		.then(data => data)
		.catch(err => console.error(err))

})

