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
    e.subjects.forEach((el)=>{
        subjectHTML+=`<p class="text-[.9rem]">${el}</p>`
    })

    listItem.innerHTML = `<div class="p-2 rounded-md cursor-pointer hover:bg-slate-300 hover:scale-105 transition-all ease-in-out shadow-xl box1 w-[17rem] h-[15rem]">
    <div class="text-3xl">semester ${e.id}</div>
        <div class="h-[64%] p-2">
        ${subjectHTML}
        </div>
        <hr>
        <div class="flex justify-end">
            <a id="subjectBtn" href="subject.html" class="mt-2 bg-slate-200 rounded-sm p-1 w-24">Subjects -></a>
        </div>
        </div>`
    semesterDiv.appendChild(listItem)
})




// const subjectBtn = document.getElementById("subjectBtn")

// subjectBtn.addEventListener('click',()=>{
//     console.log("HEllllo")
// })

// console.log("Helleleal")