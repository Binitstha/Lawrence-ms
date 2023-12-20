const syllabusDiv = document.getElementById("syllabusDiv")

const subjectCode = getCookie('subjectCode');
document.addEventListener('DOMContentLoaded', function () {
    const semesterId = getCookie('semesterId');
    const semesteriddiv = document.getElementById("semesterId")
    const semesterItem = document.createElement("p")
    semesterItem.innerHTML = `<p class="text-4xl">Semester ${semesterId}</p>`
    semesteriddiv.appendChild(semesterItem)

    const selectedSemester = chapterName.find((sem) => sem.semesterId == semesterId)
    if (selectedSemester) {
        selectedSemester.subjects.forEach((subjects) => {
            if (subjects.subjectId == subjectCode) {

                subjects.chapters.forEach((chapters, index) => {
                    const listItem = document.createElement("div")
                    listItem.innerHTML = `<div>
                                    <label>
                                      ${index + 1 + "."}
                                      ${chapters}
                                      <input class="w-5 h-5" data-index=${index + 1} id="chapterComplete" name="chapterComplete" type="checkbox"/>
                                    </label>
                                    </div>`
                    syllabusDiv.appendChild(listItem)
                })
            }
        })
    }
})
function getCookie(name) {
    const cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i].trim();
        if (cookie.startsWith(name + '=')) {
            return cookie.substring(name.length + 1);
        }
    }
    return null;
}

const saveBtn = document.getElementById("saveBtn")
saveBtn.addEventListener('click', () => {
    const checkBoxes = document.querySelectorAll('input[type="checkbox"]');

    const syllabusData = Array.from(checkBoxes).map((checkBox) => {
        const Subjectcode = subjectCode
        const chapterid = checkBox.getAttribute('data-index')
        const status = checkBox.checked
        return ({ chapterid, status, Subjectcode })
    })
    console.log(JSON.stringify(syllabusData))

    fetch('http://localhost:3000/syllabus', {
        method: 'POST',
        headers: {
            "content-type": "application/json",
        },
        body: JSON.stringify(syllabusData)
    })
        .then((response) => {
            if (!response.ok) throw "response error"
            return response.json()
        })
        .then((data) => {
            console.log(data)
        }).catch((err => {
            console.log(err)
        }))

})