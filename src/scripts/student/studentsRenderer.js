import Cookies from "js-cookie";
const studentsContainer=document.getElementById('studentsContainer');

const fetchStudents=async ()=>{
    await fetch('http://localhost:3000/api/user/getAllStudents',{
        method:'GET',
        headers:{
            "content-type":"application/json",
            "authorization": "Bearer " + Cookies.get("token"),
        }
    }).then((response)=>{
        if(!response.ok){
            return console.log('Response error');
        }
        return response.json();
    }).then((responseData)=>{
        console.log(responseData);
        responseData.data.forEach((student)=>{
            // const card=document.createElement('div');
            
            studentsContainer.innerHTML+=` <div id="studentCard" class="flex w-[230px] flex-col shadow-md hover:shadow-xl transition-all ease-in-out pt-20  bg-blue-300 rounded-md relative">
            <div class="bg-blue-100 px-2 pb-2 rounded-t-xl rounded-b-md">
            <div class="rounded-full flex justify-center items-center border-2 border-black  absolute top-4 left-20 h-[80px] w-[80px] overflow-hidden"><img src="http://localhost:3000/${student.photo}" class=" w-auto:" alt=""></div>
            <div class="name font-bold text-xl pt-8 text-center">${student.name}</div>
            <div class="semster leading-[5px] text-center text-sm absolute top-3 left-36 bg-blue-400 text-white p-2 rounded-full">${student.Student[0].semester_id} </div>
            <br><hr class="border-blue-800">
            <div class="student-stats flex justify-between text-sm pb-5 text-blue-900">
                <div>
                    <div>Attendance</div>
                    <div>Assignments</div>
                    <div>Lab Works</div>
                </div>
                <div>
                    <div class="attendanceCount">10</div>
                    <div class="assignmentCount">30</div>
                    <div class="labWorkCount">30</div>
                </div>
            </div>
            </div>
        </div> `
        console.log(student);
        // studentsContainer.appendChild(card);
        })

    })
}
fetchStudents();