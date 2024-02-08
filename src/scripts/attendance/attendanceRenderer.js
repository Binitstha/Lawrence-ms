const loadingAttendanceDiv = document.getElementById("loadingAttendance");
const loadingAnimation = document.getElementById("loadingAnimation");


const setLoading = () => {
	loadingAnimation.innerHTML = "";
	setTimeout(()=>{
		loadingAnimation.innerHTML='.';
	},250);

	setTimeout(()=>{
		loadingAnimation.innerHTML='..';
	},500);

	setTimeout(()=>{
		loadingAnimation.innerHTML='...';
	},750);

	setTimeout(()=>{
		setLoading();
	},1000);
};



const fetchAttendance = (semesterId) => {
	setLoading();
	fetch(
		`http://localhost:3000/api/attendance/getAttendance?semesterId=${
			semesterId || 1
		}`,
		{
			method: "GET",
		}
	)
		.then((response) => {
			if (!response.ok) {
				console.log("Response Error");
			}
			return response.json();
		})

		.then((resData) => {
			// console.log(resData);
			const attSheet = document.getElementById("attandence");
			attSheet.innerHTML = "";
			resData.data.forEach((student) => {
				const listItem = document.createElement("li");
				listItem.innerHTML = `<div class="st-name ">${student.name}</div>
			<input type="checkbox" class="st-status rounded-full checkBoxes ml-5" data-userName='${student.name}' 
			let userId;data-id='${student.id}' ></input> `;
				listItem.classList.add(
					"justify-between",
					"flex",
					"items-center",
					"border-b-2",
					"border-gray-400"
				);
				attSheet.appendChild(listItem);
				// console.log(student);
			});
		});
};
fetchAttendance();

const semesterSelect = document.getElementById("semesterSelect");
semesterSelect.addEventListener("change", () => {
	return fetchAttendance(semesterSelect.value);
});

