const passwordInput=document.getElementById('password')
function visibilityChange(e){
    e.classList.contains('fa-eye')? 
    e.classList.replace('fa-eye','fa-eye-slash')&& 
        passwordInput.setAttribute('type',"password"): 
        e.classList.replace('fa-eye-slash','fa-eye')&&
        passwordInput.setAttribute('type',"text");
}



const alertModel=document.getElementById('loginModel');
const alertText=document.getElementById('loginModelText');

function alertMessage(text){
    alertText.innerHTML=text;
    alertModel.style.top="-10vh";
    setTimeout(()=>{
    alertModel.style.top="-50vh";
    },1500)
}

