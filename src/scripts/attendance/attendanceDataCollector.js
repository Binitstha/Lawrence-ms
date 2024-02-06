const submitBtn=document.getElementById('submitBtn');

submitBtn.addEventListener('click',()=>{
    const checkBoxes=document.querySelectorAll('input[type="checkbox"]');
    console.log(Array.from(checkBoxes));
    const stAtt=Array.from(checkBoxes).map((checkBox)=>{
        let id=checkBox.getAttribute('data-id');
        let present=checkBox.checked;
        return {id,present};
    });
    
    fetch('http://localhost:3000/api/attendance/setAttendance',{
        method:'POST',
        headers:{
            'content-type':'application/json',
        },
        body:JSON.stringify(stAtt)
})
    .then((response)=>{
        if(!response.ok){
            throw "Response Error"
        }
        return response.json;
        
    }).then((data)=>{
        console.log(data);
    }).catch((error)=>{
        console.log(error);
    })
})