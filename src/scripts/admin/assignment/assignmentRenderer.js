
const assignmentListDiv = document.getElementById("assignmentListDiv");
const assignmentModal = document.getElementById("assignmentViewModal");
const closeBtn = document.getElementById("viewAssignmentModeCloseBtn");
import Cookies from "js-cookie";
closeBtn.addEventListener("click", () => {
	assignmentModal.classList.replace("top-0", "top-[-100vh]");
});
let selectedSem = 1;
document.addEventListener("DOMContentLoaded",()=>{
	console.log("HEllp")
	assignmentFetch(selectedSem)
})

const selectSemDiv = document.getElementById("semesterSelect")
selectSemDiv.addEventListener("click", () => {
	selectedSem = selectSemDiv.value
	assignmentFetch(selectedSem)
})

export function assignmentFetch(sem) {
	assignmentListDiv.innerHTML = ''
	fetch("http://localhost:3000/api/assignment/getAssignments", {
		method: "GET",
		headers: {
			"content-type": "application/json",
			"Authorization": `Bearer ${Cookies.get("token")}`
		},
	})
		.then((response) => {
			if (!response.ok) {
				return console.log("Bad response");
			} else return response.json();
		})
		.then((resData) => {
			const selectedSemData = resData.data.filter((e) => e.semester == sem)

			if (selectedSemData) {

				selectedSemData.forEach((item) => {
					const assignmentDiv = document.createElement("div");

					assignmentDiv.classList.add("assignmentList")
					assignmentDiv.innerHTML = `
		 				<div class="flex rounded-lg bg-gray-100 shadow-md justify-between assignmentlistSemester hover:shadow-2xl transition duration-300" data-semester=${item.semester}>
		 				 	<div class=" w-64 header-and-des flex flex-col">
		 						<div class=" h-10 line-clamp-1 whitespace-pre-wrap text-ellipsis truncate title font-bold text-xl p-2">${item.title}</div>
		 						<div class="h-10 text-ellipsis whitespace-pre-wrap truncate desc p-2" >${item.description}</div>
		 					</div>
		 					<div class="flex p-1">
		 						<div class="flex flex-col justify-between py-2 pr-2">
		 							<div>Assigned:<span class="ass-assigned-date">${item.assignedDate}</span> </div>
									<div>Due date: <span class="ass-due-date">${item.dueDate}</span></div>
		 						</div>
		 						<div class=" grid gap-1 w-10 justify-center">
								   <button class=" deleteBtn w-fit"><i class="fa-solid fa-trash text-red-500"></i></button>
								   <button class=" editBtn w-fit"><i class="fa-solid fa-pen-to-square text-blue-500"></i></button>
		 						   <button class=" viewAssignmentBtn w-fit"><i class="fa-solid fa-eye"></i></button>
		 						</div>
		 					</div>
		 				</div>`;

					assignmentListDiv.appendChild(assignmentDiv);
				});
			}
			viewAssingment();
		})
		.catch(err => {
			console.log(err)
		})
}

function viewAssingment() {
	const viewBtn = document.querySelectorAll(".viewAssignmentBtn");
	Array.from(viewBtn).forEach((item) => {
		const assignment = item.closest(".assignmentList")
		item.addEventListener("click", () => {
			assignmentModal.classList.replace("top-[-100vh]", "top-0")
			document.getElementById("assignmentTitle").innerText = assignment.querySelector(".title").innerText
			document.getElementById("assignmentDesc").innerText = assignment.querySelector(".desc").innerText
			document.getElementById("assignmentAssignedDate").innerText = assignment.querySelector(".ass-assigned-date").innerText
			document.getElementById("assignmentDueDate").innerText = assignment.querySelector(".ass-due-date").innerText 
		})
	})

	const deleteBtn = document.querySelectorAll(".deleteBtn")
	Array.from(deleteBtn).forEach((item) => {
		const assignment = item.closest(".assignmentList")
		item.addEventListener("click", () => {
			const result = {
				title: assignment.querySelector(".title").innerText,
				description: assignment.querySelector(".desc").innerText,
				dueDate: assignment.querySelector(".ass-due-date").innerText,
			}
			fetch("http://localhost:3000/api/assignment/deleteAssignment", {
				method: "Delete",
				headers: {
					"content-type": "application/json",
					"Authorization": `Bearer ${Cookies.get("token")}`
				},
				body: JSON.stringify(result)
			})
				.then(response => {
					if (response.ok && response.status == 200) {
						assignmentFetch(selectedSem)
						const deleteConfirmation =
							document.getElementById("deleteConfirmation");
						deleteConfirmation.style.transition = "ease-out .3s";
						deleteConfirmation.style.top = "0";
						setTimeout(() => {
							deleteConfirmation.style.top = "-100vh";
						}, 2500);
					}
				})
				.then((Data) => Data)
				.catch(err => {
					console.log(err)
				})
		})
	})


	const editBtns = document.querySelectorAll(".editBtn")
	Array.from(editBtns).forEach((editBtn) => {

		document.getElementById("editAssignmentModalCloseBtn").addEventListener("click", () => {
			document.getElementById("editAssignmentModel").classList.replace("top-0", "top-[-100vh]");
		});
		const assignment = editBtn.closest(".assignmentList")

		editBtn.addEventListener("click", () => {
			document.getElementById("editAssignmentModel").classList.replace("top-[-100vh]", "top-0");

			document.getElementById("editAssignmentTitle").value = assignment.querySelector(".title").innerText
			document.getElementById("editSemesterValue").value = document.querySelector(".assignmentlistSemester").dataset.semester
			document.getElementById("editAssignmentDesc").value = assignment.querySelector(".desc").innerText
			document.getElementById("editAssignmentDate").value = assignment.querySelector(".ass-due-date").innerText

			const oldResult = {
				title: assignment.querySelector(".title").innerText,
				description: assignment.querySelector(".desc").innerText,
				dueDate: assignment.querySelector(".ass-due-date").innerText,
			}

			const editsubmitBtn = document.getElementById("editsubmitBtn")
			editsubmitBtn.addEventListener("click", () => {

				const newResult = {
					title: document.getElementById("editAssignmentTitle").value,
					description: document.getElementById("editAssignmentDesc").value,
					dueDate: document.getElementById("editAssignmentDate").value,
					semester: document.getElementById("editSemesterValue").value
				}

				const result = {
					oldResult: oldResult,
					newResult: newResult
				}

				fetch("http://localhost:3000/api/assignment/editAssigment", {
					method: "post",
					headers: {
						"content-type": "application/json",
						"Authorization": `Bearer ${Cookies.get("token")}`
					},
					body: (JSON.stringify(result))
				})
					.then(response => {
						if (response.ok) {
							document.getElementById("editAssignmentModel").classList.replace("top-0", "top-[-100vh]");
							console.log("Sent")
							assignmentFetch(selectedSem)
						}
					})
					.then(data => data)
					.catch(err => {
						console.log(err)
					})
			})
		})
	})
}