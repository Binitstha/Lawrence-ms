const semesters = [
    {
        id:1,
        name: "First",
        teacherCount:5,
        subjectCount:'5',
        imgPath:'../../assets/firstSemester-icon.png',
    }, 
    {
        id:2,
        name: "Second",
        teacherCount:5,
        subjectCount:'5',
        imgPath:'../../assets/secondSemester-icon.png'
    }, 
    {
        id:3,
        name: "Third",
        teacherCount:5,
        subjectCount:'5',
        imgPath:'../../assets/thirdSemester-icon.png'
    }, 
    {
        id:4,
        name: "Fourth",
        teacherCount:5,
        subjectCount:'5',
        imgPath:'../../assets/forthSemester-icon.png'
    }, 
    {
        id:5,
        name: "Fifth",
        teacherCount:5,
        subjectCount:'5',
        imgPath:'../../assets/fifthSemester-icon.png'
    }, 
    {
        id:6,
        name: "Sixth",
        teacherCount:5,
        subjectCount:'5',
        imgPath:'../../assets/sixthSemester-icon.png'
    }, 
    {
        id:7,
        name: "Seventh",
        teacherCount:5,
        subjectCount:'5',
        imgPath:'../../assets/seventhSemester-icon.png'
    }, 
    {
        id:8,
        name: "Eighth",
        teacherCount:5,
        subjectCount:'5',
        imgPath:'../../assets/eighthSemester-icon.png'
    }, 
    
]

const semesterContainer=document.getElementById('semesterContainer');

semesters.forEach((semester) => {
    const listItem = document.createElement("div");
    listItem.innerHTML=`<a href='/subject/?${semester.id}' class="semester h-36 bg-blue-300  rounded-md p-2 flex flex-col justify-between  bg-center bg-cover bg-no-repeat cursor-pointer hover:scale-[1.1] transition-all ease-in-out shadow-md" style="background-image: url(${semester.imgPath});">
                    
    <div class="lowerDiv bg-white rounded-md px-2 font-semibold h-fit w-fit" >
        ${semester.name} Semester
    </div>
    <div class="lowerDiv bg-white rounded-md px-2 font-semibold h-fit flex justify-between" >
        <div>${semester.subjectCount} Subjects</div>
        <div>${semester.teacherCount} Teachers</div>
    </div>
</a>`;
semesterContainer.append(listItem);
})

// const subjectBtns=document.querySelectorAll('.subjectBtn');
// subjectBtns.forEach((btn)=>{
// 	btn.addEventListener('click',()=>{
// 		const id=btn.getAttribute('data-id');
// 		cookie(id);
// })

// })
// function cookie(semesterId) {
//     const cookieString = (`semesterId=${semesterId}`);
//     document.cookie = cookieString;
// }

