const subjects = [
    {
        id: 1,
        ChapterName: [
            "1Chapter1", "1chapter2", "1chapter3", "1chapter4", "1chapter5"
        ]
    },
    {
        id: 2,
        ChapterName: [
            "2Chapter1", "2chapter2", "2chapter3", "2chapter4", "2chapter5"
        ]
    }, {
        id: 3,
        ChapterName: [
            "3Chapter1", "3chapter2", "3chapter3", "3chapter4", "3chapter5"
        ]
    }, {
        id: 4,
        ChapterName: [
            "4Chapter1", "4chapter2", "4chapter3", "4chapter4", "4chapter5"
        ]
    }, {
        id: 5,
        ChapterName: [
            "5Chapter1", "5chapter2", "5chapter3", "5chapter4", "5chapter5"
        ]
    }
]


const subjectDiv = document.getElementById("subjectDiv")
subjects.forEach((e) => {
    const listItem = document.createElement("div")
    let chapterHTML = ''
    e.ChapterName.forEach((el)=>{
        chapterHTML+=`<p class="text-[.9rem]">${el}</p>`

    })
    listItem.innerHTML = `
     <div class="p-2 rounded-md cursor-pointer hover:bg-slate-300 hover:scale-105 transition-all ease-in-out shadow-xl box2 w-[17rem] h-[15rem]">
    <div class="text-3xl">subject ${e.id}</div>
    <div class="h-[64%] p-2">
    ${chapterHTML}
    </div>
    <hr>
    <div class="flex justify-end">
    <a href="subject.html" class="mt-2 bg-slate-200 rounded-sm p-1 w-24">Syllabus -></a>
    </div>
</div>`
    subjectDiv.appendChild(listItem)
})
