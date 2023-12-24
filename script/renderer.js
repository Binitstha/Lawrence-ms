const students=[
    {
        userName:"Binit shrestha",
        uid:"01",
    },
    {
        userName:"Binit shrestha",
        uid:"02",
    },
    {
        userName:"Binit shrestha",
        uid:"03",
    },
    {
        userName:"Binit shrestha",
        uid:"04",
    },
    {
        userName:"Binit shrestha",
        uid:"05",
    }
];
const attSheet=document.getElementById('attandence');
students.forEach((student)=>{
    const listItem=document.createElement('li');
    listItem.innerHTML=`<div class="st-name">${student.userName}</div>
    <input type="checkbox" class="st-status rounded-full " data-userName='${student.userName}' data-uid='${student.uid}' ></input>`;
    listItem.classList.add('flex');
    listItem.classList.add('justify-between');
    attSheet.appendChild(listItem);
})