const students=[
     {
         studentid : 101,
         studentname:"Binit shrestha",
     },
    {
        studentid : 102,
        studentname:"Binit shrestha",
    },
    {
        studentid : 103,
        studentname:"Binit shrestha",
    },
    {
        studentid : 104,
        studentname:"Binit shrestha",
    },
    {
        studentid : 105,
        studentname:"Binit shrestha",
    }
];
const attSheet=document.getElementById('attandence');
students.forEach((student)=>{
    const listItem=document.createElement('li');
    listItem.innerHTML=`<div class="st-name">${student.studentname}</div>
    <input type="checkbox" class="st-status rounded-full" data-studentid = '${student.studentid}' data-studentname='${student.studentname}'></input>`;
    listItem.classList.add('flex');
    listItem.classList.add('justify-between');
    attSheet.appendChild(listItem);
})
