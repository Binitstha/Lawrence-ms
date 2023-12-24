const semesters = [
    {
        id: 1,
        subjects: [
            "1subjects1", "1subjects2", "1subjects3", "1subjects4", "1subjects5",
        ]
    }, {
        id: 2,
        subjects: [
            "2subjects1", "2subjects2", "2subjects3", "2subjects4", "2subjects5",
        ]
    }, {
        id: 3,
        subjects: [
            "3subjects1", "3subjects2", "3subjects3", "3subjects4", "3subjects5",
        ]
    }, {
        id: 4,
        subjects: [
            "4subjects1", "4subjects2", "4subjects3", "4subjects4", "4subjects5",
        ]
    }, {
        id: 5,
        subjects: [
            "5subjects1", "5subjects2", "5subjects3", "5subjects4", "5subjects5",
        ]
    }, {
        id: 6,
        subjects: [
            "6subjects1", "6subjects2", "6subjects3", "6subjects4", "6subjects5",
        ]
    }, {
        id: 7,
        subjects: [
            "subjects1", "subjects2", "subjects3", "subjects4", "subjects5",
        ]
    }, {
        id: 8,
        subjects: [
            "subjects1", "subjects2", "subjects3", "subjects4", "subjects5",
        ]
    },
]



const semesterDiv = document.getElementById("semesterDiv")
semesters.forEach((e) => {
    const listItem = document.createElement("div")
    let subjectHTML = ''
    e.subjects.forEach((el) => {
        subjectHTML += `<p class="text-[.9rem]">${el}</p>`
    })

    listItem.innerHTML = `<div class="p-2 rounded-md  bg-blue-200 shadow-lg  hover:scale-[1.03] transition-all ease-in-out  box1 w-[17rem] h-[15rem]">
    <div class="text-3xl">SEMESTER ${e.id}</div>
        <div class="h-[64%] p-2">
        ${subjectHTML}
        </div>
        <hr>
        <div class="flex justify-end">
            <a id="subjectBtn" href="/semesters/subjectPage" class="mt-2 subjectBtn bg-slate-200 hover:bg-blue-500 transition-all ease-in-out shadow-md rounded-sm p-1 px-4" data-id="${e.id}">Subjects</a>
        </div>
        </div>`
    semesterDiv.appendChild(listItem)
})

const subjectBtns=document.querySelectorAll('.subjectBtn');
subjectBtns.forEach((btn)=>{
	btn.addEventListener('click',()=>{
		const id=btn.getAttribute('data-id');
		cookie(id);
})

})
function cookie(semesterId) {
    const cookieString = (`semesterId=${semesterId}`);
    document.cookie = cookieString;
}

