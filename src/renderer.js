const students=[
    {
        userName:"Sachet Subedi",
        uid:"01",
    },
    {
        userName:"Sachet Subedi",
        uid:"02",
    },
    {
        userName:"Sachet Subedi",
        uid:"03",
    },
    {
        userName:"Sachet Subedi",
        uid:"04",
    },
    {
        userName:"Sachet Subedi",
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