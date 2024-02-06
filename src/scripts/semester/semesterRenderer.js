const semesters = [
    {
        id: "First",
        teacherCount:5,
        subjectCount:'5',
        imgPath:'../../assets/firstSemester-icon.png'
    }, 
    {
        id: "Second",
        teacherCount:5,
        subjectCount:'5',
        imgPath:'../../assets/secondSemester-icon.png'
    }, 
    {
        id: "Third",
        teacherCount:5,
        subjectCount:'5',
        imgPath:'../../assets/thirdSemester-icon.png'
    }, 
    {
        id: "Fourth",
        teacherCount:5,
        subjectCount:'5',
        imgPath:'../../assets/forthSemester-icon.png'
    }, 
    {
        id: "Fifth",
        teacherCount:5,
        subjectCount:'5',
        imgPath:'../../assets/fifthSemester-icon.png'
    }, 
    {
        id: "Sixth",
        teacherCount:5,
        subjectCount:'5',
        imgPath:'../../assets/sixthSemester-icon.png'
    }, 
    {
        id: "Seventh",
        teacherCount:5,
        subjectCount:'5',
        imgPath:'../../assets/seventhSemester-icon.png'
    }, 
    {
        id: "Eighth",
        teacherCount:5,
        subjectCount:'5',
        imgPath:'../../assets/eighthSemester-icon.png'
    }, 
    
]

const semesterContainer=document.getElementById('semesterContainer');

semesters.forEach((semester) => {
    const listItem = document.createElement("div");
    listItem.innerHTML=`<div class="semester h-36 bg-blue-300  rounded-md p-2 flex flex-col justify-between  bg-center bg-cover bg-no-repeat cursor-pointer hover:scale-[1.1] transition-all ease-in-out shadow-md" style="background-image: url(${semester.imgPath});">
                    
    <div class="lowerDiv bg-white rounded-md px-2 font-semibold h-fit w-fit" >
        ${semester.id} Semester
    </div>
    <div class="lowerDiv bg-white rounded-md px-2 font-semibold h-fit flex justify-between" >
        <div>${semester.subjectCount} Subjects</div>
        <div>${semester.teacherCount} Teachers</div>
    </div>
</div>`;
semesterContainer.append(listItem);
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

