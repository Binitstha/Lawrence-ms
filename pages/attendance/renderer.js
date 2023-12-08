

fetch('http://localhost:3000/getAttendance',{method:'GET'})
.then((response)=>{
    if(!response.ok){
        console.log("Response Error");
    }
    return response.json();
}).then((data)=>{
    const attSheet=document.getElementById('attandence');
    data.forEach((student)=>{
    const listItem=document.createElement('li');
    listItem.innerHTML=`<div class="st-name ">${student.userName}</div>
    <input type="checkbox" class="st-status rounded-full checkBoxes ml-5" data-userName='${student.userName}' data-email='${student.email}' ></input> `;
    listItem.classList.add('justify-between','flex','items-center','border-b-2','border-gray-400');
    attSheet.appendChild(listItem);
})
})
console.log(students);

