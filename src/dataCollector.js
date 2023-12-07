const submitBtn=document.getElementById('submitBtn');

submitBtn.addEventListener('click',()=>{
    const checkBoxes=document.querySelectorAll('input[type="checkbox"]');
    console.log(Array.from(checkBoxes));
    const stAtt=Array.from(checkBoxes).map((checkBox)=>{
        userName=checkBox.getAttribute('data-userName');
        uid=checkBox.getAttribute('data-uid');
        present=checkBox.checked;
        return {userName,uid,present};
    });
    console.log(stAtt);
})