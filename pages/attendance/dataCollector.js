const submitBtn=document.getElementById('submitBtn');

submitBtn.addEventListener('click',()=>{
    const checkBoxes=document.querySelectorAll('input[type="checkbox"]');
    console.log(Array.from(checkBoxes));
    const stAtt=Array.from(checkBoxes).map((checkBox)=>{
        email=checkBox.getAttribute('data-email');
        present=checkBox.checked;
        return {email,present};
    });
    
    fetch('http://localhost:3000/setAttendance',{
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