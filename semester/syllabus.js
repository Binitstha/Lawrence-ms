const contentTable = document.getElementById("contentTable")

const subjectCode = getCookie('subjectCode');
document.addEventListener('DOMContentLoaded', function () {

    const semesterId = getCookie('semesterId');
    const semesteriddiv = document.getElementById("semesterId")
    const semesterItem = document.createElement("p")
    semesterItem.innerHTML = `<p class="text-4xl">Semester ${semesterId}</p>`
    semesteriddiv.appendChild(semesterItem)

    const selectedSemester = chapterName.find((sem) => sem.semesterId == semesterId)

    fetch('http://localhost:3000/syllabusLoad', {
        method: 'GET',
        headers: {
            'Content-type': "application/json",
        },
    })
        .then(response => response.json())

        .then(data => {
            const filtersub = data.result.filter((e)=>e.subjectCode == subjectCode)
            if (filtersub && filtersub.length > 0) {
                const allStatus = filtersub.map(e => e.status).join(', ').split(', ');
                chapterRenderer(selectedSemester, allStatus)
                console.log("Data result not empty")

            }
            else {
                chapterRenderer(selectedSemester)
                console.log("Data result empty")
            }
        })
        .catch(err => console.log(err))
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
            window.location.href = "./syllabus.html"
        }).catch((err => {
            console.log(err)
        }))

})

function chapterRenderer(selectedSemester, statuses) {
    contentTable.innerHTML = '';
    if (selectedSemester) {
        selectedSemester.subjects.forEach((subjects) => {
            if (subjects.subjectId == subjectCode) {
                subjects.chapters.forEach((chapters, index) => {
                    const listItem = document.createElement("tr");
                    const checkboxId = `chapterComplete_${index + 1}`;
                    if (statuses) {
                        const status = statuses[index]
                        if (status === 'complete') {
                            listItem.innerHTML = `<td class="border-2">${index + 1 + "."}</td>
                            <td class="border-2">${chapters}</td>
                            <td class="border-2 text-center">&checkmark;</td>`;
                        } else if (status === 'incomplete' || !status) {
                            listItem.innerHTML = `<td class="border-2">${index + 1 + "."}</td>
                            <td class="border-2">${chapters}</td>
                            <td class="borcer-2 text-center"><input class="w-5 h-5" data-index=${(subjectCode) + (-(index + 1))} id="${checkboxId}" name="chapterComplete" type="checkbox"/></td>`
                        }
                    }
                    else {
                        listItem.innerHTML = `<td class="border-2">${index + 1 + "."}</td>
                        <td class="border-2">${chapters}</td>
                        <td class="borcer-2 text-center"><input class="w-5 h-5" data-index=${(subjectCode) + (-(index + 1))} id="${checkboxId}" name="chapterComplete" type="checkbox"/></td>`
                    }
                    contentTable.appendChild(listItem);
                });
            }
        });
    }
}
