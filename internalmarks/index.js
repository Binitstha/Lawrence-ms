const submitBtn = document.getElementById("submitBtn");
const assignmentmodel = document.getElementById("assignment-view-modal");
const attendanceInput = document.getElementById("attandenceInput");
const labworksInput = document.getElementById("labworksInput");
const assignmentInput = document.getElementById("assignmentInput");
const submitMarksBtn = document.getElementById("marksSubmit");
const x = document.getElementById("ass-model-close-btn");
const student = document.querySelectorAll(".std-name");
const studentNameRender = document.getElementById("studentName");
studentNameRender.addEventListener("click", (el) => {
    const clickedElement = el.target.closest(".std-name");
    assignmentmodel.style.top = "0vh";
    assignmentmodel.style.transition = "1s ease-in ease-out";
});

x.addEventListener("click", () => {
    assignmentmodel.style.top = "-100vh";
});

fetch("http://localhost:3000/studentData", {
    method: "GET",
    headers: {
        "content-type": "application/json",
    },
})
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        data.studentNames.forEach((el) => {
            const listItem = document.createElement("ul");
            listItem.innerHTML = `<div class="std-name rounded-lg shadow-lg bg-white mt-1 p-2 w-max min-w-[18.2rem]">
        <div class="font-bold text-2xl">
        <p>${el}</p>
        </div>`;
            studentNameRender.appendChild(listItem);
        });
        console.log("Fetched");
    })
    .catch((error) => {
        console.log(error);
    });

submitMarksBtn.addEventListener("click", () => {
    const calculateMarks =
        Number(attendanceInput.value) +
        Number(labworksInput.value) +
        Number(assignmentInput.value);
    const status = {
        "marks": calculateMarks,
        "studentid": 102,
        "semester": "1st",
        "remark": "Fail"
    };
    try {

        fetch("http://localhost:3000/internalMarks", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(status)
        })
            .then((response) => {
                if (!response.ok) {
                    throw "Response Error";
                }
                else {
                    console.log("Data inserted")
                }
                return response.json;
            })
            .then((data) => {
                return data;
            })
            .catch((error) => {
                console.log(error);
            });
    } catch (err) {
        console.log("err")
    }
});
