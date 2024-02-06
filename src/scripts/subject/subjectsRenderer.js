
    const subjects = [{
    id: 1,
    semSubs: [
        {
            SubjectName: ["Physics", "Digital logic", "Mathematics I", "Introduction of Information and technology", "C programming"],
            ChapterName: [
                "1Chapter1", "1chapter2", "1chapter3", "1chapter4", "1chapter5"
            ]
        },
    ]
},
{
    id: 2,
    semSubs: [
        {
            SubjectName: ["Microprocessor", "sub2", "sub2", "sub2", "sub2", "sub2",],
            ChapterName: [
                "1Chapter1", "1chapter2", "1chapter3", "1chapter4", "1chapter5"
            ]
        },
    ],
},
{
    id: 3,
    semSubs: [
        {
            SubjectName: ["Physics", "sub2", "sub2", "sub2", "sub2", "sub2",],
            ChapterName: [
                "1Chapter1", "1chapter2", "1chapter3", "1chapter4", "1chapter5"
            ]
        },
    ],
},
{
    id: 4,
    semSubs: [
        {
            SubjectName: ["Physics", "sub2", "sub2", "sub2", "sub2", "sub2",],
            ChapterName: [
                "1Chapter1", "1chapter2", "1chapter3", "1chapter4", "1chapter5"
            ]
        },
    ],
},
{
    id: 5,
    semSubs: [
        {
            SubjectName: ["Physics", "sub2", "sub2", "sub2", "sub2", "sub2",],
            ChapterName: [
                "1Chapter1", "1chapter2", "1chapter3", "1chapter4", "1chapter5"
            ]
        },
    ],
},
{
    id: 6,
    semSubs: [
        {
            SubjectName: ["Physics", "sub2", "sub2", "sub2", "sub2", "sub2",],
            ChapterName: [
                "1Chapter1", "1chapter2", "1chapter3", "1chapter4", "1chapter5"
            ]
        },
    ],
},
{
    id: 7,
    semSubs: [
        {
            SubjectName: ["Physics", "sub2", "sub2", "sub2", "sub2", "sub2",],
            ChapterName: [
                "1Chapter1", "1chapter2", "1chapter3", "1chapter4", "1chapter5"
            ]
        },
    ],
},
{
    id: 8,
    semSubs: [
        {
            SubjectName: ["Physics", "sub2", "sub2", "sub2", "sub2", "sub2",],
            ChapterName: [
                "1Chapter1", "1chapter2", "1chapter3", "1chapter4", "1chapter5"
            ]
        },
    ],
}]
const subjectDiv = document.getElementById("subjectDiv")

function subNameRender(semesterId) {
    const selectedSemester = subjects.find((sem) => sem.id == semesterId)
    if (selectedSemester) {
        selectedSemester.semSubs.forEach((subjects) => {
            subjects.SubjectName.forEach((SubjectName) => {
                const listItem = document.createElement("div")
                let chapterHTML = ''
                subjects.ChapterName.forEach((ChapterName) => {
                    chapterHTML += `<p class="text-sm">${ChapterName}</p>`
                })
                listItem.innerHTML = `<div class="p-2 rounded-md cursor-pointer bg-blue-200  hover:scale-[1.03] transition-all ease-in-out shadow-xl box2 w-[17rem] h-[15rem]">
                                          <div class="text-3xl h-[2.4rem] text-ellipsis truncate">${SubjectName}</div>
                                          <div class="h-[64%] p-2">
                                            ${chapterHTML}
                                          </div>
                                          <hr>
                                          <div class="flex justify-end">
                                          <a href="subject.html" class="mt-2 bg-slate-200 rounded-sm p-1 px-3">Syllabus</a>
                                          </div>
                                          </div>`

                subjectDiv.appendChild(listItem)
            })
        })
    }
}

document.addEventListener('DOMContentLoaded', function () {
    const semesterId = getCookie('semesterId');

    const semesteriddiv = document.getElementById("semesterId")
    const semesterItem = document.createElement("p")
    semesterItem.innerHTML = `<p class="text-3xl p-5">Semester ${semesterId}</p>`
    semesteriddiv.appendChild(semesterItem)

    subNameRender(semesterId)
});

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