const passwordInput=document.getElementById('RPassword')
const passwordInput2=document.getElementById('confirmRPassword');
function visibilityChange(e){
    e.classList.contains('fa-eye')? 
    e.classList.replace('fa-eye','fa-eye-slash')&& 
        passwordInput.setAttribute('type',"password"): 
        e.classList.replace('fa-eye-slash','fa-eye')&&
        passwordInput.setAttribute('type',"text");
}
function visibilityChange2(e){
    e.classList.contains('fa-eye')? 
    e.classList.replace('fa-eye','fa-eye-slash')&& 
        passwordInput2.setAttribute('type',"password"): 
        e.classList.replace('fa-eye-slash','fa-eye')&&
        passwordInput2.setAttribute('type',"text");
}