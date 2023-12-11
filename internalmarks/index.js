const submitBtn = document.getElementById("submitBtn")
const student = document.querySelectorAll(".std-name")
const assignmentmodel = document.getElementById("assignment-view-modal")

const attendanceInput = document.getElementById("attandenceInput")
const labworksInput = document.getElementById("labworksInput")
const assignmentInput = document.getElementById("assignmentInput")
const submitMarksBtn = document.getElementById("marksSubmit")
const x = document.getElementById('ass-model-close-btn')

student.forEach(el => {
    el.addEventListener("click", () => {
        assignmentmodel.style.top = "0vh"
        assignmentmodel.style.transition = "1s ease-in ease-out"
    })
});

x.addEventListener("click", () => {
    assignmentmodel.style.top = "-100vh"
})


submitMarksBtn.addEventListener('click', () => {
    const marks = Number(attendanceInput.value) + Number(labworksInput.value) + Number(assignmentInput.value)

    const status = ()=>{
        return {marks,studentid}
    }
    fetch('http://localhost:3000/internalmark', {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify(marks)
    })
        .then((response) => {
            if (!response.ok) {
                throw "Response Error"
            }
            return response.json;
        }).then((data) => {
            console.log(data);
        }).catch((error) => {
            console.log(error);
        })
})