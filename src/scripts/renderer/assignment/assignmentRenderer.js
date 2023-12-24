const assignmentModal = document.getElementById("assignment-view-modal");
const closeBtn = document.getElementById("ass-model-close-btn");
closeBtn.addEventListener("click", () => {
	assignmentModal.style.top = "-100vh";
});
var assignments = [];

fetch("http://localhost:3000/getAssignments", {
	method: "GET",
	headers: {
		"content-type": "application/json",
	},
})
	.then((response) => {
		if (!response.ok) {
			return console.log("Bad response");
		} else return response.json();
	})
	.then((resData) => {
		// console.log(data);

		resData.data.forEach((item) => {
			assignments.push(item);
			const newAss = document.createElement("div");
			newAss.innerHTML = `<div class="flex rounded-lg w-full  bg-gray-100 shadow-md justify-between ass-list-item hover:shadow-2xl transition duration-300" data-id=${item.id}>
			<div class="header-and-des flex flex-col">
				<div class="header font-bold text-xl p-2" >${item.header}</div>
				<div class="desc p-2" >${item.description}</div>
			</div>
			<div class="flex">
				<div class="flex flex-col justify-between py-2 pr-2">
					<div>Assigned </div>
					<div>Due:</div>
				</div>
				<div class="flex flex-col justify-between py-2 pr-2">
					<div id="ass-assigned-date"  >${item.assignedDate}</div>
					<div id="ass-due-date" >${item.dueDate}</div>
				</div>
			</div>
		</div>`;
			assignmentList.appendChild(newAss);
		});
		assignListeners();
	});
const assignmentList = document.getElementById("assignment-list");
const assignmentHeader = document.getElementById("assignmentHeader");
const assignmentDescription = document.getElementById("assignmentDescription");
const assignmentAssignedDate = document.getElementById(
	"assignmentAssignedDate"
);
const assignmentDueDate = document.getElementById("assignmentDueDate");

const assignListeners = () => {
	// const listItem=document.getElementsByClassName('ass-list-item');
	const listItem = document.querySelectorAll(".ass-list-item");
	listItem.forEach((item) => {
		const id = item.getAttribute("data-id");
		item.addEventListener("click", () => {
			modelOpener(id);
		});
	});
};
function modelOpener(id) {
	console.log(Number(id));
	const currentItem = assignments.find((item) => {
		return item.id === Number(id);
	});
	console.log(assignments);

	console.log(currentItem);
	assignmentHeader.innerHTML = currentItem.header;
	assignmentDescription.innerHTML = currentItem.description;
	assignmentAssignedDate.innerHTML = currentItem.assignedDate;
	assignmentDueDate.innerHTML = currentItem.dueDate;

	assignmentModal.style.top = "0";
}
